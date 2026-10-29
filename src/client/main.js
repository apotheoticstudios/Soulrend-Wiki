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
if (document.querySelector('.model-stage[data-model]')) {
  import('./model-viewer.js').then(m => m.initModels());
}
if (document.querySelector('.forge-stage')) {
  import('./dragonforge.js').then(m => m.initForges());
}
if (document.querySelector('.attack-stage')) {
  import('./attack-viewer.js').then(m => m.initAttacks());
}
if (document.querySelector('.skilltree-stage')) {
  import('./skilltree.js').then(m => m.initSkillTrees());
}
