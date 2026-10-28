---
{
  "title": "Wither Knight",
  "summary": "An armored wither skeleton that guards the Underworld Arena in the Nether alongside Soul Skeletons.",
  "items": ["block_factorys_bosses:soul_knight_wither_skeleton_spawn_egg"],
  "infobox": {
    "item": "block_factorys_bosses:soul_knight_wither_skeleton_spawn_egg",
    "model": "block_factorys_bosses:soul_knight_wither_skeleton",
    "rows": [
      ["ID", "`block_factorys_bosses:soul_knight_wither_skeleton`"],
      ["Level", "The player's level"],
      ["Health", "921 HP (level 100)"],
      ["Location", "Underworld Arena, Nether"],
      { "heading": "Drops" },
      ["Chance", "[[item:block_factorys_bosses:ancient_iron_ingot]], [[item:minecraft:wither_skeleton_skull]]"]
    ]
  }
}
---
<!-- sources:
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar SoulKnightWitherSkeletonEntity.createAttributes (30 max health, 8 attack damage, 6 armor, 0.1 knockback resistance, 0.25 movement speed, 16 follow range); fireImmune; hurt ignores fire, wither and wither skull damage
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar SoulKnightWitherSkeletonOnEntityTickUpdateProcedure (applies MobEffects.WITHER for 100 ticks = 5 s)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar assets/block_factorys_bosses/lang/en_us.json ("Wither Knight")
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar data/block_factorys_bosses/worldgen/structure/underworld_arena.json (spawn_overrides monster: soul_skeleton weight 2, soul_knight_wither_skeleton weight 1, groups 1-3)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar data/block_factorys_bosses/loot_tables/entities/soul_knight_wither_skeleton.json
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  config/autoleveling-common.toml [Attributes]
  calc: L100: health 30 × 30.7 = 921; attack 8 × 10.9 = 87.2; armor 6 × (1 + 0.011 × 99) = 12.5
        L150: health 30 × 45.7 = 1,371; attack 8 × 15.9 = 127.2; armor 6 × 2.639 = 15.8
        L200: health 30 × 60.7 = 1,821; attack 8 × 20.9 = 167.2; armor 6 × 3.189 = 19.1
-->
**Wither Knight** is an armored wither skeleton from Bosses' Rise. It isn't a boss with its own arena: Wither Knights spawn in groups inside the [[bosses/act-iii/underworld-knight|Underworld Knight]]'s arena, so players fight them on the way to that [[progression/act-iii-into-the-flames|Act III]] boss. No quest requires killing one.

## Spawning

Wither Knights spawn as part of the Underworld Arena (`block_factorys_bosses:underworld_arena`) in the Nether Wastes and Soul Sand Valley. Inside the arena, hostile spawns are replaced by Soul Skeletons (twice as common) and Wither Knights, in groups of 1–3.

## Stats

The Wither Knight has no level floor or cap, so its level matches the Soulrend level of the nearest player. The columns use the typical levels of the acts in which players visit the arena (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Act III (100) | Act III-b (150) | Act V (200) |
| --- | --- | --- | --- | --- |
| Health | 30 HP | 921 HP | 1,371 HP | 1,821 HP |
| Attack damage | 8 | 87.2 | 127.2 | 167.2 |
| Armor | 6 | 12.5 | 15.8 | 19.1 |
| Knockback resistance | 10% | 10% | 10% | 10% |
| Movement speed | 0.25 | 0.25 | 0.25 | 0.25 |

The Wither Knight is immune to fire and takes no damage from Wither or wither skulls.

## Attacks

The Wither Knight fights in melee and inflicts Wither for 5 s.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:minecraft:bone]] | 0–2 | 50% chance of a roll |
| One of: | | 50% chance of a roll |
| [[item:minecraft:coal]] | 0–2 | 25 in 34 |
| [[item:block_factorys_bosses:ancient_iron_nugget]] | 1–3 | 5 in 34 |
| [[item:block_factorys_bosses:ancient_iron_ingot]] | 0–1 | 3 in 34 |
| [[item:minecraft:wither_skeleton_skull]] | 1 | 1 in 34 |
