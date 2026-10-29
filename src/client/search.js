// Site search. The index (built by tools/lib/search-index.mjs) and MiniSearch are only downloaded
// the first time someone opens search, so pages stay light.
import { SEARCH_OPTIONS } from '../shared/search-options.js';

const html = document.documentElement;
const root = html.dataset.root ?? './';
const MAX_RESULTS = 12;

let indexPromise = null;
let dialog, input, list;
let results = [];
let selected = 0;

export function initSearch() {
  const trigger = document.querySelector('.search-trigger');
  if (!trigger) return;
  // Any element marked data-open-search (the home page's buttons) opens the same dialog.
  for (const el of [trigger, ...document.querySelectorAll('[data-open-search]')]) {
    el.addEventListener('click', open);
    el.addEventListener('pointerenter', loadIndex, { once: true });
  }
  document.addEventListener('keydown', event => {
    const typing = event.target.closest?.('input, textarea, select, [contenteditable]');
    if ((event.key === '/' && !typing) || (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey))) {
      event.preventDefault();
      open();
    }
  });
}

function loadIndex() {
  indexPromise ??= Promise.all([
    import('../vendor/minisearch.js'),
    fetch(root + html.dataset.search).then(r => {
      if (!r.ok) throw new Error(`Search index: HTTP ${r.status}`);
      return r.text();
    }),
  ]).then(([{ default: MiniSearch }, json]) => MiniSearch.loadJSON(json, SEARCH_OPTIONS));
  return indexPromise;
}

function open() {
  if (!dialog) build();
  dialog.showModal();
  input.focus();
  input.select();
  loadIndex().catch(error => showMessage(`Search is unavailable right now (${error.message}).`));
}

function build() {
  dialog = document.createElement('dialog');
  dialog.className = 'search-dialog';
  dialog.setAttribute('aria-label', 'Search the wiki');
  dialog.innerHTML = `
    <form method="dialog" class="search-box">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
      <input type="search" role="combobox" aria-expanded="false" aria-controls="search-results" aria-autocomplete="list"
        placeholder="Search pages, items, mechanics…" autocomplete="off" spellcheck="false" enterkeyhint="go">
      <button class="search-close" value="close" aria-label="Close search">Esc</button>
    </form>
    <ul class="search-results" id="search-results" role="listbox" aria-label="Results"></ul>
    <p class="search-hint"><kbd>↑</kbd> <kbd>↓</kbd> to choose · <kbd>Enter</kbd> to open · <kbd>Esc</kbd> to close</p>`;
  document.body.append(dialog);
  input = dialog.querySelector('input');
  list = dialog.querySelector('.search-results');

  input.addEventListener('input', () => run(input.value));
  input.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!results.length) return;
      selected = (selected + (event.key === 'ArrowDown' ? 1 : -1) + results.length) % results.length;
      highlight();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (results[selected]) location.href = root + results[selected].path;
    }
  });
  // Clicking the dimmed backdrop closes the dialog.
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
}

async function run(query) {
  const text = query.trim();
  if (!text) {
    results = [];
    list.innerHTML = '';
    input.setAttribute('aria-expanded', 'false');
    return;
  }
  const index = await loadIndex();
  if (input.value.trim() !== text) return; // a newer query is already running
  results = index.search(text).slice(0, MAX_RESULTS);
  selected = 0;
  if (!results.length) return showMessage(`No pages match “${escapeHtml(text)}”.`);
  list.innerHTML = results.map((r, i) => `
    <li role="option" id="search-result-${i}">
      <a href="${escapeHtml(root + r.path)}">
        ${r.icon
          ? `<span class="result-icon"><span class="mc-icon slot" style="--x:${r.icon[0]};--y:${r.icon[1]}"></span></span>`
          : '<span class="result-icon page" aria-hidden="true">¶</span>'}
        <span class="result-title">${mark(r.title, r.terms)}${r.category ? `<span class="result-category">${escapeHtml(r.category)}</span>` : ''}</span>
        <span class="result-summary">${mark(r.summary, r.terms)}</span>
      </a>
    </li>`).join('');
  input.setAttribute('aria-expanded', 'true');
  highlight();
}

function highlight() {
  list.querySelectorAll('[role="option"]').forEach((option, i) => {
    option.setAttribute('aria-selected', String(i === selected));
    if (i === selected) option.scrollIntoView({ block: 'nearest' });
  });
  input.setAttribute('aria-activedescendant', results.length ? `search-result-${selected}` : '');
}

function showMessage(message) {
  results = [];
  input?.setAttribute('aria-expanded', 'false');
  if (list) list.innerHTML = `<li class="search-empty">${message}</li>`;
}

// Wraps matched words in <mark>, matching on word starts like the prefix search does.
function mark(text, terms) {
  const safe = escapeHtml(text);
  if (!terms?.length) return safe;
  const pattern = new RegExp(`\\b(${terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  return safe.replace(pattern, '<mark>$1</mark>');
}

function escapeHtml(text) {
  return String(text ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
}
