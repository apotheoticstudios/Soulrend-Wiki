---
{
  "title": "Koboleton",
  "summary": "L_Ender's Cataclysm's skeletal desert scavenger, which spawns in hot Overworld deserts and drops Ancient Metal.",
  "items": ["cataclysm:koboleton_spawn_egg"],
  "infobox": {
    "item": "cataclysm:koboleton_spawn_egg",
    "rows": [
      ["ID", "`cataclysm:koboleton`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "The player's level"],
      ["Health", "317.5 HP (level 40)"],
      ["Location", "Hot, dry, sandy Overworld biomes"],
      { "heading": "Drops" },
      ["Common", "[[item:cataclysm:koboleton_bone]], [[item:cataclysm:ancient_metal_nugget]]"],
      ["Rare", "[[item:cataclysm:ancient_metal_ingot]] (2.5%)"]
    ]
  }
}
---
<!-- sources:
  config/cataclysm.toml [spawning] (KoboletonSpawnWeight 15, KoboletonSpawnRolls 1)
  config/cataclysm/koboleton_spawns.json (#forge:is_dry/overworld + #forge:is_hot/overworld + #forge:is_sandy, not #minecraft:is_badlands)
  mods/L_Enders_Cataclysm-3.16.jar Koboleton_Entity.koboleton (25 health, 3 attack, 0.25 knockback resistance, 0.4 speed, 15 follow range)
  config/paxi/datapacks/soulrend_mob_leveling (no koboleton file: level = player level, unlike most Cataclysm mobs)
  game-data/loot-tables.json cataclysm:entities/koboleton
  calc: L10: 25 × 3.7 = 92.5, 3 × 1.9 = 5.7; L40: 317.5, 14.7; L100: 767.5, 32.7
-->
The **Koboleton** is a quick, skeletal scavenger from L_Ender's Cataclysm. It is the one Cataclysm mob that spawns freely in the Overworld's deserts, and unlike most of the mod's mobs it has no level floor, so it matches the player's level. It drops Ancient Metal, the material of the Cursed Pyramid's gear. The Cursed Pyramid's Kobolediator and Wadjet are on [[bosses/optional-and-world/cataclysm-minibosses|Cataclysm Minibosses]], and its boss is the [[Ancient Remnant]].

## Spawning

Koboletons spawn in hot, dry, sandy Overworld biomes (deserts, but not badlands), with a spawn weight of 15.

## Stats

The Koboleton has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 25 HP | 92.5 HP | 317.5 HP | 767.5 HP |
| Attack damage | 3 | 5.7 | 14.7 | 32.7 |
| Armor | 0 | 0 | 0 | 0 |
| Knockback resistance | 25% | 25% | 25% | 25% |
| Movement speed | 0.4 | | | |
| Follow range | 15 blocks | | | |

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:cataclysm:koboleton_bone]] | 0–2 | Looting adds 0–1 |
| [[item:cataclysm:ancient_metal_nugget]] | 0–1 | Looting adds 0–1 |
| [[item:cataclysm:ancient_metal_ingot]] | 1 | Player kill, 2.5% (+1% per Looting level) |
