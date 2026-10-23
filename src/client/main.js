// Browser entry point. Pages are already fully rendered; these modules only add interactivity.
import { initTheme } from './theme.js';
import { initNav } from './nav.js';
import { initTooltips } from './tooltip.js';
import { initCycling } from './cycle.js';
import { initSearch } from './search.js';

initTheme();
initNav();
initTooltips();
initCycling();
initSearch();

// three.js is large, so it's only fetched on pages that actually have a model.
if (document.querySelector('.model-stage')) {
  import('./model-viewer.js').then(m => m.initModels());
}
