---
{
  "title": "Shulker",
  "summary": "The vanilla End City guard that hides in its shell and fires levitating bullets; the only source of Shulker Shells.",
  "aliases": ["Shulkers"],
  "items": ["minecraft:shulker_spawn_egg"],
  "infobox": {
    "item": "minecraft:shulker_spawn_egg",
    "model": "minecraft:shulker",
    "rows": [
      ["ID", "`minecraft:shulker`"],
      ["Act", "[[progression/act-iv-beyond-reality|Act IV]]"],
      ["Level", "The player's level"],
      ["Health", "1,641 HP (level 180)"],
      ["Location", "End Cities; The Outer End's towers"],
      { "heading": "Drops" },
      ["Chance", "[[item:minecraft:shulker_shell]] (50%)"]
    ]
  }
}
---
<!-- sources:
  Install/libraries/net/minecraft/client/1.20.1-20230612.114412/client-1.20.1-20230612.114412-srg.jar Shulker.createAttributes m_33477_ (30 health, 0 armor without the closed-shell bonus)
  mods/TheOuterEnd-1.0.13.jar structure NBT "levels" pieces (shulker)
  game-data/loot-tables.json minecraft:entities/shulker (Shulker Shell 50%, +6.25% per Looting level; unchanged from vanilla)
  config/apotheosis/adventure.cfg (minecraft:the_end|0.018|SURFACE_OUTER_END); config/paxi/datapacks/soulrend_apotheosis_rebalance/data/apotheosis/bosses/the_end/shulker.json (mythic-ancient, weight 40, modifiers)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: health 30 × 45.7 = 1,371 (L150), × 54.7 = 1,641 (L180), × 60.7 = 1,821 (L200)
-->
The **Shulker** is Minecraft's End City guard: a creature in a purpur shell that fires homing bullets which make players float. Soulrend leaves it as in vanilla, so it is met in End Cities during [[progression/act-iv-beyond-reality|Act IV]], and it remains the only source of [[item:minecraft:shulker_shell]]. No quest asks for it.

## Spawning

Shulkers sit in End Cities, as in vanilla Minecraft. The Outer End's towers also place some in their upper levels.

## Stats

The Shulker has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Its bullets deal fixed damage, so a higher level only adds health.

| Stat | Base | Act III-b (150) | Act IV (180) | Act V (200) |
| --- | --- | --- | --- | --- |
| Health | 30 HP | 1,371 HP | 1,641 HP | 1,821 HP |

Its armor is 0 while open and rises while its shell is closed, as in vanilla.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:minecraft:shulker_shell]] | 1 | 50% (+6.25% per Looting level) |

## Apothic variants

Apotheosis bosses spawn naturally on the outer End islands (1.8% of surface spawns), and the Shulker is a candidate (weight 40). Soulrend's Apothic Shulkers are Mythic or Ancient, wear End gear with random affixes, and gain +160–200 health, +10 armor and +6 armor toughness on top of the scaled stats. The same pool includes Apothic Endermen (see [[enemies/act-i/enderman#Apothic variants|Enderman]]), Phantoms (Epic to Ancient) and rare Endermites (Mythic or Ancient).
