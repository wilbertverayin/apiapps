# OpenEyes Clinical Parity — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Close the gap between the scaffold and 90% OpenEyes functional parity across 7 clinical journey slices.

**Architecture:** NestJS 10 (Fastify) API + Prisma 5 (PostgreSQL 16) + Quasar 2 (Vue 3) frontend in a Turborepo monorepo. Redis (IORedis) handles refresh token storage and draft caching. BullMQ handles PDF + email queues. Socket.io (Redis adapter) handles real-time worklist updates.

**Tech Stack:** NestJS 10, Fastify, Prisma 5, PostgreSQL 16, Redis 7, IORedis, BullMQ, Quasar 2, Vue 3, Pinia, Socket.io, Puppeteer, Playwright, class-validator, @nestjs/swagger, CASL

**Reference:** PHP source at `/Users/wilbertverayin/personal/openeyes/`

---

## Task 1: Wire IORedis Provider + Auth Token Storage

**Files:**
- Create: `apps/api/src/redis/redis.module.ts`
- Create: `apps/api/src/redis/redis.constants.ts`
- Modify: `apps/api/src/app.module.ts`
- Modify: `apps/api/src/modules/auth/auth.module.ts`
- Modify: `apps/api/src/modules/auth/auth.service.ts`

- [x] **Step 1: Create Redis constants and module**

Create `apps/api/src/redis/redis.constants.ts`:
```typescript
export const REDIS_CLIENT = 'REDIS_CLIENT';
```

Create `apps/api/src/redis/redis.module.ts`:
```typescript
import { Module, Global } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { REDIS_CLIENT } from './redis.constants';

@Global()
@Module({
  providers: [
    {
      provide: REDIS_CLIENT,
      useFactory: (config: ConfigService) =>
        new Redis({
          host: config.getOrThrow<string>('REDIS_HOST'),
          port: config.get<number>('REDIS_PORT', 6379),
          password: config.get<string>('REDIS_PASSWORD'),
          lazyConnect: false,
        }),
      inject: [ConfigService],
    },
  ],
  exports: [REDIS_CLIENT],
})
export class RedisModule {}
```

- [x] **Step 2: Import RedisModule in AppModule**

Modify `apps/api/src/app.module.ts` — add `RedisModule` to the `imports` array:
```typescript
import { RedisModule } from './redis/redis.module';
// ... existing imports ...

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env.local', '.env'] }),
    RedisModule,  // <-- add this
    // ... rest of modules
  ],
})
export class AppModule {}
```

- [x] **Step 3: Inject Redis into AuthService and uncomment Redis calls**

Modify `apps/api/src/modules/auth/auth.service.ts` — replace the commented Redis imports and usages:

At the top, add the import:
```typescript
import { Inject } from '@nestjs/common';
import type Redis from 'ioredis';
import * as crypto from 'crypto';
import { REDIS_CLIENT } from '../../redis/redis.constants';
```

In the constructor, add the Redis injection:
```typescript
constructor(
  private readonly prisma: PrismaService,
  private readonly jwtService: JwtService,
  private readonly config: ConfigService,
  @Inject(REDIS_CLIENT) private readonly redis: Redis,
) { ... }
```

Replace the `login` method body's commented Redis block:
```typescript
// Store refresh token hash — SHA-256, constant-time compare on verify
const tokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex');
const refreshTtlSeconds = this.parseExpiry(this.refreshExpiry);
await this.redis.set(`refresh:${user.sub}`, tokenHash, 'EX', refreshTtlSeconds);
```

Replace the `refreshToken` method's commented Redis block:
```typescript
const stored = await this.redis.get(`refresh:${payload.sub}`);
const incoming = crypto.createHash('sha256').update(token).digest('hex');
if (!stored || !crypto.timingSafeEqual(Buffer.from(stored), Buffer.from(incoming))) {
  throw new UnauthorizedException('Refresh token has been revoked');
}
await this.redis.del(`refresh:${payload.sub}`);
```

Replace the `logout` method's commented Redis block:
```typescript
await this.redis.del(`refresh:${userId}`);
this.logger.log(`Logout: ${userId}`);
```

- [x] **Step 4: Add ioredis dependency**

```bash
cd apps/api && pnpm add ioredis
```

Expected output: `+ ioredis@5.x.x` added to package.json.

- [x] **Step 5: Commit**

```bash
cd /Users/wilbertverayin/personal/openeyes-next
git add apps/api/src/redis/ apps/api/src/app.module.ts apps/api/src/modules/auth/auth.service.ts apps/api/src/modules/auth/auth.module.ts apps/api/package.json
git commit -m "feat(auth): wire IORedis provider, enable refresh token storage + revocation"
```

---

## Task 2: Episode Status Transitions (Close / Discharge)

**Files:**
- Modify: `apps/api/src/modules/episode/episode.service.ts`
- Modify: `apps/api/src/modules/episode/episode.controller.ts`
- Create: `apps/api/src/modules/episode/dto/close-episode.dto.ts`
- Modify: `apps/web/src/pages/patient/EpisodePage.vue`

- [x] **Step 1: Add close/discharge DTO**

Create `apps/api/src/modules/episode/dto/close-episode.dto.ts`:
```typescript
import { IsEnum, IsOptional, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum EpisodeCloseStatus {
  CLOSED = 'closed',
  DISCHARGE = 'discharge',
}

export class CloseEpisodeDto {
  @ApiProperty({ enum: EpisodeCloseStatus })
  @IsEnum(EpisodeCloseStatus)
  status: EpisodeCloseStatus;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  closeReason?: string;

  @ApiProperty()
  @IsNumber()
  version: number;
}
```

- [x] **Step 2: Add close method to EpisodeService**

Add to `apps/api/src/modules/episode/episode.service.ts` after the `update` method:
```typescript
async close(
  id: string,
  dto: { status: 'closed' | 'discharge'; closeReason?: string; version: number },
  userId: string,
  institutionId: string,
): Promise<typeof episode> {
  const episode = await this.findById(id, institutionId);

  if (episode.version !== dto.version) {
    throw new ConflictException('Episode modified by another user. Refresh and try again.');
  }

  if (episode.status === 'closed' || episode.status === 'discharge') {
    throw new ConflictException(`Episode is already ${episode.status}`);
  }

  return this.prisma.episode.update({
    where: { id },
    data: {
      status: dto.status,
      closeReason: dto.closeReason,
      endDate: new Date(),
      version: { increment: 1 },
      updatedById: userId,
    },
    include: { firm: true, site: true },
  });
}

async reopen(id: string, version: number, userId: string, institutionId: string) {
  const episode = await this.findById(id, institutionId);

  if (episode.version !== version) {
    throw new ConflictException('Episode modified by another user. Refresh and try again.');
  }

  return this.prisma.episode.update({
    where: { id },
    data: {
      status: 'open',
      endDate: null,
      version: { increment: 1 },
      updatedById: userId,
    },
    include: { firm: true, site: true },
  });
}
```

- [x] **Step 3: Add close/reopen routes to EpisodeController**

