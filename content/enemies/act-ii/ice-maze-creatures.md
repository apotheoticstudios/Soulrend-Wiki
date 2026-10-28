---
{
  "title": "Ice Maze Creatures",
  "summary": "The Aquamirae mobs that replace normal spawns in the Ice Maze: Maws, Tortured Souls, Spinefish, Abyssal Scyphoids and Pillager patrols.",
  "aliases": ["Maw", "Tortured Soul", "Spinefish (mob)", "Abyssal Scyphoid", "Pillagers Patrol"],
  "items": [
    "aquamirae:maw_spawn_egg",
    "aquamirae:tortured_soul_spawn_egg",
    "aquamirae:spinefish_spawn_egg",
    "aquamirae:abyssal_scyphoid_spawn_egg",
    "aquamirae:pillagers_patrol_spawn_egg"
  ],
  "infobox": {
    "item": "aquamirae:maw_spawn_egg",
    "model": ["aquamirae:maw", "aquamirae:tortured_soul", "aquamirae:spinefish", "aquamirae:abyssal_scyphoid"],
    "rows": [
      ["ID", "`aquamirae:maw`, `tortured_soul`, `spinefish`, `abyssal_scyphoid`, `pillagers_patrol`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "Maw, Tortured Soul: the player's level; others never level"],
      ["Location", "The Ice Maze (Frozen and Deep Frozen Ocean)"],
      { "heading": "Drops" },
      ["Common", "[[item:aquamirae:fin]], [[item:aquamirae:spinefish]], [[item:aquamirae:jellyfish_jelly]]"]
    ]
  }
}
---
<!-- sources:
  mods/aquamirae-forge-1.20.1-6.4.0.jar data/aquamirae/forge/biome_modifier (#aquamirae:ice_maze add_spawns: maw 200, 1-4; spinefish 40, 3-9; abyssal_scyphoid 30, 6-16; anglerfish 20, 1-2; tortured_soul 10, 1-4; pillagers_patrol 5, 1; remove_spawns #aquamirae:removeable = zombie, zombie_villager, drowned, skeleton, creeper, spider, enderman, witch, slime); tags/worldgen/biome/ice_maze.json (frozen_ocean, deep_frozen_ocean)
  mods/aquamirae-forge-1.20.1-6.4.0.jar Maw.createAttributes (20 health, 4 attack, 0.2 speed, 24 follow), TorturedSoul.createAttributes (30 health, 7 attack, 4 armor, 0.2 speed, 24 follow), PillagersPatrol (finalizeSpawn creates two minecraft:pillager and one minecraft:vindicator)
  mods/aquamirae-forge-1.20.1-6.4.0.jar structure NBT: lore/shelter/main (tortured_soul, eel, pillager, vindicator, evoker), lore/outpost and lore/ship (pillager, vindicator)
  config/autoleveling-common.toml [Mobs] (aquamirae:spinefish, aquamirae:abyssal_scyphoid never level)
  game-data/loot-tables.json aquamirae:entities/{maw,tortured_soul,spinefish,abyssal_scyphoid}
  config/paxi/datapacks/soulrend_mob_leveling (no files: Maw and Tortured Soul level = player level)
  calc: Maw L10: 20 × 3.7 = 74, 4 × 1.9 = 7.6; L40: 254, 19.6; L100: 614, 43.6. Tortured Soul L10: 111, 13.3, armor 4.4; L40: 381, 34.3, 5.7; L100: 921, 76.3, 8.4
-->
The **Ice Maze** is Aquamirae's frozen ocean region (Frozen Ocean and Deep Frozen Ocean), visited in the [[progression/side-chapters/aquamirae|Aquamirae]] chapter linked from [[progression/act-ii-first-steps|Act II]]. Aquamirae replaces the usual night spawns there (Zombies, Drowned, Skeletons, Spiders, Endermen, Witches, Slimes) with its own creatures. The [[enemies/act-ii/anglerfish|Anglerfish]] and the [[enemies/act-ii/decaying-eel|Decaying Eel]] have their own pages.

## Spawning

| Mob | Weight | Group | Notes |
| --- | --- | --- | --- |
| Maw | 200 | 1–4 | By far the most common |
| Spinefish | 40 | 3–9 | Small schooling fish |
| Abyssal Scyphoid | 30 | 6–16 | Jellyfish |
| [[enemies/act-ii/anglerfish\|Anglerfish]] | 20 | 1–2 | |
| Tortured Soul | 10 | 1–4 | Also placed in shelters |
| Pillagers Patrol | 5 | 1 | Spawns two Pillagers and a Vindicator |

The Ice Maze's structures add more: shelters hold Tortured Souls, the Eel and illagers (Pillagers, Vindicators, an Evoker), and the outpost and frozen ship hold Pillagers and Vindicators.

## Stats

Maws and Tortured Souls have no level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Spinefish and Abyssal Scyphoids are on Auto Leveling's never-level list. The table gives health / attack damage / armor.

| Mob | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Maw | 20 HP / 4 / 0 | 74 HP / 7.6 / 0 | 254 HP / 19.6 / 0 | 614 HP / 43.6 / 0 |
| Tortured Soul | 30 HP / 7 / 4 | 111 HP / 13.3 / 4.4 | 381 HP / 34.3 / 5.7 | 921 HP / 76.3 / 8.4 |

## Drops

| Mob | Drops |
| --- | --- |
| Maw | 0–2 rolls (plus 1–2 bonus rolls): [[item:aquamirae:fin]] (100), [[item:aquamirae:sharp_bones]] (5), [[item:minecraft:slime_ball]] (1) or [[item:aquamirae:ship_graveyard_echo]] (1) |
| Tortured Soul | 0–3 [[item:minecraft:rotten_flesh]] (19 in 20) or 1 [[item:minecraft:bread]]; then 0–2 [[item:minecraft:bone]] (9 in 10) or an Echo of the Ship Graveyard, rolled twice |
| Spinefish | 1 [[item:aquamirae:spinefish]] |
| Abyssal Scyphoid | [[item:aquamirae:jellyfish_jelly]] (25%) or an Echo of the Ship Graveyard (5%); another Jellyfish Jelly at 15% per Looting level on a player kill |

{{uses aquamirae:fin limit=8}}
