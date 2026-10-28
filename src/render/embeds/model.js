import { esc, attrs } from '../html.js';

// A 3D model viewer. The page ships only a poster image; three.js loads when the viewer scrolls into view.
//   {{model models/wraith.glb poster=mobs/wraith.png animation=idle caption="The Wraith"}}
//   {{model alexscaves:nucleeper alexscaves:gammaroach}}   mobs by entity id (game-data/mobs.json)
// Several models share one viewer with a button per model; `labels="A|B"` renames the buttons.
const MOB_ID = /^[a-z0-9_.-]+:[a-z0-9_/.-]+$/;

export default {
  positional: 'src',
  variadic: true,
  render(props, h) {
    const sources = [props.src ?? []].flat().map(String);
    if (!sources.length) h.fail('needs a model: a .glb/.gltf file under assets/, or a mob id such as alexscaves:nucleeper');
    const labels = Array.isArray(props.labels) ? props.labels : props.labels ? String(props.labels).split('|') : [];
    const models = sources.map((src, i) => {
      if (/\.(glb|gltf)$/i.test(src)) return { src: h.asset(src), label: labels[i] ?? src.split('/').pop().replace(/\.\w+$/, '') };
      if (!MOB_ID.test(src)) h.fail(`"${src}" is neither a .glb/.gltf file nor a mob id`);
      const mob = h.ctx.game.mobs.get(src);
      if (!mob) h.fail(`no model for ${src} (not in game-data/mobs.json; add it to tools/models/mobs.json and run npm run models)`);
      return { src: h.asset(mob.model), label: labels[i] ?? mob.name };
    });
    h.env.usesModels = true;
    const height = Number(props.height ?? 320);
    const alt = props.alt ?? props.caption ?? (models.length === 1 ? models[0].label : '3D models');
    // posterHtml is for the infobox, which shows the spawn egg until the model loads.
    const poster = props.poster
      ? `<img class="model-poster pixelated" src="${esc(h.asset(props.poster))}" alt="${esc(alt)}" loading="lazy">`
      : props.posterHtml ? `<span class="model-poster">${props.posterHtml}</span>`
      : `<span class="model-placeholder" aria-hidden="true"></span>`;
    const picker = models.length > 1
      ? `<div class="model-picker" role="group" aria-label="Model">${models.map((m, i) => `<button type="button" class="model-pick" aria-pressed="${i === 0}" data-index="${i}">${esc(m.label)}</button>`).join('')}</div>`
      : '';
    return `<figure class="embed-model${props.compact ? ' compact' : ''}" style="--model-height:${height}px">`
      + picker
      + `<div${attrs({
        class: 'model-stage',
        'data-model': models[0].src,
        'data-models': models.length > 1 ? JSON.stringify(models) : null,
        'data-animation': props.animation ?? null,
        'data-rotate': props.autoRotate === false ? 'false' : 'true',
        'data-label': models.length > 1 ? models[0].label : alt,
      })}>${poster}<span class="model-status" aria-live="polite"></span></div>`
      + (props.caption ? `<figcaption>${h.inline(String(props.caption))}</figcaption>` : '')
      + `</figure>\n`;
  },
};