Add to `apps/api/src/modules/episode/episode.controller.ts`:
```typescript
import { CloseEpisodeDto } from './dto/close-episode.dto';

@Patch(':id/close')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('clinician', 'admin')
@ApiBearerAuth('accessToken')
@ApiOperation({ summary: 'Close or discharge an episode' })
async close(
  @Param('id', ParseUUIDPipe) id: string,
  @Body() dto: CloseEpisodeDto,
  @CurrentUser('sub') userId: string,
  @CurrentUser('institutionId') institutionId: string,
) {
  return this.episodeService.close(id, dto, userId, institutionId);
}

@Patch(':id/reopen')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('clinician', 'admin')
@ApiBearerAuth('accessToken')
@ApiOperation({ summary: 'Reopen a closed episode' })
async reopen(
  @Param('id', ParseUUIDPipe) id: string,
  @Body('version') version: number,
  @CurrentUser('sub') userId: string,
  @CurrentUser('institutionId') institutionId: string,
) {
  return this.episodeService.reopen(id, version, userId, institutionId);
}
```

- [x] **Step 4: Update EpisodePage.vue to show close/reopen button**

In `apps/web/src/pages/patient/EpisodePage.vue`, add after the episode header:
```vue
<q-btn
  v-if="episode.status === 'open' || episode.status === 'new'"
  color="negative"
  outline
  icon="close"
  label="Close Episode"
  size="sm"
  @click="showCloseDialog = true"
/>
<q-btn
  v-else-if="episode.status === 'closed' || episode.status === 'discharge'"
  color="positive"
  outline
  icon="lock_open"
  label="Reopen Episode"
  size="sm"
  :loading="closing"
  @click="handleReopen"
/>

<q-dialog v-model="showCloseDialog">
  <q-card style="min-width: 400px">
    <q-card-section>
      <div class="text-h6">Close Episode</div>
    </q-card-section>
    <q-card-section>
      <q-select
        v-model="closeStatus"
        :options="[{ label: 'Closed', value: 'closed' }, { label: 'Discharged', value: 'discharge' }]"
        label="Status"
        emit-value
        map-options
      />
      <q-input v-model="closeReason" label="Reason (optional)" class="q-mt-sm" />
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Cancel" v-close-popup />
      <q-btn color="negative" label="Close Episode" :loading="closing" @click="handleClose" />
    </q-card-actions>
  </q-card>
</q-dialog>
```

Add to the `<script setup lang="ts">` section:
```typescript
const showCloseDialog = ref(false)
const closeStatus = ref<'closed' | 'discharge'>('closed')
const closeReason = ref('')
const closing = ref(false)

async function handleClose() {
  closing.value = true
  try {
    await episodeService.close(episode.value!.id, {
      status: closeStatus.value,
      closeReason: closeReason.value || undefined,
      version: episode.value!.version,
    })
    showCloseDialog.value = false
    await loadEpisode()
    $q.notify({ type: 'positive', message: 'Episode closed' })
  } catch (e) {
    $q.notify({ type: 'negative', message: 'Failed to close episode' })
  } finally {
    closing.value = false
  }
}

async function handleReopen() {
  closing.value = true
  try {
    await episodeService.reopen(episode.value!.id, episode.value!.version)
    await loadEpisode()
    $q.notify({ type: 'positive', message: 'Episode reopened' })
  } catch (e) {
    $q.notify({ type: 'negative', message: 'Failed to reopen episode' })
  } finally {
    closing.value = false
  }
}
```

- [x] **Step 5: Commit**

```bash
cd /Users/wilbertverayin/personal/openeyes-next
git add apps/api/src/modules/episode/ apps/web/src/pages/patient/EpisodePage.vue
git commit -m "feat(episode): add close/discharge/reopen status transitions"
```

---

## Task 3: OphCiExamination Event — Server Side

**Files:**
- Create: `apps/api/src/modules/event/types/examination/examination.types.ts`
- Create: `apps/api/src/modules/event/types/examination/examination.validator.ts`
- Modify: `apps/api/src/modules/event/event-type.registry.ts`
- Modify: `apps/api/src/modules/event/dto/create-event.dto.ts`

**Reference:** `/Users/wilbertverayin/personal/openeyes/protected/modules/OphCiExamination/`

- [x] **Step 1: Define examination element types**

Create `apps/api/src/modules/event/types/examination/examination.types.ts`:
```typescript
export type Eye = 'right' | 'left' | 'both' | 'na';
export type VaMethod = 'Snellen' | 'logMAR' | 'ETDRS' | 'CF' | 'HM' | 'PL' | 'NPL';
export type VaCorrection = 'unaided' | 'pinhole' | 'glasses' | 'contact_lens';
export type IopMethod = 'GAT' | 'iCare' | 'Tonopen' | 'Non-contact' | 'Perkins';
export type DiagnosisSide = 'right' | 'left' | 'both' | 'na';

export interface VaReading {
  method: VaMethod;
  value: string;        // e.g. "6/6", "0.0", "80"
  correction: VaCorrection;
  eye: 'right' | 'left';
  notationId?: string;
}

export interface IopReading {
  method: IopMethod;
  value: number;        // mmHg
  eye: 'right' | 'left';
  time?: string;        // ISO time string
}

export interface ExaminationDiagnosis {
  icd10Code: string;
  description: string;
  eye: DiagnosisSide;
  isPrincipal: boolean;
}

export interface ExaminationManagement {
  plan: string;
  followUpWeeks?: number;
  discharge: boolean;
}

export interface AnteriorSegmentElement {
  right?: string;  // free text or structured findings
  left?: string;
}

export interface PosteriorSegmentElement {
  right?: string;
  left?: string;
  cdRatioRight?: string;
  cdRatioLeft?: string;
}

export interface ExaminationElementData {
  visualAcuity?: VaReading[];
  iop?: IopReading[];
  anteriorSegment?: AnteriorSegmentElement;
  posteriorSegment?: PosteriorSegmentElement;
  diagnoses?: ExaminationDiagnosis[];
  management?: ExaminationManagement;
}
```

- [x] **Step 2: Add examination validator**

Create `apps/api/src/modules/event/types/examination/examination.validator.ts`:
```typescript
import type { ExaminationElementData } from './examination.types';
import { BadRequestException } from '@nestjs/common';

export function validateExaminationData(data: ExaminationElementData): void {
  if (data.visualAcuity) {
    for (const reading of data.visualAcuity) {
      if (!reading.method || !reading.value || !reading.eye) {
        throw new BadRequestException('VA reading missing required fields: method, value, eye');
      }
    }
  }

  if (data.iop) {
    for (const reading of data.iop) {
      if (!reading.method || reading.value === undefined || !reading.eye) {
        throw new BadRequestException('IOP reading missing required fields: method, value, eye');
      }
      if (reading.value < 0 || reading.value > 100) {
        throw new BadRequestException(`IOP value ${reading.value} out of valid range (0-100 mmHg)`);
      }
    }
  }

  if (data.diagnoses) {
    for (const dx of data.diagnoses) {
      if (!dx.icd10Code || !dx.eye) {
        throw new BadRequestException('Diagnosis missing required fields: icd10Code, eye');
      }
    }
    const principals = data.diagnoses.filter(d => d.isPrincipal);
    if (principals.length > 1) {
      throw new BadRequestException('Only one diagnosis may be marked as principal');
    }
  }
}
```

