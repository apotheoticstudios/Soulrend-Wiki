---
{
  "title": "End Highlands Mobs",
  "summary": "The modded creatures of the outer End islands: The Outer End's Sinkers and tower guards, Endless Biomes' Shiftlings and Sentinels, and Alex's Mobs' Mimicubes.",
  "aliases": ["Sinker", "Himmelite", "Entombed", "Purpur Golem", "Spectrafly", "Stalker (Outer End)", "Anklor", "Shiftling", "Perished Shiftling", "Radon Sentinel", "Riftite Sentinel", "Resistive Sentinel", "Mimicube", "Enderiophage"],
  "items": [
    "outer_end:sinker_spawn_egg",
    "outer_end:himmelite_spawn_egg",
    "outer_end:entombed_spawn_egg",
    "outer_end:purpur_golem_spawn_egg",
    "outer_end:spectrafly_spawn_egg",
    "outer_end:stalker_spawn_egg",
    "endlessbiomes:anklor_spawn_egg",
    "endlessbiomes:shiftling_spawn_egg",
    "endlessbiomes:perished_shiftling_spawn_egg",
    "endlessbiomes:radon_sentinel_spawn_egg",
    "endlessbiomes:riftite_sentinel_spawn_egg",
    "endlessbiomes:resistive_sentinel_spawn_egg",
    "alexsmobs:spawn_egg_mimicube",
    "alexsmobs:spawn_egg_enderiophage"
  ],
  "infobox": {
    "item": "endlessbiomes:radon_sentinel_spawn_egg",
    "rows": [
      ["Act", "[[progression/act-iv-beyond-reality|Act IV]]"],
      ["Level", "The player's level (Mimicube and Enderiophage never level)"],
      ["Location", "The outer End islands"]
    ]
  }
}
---
<!-- sources:
  mods/TheOuterEnd-1.0.13.jar worldgen/biome (azure_forest: spectrafly 10; crystal_crag: outer_end:stalker 15; primordial_pools: sinker 4; each with enderman 10); worldgen/structure/catacombs.json (#minecraft:has_structure/end_city; spawn_overrides entombed weight 3), end_tower.json (#has_structure/end_city; purpur_golem 3, himmelite 7 in groups of 2-4); structure NBT "rooms" (spectrafly, himmelite, stalker)
  mods/TheOuterEnd-1.0.13.jar createAttributes: Sinker 20 health, 8 attack, 3 armor; Himmelite 12, 5, 6; Entombed 30, 9, 6, 1 knockback resistance; PurpurGolem 40, 8, 6, 1 knockback resistance; Stalker 20, 8; Spectrafly 10, 2, flying. registerGoals: Sinker, Himmelite, Entombed, PurpurGolem target players; Stalker only HurtByTarget/ResetUniversalAnger; Spectrafly none
  mods/EndlessBiomes 1.6.1 - 1.20.1.jar forge/biome_modifier (penumbral_forest: anklor 20, 1-2; twisted_reef: shiftling 20); worldgen/structure/arkan_bulwark.json (end_highlands), resitive_bulwark.json (#minecraft:is_end); structure NBT bulwark pieces (radon_sentinel, riftite_sentinel; resistive_sentinel in the resistive bulwark); ShiftlingPerishesProcedure (a Shiftling in water for more than 20 ticks becomes a Perished Shiftling)
  mods/EndlessBiomes createAttributes: Anklor 30 health, 2 attack, 6 armor, flying; Shiftling 40, 6; PerishedShiftling 40, 8; Radon and Riftite Sentinel 100, 12, 10 armor; Resistive Sentinel 100, 8, 16 armor, 0.8 knockback resistance. registerGoals: Shiftling targets Shulkers and Endermites; Perished Shiftling and the Sentinels target players; Anklor none
  config/alexsmobs.toml (mimicubeSpawnInEndCity true: Mimicubes only in End Cities; mimicubeSpawnWeight 40; enderiophageSpawnWeight 4), config/alexsmobs/enderiophage_spawns.json (#is_end); EntityMimicube (30 health), EntityEnderiophage (20 health); config/autoleveling-common.toml [Mobs] (both never level); config/ysns/disabled_entities.json5 (alexsmobs:cosmaw)
  game-data/loot-tables.json outer_end:entities/*, endlessbiomes:entities/{anklor,shiftling}, alexsmobs:entities/{mimicube,enderiophage}; no tables for entombed, perished_shiftling or the sentinels
  config/paxi/datapacks/soulrend_mob_leveling (no files: level = player level)
  calc: L150: health ×45.7, attack ×15.9, armor ×2.639; L180: ×54.7, ×18.9, ×2.969; L200: ×60.7, ×20.9, ×3.189
-->
The **End Highlands** are the outer End islands that open up after the Ender Dragon in [[progression/act-iv-beyond-reality|Act IV]]. In Soulrend two mods reshape them, The Outer End and Endless Biomes, and each brings its own creatures. Alex's Mobs adds the Mimicube. [[enemies/act-i/enderman|Endermen]] still spawn everywhere, and [[enemies/act-iv/shulker|Shulkers]] guard End Cities. The Void Cathedral's [[bosses/optional-and-world/voidshelf-golem|Voidshelf Golem]] has its own page.

## Spawning

| Mob | Where | Attacks players |
| --- | --- | --- |
| Sinker | Primordial Pools (weight 4) | Yes |
| Himmelite | End Towers (groups of 2–4) | Yes |
| Purpur Golem | End Towers | Yes |
| Entombed | End Catacombs | Yes |
| Stalker (Outer End) | Crystal Crag (weight 15) | Only when angered |
| Spectrafly | Azure Forest (weight 10) | No |
| Radon Sentinel, Riftite Sentinel | Arkan Bulwarks in the End Highlands | Yes |
| Resistive Sentinel | Resistive Bulwarks in any End biome | Yes |
| Shiftling | Twisted Reef (weight 20) | No; hunts Shulkers and Endermites |
| Perished Shiftling | A Shiftling that stays in water too long turns into one | Yes |
| Anklor | Penumbral Forest (weight 20, groups of 1–2) | No |
| Mimicube | End Cities only | Yes |
| Enderiophage | Every End biome (weight 4) | Only when hurt |

The End Towers and Catacombs generate in the same places as End Cities. Cosmaws are disabled by You Shall Not Spawn.

## Stats

All but the Mimicube and the Enderiophage have no level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act III-b (150) | Act IV (180) | Act V (200) |
| --- | --- | --- | --- | --- |
| Radon Sentinel, Riftite Sentinel | 100 HP / 12 / 10 | 4,570 HP / 190.8 / 26.4 | 5,470 HP / 226.8 / 29.7 | 6,070 HP / 250.8 / 31.9 |
| Resistive Sentinel | 100 HP / 8 / 16 | 4,570 HP / 127.2 / 42.2 | 5,470 HP / 151.2 / 47.5 | 6,070 HP / 167.2 / 51 |
| Purpur Golem | 40 HP / 8 / 6 | 1,828 HP / 127.2 / 15.8 | 2,188 HP / 151.2 / 17.8 | 2,428 HP / 167.2 / 19.1 |
| Entombed | 30 HP / 9 / 6 | 1,371 HP / 143.1 / 15.8 | 1,641 HP / 170.1 / 17.8 | 1,821 HP / 188.1 / 19.1 |
| Perished Shiftling | 40 HP / 8 / 0 | 1,828 HP / 127.2 / 0 | 2,188 HP / 151.2 / 0 | 2,428 HP / 167.2 / 0 |
| Shiftling | 40 HP / 6 / 0 | 1,828 HP / 95.4 / 0 | 2,188 HP / 113.4 / 0 | 2,428 HP / 125.4 / 0 |
| Sinker | 20 HP / 8 / 3 | 914 HP / 127.2 / 7.9 | 1,094 HP / 151.2 / 8.9 | 1,214 HP / 167.2 / 9.6 |
| Stalker (Outer End) | 20 HP / 8 / 0 | 914 HP / 127.2 / 0 | 1,094 HP / 151.2 / 0 | 1,214 HP / 167.2 / 0 |
| Himmelite | 12 HP / 5 / 6 | 548.4 HP / 79.5 / 15.8 | 656.4 HP / 94.5 / 17.8 | 728.4 HP / 104.5 / 19.1 |
| Anklor | 30 HP / 2 / 6 | 1,371 HP / 31.8 / 15.8 | 1,641 HP / 37.8 / 17.8 | 1,821 HP / 41.8 / 19.1 |
| Spectrafly | 10 HP / 2 / 0 | 457 HP / 31.8 / 0 | 547 HP / 37.8 / 0 | 607 HP / 41.8 / 0 |

**Never level:** the Mimicube (30 HP) and the Enderiophage (20 HP) keep their base stats. The Entombed, Purpur Golem and Resistive Sentinel are hard to knock back.

## Drops

| Mob | Drops |
| --- | --- |
| Sinker | 0–2 [[item:outer_end:sinker_tooth]]; 0–4 [[item:outer_end:halite_crystal]] |
| Himmelite | 0–2 [[item:outer_end:floral_paste]] |
| Purpur Golem | 0–3 [[item:minecraft:purpur_block]]; 0–1 [[item:minecraft:ender_eye]] |
| Stalker (Outer End) | 1–3 [[item:outer_end:stalker_meat]] (cooked if burning) |
| Spectrafly | 0–2 [[item:outer_end:spectragel]] |
| Shiftling | 1–3 [[item:endlessbiomes:riftite_shard]]; 1–2 [[item:endlessbiomes:shiftling_antenna]] |
| Anklor | 1–2 [[item:endlessbiomes:anklor_shell_fragments]]; 1–3 [[item:endlessbiomes:anklor_flesh]] |
| Mimicube | Up to 1 [[item:alexsmobs:mimicream]] |
| Enderiophage | 1 [[item:alexsmobs:capsid]] |
| Entombed, Perished Shiftling, Sentinels | Nothing (no loot table) |

Looting adds to most counts above.

> [!NOTE]
> Eyes of Ender from Purpur Golems can't open the End portal in Soulrend, which only accepts End Remastered's eyes (see [[progression/side-chapters/journey-to-the-end|Journey to the End]]).
