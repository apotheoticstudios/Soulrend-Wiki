---
{
  "title": "Anglerfish",
  "summary": "Aquamirae's lure-bearing predator of the Ice Maze; one near a player becomes the Mother of the Maze at midnight, and a quest asks for ten.",
  "items": ["aquamirae:anglerfish_spawn_egg"],
  "infobox": {
    "item": "aquamirae:anglerfish_spawn_egg",
    "rows": [
      ["ID", "`aquamirae:anglerfish`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "Never levels"],
      ["Health", "40 HP"],
      ["Location", "Ice Maze waters (Frozen and Deep Frozen Ocean)"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:aquamirae:esca]]"],
      ["Common", "[[item:aquamirae:fin]], [[item:aquamirae:anglers_fang]]"]
    ]
  }
}
---
<!-- sources:
  mods/aquamirae-forge-1.20.1-6.4.0.jar data/aquamirae/forge/biome_modifier (#aquamirae:ice_maze: anglerfish weight 20, groups of 1-2); tags/worldgen/biome/ice_maze.json (frozen_ocean, deep_frozen_ocean)
  mods/aquamirae-forge-1.20.1-6.4.0.jar Anglerfish.createAttributes (40 health, 5 attack, 2 armor, 1 attack knockback, 0.7 speed, 48 follow range)
  config/autoleveling-common.toml [Mobs] (aquamirae:anglerfish never levels)
  kubejs/server_scripts/progression/aquamirae.js (CONFIG.DEEP_SEA.bosses.maze_mother: at day time 18000-18099, checked every second, for each Overworld player with no Maze Mother within 256 blocks, the first Anglerfish in water within 256 blocks is replaced by aquamirae:maze_mother, which glows for 30 s; thunder sound)
  game-data/loot-tables.json aquamirae:entities/anglerfish (1-2 rolls: Fin 70, Angler's Fang 25, Echo of the Ship Graveyard 5; one Esca)
  config/ftbquests/quests/chapters/aquamirae.snbt ("Terrors of the Ice Maze": kill the Maze Mother and 10 aquamirae:anglerfish; 5 Abyssal Amethyst, 5 XP levels)
-->
The **Anglerfish** is a deep-sea predator from Aquamirae that hunts in the waters of the Ice Maze, the frozen ocean region of the Aquamirae chapter. Soulrend ties it to the [[Mother of the Maze]]: at midnight, an Anglerfish near a player turns into the boss. The chapter's "Terrors of the Ice Maze" quest asks for ten Anglerfish kills.

## Spawning

Anglerfish spawn in the Ice Maze (Frozen Ocean and Deep Frozen Ocean biomes), alone or in pairs, with a spawn weight of 20.

## The midnight transformation

Soulrend's KubeJS script checks every second during the first 5 seconds after midnight (game time 18,000). For each player in the Overworld with no Mother of the Maze within 256 blocks, the first Anglerfish in water within 256 blocks is removed and a **Mother of the Maze** spawns in its place, glowing for 30 seconds, with a clap of thunder. A boss bar shows its health to players within 256 blocks.

> [!TIP]
> To summon the Mother of the Maze, be in the Ice Maze near Anglerfish at midnight. See [[Mother of the Maze#Location]].

## Stats

The Anglerfish is on Auto Leveling's never-level list, so it keeps its base stats at every Soulrend level.

| Stat | Value |
| --- | --- |
| Health | 40 HP |
| Attack damage | 5 |
| Armor | 2 |
| Movement speed | 0.7 (in water) |
| Follow range | 48 blocks |

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:aquamirae:esca]] | 1 | Always |
| [[item:aquamirae:fin]] (70), [[item:aquamirae:anglers_fang]] (25) or [[item:aquamirae:ship_graveyard_echo]] (5) | 1 per roll | 1–2 rolls, by weight |

## Quests

- **Terrors of the Ice Maze** ([[progression/side-chapters/aquamirae|Aquamirae]]): kill the Mother of the Maze and 10 Anglerfish. Rewards: 5 [[item:aquamirae:abyssal_amethyst]] and 5 XP levels.
