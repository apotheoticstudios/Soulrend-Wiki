import { attrs, esc } from '../html.js';
import { stripMcCodes } from '../../shared/mctext.js';

// A Passive Skill Tree map from game-data/skilltrees.json, drawn in the browser by src/client/skilltree.js
// the way the mod's own screen draws it. Focused nodes are drawn learned and the view opens on them;
// the rest of the tree is darkened. A node id that isn't a root, subclass, school or keystone node
// stands for its whole branch.
//   {{skilltree warrior}}
//   {{skilltree warrior focus=warrior_6}}
//   {{skilltree mage focus="mage-fire, mage-nt_offense-fire" height=520 caption="…"}}
export default {
  positional: 'tree',
  render(props, h) {
    const data = h.ctx.game.skillTrees;
    if (!data) h.fail('game-data/skilltrees.json is missing (run `npm run sync-game`)');
    const tree = data.trees[props.tree];
    if (!tree) h.fail(`unknown skill tree "${props.tree ?? ''}"; available: ${Object.keys(data.trees).join(', ')}`);

    const focus = new Set();
    for (const id of String(props.focus ?? '').split(/[\s,]+/).filter(Boolean)) {
      const node = tree.nodes[id];
      if (!node) h.fail(`${props.tree} has no node "${id}"`);
      if (node.cluster === undefined) focus.add(id);
      else for (const [other, n] of Object.entries(tree.nodes)) if (n.cluster === node.cluster) focus.add(other);
    }
    const height = Number(props.height ?? 440);
    if (!(height >= 200 && height <= 1200)) h.fail('height must be between 200 and 1200');

    const title = stripMcCodes(tree.title);
    const label = `${title} skill tree${focus.size ? `, ${focus.size} highlighted node${focus.size === 1 ? '' : 's'}` : ''}`;
    return `<figure class="embed-skilltree" style="--tree-height:${height}px">`
      + `<div${attrs({
        class: 'skilltree-stage',
        'data-skilltree': props.tree,
        'data-focus': focus.size ? [...focus].join(' ') : null,
        role: 'img',
        'aria-label': label,
      })}><p class="skilltree-fallback">${esc(`Interactive map of the ${title} skill tree. It needs JavaScript.`)}</p></div>`
      + (props.caption ? `<figcaption>${h.inline(String(props.caption))}</figcaption>` : '')
      + `</figure>\n`;
  },
};
