// Mobile navigation drawer, plus the Compact/Expanded sidebar setting (html[data-sidebar]).
export function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.querySelector('.sidebar-backdrop');
  if (!toggle || !sidebar || !backdrop) return;

  const isDrawer = () => getComputedStyle(toggle).display !== 'none';
  const isOpen = () => document.body.classList.contains('nav-open');
  const setOpen = open => {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    backdrop.hidden = !open;
    if (!open) sidebar.dispatchEvent(new Event('nav-close'));
    // Off-screen links shouldn't be reachable with Tab while the drawer is closed.
    sidebar.inert = isDrawer() && !open;
    if (open) sidebar.querySelector('[aria-current="page"], a')?.focus();
  };

  toggle.addEventListener('click', () => setOpen(!isOpen()));
  backdrop.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (!isDrawer() && isOpen()) setOpen(false);
    sidebar.inert = isDrawer() && !isOpen();
  });
  sidebar.inert = isDrawer();
  initSections(sidebar, () => !isDrawer() || isOpen());

  // Scroll the sidebar (not the page) so the current page's link is in view.
  const current = sidebar.querySelector('[aria-current="page"]');
  if (current && !isDrawer()) sidebar.scrollTop = current.offsetTop - sidebar.clientHeight / 3;
}

// Compact: only the current page's section stays open, and sections opened by hand fold back
// once the visitor stops using the sidebar. Expanded: sections open as site.json says.
function initSections(sidebar, isVisible) {
  const html = document.documentElement;
  const sections = [...sidebar.querySelectorAll('.nav-section')];
  const compact = () => html.dataset.sidebar !== 'expanded';
  const fold = () => {
    for (const s of sections) if (s.open && !('current' in s.dataset)) s.open = false;
  };
  const apply = () => {
    if (compact()) fold();
    else for (const s of sections) if ('expand' in s.dataset) s.open = true;
  };
  let timer;
  const later = () => {
    clearTimeout(timer);
    // Keyboard users still inside the sidebar keep their sections open.
    if (compact()) timer = setTimeout(() => { if (!sidebar.matches(':hover, :has(:focus-visible)')) fold(); }, 600);
  };
  sidebar.addEventListener('pointerenter', () => clearTimeout(timer));
  sidebar.addEventListener('pointerleave', event => { if (event.pointerType === 'mouse') later(); });
  sidebar.addEventListener('focusout', event => { if (!sidebar.contains(event.relatedTarget) && isVisible()) later(); });
  sidebar.addEventListener('nav-close', () => { if (compact()) fold(); });
  new MutationObserver(apply).observe(html, { attributes: true, attributeFilter: ['data-sidebar'] });
  apply();
}
