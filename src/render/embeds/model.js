import { esc, attrs } from '../html.js';

// A 3D model viewer. The page ships only a poster image; three.js loads when the viewer scrolls into view.
//   {{model models/wraith.glb poster=mobs/wraith.png animation=idle caption="The Wraith"}}
//   {{model alexscaves:nucleeper alexscaves:gammaroach}}   mobs by entity id (game-data/mobs.json)
// Several models share one viewer with a button per model; `labels="A|B"` renames the buttons and
// `start=N` opens on the Nth. `axes` (an object, from a fenced JSON block or the infobox's modelAxes) picks
// models on several rows of buttons instead, e.g. { "Color": [4 labels], "Stage": [5 labels] } for 20
// models listed color by color.
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
    const start = Number(props.start ?? 1) - 1;
    if (!Number.isInteger(start) || !models[start]) h.fail(`start=${props.start} is not one of the ${models.length} models`);
    h.env.usesModels = true;
    const height = Number(props.height ?? 320);
    const alt = props.alt ?? props.caption ?? (models.length === 1 ? models[0].label : '3D models');
    // posterHtml is for the infobox, which shows the spawn egg until the model loads.
    const poster = props.poster
      ? `<img class="model-poster pixelated" src="${esc(h.asset(props.poster))}" alt="${esc(alt)}" loading="lazy">`
      : props.posterHtml ? `<span class="model-poster">${props.posterHtml}</span>`
      : `<span class="model-placeholder" aria-hidden="true"></span>`;
    const axes = props.axes ? Object.entries(props.axes) : [['Model', models.map(m => m.label)]];
    const count = axes.reduce((n, [, values]) => n * values.length, 1);
    if (props.axes && count !== models.length) h.fail(`axes give ${count} combinations for ${models.length} models`);
    // The start index as one button per axis, first axis outermost.
    let rest = start;
    const pressed = axes.map((_, a) => axes.slice(a + 1).reduce((n, [, values]) => n * values.length, 1)).map(size => {
      const digit = Math.floor(rest / size);
      rest %= size;
      return digit;
    });
    const picker = models.length > 1
      ? axes.map(([name, values], a) => `<div class="model-picker" role="group" aria-label="${esc(name)}">`
        + (props.axes ? `<span class="model-axis">${esc(name)}</span>` : '')
        + values.map((value, i) => `<button type="button" class="model-pick" aria-pressed="${i === pressed[a]}">${esc(value)}</button>`).join('')
        + '</div>').join('')
      : '';
    return `<figure class="embed-model${props.compact ? ' compact' : ''}" style="--model-height:${height}px">`
      + picker
      + `<div${attrs({
        class: 'model-stage',
        'data-model': models[start].src,
        'data-models': models.length > 1 ? JSON.stringify(models) : null,
        'data-start': start || null,
        'data-animation': props.animation ?? null,
        'data-rotate': props.autoRotate === false ? 'false' : 'true',
        'data-label': models.length > 1 ? models[start].label : alt,
      })}>${poster}<span class="model-status" aria-live="polite"></span></div>`
      + (props.caption ? `<figcaption>${h.inline(String(props.caption))}</figcaption>` : '')
      + `</figure>\n`;
  },
};
