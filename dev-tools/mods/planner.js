// Mod Planner: one role (?r=world) or one base mod's addons (?a=create) at a time.
import { el, icon, store, fmt, modUrl, marks, saveMarks, onMarks, keptIds, pack, setPack, bindShortlistButton } from '../shared.js';

const PAGE = 100;
const LOADER_NAMES = { forge: 1, neoforge: 6, fabric: 4, quilt: 5 };
const RELEASE = /^\d+\.\d+(\.\d+)?$/;
const $ = id => document.getElementById(id);
const params = new URLSearchParams(location.search);
const viewFile = params.get('a') ? `addons-${params.get('a')}` : params.get('r') || 'world';
const dateFmt = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' });

// Filters shared by every view, and the parts kept per view.
const filters = { version: '1.20.1', loader: '1', sort: 'dl', show: 'unrejected', showLibs: false, showOther: false, hideConflicts: false, hideOwned: false, ...store.get('mods:planner', {}) };
const tagState = store.get(`mods:tags:${viewFile}`, {});
let data, byId, depIds = new Map(), shown = [], limit = PAGE;
const saveFilters = () => store.set('mods:planner', filters);

function nameOf(id) {
  return byId.get(id)?.n ?? data.libs[id]?.[0] ?? marks[id]?.n ?? pack.current?.names[id] ?? `project ${id}`;
}
function slugOf(id) {
  return byId.get(id)?.s ?? data.libs[id]?.[1] ?? marks[id]?.s;
}
const link = (id, className) => el('a', { href: modUrl(id, slugOf(id)), target: '_blank', rel: 'noopener', textContent: nameOf(id), className });

// Mods the checks compare against: the loaded pack plus everything kept.
function context() {
  return new Set([...(pack.current?.ids ?? []), ...keptIds()]);
}

// Required mods for the chosen loader: rl holds a loader bitmask per entry (0 = declared by an untagged file).
function reqs(m) {
  const loader = filters.loader === '' ? -1 : Number(filters.loader);
  return loader < 0 || !m.rl ? m.req : m.req.filter((id, i) => !m.rl[i] || m.rl[i] & (1 << loader));
}

function available(m, version, loader) {
  // Loader 0 means the file isn't tagged with one, which is normal for older versions.
  return m.f.some(f => (version < 0 || f >> 3 === version) && (loader < 0 || (f & 7) === loader || (f & 7) === 0));
}

function check(m, ctx) {
  const conflicts = new Set(m.inc.filter(id => ctx.has(id) && id !== m.id));
  for (const id of ctx) {
    if (id !== m.id && (byId.get(id)?.inc.includes(m.id) || marks[id]?.inc?.includes(m.id) || pack.current?.inc[id]?.includes(m.id))) conflicts.add(id);
  }
  return { conflicts: [...conflicts], missing: reqs(m).filter(id => !ctx.has(id)), owned: !!pack.current?.ids.includes(m.id) };
}

function update() {
  const q = $('q').value.trim().toLowerCase();
  const version = filters.version === '' ? -1 : data.versions.indexOf(filters.version);
  const loader = filters.loader === '' ? -1 : Number(filters.loader);
  const dep = depIds.get($('dep').value) ?? null;
  const hideLibs = data.view.slug !== 'libraries' && !filters.showLibs;
  const ctx = context();
  const want = Object.keys(tagState).filter(c => tagState[c] === 'in').map(Number);
  const avoid = Object.keys(tagState).filter(c => tagState[c] === 'out').map(Number);
  shown = data.mods.filter(m => {
    const mark = marks[m.id]?.m;
    if (filters.show === 'unrejected' && mark === 'reject') return false;
    if (filters.show === 'keep' && mark !== 'keep') return false;
    if (filters.show === 'unmarked' && mark) return false;
    if (hideLibs && m.c.includes(data.library)) return false;
    if (m.o && !filters.showOther) return false;
    if (dep != null && !m.req.includes(dep)) return false;
    if (!available(m, version, loader)) return false;
    if (want.some(c => !m.c.includes(c)) || avoid.some(c => m.c.includes(c))) return false;
    if (q && !`${m.n}\n${m.d}\n${m.a}`.toLowerCase().includes(q)) return false;
    if (filters.hideOwned && pack.current?.ids.includes(m.id)) return false;
    if (filters.hideConflicts && check(m, ctx).conflicts.length) return false;
    return true;
  });
  const key = filters.sort;
  if (key !== 'dl') shown.sort(key === 'n' ? (a, b) => a.n.localeCompare(b.n) : (a, b) => b[key].localeCompare(a[key]));
  limit = PAGE;
  renderChips(q, dep);
  render();
}

