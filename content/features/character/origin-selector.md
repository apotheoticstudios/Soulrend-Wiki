---
{
  "title": "Origin Selector",
  "summary": "Soulrend's first-join picker: choose a race, then a class from tabbed categories, or let Random decide.",
  "aliases": ["Origin Picker", "Choose Your Race", "Choose Your Class"],
  "icon": "minecraft:armor_stand"
}
---
<!-- sources:
  mods/soulrend_core-2.7-1.20.1.jar SoulrendClientGuiEvents.replaceDefaultOriginSelectionScreen (replaces Origins' ChooseOriginScreen when [origins] enableSelectionScreen is true)
  mods/soulrend_core-2.7-1.20.1.jar SoulrendOriginSelectionScreen (paged grid, category tabs, Selection Details with powers and impact, Gear buttons from SoulrendClassGear, Confirm Race / Confirm Class / Confirm Selection), OriginsCompat (Random choice when the layer allows it)
  mods/soulrend_core-2.7-1.20.1.jar assets/soulrend_core/lang/en_us.json (gui.soulrend_core.origin_selector.*)
  config/soulrend_core/common.toml [origins] (enableSelectionScreen true; classCategories Melee, Ranged, Mage, Fusion; others under Other)
  config/paxi/datapacks/soulrend_origins_classes/data/origins/origin_layers/rpg_class.json (allow_random, exclude_random classes:wildheart); Origins jar data/origins/origin_layers/origin.json (allow_random, exclude_random origins:human)
  config/feelixs_soulrend_optimizations/features.properties origins.back_button (Back button on every choice after the first)
-->
The **Origin Selector** is the screen that opens on a player's first join. Soulrend Core replaces the Origins mod's own picker with it. It walks through the two choices every character makes, a race and then a class (see [[origins|Origins]]), and shows each option's powers and starting gear before it is confirmed.

## How it works

1. **Choose Your Race.** A paged grid shows every available race. Clicking one fills the **Selection Details** panel on the side: its powers with their descriptions and its Impact rating. **Confirm Race** locks it in.
2. **Choose Your Class.** The grid now shows classes, sorted into tabs: **All**, **Melee**, **Ranged**, **Mage**, **Fusion** and **Other** (Blade Dancer and Wildheart). Besides the powers, the details panel lists the class's **Gear**, the starting kit and spells it hands out, with a tooltip on each item. **Confirm Class** finishes the selection.
3. The game closes the screen and gives the class's starting kit.

The arrows under the grid change pages, and the counter shows how many choices the current tab holds.

## Details

- **Random.** Both steps have a Random entry ("Let fate choose from the available options."). Random never picks the [[origins/races/human|Human]] race or the [[origins/melee-classes/wildheart|Wildheart]] class.
- **Back.** Every step after the first has a **Back** button that returns to the race choice. It comes from Feelix's Soulrend Optimizations and works on servers that run that mod too (always in singleplayer).
- **Race limits.** A [[origins/races/faded|Faded]] only sees mage classes, and a [[origins/races/feral-beast|Feral Beast]] always gets Wildheart.
- **Impact** is the Origins mod's rating of how much an origin changes normal play: none, low, medium or high.
- **The tabs come from Soulrend Core's config.** A class that no category names goes under Other.
- **Terrain generates meanwhile.** In singleplayer, the world generates the area around the player while the selector is open (see [[features/settings-and-performance/pre-generation|Pre-generation]]).

## Tips

- The powers listed in the selector are the Origins mod's text. Where it disagrees with what a power does, the wiki's [[origins|origin pages]] follow the power (see [[bugs#Origin descriptions don't match their powers|Known Bugs]]).
- A chosen origin can be reread later in the Origins menu of the [[features/character/inventory-tabs|Levelling screen]].
- Server operators can change a player's origin with [[features/commands/origin-command|/origin]].

## Related

- [[origins|Origins]]
- [[features/character/inventory-tabs|Inventory Tabs]]
