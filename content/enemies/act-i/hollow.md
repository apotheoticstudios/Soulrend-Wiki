---
{
  "title": "Hollow",
  "summary": "A heavily armored Weapons of Miracles swordsman that spawns across the Overworld; a Hunter's Journal target whose damage never counts toward Soulrend levels.",
  "aliases": ["Hollow Knight"],
  "items": ["wom:hollow_spawn_egg"],
  "infobox": {
    "item": "wom:hollow_spawn_egg",
    "model": "wom:hollow",
    "rows": [
      ["ID", "`wom:hollow`"],
      ["Act", "[[progression/act-i-awakening|Act I]]"],
      ["Level", "The player's level"],
      ["Health", "148 HP (level 10)"],
      ["Location", "Every Overworld biome"],
      ["Drops", "None"]
    ]
  }
}
---
<!-- sources:
  mods/WeaponsOfMiracles-2.0.171-mc1.20.1-forge.jar data/wom/forge/biome_modifier/spawn_hollow.json (#minecraft:is_overworld, weight 60, groups of 1)
  mods/WeaponsOfMiracles-2.0.171-mc1.20.1-forge.jar Hollow.createAttributes (40 health, 5 attack, 10 armor, 10 armor toughness, 0.2 knockback resistance, 0.15 speed, 20 follow range); Hollow.populateDefaultEquipmentSlots (WOMItems.HOLLOW_LONGSWORD); no loot table in the jar or the export
  config/soulrend_core/common.toml [skilltree] (comment: Weapons of Miracles' Hollow is always excluded from skill-point damage)
  config/ftbquests/quests/chapters/hunters_journal.snbt (wom:hollow kill 5, then 25)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L10: health 40 × 3.7 = 148, attack 5 × 1.9 = 9.5, armor 10 × 1.099 = 11; L40: 508, 24.5, 14.3; L100: 1,228, 54.5, 20.9
-->
The **Hollow** is an armored swordsman from Weapons of Miracles that fights with Epic Fight animations. It is one of the most common hostile mobs in Soulrend's Overworld and a target of the [[progression/side-chapters/hunters-journal|Hunter's Journal]]. It is tough for its level, carries a [[item:wom:hollow_longsword]] and drops nothing.

## Spawning

Hollows spawn alone in every Overworld biome, with a spawn weight of 60.

## Stats

The Hollow has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 40 HP | 148 HP | 508 HP | 1,228 HP |
| Attack damage | 5 | 9.5 | 24.5 | 54.5 |
| Armor | 10 | 11 | 14.3 | 20.9 |
| Armor toughness | 10 | 10 | 10 | 10 |
| Knockback resistance | 20% | 20% | 20% | 20% |
| Movement speed | 0.15 | | | |
| Follow range | 20 blocks | | | |

It spawns holding a [[item:wom:hollow_longsword]], which adds to its attack.

> [!NOTE]
> Damage dealt to a Hollow never counts toward Soulrend levels: Soulrend Core always excludes it from skill-point damage. Killing Hollows is worth it only for the Hunter's Journal rewards.

## Drops

Weapons of Miracles gives the Hollow no loot table, so it drops nothing.

## Hunter's Journal

- 5 kills: 16 [[item:minecraft:iron_ingot]] and 16 [[item:magistuarmory:steel_ingot]].
- 25 kills: 32 of each.

See [[progression/side-chapters/hunters-journal|Hunter's Journal]].
