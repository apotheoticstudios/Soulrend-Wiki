// Mobile navigation drawer. On desktop the sidebar is always visible and this does nothing.
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

  // Scroll the sidebar (not the page) so the current page's link is in view.
  const current = sidebar.querySelector('[aria-current="page"]');
  if (current && !isDrawer()) sidebar.scrollTop = current.offsetTop - sidebar.clientHeight / 3;
}
