// Snapshots CurseForge's Minecraft mods for the mod filter in dev-tools/mods/, one data file per category.
//   npm run mods              refresh cached mods, scan ids newer than the last scan, write the data files
//   npm run mods -- --full    rescan every CurseForge project id (about half an hour)
//   npm run mods -- --write   only rewrite the data files from the cache
// Needs CURSEFORGE_API_KEY (in .env). The key can't use /v1/mods/search, so mods are found by fetching ids in bulk.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { readJson, writeFile } from './lib/fsutil.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const API = 'https://api.curseforge.com/v1';
const KEY = process.env.CURSEFORGE_API_KEY;
const CACHE = path.join(ROOT, '.cache/curseforge-mods.json');
const OUT = path.join(ROOT, 'dev-tools/mods/data');
const MINECRAFT = 432, MODS = 6;
const BATCH = 5000, PARALLEL = 6;
// Mods below this many downloads are left out of the data files to keep them small.
const MIN_DOWNLOADS = 1000;
const ICON_PREFIX = 'https://media.forgecdn.net/avatars/thumbnails/';
const LOADERS = ['Any', 'Forge', 'Cauldron', 'LiteLoader', 'Fabric', 'Quilt', 'NeoForge'];
// CurseForge's FileRelationType values.
const REQUIRED = 3, OPTIONAL = 2, INCOMPATIBLE = 5;

const args = process.argv.slice(2);
const writeOnly = args.includes('--write');

async function api(url, body) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(API + url, {
        method: body ? 'POST' : 'GET',
        headers: { 'x-api-key': KEY, 'Content-Type': 'application/json', Accept: 'application/json' },
        body: body && JSON.stringify(body),
        signal: AbortSignal.timeout(120000),
      });
      // POST /mods answers 404 when none of the ids exist.
      if (res.status === 404) return [];
      if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
      return (await res.json()).data;
    } catch (err) {
      if (attempt === 6) throw new Error(`${url}: ${err.message}`);
      await new Promise(r => setTimeout(r, attempt * 10000));
    }
  }
}

function slim(m) {
  const deps = { [REQUIRED]: new Set(), [OPTIONAL]: new Set(), [INCOMPATIBLE]: new Set() };
  // shortcut: dependencies are the union over the mod's latest files, not per version; fetch per-file deps if that proves wrong.
  for (const f of m.latestFiles ?? []) for (const d of f.dependencies ?? []) deps[d.relationType]?.add(d.modId);
  const icon = m.logo?.thumbnailUrl ?? '';
  return {
    id: m.id, n: m.name, s: m.slug, d: m.summary, a: m.authors?.[0]?.name ?? '',
    dl: m.downloadCount, u: m.dateModified.slice(0, 10), r: m.dateReleased.slice(0, 10),
    c: m.categories.map(c => c.id),
    i: icon.startsWith(ICON_PREFIX) ? icon.slice(ICON_PREFIX.length) : icon,
    f: [...new Set((m.latestFilesIndexes ?? []).map(f => `${f.gameVersion}|${f.modLoader ?? 0}`))],
    req: [...deps[REQUIRED]], opt: [...deps[OPTIONAL]], inc: [...deps[INCOMPATIBLE]],
  };
}

async function update(cache) {
  if (!KEY) {
    console.error('CURSEFORGE_API_KEY is not set. Put it in .env.');
    process.exit(1);
  }
  const mods = new Map(cache?.mods.map(m => [m.id, m]));
  const take = list => {
    for (const m of list) if (m.gameId === MINECRAFT && m.classId === MODS) mods.set(m.id, slim(m));
    return list.length;
  };
  const fetchMods = ids => api('/mods', { modIds: ids });

  // The id space has long empty stretches (120,000 to 200,000+), so find the highest id first: probe 1,000 ids every
  // 25,000 from `start` until four probes in a row find nothing.
  async function findTop(start) {
    let top = start, misses = 0;
    for (let s = start; misses < 4; s += 25000) {
      const found = await fetchMods(Array.from({ length: 1000 }, (_, i) => s + i));
      if (found.length) { top = Math.max(top, ...found.map(m => m.id)); misses = 0; } else misses++;
    }
    return top + 25000;
  }

  // Scans every id from `start` to `end`, saving the cache every few rounds so an interrupted scan resumes from there.
  async function scan(start, end) {
    for (let next = start, round = 1; next < end; next += PARALLEL * BATCH, round++) {
      await Promise.all(Array.from({ length: PARALLEL }, (_, i) => next + i * BATCH)
        .map(s => fetchMods(Array.from({ length: BATCH }, (_, i) => s + i)).then(take)));
      const done = Math.min(next + PARALLEL * BATCH, end);
      console.log(`  scanned to ${done.toLocaleString()} of ${end.toLocaleString()}: ${mods.size.toLocaleString()} mods`);
      if (round % 5 === 0) save(done);
    }
    return end;
  }

  const categories = await api(`/categories?gameId=${MINECRAFT}&classId=${MODS}`);
  const save = scannedTo => {
    const fresh = { generated: new Date().toISOString(), scannedTo, categories, mods: [...mods.values()] };
    writeFile(CACHE, JSON.stringify(fresh));
    return fresh;
  };
  let scannedTo;
  if (!cache) {
    const top = await findTop(1000000);
    console.log(`Scanning every project id up to ${top.toLocaleString()}…`);
    scannedTo = await scan(1, top);
  } else {
    // shortcut: a refresh misses mods deleted since the last --full run (they stay cached); rerun --full now and then.
    const known = [...mods.keys()];
    console.log(`Refreshing ${known.length.toLocaleString()} cached mods…`);
    for (let i = 0; i < known.length; i += BATCH * PARALLEL) {
      await Promise.all(Array.from({ length: PARALLEL }, (_, k) => known.slice(i + k * BATCH, i + (k + 1) * BATCH))
        .filter(ids => ids.length).map(ids => fetchMods(ids).then(take)));
    }
    const top = await findTop(cache.scannedTo);
    console.log(`Scanning ids from ${cache.scannedTo.toLocaleString()} to ${top.toLocaleString()}…`);
    scannedTo = await scan(cache.scannedTo, top);
  }
  return save(scannedTo);
}

