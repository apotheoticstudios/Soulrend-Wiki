---
{
  "title": "Valarian Soldier",
  "summary": "Valarian Conquest's faction soldiers and archers, which guard castles, outposts and bandit camps; the Factions chapter's kill target.",
  "aliases": ["Soldier", "Valarian Archer", "Faction Soldier"],
  "items": ["valarian_conquest:soldier_spawn_egg", "valarian_conquest:archer_spawn_egg"],
  "infobox": {
    "item": "valarian_conquest:soldier_spawn_egg",
    "rows": [
      ["ID", "`valarian_conquest:soldier`, `valarian_conquest:archer`"],
      ["Act", "[[progression/act-i-awakening|Act I]]"],
      ["Level", "Soldier: the player's level; Archer: never levels"],
      ["Health", "74 HP (Soldier, level 10)"],
      ["Location", "Faction castles and outposts, neutral camps, bandit camps"],
      ["Drops", "No loot table"]
    ]
  }
}
---
<!-- sources:
  mods/valarian_conquest-4.2.2-forge-1.20.1.jar worldgen/structure/*.json (castles in plains, snowy plains, sunflower plains; outposts, neutral tent camps and bandit camps/ruins in #minecraft:structurebiomes); structure NBT (soldier and archer in every castle, outpost, neutral outpost and bandit structure; soldier only in neutral tent camps and bandit camps)
  mods/valarian_conquest-4.2.2-forge-1.20.1.jar SoldierEntity.createAttributes (20 health, 0 attack, 0.25 speed, 32 follow), ArcherEntity.createAttributes (20 health, 0 attack, 0.25 speed, 40 follow); no biome modifier; no loot tables in the jar or the export
  config/paxi/datapacks/soulrend_ef_mobpatches/data/valarian_conquest/epicfight_mobpatch/{soldier,archer}.json (Epic Fight impact 0.5, max strikes 1)
  config/autoleveling-common.toml [Mobs] (valarian_conquest:archer never levels)
  config/ftbquests/quests/chapters/lfactions.snbt (8 kill tasks for valarian_conquest:soldier: 10-80)
  config/paxi/datapacks/soulrend_mob_leveling (no file: soldier level = player level)
  calc: Soldier health 20 × 3.7 = 74 (L10), 254 (L40), 614 (L100); attack 0 at every level
-->
**Valarian Soldiers** are the troops of Valarian Conquest's eight factions. They garrison their faction's castles and outposts, and players who don't hold that faction's citizenship are their enemies. The [[progression/side-chapters/factions|Factions]] chapter, opened in [[progression/act-i-awakening|Act I]], asks for 10 to 80 soldier kills per faction, and each faction's citizenship is the reward.

## Spawning

Soldiers don't spawn naturally. They are part of Valarian Conquest's structures when those generate:

| Structure | Where it generates | Units inside |
| --- | --- | --- |
| Faction castles (Valarian, Barathian, Burgundian, Hospitaller, Orleanian, Templar, Visgothian) | Plains, Snowy Plains, Sunflower Plains | Soldiers and Archers |
| Faction outposts (the same factions plus Bohemian) and neutral outposts | Valarian Conquest's structure biomes | Soldiers and Archers |
| Neutral tent camps | Valarian Conquest's structure biomes | Soldiers |
| Bandit camps and ruins | Valarian Conquest's structure biomes | Soldiers (and Archers in the ruins) |

Consuming a faction's citizenship makes that faction's units neutral or willing to follow the player (see [[progression/side-chapters/factions|Factions]]).

## Stats

| Stat | Soldier | Archer |
| --- | --- | --- |
| Level | The player's level | Never levels |
| Health | 20 HP base: 74 HP (level 10), 254 HP (level 40), 614 HP (level 100) | 20 HP |
| Attack damage | 0 (from its weapon only) | 0 (from its bow only) |
| Movement speed | 0.25 | 0.25 |
| Follow range | 32 blocks | 40 blocks |

Both have no attack of their own: all their damage comes from the faction weapon they carry. Soulrend gives both Epic Fight combat animations.

## Drops

Valarian Conquest gives Soldiers and Archers no loot table.

## Quests

Every faction quest in the [[progression/side-chapters/factions|Factions]] chapter has a soldier kill task; kills of any faction's soldiers count. Archers don't count.

| Faction quest | Soldiers |
| --- | --- |
| Valarian | 10 |
| Burgundian | 20 |
| Orleanian | 30 |
| Hospitaller | 40 |
| Templar | 50 |
| Bohemian | 60 |
| Visgothian | 70 |
| Barathian | 80 |
