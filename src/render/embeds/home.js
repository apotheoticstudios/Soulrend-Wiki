import { attrs, esc } from '../html.js';

// Building blocks for the home page, one fenced JSON block per section.
//   { "kind": "buttons", "lead": "Where to download:", "items": [{ "label": "…", "url": "https://…", "primary": true }] }
//   { "kind": "cards",   "items": [{ "page": "bosses", "text": "…", "count": "bosses/" }], "search": "Search the wiki" }
//   { "kind": "acts",    "items": [{ "page": "progression/prologue", "setting": "Tutorial", "optional": true }] }
// A button takes "url" (external), "page" (a wiki page) or "search": true (opens the search dialog).
// Cards and acts take their title and icon from the page unless "title" or "icon" is given.

function pageOf(item, h) {
  const found = h.ctx.resolve(item.page, h.env.page);
  if (!found) h.fail(`no page has the title, alias or path "${item.page}"`);
  return { page: found.page, href: h.env.root + found.page.path };
}

function button(item, h) {
  const classes = `home-button${item.primary ? ' primary' : ''}${item.search ? ' needs-js' : ''}`;
  const label = h.inline(item.label ?? '');
  const icon = item.icon ? h.icon(item.icon) : '';
  if (item.search) return `<button${attrs({ class: classes, type: 'button', 'data-open-search': true })}>${icon}${label}<kbd>/</kbd></button>`;
  if (item.url) return `<a${attrs({ class: classes, href: item.url, rel: 'noopener' })}>${icon}${label}</a>`;
  return `<a${attrs({ class: classes, href: pageOf(item, h).href })}>${icon}${label}</a>`;
}

// Visible pages under a path prefix, not counting the section's own index.
function countPages(prefix, h) {
  const base = prefix.replace(/\/*$/, '/');
  return h.ctx.pages.filter(p => !p.hidden && p.path.startsWith(base) && p.path !== base).length;
}

const kinds = {
  buttons(props, h) {
    const lead = props.lead ? `<span class="home-lead">${h.inline(props.lead)}</span>` : '';
    return `<div class="home-buttons${props.bar ? ' bar' : ''}">${lead}${props.items.map(item => button(item, h)).join('')}</div>\n`;
  },

  cards(props, h) {
    const cards = props.items.map(item => {
      const { page, href } = pageOf(item, h);
      const icon = h.icon(item.icon ?? page.data.icon ?? 'minecraft:barrier', 'slot');
      const count = item.count ? `<span class="home-count">${countPages(item.count, h).toLocaleString('en-US')} pages</span>` : '';
      return `<a class="home-card" href="${esc(href)}">${icon}<span class="home-card-body"><strong>${esc(item.title ?? page.title)}</strong>${item.text ? `<span>${h.inline(item.text)}</span>` : ''}${count}</span></a>`;
    }).join('');
    const search = props.search ? `<p>${button({ search: true, label: props.search, primary: true }, h)}</p>` : '';
    return `<div class="home-cards">${cards}</div>\n${search}\n`;
  },

  acts(props, h) {
    const steps = props.items.map((item, i) => {
      const { page, href } = pageOf(item, h);
      const [step, ...rest] = (item.title ?? page.title).split(' – ');
      const name = rest.join(' – ');
      const icon = h.icon(item.icon ?? page.data.icon ?? 'minecraft:barrier', 'slot');
      return `<li${attrs({ class: item.optional ? 'optional' : null })}><a href="${esc(href)}">${icon}<strong>${esc(step)}</strong>${name ? `<span class="home-act-name">${esc(name)}</span>` : ''}${item.setting ? `<span class="home-act-setting">${h.inline(item.setting)}</span>` : ''}${item.optional ? '<span class="home-act-setting">Optional</span>' : ''}</a></li>`;
    }).join('');
    return `<ol class="home-acts">${steps}</ol>\n`;
  },
};

export default {
  render(props, h) {
    const render = kinds[props.kind];
    if (!render) h.fail(`"kind" must be one of ${Object.keys(kinds).join(', ')}`);
    if (!Array.isArray(props.items) || !props.items.length) h.fail('needs a non-empty "items" list');
    return render(props, h);
  },
};
