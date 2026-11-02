// "crafting" triggers: a hover preview of the first recipe, and a dialog listing every recipe.
// Each item's recipes are prerendered at build time (src/render/crafts.js).
import { addTooltipItems } from './tooltip.js';
import { placeNearCursor } from './loot-viewer.js';

const BASE = new URL('../craft/', import.meta.url);
const HOVER_DELAY = 150;
const root = document.documentElement.dataset.root ?? './';
const cache = new Map();
let preview = null;
let hovered = null;
let timer = 0;
let dialog = null;

function load(id) {
  if (!cache.has(id)) {
    cache.set(id, fetch(new URL(`${id.replace(':', '/')}.json`, BASE)).then(response => {
      if (!response.ok) throw new Error(`Recipe data: HTTP ${response.status}`);
      return response.text();
    }).then(text => {
      // JSON-safe: the mark holds nothing to escape, and page roots are only dots and slashes.
      const data = JSON.parse(text.replaceAll('%ROOT%', root));
      addTooltipItems(data.items);
      return data;
    }));
  }
  return cache.get(id);
}

export function initCraftViewer() {
  document.addEventListener('pointerover', event => {
    if (event.pointerType !== 'mouse') return;
    const target = event.target.closest?.('[data-craft]');
    if (!target || target === hovered) return;
    hovered = target;
    clearTimeout(timer);
    timer = setTimeout(() => showPreview(target, event.clientX, event.clientY), HOVER_DELAY);
  });
  document.addEventListener('pointerout', event => {
    if (event.pointerType !== 'mouse') return;
    const target = event.target.closest?.('[data-craft]');
    if (target && !target.contains(event.relatedTarget)) hidePreview();
  });
  document.addEventListener('pointermove', event => {
    if (hovered && preview && !preview.hidden) placeNearCursor(preview, event.clientX, event.clientY);
  });
  document.addEventListener('click', event => {
    const target = event.target.closest?.('[data-craft]');
    if (!target) return;
    hidePreview();
    openDialog(target.dataset.craft);
  });
}

async function showPreview(target, x, y) {
  let data;
  try {
    data = await load(target.dataset.craft);
  } catch {
    return;
  }
  if (hovered !== target) return;
  if (!preview) {
    preview = document.createElement('div');
    preview.className = 'mc-tooltip craft-preview';
    preview.setAttribute('role', 'tooltip');
    document.body.append(preview);
  }
  const holder = document.createElement('div');
  holder.innerHTML = data.html;
  const first = holder.querySelector('.recipe');
  if (!first) return;
  const group = document.createElement('div');
  group.className = 'recipe-group';
  group.append(first);
  preview.replaceChildren(group);
  const hint = document.createElement('div');
  hint.className = 'tt-hint';
  hint.textContent = data.c === 1 ? 'Click to keep it open' : `Click for all ${data.c} recipes`;
  preview.append(hint);
  preview.hidden = false;
  placeNearCursor(preview, x, y);
}

function hidePreview() {
  clearTimeout(timer);
  hovered = null;
  if (preview) preview.hidden = true;
}

function ensureDialog() {
  if (dialog) return;
  dialog = document.createElement('dialog');
  dialog.className = 'loot-dialog craft-dialog';
  dialog.innerHTML = `<div class="loot-panel">
    <header class="loot-head">
      <div class="loot-head-text"><h2 class="loot-title"></h2><p class="loot-count"></p></div>
      <button class="loot-close" type="button" aria-label="Close">&times;</button>
    </header>
    <div class="craft-rows"></div>
  </div>`;
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.querySelector('.loot-close').addEventListener('click', () => dialog.close());
  document.body.append(dialog);
}

async function openDialog(id) {
  ensureDialog();
  const rows = dialog.querySelector('.craft-rows');
  dialog.querySelector('.loot-title').textContent = 'Loading…';
  dialog.querySelector('.loot-count').textContent = '';
  rows.innerHTML = '';
  if (!dialog.open) dialog.showModal();
  let data;
  try {
    data = await load(id);
  } catch {
    dialog.querySelector('.loot-title').textContent = 'Could not load the recipes.';
    return;
  }
  dialog.querySelector('.loot-title').textContent = data.n;
  dialog.querySelector('.loot-count').textContent = `${data.c} recipe${data.c === 1 ? '' : 's'}`;
  rows.innerHTML = data.html;
}
