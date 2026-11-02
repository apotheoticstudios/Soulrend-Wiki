// "N loot tables" triggers: a hover preview of the likeliest sources, and a dialog listing all of them.
// Each item's sources are a small JSON file written at build time (tools/lib/loot-sources.mjs).
const BASE = new URL('../loot/', import.meta.url);
const PREVIEW_ROWS = 5;
const HOVER_DELAY = 150;
const BATCH = 100;
const KIND_NAMES = {
  chest: 'Chests', mob: 'Mobs', block: 'Blocks', fishing: 'Fishing', archaeology: 'Archaeology',
  barter: 'Barter', gift: 'Gifts', other: 'Other',
};

const root = document.documentElement.dataset.root ?? './';
const cache = new Map();
let preview = null;
let hovered = null;
let timer = 0;
let dialog = null;
let view = null;

const esc = text => String(text).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

function load(id) {
  if (!cache.has(id)) {
    cache.set(id, fetch(new URL(`${id.replace(':', '/')}.json`, BASE)).then(response => {
      if (!response.ok) throw new Error(`Loot data: HTTP ${response.status}`);
      return response.json();
    }));
  }
  return cache.get(id);
}

function icon(cell) {
  return cell
    ? `<span class="mc-icon" style="--x:${cell[0]};--y:${cell[1]}" aria-hidden="true"></span>`
    : '<span class="mc-icon missing" aria-hidden="true"></span>';
}

// Blocks dropping themselves are noise next to chests and mobs, so they wait behind their chip.
function defaultRows(rows) {
  const others = rows.filter(row => row.k !== 'block');
  return others.length ? others : rows;
}

export function initLootViewer() {
  document.addEventListener('pointerover', event => {
    if (event.pointerType !== 'mouse') return;
    const target = event.target.closest?.('.loot-link[data-loot]');
    if (!target || target === hovered) return;
    hovered = target;
    clearTimeout(timer);
    timer = setTimeout(() => showPreview(target, event.clientX, event.clientY), HOVER_DELAY);
  });
  document.addEventListener('pointerout', event => {
    if (event.pointerType !== 'mouse') return;
    const target = event.target.closest?.('.loot-link[data-loot]');
    if (target && !target.contains(event.relatedTarget)) hidePreview();
  });
  document.addEventListener('pointermove', event => {
    if (hovered && preview && !preview.hidden) place(event.clientX, event.clientY);
  });
  document.addEventListener('click', event => {
    const target = event.target.closest?.('.loot-link[data-loot]');
    if (!target) return;
    hidePreview();
    openDialog(target);
  });
}

async function showPreview(target, x, y) {
  let data;
  try {
    data = await load(target.dataset.loot);
  } catch {
    return;
  }
  if (hovered !== target) return;
  if (!preview) {
    preview = document.createElement('div');
    preview.className = 'mc-tooltip loot-preview';
    preview.setAttribute('role', 'tooltip');
    document.body.append(preview);
  }
  const rows = defaultRows(data.s);
  preview.innerHTML = `<div class="tt-name">${esc(data.n)}</div>`
    + rows.slice(0, PREVIEW_ROWS).map(row => `<div class="loot-preview-row">${icon(row.i)}<span class="loot-preview-name">${esc(row.l)}</span><span class="loot-preview-chance">${esc(row.c)}</span></div>`).join('')
    + `<div class="tt-hint">Click for ${data.s.length === 1 ? 'details' : `all ${data.s.length}`}</div>`;
  preview.hidden = false;
  place(x, y);
}

function place(x, y) {
  const { width, height } = preview.getBoundingClientRect();
  let left = x + 14;
  let top = y - height - 6;
  if (left + width > innerWidth - 8) left = x - width - 14;
  if (top < 8) top = y + 18;
  if (top + height > innerHeight - 8) top = Math.max(8, innerHeight - height - 8);
  preview.style.left = `${Math.max(8, left)}px`;
  preview.style.top = `${top}px`;
}

function hidePreview() {
  clearTimeout(timer);
  hovered = null;
  if (preview) preview.hidden = true;
}

