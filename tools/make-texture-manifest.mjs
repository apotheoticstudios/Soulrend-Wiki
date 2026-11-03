// Which resource pack supplies each texture the game shows, and whether it is animated:
// instance resource stack -> game-data/texture-manifest.json. Reads the stack from the last
// "Reloading ResourceManager" line in logs/latest.log (lowest priority first), because Paxi appends
// the packs that config/paxi/resourcepack_load_order.json doesn't list.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { unzipSync } from 'fflate';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arg = (name, fallback) => { const i = process.argv.indexOf(`--${name}`); return i >= 0 ? process.argv[i + 1] : fallback; };
const CURSEFORGE = path.join(os.homedir(), 'Documents/curseforge/minecraft');
const instance = arg('instance', path.join(CURSEFORGE, 'Instances/Soulrend-Development'));
const outFile = arg('out', path.join(ROOT, 'game-data/texture-manifest.json'));
const vanillaJar = path.join(CURSEFORGE, 'Install/versions/1.20.1/1.20.1.jar');

const TEXTURE = /^assets\/([^/]+)\/textures\/(.+\.png)$/;
const JEM = /^assets\/([^/]+)\/(?:optifine|emf)\/cem\/([^/]+?)\d*\.(?:jem|properties)$/;
const META = /^assets\/([^/]+)\/textures\/(.+\.png)\.mcmeta$/;

// Stack names, lowest priority first.
const log = fs.readFileSync(path.join(instance, 'logs/latest.log'), 'utf8').split('\n').filter(l => l.includes('Reloading ResourceManager: ')).pop();
if (!log) throw new Error('no "Reloading ResourceManager" line in logs/latest.log: start the game once');
const stack = log.split('Reloading ResourceManager: ')[1].split(', ');

const modJars = fs.readdirSync(path.join(instance, 'mods')).filter(f => f.endsWith('.jar')).sort().map(f => path.join(instance, 'mods', f));
const paxiDir = path.join(instance, 'config/paxi/resourcepacks');

// A source is one place assets/ lives: { id, kind, files: Map<textureKey, entryName>, meta: Map<textureKey, mcmeta>, read(entryName) }
const sources = [];
const unresolved = [];
const filters = [];

function textureKey(ns, rel) { return `${ns}:textures/${rel}`; }

function scanZip(zipPath, prefix = '') {
  const files = new Map();
  const meta = new Map();
  const cem = new Set();
  let packMeta;
  const data = unzipSync(fs.readFileSync(zipPath), {
    filter: e => {
      if (!e.name.startsWith(prefix)) return false;
      const name = e.name.slice(prefix.length);
      let m;
      if ((m = JEM.exec(name))) cem.add(`${m[1]}:${m[2]}`);
      if ((m = META.exec(name))) return true;
      if ((m = TEXTURE.exec(name))) files.set(textureKey(m[1], m[2]), name);
      return name === 'pack.mcmeta';
    },
  });
  for (const [full, bytes] of Object.entries(data)) {
    const name = full.slice(prefix.length);
    if (name === 'pack.mcmeta') packMeta = bytes;
    else {
      const m = META.exec(name);
      try { meta.set(textureKey(m[1], m[2]), JSON.parse(Buffer.from(bytes).toString('utf8'))); } catch { meta.set(textureKey(m[1], m[2]), null); }
    }
  }
  return { files, meta, cem, packMeta, zipPath, prefix };
}

