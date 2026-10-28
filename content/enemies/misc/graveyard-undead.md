---
{
  "title": "Graveyard Undead",
  "summary": "The Graveyard's Ghouls, Revenants and Nightmares, which roam Overworld biomes at night, gather into hordes and guard crypts with corrupted illagers.",
  "aliases": ["Ghoul (Graveyard)", "Revenant (Graveyard)", "Nightmare", "Reaper (Graveyard)", "Acolyte", "Corrupted Vindicator", "Corrupted Pillager", "Graveyard Horde"],
  "items": [
    "graveyard:ghoul_spawn_egg",
    "graveyard:revenant_spawn_egg",
    "graveyard:nightmare_spawn_egg",
    "graveyard:reaper_spawn_egg",
    "graveyard:acolyte_spawn_egg",
    "graveyard:corrupted_vindicator_spawn_egg",
    "graveyard:corrupted_pillager_spawn_egg"
  ],
  "infobox": {
    "item": "graveyard:ghoul_spawn_egg",
    "rows": [
      ["ID", "`graveyard:ghoul`, `revenant`, `nightmare`, `acolyte`, `corrupted_vindicator`, `corrupted_pillager`"],
      ["Level", "The player's level"],
      ["Location", "Forests, taigas, swamps and snowy biomes; Graveyard structures; night hordes"],
      { "heading": "Drops" },
      ["Common", "[[item:graveyard:corruption]], [[item:minecraft:rotten_flesh]], [[item:minecraft:bone]]"]
    ]
  }
}
---
<!-- sources:
  mods/The_Graveyard_3.1_(FORGE)_for_1.20.1.jar data/graveyard/forge/biome_modifier (ghoul 25, 2-5; revenant 25, 3-5; reaper 10, 2-3; nightmare 7, 1; skeleton_creeper 20, 1-4)
  mods/The_Graveyard_3.1_(FORGE)_for_1.20.1.jar data/graveyard/tags/worldgen/biome/{ghoul,revenant,reaper,nightmare}_spawns.json (reaper_spawns is empty)
  config/graveyard/the-graveyard-3.0-config.json5 mobConfigEntries (acolyte, wraith, corrupted vindicator and pillager disabled; canBurnInSunlight), hordeConfigEntries (horde_spawn enabled, 40 spawn attempts, 24000 ticks + up to 1200)
  config/ysns/disabled_entities.json5 (graveyard:skeleton_creeper)
  mods/The_Graveyard_3.1_(FORGE)_for_1.20.1.jar GraveyardHordeSpawner (night only; spawns Ghouls, Revenants, Acolytes, Corrupted Pillagers and Vindicators)
  structure NBT: crypt/corridor_pool (acolyte, corrupted_pillager, corrupted_vindicator), haunted_house start/downstairs pools (acolyte), large_graveyard (acolyte)
  mods/The_Graveyard_3.1_(FORGE)_for_1.20.1.jar TGEntities attribute handles; GhoulEntity.createGhoulAttributes (20 health, 4 attack, 3 armor, 0.5 knockback resistance, 0.175 speed, 30 follow),
    RevenantEntity (25, 3.5, 2, 0.155, 25), NightmareEntity (45, 10, 3, 0.19, 64), ReaperEntity (20, 4, 0, 0.7, 16),
    CorruptedIllager (24, 5, 2, 0.35, 12; Acolyte and Corrupted Vindicator), CorruptedPillager (24, 3, 0, 0.35, 12)
  game-data/loot-tables.json graveyard:entities/{ghoul,revenant,reaper,nightmare,acolyte,corrupted_vindicator,corrupted_pillager}
  config/paxi/datapacks/soulrend_mob_leveling (no Graveyard files except the lich: level = player level)
  config/autoleveling-common.toml [Attributes]
  calc: L10: health ×3.7, attack ×1.9, armor ×1.099; L40: ×12.7, ×4.9, ×1.429; L100: ×30.7, ×10.9, ×2.089
