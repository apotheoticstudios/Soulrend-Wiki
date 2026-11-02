import { recipeIndex } from './recipes/index.js';
import { pageItemData } from './items.js';
import { itemName } from './items.js';

// The client swaps this for the page's own relative root, so one file serves pages at any depth.
const ROOT_MARK = '%ROOT%';

// Recipes behind a [[craft:…]] trigger, rendered once per item by the normal {{recipes}} embed and
// fetched by src/client/craft-viewer.js. Tooltip data travels with them, since pages only embed their own.
export function createCrafts(ctx) {
  const used = new Set();
  return {
    count(id) {
      const n = recipeIndex(ctx).byOutput.get(id)?.length ?? 0;
      if (n) used.add(id);
      return n;
    },
    // path relative to craft/ -> JSON text. Call before the atlas is packed.
    files() {
      const out = new Map();
      for (const id of [...used].sort()) {
        const env = { page: { file: 'game-data/recipes.json', path: '' }, ctx, root: ROOT_MARK, bodyLine: 0, headings: [], usedItems: new Set() };
        const html = ctx.embed({ type: 'recipes', source: 'shortcode', args: { named: { output: id, limit: 100000 }, positional: [] } }, env, 0);
        out.set(`${id.replace(':', '/')}.json`, JSON.stringify({ n: itemName(id, ctx), c: recipeIndex(ctx).byOutput.get(id).length, html, items: pageItemData(env, ctx) }));
      }
      return out;
    },
  };
}
