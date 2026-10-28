// Pulls item names, icons, recipes and tags from the modpack instance into game-data/.
//   npm run sync-game
//   npm run sync-game -- --instance <dir> --icons <dir> --packs "A.zip,B.zip"
//
// Sources, later ones win:
//   1. Static scan of the vanilla jar, mods/*.jar and datapacks/*.zip: items (from item models and
//      en_us names), flat icons (the texture each item model points at), recipes and item tags.
//      Needs no running game, but misses KubeJS changes, tooltips and 3D block icons.
//      --packs applies resource-pack models and textures on top, in the order given.
//   2. kubejs/exported/wiki/{items,recipes,tags}.json, written in game by tools/kubejs/*/wiki_export.js:
//      exact names, rarities, tooltips, and recipes/tags after KubeJS changes. The same export's data
//      files (EXPORT_DATA below) are copied as they are, plus loot-index.json built from loot tables.
//   3. Rendered icons from an icon-export mod (a folder of <namespace>__<path>.png files).
// movesets.json (Epic Fight weapon types, combos and skills) is read from mod bytecode and capability JSON;
// see tools/lib/movesets.mjs. skilltrees.json and skilltrees/ (Passive Skill Tree layouts, tooltips and
// textures) come from the Paxi packs; see tools/lib/skilltrees.mjs.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { unzipSync, strFromU8 } from 'fflate';
import { PNG } from 'pngjs';
import { extractMovesets } from './lib/movesets.mjs';
import { readSkillTrees, writeSkillTrees } from './lib/skilltrees.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'game-data');
const CURSEFORGE = path.join(os.homedir(), 'Documents/curseforge/minecraft');
const args = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : fallback;
};
const INSTANCE = path.resolve(arg('instance', path.join(CURSEFORGE, 'Instances/Soulrend-Development')));
const CLIENT_JAR = arg('jar', path.join(CURSEFORGE, 'Install/versions/1.20.1/1.20.1.jar'));
const PACKS = (arg('packs', '') || '').split(',').map(s => s.trim()).filter(Boolean)
  .map(p => path.isAbsolute(p) ? p : path.join(INSTANCE, 'resourcepacks', p));
const EXPORT_DIR = path.join(INSTANCE, 'kubejs/exported/wiki');
// In-game export files copied to game-data/ unchanged: export name -> game-data name.
const EXPORT_DATA = {
  'item_stats.json': 'item-stats.json',
  'loot_tables.json': 'loot-tables.json',
  'gems.json': 'gems.json',
  'skills.json': 'skills.json',
  'spells.json': 'spells.json',
  'attributes.json': 'attributes.json',
  'effects.json': 'effects.json',
  'enchantments.json': 'enchantments.json',
};

const LANG = /^assets\/([a-z0-9_.-]+)\/lang\/en_us\.json$/;
const MODEL = /^assets\/([a-z0-9_.-]+)\/models\/([a-z0-9_./-]+)\.json$/;
const TEXTURE = /^assets\/([a-z0-9_.-]+)\/textures\/([a-z0-9_./-]+)\.png$/;
const FONT = /^assets\/([a-z0-9_.-]+)\/font\/([a-z0-9_./-]+)\.json$/;
const RECIPE = /^data\/([a-z0-9_.-]+)\/recipes\/(.+)\.json$/;
const ITEM_TAG = /^data\/([a-z0-9_.-]+)\/tags\/items\/(.+)\.json$/;
const NAME_KEY = /^(item|block)\.([a-z0-9_-]+)\.([a-z0-9_]+)$/;
const DESC_KEY = /^(item|block)\.([a-z0-9_-]+)\.([a-z0-9_]+)\.(desc|description|tooltip)$/;
// Abstract vanilla item models that aren't items themselves.
const NOT_ITEMS = /^minecraft:(generated|handheld|handheld_rod|template_.*)$/;
// Texture slots to try, in order, when picking a flat icon from a (block) model.
const ICON_SLOTS = ['layer0', 'all', 'side', 'front', 'texture', 'top', 'end', 'cross', 'plant', 'wool', 'particle'];

