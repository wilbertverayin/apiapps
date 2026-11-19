# Random User Generator

## Tagline
Generate realistic, structured demo user data in one click so your team never ships a product with "John Doe" placeholders.

## Target Market
Product teams, UX designers, and QA engineers at SaaS companies and digital agencies who build and test data-driven interfaces.

## Problem
Teams waste time manually crafting fake user datasets for demos, staging environments, and QA test suites. Generic placeholder data makes presentations look unprofessional and fails to surface real-world edge cases like long names, international characters, or diverse profile photos. No single tool produces structured, exportable, realistic user sets at scale.

## Solution
The app generates configurable batches of realistic user profiles via the RandomUser API, controlling nationality, gender, age range, and count, and exports the result as JSON, CSV, or SQL INSERT statements ready to drop into any database or prototype.

## Core Features (MVP)
- Batch user generation with configurable parameters (count, nationality, gender, age range)
- Real-time preview table of generated profiles
- Export as JSON, CSV, or SQL INSERT
- Field selector (choose which fields to include: name, email, avatar, address, phone, etc.)
- Saved presets for frequently used configurations

## API Used
- RandomUser API — realistic user profile data including names, addresses, avatars, emails, and phone numbers

## Monetization
Freemium — Free (up to 100 users/batch, 5 exports/day); $12/month (unlimited batches + all export formats + presets).

## Tech Stack Suggestion
Next.js + Supabase (auth + presets storage) + Tailwind CSS.

## MVP Scope
Included in v1: batch generation, parameter controls, preview table, JSON/CSV/SQL export, field selector, saved presets.
Out of scope: custom schema mapping, mock API hosting, Faker.js custom fields, team sharing, webhook delivery.
