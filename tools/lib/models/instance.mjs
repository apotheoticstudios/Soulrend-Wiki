// The modpack instance as the model tools see it: which jar holds which assets namespace, a class path
// over every jar (plus the SRG-named client and JOML from Forge's libraries), and SRG → official names.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { unzipSync } from 'fflate';
import { PNG } from 'pngjs';
import { classPath } from './classpath.mjs';
import { readMappings } from './mappings.mjs';

const CURSEFORGE = path.join(os.homedir(), 'Documents/curseforge/minecraft');
const MC = '1.20.1-20230612.114412';

// packs: resource packs from the instance's resourcepacks/ that override jar assets, highest priority
// first, as { file, namespaces?, prefix? } (only those namespaces, only paths under prefix, which may be a list).
export function openInstance(instance = path.join(CURSEFORGE, 'Instances/Soulrend-Development'), { packs = [] } = {}) {
  const libraries = path.join(CURSEFORGE, 'Install/libraries');
  const clientSrg = path.join(libraries, `net/minecraft/client/${MC}/client-${MC}-srg.jar`);
  const vanilla = path.join(CURSEFORGE, 'Install/versions/1.20.1/1.20.1.jar');
  const joml = path.join(libraries, 'org/joml/joml/1.10.5/joml-1.10.5.jar');
  const mods = fs.readdirSync(path.join(instance, 'mods')).filter(f => f.endsWith('.jar')).map(f => path.join(instance, 'mods', f));

  // assets/<ns>/… and data/<ns>/… → jars, from the central directories only (nothing is inflated).
  const byNamespace = new Map();
  const entries = new Map();
  for (const jar of [vanilla, ...mods]) {
    const names = new Set();
    unzipSync(fs.readFileSync(jar), { filter: e => { names.add(e.name); return false; } });
    entries.set(jar, names);
    for (const name of names) {
      const m = /^assets\/([^/]+)\//.exec(name);
      if (!m) continue;
      if (!byNamespace.has(m[1])) byNamespace.set(m[1], new Set());
      byNamespace.get(m[1]).add(jar);
    }
  }
  const overrides = packs.map(pack => {
    const zip = path.join(instance, 'resourcepacks', pack.file);
    if (!fs.existsSync(zip)) throw new Error(`resource pack not found: ${zip}`);
    const names = new Set();
    unzipSync(fs.readFileSync(zip), { filter: e => { names.add(e.name); return false; } });
    return { ...pack, zip, names };
  });
  const cache = new Map();
  const instance_stats = {};

  // Textures come from the source the game shows (game-data/texture-manifest.json, from npm run textures):
  // the full resource stack, not just `packs`. Zip buffers are kept for a few files at a time.
  const manifestFile = path.join(path.dirname(fileURLToPath(import.meta.url)), '../../../game-data/texture-manifest.json');
  const manifest = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile, 'utf8')) : null;
  const zipBuffers = new Map();
  const zipBuffer = file => {
    if (!zipBuffers.has(file)) {
      if (zipBuffers.size >= 6) zipBuffers.delete(zipBuffers.keys().next().value);
      zipBuffers.set(file, fs.readFileSync(file));
    }
    return zipBuffers.get(file);
  };
  const readEntry = (srcIdx, jar, file) => {
    const src = manifest.sources[srcIdx];
    const key = `${src.id}:${jar ?? ''}!${file}`;
    if (cache.has(key)) return cache.get(key);
    let bytes = null;
    if (src.kind === 'vanilla') bytes = unzipSync(zipBuffer(vanilla), { filter: e => e.name === file })[file];
    else if (src.kind === 'mod_resources') bytes = unzipSync(zipBuffer(path.join(instance, 'mods', jar)), { filter: e => e.name === file })[file];
    else if (src.kind === 'mod-pack') {
      const [jarPath, inner] = src.where.split('!');
      bytes = unzipSync(zipBuffer(path.join(instance, jarPath)), { filter: e => e.name === `${inner}/${file}` })[`${inner}/${file}`];
    } else if (src.kind === 'zip') bytes = unzipSync(zipBuffer(path.join(instance, src.where)), { filter: e => e.name === file })[file];
    else {
      const dir = src.kind === 'kubejs' ? path.join(instance, 'kubejs') : path.join(instance, src.where);
      const full = path.join(dir, file);
      bytes = fs.existsSync(full) ? fs.readFileSync(full) : null;
    }
    if (bytes) cache.set(key, bytes);
    return bytes;
  };
  const readFrom = (srcIdx, jar, ns, rel) => {
    const bytes = readEntry(srcIdx, jar, `assets/${ns}/${rel}`);
    if (!bytes) throw new Error(`texture manifest points ${ns}:${rel} at ${manifest.sources[srcIdx].id}, which doesn't have it`);
    return bytes;
  };
  // The mod's own file, whichever jar has it.
  const fromJars = (ns, file) => {
    for (const jar of byNamespace.get(ns) ?? []) {
      if (!entries.get(jar).has(file)) continue;
      const key = `${jar}!${file}`;
      if (!cache.has(key)) cache.set(key, unzipSync(fs.readFileSync(jar), { filter: e => e.name === file })[file]);
      return cache.get(key);
    }
    return null;
  };
  // Does a pack texture use the same layout as the original one? Compares which pixels are drawn at all
  // (nearest-neighbour onto the original's grid): a retexture matches, a texture drawn for a CEM model's
  // different UV layout doesn't.
  const layoutMatches = (a, b) => {
    const A = PNG.sync.read(Buffer.from(a)), B = PNG.sync.read(Buffer.from(b));
    let both = 0, either = 0;
    for (let y = 0; y < B.height; y++) for (let x = 0; x < B.width; x++) {
      const ax = Math.min(A.width - 1, Math.floor((x + 0.5) * A.width / B.width)), ay = Math.min(A.height - 1, Math.floor((y + 0.5) * A.height / B.height));
      const pa = A.data[(ay * A.width + ax) * 4 + 3] > 0, pb = B.data[(y * B.width + x) * 4 + 3] > 0;
      if (pa || pb) either++;
      if (pa && pb) both++;
    }
    return either === 0 || both / either >= 0.9;
  };
  // A texture of a pack that also replaces the entity's model (cem) may be laid out for that model. The wiki
  // builds the original geometry, so keep the pack's texture only when its layout matches the original's,
  // else use the highest source that isn't bound to a replacement model.
  const stackTexture = (ns, rel, { winner = false, layout = false } = {}) => {
    const entry = manifest?.textures[`${ns}:${rel}`];
    if (!entry) return undefined;
    const win = readFrom(entry.s, entry.jar, ns, rel);
    // `layout`: a Java model's cubes fix the UV layout, so a pack texture drawn for another layout (Excalibur's
    // 128px Void Forge) must give way to the original.
    if (layout && entry.under) {
      const orig = fromJars(ns, `assets/${ns}/${rel}`);
      if (orig && !layoutMatches(win, orig)) return orig;
    }
    if (!entry.cem || winner) return win;
    const note = (use) => { (instance_stats.cem ??= []).push(`${ns}:${rel} -> ${use}`); };
    if (entry.base !== entry.s && layoutMatches(win, readFrom(entry.base, entry.baseJar, ns, rel))) { note('kept'); return win; }
    if (entry.compat === undefined) { note('kept (no compatible source)'); return win; }
    note(`${manifest.sources[entry.compat].id}`);
    return readFrom(entry.compat, entry.compatJar, ns, rel);
  };

  // "ns:path" → bytes of assets/ns/path, from the first pack that covers it, else whichever jar has it.
  const resource = (id, opts) => {
    const [ns, rel] = id.includes(':') ? id.split(':') : ['minecraft', id];
    if (rel.startsWith('textures/') && rel.endsWith('.png')) {
      const got = stackTexture(ns, rel, opts);
      if (got) return got;
    }
    const file = `assets/${ns}/${rel}`;
    for (const pack of overrides) {
      if (pack.namespaces && !pack.namespaces.includes(ns)) continue;
      if (pack.prefix && ![pack.prefix].flat().some(p => rel.startsWith(p))) continue;
      if (!pack.names.has(file)) continue;
      const key = `${pack.zip}!${file}`;
      if (!cache.has(key)) cache.set(key, unzipSync(fs.readFileSync(pack.zip), { filter: e => e.name === file })[file]);
      return cache.get(key);
    }
    return fromJars(ns, file);
  };
  // Reads many resources with one pass over each jar (resource() inflates a jar per file), into the
  // cache; evict() drops them again. Pack overrides are left to resource().
  const prefetch = ids => {
    const byJar = new Map();
    for (const id of ids) {
      const [ns, rel] = id.includes(':') ? id.split(':') : ['minecraft', id];
      const file = `assets/${ns}/${rel}`;
      if (overrides.some(p => p.names.has(file))) continue;
      const jar = [...(byNamespace.get(ns) ?? [])].find(j => entries.get(j).has(file));
      if (!jar || cache.has(`${jar}!${file}`)) continue;
      if (!byJar.has(jar)) byJar.set(jar, new Set());
      byJar.get(jar).add(file);
    }
    for (const [jar, files] of byJar) {
      const got = unzipSync(fs.readFileSync(jar), { filter: e => files.has(e.name) });
      for (const [file, bytes] of Object.entries(got)) cache.set(`${jar}!${file}`, bytes);
    }
  };
  const evict = ids => {
    for (const id of ids) {
      const [ns, rel] = id.includes(':') ? id.split(':') : ['minecraft', id];
      for (const jar of byNamespace.get(ns) ?? []) cache.delete(`${jar}!assets/${ns}/${rel}`);
    }
  };
  // Every assets file in any namespace whose path matches, as "ns:path".
  const listAll = re => [...new Set([...entries.values()].flatMap(names => [...names].filter(n => n.startsWith('assets/') && re.test(n))))]
    .map(n => n.replace(/^assets\/([^/]+)\//, '$1:'));
  // Every file under assets/<ns>/ matching a pattern, for discovery.
  const list = (ns, re) => [...(byNamespace.get(ns) ?? [])].flatMap(jar => [...entries.get(jar)].filter(n => n.startsWith(`assets/${ns}/`) && re.test(n)).map(n => `${ns}:${n.slice(`assets/${ns}/`.length)}`));

  let mappings, classes;
  return {
    instance, mods, resource,
    // A file of a texture-manifest source (zip pack or folder), by index into its sources: "assets/ns/…".
    packFile: (sourceId, file) => { const i = manifest.sources.findIndex(s => s.id === sourceId); return i < 0 ? null : readEntry(i, null, file); }, cemDecisions: () => instance_stats.cem ?? [],
    // The manifest entry (winning source, animation) for "ns:textures/x.png", if the manifest knows it.
    textureInfo: id => manifest?.textures[id.includes(':') ? id : `minecraft:${id}`],
    textureSource: id => { const e = manifest?.textures[id]; return e && manifest.sources[e.s].id; }, list, listAll, prefetch, evict,
    jarsFor: ns => [...(byNamespace.get(ns) ?? [])],
    get mappings() {
      mappings ??= readMappings(path.join(libraries, `net/minecraft/client/${MC}/client-${MC}-mappings.txt`),
        path.join(libraries, `de/oceanlabs/mcp/mcp_config/${MC}/mcp_config-${MC}-mappings-merged.txt`));
      return mappings;
    },
    get classPath() {
      classes ??= classPath([clientSrg, joml, ...mods]);
      return classes;
    },
    rename(name) { return this.mappings.get(name) ?? name; },
  };
}