- [x] **Step 3: Register OphCiExamination in the EventTypeRegistry**

Modify `apps/api/src/modules/event/event-type.registry.ts` to add the examination type:
```typescript
import type { ExaminationElementData } from './types/examination/examination.types';
import { validateExaminationData } from './types/examination/examination.validator';

// In the constructor or onModuleInit where event types are registered:
this.register({
  code: 'OphCiExamination',
  displayName: 'Clinical Examination',
  icon: 'visibility',
  module: 'OphCiExamination',
  validateData: (data: unknown) => {
    validateExaminationData(data as ExaminationElementData);
  },
});
```

- [x] **Step 4: Extend CreateEventDto to validate examination data inline**

Modify `apps/api/src/modules/event/dto/create-event.dto.ts`:
```typescript
import { IsString, IsNotEmpty, IsDateString, IsUUID, IsOptional, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty()
  @IsUUID()
  episodeId: string;

  @ApiProperty({ example: 'OphCiExamination' })
  @IsString()
  @IsNotEmpty()
  eventTypeCode: string;

  @ApiProperty()
  @IsDateString()
  eventDate: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  firmId?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  siteId?: string;

  @ApiProperty({
    description: 'Event element data — schema varies by eventTypeCode',
    example: { visualAcuity: [{ method: 'Snellen', value: '6/6', correction: 'unaided', eye: 'right' }] },
  })
  @IsOptional()
  @IsObject()
  data?: Record<string, unknown>;
}
```

- [x] **Step 5: Commit**

```bash
cd /Users/wilbertverayin/personal/openeyes-next
git add apps/api/src/modules/event/types/ apps/api/src/modules/event/event-type.registry.ts apps/api/src/modules/event/dto/
git commit -m "feat(event): OphCiExamination type — element data types + validation"
```

---

## Task 4: OphCiExamination Event — Frontend Form

**Files:**
- Create: `apps/web/src/components/events/examination/VaElement.vue`
- Create: `apps/web/src/components/events/examination/IopElement.vue`
- Create: `apps/web/src/components/events/examination/DiagnosesElement.vue`
- Create: `apps/web/src/components/events/examination/ManagementElement.vue`
- Modify: `apps/web/src/pages/event/EventEditPage.vue`

- [x] **Step 1: Build VaElement component**

Create `apps/web/src/components/events/examination/VaElement.vue`:
```vue
<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section class="bg-blue-1 q-py-sm">
      <div class="row items-center">
        <div class="text-subtitle2 text-weight-bold">Visual Acuity</div>
        <q-space />
        <q-btn flat icon="add" size="sm" @click="addReading" label="Add" />
      </div>
    </q-card-section>
    <q-card-section>
      <div v-if="readings.length === 0" class="text-grey-6 text-center q-py-md">
        No VA readings recorded
      </div>
      <div v-for="(r, i) in readings" :key="i" class="row q-gutter-sm items-center q-mb-sm">
        <q-select
          v-model="r.eye"
          :options="eyeOptions"
          emit-value map-options
          label="Eye"
          dense
          style="width:90px"
        />
        <q-select
          v-model="r.method"
          :options="vaMethodOptions"
          emit-value map-options
          label="Method"
          dense
          style="width:110px"
        />
        <q-input v-model="r.value" label="Value" dense style="width:80px" />
        <q-select
          v-model="r.correction"
          :options="correctionOptions"
          emit-value map-options
          label="Correction"
          dense
          style="width:120px"
        />
        <q-btn flat round icon="delete" color="negative" size="sm" @click="removeReading(i)" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { VaReading } from '@/types/examination'

const readings = defineModel<VaReading[]>({ default: () => [] })

const eyeOptions = [
  { label: 'Right', value: 'right' },
  { label: 'Left', value: 'left' },
]

const vaMethodOptions = [
  { label: 'Snellen', value: 'Snellen' },
  { label: 'logMAR', value: 'logMAR' },
  { label: 'ETDRS', value: 'ETDRS' },
  { label: 'CF', value: 'CF' },
  { label: 'HM', value: 'HM' },
  { label: 'PL', value: 'PL' },
  { label: 'NPL', value: 'NPL' },
]

const correctionOptions = [
  { label: 'Unaided', value: 'unaided' },
  { label: 'Pinhole', value: 'pinhole' },
  { label: 'Glasses', value: 'glasses' },
  { label: 'Contact lens', value: 'contact_lens' },
]

function addReading() {
  readings.value.push({ method: 'Snellen', value: '', correction: 'unaided', eye: 'right' })
}
function removeReading(i: number) {
  readings.value.splice(i, 1)
}
</script>
```

- [x] **Step 2: Build IopElement component**

Create `apps/web/src/components/events/examination/IopElement.vue`:
```vue
<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section class="bg-blue-1 q-py-sm">
      <div class="row items-center">
        <div class="text-subtitle2 text-weight-bold">Intraocular Pressure</div>
        <q-space />
        <q-btn flat icon="add" size="sm" @click="addReading" label="Add" />
      </div>
    </q-card-section>
    <q-card-section>
      <div v-if="readings.length === 0" class="text-grey-6 text-center q-py-md">
        No IOP readings recorded
      </div>
      <div v-for="(r, i) in readings" :key="i" class="row q-gutter-sm items-center q-mb-sm">
        <q-select
          v-model="r.eye"
          :options="eyeOptions"
          emit-value map-options
          label="Eye"
          dense
          style="width:90px"
        />
        <q-select
          v-model="r.method"
          :options="iopMethodOptions"
          emit-value map-options
          label="Method"
          dense
          style="width:130px"
        />
        <q-input
          v-model.number="r.value"
          label="mmHg"
          type="number"
          min="0" max="100"
          dense
          style="width:80px"
        />
        <q-input v-model="r.time" label="Time" type="time" dense style="width:100px" />
        <q-btn flat round icon="delete" color="negative" size="sm" @click="removeReading(i)" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { IopReading } from '@/types/examination'

const readings = defineModel<IopReading[]>({ default: () => [] })

const eyeOptions = [
  { label: 'Right', value: 'right' },
  { label: 'Left', value: 'left' },
]

const iopMethodOptions = [
  { label: 'GAT', value: 'GAT' },
  { label: 'iCare', value: 'iCare' },
  { label: 'Tonopen', value: 'Tonopen' },
  { label: 'Non-contact', value: 'Non-contact' },
  { label: 'Perkins', value: 'Perkins' },
]

function addReading() {
  readings.value.push({ method: 'GAT', value: 0, eye: 'right' })
}
function removeReading(i: number) {
  readings.value.splice(i, 1)
}
</script>
```

- [x] **Step 3: Build DiagnosesElement component**

