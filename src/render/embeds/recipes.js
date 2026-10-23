import { recipeIndex, renderRecipe } from '../recipes/index.js';
import { ITEM_ID } from '../items.js';

// Every exported recipe that makes an item (`recipes`) or uses it as an ingredient (`uses`).
// Both accept `output` and `input` together to show only recipes matching both.
//   {{recipes soulrend_core:soul_blade}}       {{recipes output=minecraft:torch limit=4}}
//   {{uses minecraft:diamond}}                 {{uses item=minecraft:diamond limit=20}}
//   {{recipes minecraft:torch input=minecraft:charcoal}}
function query(kind) {
  return {
    positional: kind === 'recipes' ? 'output' : 'item',
    render(props, h) {
      const output = props.output;
      const input = props.input ?? props.item;
      if (!output && !input) h.fail(`needs an item id, e.g. {{${kind} minecraft:torch}}`);
      for (const id of [output, input]) if (id !== undefined && !ITEM_ID.test(id)) h.fail(`"${id}" is not an item id`);
      const index = recipeIndex(h.ctx);
      const made = output ? index.byOutput.get(output) ?? [] : null;
      const used = input ? index.byInput.get(input) ?? [] : null;
      const ids = made && used ? made.filter(r => used.includes(r)) : made ?? used;
      const limit = Number(props.limit ?? 12);
      // Recipes with a proper station first, generic layouts last.
      const recipes = ids.map(r => index.normalized.get(r)).sort((a, b) => Number(!!a.fallback) - Number(!!b.fallback));
      if (!recipes.length) {
        const what = [output && `make ${output}`, input && `use ${input}`].filter(Boolean).join(' and ');
        h.warn(`No exported recipes ${what}`);
        return `<p class="recipe-none">No known recipes.</p>\n`;
      }
      const shown = recipes.slice(0, limit).map(r => renderRecipe(r, h)).join('');
      const more = recipes.length > limit ? `<p class="recipe-more">…and ${recipes.length - limit} more.</p>` : '';
      return `<div class="recipe-group">${shown}</div>${more}\n`;
    },
  };
}

export const recipes = query('recipes');
export const uses = query('uses');
