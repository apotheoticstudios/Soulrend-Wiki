---
{
  "title": "Waystones & Warp Items (Quest)",
  "navTitle": "Waystones & Warp Items",
  "summary": "Three Prologue quests for a Waystone, a Warp Stone and a Warp Scroll, Soulrend's fast-travel items.",
  "aliases": ["Waystone (Quest)", "Warp Stone (Quest)", "Warp Scroll (Quest)"],
  "infobox": {
    "item": "waystones:waystone",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/prologue|Prologue]]"],
      ["Requires", "[[progression/prologue/welcome-to-soulrend|Welcome to Soulrend]]"],
      ["Tasks", "Have the item (each quest)"],
      ["Rewards", "5 XP levels, 2 Warp Dust, 2 Amethyst Shards in total"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/the_realms.snbt "Waystone" (task waystones:waystone; rewards 2 waystones:warp_dust, 2 XP levels), "Warp Stone" (task waystones:warp_stone; rewards 1 XP level, 2 minecraft:amethyst_shard), "Warp Scroll" (task waystones:warp_scroll; reward 1 XP level); all depend on Welcome to Soulrend
  kubejs/server_scripts/recipes/misc_utility.js (Soulrend's Waystone and Warp Stone recipes), kubejs/server_scripts/magic/dacxoptics_recipes.js (kubejs:warp_scroll; script-added recipes are missing from game-data/recipes.json)
-->
The **Waystone**, **Warp Stone** and **Warp Scroll** quests are three separate Prologue quests, one for each Waystones travel item. Each completes when the item is in the inventory. Together they explain how to teleport between discovered waystones.

## Requirements

- [[progression/prologue/welcome-to-soulrend|Welcome to Soulrend]] (for all three)

## Objectives

| Quest | Subtitle | Task | Rewards |
| --- | --- | --- | --- |
| Waystone | Permanent Transport Solution | Have a [[item:waystones:waystone]] | 2 [[item:waystones:warp_dust]], 2 XP levels |
| Warp Stone | Pocket Teleportation | Have a [[item:waystones:warp_stone]] | 2 [[item:minecraft:amethyst_shard]], 1 XP level |
| Warp Scroll | Single-Use Transport | Have a [[item:waystones:warp_scroll]] | 1 XP level |

> [!LORE] Waystone, Warp Stone and Warp Scroll (Prologue)
> Place and activate a Waystone to use as a teleportation conduit from other Waystones, Warp Scrolls and Warp Stones.
>
> A Warp Stone allows you to teleport to any discovered waystone with a cooldown of 5 minutes.
>
> A Warp Scroll allows teleportation to any waystone before being destroyed.

## Walkthrough

1. Craft the items:

   ```recipe
   { "station": "crafting_table", "grid": ["SWS", "SOS", "SOS"], "key": { "S": "minecraft:stone_bricks", "W": "waystones:warp_stone", "O": "minecraft:obsidian" }, "output": "waystones:waystone" }
   ```

   ```recipe
   { "station": "crafting_table", "ingredients": ["minecraft:ender_pearl", "minecraft:amethyst_shard", "minecraft:emerald"], "output": "waystones:warp_stone" }
   ```

   {{recipes waystones:warp_scroll}}

   Soulrend adds a second Warp Scroll recipe:

   ```recipe
   { "station": "crafting_table", "grid": ["MPM"], "key": { "M": "iceandfire:manuscript", "P": "minecraft:ender_pearl" }, "output": "waystones:warp_scroll" }
   ```

2. Place a Waystone at your base and activate it, so the Warp Stone and Warp Scrolls have somewhere to go.

> [!TIP]
> All eight Cataclysm dimension quests in Act III reward a Warp Scroll, which helps get home after a boss fight.

See [[features/travel-and-storage/waystones-and-warp-items|Waystones & Warp Items (Feature)]] for how the network works.
