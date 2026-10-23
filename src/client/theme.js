// Style and light/dark picker. The choice is applied before first paint by the inline script in
// <head> (see src/render/layout.js); this module handles the picker and saves changes.
const STORAGE_KEYS = { style: 'wiki:style', mode: 'wiki:mode' };

export function initTheme() {
  const html = document.documentElement;
  const toggle = document.querySelector('.prefs-toggle');
  const panel = document.getElementById('prefs-panel');
  if (!toggle || !panel) return;

  const sync = () => {
    for (const input of panel.querySelectorAll('input')) input.checked = input.value === html.dataset[input.name];
  };
  const setOpen = open => {
    panel.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) sync();
  };

  panel.addEventListener('change', event => {
    const { name, value } = event.target;
    html.dataset[name] = value;
    try { localStorage.setItem(STORAGE_KEYS[name], value); } catch { /* private mode: choice lasts this page only */ }
  });
  toggle.addEventListener('click', () => setOpen(panel.hidden));
  document.addEventListener('click', event => {
    if (!panel.hidden && !event.target.closest('.prefs')) setOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !panel.hidden) {
      setOpen(false);
      toggle.focus();
    }
  });
  // Keep other open tabs in step.
  window.addEventListener('storage', event => {
    for (const [name, key] of Object.entries(STORAGE_KEYS)) {
      if (event.key === key && event.newValue) html.dataset[name] = event.newValue;
    }
    sync();
  });
}
