import { esc, attrs } from './html.js';
import { normalizePath } from './context.js';

// Turns site.json "nav" into sections of entries. Category sections also pull in every page in that category.
export function buildNav(site, pages, atlas, diag) {
  const byPath = new Map(pages.map(p => [p.path, p]));
  return site.nav.map(section => {
    const entries = [];
    for (const item of section.items ?? []) {
      if (typeof item !== 'string') {
        entries.push({ label: item.label, href: item.href });
        continue;
      }
      const page = byPath.get(normalizePath(item));
      if (page) entries.push({ page });
      else diag.error('site/site.json', null, `Sidebar section "${section.label}" lists "${item}", but no page has that path`);
    }
    if (section.category) {
      const listed = new Set(entries.map(e => e.page));
      entries.push(...pages
        .filter(p => !p.hidden && p.data.category === section.category && !listed.has(p))
        .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0) || a.title.localeCompare(b.title))
        .map(page => ({ page })));
    }
    // Reserve atlas space for sidebar icons now; the atlas is packed before layouts are written.
    for (const e of entries) if (e.page?.icon) e.iconPos = atlas.place(e.page.icon);
    return { label: section.label, collapsed: !!section.collapsed, entries };
  });
}

export function navHtml(sections, current, root) {
  return sections.filter(section => section.entries.length).map(section => {
    // Deep pages aren't listed, so the section holding one of their ancestors counts as theirs.
    const holdsCurrent = !!current && section.entries.some(e => e.page && (e.page === current || (e.page.path && current.path.startsWith(e.page.path))));
    const items = section.entries.map(e => {
      if (!e.page) return `<li><a class="external"${attrs({ href: e.href, rel: 'noopener' })}>${esc(e.label)}</a></li>`;
      const iconHtml = e.iconPos
        ? `<span class="mc-icon" style="--x:${e.iconPos.x};--y:${e.iconPos.y}" aria-hidden="true"></span>`
        : '';
      return `<li><a${attrs({ href: root + e.page.path, 'aria-current': e.page === current ? 'page' : null })}>${iconHtml}<span>${esc(e.page.data.navTitle ?? e.page.title)}</span></a></li>`;
    }).join('');
    // Rendered compact (the default sidebar setting); src/client/nav.js opens the rest for "Expanded".
    return `<details${attrs({ class: 'nav-section', open: holdsCurrent, 'data-current': holdsCurrent, 'data-expand': !section.collapsed })}><summary>${esc(section.label)}</summary><ul>${items}</ul></details>`;
  }).join('\n');
}