function scanDir(dir) {
  const files = new Map();
  const meta = new Map();
  const cem = new Set();
  const walk = rel => {
    for (const ent of fs.readdirSync(path.join(dir, rel), { withFileTypes: true })) {
      const next = rel ? `${rel}/${ent.name}` : ent.name;
      if (ent.isDirectory()) walk(next);
      else {
        let m;
        if ((m = JEM.exec(next))) cem.add(`${m[1]}:${m[2]}`);
        if ((m = META.exec(next))) {
          try { meta.set(textureKey(m[1], m[2]), JSON.parse(fs.readFileSync(path.join(dir, next), 'utf8'))); } catch { meta.set(textureKey(m[1], m[2]), null); }
        } else if ((m = TEXTURE.exec(next))) files.set(textureKey(m[1], m[2]), next);
      }
    }
  };
  if (fs.existsSync(path.join(dir, 'assets'))) walk('assets');
  const pm = path.join(dir, 'pack.mcmeta');
  return { files, meta, cem, packMeta: fs.existsSync(pm) ? fs.readFileSync(pm) : undefined, dir };
}

function add(id, kind, where, scanned) {
  if (scanned.packMeta) {
    try {
      const f = JSON.parse(Buffer.from(scanned.packMeta).toString('utf8')).filter;
      if (f?.block?.length) filters.push({ id, block: f.block });
    } catch { /* unreadable pack.mcmeta: the game would reject the pack, so it can't be in the log */ }
  }
  sources.push({ id, kind, where, ...scanned });
}

for (const name of stack) {
  if (name === 'vanilla') add(name, 'vanilla', path.relative(CURSEFORGE, vanillaJar), scanZip(vanillaJar));
  else if (name === 'mod_resources') {
    // Forge's mod_resources is every mod jar's assets in one pack; jar order inside it isn't recorded, so
    // jars are taken alphabetically and any path two jars both supply is listed under modConflicts.
    const files = new Map();
    const meta = new Map();
    const jarOf = new Map();
    const conflicts = new Map();
    for (const jar of modJars) {
      const s = scanZip(jar);
      const base = path.basename(jar);
      for (const [key, entry] of s.files) {
        if (files.has(key)) conflicts.set(key, [...(conflicts.get(key) ?? [jarOf.get(key)]), base]);
        files.set(key, entry);
        jarOf.set(key, base);
        meta.delete(key);
      }
      for (const [key, m] of s.meta) if (s.files.has(key)) meta.set(key, m);
    }
    add(name, 'mod_resources', 'mods/*.jar', { files, meta, cem: new Set(), jarOf, conflicts });
  } else if (name === 'KubeJS Resource Pack [assets]') add(name, 'kubejs', 'kubejs/assets', scanKubejs());
  else if (name.includes('.jar:')) {
    const [jar, inner] = name.split('.jar:');
    const jarPath = path.join(instance, 'mods', `${jar}.jar`);
    if (fs.existsSync(jarPath)) add(name, 'mod-pack', `mods/${jar}.jar!${inner}`, scanZip(jarPath, `${inner}/`));
    else unresolved.push({ id: name, why: 'jar not found' });
  } else {
    const p = path.join(paxiDir, name);
    if (!fs.existsSync(p)) { unresolved.push({ id: name, why: 'not a file in config/paxi/resourcepacks (runtime-generated or built into a mod)' }); continue; }
    add(name, fs.statSync(p).isDirectory() ? 'folder' : 'zip', path.relative(instance, p), fs.statSync(p).isDirectory() ? scanDir(p) : scanZip(p));
  }
}

// kubejs/assets is a folder of assets/ contents, not a pack root.
function scanKubejs() {
  const dir = path.join(instance, 'kubejs');
  return fs.existsSync(path.join(dir, 'assets')) ? scanDir(dir) : { files: new Map(), meta: new Map(), cem: new Set() };
}

// Winners: highest-priority source that has the texture. Pack filters (pack.mcmeta "filter.block") hide
// lower packs' files by namespace/path regex; none are applied unless a pack declares one (listed in the output).
const blocked = (sourceIdx, key) => {
  const ns = key.slice(0, key.indexOf(':'));
  const rel = `textures/${key.slice(key.indexOf('/') + 1)}`;
  for (let i = sourceIdx + 1; i < sources.length; i++) {
    const f = filters.find(x => x.id === sources[i].id);
    if (f && f.block.some(b => (!b.namespace || new RegExp(`^${b.namespace}$`).test(ns)) && (!b.path || new RegExp(`^${b.path}$`).test(rel)))) return true;
  }
  return false;
};

