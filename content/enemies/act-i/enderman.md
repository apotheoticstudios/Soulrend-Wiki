---
{
  "title": "Enderman",
  "summary": "The vanilla teleporting mob of the Overworld and the End; a Hunter's Journal target and the most common mob of Act IV.",
  "aliases": ["Endermen"],
  "items": ["minecraft:enderman_spawn_egg"],
  "infobox": {
    "item": "minecraft:enderman_spawn_egg",
    "model": "minecraft:enderman",
    "rows": [
      ["ID", "`minecraft:enderman`"],
      ["Act", "[[progression/act-i-awakening|Act I]], [[progression/act-iv-beyond-reality|Act IV]]"],
      ["Level", "The player's level"],
      ["Health", "148 HP (level 10)"],
      ["Location", "Overworld at night; every End biome"],
      { "heading": "Drops" },
      ["Common", "0–1 [[item:minecraft:ender_pearl]]"]
    ]
  }
}
---
<!-- sources:
  Install/libraries/net/minecraft/client/1.20.1-20230612.114412/client-1.20.1-20230612.114412-srg.jar EnderMan.createAttributes m_32541_ (40 health, 7 attack, 0.3 speed, 64 follow range)
  game-data/loot-tables.json minecraft:entities/enderman (unchanged from vanilla)
  config/ftbquests/quests/chapters/hunters_journal.snbt (minecraft:enderman 5, then 25; rewards 5, then 10 Ender Pearls)
  mods/TheOuterEnd-1.0.13.jar worldgen/biome (azure_forest, crystal_crag, primordial_pools: enderman 10); mods/EndlessBiomes 1.6.1 - 1.20.1.jar worldgen/biome/penumbral_forest (enderman 20)
  config/apotheosis/adventure.cfg "Boss Spawn Dimensions" (minecraft:the_end|0.018|SURFACE_OUTER_END)
  config/paxi/datapacks/soulrend_apotheosis_rebalance/data/apotheosis/bosses/the_end/enderman.json (epic-ancient, weight 80, #the_end gear, fire resistance, modifiers)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L10: health 40 × 3.7 = 148, attack 7 × 1.9 = 13.3; L40: 508, 34.3; L100: 1,228, 76.3; L180: 40 × 54.7 = 2,188, 7 × 18.9 = 132.3
-->
The **Enderman** is Minecraft's tall, teleporting neutral mob: it attacks only players who look at it or hurt it. Players meet it in the Overworld from the start, and it is the most common mob in the End during [[progression/act-iv-beyond-reality|Act IV]]. The [[progression/side-chapters/hunters-journal|Hunter's Journal]] has a short Enderman ladder that pays in Ender Pearls.

## Spawning

Endermen spawn in the dark across the Overworld and throughout the End, as in vanilla Minecraft. Soulrend's End biome mods add them to their own biomes too: The Outer End's Azure Forest, Crystal Crag and Primordial Pools (weight 10) and Endless Biomes' Penumbral Forest (weight 20).

## Stats

The Enderman has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Act IV's column uses that act's typical level of 180.

| Stat | Base | Act I (10) | Act II (40) | Act III (100) | Act IV (180) |
| --- | --- | --- | --- | --- | --- |
| Health | 40 HP | 148 HP | 508 HP | 1,228 HP | 2,188 HP |
| Attack damage | 7 | 13.3 | 34.3 | 76.3 | 132.3 |
| Armor | 0 | 0 | 0 | 0 | 0 |
| Movement speed | 0.3 | | | | |
| Follow range | 64 blocks | | | | |

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:minecraft:ender_pearl]] | 0–1 | Looting adds 0–1 |

## Apothic variants

Apotheosis bosses spawn naturally on the surface of the outer End islands: each eligible spawn has a 1.8% chance to become one, and the Enderman is one of the candidates. Soulrend's Apothic Endermen are Epic to Ancient rarity, wear End gear with random affixes and have Fire Resistance. On top of the scaled stats above:

| Rarity | Health | Speed | Attack | Armor | Toughness | Knockback resistance |
| --- | --- | --- | --- | --- | --- | --- |
| Epic | +100–180 | +20–45% | +60–95% | +4 | +2 | +85% |
| Mythic, Ancient | +140–220 | +30–65% | +70–105% | +6 | +3 | +95% |

The added health is then multiplied by the level bonus with the rest. See [[items/gear-progression|Gear Progression]] for affix rarities.

## Quests

- [[progression/side-chapters/hunters-journal|Hunter's Journal]]: 5 Enderman kills (reward: 5 Ender Pearls), then 25 (reward: 10 Ender Pearls).
