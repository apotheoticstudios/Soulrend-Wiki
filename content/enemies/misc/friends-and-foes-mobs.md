---
{
  "title": "Friends & Foes Mobs",
  "summary": "The hostile mobs Friends & Foes adds: Iceologers and Illusioners that join illager patrols, and the Wildfire that guards the Nether Citadel.",
  "aliases": ["Iceologer", "Elite Iceologer", "Illusioner", "Wildfire", "King Wildfire", "Mauler"],
  "items": [
    "friendsandfoes:iceologer_spawn_egg",
    "friendsandfoes:illusioner_spawn_egg",
    "friendsandfoes:wildfire_spawn_egg",
    "friendsandfoes:mauler_spawn_egg"
  ],
  "infobox": {
    "item": "friendsandfoes:iceologer_spawn_egg",
    "rows": [
      ["ID", "`friendsandfoes:iceologer`, `illusioner`, `wildfire`"],
      ["Level", "The player's level"],
      ["Location", "Illager patrols, raids and illager huts; the Citadel in the Nether"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:friendsandfoes:totem_of_freezing]], [[item:friendsandfoes:totem_of_illusion]], [[item:friendsandfoes:wildfire_crown_fragment]]"]
    ]
  }
}
---
<!-- sources:
  config/friendsandfoes.json (enableIceologerSpawn, enableIceologerInRaids, generateIceologerCabinStructure, enableIllusionerSpawn, enableIllusionerInRaids, generateIllusionerShackStructure, generateIllusionerTrainingGroundsStructure, enableWildfire, generateCitadelStructure; maulerDesertSpawnWeight 8, maulerBadlandsSpawnWeight 16, maulerSavannaSpawnWeight 32)
  mods/friendsandfoes-forge-5.0.3+mc1.20.1.jar PatrolSpawnerMixin.modifyPatrolEntity (patrols in #friendsandfoes:has_iceologer biomes get an Iceologer, #has_illusioner an Illusioner); tags has_iceologer = collections/snowy, has_illusioner = collections/taigas
  mods/friendsandfoes-forge-5.0.3+mc1.20.1.jar tags/worldgen/biome/has_structure: iceologer_cabin (snowy), illusioner_shack and illusioner_training_grounds (taigas), citadel (#minecraft:is_nether)
  mods/friendsandfoes-forge-5.0.3+mc1.20.1.jar IceologerEntity.createIceologerAttributes (24 health, 2 attack, 0.5 speed, 18 follow), IllusionerEntity.createAttributes (same), WildfireEntity.createWildfireAttributes (120 health, 8 attack, 1 knockback resistance, 0.23 speed, 32 follow), MaulerEntity.createMaulerAttributes (20 health, 8 attack, 0.3 speed; Animal; targets small Slimes and baby Zombies, HurtByTargetGoal)
  game-data/loot-tables.json friendsandfoes:entities/{iceologer,illusioner,wildfire}; game-data/items.json (totem tooltips)
  config/autoleveling-common.toml [Mobs] (friendsandfoes:mauler never levels)
  config/paxi/datapacks/soulrend_mob_leveling (no Friends & Foes files: level = player level)
  calc: L10: health ×3.7, attack ×1.9; L40: ×12.7, ×4.9; L100: ×30.7, ×10.9
-->
**Friends & Foes** adds three hostile mobs: the **Iceologer** and the **Illusioner**, spellcasting illagers that join pillager patrols, and the **Wildfire**, the guardian of the Nether's Citadel. No quest asks for them, but the two illagers always drop a totem.

## Spawning

| Mob | Where |
| --- | --- |
| Iceologer | Pillager patrols in snowy biomes; raids; the Iceologer Cabin (snowy biomes) |
| Illusioner | Pillager patrols in taiga biomes; raids; the Illusioner Shack and Training Grounds (taigas) |
| Wildfire | The Citadel, a Nether structure |

## Stats

None of these mobs has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Iceologer | 24 HP / 2 / 0 | 88.8 HP / 3.8 / 0 | 304.8 HP / 9.8 / 0 | 736.8 HP / 21.8 / 0 |
| Illusioner | 24 HP / 2 / 0 | 88.8 HP / 3.8 / 0 | 304.8 HP / 9.8 / 0 | 736.8 HP / 21.8 / 0 |
| Wildfire | 120 HP / 8 / 0 | 444 HP / 15.2 / 0 | 1,524 HP / 39.2 / 0 | 3,684 HP / 87.2 / 0 |

The Iceologer and Illusioner move at 0.5 and notice players from 18 blocks; both fight with spells rather than their attack value. The Wildfire moves at 0.23, notices players from 32 blocks and can't be knocked back.

## Drops

| Mob | Drops |
| --- | --- |
| Iceologer | Always a [[item:friendsandfoes:totem_of_freezing]]; 0–2 [[item:minecraft:blue_ice]]; 0–1 [[item:minecraft:emerald]] on a player kill |
| Illusioner | Always a [[item:friendsandfoes:totem_of_illusion]]; 0–2 [[item:minecraft:arrow]]; 0–1 Emerald on a player kill |
| Wildfire | 3–5 [[item:friendsandfoes:wildfire_crown_fragment]] |

Looting adds 0–1 to the Blue Ice, Arrows and Emeralds. Both totems trigger when the holder takes damage and drops below half health.

{{uses friendsandfoes:wildfire_crown_fragment}}

## The Mauler

The **Mauler** spawns in deserts (weight 8), badlands (16) and savannas (32). It isn't hostile: it hunts small Slimes and baby Zombies and only attacks a player who hurts it. It is one of the mobs that never level up, so it keeps its base 20 health and 8 attack damage.
