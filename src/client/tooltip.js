// Minecraft-style item tooltips for anything with data-item="ns:id".
// Mouse: follows the cursor. Keyboard: shows on focus. Touch: first tap shows it, second tap follows the link.
import { mcTextToHtml, RARITY_COLORS } from '../shared/mctext.js';

let items = {};
let tip = null;
let current = null;
let lastPointer = 'mouse';

export function initTooltips() {
  const data = document.getElementById('page-items');
  if (!data) return;
  items = JSON.parse(data.textContent);
  tip = document.createElement('div');
  tip.className = 'mc-tooltip';
  tip.id = 'mc-tooltip';
  tip.setAttribute('role', 'tooltip');
  tip.hidden = true;
  document.body.append(tip);

  document.addEventListener('pointerdown', event => { lastPointer = event.pointerType; }, true);

  document.addEventListener('pointerover', event => {
    if (event.pointerType !== 'mouse') return;
    const target = event.target.closest('[data-item]');
    if (target) show(target, event.clientX, event.clientY);
  });
  document.addEventListener('pointerout', event => {
    if (event.pointerType !== 'mouse') return;
    const target = event.target.closest('[data-item]');
    if (target && !target.contains(event.relatedTarget)) hide();
  });
  document.addEventListener('pointermove', event => {
    if (current && event.pointerType === 'mouse') place(event.clientX, event.clientY);
  });

  document.addEventListener('focusin', event => {
    const target = event.target.closest?.('[data-item]');
    if (target && lastPointer === 'mouse') showBeside(target);
  });
  document.addEventListener('focusout', event => {
    if (event.target.closest?.('[data-item]') === current && lastPointer === 'mouse') hide();
  });

  document.addEventListener('click', event => {
    if (lastPointer === 'mouse') return;
    const target = event.target.closest('[data-item]');
    if (!target) return hide();
    if (current !== target) {
      event.preventDefault();
      showBeside(target);
    }
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') hide(); });
  window.addEventListener('scroll', () => { if (lastPointer !== 'mouse') hide(); }, { passive: true });

  // Cycling recipe slots change item under the cursor; refresh the tooltip when that happens.
  document.addEventListener('slotcycle', event => {
    if (current === event.target) show(current);
  });
}

function show(target, x, y) {
  const info = items[target.dataset.item];
  if (!info) return hide();
  current = target;
  const touch = lastPointer !== 'mouse';
  const name = `<div class="tt-name" style="color:${RARITY_COLORS[info.r] ?? RARITY_COLORS.common}">${mcTextToHtml(info.n)}</div>`;
  const lines = info.t.map(line => `<div class="tt-line">${mcTextToHtml(line) || '&nbsp;'}</div>`).join('');
  const tag = target.dataset.tag ? `<div class="tt-tag">Any item in #${target.dataset.tag}</div>` : '';
  const mod = info.m ? `<div class="tt-mod">${mcTextToHtml(info.m)}</div>` : '';
  const hint = touch && target.closest('a[href]') ? '<div class="tt-hint">Tap again to open its page</div>' : '';
  tip.innerHTML = name + lines + tag + mod + hint;
  tip.hidden = false;
  target.setAttribute('aria-describedby', 'mc-tooltip');
  if (x !== undefined) place(x, y);
}

function showBeside(target) {
  show(target);
  if (current !== target) return;
  const rect = target.getBoundingClientRect();
  place(rect.left, rect.bottom + 4, true);
}

// Like in game, the tooltip sits up and to the right of the cursor, flipping to stay on screen.
function place(x, y, below = false) {
  const { width, height } = tip.getBoundingClientRect();
  let left = below ? x : x + 14;
  let top = below ? y : y - height - 6;
  if (left + width > innerWidth - 8) left = below ? innerWidth - width - 8 : x - width - 14;
  if (top < 8) top = below ? 8 : y + 18;
  if (top + height > innerHeight - 8) top = Math.max(8, innerHeight - height - 8);
  tip.style.left = `${Math.max(8, left)}px`;
  tip.style.top = `${top}px`;
}

function hide() {
  if (!tip) return;
  tip.hidden = true;
  current?.removeAttribute('aria-describedby');
  current = null;
}
