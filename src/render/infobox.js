import { esc, attrs } from './html.js';
import { icon } from './items.js';

// The right-hand data box. Floats beside the text on desktop; sits under the title on mobile.
export function infoboxHtml(page, env, ctx) {
  const box = page.data.infobox;
  if (!box) return '';
  const h = ctx.helpers(env);
  const info = box.item ? ctx.game.items.get(box.item) : null;

  let media = '';
  if (box.model) media = h.embed('model', { src: box.model, poster: box.image, posterHtml: box.item && !box.image ? icon(box.item, ctx, env, 'xl') : null, height: 260, compact: true });
  else if (box.image) media = `<img${attrs({ src: h.asset(box.image), alt: box.title ?? page.title, class: 'pixelated' })}>`;
  else if (box.item) media = icon(box.item, ctx, env, 'xl');

  const rows = (box.rows ?? []).map(row => Array.isArray(row)
    ? `<tr><th scope="row">${h.inline(row[0])}</th><td>${h.inline(row[1])}</td></tr>`
    : `<tr class="infobox-heading"><th colspan="2">${h.inline(row.heading)}</th></tr>`);

  // Rows filled in from the exported game data unless the page already set them.
  const labels = new Set((box.rows ?? []).filter(Array.isArray).map(r => r[0].toLowerCase()));
  if (box.itemRows === false) labels.add('mod').add('id');
  if (info?.mod && !labels.has('mod')) rows.push(`<tr><th scope="row">Mod</th><td>${esc(info.mod)}</td></tr>`);
  if (box.item && !labels.has('id')) rows.push(`<tr><th scope="row">ID</th><td><code>${esc(box.item)}</code></td></tr>`);

  return `<aside class="infobox" aria-label="${esc(box.title ?? page.title)} details">
  <div class="infobox-title">${esc(box.title ?? page.title)}</div>
  ${media ? `<div class="infobox-media"${box.item && !box.model && !box.image ? ` data-item="${esc(box.item)}" tabindex="0"` : ''}>${media}</div>` : ''}
  ${box.caption ? `<div class="infobox-caption">${h.inline(box.caption)}</div>` : ''}
  ${rows.length ? `<table class="infobox-rows"><tbody>${rows.join('')}</tbody></table>` : ''}
</aside>`;
}
