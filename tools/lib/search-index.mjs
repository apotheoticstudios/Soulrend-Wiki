import MiniSearch from 'minisearch';
import { SEARCH_OPTIONS } from '../../src/shared/search-options.js';
import { itemName } from '../../src/render/items.js';

// One search document per visible page. Item names are indexed too, so searching "soul shard"
// finds the page that covers that item even if the text never spells it out.
export function buildSearchIndex(rendered, ctx) {
  const index = new MiniSearch(SEARCH_OPTIONS);
  index.addAll(rendered
    .filter(r => !r.page.hidden)
    .map((r, id) => {
      const pos = r.page.icon ? ctx.atlas.place(r.page.icon) : null;
      return {
        id,
        path: r.page.path,
        title: r.page.title,
        aliases: (r.page.data.aliases ?? []).join(' '),
        category: r.page.data.category ?? '',
        headings: r.env.headings.map(h => h.text).join(' '),
        items: (r.page.data.items ?? []).map(item => itemName(item, ctx)).join(' '),
        text: r.text,
        summary: r.page.data.summary ?? truncate(r.text, 160),
        icon: pos ? [pos.x, pos.y] : null,
      };
    }));
  return JSON.stringify(index);
}

function truncate(text, length) {
  if (text.length <= length) return text;
  return text.slice(0, text.lastIndexOf(' ', length)) + '…';
}
