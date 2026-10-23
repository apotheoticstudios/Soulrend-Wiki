// Recipe slots that accept several items (tags like #minecraft:planks) show each option in turn, like JEI.
// All slots share one clock so matching slots stay in sync. Hovering a slot pauses it.
export function initCycling() {
  const slots = [...document.querySelectorAll('[data-cycle]')];
  if (!slots.length) return;
  let tick = 0;
  setInterval(() => {
    if (document.hidden) return;
    tick++;
    for (const slot of slots) {
      if (slot.matches(':hover, :focus-within')) continue;
      const options = slot.querySelectorAll(':scope > .cycle-option');
      const shown = tick % options.length;
      options.forEach((option, i) => { option.hidden = i !== shown; });
      slot.dataset.item = options[shown].dataset.option;
      if (slot.tagName === 'A') {
        const href = options[shown].dataset.href;
        if (href) slot.href = href;
        else slot.removeAttribute('href');
      }
      slot.dispatchEvent(new CustomEvent('slotcycle', { bubbles: true }));
    }
  }, 1200);
}