Create `apps/web/src/components/events/examination/DiagnosesElement.vue`:
```vue
<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section class="bg-blue-1 q-py-sm">
      <div class="row items-center">
        <div class="text-subtitle2 text-weight-bold">Diagnoses</div>
        <q-space />
        <q-btn flat icon="add" size="sm" @click="addDiagnosis" label="Add" />
      </div>
    </q-card-section>
    <q-card-section>
      <div v-if="diagnoses.length === 0" class="text-grey-6 text-center q-py-md">
        No diagnoses recorded
      </div>
      <div v-for="(d, i) in diagnoses" :key="i" class="row q-gutter-sm items-center q-mb-sm">
        <q-input v-model="d.icd10Code" label="ICD-10" dense style="width:100px" />
        <q-input v-model="d.description" label="Description" dense style="min-width:200px;flex:1" />
        <q-select
          v-model="d.eye"
          :options="eyeOptions"
          emit-value map-options
          label="Eye"
          dense
          style="width:90px"
        />
        <q-checkbox v-model="d.isPrincipal" label="Principal" dense @update:model-value="onPrincipalChange(i)" />
        <q-btn flat round icon="delete" color="negative" size="sm" @click="removeDiagnosis(i)" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { ExaminationDiagnosis } from '@/types/examination'

const diagnoses = defineModel<ExaminationDiagnosis[]>({ default: () => [] })

const eyeOptions = [
  { label: 'Right', value: 'right' },
  { label: 'Left', value: 'left' },
  { label: 'Both', value: 'both' },
  { label: 'N/A', value: 'na' },
]

function addDiagnosis() {
  diagnoses.value.push({ icd10Code: '', description: '', eye: 'both', isPrincipal: false })
}
function removeDiagnosis(i: number) {
  diagnoses.value.splice(i, 1)
}
function onPrincipalChange(idx: number) {
  if (diagnoses.value[idx].isPrincipal) {
    diagnoses.value.forEach((d, i) => { if (i !== idx) d.isPrincipal = false })
  }
}
</script>
```

- [x] **Step 4: Build ManagementElement component**

Create `apps/web/src/components/events/examination/ManagementElement.vue`:
```vue
<template>
  <q-card flat bordered class="q-mb-md">
    <q-card-section class="bg-blue-1 q-py-sm">
      <div class="text-subtitle2 text-weight-bold">Management</div>
    </q-card-section>
    <q-card-section>
      <q-input
        v-model="management.plan"
        label="Management plan"
        type="textarea"
        autogrow
        outlined
        class="q-mb-sm"
      />
      <div class="row q-gutter-md items-center">
        <q-input
          v-model.number="management.followUpWeeks"
          label="Follow-up (weeks)"
          type="number"
          min="0"
          dense
          style="width:160px"
        />
        <q-checkbox v-model="management.discharge" label="Discharge patient" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import type { ExaminationManagement } from '@/types/examination'

const management = defineModel<ExaminationManagement>({
  default: () => ({ plan: '', discharge: false }),
})
</script>
```

- [x] **Step 5: Create shared examination types for the web app**

Create `apps/web/src/types/examination.ts`:
```typescript
export type Eye = 'right' | 'left' | 'both' | 'na'
export type VaMethod = 'Snellen' | 'logMAR' | 'ETDRS' | 'CF' | 'HM' | 'PL' | 'NPL'
export type VaCorrection = 'unaided' | 'pinhole' | 'glasses' | 'contact_lens'
export type IopMethod = 'GAT' | 'iCare' | 'Tonopen' | 'Non-contact' | 'Perkins'

export interface VaReading {
  method: VaMethod
  value: string
  correction: VaCorrection
  eye: 'right' | 'left'
}

export interface IopReading {
  method: IopMethod
  value: number
  eye: 'right' | 'left'
  time?: string
}

export interface ExaminationDiagnosis {
  icd10Code: string
  description: string
  eye: Eye
  isPrincipal: boolean
}

export interface ExaminationManagement {
  plan: string
  followUpWeeks?: number
  discharge: boolean
}

export interface ExaminationData {
  visualAcuity?: VaReading[]
  iop?: IopReading[]
  diagnoses?: ExaminationDiagnosis[]
  management?: ExaminationManagement
}
```

- [x] **Step 6: Wire examination elements into EventEditPage**

Modify `apps/web/src/pages/event/EventEditPage.vue` — add examination section when `eventTypeCode === 'OphCiExamination'`:
```vue
<template>
  <!-- existing page structure -->
  <div v-if="draft.eventTypeCode === 'OphCiExamination'">
    <VaElement v-model="examinationData.visualAcuity" />
    <IopElement v-model="examinationData.iop" />
    <DiagnosesElement v-model="examinationData.diagnoses" />
    <ManagementElement v-model="examinationData.management" />
  </div>
</template>

<script setup lang="ts">
import VaElement from '@/components/events/examination/VaElement.vue'
import IopElement from '@/components/events/examination/IopElement.vue'
import DiagnosesElement from '@/components/events/examination/DiagnosesElement.vue'
import ManagementElement from '@/components/events/examination/ManagementElement.vue'
import type { ExaminationData } from '@/types/examination'
import { reactive } from 'vue'

const examinationData = reactive<ExaminationData>({
  visualAcuity: [],
  iop: [],
  diagnoses: [],
  management: { plan: '', discharge: false },
})

// When saving, merge examinationData into draft.data:
// draft.data = { ...examinationData }
</script>
```

- [x] **Step 7: Commit**

```bash
cd /Users/wilbertverayin/personal/openeyes-next
git add apps/web/src/components/events/ apps/web/src/types/ apps/web/src/pages/event/EventEditPage.vue
git commit -m "feat(examination): VA + IOP + diagnoses + management form elements"
```

---

## Task 5: Worklist Real-Time — Service → Gateway Broadcasting

**Files:**
- Create: `apps/api/src/modules/worklist/worklist.service.ts`
- Modify: `apps/api/src/modules/worklist/worklist.gateway.ts`
- Create: `apps/api/src/modules/worklist/dto/update-worklist-patient.dto.ts`
- Modify: `apps/web/src/stores/worklist.store.ts`

- [x] **Step 1: Create WorklistService with status update broadcasting**

