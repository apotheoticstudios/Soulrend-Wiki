import fs from 'node:fs';
import path from 'node:path';
import { jsonErrorLine } from './diagnostics.mjs';

// Loads the data exported from the modpack (see tools/sync-game.mjs):
//   items.json    { "ns:id": { name, mod, rarity, tooltip: [...] } }
//   tags.json     { "ns:tag": ["ns:item", ...] }   item tags, fully expanded
//   recipes.json  { "ns:recipe_id": { type, ...raw recipe JSON } }
//   movesets.json { types, items, skills, labels, mods }   Epic Fight movesets (tools/lib/movesets.mjs)
//   icons/<ns>/<path>.png
export function loadGameData(root, diag) {
  const dir = path.join(root, 'game-data');
  const read = name => {
    const file = path.join(dir, name);
    if (!fs.existsSync(file)) return null;
    const text = fs.readFileSync(file, 'utf8');
    try {
      return JSON.parse(text);
    } catch (error) {
      diag.error(`game-data/${name}`, jsonErrorLine(error, text), `Invalid JSON: ${error.message}`);
      return null;
    }
  };
  const items = read('items.json');
  return {
    present: !!items,
    items: new Map(Object.entries(items ?? {})),
    tags: new Map(Object.entries(read('tags.json') ?? {})),
    recipes: new Map(Object.entries(read('recipes.json') ?? {})),
    movesets: read('movesets.json'),
    source: read('source.json'),
    glyphs: read('glyphs.json') ?? {},
    glyphDir: path.join(dir, 'glyphs'),
    iconDir: path.join(dir, 'icons'),
  };
}
