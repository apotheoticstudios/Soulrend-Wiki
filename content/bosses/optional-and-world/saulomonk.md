---
{
  "title": "Saulomonk",
  "summary": "A Weapons of Miracles desert monk that spawns holding one of the mod's weapons; its level follows the player's.",
  "items": ["wom:saulomonk_spawn_egg"],
  "infobox": {
    "item": "wom:saulomonk_spawn_egg",
    "model": "wom:saulomonk",
    "rows": [
      ["ID", "`wom:saulomonk`"],
      ["Level", "The player's level"],
      ["Health", "1,524 HP (level 40)"],
      ["Location", "Deserts"],
      ["Weapon", "[[item:wom:orbit]], [[item:wom:nova]] or [[item:wom:blackstar]]"]
    ]
  }
}
---
<!-- sources:
  mods/WeaponsOfMiracles-2.0.171-mc1.20.1-forge.jar Saulomonk.createAttributes (120 max health, 8 attack damage, 0.2 knockback resistance, 0.2 movement speed, 50 follow range; Epic Fight impact 1.6); on spawn equips one of WOMItems.ORBIT, NOVA, BLACKSTAR in the main hand (random); AnimsSaulomonk, SaulomonkPatch
  mods/WeaponsOfMiracles-2.0.171-mc1.20.1-forge.jar data/wom/forge/biome_modifier/spawn_saulomonk.json (minecraft:desert, weight 8, groups of 1); no loot tables in the jar
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  config/soulrend_core/boss_damage.toml (not listed)
  config/autoleveling-common.toml [Attributes]
  calc: L10: health 120 × 3.7 = 444, attack 8 × 1.9 = 15.2; L40: 1,524, 39.2; L100: 3,684, 87.2
-->
**Saulomonk** is a desert monk from Weapons of Miracles. It spawns alone in deserts and fights with one of the mod's weapons, chosen at random when it spawns. No quest asks for it.

## Spawning

Saulomonks spawn alone in Deserts, with a spawn weight of 8. Each one spawns holding an [[item:wom:orbit]], a [[item:wom:nova]] or a [[item:wom:blackstar]].

## Stats

The Saulomonk has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 120 HP | 444 HP | 1,524 HP | 3,684 HP |
| Attack damage | 8 | 15.2 | 39.2 | 87.2 |
| Armor | 0 | 0 | 0 | 0 |
| Knockback resistance | 20% | 20% | 20% | 20% |
| Movement speed | 0.2 | 0.2 | 0.2 | 0.2 |
| Follow range | 50 blocks | | | |

It fights with Epic Fight animations that match its weapon.

## Drops

Weapons of Miracles gives the Saulomonk no loot table.

<!-- TODO: whether it drops its weapon (equipment drop chance in Saulomonk.finalizeSpawn). -->
