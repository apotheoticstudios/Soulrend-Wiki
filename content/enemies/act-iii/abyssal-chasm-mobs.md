---
{
  "title": "Abyssal Chasm Mobs",
  "summary": "The Deep Ones and deep-sea life of the Abyssal Chasm dimension, around the Hullbreaker.",
  "aliases": ["Deep One", "Deep One Knight", "Deep One Mage"],
  "items": ["alexscaves:deep_one_spawn_egg", "alexscaves:deep_one_knight_spawn_egg", "alexscaves:deep_one_mage_spawn_egg"],
  "infobox": {
    "item": "alexscaves:deep_one_knight_spawn_egg",
    "rows": [
      ["ID", "`alexscaves:deep_one`, `deep_one_knight`, `deep_one_mage`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "The player's level"],
      ["Location", "Abyssal Chasm dimension"],
      ["Drops", "None"]
    ]
  }
}
---
<!-- sources:
  mods/alexscaves-2.0.2.jar data/alexscaves/worldgen/biome/abyssal_chasm.json (deep_one 8, deep_one_knight 4, deep_one_mage 2, hullbreaker 20, lanternfish 100, tripodfish 40, sea_pig 50, gossamer_worm 20, plus vanilla monsters)
  config/cataclysm/*_spawns.json (Cataclysm Deeplings and Coral Golems also spawn in alexscaves:abyssal_chasm)
  config/alexscaves_biome_generation/abyssal_chasm.json (disabled_completely); Dimensions of Alex's Caves dimension/abyssal_chasm.json
  config/ftbquests/quests/chapters/the_caverns.snbt (kill alexscaves:hullbreaker)
  mods/alexscaves-2.0.2.jar DeepOneEntity (30 health, 3 attack), DeepOneKnightEntity (60, 5), DeepOneMageEntity (80, 4); registerGoals (HurtByHostileTargetGoal, DeepOneTargetHostilePlayersGoal)
  game-data/loot-tables.json alexscaves:entities/{deep_one,deep_one_knight,deep_one_mage} (empty)
  calc: L100: health ×30.7, attack ×10.9; L150: ×45.7, ×15.9
-->
The **Abyssal Chasm** is Alex's Caves' flooded deep-sea cave biome. In Soulrend it is its own dimension, reached with a Dimensions of Alex's Caves key in [[progression/act-iii-into-the-flames|Act III]]'s The Caverns chapter. It is home to the **Deep Ones**, an underwater people with their own opinion of each player, and the [[Hullbreaker]], a quest target with its own page. L_Ender's Cataclysm's [[enemies/act-iii/deeplings|Deeplings]] and Coral Golems spawn there too.

## Spawning

| Mob | Weight | Attacks players |
| --- | --- | --- |
| Lanternfish | 100 | No |
| Sea Pig | 50 | No |
| Tripodfish | 40 | No |
| [[Hullbreaker]] | 20 | Yes |
| Gossamer Worm | 20 | No |
| Deep One | 8 | Players they consider hostile, or who attack them |
| Deep One Knight | 4 | Same |
| Deep One Mage | 2 | Same |

Vanilla monsters also spawn there.

## Stats

None of the Deep Ones has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). None has armor.

| Mob | Base | Act III (100) | Act III-b (150) |
| --- | --- | --- | --- |
| Deep One | 30 HP / 3 | 921 HP / 32.7 | 1,371 HP / 47.7 |
| Deep One Knight | 60 HP / 5 | 1,842 HP / 54.5 | 2,742 HP / 79.5 |
| Deep One Mage | 80 HP / 4 | 2,456 HP / 43.6 | 3,656 HP / 63.6 |

The table gives health / attack damage.

## Drops

The Deep Ones' loot tables are empty, so they drop nothing.