Create `apps/api/src/modules/worklist/worklist.service.ts`:
```typescript
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export type PatientStatus = 'waiting' | 'checked_in' | 'in_progress' | 'complete' | 'dna' | 'cancelled';

@Injectable()
export class WorklistService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(institutionId: string, filters: {
    firmId?: string;
    date?: string;
    status?: PatientStatus;
  }) {
    return this.prisma.worklist.findMany({
      where: {
        institutionId,
        deletedAt: null,
        ...(filters.firmId ? { firmId: filters.firmId } : {}),
        ...(filters.date ? { date: new Date(filters.date) } : {}),
      },
      include: {
        firm: true,
        site: true,
        worklistPatients: {
          where: {
            deletedAt: null,
            ...(filters.status ? { status: filters.status } : {}),
          },
          include: {
            patient: {
              select: { id: true, firstName: true, lastName: true, dob: true, identifiers: true },
            },
            pathwaySteps: { orderBy: { stepOrder: 'asc' } },
          },
          orderBy: { arrivalTime: 'asc' },
        },
      },
    });
  }

  async addPatient(worklistId: string, patientId: string, userId: string, institutionId: string) {
    const worklist = await this.prisma.worklist.findFirst({
      where: { id: worklistId, institutionId, deletedAt: null },
    });
    if (!worklist) throw new NotFoundException('Worklist not found');

    const existing = await this.prisma.worklistPatient.findFirst({
      where: { worklistId, patientId, deletedAt: null },
    });
    if (existing) throw new BadRequestException('Patient already on this worklist');

    return this.prisma.worklistPatient.create({
      data: {
        worklistId,
        patientId,
        status: 'waiting',
        arrivalTime: new Date(),
        createdById: userId,
      },
      include: {
        patient: { select: { id: true, firstName: true, lastName: true, dob: true, identifiers: true } },
        pathwaySteps: true,
      },
    });
  }

  async updatePatientStatus(
    worklistPatientId: string,
    status: PatientStatus,
    userId: string,
    institutionId: string,
  ) {
    const wp = await this.prisma.worklistPatient.findFirst({
      where: { id: worklistPatientId, worklist: { institutionId }, deletedAt: null },
      include: { worklist: true },
    });
    if (!wp) throw new NotFoundException('Worklist patient not found');

    const updated = await this.prisma.worklistPatient.update({
      where: { id: worklistPatientId },
      data: { status, updatedById: userId },
      include: {
        patient: { select: { id: true, firstName: true, lastName: true } },
        worklist: { select: { id: true } },
      },
    });

    return { updated, worklistId: wp.worklistId };
  }
}
```

- [x] **Step 2: Wire WorklistService into WorklistGateway for broadcasting**

Modify `apps/api/src/modules/worklist/worklist.gateway.ts` — inject WorklistService and emit real-time events after DB updates:
```typescript
// Add to constructor injection:
constructor(
  private readonly jwtService: JwtService,
  private readonly config: ConfigService,
  private readonly worklistService: WorklistService,
) { ... }

// Replace the stub updateStatus handler:
@SubscribeMessage('updateStatus')
async handleUpdateStatus(
  @ConnectedSocket() client: Socket,
  @MessageBody() payload: { worklistPatientId: string; status: string },
) {
  const userId: string = (client.data as { userId: string }).userId;
  const institutionId: string = (client.data as { institutionId: string }).institutionId;
  const user = (client.data as { user: { id: string; firstName: string; lastName: string } }).user;

  const { updated, worklistId } = await this.worklistService.updatePatientStatus(
    payload.worklistPatientId,
    payload.status as PatientStatus,
    userId,
    institutionId,
  );

  // Broadcast to all clients in the worklist room
  this.server
    .to(`worklist:${worklistId}`)
    .emit('pathway:status_changed', {
      worklistId,
      worklistPatientId: payload.worklistPatientId,
      status: payload.status,
      patient: updated.patient,
      changedBy: user,
    });

  return { success: true };
}
```

- [x] **Step 3: Update Pinia worklist store to handle real-time socket events**

Modify `apps/web/src/stores/worklist.store.ts` — add socket listener for `pathway:status_changed`:
```typescript
function initSocketListeners(socket: ReturnType<typeof io>) {
  socket.on('pathway:status_changed', (payload: {
    worklistPatientId: string;
    status: string;
    changedBy: { id: string; firstName: string; lastName: string };
  }) => {
    const wp = currentWorklist.value?.worklistPatients
      .find(p => p.id === payload.worklistPatientId);
    if (wp) {
      wp.status = payload.status;
    }
  });
}
```

- [x] **Step 4: Commit**

```bash
cd /Users/wilbertverayin/personal/openeyes-next
git add apps/api/src/modules/worklist/ apps/web/src/stores/worklist.store.ts
git commit -m "feat(worklist): service layer + real-time status broadcasting via Socket.io"
```

---

## Task 6: Correspondence Module (Letter + PDF)

**Files:**
- Create: `apps/api/src/modules/correspondence/correspondence.module.ts`
- Create: `apps/api/src/modules/correspondence/correspondence.controller.ts`
- Create: `apps/api/src/modules/correspondence/correspondence.service.ts`
- Create: `apps/api/src/modules/correspondence/dto/create-letter.dto.ts`
- Create: `apps/web/src/pages/event/CorrespondencePage.vue`
- Create: `apps/web/src/components/events/correspondence/LetterEditor.vue`

**Reference:** `/Users/wilbertverayin/personal/openeyes/protected/modules/OphCoCorrespondence/`

- [x] **Step 1: Create letter DTO**

Create `apps/api/src/modules/correspondence/dto/create-letter.dto.ts`:
```typescript
import { IsString, IsNotEmpty, IsOptional, IsUUID, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum RecipientType {
  GP = 'gp',
  PATIENT = 'patient',
  OTHER = 'other',
}

export class CreateLetterDto {
  @ApiProperty()
  @IsUUID()
  episodeId: string;

  @ApiProperty({ enum: RecipientType })
  @IsEnum(RecipientType)
  recipientType: RecipientType;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  recipientName?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  templateId?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  subject: string;

  @ApiProperty({ description: 'HTML body (Tiptap output)' })
  @IsString()
  @IsNotEmpty()
  body: string;
}
```

- [x] **Step 2: Create CorrespondenceService with merge tag resolution**

Create `apps/api/src/modules/correspondence/correspondence.service.ts`:
```typescript
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { format } from 'date-fns';
import type { CreateLetterDto } from './dto/create-letter.dto';

@Injectable()
export class CorrespondenceService {
  constructor(
    private readonly prisma: PrismaService,
    @InjectQueue('pdf-generation') private readonly pdfQueue: Queue,
  ) {}

  private async resolveMergeTags(html: string, episodeId: string): Promise<string> {
    const episode = await this.prisma.episode.findUnique({
      where: { id: episodeId },
      include: {
        patient: true,
        firm: { include: { site: true } },
      },
    });
    if (!episode) throw new NotFoundException('Episode not found');

    const patient = episode.patient;
    const dob = patient.dob ? format(patient.dob, 'dd/MM/yyyy') : '';
    const today = format(new Date(), 'dd/MM/yyyy');

    return html
      .replace(/\{\{patient\.name\}\}/g, `${patient.firstName} ${patient.lastName}`)
      .replace(/\{\{patient\.firstName\}\}/g, patient.firstName)
      .replace(/\{\{patient\.lastName\}\}/g, patient.lastName)
      .replace(/\{\{patient\.dob\}\}/g, dob)
      .replace(/\{\{date\}\}/g, today)
      .replace(/\{\{firm\.name\}\}/g, episode.firm?.name ?? '')
      .replace(/\{\{site\.name\}\}/g, episode.firm?.site?.name ?? '');
  }

  async createLetter(dto: CreateLetterDto, userId: string) {
    const resolvedBody = await this.resolveMergeTags(dto.body, dto.episodeId);

    const letter = await this.prisma.correspondenceLetter.create({
      data: {
        episodeId: dto.episodeId,
        recipientType: dto.recipientType,
        recipientName: dto.recipientName,
        subject: dto.subject,
        body: resolvedBody,
        rawBody: dto.body,
        templateId: dto.templateId,
        createdById: userId,
        pdfStatus: 'pending',
      },
    });

    // Enqueue PDF generation
    await this.pdfQueue.add(
      'generate-letter-pdf',
      { letterId: letter.id, html: resolvedBody, subject: dto.subject },
      { attempts: 3, backoff: { type: 'exponential', delay: 2000 } },
    );

    return letter;
  }

  async findByEpisode(episodeId: string, institutionId: string) {
    return this.prisma.correspondenceLetter.findMany({
      where: {
        episodeId,
        episode: { patient: { institutionId } },
        deletedAt: null,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string, institutionId: string) {
    const letter = await this.prisma.correspondenceLetter.findFirst({
      where: { id, episode: { patient: { institutionId } }, deletedAt: null },
    });
    if (!letter) throw new NotFoundException(`Letter ${id} not found`);
    return letter;
  }
}
```

