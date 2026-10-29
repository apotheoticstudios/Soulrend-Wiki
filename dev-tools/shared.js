// Mod Planner: storage, icons and the shortlist sheet shared by /dev-tools/ pages.

const ICONS = {
  grid: '<rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  bookmark: '<path d="M7 3h10a1 1 0 0 1 1 1v17l-6-4-6 4V4a1 1 0 0 1 1-1z"/>',
  package: '<path d="M3 7.5l9-4.5 9 4.5-9 4.5-9-4.5z"/><path d="M3 7.5v9l9 4.5 9-4.5v-9M12 12v9"/>',
  alert: '<path d="M12 3.5l9.5 17h-19L12 3.5z"/><path d="M12 10v4.5M12 17.5v.01"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5M5 20h14"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1"/><path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  minus: '<path d="M6 12h12"/>',
  chevron: '<path d="M9 6l6 6-6 6"/>',
  filter: '<path d="M4 5h16l-6.5 8v6l-3-1.5V13L4 5z"/>',
};

document.body.insertAdjacentHTML('afterbegin', `<svg width="0" height="0" style="position:absolute" aria-hidden="true">${
  Object.entries(ICONS).map(([id, paths]) => `<symbol id="i-${id}" viewBox="0 0 24 24">${paths}</symbol>`).join('')}</svg>`);

export function icon(name, className = 'icon') {
  return `<svg class="${className}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
}

export function el(tag, props = {}, ...children) {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...children.filter(c => c != null && c !== false));
  return node;
}

export const store = {
  get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} },
};

export const modUrl = (id, slug) => slug ? `https://www.curseforge.com/minecraft/mc-mods/${slug}` : `https://www.curseforge.com/projects/${id}`;
export const fmt = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 });

// marks: id -> { m: 'keep' | 'reject', n: name, s: slug, v: view name, req: [[id, name, slug]], inc: [ids] }.
// Older versions stored [mark, name, slug]; those are read as-is.
export const marks = Object.fromEntries(Object.entries(store.get('mods:marks', {}))
  .map(([id, v]) => [id, Array.isArray(v) ? { m: v[0], n: v[1], s: v[2], req: [], inc: [] } : v]));
export function saveMarks() {
  store.set('mods:marks', marks);
  for (const fn of listeners) fn();
}
const listeners = new Set();
export const onMarks = fn => listeners.add(fn);
export const keptIds = () => Object.keys(marks).filter(id => marks[id].m === 'keep').map(Number);

// The loaded pack: { name, version, loader, ids: [], names: { id: name }, inc: { id: [ids] } }.
export const pack = { current: store.get('mods:modlist', null) };
export function setPack(list) {
  pack.current = list;
  store.set('mods:modlist', list);
  for (const fn of listeners) fn();
}

// What the shortlist needs that neither it nor the pack has, and declared conflicts inside it.
export function shortlistReport() {
  const have = new Set([...keptIds(), ...(pack.current?.ids ?? [])]);
  const missing = new Map();
  const conflicts = [];
  for (const id of keptIds()) {
    const k = marks[id];
    for (const [rid, n, s] of k.req ?? []) {
      if (have.has(rid)) continue;
      if (!missing.has(rid)) missing.set(rid, { n, s, by: [] });
      missing.get(rid).by.push(k.n);
    }
    for (const other of k.inc ?? []) {
      if (!have.has(other) || other === id) continue;
      const name = marks[other]?.n ?? pack.current?.names[other] ?? `project ${other}`;
      if (!conflicts.some(c => c.ids.includes(id) && c.ids.includes(other))) conflicts.push({ ids: [id, other], text: `${k.n} and ${name}` });
    }
  }
  return { missing: [...missing].map(([id, v]) => ({ id, ...v })), conflicts };
}

