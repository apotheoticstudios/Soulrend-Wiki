// Copies the wiki's KubeJS export scripts into the modpack instance, replacing the old copies.
//   npm run install-kubejs
//   npm run install-kubejs -- --instance <dir>
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = path.join(ROOT, 'tools/kubejs');
const args = process.argv.slice(2);
const i = args.indexOf('--instance');
const INSTANCE = path.resolve(i >= 0 ? args[i + 1] : path.join(os.homedir(), 'Documents/curseforge/minecraft/Instances/Soulrend-Development'));

if (!fs.existsSync(path.join(INSTANCE, 'kubejs'))) {
  console.error(`No kubejs/ folder in ${INSTANCE}\nPass --instance <path to the modpack instance>.`);
  process.exit(1);
}

for (const folder of fs.readdirSync(SOURCE).sort()) {
  for (const file of fs.readdirSync(path.join(SOURCE, folder)).filter(f => f.endsWith('.js')).sort()) {
    const from = path.join(SOURCE, folder, file);
    const to = path.join(INSTANCE, 'kubejs', folder, file);
    const same = fs.existsSync(to) && fs.readFileSync(to).equals(fs.readFileSync(from));
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(from, to);
    console.log(`  ${same ? 'unchanged' : 'updated  '} kubejs/${folder}/${file}`);
  }
}

// The scripts do nothing without this file; say so rather than create it, since removing it is how you switch the export off.
if (!fs.existsSync(path.join(INSTANCE, 'kubejs/exported/wiki/enabled.json'))) {
  console.warn('\nkubejs/exported/wiki/enabled.json is missing, so the export is off. Create it with {} to turn it on.');
}
console.log('\nRestart the game (or run /reload, then rejoin the world) for the scripts to take effect.');
