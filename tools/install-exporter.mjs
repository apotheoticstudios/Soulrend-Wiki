// Builds the in-game wiki exporter (the Soulrend Dev Utils mod in the instance's mod-src/) into the instance's mods/,
// and removes the wiki's old KubeJS export scripts if they are still there.
//   npm run install-exporter
//   npm run install-exporter -- --instance <dir> --java-home <jdk>
// Then, in game: open a single-player world on a fresh character, run /soulrenddev wiki export, and npm run sync-game.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const MOD = 'soulrend_dev_utils';
// What tools/kubejs/ used to install; kubejs/exported/ (old export data) is left alone.
const LEGACY_SCRIPTS = ['server_scripts/wiki_export.js', 'server_scripts/wiki_attack_export.js', 'client_scripts/wiki_export.js'];

const args = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};
const INSTANCE = path.resolve(arg('instance', path.join(os.homedir(), 'Documents/curseforge/minecraft/Instances/Soulrend-Development')));
const PROJECT = path.join(INSTANCE, 'mod-src', MOD);
const WINDOWS = process.platform === 'win32';
const GRADLEW = path.join(PROJECT, WINDOWS ? 'gradlew.bat' : 'gradlew');

if (!fs.existsSync(GRADLEW)) {
  console.error(`No ${path.relative(INSTANCE, GRADLEW)} in ${INSTANCE}\nPull the modpack repo, or pass --instance <path to the modpack instance>.`);
  process.exit(1);
}

// Gradle 8.8 (ForgeGradle 6) runs on Java 17-22. On macOS, pick one from java_home when JAVA_HOME isn't set,
// since the default java may be newer.
function findJavaHome() {
  const explicit = arg('java-home', process.env.JAVA_HOME);
  if (explicit) return explicit;
  if (process.platform !== 'darwin') return null;
  const list = spawnSync('/usr/libexec/java_home', ['-V'], { encoding: 'utf8' });
  const jdks = `${list.stdout}\n${list.stderr}`.split('\n')
    .map(line => /^\s+(\d+)[.\d]*\s.*\s(\/\S.*)$/.exec(line))
    .filter(m => m && Number(m[1]) >= 17 && Number(m[1]) <= 22)
    .sort((a, b) => Number(b[1]) - Number(a[1]));
  return jdks[0]?.[2] ?? null;
}

const javaHome = findJavaHome();
console.log(`Building ${MOD} in ${path.relative(process.cwd(), PROJECT) || PROJECT}${javaHome ? ` (JAVA_HOME=${javaHome})` : ''}`);
const build = spawnSync(GRADLEW, ['build', '--console=plain', '--quiet'], {
  cwd: PROJECT,
  stdio: 'inherit',
  shell: WINDOWS,
  env: javaHome ? { ...process.env, JAVA_HOME: javaHome } : process.env,
});
if (build.status !== 0) {
  console.error('\nThe build failed. Gradle 8.8 needs JDK 17 or 21: pass --java-home <jdk> or set JAVA_HOME.');
  process.exit(build.status ?? 1);
}

const jars = fs.readdirSync(path.join(INSTANCE, 'mods')).filter(f => f.startsWith(`${MOD}-`) && f.endsWith('.jar'));
if (!jars.length) {
  console.error(`\nThe build succeeded but no mods/${MOD}-*.jar was copied. Check copyJarToMods in ${path.join(PROJECT, 'build.gradle')}.`);
  process.exit(1);
}
console.log(`  installed mods/${jars.join(', mods/')}`);

for (const script of LEGACY_SCRIPTS) {
  const file = path.join(INSTANCE, 'kubejs', script);
  if (fs.existsSync(file)) {
    fs.rmSync(file);
    console.log(`  removed  kubejs/${script} (old KubeJS exporter)`);
  }
}

console.log(`
Next: start the game, open a single-player world on a fresh character with nothing equipped,
run /soulrenddev wiki export, then npm run sync-game.
Never ship mods/${jars[0]} with the modpack.`);