const itemNames = new Map();    // from item.<ns>.<id> keys
const blockNames = new Map();   // from block.<ns>.<id> keys, used for block items
const descriptions = new Map();
const lang = new Map();          // every en_us string, for the skill tree tooltips
const models = new Map();       // "ns:item/x" | "ns:block/x" -> model JSON
const modNames = new Map([['minecraft', 'Minecraft'], ['forge', 'Forge']]);
const loadedMods = new Set(['minecraft', 'forge']);
const textures = new Map();     // "ns:block/x" -> PNG bytes (only the ones icons need)
const rawRecipes = new Map();
const tagFiles = new Map();     // tag -> tag files in load order
const fontProviders = [];      // bitmap font providers that draw private-use characters (tooltip icons)
const counts = { archives: 0, badJson: 0 };
// Tooltip lines that are mod internals rather than text players see.
const TOOLTIP_BLACKLIST = [/^APOTH_REMOVE_MARKER$/];
const PRIVATE_USE = /[\uE000-\uF8FF]/;

function parseJson(bytes) {
  try {
    return JSON.parse(strFromU8(bytes).replace(/^﻿/, ''));
  } catch {
    counts.badJson++;
    return null;
  }
}

function readZip(file, filter) {
  try {
    return unzipSync(new Uint8Array(fs.readFileSync(file)), { filter });
  } catch (error) {
    console.warn(`  skipped ${path.basename(file)}: ${error.message}`);
    return {};
  }
}