function writeData(cache) {
  const byId = new Map(cache.mods.map(m => [m.id, m]));
  const listed = cache.mods.filter(m => m.dl >= MIN_DOWNLOADS).sort((a, b) => b.dl - a.dl);
  fs.rmSync(OUT, { recursive: true, force: true });
  const index = [];
  for (const cat of cache.categories) {
    const mods = listed.filter(m => m.c.includes(cat.id));
    if (!mods.length) continue;
    // Version strings sorted newest first; files are stored as index * 8 + loader to keep the files small.
    const versions = [...new Set(mods.flatMap(m => m.f.map(f => f.split('|')[0])))].sort((a, b) => b.localeCompare(a, 'en', { numeric: true }));
    const versionIndex = new Map(versions.map((v, i) => [v, i]));
    const ids = new Set(mods.map(m => m.id));
    const refs = [...new Set(mods.flatMap(m => [...m.req, ...m.opt, ...m.inc]))].filter(id => !ids.has(id) && byId.has(id));
    const used = new Set(mods.flatMap(m => m.c));
    const file = path.join(OUT, `${cat.slug}.json`);
    writeFile(file, JSON.stringify({
      generated: cache.generated,
      category: { id: cat.id, name: cat.name, slug: cat.slug },
      iconPrefix: ICON_PREFIX,
      loaders: LOADERS,
      versions,
      categories: Object.fromEntries(cache.categories.filter(c => used.has(c.id)).map(c => [c.id, c.name])),
      libs: Object.fromEntries(refs.map(id => [id, [byId.get(id).n, byId.get(id).s]])),
      mods: mods.map(m => ({ ...m, f: m.f.map(k => { const [v, l] = k.split('|'); return versionIndex.get(v) * 8 + Number(l); }) })),
    }));
    const parent = cache.categories.find(c => c.id === cat.parentCategoryId && !c.isClass);
    index.push({ slug: cat.slug, name: cat.name, parent: parent?.name ?? null, count: mods.length, bytes: fs.statSync(file).size });
  }
  index.sort((a, b) => (a.parent ?? a.name).localeCompare(b.parent ?? b.name) || (a.parent ? 1 : 0) - (b.parent ? 1 : 0) || a.name.localeCompare(b.name));
  writeFile(path.join(OUT, 'index.json'), JSON.stringify({ generated: cache.generated, minDownloads: MIN_DOWNLOADS, categories: index }));
  const total = index.reduce((sum, c) => sum + c.bytes, 0);
  console.log(`Wrote ${index.length} categories (${listed.length.toLocaleString()} of ${cache.mods.length.toLocaleString()} mods have ${MIN_DOWNLOADS}+ downloads), ${(total / 1e6).toFixed(1)} MB in ${path.relative(ROOT, OUT)}/`);
  const largest = index.reduce((a, b) => a.bytes > b.bytes ? a : b);
  console.log(`Largest: ${largest.name}, ${largest.count.toLocaleString()} mods, ${(largest.bytes / 1e6).toFixed(1)} MB`);
}

const cached = fs.existsSync(CACHE) && !args.includes('--full') ? readJson(CACHE) : null;
if (writeOnly && !cached) {
  console.error(`No cache at ${path.relative(ROOT, CACHE)} yet. Run npm run mods first.`);
  process.exit(1);
}
writeData(writeOnly ? cached : await update(cached));