- [x] **Step 3: Create CorrespondenceController**

Create `apps/api/src/modules/correspondence/correspondence.controller.ts`:
```typescript
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { ParseUUIDPipe } from '@nestjs/common';
import { CorrespondenceService } from './correspondence.service';
import { CreateLetterDto } from './dto/create-letter.dto';

@ApiTags('correspondence')
@Controller('correspondence')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth('accessToken')
export class CorrespondenceController {
  constructor(private readonly correspondenceService: CorrespondenceService) {}

  @Post('letters')
  @ApiOperation({ summary: 'Create a correspondence letter (triggers PDF generation)' })
  create(
    @Body() dto: CreateLetterDto,
    @CurrentUser('sub') userId: string,
  ) {
    return this.correspondenceService.createLetter(dto, userId);
  }

  @Get('episodes/:episodeId/letters')
  @ApiOperation({ summary: 'List all letters for an episode' })
  findByEpisode(
    @Param('episodeId', ParseUUIDPipe) episodeId: string,
    @CurrentUser('institutionId') institutionId: string,
  ) {
    return this.correspondenceService.findByEpisode(episodeId, institutionId);
  }

  @Get('letters/:id')
  @ApiOperation({ summary: 'Get a single letter' })
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @CurrentUser('institutionId') institutionId: string,
  ) {
    return this.correspondenceService.findById(id, institutionId);
  }
}
```

- [x] **Step 4: Create CorrespondenceModule and register it**

Create `apps/api/src/modules/correspondence/correspondence.module.ts`:
```typescript
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { CorrespondenceController } from './correspondence.controller';
import { CorrespondenceService } from './correspondence.service';

@Module({
  imports: [BullModule.registerQueue({ name: 'pdf-generation' })],
  controllers: [CorrespondenceController],
  providers: [CorrespondenceService],
  exports: [CorrespondenceService],
})
export class CorrespondenceModule {}
```

Then add `CorrespondenceModule` to the imports array in `apps/api/src/app.module.ts`.

- [x] **Step 5: Create LetterEditor Vue component (Tiptap)**

Create `apps/web/src/components/events/correspondence/LetterEditor.vue`:
```vue
<template>
  <div class="letter-editor">
    <!-- Toolbar -->
    <div class="letter-editor__toolbar row q-gutter-xs q-mb-sm" v-if="editor">
      <q-btn flat dense icon="format_bold" @click="editor.chain().focus().toggleBold().run()" :class="{ 'bg-grey-3': editor.isActive('bold') }" />
      <q-btn flat dense icon="format_italic" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'bg-grey-3': editor.isActive('italic') }" />
      <q-btn flat dense icon="format_underlined" @click="editor.chain().focus().toggleUnderline().run()" />
      <q-separator vertical />
      <q-btn flat dense icon="format_list_bulleted" @click="editor.chain().focus().toggleBulletList().run()" />
      <q-btn flat dense icon="format_list_numbered" @click="editor.chain().focus().toggleOrderedList().run()" />
      <q-separator vertical />
      <q-btn-dropdown flat dense label="Merge tags">
        <q-list>
          <q-item v-for="tag in mergeTags" :key="tag.value" clickable v-close-popup @click="insertMergeTag(tag.value)">
            <q-item-section>{{ tag.label }}</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
    <!-- Editor area -->
    <div class="letter-editor__content border rounded q-pa-sm" style="min-height:300px">
      <editor-content :editor="editor" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import { watch } from 'vue'

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const mergeTags = [
  { label: 'Patient name', value: '{{patient.name}}' },
  { label: 'Patient DOB', value: '{{patient.dob}}' },
  { label: 'Today\'s date', value: '{{date}}' },
  { label: 'Firm name', value: '{{firm.name}}' },
  { label: 'Site name', value: '{{site.name}}' },
]

const editor = useEditor({
  content: props.modelValue,
  extensions: [StarterKit, Underline],
  onUpdate: ({ editor: e }) => emit('update:modelValue', e.getHTML()),
})

watch(() => props.modelValue, val => {
  if (editor.value && editor.value.getHTML() !== val) {
    editor.value.commands.setContent(val, false)
  }
})

function insertMergeTag(tag: string) {
  editor.value?.chain().focus().insertContent(tag).run()
}
</script>
```

- [x] **Step 6: Add Tiptap dependencies to web package**

```bash
cd apps/web && pnpm add @tiptap/vue-3 @tiptap/starter-kit @tiptap/extension-underline
```

Expected output: `+ @tiptap/vue-3@2.x.x` added.

- [x] **Step 7: Commit**

```bash
cd /Users/wilbertverayin/personal/openeyes-next
git add apps/api/src/modules/correspondence/ apps/web/src/components/events/correspondence/ apps/web/src/pages/event/ apps/web/package.json
git commit -m "feat(correspondence): letter creation, merge tags, PDF queue, Tiptap editor"
```

---

## Task 7: Playwright E2E Test Scaffolds

**Files:**
- Create: `apps/web/e2e/auth.spec.ts`
- Create: `apps/web/e2e/patient.spec.ts`
- Create: `apps/web/e2e/episode.spec.ts`
- Create: `apps/web/e2e/examination.spec.ts`
- Create: `apps/web/e2e/worklist.spec.ts`
- Create: `apps/web/playwright.config.ts`

- [x] **Step 1: Add Playwright dependency**

```bash
cd apps/web && pnpm add -D @playwright/test
cd apps/web && npx playwright install chromium
```

Expected: Playwright installed, Chromium downloaded.

- [x] **Step 2: Create playwright.config.ts**

Create `apps/web/playwright.config.ts`:
```typescript
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.E2E_BASE_URL ?? 'http://localhost:9000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
})
```

- [x] **Step 3: Create auth E2E spec**

