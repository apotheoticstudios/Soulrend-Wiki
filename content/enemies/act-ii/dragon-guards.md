---
{
  "title": "Dragon Guards",
  "summary": "Bosses'Rise's skeleton guards: Dragon Guards in the Infernal Dragon's tower and Soul Skeletons in the Underworld Knight's arena.",
  "aliases": ["Dragon Guard", "Soul Skeleton", "Pile Of Bones", "Flaming Dragon Guard", "Flaming Skeleton Shooter"],
  "items": [
    "block_factorys_bosses:dragon_guard_sword_spawn_egg",
    "block_factorys_bosses:soul_skeleton_spawn_egg",
    "block_factorys_bosses:pile_of_bones_spawn_egg"
  ],
  "infobox": {
    "item": "block_factorys_bosses:dragon_guard_sword_spawn_egg",
    "model": ["block_factorys_bosses:dragon_guard_sword", "block_factorys_bosses:soul_skeleton", "block_factorys_bosses:pile_of_bones", "block_factorys_bosses:flaming_skeleton_guard_sword", "block_factorys_bosses:flaming_skeleton_guard_fireball"],
    "rows": [
      ["ID", "`block_factorys_bosses:dragon_guard_sword`, `soul_skeleton`, `pile_of_bones`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "The player's level (Pile Of Bones never levels)"],
      ["Location", "Dragon Tower; Underworld Arena (Nether)"],
      { "heading": "Drops" },
      ["Common", "[[item:minecraft:bone]], [[item:block_factorys_bosses:ancient_iron_nugget]]"]
    ]
  }
}
---
<!-- sources:
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar structure NBT: dragon_base, dragon_middle (dragon_guard_sword, pile_of_bones), dragon_high (pile_of_bones, infernal_dragon), underworld_arena_p* (pile_of_bones, underworld_knight)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar worldgen/structure/dragon_tower.json (#block_factorys_bosses:dragon_tower = meadow, stony_peaks, jagged_peaks; no spawn overrides), underworld_arena.json (spawn_overrides: soul_skeleton weight 2 and soul_knight_wither_skeleton weight 1, groups of 1-3)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar DragonGuardSwordEntity.createAttributes (20 health, 4 attack, 0.1 knockback resistance, 0.2 speed), SoulSkeletonEntity (20, 6, 4 armor, 0.1, 0.25), PileOfBonesEntity (10 health), FlamingSkeletonGuardSwordEntity (30, 4, 2 armor), FlamingSkeletonGuardFireballEntity (20, 4); no biome modifier, structure, spawn override or procedure creates the two Flaming guards
  config/autoleveling-common.toml [Mobs] (block_factorys_bosses:pile_of_bones never levels)
  game-data/loot-tables.json block_factorys_bosses:entities/{dragon_guard_sword,soul_skeleton} (no table for pile_of_bones)
  config/paxi/datapacks/soulrend_mob_leveling (no files: level = player level)
  calc: Dragon Guard L10: 20 × 3.7 = 74, 4 × 1.9 = 7.6; L40: 254, 19.6; L100: 614, 43.6. Soul Skeleton L10: 74, 11.4, armor 4.4; L40: 254, 29.4, 5.7; L100: 614, 65.4, 8.4
-->
The **Dragon Guards** are the skeleton soldiers that Bosses'Rise posts in its boss structures. Dragon Guards hold the lower floors of the Dragon Tower, home of the [[bosses/act-ii/infernal-dragon|Infernal Dragon]] that [[progression/act-ii-first-steps|Act II]] sends players after. The Underworld Arena in the Nether, where the [[bosses/act-iii/underworld-knight|Underworld Knight]] waits, is guarded by **Soul Skeletons** instead. No quest asks for them.

## Spawning

| Mob | Where |
| --- | --- |
| Dragon Guard | Placed on the lower and middle floors of the Dragon Tower (Meadows, Stony Peaks, Jagged Peaks) |
| Pile Of Bones | Placed throughout the Dragon Tower and the Underworld Arena |
| Soul Skeleton | Replaces normal hostile spawns inside the Underworld Arena (weight 2, groups of 1–3), next to [[bosses/optional-and-world/wither-knight\|Wither Knights]] (weight 1) |

Bosses'Rise also registers the **Flaming Dragon Guard** and the **Flaming Skeleton Shooter**, but nothing in Soulrend spawns them: they have spawn eggs only.

## Stats

Dragon Guards and Soul Skeletons have no level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Dragon Guard | 20 HP / 4 / 0 | 74 HP / 7.6 / 0 | 254 HP / 19.6 / 0 | 614 HP / 43.6 / 0 |
| Soul Skeleton | 20 HP / 6 / 4 | 74 HP / 11.4 / 4.4 | 254 HP / 29.4 / 5.7 | 614 HP / 65.4 / 8.4 |

The Pile Of Bones has 10 HP and never levels. Since the Underworld Arena is in the Nether, Soul Skeletons are usually met in Act III.

## Drops

| Mob | Drops |
| --- | --- |
| Dragon Guard | Up to one of: 0–3 [[item:minecraft:gold_nugget]] (3 in 4) or 1–2 [[item:block_factorys_bosses:ancient_iron_nugget]] (1 in 4); up to 1–2 [[item:minecraft:bone]] |
| Soul Skeleton | Up to 1–2 Bones; up to 0–2 Ancient Iron Nuggets |
| Pile Of Bones | Nothing |

Each pool rolls 0–1 times, so a guard can drop nothing. Looting doesn't change these drops.
