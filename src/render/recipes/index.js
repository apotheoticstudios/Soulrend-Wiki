// Recipe lookup, normalisation and rendering. A normalised recipe is
//   { id, station, label, icon, inputs: Ingredient[], outputs: Output[], shapeless, info }
//   Ingredient = { items: [ids], tag?, count? }   Output = { item, count, chance? }
import { attrs, esc, humanize } from '../html.js';
import { adapters } from './adapters/index.js';

const MAX_OPTIONS = 32; // cycling slots show at most this many alternatives

// Station + adapter for each recipe type. Types no station claims use the generic row layout.
export function stationFor(type, stations) {
  for (const [name, station] of stations) {
    const entry = station.data.recipes[type];
    if (!entry) continue;
    const config = typeof entry === 'string' ? { adapter: entry } : entry;
    return { name, station: station.data, adapter: config.adapter, label: config.label ?? station.data.label, icon: config.icon ?? station.data.icon };
  }
  const [ns, path] = type.split(':');
  return { name: null, station: { flow: true }, adapter: 'generic', label: humanize(path ?? ns), icon: null, fallback: true };
}

function parsers(game) {
  const fromTag = (tag, count) => ({ items: game.tags.get(tag) ?? [], tag, count });
  const ingredient = json => {
    if (json === null || json === undefined) return null;
    if (typeof json === 'string') return json.startsWith('#') ? fromTag(json.slice(1)) : { items: [json] };
    if (Array.isArray(json)) {
      const parts = json.map(ingredient).filter(Boolean);
      if (!parts.length) return null;
      return { items: [...new Set(parts.flatMap(p => p.items))], tag: parts.length === 1 ? parts[0].tag : undefined, count: parts[0].count };
    }
    if (typeof json !== 'object') return null;
    if (json.item) return { items: [json.item], count: json.count };
    if (json.tag) return fromTag(json.tag, json.count);
    if (json.children) return ingredient(json.children);
    if (json.base) return ingredient(json.base);
    if (json.items) return ingredient(json.items);
    if (json.ingredient) return { ...ingredient(json.ingredient), count: json.count };
    return null;
  };
  const output = (json, count) => {
    if (typeof json === 'string') return { item: json, count: count ?? 1 };
    if (json && typeof json === 'object') {
      const item = json.item ?? json.id;
      if (typeof item === 'string') return { item, count: json.count ?? json.Count ?? count ?? 1, chance: json.chance };
    }
    return null;
  };
  return { ingredient, output };
}

// Normalises one raw recipe. Returns { recipe } or { error }.
export function normalizeRecipe(id, json, ctx) {
  // Minecraft reads a type without a namespace as minecraft:, e.g. Explorer's Compass's "crafting_shaped".
  const type = json.type && !json.type.includes(':') ? `minecraft:${json.type}` : json.type ?? '';
  const target = stationFor(type, ctx.stations);
  const adapter = adapters[target.adapter];
  try {
    const result = adapter(json, parsers(ctx.game));
    if (!result.outputs.length || result.outputs.some(o => !o)) throw new Error('has no readable output');
    if (!target.station.flow) {
      const slots = inputSlots(target.station).length;
      if (result.inputs.length > slots) throw new Error(`has ${result.inputs.length} inputs but station "${target.name}" has ${slots} input slots`);
    }
    return { recipe: { id, type, ...target, ...result } };
  } catch (error) {
    return { error: `${id} (${type}): ${error.message}` };
  }
}

// Indexes recipes by the items they produce and consume. Built once, on first use.
export function recipeIndex(ctx) {
  if (ctx.recipeIndexCache) return ctx.recipeIndexCache;
  const byOutput = new Map();
  const byInput = new Map();
  const normalized = new Map();
  const add = (map, key, id) => {
    if (!map.has(key)) map.set(key, []);
    if (map.get(key).at(-1) !== id) map.get(key).push(id);
  };
  for (const [id, json] of ctx.game.recipes) {
    const { recipe } = normalizeRecipe(id, json, ctx);
    if (!recipe) continue;
    normalized.set(id, recipe);
    for (const out of recipe.outputs) add(byOutput, out.item, id);
    for (const input of recipe.inputs) for (const item of input?.items ?? []) add(byInput, item, id);
  }
  ctx.recipeIndexCache = { byOutput, byInput, normalized };
  return ctx.recipeIndexCache;
}

export function inputSlotCount(station) {
  return inputSlots(station).length;
}

function inputSlots(station) {
  const slots = [];
  for (const entry of station.inputs ?? []) {
    const [cols, rows] = entry.grid ?? [1, 1];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) slots.push({ x: entry.at[0] + x * 18, y: entry.at[1] + y * 18, large: entry.large });
    }
  }
  return slots;
}