// A pack that ships cem/<name>.jem replaces that entity's model (EMF), and its textures for the entity use
// the custom model's layout. The .jem files name no texture, so a texture counts as bound to the model when
// it is under textures/entity/ (or textures/models/) and a path segment is the model's name, or the file
// name starts with it plus "_". Such a texture doesn't fit the vanilla/mod geometry the wiki models use.
const cemBound = (src, key) => {
  if (!src.cem?.size) return false;
  const ns = key.slice(0, key.indexOf(':'));
  const segs = key.slice(key.indexOf(':') + 1).replace(/\.png$/, '').split('/');
  if (!['entity', 'models', 'entities'].includes(segs[1])) return false;
  return segs.slice(2).some((seg, i, a) => src.cem.has(`${ns}:${seg}`) || (i === a.length - 1 && [...src.cem].some(c => c.startsWith(`${ns}:`) && seg.startsWith(`${c.slice(ns.length + 1)}_`))));
};

const keys = new Set();
for (const s of sources) for (const k of s.files.keys()) keys.add(k);
const textures = {};
const needDims = new Map(); // source index -> [key]
let animated = 0;
for (const key of [...keys].sort()) {
  const have = [];
  for (let i = 0; i < sources.length; i++) if (sources[i].files.has(key) && !blocked(i, key)) have.push(i);
  if (!have.length) continue;
  const win = have[have.length - 1];
  const entry = { s: win };
  if (have.length > 1) entry.under = have.slice(0, -1).reverse();
  if (cemBound(sources[win], key)) {
    entry.cem = true;
    // The highest source whose texture still fits the unreplaced model.
    const compat = [...have].reverse().find(i => !cemBound(sources[i], key));
    entry.base = have[0];
    if (sources[have[0]].jarOf) entry.baseJar = sources[have[0]].jarOf.get(key);
    if (compat !== undefined) {
      entry.compat = compat;
      if (sources[compat].jarOf) entry.compatJar = sources[compat].jarOf.get(key);
    }
  }
  const m = sources[win].meta.get(key);
  if (m && m.animation) {
    entry.animated = true;
    entry.animation = m.animation === true ? {} : m.animation;
    if (!needDims.has(win)) needDims.set(win, []);
    needDims.get(win).push(key);
    animated++;
  } else entry.animated = false;
  if (win === sources.findIndex(s => s.id === 'mod_resources')) {
    entry.jar = sources[win].jarOf.get(key);
    const c = sources[win].conflicts.get(key);
    if (c) entry.jarConflict = [...new Set(c)];
  }
  textures[key] = entry;
}

// Sheet size and frame count of animated winners (PNG IHDR), read in one pass per source.
const dims = (bytes) => bytes.length > 24 ? [Buffer.from(bytes).readUInt32BE(16), Buffer.from(bytes).readUInt32BE(20)] : null;
for (const [idx, list] of needDims) {
  const s = sources[idx];
  const want = new Set(list.map(k => s.files.get(k)));
  let got = {};
  if (s.zipPath) got = unzipSync(fs.readFileSync(s.zipPath), { filter: e => want.has(e.name.slice(s.prefix.length)) && e.name.startsWith(s.prefix) });
  for (const key of list) {
    const e = textures[key];
    let bytes;
    if (s.zipPath) bytes = got[`${s.prefix}${s.files.get(key)}`];
    else if (s.dir) bytes = fs.readFileSync(path.join(s.dir, s.files.get(key)));
    else if (s.id === 'mod_resources') {
      const jar = path.join(instance, 'mods', e.jar);
      bytes = unzipSync(fs.readFileSync(jar), { filter: x => x.name === s.files.get(key) })[s.files.get(key)];
    }
    const d = bytes && dims(bytes);
    if (!d) continue;
    e.sheet = d;
    const fw = e.animation.width ?? (e.animation.height ? d[0] : Math.min(d[0], d[1]));
    const fh = e.animation.height ?? (e.animation.width ? d[1] : fw);
    e.frameSize = [fw, fh];
    e.sheetFrames = Math.floor(d[0] / fw) * Math.floor(d[1] / fh);
  }
}

