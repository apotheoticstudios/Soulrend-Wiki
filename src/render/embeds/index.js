// Every embed type usable as {{type ...}} or a ```type fenced JSON block.
// Each module exports { render(props, h), positional?, variadic? }; see src/render/context.js for `h`.
import image from './image.js';
import items from './items.js';
import model from './model.js';
import moveset from './moveset.js';
import recipe from './recipe.js';
import { recipes, uses } from './recipes.js';

export const embedTypes = { image, items, model, moveset, recipe, recipes, uses };