function readModsToml(bytes) {
  const text = strFromU8(bytes);
  for (const block of text.split(/\[\[\s*mods\s*\]\]/).slice(1)) {
    const value = key => {
      const m = new RegExp(`^\\s*${key}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, 'm').exec(block);
      return m ? m[1] ?? m[2] : null;
    };
    const id = value('modId');
    const display = value('displayName');
    if (!id) continue;
    loadedMods.add(id);
    if (display && !display.includes('${')) modNames.set(id, display);
  }
}

// Pass 1: everything except textures.
function scanArchive(file, { data = true } = {}) {
  counts.archives++;
  const entries = readZip(file, f => f.name === 'META-INF/mods.toml' || LANG.test(f.name) || MODEL.test(f.name) || FONT.test(f.name)
    || (data && (RECIPE.test(f.name) || ITEM_TAG.test(f.name))));
  for (const [name, bytes] of Object.entries(entries)) {
    let m;
    if (name === 'META-INF/mods.toml') {
      readModsToml(bytes);
    } else if (LANG.test(name)) {
      readLang(parseJson(bytes) ?? {});
    } else if ((m = MODEL.exec(name))) {
      const json = parseJson(bytes);
      if (json) models.set(`${m[1]}:${m[2]}`, json);
    } else if (FONT.test(name)) {
      for (const provider of parseJson(bytes)?.providers ?? []) {
        if (provider.type === 'bitmap' && provider.chars?.some(row => PRIVATE_USE.test(row))) fontProviders.push(provider);
      }
    } else if ((m = RECIPE.exec(name))) {
      const json = parseJson(bytes);
      if (json && typeof json === 'object' && json.type) rawRecipes.set(`${m[1]}:${m[2]}`, json);
    } else if ((m = ITEM_TAG.exec(name))) {
      const json = parseJson(bytes);
      if (!json) continue;
      const tag = `${m[1]}:${m[2]}`;
      if (!tagFiles.has(tag)) tagFiles.set(tag, []);
      tagFiles.get(tag).push(json);
    }
  }
}

function readLang(entries) {
  for (const [key, value] of Object.entries(entries)) {
    if (typeof value !== 'string') continue;
    lang.set(key, value);
    const nameMatch = NAME_KEY.exec(key);
    if (nameMatch) {
      (nameMatch[1] === 'item' ? itemNames : blockNames).set(`${nameMatch[2]}:${nameMatch[3]}`, value);
      continue;
    }
    const descMatch = DESC_KEY.exec(key);
    if (descMatch && !value.includes('%')) descriptions.set(`${descMatch[2]}:${descMatch[3]}`, value);
  }
}

// Pass 2: just the textures that icons point at.
function extractTextures(file, needed) {
  const entries = readZip(file, f => {
    const m = TEXTURE.exec(f.name);
    return !!m && needed.has(`${m[1]}:${m[2]}`);
  });
  for (const [name, bytes] of Object.entries(entries)) {
    const m = TEXTURE.exec(name);
    textures.set(`${m[1]}:${m[2]}`, bytes);
  }
}

// "block/stone" -> "minecraft:block/stone"
const ref = value => (value.includes(':') ? value : `minecraft:${value}`);

// A model's textures merged with its parents' (children win). `entity` is set when the model is drawn by
// code (builtin/entity, e.g. GeckoLib): its textures are UV maps for a 3D model, not usable as flat icons.
// Forge's separate_transforms loader picks a different model per view; icons use the inventory ("gui") one.
function modelTextures(model, depth = 0) {
  const json = typeof model === 'string' ? models.get(model) : model;
  if (!json || depth > 16) return { textures: {}, entity: false };
  if (json.loader === 'forge:separate_transforms') {
    const view = json.perspectives?.gui ?? json.base;
    if (view) return modelTextures(view, depth + 1);
  }
  const parentRef = typeof json.parent === 'string' ? ref(json.parent) : null;
  const inherited = parentRef === 'minecraft:builtin/entity'
    ? { textures: {}, entity: true }
    : parentRef ? modelTextures(parentRef, depth + 1) : { textures: {}, entity: false };
  return { textures: { ...inherited.textures, ...(json.textures ?? {}) }, entity: inherited.entity };
}

// Candidate textures for an item's flat icon, best first.
function iconCandidates(id) {
  const [ns, name] = id.split(':');
  const { textures: tex, entity } = modelTextures(`${ns}:item/${name}`);
  if (entity) return []; // drawn in 3D by code; only a rendered icon export can show it
  const resolve = slot => {
    let value = tex[slot];
    for (let i = 0; typeof value === 'string' && value.startsWith('#') && i < 8; i++) value = tex[value.slice(1)];
    return typeof value === 'string' && !value.startsWith('#') ? ref(value) : null;
  };
  const fromModel = [...ICON_SLOTS, ...Object.keys(tex)].map(resolve).filter(Boolean);
  return [...new Set([...fromModel, `${ns}:item/${name}`, `${ns}:block/${name}`])];
}

// Forge recipe conditions we can check without the game: mod_loaded, item_exists, not/and/or/false.
function conditionsHold(conditions, itemIds) {
  const check = c => {
    switch (c?.type) {
      case 'forge:mod_loaded': return loadedMods.has(c.modid);
      case 'forge:item_exists': return itemIds.has(c.item);
      case 'forge:not': return !check(c.value);
      case 'forge:and': return (c.values ?? []).every(check);
      case 'forge:or': return (c.values ?? []).some(check);
      case 'forge:false': return false;
      default: return true;
    }
  };
  return (conditions ?? []).every(check);
}

// Applies conditions and unwraps forge:conditional (the first alternative whose conditions hold).
function activeRecipe(json, itemIds) {
  if (!conditionsHold(json.conditions, itemIds)) return null;
  if (json.type === 'forge:conditional') {
    const entry = (json.recipes ?? []).find(e => conditionsHold(e.conditions, itemIds));
    return entry ? activeRecipe(entry.recipe, itemIds) : null;
  }
  const { conditions, ...rest } = json;
  return rest;
}

function expandTags(itemIds) {
  const raw = new Map();
  for (const [tag, files] of tagFiles) {
    let values = [];
    for (const file of files) {
      if (file.replace) values = [];
      for (const v of file.values ?? []) {
        const id = typeof v === 'string' ? v : v?.id;
        if (id) values.push(id);
      }
    }
    raw.set(tag, values);
  }
  const done = new Map();
  const resolve = (tag, seen = new Set()) => {
    if (done.has(tag)) return done.get(tag);
    if (seen.has(tag)) return [];
    seen.add(tag);
    const out = new Set();
    for (const v of raw.get(tag) ?? []) {
      if (v.startsWith('#')) resolve(v.slice(1), seen).forEach(id => out.add(id));
      else if (itemIds.has(v)) out.add(v);
    }
    const list = [...out].sort();
    done.set(tag, list);
    return list;
  };
  const tags = {};
  for (const tag of [...raw.keys()].sort()) {
    const members = resolve(tag);
    if (members.length) tags[tag] = members;
  }
  return tags;
}

// soulrend_core's removals.toml runs on TagsUpdatedEvent, after the KubeJS recipe event, so an export made
// before wiki_export.js filtered against the live recipe manager (and the jar scan) still has those recipes.
// Mirrors RecipeRules: protected ids are kept; byOutput tests the result item; byInput tests every
// ingredient, with smithing slots only on vanilla smithing recipes. Ingredients are read from the JSON.
const PROTECTED_RECIPE_NAMESPACES = new Set(['soulrend_core', 'soulrend', 'kubejs']);
const RESULT_KEYS = new Set(['result', 'results', 'output', 'outputs']);
const SMITHING_KEYS = new Set(['template', 'base', 'addition']);
const VANILLA_SMITHING = new Set(['minecraft:smithing_transform', 'minecraft:smithing_trim']);

function readRecipeRemovals() {
  const file = path.join(INSTANCE, 'config/soulrend_core/recipes/removals.toml');
  if (!fs.existsSync(file)) return null;
  const text = fs.readFileSync(file, 'utf8').replace(/^\s*#.*$/gm, '');
  const list = key => {
    const m = new RegExp(`^\\s*${key}\\s*=\\s*\\[([^\\]]*)\\]`, 'm').exec(text);
    return m ? [...m[1].matchAll(/"([^"]*)"|'([^']*)'/g)].map(q => (q[1] ?? q[2]).trim()) : [];
  };
  return { byId: list('byId'), byOutput: list('byOutput'), byInput: list('byInput'), byMod: list('byMod') };
}

function removeRecipes(recipes, rules, tags) {
  const items = entries => new Set(entries.flatMap(e => e.startsWith('#') ? tags[e.slice(1)] ?? [] : [e]));
  const ids = new Set(rules.byId);
  const mods = new Set(rules.byMod);
  const outputs = items(rules.byOutput);
  const inputs = items(rules.byInput);
  const resultOf = json => {
    for (const key of RESULT_KEYS) {
      if (json[key] == null) continue;
      const r = Array.isArray(json[key]) ? json[key][0] : json[key];
      return typeof r === 'string' ? r : r?.item ?? r?.id;
    }
    return null;
  };
  const usesInput = (value, smithing) => {
    if (Array.isArray(value)) return value.some(v => usesInput(v, smithing));
    if (!value || typeof value !== 'object') return false;
    if (typeof value.item === 'string' && inputs.has(value.item)) return true;
    if (typeof value.tag === 'string' && (tags[value.tag] ?? []).some(id => inputs.has(id))) return true;
    return Object.entries(value).some(([k, v]) => !RESULT_KEYS.has(k) && k !== 'tool' && (smithing || !SMITHING_KEYS.has(k)) && usesInput(v, smithing));
  };
  const removed = [];
  for (const [id, json] of Object.entries(recipes)) {
    const [ns, recipePath] = id.split(':');
    if (PROTECTED_RECIPE_NAMESPACES.has(ns) || recipePath.startsWith('kjs/')) continue;
    if (ids.has(id) || mods.has(ns) || outputs.has(resultOf(json)) || (inputs.size && usesInput(json, VANILLA_SMITHING.has(json.type)))) {
      removed.push(id);
      delete recipes[id];
    }
  }
  return removed;
}

function readExport(name) {
  const file = path.join(EXPORT_DIR, name);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

// The icon-export mod's output: the newest instance folder with "icon" and "export" in its name.
function findIconExport() {
  const explicit = arg('icons', null);
  if (explicit) return path.resolve(explicit);
  const candidates = fs.readdirSync(INSTANCE, { withFileTypes: true })
    .filter(d => d.isDirectory() && /icon/i.test(d.name) && /export/i.test(d.name))
    .map(d => path.join(INSTANCE, d.name))
    .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);
  return candidates[0] ?? null;
}

// item id -> every loot-table entry that can drop it. Only data-driven tables: global loot modifiers
// and drops made in code aren't loot tables. Weight is out of the pool's total entry weight.
function lootIndex(tables) {
  const index = {};
  const countOf = functions => {
    const fn = (functions ?? []).find(f => String(f.function).replace(/^minecraft:/, '') === 'set_count');
    return fn ? fn.count : 1;
  };
  for (const [table, json] of Object.entries(tables)) {
    // A table the game failed to serialize comes through as null.
    (json?.pools ?? []).forEach((pool, p) => {
      const entries = pool.entries ?? [];
      const totalWeight = entries.reduce((sum, e) => sum + (e.weight ?? 1), 0);
      // Items inside alternatives/group/sequence entries share the parent's weight; `within` names it.
      const visit = (entry, weight, within) => {
        const type = String(entry.type ?? '').replace(/^minecraft:/, '');
        if (type === 'item' && entry.name) {
          (index[entry.name] ??= []).push({ table, pool: p, weight, totalWeight, rolls: pool.rolls ?? 1, count: countOf(entry.functions), conditions: (entry.conditions ?? pool.conditions ?? []).length > 0, ...(within && { within }) });
        }
        for (const child of entry.children ?? []) visit(child, weight, within ?? type);
      };
      for (const entry of entries) visit(entry, entry.weight ?? 1, null);
    });
  }
  return index;
}

function writeJson(name, value) {
  const sorted = Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)));
  fs.writeFileSync(path.join(OUT, name), JSON.stringify(sorted, null, 1) + '\n');
}

// ---- run ----
if (!fs.existsSync(INSTANCE)) {
  console.error(`Instance not found: ${INSTANCE}\nPass --instance <path to the modpack instance>.`);
  process.exit(1);
}
const started = performance.now();
console.log(`Scanning ${INSTANCE}`);

const archives = [];
if (fs.existsSync(CLIENT_JAR)) archives.push({ file: CLIENT_JAR });
else console.warn(`  vanilla jar not found (${CLIENT_JAR}); vanilla items will be missing. Pass --jar.`);
for (const jar of fs.readdirSync(path.join(INSTANCE, 'mods')).filter(f => f.endsWith('.jar')).sort()) {
  archives.push({ file: path.join(INSTANCE, 'mods', jar) });
}
for (const dir of ['datapacks', 'kubejs']) {
  const full = path.join(INSTANCE, dir);
  if (fs.existsSync(full)) for (const zip of fs.readdirSync(full).filter(f => f.endsWith('.zip'))) archives.push({ file: path.join(full, zip) });
}
for (const pack of PACKS) archives.push({ file: pack, data: false });

archives.forEach(({ file, data }, i) => {
  if (i % 50 === 0) process.stdout.write(`  reading ${i}/${archives.length}\r`);
  scanArchive(file, { data });
});
console.log(`  read ${archives.length} archives${counts.badJson ? ` (${counts.badJson} unreadable JSON files skipped)` : ''}`);

// Items: every item model (minus abstract ones) plus anything with an item.* name.
const scannedIds = new Set(itemNames.keys());
for (const key of models.keys()) {
  const [ns, modelPath] = key.split(':');
  if (!modelPath.startsWith('item/')) continue;
  const id = `${ns}:${modelPath.slice(5)}`;
  if (!id.includes('/') && !NOT_ITEMS.test(id)) scannedIds.add(id);
}

const exported = { items: readExport('items.json'), recipes: readExport('recipes.json'), tags: readExport('tags.json') };
const items = {};
if (exported.items) {
  Object.assign(items, exported.items);
} else {
  for (const id of scannedIds) {
    const ns = id.split(':')[0];
    items[id] = {
      name: itemNames.get(id) ?? blockNames.get(id) ?? id.split(':')[1].split('_').map(w => w[0]?.toUpperCase() + w.slice(1)).join(' '),
      mod: modNames.get(ns) ?? ns,
      rarity: 'common',
      tooltip: descriptions.has(id) ? [`§7${descriptions.get(id)}`] : [],
    };
  }
}
for (const item of Object.values(items)) {
  item.tooltip = (item.tooltip ?? []).filter(line => !TOOLTIP_BLACKLIST.some(re => re.test(line.replace(/§(#[0-9a-f]{6}|.)/gi, ''))));
}
const itemIds = new Set(Object.keys(items));

let recipes = exported.recipes;
if (!recipes) {
  recipes = {};
  for (const [id, raw] of rawRecipes) {
    const json = activeRecipe(raw, itemIds);
    if (json) recipes[id] = json;
  }
}
const tags = exported.tags ?? expandTags(itemIds);
const removalRules = readRecipeRemovals();
const removedRecipes = removalRules ? removeRecipes(recipes, removalRules, tags) : [];

// Icons: a rendered export wins; otherwise the texture the item's model points at.
const rendered = new Map();
const iconDir = findIconExport();
if (iconDir && fs.existsSync(iconDir)) {
  // IconExporter names files <modid>__<path>[__<meta>][__{nbt} | __<md5 of nbt>].png, with "/" in
  // paths written as "___". Prefer the plain item; items only exported with NBT (e.g. tools with
  // {Damage:0}) fall back to their first NBT variant.
  const variants = new Map();
  for (const file of fs.readdirSync(iconDir).filter(f => f.endsWith('.png')).sort()) {
    let name = file.slice(0, -4);
    const nbtAt = name.search(/__(\{|[0-9a-f]{32}$)/);
    const hasNbt = nbtAt >= 0;
    if (hasNbt) name = name.slice(0, nbtAt);
    name = name.replace(/__\d+$/, '');
    const split = name.indexOf('__');
    if (split < 0) continue;
    const id = `${name.slice(0, split)}:${name.slice(split + 2).replaceAll('___', '/')}`;
    if (!hasNbt) rendered.set(id, path.join(iconDir, file));
    else if (!variants.has(id)) variants.set(id, path.join(iconDir, file));
  }
  for (const [id, file] of variants) if (!rendered.has(id)) rendered.set(id, file);

}
const candidates = new Map();
const needed = new Set();
for (const id of itemIds) {
  if (rendered.has(id)) continue;
  const list = iconCandidates(id);
  candidates.set(id, list);
  list.forEach(t => needed.add(t));
}
// Skill tree node textures and the mod's screen textures.
const skillTrees = readSkillTrees(INSTANCE);
for (const key of skillTrees.needed) needed.add(key);
// Sheets for mod font icons (e.g. Obscure API's hunger/saturation/damage symbols in tooltips).
const glyphSheet = provider => `${ref(provider.file).replace(/\.png$/, '')}`;
for (const provider of fontProviders) needed.add(glyphSheet(provider));
archives.forEach(({ file }, i) => {
  if (i % 50 === 0) process.stdout.write(`  textures ${i}/${archives.length}\r`);
  extractTextures(file, needed);
});

fs.rmSync(path.join(OUT, 'icons'), { recursive: true, force: true });
const iconCounts = { rendered: 0, flat: 0, entity: 0, none: 0 };
for (const id of itemIds) {
  let bytes = null;
  if (rendered.has(id)) {
    bytes = fs.readFileSync(rendered.get(id));
    iconCounts.rendered++;
  } else {
    const texture = candidates.get(id).find(t => textures.has(t));
    if (!texture && !candidates.get(id).length) iconCounts.entity++;
    if (texture) {
      bytes = textures.get(texture);
      iconCounts.flat++;
    }
  }
  if (!bytes) {
    iconCounts.none++;
    continue;
  }
  const [ns, name] = id.split(':');
  const target = path.join(OUT, 'icons', ns, `${name}.png`);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, bytes);
}

// Glyphs: private-use character -> cell on a copied sheet. Rendered as inline sprites by the wiki.
fs.rmSync(path.join(OUT, 'glyphs'), { recursive: true, force: true });
const glyphs = {};
for (const provider of fontProviders) {
  const key = glyphSheet(provider);
  const bytes = textures.get(key);
  if (!bytes) continue;
  const { width, height } = PNG.sync.read(Buffer.from(bytes));
  const rows = provider.chars.map(row => Array.from(row));
  const cellW = width / rows[0].length;
  const cellH = height / rows.length;
  const sheet = `${key.replace(':', '/')}.png`;
  fs.mkdirSync(path.dirname(path.join(OUT, 'glyphs', sheet)), { recursive: true });
  fs.writeFileSync(path.join(OUT, 'glyphs', sheet), bytes);
  rows.forEach((row, r) => row.forEach((char, c) => {
    const cp = char.codePointAt(0);
    if (cp < 0xe000 || cp > 0xf8ff || glyphs[cp.toString(16)]) return;
    glyphs[cp.toString(16)] = { sheet, x: c * cellW, y: r * cellH, w: cellW, h: cellH, sheetW: width, sheetH: height, height: provider.height ?? 8, ascent: provider.ascent };
  }));
}

fs.mkdirSync(OUT, { recursive: true });
writeJson('glyphs.json', glyphs);
writeJson('items.json', items);
writeJson('recipes.json', recipes);
writeJson('tags.json', tags);
const exportedData = [];
for (const [name, target] of Object.entries(EXPORT_DATA)) {
  const data = readExport(name);
  if (!data) {
    fs.rmSync(path.join(OUT, target), { force: true });
    if (name === 'loot_tables.json') fs.rmSync(path.join(OUT, 'loot-index.json'), { force: true });
    continue;
  }
  writeJson(target, data);
  exportedData.push(`${target.replace(/\.json$/, '')} (${Object.keys(data).length})`);
  if (name === 'loot_tables.json') writeJson('loot-index.json', lootIndex(data));
}
const movesets = extractMovesets({ instance: INSTANCE, itemStats: readExport('item_stats.json') ?? {} });
writeJson('movesets.json', movesets.data);
const skillTreeNames = {
  attributes: readExport('attributes.json') ?? {},
  effects: readExport('effects.json') ?? {},
  spells: readExport('spells.json') ?? {},
  items,
};
const skillTreeResult = skillTrees.trees.size
  ? writeSkillTrees({ instance: INSTANCE, read: skillTrees, textures, lang, names: skillTreeNames, outDir: OUT })
  : null;
const source = {
  syncedAt: new Date().toISOString(),
  items: exported.items ? 'kubejs export' : 'jar scan',
  recipes: exported.recipes ? 'kubejs export' : 'jar scan',
  recipesRemoved: removalRules ? removedRecipes.length : null,
  tags: exported.tags ? 'kubejs export' : 'jar scan',
  data: exportedData,
  icons: { folder: rendered.size ? path.relative(INSTANCE, iconDir) : null, ...iconCounts },
};
writeJson('source.json', source);

console.log(`Wrote game-data/ in ${((performance.now() - started) / 1000).toFixed(1)} s
  items:   ${itemIds.size} (${source.items})
  recipes: ${Object.keys(recipes).length} (${source.recipes}; ${removalRules ? `${removedRecipes.length} dropped by soulrend_core removals.toml` : 'removals.toml not found'})
  tags:    ${Object.keys(tags).length} (${source.tags})
  data:    ${exportedData.length ? exportedData.join(', ') : 'none (run the in-game export)'}
  movesets: ${movesets.summary}
  skill trees: ${skillTreeResult ? skillTreeResult.summary : 'none (Passive Skill Tree not installed)'}
  glyphs:  ${Object.keys(glyphs).length} tooltip icons from ${fontProviders.length} font sheets
  icons:   ${iconCounts.rendered} rendered, ${iconCounts.flat} flat textures, ${iconCounts.none} missing (${iconCounts.entity} are 3D-rendered items that need the icon export)`);
if (!exported.recipes) {
  console.log('\nNote: recipes come from mod jars and do not include KubeJS changes. Run the in-game export for exact data (see README).');
}