-->
The **Graveyard undead** are the hostile mobs of The Graveyard: Ghouls, Revenants and Nightmares that roam the Overworld, and the Acolytes and corrupted illagers that guard its crypts. They gather into night-time hordes that march on players. No quest asks for them. Their master, the Lich, is the [[bosses/act-iii-b/corrupted-champion|Corrupted Champion]] of Act III-b.

## Spawning

| Mob | Where it spawns naturally | Weight | Group |
| --- | --- | --- | --- |
| Ghoul | Forest, Taiga, Swamp, Dark Forest | 25 | 2–5 |
| Revenant | Snowy Plains, Ice Spikes, Snowy Taiga | 25 | 3–5 |
| Nightmare | Plains, snowy, desert, savanna, badlands, swamp and wasteland biomes | 7 | 1 |

Ghouls and Revenants burn in sunlight; Nightmares don't.

**Structures.** Acolytes, Corrupted Pillagers and Corrupted Vindicators don't spawn naturally in Soulrend (the config turns their spawns off), but they are placed inside The Graveyard's structures: all three in the Crypt's corridors and rooms, and Acolytes in the Haunted House and the Large Graveyard.

**Hordes.** At night The Graveyard can send a horde at a random player, with up to 40 spawn attempts. The next horde is due about 20 minutes (24,000 ticks, plus up to 1 minute) later. A horde mixes Ghouls, Revenants, Acolytes, Corrupted Pillagers and Corrupted Vindicators.

**Not in Soulrend.** Skeleton Creepers are disabled by You Shall Not Spawn. Reapers have a spawn weight but an empty biome list, and Wraiths are turned off in the config, so neither appears naturally.

## Stats

None of these mobs has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Ghoul | 20 HP / 4 / 3 | 74 HP / 7.6 / 3.3 | 254 HP / 19.6 / 4.3 | 614 HP / 43.6 / 6.3 |
| Revenant | 25 HP / 3.5 / 2 | 92.5 HP / 6.7 / 2.2 | 317.5 HP / 17.2 / 2.9 | 767.5 HP / 38.2 / 4.2 |
| Nightmare | 45 HP / 10 / 3 | 166.5 HP / 19 / 3.3 | 571.5 HP / 49 / 4.3 | 1,381.5 HP / 109 / 6.3 |
| Acolyte | 24 HP / 5 / 2 | 88.8 HP / 9.5 / 2.2 | 304.8 HP / 24.5 / 2.9 | 736.8 HP / 54.5 / 4.2 |
| Corrupted Vindicator | 24 HP / 5 / 2 | 88.8 HP / 9.5 / 2.2 | 304.8 HP / 24.5 / 2.9 | 736.8 HP / 54.5 / 4.2 |
| Corrupted Pillager | 24 HP / 3 / 0 | 88.8 HP / 5.7 / 0 | 304.8 HP / 14.7 / 0 | 736.8 HP / 32.7 / 0 |

| Mob | Movement speed | Follow range | Notes |
| --- | --- | --- | --- |
| Ghoul | 0.175 | 30 blocks | 50% knockback resistance |
| Revenant | 0.155 | 25 blocks | |
| Nightmare | 0.19 | 64 blocks | Hits hardest; doesn't burn in daylight |
| Acolyte, Corrupted Vindicator, Corrupted Pillager | 0.35 | 12 blocks | |

## Drops

| Mob | Drops | Rare drop (player kill) |
| --- | --- | --- |
| Ghoul | One of: 1–2 [[item:minecraft:rotten_flesh]], or 0–1 [[item:graveyard:corruption]] | [[item:minecraft:bone]], 2.5% (+1% per Looting level) |
| Revenant | One of: 0–2 Bone, or 0–1 Corruption | |
| Nightmare | 1–3 Corruption | |
| Acolyte, Corrupted Vindicator, Corrupted Pillager | 1 Corruption | |

Looting adds 0–1 to every count above.

{{uses graveyard:corruption limit=8}}
