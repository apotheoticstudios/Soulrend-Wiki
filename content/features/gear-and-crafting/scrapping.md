---
{
  "title": "Scrapping",
  "summary": "Scrapping recipes break Create machines and Copycats parts back into the materials they were made from.",
  "icon": "create:andesite_alloy"
}
---
<!-- sources:
  config/soulrend_core/recipes/scrapping.toml ([scrapping] recipes: "input = outputs" strings; header comment)
  game-data/recipes.json (87 recipes of type soulrend_core:scrapping)
  mods/soulrend_core-2.7-1.20.1.jar recipe/scrapping/ScrappingRecipe, ScrappingRecipes
-->

**Scrapping** is a crafting grid recipe from Soulrend Core that breaks an item back into some of the materials it was made from. Soulrend uses it for Create parts and Copycats blocks, so a misplaced machine or a surplus shaft is not a total loss.

## How it works

Place the item in a crafting grid on its own. The result is the first material of the recipe, and the remaining materials are handed over when the player takes the result. Some recipes ask for several copies of the item, such as six Shafts or three Gearboxes, and give one batch of materials back for all of them.

The recipes are shapeless, so the item can sit in any slot. The recipe list is set in `config/soulrend_core/recipes/scrapping.toml`, and changes apply on `/reload`.

## Details

The pack has 87 scrapping recipes. They cover Create's Andesite Alloy, Brass and Copper machines and Copycats' decorative copies. Typical results:

| Input | Returns |
| --- | --- |
| Andesite Alloy Block | 8 Andesite Alloy |
| 6 Shafts, Cogwheels, Large Cogwheels, Water Wheels or Turntables | 1 Andesite Alloy |
| 3 Gearboxes | 5 Andesite Alloy |
| Mechanical Press | 1 Andesite Alloy, 8 Iron Ingots |
| Mechanical Mixer | 3 Andesite Alloy, 5 Iron Ingots |
| Fluid Tank | 2 Copper Ingots |
| Item Vault | 2 Iron Ingots |
| Flywheel | 8 Brass Ingots |

Soulrend also removes Create's normal Andesite Alloy recipe (`create:andesite_alloy` in `config/soulrend_core/recipes/removals.toml`), so the pack's own recipes replace it.

## Tips

- Scrapping returns Andesite Alloy from parts you no longer need.
- Affix gear is not scrapped here. Use the Salvaging Table described on [[items/gear-progression/reforging-tables|Reforging Tables]].

## Related

- [[features/gear-and-crafting/equipment-upgrades|Equipment Upgrades]]
- [[features/gear-and-crafting/removed-items|Removed Items]]
