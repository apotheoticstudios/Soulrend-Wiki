import { normalizeRecipe, renderRecipe, inputSlotCount } from '../recipes/index.js';
import { adapters } from '../recipes/adapters/index.js';

// One recipe diagram: an exported recipe by id, or one written by hand.
//   {{recipe minecraft:diamond_sword}}
//   ```recipe
//   { "station": "crafting_table", "grid": ["AB ", " A ", "   "],
//     "key": { "A": "minecraft:iron_ingot", "B": "#minecraft:planks" }, "output": "ns:item", "count": 1 }
//   ```
//   ```recipe
//   { "station": "crafting_table", "shapeless": true, "ingredients": ["minecraft:stick", "#minecraft:coals"], "output": "minecraft:torch", "count": 4 }
//   ```
//   ```recipe
//   { "station": "spellbinding_table", "inputs": ["a:b", null, "#c:d"], "outputs": [{ "item": "e:f", "count": 2 }], "info": "Costs 5 levels" }
//   ```
export default {
  positional: 'id',
  render(props, h) {
    const { ctx } = h;
    if (props.id) {
      const json = ctx.game.recipes.get(props.id);
      if (!json) h.fail(`no recipe with id ${props.id} in game-data/recipes.json`);
      const { recipe, error } = normalizeRecipe(props.id, json, ctx);
      if (!recipe) h.fail(error);
      if (recipe.fallback) h.warn(`recipe type ${recipe.type} has no station; using the generic layout`);
      return `<div class="recipe-group">${renderRecipe(recipe, h)}</div>\n`;
    }

    if (!props.station) h.fail('needs either "id" (an exported recipe) or "station" (a hand-written recipe)');
    const station = ctx.stations.get(props.station);
    if (!station) h.fail(`unknown station "${props.station}". Stations: ${[...ctx.stations.keys()].join(', ')}`);
    const r = parsers(h);
    let recipe;
    try {
      if (props.grid) {
        recipe = adapters.shaped({ pattern: props.grid, key: props.key ?? {}, result: props.output, count: props.count }, r);
      } else if (props.ingredients) {
        recipe = adapters.shapeless({ ingredients: props.ingredients, result: props.output, count: props.count }, r);
      } else {
        const outputs = props.outputs ?? (props.output ? [props.output] : []);
        recipe = { inputs: (props.inputs ?? []).map(i => r.ingredient(i)), outputs: outputs.map(o => r.output(o, props.count)) };
      }
    } catch (error) {
      h.fail(error.message);
    }
    if (!recipe.outputs.length || recipe.outputs.some(o => !o)) h.fail('needs an "output" item id');
    const ids = [...recipe.inputs.flatMap(i => (i?.tag ? [] : i?.items ?? [])), ...recipe.outputs.map(o => o.item)];
    for (const id of ids) if (ctx.game.present && !ctx.game.items.has(id)) h.warn(`Unknown item ${id}`);
    const slots = inputSlotCount(station.data);
    if (!station.data.flow && recipe.inputs.length > slots) h.fail(`${recipe.inputs.length} inputs, but ${props.station} has ${slots} input slots`);
    return `<div class="recipe-group">${renderRecipe({
      ...recipe,
      station: station.data,
      label: props.label ?? station.data.label,
      icon: station.data.icon,
      shapeless: props.shapeless || recipe.shapeless,
      info: props.info ?? recipe.info,
    }, h)}</div>\n`;
  },
};

// Hand-written recipes use the same ingredient syntax as exported ones, plus "#tag" strings.
function parsers(h) {
  const tags = h.ctx.game.tags;
  const ingredient = value => {
    if (value === null || value === undefined || value === '') return null;
    if (typeof value === 'string') {
      if (!value.startsWith('#')) return { items: [value] };
      const tag = value.slice(1);
      if (!tags.has(tag)) h.warn(`Unknown tag #${tag}`);
      return { items: tags.get(tag) ?? [], tag };
    }
    if (Array.isArray(value)) return { items: value.flatMap(v => ingredient(v)?.items ?? []) };
    if (value.item) return { items: [value.item], count: value.count };
    if (value.tag) return ingredient('#' + value.tag);
    throw new Error(`can't read ingredient ${JSON.stringify(value)}`);
  };
  const output = (value, count) => {
    if (typeof value === 'string') return { item: value, count: count ?? 1 };
    if (value?.item) return { item: value.item, count: value.count ?? count ?? 1, chance: value.chance };
    return null;
  };
  return { ingredient, output };
}
