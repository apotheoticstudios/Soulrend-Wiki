import { esc, attrs } from '../html.js';

// A 3D schematic of an Ice and Fire Dragonforge (src/client/dragonforge.js draws it). The page ships only the
// buttons; three.js and the block textures load when the viewer scrolls into view.
//   {{dragonforge}}                         all three layers, fire
//   {{dragonforge element=ice layer=2 caption="The middle layer"}}
// `element` is fire, ice or lightning, `layer` is all, 1, 2 or 3 and `spread` (default true) pulls the layers
// apart so the core shows: only the starting choices, since the reader changes all three with the buttons.
// Textures come from `npm run forge` (assets/dragonforge/).
const ELEMENTS = { fire: 'Fire', ice: 'Ice', lightning: 'Lightning' };
const LAYERS = ['all', '1', '2', '3'];
const PARTS = ['brick', 'brick_grill', 'core', 'input'];

export default {
  render(props, h) {
    const element = String(props.element ?? 'fire').toLowerCase();
    const layer = String(props.layer ?? 'all').toLowerCase();
    if (!ELEMENTS[element]) h.fail(`element "${props.element}" is not one of ${Object.keys(ELEMENTS).join(', ')}`);
    if (!LAYERS.includes(layer)) h.fail(`layer "${props.layer}" is not one of ${LAYERS.join(', ')}`);
    const spread = props.spread === false || props.spread === 'false' ? 'stacked' : 'spread';
    const textures = {
      bone: { end: h.asset('dragonforge/bone_end.png'), side: h.asset('dragonforge/bone_side.png') },
      ...Object.fromEntries(Object.keys(ELEMENTS).map(e => [e, Object.fromEntries(PARTS.map(part => [part, h.asset(`dragonforge/${e}_${part}.png`)]))])),
    };
    const picker = (name, values, pressed) => `<div class="model-picker" role="group" aria-label="${esc(name)}">`
      + `<span class="model-axis">${esc(name)}</span>`
      + values.map(([value, label]) => `<button type="button" class="model-pick" data-${name.toLowerCase()}="${esc(value)}" aria-pressed="${value === pressed}">${esc(label)}</button>`).join('')
      + '</div>';
    const alt = props.alt ?? props.caption ?? 'Dragonforge schematic';
    return `<figure class="embed-model embed-forge" style="--model-height:${Number(props.height ?? 380)}px">`
      + picker('Element', Object.entries(ELEMENTS), element)
      + picker('Layer', LAYERS.map(l => [l, l === 'all' ? 'All' : l]), layer)
      + picker('View', [['spread', 'Spread'], ['stacked', 'Stacked']], spread)
      + `<div${attrs({
        class: 'model-stage forge-stage',
        'data-element': element,
        'data-layer': layer,
        'data-view': spread,
        'data-textures': JSON.stringify(textures),
        'data-label': alt,
      })}><span class="model-placeholder" aria-hidden="true"></span><span class="model-status" aria-live="polite"></span></div>`
      + '<p class="forge-legend" aria-live="polite"></p>'
      + (props.caption ? `<figcaption>${h.inline(String(props.caption))}</figcaption>` : '')
      + `</figure>\n`;
  },
};
