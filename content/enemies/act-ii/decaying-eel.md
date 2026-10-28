---
{
  "title": "Decaying Eel",
  "summary": "Aquamirae's giant eel that lurks in the Ice Maze's shelters; Soulrend gives it a boss bar, and it drops a large haul of Ice Maze materials.",
  "aliases": ["Eel", "Aquamirae Eel"],
  "items": ["aquamirae:eel_spawn_egg"],
  "infobox": {
    "item": "aquamirae:eel_spawn_egg",
    "model": "aquamirae:eel",
    "rows": [
      ["ID", "`aquamirae:eel`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "Never levels"],
      ["Health", "180 HP"],
      ["Location", "Shelters in the Ice Maze"],
      { "heading": "Drops" },
      ["Guaranteed", "4–12 [[item:aquamirae:ship_graveyard_echo]]"],
      ["Common", "Fins, Sharp Bones, Spinefish, Treasure Pouches, Scrolls of the Dead Sea"]
    ]
  }
}
---
<!-- sources:
  mods/aquamirae-forge-1.20.1-6.4.0.jar data/aquamirae/worldgen/structure/shelter.json (#aquamirae:ice_maze); structure NBT lore/shelter/main (eel, tortured_soul, pillager, vindicator, evoker, golden_moth); no biome modifier spawns the eel
  mods/aquamirae-forge-1.20.1-6.4.0.jar Eel.createAttributes (180 health, 8 attack, 20 armor, 100 knockback resistance, 2 attack knockback, 0 movement speed, 32 follow range)
  config/autoleveling-common.toml [Mobs] (aquamirae:eel never levels)
  kubejs/server_scripts/progression/aquamirae.js (CONFIG.DEEP_SEA.bosses.eel: blue "Decaying Eel" boss bar for players within 256 blocks, no transformation)
  config/soulrend_core/boss_damage.toml (not listed)
  game-data/loot-tables.json aquamirae:entities/eel (4-6 rolls: Fin 8-16, Sharp Bones 12-24, Spinefish 8-16, Scroll of the Dead Sea 2-6, Treasure Pouch 2-6 at double weight; plus 4-12 Echo of the Ship Graveyard)
-->
The **Decaying Eel** is a huge eel from Aquamirae (its in-game name is plain "Eel") that waits in the Ice Maze's shelters. It never moves from its spot, but it has heavy armor and can't be knocked back. Soulrend's KubeJS script shows a blue "Decaying Eel" boss bar while one is near. No quest asks for it, but one kill drops dozens of the Ice Maze's crafting materials.

## Spawning

Eels don't spawn naturally. Each **shelter**, a structure in the Ice Maze (Frozen Ocean and Deep Frozen Ocean biomes), has one placed inside when it generates, along with Tortured Souls and illagers.

The boss bar appears for every player within 256 blocks of an Eel.

## Stats

The Eel is on Auto Leveling's never-level list, so it keeps its base stats at every Soulrend level. It isn't on Soulrend's boss damage-cap list.

| Stat | Value |
| --- | --- |
| Health | 180 HP |
| Attack damage | 8 |
| Armor | 20 |
| Knockback resistance | 100% |
| Movement speed | 0 (stationary) |
| Follow range | 32 blocks |

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:aquamirae:ship_graveyard_echo]] | 4–12 | Always |
| [[item:aquamirae:fin]] | 8–16 | Per roll; 4–6 rolls in total |
| [[item:aquamirae:sharp_bones]] | 12–24 | Per roll |
| [[item:aquamirae:spinefish]] | 8–16 | Per roll |
| [[item:aquamirae:dead_sea_scroll]] | 2–6 | Per roll |
| [[item:aquamirae:treasure_pouch]] | 2–6 | Per roll, twice as likely as each of the others |

Each of the 4–6 rolls picks one of the last five rows.

{{uses aquamirae:ship_graveyard_echo limit=8}}
