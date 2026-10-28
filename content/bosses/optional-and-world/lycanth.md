---
{
  "title": "Lycanth",
  "summary": "A Weapons of Miracles werewolf that spawns in packs anywhere in the Overworld; its level follows the player's.",
  "items": ["wom:lycanth_spawn_egg"],
  "infobox": {
    "item": "wom:lycanth_spawn_egg",
    "rows": [
      ["ID", "`wom:lycanth`"],
      ["Level", "The player's level"],
      ["Health", "762 HP (level 40)"],
      ["Location", "Overworld, groups of 1–4"],
      ["Drops", "None"]
    ]
  }
}
---
<!-- sources:
  mods/WeaponsOfMiracles-2.0.171-mc1.20.1-forge.jar Lycanth.createAttributes (60 max health, 9 attack damage, 8 armor, 5 armor toughness, 0.4 knockback resistance, 0.3 movement speed, 40 follow range; Epic Fight impact 1); AnimsLycanth, LycanthPatch
  mods/WeaponsOfMiracles-2.0.171-mc1.20.1-forge.jar data/wom/forge/biome_modifier/spawn_lycanth.json (#minecraft:is_overworld, weight 48, groups of 1-4); no loot tables in the jar
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  config/soulrend_core/boss_damage.toml (not listed)
  config/autoleveling-common.toml [Attributes]
  calc: L10: health 60 × 3.7 = 222, attack 9 × 1.9 = 17.1, armor 8 × 1.099 = 8.8
        L40: 762, 44.1, 11.4; L100: 1,842, 98.1, 16.7
-->
**Lycanth** is a werewolf from Weapons of Miracles. Despite being listed with the bosses, it is a common hostile mob: Lycanths spawn in packs of up to four anywhere in the Overworld. No quest asks for them.

## Spawning

Lycanths spawn in every Overworld biome, in groups of 1–4, with a spawn weight of 48.

## Stats

The Lycanth has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 60 HP | 222 HP | 762 HP | 1,842 HP |
| Attack damage | 9 | 17.1 | 44.1 | 98.1 |
| Armor | 8 | 8.8 | 11.4 | 16.7 |
| Armor toughness | 5 | 5 | 5 | 5 |
| Knockback resistance | 40% | 40% | 40% | 40% |
| Movement speed | 0.3 | 0.3 | 0.3 | 0.3 |
| Follow range | 40 blocks | | | |

It fights with Epic Fight animations.

## Drops

Weapons of Miracles gives the Lycanth no loot table, so it drops nothing.
