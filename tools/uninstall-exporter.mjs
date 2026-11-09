// Removes the in-game wiki exporter jar from the instance's mods/ (the inverse of install-exporter).
//   npm run uninstall-exporter
//   npm run uninstall-exporter -- --instance <dir>
// wiki-export/ (the data the exporter wrote) and the mod's source in mod-src/ are left alone.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const MOD = 'soulrend_dev_utils';
const args = process.argv.slice(2);
const i = args.indexOf('--instance');
const INSTANCE = path.resolve(i >= 0 ? args[i + 1] : path.join(os.homedir(), 'Documents/curseforge/minecraft/Instances/Soulrend-Development'));
const MODS = path.join(INSTANCE, 'mods');

if (!fs.existsSync(MODS)) {
  console.error(`No mods/ folder in ${INSTANCE}\nPass --instance <path to the modpack instance>.`);
  process.exit(1);
}

const jars = fs.readdirSync(MODS).filter(f => f.startsWith(`${MOD}-`) && f.endsWith('.jar'));
if (!jars.length) console.log(`  absent   mods/${MOD}-*.jar`);
for (const jar of jars) {
  fs.rmSync(path.join(MODS, jar));
  console.log(`  removed  mods/${jar}`);
}
console.log('\nThe jar also provides the modpack\'s other dev commands (/soulrenddev skilltree ...). Restart the game for the change to take effect.');
