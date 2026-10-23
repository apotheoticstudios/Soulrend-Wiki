import { esc, attrs, humanize } from './html.js';

export const ITEM_ID = /^[a-z0-9_.-]+:[a-z0-9_./-]+$/;

export function itemName(id, ctx) {
  return ctx.game.items.get(id)?.name ?? humanize(id);
}

// A sprite from the atlas. `size` is '' (inline, text height), 'slot' (recipe slot) or 'xl' (infobox).
// Every item drawn on a page is recorded so its tooltip data can be embedded in that page.
export function icon(id, ctx, env, size = '') {
  env.usedItems.add(id);
  const pos = ctx.atlas.place(id);
  return `<span${attrs({
    class: `mc-icon${size ? ' ' + size : ''}${pos ? '' : ' missing'}`,
    style: pos ? `--x:${pos.x};--y:${pos.y}` : null,
    'aria-hidden': 'true',
  })}></span>`;
}

// Inline item mention: icon + name, linked to the page that lists the item in its "items" header.
export function itemRef(id, label, ctx, env) {
  const owner = ctx.itemOwner(id);
  const tag = owner && owner !== env.page ? 'a' : 'span';
  const href = tag === 'a' ? env.root + owner.path : null;
  return `<${tag}${attrs({ class: 'item-ref', href, 'data-item': id, tabindex: tag === 'span' ? '0' : null })}>`
    + `${icon(id, ctx, env)}<span class="item-name">${esc(label || itemName(id, ctx))}</span></${tag}>`;
}

// Tooltip data for every item drawn on a page, embedded as JSON so tooltips need no extra request.
export function pageItemData(env, ctx) {
  const data = {};
  for (const id of [...env.usedItems].sort()) {
    const info = ctx.game.items.get(id);
    const owner = ctx.itemOwner(id);
    data[id] = {
      n: info?.name ?? humanize(id),
      r: info?.rarity ?? 'common',
      t: info?.tooltip ?? [],
      m: info?.mod ?? null,
      h: owner && owner !== env.page ? env.root + owner.path : null,
    };
  }
  return data;
}