function renderChips(q, dep) {
  const chips = [];
  const chip = (text, onRemove, out) => {
    const remove = el('button', { type: 'button', ariaLabel: `Remove filter ${text}`, onclick: onRemove });
    remove.innerHTML = icon('x');
    chips.push(el('span', { className: `chip${out ? ' out' : ''}` }, text, remove));
  };
  if (filters.version) chip(`Minecraft ${filters.version}`, () => { filters.version = ''; saveFilters(); syncControls(); update(); });
  if (filters.loader) chip(data.loaders[filters.loader], () => { filters.loader = ''; saveFilters(); syncControls(); update(); });
  if (q) chip(`“${$('q').value.trim()}”`, () => { $('q').value = ''; update(); });
  if (dep != null) chip(`Requires ${nameOf(dep)}`, () => { $('dep').value = ''; update(); });
  for (const [c, s] of Object.entries(tagState)) chip(data.categories[c] ?? c, () => { delete tagState[c]; tagsChanged(); }, s === 'out');
  if (chips.length > 2) chips.push(el('button', { type: 'button', className: 'clear', textContent: 'Clear search and tags', onclick: clearFilters }));
  $('chips').replaceChildren(...chips);
}

function clearFilters() {
  $('q').value = '';
  $('dep').value = '';
  for (const c of Object.keys(tagState)) delete tagState[c];
  tagsChanged();
}

// The view's size under the main-role and library switches, so the count agrees with the sidebar.
function scope() {
  const libs = data.view.slug === 'libraries' || filters.showLibs;
  return data.mods.filter(m => (!m.o || filters.showOther) && (libs || !m.c.includes(data.library))).length;
}

function render() {
  const ctx = context();
  $('list').classList.toggle('no-status', !ctx.size);
  if (!shown.length) {
    $('list').replaceChildren(el('div', { className: 'state' },
      el('h2', { textContent: 'No mods match' }),
      el('p', { textContent: `Nothing in ${data.view.name} fits ${filters.version ? `Minecraft ${filters.version}` : 'these filters'}${filters.loader ? ` on ${data.loaders[filters.loader]}` : ''} with the filters above.` }),
      el('button', { type: 'button', className: 'btn', textContent: 'Clear filters', onclick: clearFilters })));
  } else {
    $('list').replaceChildren(...shown.slice(0, limit).map((m, i) => row(m, ctx, i < 24)));
  }
  $('count').replaceChildren(el('b', { textContent: shown.length.toLocaleString('en') }), ` of ${scope().toLocaleString('en')} mods`);
  const rest = shown.length - limit;
  $('more').hidden = rest <= 0;
  $('more').textContent = `Show ${Math.min(PAGE, rest).toLocaleString('en')} more`;
}

