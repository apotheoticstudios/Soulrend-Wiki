---
{
  "title": "Elden Beasts",
  "summary": "Ice and Fire dragons in the Past: Soulrend renames and armors every wild dragon there as an Elden Beast or one of three Elden Mounts, and their corpses can't be harvested.",
  "aliases": ["Elden Beast", "Elden Soldier's Mount", "Elden Prince's Mount", "Elden Watcher's Mount"],
  "infobox": {
    "item": "iceandfire:dragonarmor_diamond_head",
    "model": ["iceandfire:fire_dragon", "iceandfire:ice_dragon", "iceandfire:lightning_dragon"],
    "itemRows": false,
    "rows": [
      ["ID", "`iceandfire:fire_dragon`, `ice_dragon`, `lightning_dragon` (renamed)"],
      ["Act", "[[progression/act-v-duties|Act V]]"],
      ["Level", "At least 25; the player's level"],
      ["Location", "The Past"],
      ["Drops", "None (corpse can't be harvested)"]
    ]
  }
}
---
<!-- sources:
  kubejs/server_scripts/dimension/past.js (pastDragonSpawn for iceandfire:fire_dragon, ice_dragon, lightning_dragon in the Past, skipped when TamedDragon; DRAGON_VARIANTS: Elden Beast weight 50 AgeTicks 700,000-1,100,000 common armor; Elden Soldier's Mount 30, 1,300,000-1,700,000, typed armor; Elden Prince's Mount 15, 1,900,000-2,300,000, diamond; Elden Watcher's Mount 5, 2,500,000-3,000,000, dragonsteel; DRAGON_ARMOR: common iron, typed gold (fire) / silver (ice) / copper (lightning); DeathStage 1000)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityDragonBase.tickDeath (the corpse is removed once deathStage >= age in days / 5) and harvesting (only while deathStage is below that); updateAttributes (base = min + (max - min) / 125 × age in days; health 20-500, attack 1-18, armor 1-20 with config/iceandfire-common.toml "Dragon Health" 500, "Dragon Attack Damage" 17)
  config/paxi/datapacks/soulrend_worldgen/data/soulrend/worldgen/biome/dead_*.json (no dragon spawns or roost features); config/iceandfire/*_dragon*_biomes.json (Overworld biome tags only)
  config/paxi/datapacks/soulrend_mob_leveling/data/iceandfire/leveling_settings/entities/{fire,ice,lightning}_dragon.json (starting_level 25)
  calc: days = AgeTicks / 24,000; level 200: health × 60.7, attack × 20.9, armor × 3.189 (before dragon armor)
-->
**Elden Beasts** are what Soulrend calls Ice and Fire's dragons in the Past, the dimension of [[progression/act-v-duties|Act V]]. When a wild Fire, Ice or Lightning Dragon spawns there, Soulrend's KubeJS script renames it, sets its age and fits it with dragon armor. Tamed dragons that players bring are left alone. No quest asks for them, and killing one gives no dragon materials.

## Variants

| Variant | Chance | Age | Armor |
| --- | --- | --- | --- |
| Elden Beast | 50% | 29–46 days | Iron ([[item:iceandfire:dragonarmor_iron_head]]) |
| Elden Soldier's Mount | 30% | 54–71 days | Gold (fire), Silver (ice) or Copper (lightning) |
| Elden Prince's Mount | 15% | 79–96 days | Diamond ([[item:iceandfire:dragonarmor_diamond_head]]) |
| Elden Watcher's Mount | 5% | 104–125 days | Dragonsteel of its element |

The Elden Watcher's Mount's name is shown in red; the others in grey.

## Spawning

The script reskins any wild dragon that spawns in the Past. The Past's own biomes have no dragon spawns or dragon roosts, and their tags don't match Ice and Fire's dragon biome lists, so the wiki hasn't found how wild dragons reach the Past.
<!-- TODO: confirm in game how untamed dragons appear in the Past (summoning, structures, or a source not in the datapacks). -->

## Stats

A dragon's base stats grow with its age (Ice and Fire caps them at 125 days), and its level follows the nearest player with a floor of 25 (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor, before the armor items.

| Variant | Base by age | Level 200 |
| --- | --- | --- |
| Elden Beast | 132–196 HP / 5–7 / 5.4–8 | 8,012–11,897 HP / 104.5–146.3 / 17.3–25.4 |
| Elden Soldier's Mount | 228–292 HP / 8–11 / 9.2–11.8 | 13,840–17,724 HP / 167.2–229.9 / 29.4–37.5 |
| Elden Prince's Mount | 324–388 HP / 12–14 / 13–15.6 | 19,667–23,552 HP / 250.8–292.6 / 41.6–49.6 |
| Elden Watcher's Mount | 420–500 HP / 15–18 / 16.8–20 | 25,494–30,350 HP / 313.5–376.2 / 53.7–63.8 |

Their breath attacks deal their own damage, as described on the [[bosses/act-ii/fire-dragon|Fire Dragon]], [[bosses/act-ii/ice-dragon|Ice Dragon]] and [[bosses/act-ii/lightning-dragon|Lightning Dragon]] pages.

## Drops

The script marks every Elden dragon's corpse as already harvested, so it disappears as soon as the dragon dies and gives no scales, bones, blood or other dragon loot.