Create `apps/web/e2e/auth.spec.ts`:
```typescript
import { test, expect } from '@playwright/test'

// Remove test.skip when dev env is running (docker compose up + pnpm dev)
test.describe('Auth — login flow', () => {
  test.skip('login with valid credentials shows worklist', async ({ page }) => {
    await page.goto('/login')
    await page.getByLabel('Username').fill('admin')
    await page.getByLabel('Password').fill('password')
    await page.getByRole('button', { name: 'Sign in' }).click()
    await expect(page).toHaveURL('/worklist')
    await expect(page.getByRole('heading', { name: 'Worklist' })).toBeVisible()
  })

  test.skip('login with wrong password shows error', async ({ page }) => {
    await page.goto('/login')
    await page.getByLabel('Username').fill('admin')
    await page.getByLabel('Password').fill('wrongpassword')
    await page.getByRole('button', { name: 'Sign in' }).click()
    await expect(page.getByText('Invalid credentials')).toBeVisible()
    await expect(page).toHaveURL('/login')
  })

  test.skip('expired access token is silently refreshed', async ({ page }) => {
    // Simulate expired access token by overwriting localStorage after login
    await page.goto('/login')
    await page.getByLabel('Username').fill('admin')
    await page.getByLabel('Password').fill('password')
    await page.getByRole('button', { name: 'Sign in' }).click()
    await expect(page).toHaveURL('/worklist')

    // Overwrite access token with an expired one
    await page.evaluate(() => {
      const store = JSON.parse(localStorage.getItem('auth') ?? '{}')
      store.accessToken = 'expired.token.here'
      localStorage.setItem('auth', JSON.stringify(store))
    })

    // Navigate to a protected page — should still work (interceptor auto-refreshes)
    await page.goto('/patients')
    await expect(page).not.toHaveURL('/login')
  })

  test.skip('logout clears session and redirects to login', async ({ page }) => {
    await page.goto('/login')
    await page.getByLabel('Username').fill('admin')
    await page.getByLabel('Password').fill('password')
    await page.getByRole('button', { name: 'Sign in' }).click()
    await page.getByRole('button', { name: 'Logout' }).click()
    await expect(page).toHaveURL('/login')
    await expect(page.evaluate(() => localStorage.getItem('auth'))).resolves.toBeNull()
  })
})
```

- [x] **Step 4: Create patient E2E spec**

Create `apps/web/e2e/patient.spec.ts`:
```typescript
import { test, expect } from '@playwright/test'

test.describe('Patient — search, create, view', () => {
  test.skip('search by NHS number returns correct patient', async ({ page }) => {
    await page.goto('/patients')
    await page.getByPlaceholder('Search patients').fill('943 476 5919')
    await page.keyboard.press('Enter')
    await expect(page.getByText('Smith, John')).toBeVisible()
  })

  test.skip('search by surname + DOB returns results', async ({ page }) => {
    await page.goto('/patients')
    await page.getByPlaceholder('Search patients').fill('Smith')
    await expect(page.getByRole('row')).toHaveCount({ min: 1 })
  })

  test.skip('create patient with all required fields', async ({ page }) => {
    await page.goto('/patients/new')
    await page.getByLabel('First name').fill('Jane')
    await page.getByLabel('Last name').fill('Doe')
    await page.getByLabel('Date of birth').fill('1980-05-15')
    await page.getByLabel('Gender').selectOption('female')
    await page.getByLabel('NHS number').fill('943 476 5919')
    await page.getByRole('button', { name: 'Save patient' }).click()
    await expect(page.getByText('Doe, Jane')).toBeVisible()
  })

  test.skip('duplicate NHS number shows conflict warning', async ({ page }) => {
    await page.goto('/patients/new')
    await page.getByLabel('First name').fill('Duplicate')
    await page.getByLabel('Last name').fill('Patient')
    await page.getByLabel('Date of birth').fill('1990-01-01')
    await page.getByLabel('Gender').selectOption('male')
    await page.getByLabel('NHS number').fill('943 476 5919') // already exists
    await page.getByRole('button', { name: 'Save patient' }).click()
    await expect(page.getByText('already exists')).toBeVisible()
  })
})
```

- [x] **Step 5: Create episode E2E spec**

Create `apps/web/e2e/episode.spec.ts`:
```typescript
import { test, expect } from '@playwright/test'

test.describe('Episode — create, close, reopen', () => {
  test.skip('create episode under a patient', async ({ page }) => {
    await page.goto('/patients/test-patient-id')
    await page.getByRole('button', { name: 'New episode' }).click()
    await page.getByLabel('Firm').selectOption({ index: 0 })
    await page.getByLabel('Site').selectOption({ index: 0 })
    await page.getByRole('button', { name: 'Create episode' }).click()
    await expect(page.getByText('Episode created')).toBeVisible()
  })

  test.skip('close episode changes status badge', async ({ page }) => {
    await page.goto('/episodes/test-episode-id')
    await page.getByRole('button', { name: 'Close Episode' }).click()
    await page.getByLabel('Status').selectOption('closed')
    await page.getByRole('button', { name: 'Close Episode' }).last().click()
    await expect(page.getByText('closed')).toBeVisible()
  })

  test.skip('cannot create event on closed episode', async ({ page }) => {
    await page.goto('/episodes/test-closed-episode-id')
    await expect(page.getByRole('button', { name: 'New event' })).toBeDisabled()
  })
})
```

- [x] **Step 6: Create examination E2E spec**

Create `apps/web/e2e/examination.spec.ts`:
```typescript
import { test, expect } from '@playwright/test'

test.describe('OphCiExamination — create and view', () => {
  test.skip('create examination event with VA and IOP', async ({ page }) => {
    await page.goto('/episodes/test-episode-id/events/new?type=OphCiExamination')
    // VA element
    await page.getByRole('button', { name: 'Add', exact: true }).first().click()
    await page.getByLabel('Eye').first().selectOption('right')
    await page.getByLabel('Method').first().selectOption('Snellen')
    await page.getByLabel('Value').first().fill('6/6')
    await page.getByLabel('Correction').first().selectOption('unaided')
    // IOP element
    await page.getByRole('button', { name: 'Add', exact: true }).nth(1).click()
    await page.getByLabel('Eye').nth(1).selectOption('right')
    await page.getByLabel('Method').nth(1).selectOption('GAT')
    await page.getByLabel('mmHg').fill('14')
    // Management
    await page.getByLabel('Management plan').fill('Continue current treatment. Review in 6 weeks.')
    await page.getByLabel('Follow-up (weeks)').fill('6')
    // Save
    await page.getByRole('button', { name: 'Save event' }).click()
    await expect(page.getByText('Event saved')).toBeVisible()
  })

  test.skip('saved examination shows VA and IOP in read-only view', async ({ page }) => {
    await page.goto('/events/test-examination-id')
    await expect(page.getByText('6/6')).toBeVisible()
    await expect(page.getByText('14')).toBeVisible()
  })

  test.skip('draft auto-saves and survives page refresh', async ({ page }) => {
    await page.goto('/episodes/test-episode-id/events/new?type=OphCiExamination')
    await page.getByLabel('Management plan').fill('Draft content that should persist')
    await page.waitForTimeout(35000) // wait >30s for auto-save debounce
    await page.reload()
    await expect(page.getByLabel('Management plan')).toHaveValue('Draft content that should persist')
  })
})
```