function row(m, ctx, eager) {
  const mark = marks[m.id]?.m;
  const { conflicts, missing, owned } = check(m, ctx);
  const req = reqs(m);
  const loaders = [...new Set(m.f.map(f => f & 7))].filter(Boolean).sort().map(l => data.loaders[l]);
  const types = m.c.filter(c => data.view.types?.includes(c) && c !== data.library).map(c => data.categories[c]);
  if (!types.length) types.push(...m.c.slice(0, 2).map(c => data.categories[c]).filter(Boolean));

  const toggle = kind => {
    if (marks[m.id]?.m === kind) delete marks[m.id];
    else marks[m.id] = { m: kind, n: m.n, s: m.s, v: data.view.kind === 'addons' ? `Addons for ${data.view.name}` : data.view.name,
      req: req.map(id => [id, nameOf(id), slugOf(id)]), inc: m.inc };
    saveMarks();
  };
  const keep = el('button', { type: 'button', className: 'btn keep', ariaPressed: String(mark === 'keep'), onclick: () => toggle('keep') });
  keep.innerHTML = `${icon(mark === 'keep' ? 'check' : 'bookmark')}<span>${mark === 'keep' ? 'Kept' : 'Keep'}</span>`;
  const reject = el('button', { type: 'button', className: 'btn reject', ariaPressed: String(mark === 'reject'), ariaLabel: `Reject ${m.n}`, title: 'Reject', onclick: () => toggle('reject') });
  reject.innerHTML = icon('x');

  // Without a pack or a shortlist there is nothing to check against, so rows carry no status.
  let status = null;
  if (!ctx.size) status = null;
  else if (owned) status = ['ok', 'check', 'In pack'];
  else if (conflicts.length) status = ['bad', 'alert', 'Conflict', `Declared incompatible with ${conflicts.map(nameOf).join(', ')}`];
  else if (missing.length) status = ['warn', 'link', `Needs ${missing.length}`, `Requires ${missing.map(nameOf).join(', ')}`];
  else if (req.length) status = ['ok', 'check', 'Ready'];
  const statusEl = status ? el('span', { className: `status ${status[0]}`, title: status[3] ?? '' }) : ctx.size ? el('span') : null;
  if (status) statusEl.innerHTML = `${icon(status[1])}${status[2]}`;

  const deps = req.length ? el('span', { className: 'deps' }, 'Requires',
    ...req.slice(0, 4).flatMap((id, i) => {
      const have = ctx.has(id);
      const wrap = el('span', { className: have ? 'have' : ctx.size ? 'miss' : '' }, link(id));
      if (have) wrap.insertAdjacentHTML('beforeend', icon('check'));
      return [i ? ', ' : ' ', wrap];
    }),
    req.length > 4 ? ` +${req.length - 4}` : null) : null;

  // CurseForge serves 64px thumbnails by path for most mods; fall back to the full one, then to a blank tile.
  const full = m.i && (m.i.startsWith('http') ? m.i : data.iconPrefix + m.i);
  const img = full ? el('img', { src: full.replace('/256/256/', '/64/64/'), alt: '', loading: eager ? 'eager' : 'lazy', width: 40, height: 40 }) : el('div', { className: 'ph' });
  img.onerror = () => { if (img.src !== full) img.src = full; else img.replaceWith(el('div', { className: 'ph' })); };
  const stats = el('div', { className: 'stats' }, el('span', { title: `${m.dl.toLocaleString('en')} downloads` }), el('span', { title: 'Last updated' }));
  stats.firstChild.innerHTML = `${icon('download')}<b class="num">${fmt.format(m.dl)}</b>`;
  stats.lastChild.innerHTML = `${icon('clock')}<span class="num">${dateFmt.format(new Date(m.u))}</span>`;

  const node = el('article', { className: 'row', role: 'listitem' },
    img,
    el('div', { className: 'body' },
      el('div', { className: 'title' }, el('a', { href: modUrl(m.id, m.s), target: '_blank', rel: 'noopener', textContent: m.n }), el('span', { textContent: `by ${m.a}` })),
      el('p', { className: 'sum', textContent: m.d, title: m.d }),
      el('div', { className: 'meta' }, ...types.slice(0, 3).map(t => el('span', { className: 'type', textContent: t })),
        loaders.length ? el('span', { textContent: loaders.join(' · ') }) : null, deps)),
    stats, statusEl, el('div', { className: 'actions' }, keep, reject));
  node.dataset.mark = mark || '';
  return node;
}

function tagButton(id, count) {
  const b = el('button', { type: 'button', className: 'tag', title: 'Click to require, again to exclude, again to clear' },
    el('span', { className: 'box' }), el('span', { className: 'name', textContent: data.categories[id] }), el('span', { className: 'num', textContent: count.toLocaleString('en') }));
  b.firstChild.innerHTML = icon(tagState[id] === 'out' ? 'minus' : 'check');
  if (tagState[id]) b.dataset.state = tagState[id];
  b.setAttribute('aria-pressed', tagState[id] === 'in' ? 'true' : tagState[id] === 'out' ? 'mixed' : 'false');
  b.onclick = () => {
    const next = { undefined: 'in', in: 'out', out: undefined }[tagState[id]];
    if (next) tagState[id] = next; else delete tagState[id];
    tagsChanged();
  };
  return el('li', {}, b);
}

function tagsChanged() {
  store.set(`mods:tags:${viewFile}`, tagState);
  renderTags();
  update();
}

function renderTags() {
  const counts = new Map();
  for (const m of data.mods) if (!m.o || filters.showOther) for (const c of m.c) counts.set(c, (counts.get(c) ?? 0) + 1);
  const own = (data.view.types ?? []).filter(c => counts.has(c) && c !== data.library);
  const others = [...counts.keys()].filter(c => !own.includes(c) && c !== data.library && data.categories[c]).sort((a, b) => counts.get(b) - counts.get(a));
  // A role with one CurseForge category has nothing to choose between, so its "Type" list shows the commonest other tags.
  const primary = own.length > 1 ? own : others.slice(0, 8);
  const secondary = own.length > 1 ? others.slice(0, 16) : others.slice(8, 24);
  $('typesLabel').textContent = own.length > 1 ? 'Type' : 'Tagged';
  $('types').replaceChildren(...primary.map(c => tagButton(c, counts.get(c))));
  $('also').replaceChildren(...secondary.map(c => tagButton(c, counts.get(c))));
  $('alsoField').hidden = !secondary.length;
  if (secondary.some(c => tagState[c])) $('alsoField').open = true;
}

