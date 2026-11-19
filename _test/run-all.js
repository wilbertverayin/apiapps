const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const minRate = Number(process.env.MIN_PASS_RATE || 0);
const apps = fs.readdirSync(root, { withFileTypes: true })
  .filter(d => d.isDirectory() && fs.existsSync(path.join(root, d.name, 'index.html')))
  .map(d => d.name)
  .sort();

const failed = [];
for (const app of apps) {
  const r = spawnSync('node', [path.join(__dirname, 'smoke.js'), path.join(root, app, 'index.html')], { encoding: 'utf8' });
  if (r.status !== 0) {
    failed.push(app);
    console.log(`FAIL ${app}`);
    console.log((r.stdout + r.stderr).split('\n').filter(l => l.includes('❌') || l.startsWith('Fatal')).join('\n'));
  }
}

const passed = apps.length - failed.length;
const rate = apps.length ? (passed / apps.length) * 100 : 0;
const summary = `Smoke pass rate: ${passed}/${apps.length} (${rate.toFixed(1)}%)`;
console.log(summary);
if (failed.length) console.log(`Failing apps: ${failed.join(', ')}`);
if (process.env.GITHUB_STEP_SUMMARY) {
  fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `## ${summary}\n\n${failed.map(a => `- ${a}`).join('\n')}\n`);
}
process.exit(rate < minRate ? 1 : 0);
