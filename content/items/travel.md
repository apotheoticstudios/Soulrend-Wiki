---
{
  "title": "Travel Items",
  "category": "Items",
  "order": 13,
  "summary": "Waystones, Sharestones, warp items and the two search compasses: how travel works in Soulrend.",
  "items": [
    "waystones:black_sharestone",
    "waystones:blackstone_waystone",
    "waystones:blue_sharestone",
    "waystones:brown_sharestone",
    "waystones:cyan_sharestone",
    "waystones:deepslate_waystone",
    "waystones:end_stone_waystone",
    "waystones:gray_sharestone",
    "waystones:green_sharestone",
    "waystones:light_blue_sharestone",
    "waystones:light_gray_sharestone",
    "waystones:lime_sharestone",
    "waystones:magenta_sharestone",
    "waystones:mossy_waystone",
    "waystones:orange_sharestone",
    "waystones:pink_sharestone",
    "waystones:portstone",
    "waystones:purple_sharestone",
    "waystones:red_sharestone",
    "waystones:sandy_waystone",
    "waystones:sharestone",
    "waystones:waystone",
    "waystones:white_sharestone",
    "waystones:yellow_sharestone",
    "waystones:attuned_shard",
    "waystones:bound_scroll",
    "waystones:crumbling_attuned_shard",
    "waystones:return_scroll",
    "waystones:warp_dust",
    "waystones:warp_plate",
    "waystones:warp_scroll",
    "waystones:warp_stone",
    "explorerscompass:explorerscompass",
    "naturescompass:naturescompass"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (tooltips, obtaining); Usage researched 2026-10-27
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (tooltips), game-data/recipes.json (minecraft:kjs/waystones_waystone and _sandy_waystone from kubejs/server_scripts/recipes/misc_utility.js; waystones:warp_plate recipes)
  mods/waystones-forge-1.20.1-14.1.21.jar lang (scroll binding, warp plate shard messages)
  config/waystones-common.toml (blocksPerXpLevel 1000, minimum/maximum base XP cost 1, dimensionalWarpXpCost 1, warpStoneCooldown 300, warpStoneUseTime 32, inventoryButton "", worldGenStyle BIOME, frequency 25, overworld/nether/end, spawnInVillages)
  config/explorerscompass-common.toml (maxRadius 10000, allowTeleport, displayCoordinates), config/naturescompass-common.toml
  mods/waystones-forge-1.20.1-14.1.21.jar PlayerWaystoneManager.getExperienceLevelCost (the dimensional cost replaces the distance cost)
  kubejs/server_scripts/recipes/misc_utility.js (recipes for all five stone waystones and the mossy one)
  docs/instance-guide.md (leaving the Past with a waystone item, confirmed by the pack author)
-->

**Travel Items** are Soulrend's ways to get around: Waystones and their relatives for teleporting, and the Explorer's and Nature's Compasses for finding structures and biomes.

## Usage

### Waystones

A **Waystone** is a teleport point. Right-clicking one activates it; from then on any activated waystone can teleport its user to any other. Waystones also generate in the world (in the Overworld, the Nether and the End, and in villages), in plain, mossy, sandy, deepslate, blackstone and end stone styles. All six have Soulrend recipes: the plain, sandy, deepslate, blackstone and end stone ones are built around a Warp Stone, and the mossy one is a plain Waystone with Vines. [[features/travel-and-storage/waystones|Waystones Guide]] explains how to find, craft and use them.

- **Cost:** every teleport costs exactly 1 XP level. Soulrend's config sets both the minimum and maximum distance cost to 1 level, and the cost of changing dimension, which replaces the distance cost, is also 1.
- **Sharestones** connect only to Sharestones of the same color, and the **Portstone** can teleport to waystones but can't be teleported to.
- **The inventory warp button is turned off** in Soulrend, so teleporting needs a waystone or an item.

### Warp items

- **Warp Stone:** opens the waystone menu from anywhere. Using it takes about 1.5 s, and it then has a 5-minute cooldown.
- **Warp Scroll**, **Bound Scroll** and **Return Scroll:** scrolls that teleport their user; a bound scroll shows its waystone in the tooltip ("Bound to: …"). Several quests give Warp Scrolls, for example entering each Eight Sins dimension.
- **Warp Plate:** a block that teleports to another Warp Plate. A plate is linked by the **Attuned Shard** inside it; shards are made on a plate (flint with Warp Dust, or the Crumbling Attuned Shard from an Ender Pearl and amethyst).
- A waystone item is also the way out of the [[progression/act-v-duties/visit-the-past|Past]].

### Compasses

- **Explorer's Compass:** searches for a structure by name and points to it, up to 10,000 blocks away. It shows the result's coordinates. The [[progression/act-i-awakening/explorers-compass|Explorer's Compass]] quest asks for one, and many later quests start with "Find Structure".
- **Nature's Compass:** the same for biomes.

## Waystones and Sharestones

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:waystones:black_sharestone]] | Waystones | Teleport to any other Black Sharestone | [[craft:waystones:black_sharestone]] |
| [[item:waystones:blackstone_waystone]] | Waystones |  |  |
| [[item:waystones:blue_sharestone]] | Waystones | Teleport to any other Blue Sharestone | [[craft:waystones:blue_sharestone]] |
| [[item:waystones:brown_sharestone]] | Waystones | Teleport to any other Brown Sharestone | [[craft:waystones:brown_sharestone]] |
| [[item:waystones:cyan_sharestone]] | Waystones | Teleport to any other Cyan Sharestone | [[craft:waystones:cyan_sharestone]] |
| [[item:waystones:deepslate_waystone]] | Waystones |  |  |
| [[item:waystones:end_stone_waystone]] | Waystones |  |  |
| [[item:waystones:gray_sharestone]] | Waystones | Teleport to any other Gray Sharestone | [[craft:waystones:gray_sharestone]] |
| [[item:waystones:green_sharestone]] | Waystones | Teleport to any other Green Sharestone | [[craft:waystones:green_sharestone]] |
| [[item:waystones:light_blue_sharestone]] | Waystones | Teleport to any other Light Blue Sharestone | [[craft:waystones:light_blue_sharestone]] |
| [[item:waystones:light_gray_sharestone]] | Waystones | Teleport to any other Light Gray Sharestone | [[craft:waystones:light_gray_sharestone]] |
| [[item:waystones:lime_sharestone]] | Waystones | Teleport to any other Lime Sharestone | [[craft:waystones:lime_sharestone]] |
| [[item:waystones:magenta_sharestone]] | Waystones | Teleport to any other Magenta Sharestone | [[craft:waystones:magenta_sharestone]] |
| [[item:waystones:mossy_waystone]] | Waystones |  | [[craft:waystones:mossy_waystone]] |
| [[item:waystones:orange_sharestone]] | Waystones | Teleport to any other Orange Sharestone | [[craft:waystones:orange_sharestone]] |
| [[item:waystones:pink_sharestone]] | Waystones | Teleport to any other Pink Sharestone | [[craft:waystones:pink_sharestone]] |
| [[item:waystones:portstone]] | Waystones | Can not be teleported to. | [[craft:waystones:portstone]] |
| [[item:waystones:purple_sharestone]] | Waystones | Teleport to any other Purple Sharestone | [[craft:waystones:purple_sharestone]] |
| [[item:waystones:red_sharestone]] | Waystones | Teleport to any other Red Sharestone | [[craft:waystones:red_sharestone]] |
| [[item:waystones:sandy_waystone]] | Waystones |  |  |
| [[item:waystones:sharestone]] | Waystones | Teleport to any other colorless Sharestone | [[craft:waystones:sharestone]] |
| [[item:waystones:waystone]] | Waystones |  |  |
| [[item:waystones:white_sharestone]] | Waystones | Teleport to any other White Sharestone | [[craft:waystones:white_sharestone]] |
| [[item:waystones:yellow_sharestone]] | Waystones | Teleport to any other Yellow Sharestone | [[craft:waystones:yellow_sharestone]] |

## Warp stones and scrolls

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:waystones:attuned_shard]] | Waystones | This shard has lost its attunement. |  |
| [[item:waystones:bound_scroll]] | Waystones | Bound to: None | [[craft:waystones:bound_scroll]] |
| [[item:waystones:crumbling_attuned_shard]] | Waystones | This shard has lost its attunement. |  |
| [[item:waystones:return_scroll]] | Waystones | Bound to: None | [[craft:waystones:return_scroll]] |
| [[item:waystones:warp_dust]] | Waystones |  | [[craft:waystones:warp_dust]] |
| [[item:waystones:warp_plate]] | Waystones |  | [[craft:waystones:warp_plate]] |
| [[item:waystones:warp_scroll]] | Waystones |  | [[craft:waystones:warp_scroll]] |
| [[item:waystones:warp_stone]] | Waystones |  | [[craft:waystones:warp_stone]] |

## Explorer's and Nature's compasses

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:explorerscompass:explorerscompass]] | Explorer's Compass |  | [[craft:explorerscompass:explorerscompass]] |
| [[item:naturescompass:naturescompass]] | Nature's Compass |  | [[craft:naturescompass:naturescompass]] |