// Required dependencies, most depended-on first, for the Depends on box.
function renderDeps() {
  const counts = new Map();
  for (const m of data.mods) for (const id of m.req) counts.set(id, (counts.get(id) ?? 0) + 1);
  const ids = [...counts.keys()].filter(id => id !== data.view.base).sort((a, b) => counts.get(b) - counts.get(a));
  depIds = new Map(ids.map(id => [nameOf(id), id]));
  $('deps').replaceChildren(...ids.slice(0, 400).map(id => el('option', { value: nameOf(id), label: `${counts.get(id).toLocaleString('en')} mods` })));
}

function renderNav(index) {
  const item = (href, name, count, current) => el('li', {}, el('a', { href, ariaCurrent: current ? 'page' : null },
    el('span', { textContent: name }), el('span', { className: 'num', textContent: count.toLocaleString('en') })));
  $('roles').replaceChildren(...index.roles.map(r => item(`?r=${r.slug}`, r.name, r.count, viewFile === r.slug)));
  const addons = index.addons.map(a => item(`?a=${a.slug}`, a.name, a.count, viewFile === `addons-${a.slug}`));
  const currentAt = index.addons.findIndex(a => viewFile === `addons-${a.slug}`);
  $('addons').replaceChildren(...addons.slice(0, 8));
  $('addonsMore').replaceChildren(...addons.slice(8));
  $('moreAddons').hidden = addons.length <= 8;
  if (currentAt >= 8) $('moreAddons').open = true;
}

function loaderId(name) {
  return LOADER_NAMES[String(name).toLowerCase().split('-')[0]] ?? null;
}

// Reads CurseForge's minecraftinstance.json (an installed instance) or manifest.json (an exported modpack).
function parsePack(json, fileName) {
  const list = { name: json.name || fileName, version: null, loader: null, ids: [], names: {}, inc: {} };
  if (Array.isArray(json.installedAddons)) {
    list.version = json.gameVersion ?? null;
    list.loader = loaderId(json.baseModLoader?.name ?? '');
    for (const a of json.installedAddons) {
      list.ids.push(a.addonID);
      list.names[a.addonID] = a.name;
      const inc = (a.installedFile?.dependencies ?? []).filter(d => d.type === 5).map(d => d.addonId);
      if (inc.length) list.inc[a.addonID] = inc;
    }
  } else if (Array.isArray(json.files)) {
    list.version = json.minecraft?.version ?? null;
    list.loader = loaderId((json.minecraft?.modLoaders?.find(l => l.primary) ?? json.minecraft?.modLoaders?.[0])?.id ?? '');
    list.ids = json.files.map(f => f.projectID);
  } else {
    throw new Error('it isn’t a minecraftinstance.json or manifest.json from CurseForge');
  }
  return list;
}

async function loadPackFile(file) {
  try {
    const list = parsePack(JSON.parse(await file.text()), file.name);
    if (list.version && data.versions.includes(list.version)) filters.version = list.version;
    if (list.loader) filters.loader = String(list.loader);
    saveFilters();
    syncControls();
    setPack(list);
  } catch (err) {
    alert(`Couldn’t read ${file.name}: ${err.message}.`);
  }
}

function showPack() {
  const p = pack.current;
  $('packLabel').textContent = p ? `${p.name} · ${p.ids.length}` : 'Load pack';
  $('packBtn').title = p ? `Checking against ${p.name}${p.version ? ` (${p.version}${p.loader ? ` ${data.loaders[p.loader]}` : ''})` : ''}. Click to replace or remove.` : 'Load a minecraftinstance.json or manifest.json to check mods against it';
  $('packToggles').hidden = !p;
}

function syncControls() {
  $('version').value = filters.version;
  for (const r of document.querySelectorAll('[name="loader"]')) r.checked = r.value === filters.loader;
  $('sort').value = filters.sort;
  $('show').value = filters.show;
  $('showLibs').checked = filters.showLibs;
  $('showOther').checked = filters.showOther;
  $('hideConflicts').checked = filters.hideConflicts;
  $('hideOwned').checked = filters.hideOwned;
}

function skeleton() {
  $('list').replaceChildren(...Array.from({ length: 8 }, () => el('div', { className: 'row skeleton', ariaHidden: 'true' },
    el('div', { className: 'ph' }), el('div', {}, el('div', { className: 'bar', style: 'width:40%' }), el('div', { className: 'bar', style: 'width:75%' })))));
}

