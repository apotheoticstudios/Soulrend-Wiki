import fs from 'node:fs';
import path from 'node:path';
import { validate, lineOfPointer } from './validate.mjs';
import { jsonErrorLine } from './diagnostics.mjs';
import { createLootModel } from './loot.mjs';
import { stripMcCodes } from '../../src/shared/mctext.js';

const REL = 'site/loot-sources.json';

// Fixed icon per kind, used when a source has no egg or block of its own.
const KIND_ICONS = {
  chest: 'minecraft:chest',
  mob: 'minecraft:bone',
  block: 'minecraft:grass_block',
  fishing: 'minecraft:fishing_rod',
  archaeology: 'minecraft:brush',
  barter: 'minecraft:gold_ingot',
  gift: 'minecraft:poppy',
  other: 'minecraft:map',
};
const TYPE_KINDS = { chest: 'chest', entity: 'mob', block: 'block', fishing: 'fishing', archaeology: 'archaeology', barter: 'barter', gift: 'gift' };
const FOLDER_KINDS = [
  [/^chests?\//, 'chest'],
  [/^entit(y|ies)\//, 'mob'],
  [/^blocks\//, 'block'],
  [/^gameplay\/fishing/, 'fishing'],
  [/^archa?eology\//, 'archaeology'],
  [/^barter\/|_barter$/, 'barter'],
  [/^injects?\/.*_gift$/, 'gift'],
  [/^injects?\//, 'chest'],
  [/^gameplay\/hero_of_the_village/, 'gift'],
];

export function loadLootSources(root, diag) {
  const file = path.join(root, REL);
  const empty = { labels: {}, extra: {} };
  if (!fs.existsSync(file)) return empty;
  const text = fs.readFileSync(file, 'utf8');
  let data;
  try {
    data = JSON.parse(text);
  } catch (error) {
    diag.error(REL, jsonErrorLine(error, text), `Invalid JSON: ${error.message}`);
    return empty;
  }
  const problems = validate('loot-sources', data, root);
  for (const p of problems) diag.error(REL, lineOfPointer(text, p.pointer), p.message);
  return problems.length ? empty : { labels: data.labels ?? {}, extra: data.extra ?? {} };
}

const words = text => text.split(/[_-]+/).filter(Boolean).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

// "99.996%" would read as certain, so only a true 100% prints as 100%.
export function formatChance(chance) {
  const pct = chance * 100;
  if (pct >= 100 - 1e-9) return '100%';
  if (pct >= 99.95) return '99.9%';
  if (pct < 0.01) return '<0.01%';
  return `${+pct.toPrecision(3)}%`;
}

const formatCount = ({ min, max }) => {
  const low = Math.round(min), high = Math.round(max);
  return low === high ? String(low) : `${low}–${high}`;
};

// oasis_village/oasis_village_cartographer -> "Oasis Village: Cartographer"
function placeLabel(parts) {
  if (parts.length === 1) return words(parts[0]);
  const top = parts[0];
  let leaf = parts[parts.length - 1];
  if (leaf.startsWith(top + '_')) leaf = leaf.slice(top.length + 1);
  return leaf === top ? words(top) : `${words(top)}: ${words(leaf)}`;
}

// Everything the [[loot:…]] trigger and the viewer's JSON files need.
export function createLootViewer({ game, atlas, overrides, itemOwner }) {
  const model = createLootModel(game.lootTables ?? {}, game.tags);
  const used = new Map();
  const autoLabels = new Map();

  const modByNamespace = new Map();
  for (const [id, info] of game.items) {
    const ns = id.split(':')[0];
    if (info.mod && !modByNamespace.has(ns)) modByNamespace.set(ns, stripMcCodes(info.mod));
  }
  const modName = ns => modByNamespace.get(ns) ?? words(ns);
  const hasIcon = id => fs.existsSync(atlas.iconFile(id));
  const cell = id => {
    const pos = hasIcon(id) ? atlas.place(id) : null;
    return pos ? [pos.x, pos.y] : null;
  };
  const itemName = id => {
    const name = game.items.get(id)?.name;
    return name ? stripMcCodes(name) : words(id.split(':')[1].split('/').pop());
  };

  function override(table) {
    if (overrides.labels[table]) return overrides.labels[table];
    let best = null;
    for (const key of Object.keys(overrides.labels)) {
      if (/[:/]$/.test(key) && table.startsWith(key) && (!best || key.length > best.length)) best = key;
    }
    return best ? overrides.labels[best] : null;
  }

  function describe(table) {
    const [tableNs, tablePath = ''] = table.split(':');
    // End Remastered files its additions under minecraft/, naming the vanilla table they join.
    const injected = tablePath.startsWith('minecraft/');
    const ns = injected ? 'minecraft' : tableNs;
    const rest = injected ? tablePath.slice('minecraft/'.length) : tablePath;
    const manual = override(table);
    const type = String(game.lootTables?.[table]?.type ?? '').replace(/^minecraft:/, '');
    const kind = manual?.kind ?? TYPE_KINDS[type] ?? FOLDER_KINDS.find(([re]) => re.test(rest))?.[1] ?? 'other';
    const parts = rest.split('/').filter(p => !/^(chests?|entit(y|ies)|blocks|gameplay|archa?eology|barter|injects?)$/.test(p));
    if (!parts.length) parts.push(rest.split('/').pop());
    let label, owner = null, icon = null;

    if (kind === 'mob') {
      const mob = `${ns}:${parts[0]}`;
      const egg = `${mob}_spawn_egg`;
      const name = game.mobs.get(mob)?.name ?? game.entityNames?.[mob] ?? (game.items.has(egg) ? itemName(egg).replace(/ Spawn Egg$/, '') : words(parts[0]));
      label = parts.length > 1 ? `${name} (${words(parts.slice(1).join(' '))})` : name;
      icon = egg;
      owner = itemOwner(egg);
    } else if (kind === 'block') {
      const block = `${ns}:${parts.join('/')}`;
      label = game.items.has(block) ? itemName(block) : placeLabel(parts);
      icon = block;
      owner = itemOwner(block);
    } else {
      label = placeLabel(parts);
    }
    if (manual?.icon) icon = manual.icon;
    const auto = !manual?.label;
    if (manual?.label) label = manual.label;
    return { kind, label, auto, subtitle: manual?.subtitle ?? modName(tableNs), icon, page: manual?.page ?? (owner ? owner.path : null) };
  }

  const describeCache = new Map();
  const described = table => {
    if (!describeCache.has(table)) describeCache.set(table, describe(table));
    return describeCache.get(table);
  };

  function row(source) {
    const info = described(source.table);
    if (info.auto) autoLabels.set(source.table, info.label);
    const out = {
      k: info.kind,
      l: info.label,
      s: info.subtitle,
      c: formatChance(source.chance),
      v: source.chance,
      n: formatCount(source.count),
      i: cell(info.icon && hasIcon(info.icon) ? info.icon : KIND_ICONS[info.kind]),
    };
    if (source.rollsLabel && source.rollsLabel !== '1 roll') out.d = `${formatChance(source.perRoll)} per roll, ${source.rollsLabel}`;
    if (source.labels.size) out.w = [...source.labels];
    if (info.page) out.h = info.page;
    return out;
  }

  // Hand-written sources for drops loot tables don't hold (loot modifiers, code, mobdropconfig.txt).
  function extraRow(extra) {
    const kind = extra.kind ?? 'other';
    const out = {
      k: kind,
      l: extra.label,
      c: extra.chance ?? 'Varies',
      v: parseFloat(extra.chance) / 100 || 0,
      n: extra.count ?? '',
      i: cell(extra.icon && hasIcon(extra.icon) ? extra.icon : KIND_ICONS[kind]),
    };
    if (extra.text) out.s = extra.text;
    if (extra.page) out.h = extra.page;
    return out;
  }

  return {
    // { tables, extras } for an item, recording it so its JSON file gets written.
    use(id) {
      const tables = model.sourcesFor(id).length;
      const extras = (overrides.extra[id] ?? []).length;
      if (tables + extras) used.set(id, true);
      return { tables, extras };
    },
    // path relative to loot/ -> JSON text, one per item. Call before the atlas is packed.
    files() {
      const out = new Map();
      for (const id of [...used.keys()].sort()) {
        const rows = [...model.sourcesFor(id).map(row), ...(overrides.extra[id] ?? []).map(extraRow)];
        rows.sort((a, b) => b.v - a.v);
        out.set(`${id.replace(':', '/')}.json`, JSON.stringify({ n: itemName(id), i: cell(id), s: rows }));
      }
      return out;
    },
    // Labels nobody has checked by hand, so they can be corrected in site/loot-sources.json.
    report: () => Object.fromEntries([...autoLabels].sort(([a], [b]) => a.localeCompare(b))),
  };
}
