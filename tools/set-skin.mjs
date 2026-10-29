// Swaps the attack viewer's player skin and rebuilds the player model (the clips don't depend on it).
//   npm run skin -- <skin.png>          copy a 64×64 Minecraft skin over the manifest's skin file
//   npm run skin -- <skin.png> --slim   … and use slim (Alex) arms; --wide for classic ones, --auto to detect
//   npm run skin                        rebuild the player from the current skin
// The skin file is "$attacks".skin in tools/models/mobs.json (assets/john_soulrend/skin.png).
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MANIFEST = path.join(ROOT, 'tools/models/mobs.json');
const args = process.argv.slice(2);
const source = args.find(a => !a.startsWith('--'));
const manifest = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
const target = path.join(ROOT, manifest.$attacks.skin);

if (source) {
  const bytes = fs.readFileSync(path.resolve(source));
  let img;
  try { img = PNG.sync.read(bytes); } catch (e) { throw new Error(`${source} isn't a PNG: ${e.message}`); }
  // Epic Fight's player mesh uses the 64×64 layout (separate left limbs and outer layers).
  if (img.width !== 64 || img.height !== 64) throw new Error(`${source} is ${img.width}×${img.height}; a 64×64 Minecraft skin is needed`);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, bytes);
  console.log(`Copied ${source} to ${path.relative(ROOT, target)}`);
}
const arms = args.includes('--slim') ? true : args.includes('--wide') ? false : args.includes('--auto') ? null : undefined;
if (arms !== undefined) {
  if (arms === null) delete manifest.$attacks.slim;
  else manifest.$attacks.slim = arms;
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
}
const run = spawnSync(process.execPath, [path.join(ROOT, 'tools/make-attacks.mjs'), '--only', 'player'], { stdio: 'inherit' });
process.exitCode = run.status ?? 1;
