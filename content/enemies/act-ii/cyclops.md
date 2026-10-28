---
{
  "title": "Cyclops",
  "summary": "Ice and Fire's one-eyed giant that guards sheep in seaside caves and wanders the plains; one optional Act II kill quest.",
  "aliases": ["Cyclopes"],
  "items": ["iceandfire:spawn_egg_cyclops"],
  "infobox": {
    "item": "iceandfire:spawn_egg_cyclops",
    "rows": [
      ["ID", "`iceandfire:cyclops`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "The player's level"],
      ["Health", "1,905 HP (level 40)"],
      ["Location", "Cyclops caves on beaches; plains"],
      { "heading": "Drops" },
      ["Common", "[[item:minecraft:leather]], [[item:minecraft:mutton]], [[item:minecraft:white_wool]]"],
      ["Player kill", "[[item:iceandfire:cyclops_eye]] (50%)"]
    ]
  }
}
---
<!-- sources:
  config/iceandfire-common.toml ("Spawn Cyclops Cave Chance" 90, "Spawn Wandering Cyclops Chance" 100, "Cyclops Max Health" 150, "Cyclops Attack Strength" 15, "Cyclops Bite Strength" 40, "Cyclops Griefing" true)
  config/iceandfire/cyclops_cave_biomes.json (Overworld beaches that aren't ocean), wandering_cyclops_biomes.json (Overworld plains)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityCyclops.bakeAttributes (health and attack from config, 20 armor, 0.35 speed, 32 follow range)
  game-data/loot-tables.json iceandfire:entities/cyclops
  config/ftbquests/quests/chapters/act_2.snbt (kill 1 iceandfire:cyclops)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L10: health 150 × 3.7 = 555, attack 15 × 1.9 = 28.5, armor 20 × 1.099 = 22; L40: 1,905, 73.5, 28.6; L100: 4,605, 163.5, 41.8
-->
The **Cyclops** is a giant one-eyed shepherd from Ice and Fire. It keeps a flock of sheep in a seaside cave and attacks anyone who comes near, and some Cyclopes wander the plains instead. It has heavy armor and a crushing attack. Killing one is an optional quest in [[progression/act-ii-first-steps|Act II]]'s Ice and Fire branch.

## Spawning

- **Cyclops caves** generate on Overworld beaches, with a Cyclops and its sheep inside.
- **Wandering Cyclopes** appear in Overworld plains.

Cyclopes can break blocks.

## Stats

The Cyclops has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Its health and attack come from Ice and Fire's config (150 and 15); its bite uses a separate strength of 40.

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 150 HP | 555 HP | 1,905 HP | 4,605 HP |
| Attack damage | 15 | 28.5 | 73.5 | 163.5 |
| Armor | 20 | 22 | 28.6 | 41.8 |
| Movement speed | 0.35 | | | |
| Follow range | 32 blocks | | | |

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:minecraft:leather]] | 1–10 | Looting adds 0–2 |
| [[item:minecraft:mutton]] | 0–10 | Looting adds 0–2 |
| [[item:minecraft:white_wool]] | 0–5 | Looting adds 0–2 |
| [[item:iceandfire:cyclops_eye]] | 1 | Player kill, 50% (+20% per Looting level) |
| [[item:iceandfire:cyclops_skull]] | 1 | Player kill, 2.5% (+1% per Looting level) |

{{uses iceandfire:cyclops_eye}}

## Quests

- **Cyclops** (Act II, Ice and Fire branch): kill one. Rewards: a roll on [[progression/reward-tables#Gem tables|Chipped Gems]], 2 XP levels and an [[item:dungeons_and_combat:estus_flask]]. See [[progression/act-ii-first-steps/dread-citadel|Dread Citadel]].