function ensureDialog() {
  if (dialog) return;
  dialog = document.createElement('dialog');
  dialog.className = 'loot-dialog';
  dialog.innerHTML = `<div class="loot-panel">
    <header class="loot-head">
      <span class="loot-head-icon"></span>
      <div class="loot-head-text"><h2 class="loot-title"></h2><p class="loot-count"></p></div>
      <button class="loot-close" type="button" aria-label="Close">&times;</button>
    </header>
    <div class="loot-tools">
      <input class="loot-filter" type="search" placeholder="Filter sources" aria-label="Filter sources">
      <div class="loot-chips" role="group" aria-label="Source type"></div>
    </div>
    <ul class="loot-rows"></ul>
    <p class="loot-empty" hidden>No sources match.</p>
    <p class="loot-note">Calculated from the game's loot data, not tested in game. Chances are the odds of at least one per chest, kill or block, before Looting, Fortune and Luck. Drops added by code or other mods' rules may be missing.</p>
  </div>`;
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.querySelector('.loot-close').addEventListener('click', () => dialog.close());
  dialog.querySelector('.loot-filter').addEventListener('input', renderRows);
  dialog.querySelector('.loot-chips').addEventListener('click', event => {
    const chip = event.target.closest('button[data-kind]');
    if (!chip) return;
    view.kind = chip.dataset.kind;
    renderChips();
    renderRows();
  });
  document.body.append(dialog);
}

async function openDialog(target) {
  ensureDialog();
  const id = target.dataset.loot;
  dialog.querySelector('.loot-title').textContent = 'Loading…';
  dialog.querySelector('.loot-count').textContent = '';
  dialog.querySelector('.loot-rows').innerHTML = '';
  dialog.querySelector('.loot-chips').innerHTML = '';
  dialog.querySelector('.loot-head-icon').innerHTML = '';
  dialog.querySelector('.loot-empty').hidden = true;
  dialog.querySelector('.loot-filter').value = '';
  if (!dialog.open) dialog.showModal();
  let data;
  try {
    data = await load(id);
  } catch {
    dialog.querySelector('.loot-title').textContent = 'Could not load the loot data.';
    return;
  }
  const hasOthers = data.s.some(row => row.k !== 'block');
  view = { data, kind: hasOthers ? 'default' : 'all' };
  dialog.querySelector('.loot-head-icon').innerHTML = icon(data.i);
  dialog.querySelector('.loot-title').textContent = data.n;
  dialog.querySelector('.loot-count').textContent = `${data.s.length} source${data.s.length === 1 ? '' : 's'}, likeliest first`;
  renderChips();
  renderRows();
}

function renderChips() {
  const { data, kind } = view;
  const counts = new Map();
  for (const row of data.s) counts.set(row.k, (counts.get(row.k) ?? 0) + 1);
  // One kind has nothing to choose between.
  if (counts.size < 2) {
    dialog.querySelector('.loot-chips').innerHTML = '';
    return;
  }
  const chip = (value, label, count) => `<button type="button" class="loot-chip" data-kind="${value}" aria-pressed="${kind === value || (kind === 'default' && value === 'all' && !counts.has('block'))}">${esc(label)} <span>${count}</span></button>`;
  dialog.querySelector('.loot-chips').innerHTML = chip('all', 'All', data.s.length)
    + Object.keys(KIND_NAMES).filter(k => counts.has(k)).map(k => chip(k, KIND_NAMES[k], counts.get(k))).join('');
}

function rowHtml(row) {
  const notes = [row.d, ...(row.w ?? [])].filter(Boolean).map(note => `<span class="loot-tag">${esc(note)}</span>`).join('');
  const name = row.h ? `<a href="${esc(root + row.h)}">${esc(row.l)}</a>` : esc(row.l);
  return `<li class="loot-row">${icon(row.i)}<div class="loot-source"><div class="loot-name">${name}</div>`
    + `${row.s ? `<div class="loot-sub">${esc(row.s)}</div>` : ''}${notes ? `<div class="loot-tags">${notes}</div>` : ''}</div>`
    + `<div class="loot-numbers"><strong>${esc(row.c)}</strong>${row.n ? `<span>× ${esc(row.n)}</span>` : ''}</div></li>`;
}

// Long lists go in batches, so an item with hundreds of sources opens at once.
let batchFrame = 0;
function renderRows() {
  cancelAnimationFrame(batchFrame);
  const { data, kind } = view;
  const query = dialog.querySelector('.loot-filter').value.trim().toLowerCase();
  const base = query || kind === 'all' ? data.s : kind === 'default' ? defaultRows(data.s) : data.s;
  const rows = base.filter(row => (kind === 'all' || kind === 'default' || row.k === kind)
    && (!query || `${row.l} ${row.s ?? ''}`.toLowerCase().includes(query)));
  const list = dialog.querySelector('.loot-rows');
  list.innerHTML = '';
  list.scrollTop = 0;
  dialog.querySelector('.loot-empty').hidden = rows.length > 0;
  let at = 0;
  const next = () => {
    list.insertAdjacentHTML('beforeend', rows.slice(at, at + BATCH).map(rowHtml).join(''));
    at += BATCH;
    if (at < rows.length) batchFrame = requestAnimationFrame(next);
  };
  next();
}
