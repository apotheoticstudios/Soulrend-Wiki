---
{
  "title": "Stalker",
  "summary": "Deeper and Darker's blind sculk hunter that can burst from a broken Ancient Vase; Soulrend only lets it exist in the Otherside.",
  "aliases": ["Stalker (Deeper and Darker)"],
  "items": ["deeperdarker:stalker_spawn_egg"],
  "infobox": {
    "item": "deeperdarker:stalker_spawn_egg",
    "rows": [
      ["ID", "`deeperdarker:stalker`"],
      ["Act", "[[progression/act-iii-b-deeper-and-darker|Act III-b]]"],
      ["Level", "The player's level"],
      ["Health", "9,140 HP (level 150)"],
      ["Location", "Broken Ancient Vases in the Otherside"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:deeperdarker:soul_crystal]]"]
    ]
  }
}
---
<!-- sources:
  config/deeperdarker-common.toml (fakeVaseChance 0.2, stalkerSpawnChance 0.5)
  mods/deeperdarker-forge-1.20.1-1.3.3.jar DeeperDarkerEvents (breaking an Ancient Vase: if random < fakeVaseChance, then either four Sculk Leeches or a Stalker, split by stalkerSpawnChance)
  kubejs/server_scripts/progression/deeperdarker.js (cancels any Stalker spawn outside deeperdarker:otherside)
  mods/deeperdarker-forge-1.20.1-1.3.3.jar Stalker attributes (200 health, 22 attack, 4 armor, 1 knockback resistance, 0.3 speed); Stalker$VibrationUser (tracks by vibrations)
  game-data/loot-tables.json deeperdarker:entities/stalker (1 Soul Crystal, Looting +0-1)
  config/ftbquests/quests/chapters/the_deep_dark.snbt ("Kill a Stalker": "Rare chance of spawning after breaking an Ancient Vase."; 5 XP levels, an Echoing Sculkshelf)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L100: 200 × 30.7 = 6,140, 22 × 10.9 = 239.8, armor 4 × 2.089 = 8.4; L150: 9,140, 349.8, 10.6; L180: 10,940, 415.8, 11.9
-->
The **Stalker** is a tall sculk creature from Deeper and Darker that hunts by sound, like the Warden. It hides in the Otherside's Ancient Vases and hits harder than almost anything else in [[progression/act-iii-b-deeper-and-darker|Act III-b]]. Soulrend's KubeJS script cancels any Stalker spawn outside the Otherside. A Fabled Realms quest asks for one kill. Not to be confused with The Outer End's Stalker (see [[enemies/act-iv/end-highlands-mobs|End Highlands Mobs]]).

## Spawning

Breaking an [[item:deeperdarker:ancient_vase]] has a 20% chance to be a trap. A trap vase releases either a Stalker or four Sculk Leeches, with equal odds, so each vase has a 10% chance to free a Stalker. Stalkers that try to spawn in any other dimension are removed at once.

## Stats

The Stalker has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Act III (100) | Act III-b (150) | Act IV (180) |
| --- | --- | --- | --- | --- |
| Health | 200 HP | 6,140 HP | 9,140 HP | 10,940 HP |
| Attack damage | 22 | 239.8 | 349.8 | 415.8 |
| Armor | 4 | 8.4 | 10.6 | 11.9 |
| Knockback resistance | 100% | | | |
| Movement speed | 0.3 | | | |

> [!CAUTION]
> At level 150 a Stalker hits for about 350 damage before armor. Break Ancient Vases only when ready for that fight.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:deeperdarker:soul_crystal]] | 1 | Always; Looting adds 0–1 |

## Quests

- **Kill a Stalker** ([[progression/side-chapters/fabled-realms|Fabled Realms]]): rewards 5 XP levels and an Echoing Sculkshelf.