let sheet;
export function openShortlist() {
  if (!sheet) {
    sheet = el('dialog', { className: 'sheet', ariaLabel: 'Shortlist' });
    sheet.addEventListener('click', e => { if (e.target === sheet) sheet.close(); });
    document.body.append(sheet);
    onMarks(() => sheet.open && renderSheet());
  }
  renderSheet();
  sheet.showModal();
}

function renderSheet() {
  const kept = keptIds().map(id => ({ id, ...marks[id] })).sort((a, b) => (a.v ?? '').localeCompare(b.v ?? '') || a.n.localeCompare(b.n));
  const rejected = Object.values(marks).filter(m => m.m === 'reject').length;
  const { missing, conflicts } = shortlistReport();
  const groups = new Map();
  for (const k of kept) {
    const key = k.v ?? 'Other';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(k);
  }
  const link = (id, n, s) => el('a', { href: modUrl(id, s), target: '_blank', rel: 'noopener', textContent: n });
  const body = el('div', { className: 'body' });
  if (pack.current) body.append(el('p', { className: 'note', textContent: `Checked against ${pack.current.name} (${pack.current.ids.length} mods) as well as the shortlist.` }));
  if (!kept.length) body.append(el('p', { className: 'empty', textContent: 'Nothing kept yet. Use Keep on any mod to add it here; the list is shared by every role.' }));
  if (conflicts.length) {
    body.append(el('h3', { className: 'bad', textContent: `Declared conflicts (${conflicts.length})` }),
      el('ul', {}, ...conflicts.map(c => el('li', {}, el('span', { className: 'bad', textContent: c.text })))));
  }
  if (missing.length) {
    body.append(el('h3', { className: 'warn', textContent: `Missing requirements (${missing.length})` }),
      el('ul', {}, ...missing.sort((a, b) => b.by.length - a.by.length).map(r =>
        el('li', {}, link(r.id, r.n, r.s), el('small', { textContent: `needed by ${r.by.length === 1 ? r.by[0] : `${r.by.length} mods`}`, title: r.by.join(', ') })))));
  }
  for (const [name, list] of groups) {
    body.append(el('h3', { textContent: `${name} (${list.length})` }), el('ul', {}, ...list.map(k => {
      const remove = el('button', { className: 'btn ghost small', ariaLabel: `Remove ${k.n}`, title: 'Remove' });
      remove.innerHTML = icon('x');
      remove.onclick = () => { delete marks[k.id]; saveMarks(); };
      return el('li', {}, link(k.id, k.n, k.s), remove);
    })));
  }
  const close = el('button', { className: 'btn ghost small', ariaLabel: 'Close', onclick: () => sheet.close() });
  close.innerHTML = icon('x');
  const copy = el('button', { className: 'btn primary', disabled: !kept.length });
  copy.innerHTML = `${icon('copy')} Copy list`;
  copy.onclick = async () => {
    const text = kept.map(k => `${k.n} - ${modUrl(k.id, k.s)}`).join('\n');
    try { await navigator.clipboard.writeText(text); copy.lastChild.textContent = ' Copied'; }
    catch { prompt('Shortlist:', text); }
    setTimeout(() => { copy.lastChild.textContent = ' Copy list'; }, 1500);
  };
  const clear = el('button', { className: 'btn', textContent: 'Clear all', disabled: !kept.length && !rejected });
  clear.onclick = () => {
    if (!confirm(`Remove ${kept.length} kept and ${rejected} rejected marks?`)) return;
    for (const id of Object.keys(marks)) delete marks[id];
    saveMarks();
  };
  sheet.replaceChildren(
    el('header', {}, el('h2', { textContent: `Shortlist · ${kept.length}` }), close),
    body,
    el('footer', {}, copy, clear, rejected ? el('span', { className: 'note', style: 'margin-left:auto;align-self:center', textContent: `${rejected} rejected` }) : null));
}

// Keeps a header shortlist button's count current.
export function bindShortlistButton(button) {
  const update = () => { button.querySelector('.badge').textContent = keptIds().length; };
  button.onclick = openShortlist;
  onMarks(update);
  update();
}
