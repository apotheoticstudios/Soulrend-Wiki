---
{
  "title": "Known Bugs",
  "summary": "Bugs observed in Soulrend, with workarounds where known."
}
---
<!-- sources: observed in the Soulrend-Development instance; each entry notes where it was seen. -->

This page lists bugs observed in Soulrend. Each entry says what happens, where it was seen, and any known workaround.

## Open

### Vampirize skill book is blacklisted but required by a quest
- **Seen:** 2026-10-24, `config/item_obliterator.json5` (`blacklisted_nbt` lists `wom:vampirize`), the End Game tier of the Epic Fight quest chapter (`epicfight.snbt`, quest `31CD1EBF3B8994B3`, not optional) and the recipe in `kubejs/server_scripts/recipes/skillbook_recipes.js`.
- **What happens:** Item Obliterator removes items whose NBT matches `wom:vampirize`, which should include the Vampirize skill book. The pack still has a recipe for it and a quest that asks for it. Not yet confirmed in game.
- **Workaround:** none known.

<!-- Entry template:
### Short description
- **Seen:** 2026-10-24, where (mod, item, boss, file)
- **What happens:** …
- **Workaround:** … (or "none known")
-->

## Fixed

*None yet.*