const used = new Map();
for (const e of Object.values(textures)) used.set(e.s, (used.get(e.s) ?? 0) + 1);
const out = {
  $comment: 'Texture -> the source that supplies what the game shows. Generated by tools/make-texture-manifest.mjs (npm run textures); see README or the script header.',
  instance: path.basename(instance),
  stackSource: 'logs/latest.log "Reloading ResourceManager" (lowest priority first; later sources win)',
  $keys: 'texture key = "<namespace>:textures/<path>.png", the full resource path; an item model texture "ns:item/x" is "ns:textures/item/x.png"',
  $fields: {
    s: 'index into sources of the winning source (highest priority that has the file)',
    under: 'indexes of lower-priority sources that also have it, highest first (shadowed)',
    animated: 'true if the winning source has a .png.mcmeta with an "animation" entry (the game reads the mcmeta from the same pack as the PNG, so a shadowed source\'s animation does not count)',
    animation: 'that mcmeta animation object verbatim (frametime, interpolate, frames, width, height)',
    sheet: 'PNG [width, height] of an animated texture',
    frameSize: '[width, height] of one frame (animation.width/height, else square at the sheet width)',
    sheetFrames: 'frames laid out in the sheet',
    cem: 'true when the winning pack also ships a cem model for this entity (the game draws that model with this texture)',
    compat: 'with cem: the highest source whose texture is not bound to a replacement model, which is what the wiki\'s own (original geometry) models should use',
    base: 'with cem: the lowest source that has the file (vanilla or the mod\'s own), the reference layout; baseJar is its jar when that is mod_resources',
    compatJar: 'the jar behind compat, when compat is mod_resources',
    jar: 'for mod_resources: the mod jar that supplies it',
    jarConflict: 'for mod_resources: other jars supplying the same path; Forge\'s order between them was not recorded, the alphabetically last jar is shown',
  },
  $caveats: [
    'Only PNG textures under assets/<ns>/textures/ are listed; model JSON, geo and OptiFine-format data are not resolved here.',
    'Entity Texture Features, Entity Model Features and CIT Resewn are installed. Packs ship optifine/cem (custom entity models), optifine/random/entity (texture variants) and optifine/cit (item textures chosen by name or NBT), so a texture can be swapped or its model replaced at runtime without appearing here. Excalibur, EFA, Clarent and Fresh Animations carry most of it.',
    'Sources named in unresolved are generated at runtime (Moonlight dynamic assets, fragmentum layer) or hold nothing the manifest can read (fabric).',
    'Emissive companions are listed as their own textures (<name>_e.png).',
  ],
  sources: sources.map((s, i) => ({ index: i, id: s.id, kind: s.kind, where: s.where, textures: s.files.size, winning: used.get(i) ?? 0 })),
  unresolved,
  filtersDeclared: filters,
  counts: { textures: Object.keys(textures).length, animated, cemBound: Object.values(textures).filter(t => t.cem).length, overridden: Object.values(textures).filter(t => t.under).length },
  textures,
};
fs.writeFileSync(outFile, JSON.stringify(out));
console.log(`${out.counts.textures} textures from ${sources.length} sources; ${animated} animated; ${out.counts.overridden} overridden by a pack`);
console.log(`unresolved: ${unresolved.map(u => u.id).join(', ') || 'none'}`);
console.log(`pack filters: ${filters.length}`);
