import { esc, attrs } from '../html.js';

// A 3D model viewer. The page ships only a poster image; three.js loads when the viewer scrolls into view.
//   {{model models/wraith.glb poster=mobs/wraith.png animation=idle caption="The Wraith"}}
export default {
  positional: 'src',
  render(props, h) {
    if (!props.src || !/\.(glb|gltf)$/i.test(props.src)) h.fail('needs "src", a .glb or .gltf file under assets/');
    h.env.usesModels = true;
    const height = Number(props.height ?? 320);
    const alt = props.alt ?? props.caption ?? '3D model';
    const poster = props.poster
      ? `<img class="model-poster pixelated" src="${esc(h.asset(props.poster))}" alt="${esc(alt)}" loading="lazy">`
      : `<span class="model-placeholder" aria-hidden="true"></span>`;
    return `<figure class="embed-model${props.compact ? ' compact' : ''}" style="--model-height:${height}px">`
      + `<div${attrs({
        class: 'model-stage',
        'data-model': h.asset(props.src),
        'data-animation': props.animation ?? null,
        'data-rotate': props.autoRotate === false ? 'false' : 'true',
        'data-label': alt,
      })}>${poster}<span class="model-status" aria-live="polite"></span></div>`
      + (props.caption ? `<figcaption>${h.inline(String(props.caption))}</figcaption>` : '')
      + `</figure>\n`;
  },
};