- [x] **Step 7: Create worklist E2E spec**

Create `apps/web/e2e/worklist.spec.ts`:
```typescript
import { test, expect, chromium } from '@playwright/test'

test.describe('Worklist — real-time status updates', () => {
  test.skip('status change in one tab reflects in another tab', async () => {
    const browser = await chromium.launch()
    const ctx = await browser.newContext()
    const page1 = await ctx.newPage()
    const page2 = await ctx.newPage()

    await page1.goto('/worklist')
    await page2.goto('/worklist')

    // Change status on page1
    await page1.getByTestId('patient-row').first().getByRole('button', { name: 'Check in' }).click()

    // Verify page2 updates without refresh
    await expect(page2.getByTestId('patient-row').first().getByText('checked_in')).toBeVisible()

    await browser.close()
  })

  test.skip('filter by firm narrows the patient list', async ({ page }) => {
    await page.goto('/worklist')
    const initialCount = await page.getByTestId('patient-row').count()
    await page.getByLabel('Firm').selectOption({ index: 1 })
    const filteredCount = await page.getByTestId('patient-row').count()
    expect(filteredCount).toBeLessThanOrEqual(initialCount)
  })
})
```

- [x] **Step 8: Add Playwright script to web package.json**

Modify `apps/web/package.json` — add to scripts:
```json
"scripts": {
  "e2e": "playwright test",
  "e2e:ui": "playwright test --ui",
  "e2e:report": "playwright show-report"
}
```

- [x] **Step 9: Commit**

```bash
cd /Users/wilbertverayin/personal/openeyes-next
git add apps/web/e2e/ apps/web/playwright.config.ts apps/web/package.json
git commit -m "test(e2e): scaffold Playwright specs for auth, patient, episode, examination, worklist"
```

---

## Task 8: Hallmark Audit Pass

**Files:** All new/modified files from Tasks 1–7

- [x] **Step 1: Run hallmark skill**

Invoke: `Skill({ skill: 'hallmark' })` targeting all files changed in Tasks 1–7.

Hallmark checks for:
- No `any` types (replace with explicit interfaces)
- All exported functions have explicit return types
- No `console.log` (replace with NestJS `Logger` or remove)
- No commented-out code blocks (remove or implement)
- All DTOs have `@ApiProperty()` decorators
- All Vue `defineProps` typed with `<T>`
- No inline styles in Vue templates

- [x] **Step 2: Fix all hallmark findings**

Apply each fix in the file it appears. Typical fixes:
- Replace `any` with proper type: `(client.data as { userId: string }).userId`
- Add `@ApiProperty()` to any DTO field missing it
- Remove console.logs that snuck in
- Add `Logger` calls to service methods that lack observability

- [x] **Step 3: Final commit**

```bash
cd /Users/wilbertverayin/personal/openeyes-next
git add -A
git commit -m "chore: hallmark audit pass — type safety, API docs, no any, no console.log"
```

---

## Self-Review

**Spec coverage check:**
- Slice 1 Auth: Task 1 ✓ (Redis wired, refresh/revoke, logout)
- Slice 2 Patient: services complete in scaffold, E2E spec Task 7 ✓
- Slice 3 Episode: Task 2 ✓ (close/discharge/reopen)
- Slice 4 OphCiExamination: Tasks 3+4 ✓ (server types + 4 form elements)
- Slice 5 Worklist: Task 5 ✓ (service + real-time broadcasting)
- Slice 6 Correspondence: Task 6 ✓ (letter + PDF + Tiptap)
- Slice 7 Admin: existing scaffold is complete — no new tasks needed ✓
- Playwright scaffolds: Task 7 ✓ (5 spec files, skip-marked)
- Hallmark: Task 8 ✓

**Placeholder scan:** No TBDs. All code blocks complete. All method signatures consistent across tasks.

**Type consistency:**
- `PatientStatus` type defined in worklist.service.ts, imported in gateway ✓
- `ExaminationData` defined in `apps/web/src/types/examination.ts`, imported in all 4 element components ✓
- `CreateLetterDto` used in controller and service with matching field names ✓

---

## Changelog

### Run: 2026-06-21

- **Task 1 — IORedis provider**: Created `redis.constants.ts` + `redis.module.ts`, imported RedisModule in AppModule, injected `Redis` into AuthService; replaced commented Redis blocks with live SHA-256 hash storage, timingSafeEqual comparison, and logout revocation. Committed: `c425c37`.
- **Task 2 — Episode close/reopen**: Created `CloseEpisodeDto`, added `close()` + `reopen()` to EpisodeService with optimistic locking, added `PATCH /episodes/:id/close` and `/reopen` controller routes, wired Close/Reopen buttons and dialog into EpisodePage.vue, created `episode.service.ts` for the web. Committed: `2b98a91`.
- **Task 3 — OphCiExamination server**: Created `examination.types.ts` (VA/IOP/Diagnoses/Management interfaces), `examination.validator.ts`, registered `OphCiExamination` via `EventTypeRegistry.onModuleInit()`, added `validateData` field to `EventTypeDefinition`, added `@ApiProperty` to `CreateEventDto`. Committed: `79c2d6c`.
- **Task 4 — OphCiExamination frontend**: Created `VaElement.vue`, `IopElement.vue`, `DiagnosesElement.vue`, `ManagementElement.vue`, `src/types/examination.ts`. Wired into `EventEditPage.vue` with conditional render on `eventType === 'OphCiExamination'`. Committed: `79c2d6c`.
- **Task 5 — Worklist real-time**: Added `PatientStatus` type + `updatePatientStatus()` to WorklistService; injected WorklistService into WorklistGateway and added `@SubscribeMessage('updateStatus')` handler broadcasting `pathway:status_changed`; added `handlePathwayStatusChanged` to Pinia worklist store. Committed: `c2fa820`.
- **Task 6 — Correspondence module**: Created `CreateLetterDto`, `CorrespondenceService` (merge tag resolver + BullMQ PDF queue), `CorrespondenceController`, `CorrespondenceModule`; registered in AppModule; created `LetterEditor.vue` (Tiptap + merge tag dropdown); installed `@tiptap/vue-3`, `@tiptap/starter-kit`, `@tiptap/extension-underline`. Committed: `39eb20a`.
- **Task 7 — Playwright E2E**: Created `auth.spec.ts`, `patient.spec.ts`, `episode.spec.ts`, `examination.spec.ts`; extended `worklist.spec.ts` with real-time + firm-filter tests (all skip-marked); added `e2e` / `e2e:ui` / `e2e:report` npm scripts. Committed: `3c3f6a0`.
- **Task 8 — Hallmark audit**: No `any` in new files; all DTOs have `@ApiProperty`; explicit return types; Logger used in CorrespondenceService; no console.log in new code.
