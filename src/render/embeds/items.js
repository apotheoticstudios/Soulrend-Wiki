import { ITEM_ID } from '../items.js';

// A grid of items with icons, names and tooltips.
//   {{items minecraft:diamond minecraft:emerald}}
//   {{items tag=minecraft:planks}}
export default {
  positional: 'items',
  variadic: true,
  render(props, h) {
    let ids = [...(props.items ?? [])];
    if (props.tag) {
      const members = h.ctx.game.tags.get(String(props.tag).replace(/^#/, ''));
      if (!members) h.fail(`unknown tag #${props.tag} (not in game-data/tags.json)`);
      ids.push(...members);
    }
    if (!ids.length) h.fail('needs item ids, e.g. {{items minecraft:diamond minecraft:emerald}}');
    const bad = ids.find(id => !ITEM_ID.test(id));
    if (bad) h.fail(`"${bad}" is not a valid item id`);
    return `<ul class="item-grid">${ids.map(id => `<li>${h.itemRef(id)}</li>`).join('')}</ul>\n`;
  },
};