// Positions for a "flow" station: inputs in rows of 3, an arrow, outputs in columns of up to 2.
function flowLayout(recipe) {
  const inCols = Math.min(recipe.inputs.length, 3);
  const inRows = Math.ceil(recipe.inputs.length / 3);
  const outRows = Math.min(recipe.outputs.length, 2);
  const outCols = Math.ceil(recipe.outputs.length / 2);
  const height = Math.max(inRows, outRows) * 18;
  const inTop = (height - inRows * 18) / 2;
  const outTop = (height - outRows * 18) / 2;
  const arrowX = inCols * 18 + 4;
  const outX = arrowX + 22 + 6;
  return {
    size: [outX + outCols * 18, height],
    inputs: recipe.inputs.map((_, i) => ({ x: (i % 3) * 18, y: inTop + Math.floor(i / 3) * 18 })),
    outputs: recipe.outputs.map((_, i) => ({ x: outX + Math.floor(i / 2) * 18, y: outTop + (i % 2) * 18 })),
    decorations: [{ type: 'arrow', at: [arrowX, Math.round(height / 2 - 7.5)] }],
  };
}

const DECORATIONS = {
  arrow: [22, 15, '<path d="M0 5h14V0h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1V10H0z"/>'],
  flame: [14, 14, '<path d="M6 0h2v2h1v2h1v1h1v2h1v3h-1v2h-1v1H9v1H5v-1H4v-1H3v-2H2V7h1V5h1V4h1V2h1z"/>'],
  plus: [12, 12, '<path d="M5 0h2v5h5v2H7v5H5V7H0V5h5z"/>'],
};

function decorationHtml({ type, at }) {
  const [w, h, path] = DECORATIONS[type];
  return `<svg class="recipe-${type}" style="--sx:${at[0]};--sy:${at[1]};--dw:${w};--dh:${h}" viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges" aria-hidden="true">${path}</svg>`;
}

function slotHtml(content, pos, h, { large = false, output = false } = {}) {
  const style = `--sx:${pos.x};--sy:${pos.y}`;
  const cls = `recipe-slot${large ? ' large' : ''}`;
  if (!content) return `<span class="${cls} empty" style="${style}"></span>`;
  const items = (output ? [content.item] : content.items).slice(0, MAX_OPTIONS);
  if (!items.length) {
    // A tag with no known members still deserves a visible slot.
    return `<span class="${cls}" style="${style}" title="#${esc(content.tag ?? '')}"><span class="mc-icon slot missing"></span></span>`;
  }
  const owners = items.map(id => h.ctx.itemOwner(id));
  const href = id => {
    const owner = h.ctx.itemOwner(id);
    return owner && owner !== h.env.page ? h.env.root + owner.path : null;
  };
  const tag = owners.some(o => o && o !== h.env.page) ? 'a' : 'span';
  const options = items.map((id, i) =>
    `<span${attrs({ class: 'cycle-option', 'data-option': id, 'data-href': href(id), hidden: i > 0 })}>${h.icon(id, 'slot')}</span>`).join('');
  const count = content.count > 1 ? `<span class="slot-count">${content.count}</span>` : '';
  const chance = content.chance !== undefined && content.chance < 1 ? `<span class="slot-chance">${Math.round(content.chance * 100)}%</span>` : '';
  return `<${tag}${attrs({
    class: cls,
    style,
    href: tag === 'a' ? href(items[0]) : null,
    tabindex: tag === 'span' ? '0' : null,
    'data-item': items[0],
    'data-tag': content.tag ?? null,
    'data-cycle': items.length > 1,
  })}>${options}${count}${chance}</${tag}>`;
}

export function renderRecipe(recipe, h) {
  const layout = recipe.station.flow
    ? flowLayout(recipe)
    : {
      size: recipe.station.size,
      inputs: inputSlots(recipe.station),
      outputs: recipe.station.outputs.map(o => ({ x: o.at[0], y: o.at[1], large: o.large })),
      decorations: recipe.station.decorations ?? [],
    };
  const slots = [
    ...layout.inputs.map((pos, i) => slotHtml(recipe.inputs[i] ?? null, pos, h, { large: pos.large })),
    ...layout.outputs.map((pos, i) => slotHtml(recipe.outputs[i] ?? null, pos, h, { large: pos.large, output: true })),
  ];
  const icon = recipe.icon ? h.icon(recipe.icon) : '';
  const flag = recipe.shapeless ? '<span class="recipe-flag" title="Ingredients can go in any slot">Shapeless</span>' : '';
  return `<figure${attrs({ class: 'recipe', 'data-recipe': recipe.id ?? null })}>`
    + `<figcaption class="recipe-head">${icon}<span>${esc(recipe.label)}</span>${flag}</figcaption>`
    + `<div class="recipe-gui" style="--gw:${layout.size[0]};--gh:${layout.size[1]}">${layout.decorations.map(decorationHtml).join('')}${slots.join('')}</div>`
    + (recipe.info ? `<p class="recipe-info">${h.inline(String(recipe.info))}</p>` : '')
    + `</figure>`;
}