async function init() {
  bindShortlistButton($('shortlist'));
  if (matchMedia('(max-width: 640px)').matches) $('q').placeholder = 'Search mods';
  skeleton();
  let index;
  try {
    const [indexRes, res] = await Promise.all([fetch('data/index.json'), fetch(`data/${encodeURIComponent(viewFile)}.json`)]);
    if (!indexRes.ok || !res.ok) throw new Error(res.ok ? indexRes.status : res.status);
    [index, data] = await Promise.all([indexRes.json(), res.json()]);
  } catch {
    $('title').textContent = 'Not found';
    $('list').replaceChildren(el('div', { className: 'state' }, el('h2', { textContent: 'This list isn’t available' }),
      el('p', { textContent: 'The data may not be generated yet (npm run mods), or the link points at a role that no longer exists.' }),
      el('a', { className: 'btn', href: '../', textContent: 'Back to all roles' })));
    return;
  }
  byId = new Map(data.mods.map(m => [m.id, m]));
  const view = data.view;
  document.title = `${view.kind === 'addons' ? `Addons for ${view.name}` : view.name} · Mod Planner`;
  $('title').textContent = view.kind === 'addons' ? `Addons for ${view.name}` : view.name;
  $('blurb').replaceChildren(...(view.kind === 'addons'
    ? ['Mods that list ', link(view.base), ' as a required dependency.']
    : [view.blurb]));
  $('libsField').hidden = view.slug === 'libraries';
  $('otherField').hidden = !data.mods.some(m => m.o);
  $('version').append(...data.versions.filter(v => RELEASE.test(v)).map(v => el('option', { value: v, textContent: v })));
  if (filters.version && !data.versions.includes(filters.version)) filters.version = '';
  renderNav(index);
  renderTags();
  renderDeps();
  syncControls();
  showPack();

  let timer;
  $('q').oninput = () => { clearTimeout(timer); timer = setTimeout(update, 150); };
  $('dep').oninput = () => { if (!$('dep').value || depIds.has($('dep').value)) update(); };
  $('version').onchange = () => { filters.version = $('version').value; saveFilters(); update(); };
  $('loader').onchange = e => { filters.loader = e.target.value; saveFilters(); update(); };
  for (const id of ['sort', 'show']) $(id).onchange = () => { filters[id] = $(id).value; saveFilters(); update(); };
  for (const id of ['showLibs', 'hideConflicts', 'hideOwned']) $(id).onchange = () => { filters[id] = $(id).checked; saveFilters(); update(); };
  $('showOther').onchange = () => { filters.showOther = $('showOther').checked; saveFilters(); renderTags(); update(); };
  $('reset').onclick = () => {
    Object.assign(filters, { version: '1.20.1', loader: '1', showLibs: false, showOther: false });
    if (!data.versions.includes(filters.version)) filters.version = '';
    saveFilters();
    syncControls();
    clearFilters();
  };
  $('more').onclick = () => { limit += PAGE; render(); };
  $('filtersBtn').onclick = () => {
    const open = $('side').classList.toggle('open');
    document.body.classList.toggle('drawer', open);
    $('filtersBtn').setAttribute('aria-expanded', String(open));
  };
  // A tap outside the open drawer closes it.
  document.addEventListener('click', e => {
    if ($('side').classList.contains('open') && !$('side').contains(e.target) && !$('filtersBtn').contains(e.target)) $('filtersBtn').click();
  });
  $('packBtn').onclick = () => {
    if (pack.current && confirm(`Stop checking against ${pack.current.name}? Choose Cancel to load a different file instead.`)) { setPack(null); return; }
    $('file').click();
  };
  $('file').onchange = () => { if ($('file').files[0]) loadPackFile($('file').files[0]); $('file').value = ''; };
  let depth = 0;
  addEventListener('dragenter', e => { if (e.dataTransfer.types.includes('Files')) { depth++; $('drop').hidden = false; } });
  addEventListener('dragleave', () => { if (--depth <= 0) { depth = 0; $('drop').hidden = true; } });
  addEventListener('dragover', e => e.preventDefault());
  addEventListener('drop', e => {
    e.preventDefault();
    depth = 0;
    $('drop').hidden = true;
    if (e.dataTransfer.files[0]) loadPackFile(e.dataTransfer.files[0]);
  });
  addEventListener('keydown', e => {
    if (e.key === '/' && !/^(INPUT|SELECT|TEXTAREA)$/.test(document.activeElement.tagName)) { e.preventDefault(); $('q').focus(); }
    if (e.key === 'Escape' && $('side').classList.contains('open')) $('filtersBtn').click();
  });
  onMarks(() => { showPack(); update(); });
  update();
}
init();
