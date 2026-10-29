// Snapshots CurseForge's Minecraft mods for the mod planner in dev-tools/, one data file per modpack role and per
// popular base mod (its addons).
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
// Modpack roles, each a union of CurseForge category slugs. A CurseForge category in none of them is reported, so new
// ones get placed; Addons is covered by the per-base-mod files instead.
const ROLES = [
  ['world', 'World & Exploration', 'Biomes, dimensions, structures and ores.', ['world-gen', 'world-biomes', 'world-dimensions', 'world-structures', 'world-ores-resources']],
  ['creatures', 'Creatures', 'New mobs, animals and bosses.', ['world-mobs']],
  ['adventure', 'Adventure & Combat', 'RPG systems, dungeons, weapons, armor and horror.', ['adventure-rpg', 'armor-weapons-tools', 'horror', 'addons-tinkers-construct', 'twilight-forest']],
  ['magic', 'Magic', 'Spells, rituals and magical progression.', ['magic', 'blood-magic', 'addons-thaumcraft']],
  ['tech', 'Tech & Automation', 'Machines, energy, processing, logistics and redstone.', ['technology', 'create', 'technology-automation', 'technology-energy', 'technology-item-fluid-energy-transport', 'technology-processing', 'technology-genetics', 'redstone', 'applied-energistics-2', 'refined-storage', 'integrated-dynamics', 'addons-industrialcraft', 'addons-thermalexpansion', 'addons-buildcraft', 'addons-forestry', 'galacticraft']],
  ['food', 'Food & Farming', 'Crops, cooking and farm automation.', ['mc-food', 'technology-farming', 'farmers-delight']],
  ['storage', 'Storage', 'Chests, backpacks and inventory systems.', ['storage']],
  ['travel', 'Travel & Transport', 'Vehicles, elevators, teleporters and trains.', ['technology-player-transport']],
  ['building', 'Building & Decoration', 'Blocks, furniture and cosmetics.', ['cosmetic']],
  ['qol', 'Quality of Life', 'Interface helpers, maps, tooltips and tweaks.', ['utility-qol', 'map-information']],
  ['performance', 'Performance & Fixes', 'Optimization and bug fixes.', ['performance', 'bug-fixes']],
  ['server', 'Server & Admin', 'Permissions, backups, chat and server tools.', ['server-utility']],
  ['libraries', 'Libraries & Scripting', 'APIs other mods need, KubeJS and CraftTweaker.', ['library-api', 'kubejs', 'crafttweaker']],
  ['misc', 'Everything Else', 'Miscellaneous, skyblock, education and MCreator mods.', ['mc-miscellaneous', 'education', 'skyblock', 'creativemode', 'twitch-integration', 'modjam-2025', 'mc-creator']],
];
const ADDON_SLUG = 'mc-addons', LIBRARY_SLUG = 'library-api';
// Base mods get their own addons file when at least this many listed mods require them (top ADDON_BASES only).
const ADDON_MIN = 25, ADDON_BASES = 30;
// Required by many mods but not something you build a pack section around (menus, shared code, loader bridges).
const NOT_BASES = new Set(['modmenu', 'blueprint', 'sinytra-connector']);
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
  // Per relation: dependency id -> bitmask of the loaders (LOADERS index) whose files declare it; 0 means an untagged file.
  const deps = { [REQUIRED]: new Map(), [OPTIONAL]: new Map(), [INCOMPATIBLE]: new Map() };
  // shortcut: dependencies come from the mod's latest files only, not every version; fetch per-file deps if that proves wrong.
  for (const f of m.latestFiles ?? []) {
    const mask = (f.gameVersions ?? []).reduce((bits, v) => { const l = LOADERS.indexOf(v); return l > 0 ? bits | (1 << l) : bits; }, 0);
    for (const d of f.dependencies ?? []) {
      const map = deps[d.relationType];
      const prev = map?.get(d.modId);
      map?.set(d.modId, prev === 0 || mask === 0 ? 0 : (prev ?? 0) | mask);
    }
  }
  const icon = m.logo?.thumbnailUrl ?? '';
  return {
    id: m.id, n: m.name, s: m.slug, d: m.summary, a: m.authors?.[0]?.name ?? '',
    dl: m.downloadCount, u: m.dateModified.slice(0, 10), r: m.dateReleased.slice(0, 10),
    c: m.categories.map(c => c.id), p: m.primaryCategoryId,
    i: icon.startsWith(ICON_PREFIX) ? icon.slice(ICON_PREFIX.length) : icon,
    f: [...new Set((m.latestFilesIndexes ?? []).map(f => `${f.gameVersion}|${f.modLoader ?? 0}`))],
    req: [...deps[REQUIRED].keys()], rl: [...deps[REQUIRED].values()],
    opt: [...deps[OPTIONAL].keys()], inc: [...deps[INCOMPATIBLE].keys()],
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
  const catBySlug = new Map(cache.categories.map(c => [c.slug, c]));
  const library = catBySlug.get(LIBRARY_SLUG).id;
  const placed = new Set([ADDON_SLUG, ...ROLES.flatMap(r => r[3])]);
  for (const c of cache.categories) if (!c.isClass && !placed.has(c.slug)) console.warn(`  CurseForge category "${c.name}" (${c.slug}) is in no role; add it to ROLES.`);
  fs.rmSync(OUT, { recursive: true, force: true });

  const write = (name, view, mods) => {
    // Version strings sorted newest first; files are stored as index * 8 + loader to keep the files small.
    const versions = [...new Set(mods.flatMap(m => m.f.map(f => f.split('|')[0])))].sort((a, b) => b.localeCompare(a, 'en', { numeric: true }));
    const versionIndex = new Map(versions.map((v, i) => [v, i]));
    const ids = new Set(mods.map(m => m.id));
    const refs = [...new Set(mods.flatMap(m => [...m.req, ...m.opt, ...m.inc]))].filter(id => !ids.has(id) && byId.has(id));
    const used = new Set(mods.flatMap(m => m.c));
    const file = path.join(OUT, `${name}.json`);
    writeFile(file, JSON.stringify({
      generated: cache.generated,
      view,
      iconPrefix: ICON_PREFIX,
      loaders: LOADERS,
      library,
      versions,
      categories: Object.fromEntries(cache.categories.filter(c => used.has(c.id)).map(c => [c.id, c.name])),
      libs: Object.fromEntries(refs.map(id => [id, [byId.get(id).n, byId.get(id).s]])),
      mods: mods.map(m => ({ ...m, f: m.f.map(k => { const [v, l] = k.split('|'); return versionIndex.get(v) * 8 + Number(l); }) })),
    }));
    return fs.statSync(file).size;
  };

  // A mod's main role comes from its primary category; when that maps to no role (Addons, say), every role it is tagged
  // with counts as main. Mods that only touch a role are marked o: 1 and shown there on request.
  const roleTypes = ROLES.map(r => r[3].map(c => catBySlug.get(c)?.id).filter(Boolean));
  const mainRoles = m => {
    const primary = roleTypes.findIndex(t => t.includes(m.p));
    return primary >= 0 ? [primary] : roleTypes.map((t, i) => m.c.some(c => t.includes(c)) ? i : -1).filter(i => i >= 0);
  };
  const main = new Map(listed.map(m => [m.id, mainRoles(m)]));
  const roles = ROLES.map(([slug, name, blurb], r) => {
    const types = roleTypes[r];
    const mods = listed.filter(m => m.c.some(c => types.includes(c))).map(m => main.get(m.id).includes(r) ? m : { ...m, o: 1 });
    const bytes = write(slug, { kind: 'role', slug, name, blurb, types }, mods);
    // The overview counts main-role content mods; libraries show in a role only when asked for.
    const count = mods.filter(m => !m.o && (slug === 'libraries' || !m.c.includes(library))).length;
    return { slug, name, blurb, count, bytes };
  });

  const dependents = new Map();
  for (const m of listed) for (const id of m.req) dependents.set(id, (dependents.get(id) ?? 0) + 1);
  const bases = [...dependents].filter(([id, n]) => n >= ADDON_MIN && byId.get(id)?.dl >= MIN_DOWNLOADS && !byId.get(id).c.includes(library) && !NOT_BASES.has(byId.get(id).s))
    .sort((a, b) => b[1] - a[1]).slice(0, ADDON_BASES)
    .map(([id]) => {
      const base = byId.get(id);
      const mods = listed.filter(m => m.req.includes(id));
      const bytes = write(`addons-${base.s}`, { kind: 'addons', slug: base.s, name: base.n, base: id }, mods);
      // Counted like roles: libraries stay hidden in the planner unless asked for.
      return { slug: base.s, name: base.n, id, count: mods.filter(m => !m.c.includes(library)).length, bytes };
    });

  writeFile(path.join(OUT, 'index.json'), JSON.stringify({ generated: cache.generated, minDownloads: MIN_DOWNLOADS, total: listed.length, roles, addons: bases }));
  const all = [...roles, ...bases];
  const total = all.reduce((sum, c) => sum + c.bytes, 0);
  const largest = all.reduce((a, b) => a.bytes > b.bytes ? a : b);
  console.log(`Wrote ${roles.length} roles and ${bases.length} addon sets (${listed.length.toLocaleString()} of ${cache.mods.length.toLocaleString()} mods have ${MIN_DOWNLOADS}+ downloads), ${(total / 1e6).toFixed(1)} MB in ${path.relative(ROOT, OUT)}/`);
  console.log(`Largest: ${largest.name}, ${(largest.bytes / 1e6).toFixed(1)} MB`);
}

const cached = fs.existsSync(CACHE) && !args.includes('--full') ? readJson(CACHE) : null;
if (writeOnly && !cached) {
  console.error(`No cache at ${path.relative(ROOT, CACHE)} yet. Run npm run mods first.`);
  process.exit(1);
}
writeData(writeOnly ? cached : await update(cached));
