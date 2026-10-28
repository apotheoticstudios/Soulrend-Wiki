---
{
  "title": "Piglin & Piglin Brute",
  "summary": "The Nether's gold-loving Piglins and the bastion-guarding Piglin Brutes; both have Hunter's Journal ladders that pay in Blocks of Gold.",
  "aliases": ["Piglin", "Piglin Brute", "Piglins"],
  "items": ["minecraft:piglin_spawn_egg", "minecraft:piglin_brute_spawn_egg"],
  "infobox": {
    "item": "minecraft:piglin_brute_spawn_egg",
    "rows": [
      ["ID", "`minecraft:piglin`, `minecraft:piglin_brute`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "The player's level"],
      ["Location", "Crimson Forests, Nether Wastes, bastion remnants"],
      ["Drops", "Only the gear they carry"]
    ]
  }
}
---
<!-- sources:
  Install/libraries/net/minecraft/client/1.20.1-20230612.114412/client-1.20.1-20230612.114412-srg.jar Piglin.createAttributes m_34770_ (16 health, 5 attack, 0.35 speed), PiglinBrute.createAttributes m_35075_ (50 health, 7 attack, 0.35 speed)
  game-data/loot-tables.json minecraft:entities/{piglin,piglin_brute} (empty, as in vanilla)
  config/ftbquests/quests/chapters/hunters_journal.snbt (piglin and piglin_brute: kill 50, then 250; rewards 4, then 16 Blocks of Gold)
  mods/awakenedmobs-1.1.3.jar awakened_mobs/piglins.json (piglin, piglin_brute); config/awakenedmobs-common.toml (runnerChance 0.05, runnerSpeedBonus 0.2)
  mods/irons_spellbooks-1.20.1-3.15.6.jar worldgen/structure/citadel.json and ancient_battleground.json (#minecraft:has_structure/bastion_remnant)
  config/apotheosis/adventure.cfg (minecraft:the_nether|0.025|ANY); soulrend_apotheosis_rebalance bosses/the_nether/{piglin,piglin_brute}.json
  config/paxi/datapacks/soulrend_mob_leveling (no files: level = player level)
  calc: Piglin L40: 16 × 12.7 = 203.2, 5 × 4.9 = 24.5; L100: 491.2, 54.5. Brute L40: 635, 34.3; L100: 1,535, 76.3
-->
**Piglins** are the Nether's gold-obsessed inhabitants, and **Piglin Brutes** are the heavily armed guards of bastion remnants. They are vanilla Minecraft mobs that Soulrend leaves mostly unchanged, but the [[progression/side-chapters/hunters-journal|Hunter's Journal]] has a ladder for each, paying in Blocks of Gold. Players meet them once the Nether opens in [[progression/act-iii-into-the-flames|Act III]].

## Spawning

Piglins spawn in Crimson Forests and Nether Wastes and live in bastion remnants, as in vanilla Minecraft. Piglin Brutes only appear in bastion remnants. Iron's Spellbooks builds its Citadel and Ancient Battleground in the same biomes that hold bastions.

## Stats

Neither has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Both carry weapons, which add to their attack.

| Mob | Base | Act II (40) | Act III (100) |
| --- | --- | --- | --- |
| Piglin | 16 HP / 5 | 203.2 HP / 24.5 | 491.2 HP / 54.5 |
| Piglin Brute | 50 HP / 7 | 635 HP / 34.3 | 1,535 HP / 76.3 |

The table gives health / attack damage. Both move at 0.35. Awakened Mobs gives each a 5% chance to spawn as a runner, 20% faster.

## Drops

Neither has any loot of its own, as in vanilla; they drop only some of the gear they carry.

## Apothic variants

Apotheosis bosses spawn naturally in the Nether (2.5% of spawns). Soulrend's Apothic Piglins are Rare or Epic and its Apothic Piglin Brutes Epic; both wear Nether gear with random affixes and have Fire Resistance. On top of the scaled stats:

| Variant | Health | Speed | Attack | Knockback resistance | Armor / toughness |
| --- | --- | --- | --- | --- | --- |
| Piglin, Rare | +40–120 | +15–30% | +25–55% | +40% | |
| Piglin, Epic | +60–140 | +25–40% | +30–65% | +50% | +4 / +2 |
| Piglin Brute, Epic | +80–160 | +15–45% | +32–67% | +55% | +4 / +2 |

## Hunter's Journal

| Mob | Kills | Rewards |
| --- | --- | --- |
| Piglin | 50, then 250 | 4, then 16 [[item:minecraft:gold_block]] |
| Piglin Brute | 50, then 250 | 4, then 16 Blocks of Gold |

See [[progression/side-chapters/hunters-journal|Hunter's Journal]].
