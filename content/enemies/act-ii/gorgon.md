---
{
  "title": "Gorgon",
  "summary": "Ice and Fire's snake-haired guardian of the Gorgon Temple, whose gaze turns players to stone; one optional Act II kill quest.",
  "items": ["iceandfire:spawn_egg_gorgon"],
  "infobox": {
    "item": "iceandfire:spawn_egg_gorgon",
    "model": "iceandfire:gorgon",
    "rows": [
      ["ID", "`iceandfire:gorgon`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "The player's level"],
      ["Health", "1,270 HP (level 40)"],
      ["Location", "Gorgon Temples on beaches"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:iceandfire:witherbone]]"]
    ]
  }
}
---
<!-- sources:
  config/iceandfire-common.toml ("Generate Gorgon Temple" true, "Gorgon Max Health" 100)
  config/iceandfire/gorgon_temple_biomes.json (Overworld beaches that aren't ocean)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityGorgon.bakeAttributes (health from config, 3 attack, 1 armor, 0.25 speed, 16 follow range); EntityGorgon.aiStep (isEntityLookingAt, EntityStoneStatue.buildStatueEntity, repeated Blindness checks)
  config/paxi/datapacks/soulrend_loot/data/iceandfire/loot_tables/entities/gorgon.json (one Witherbone; replaces Ice and Fire's Gorgon Head drop, so the Gorgon Head is unobtainable)
  config/ftbquests/quests/chapters/act_2.snbt (Gorgon Temple structure task; kill 1 iceandfire:gorgon)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L10: health 100 × 3.7 = 370, attack 3 × 1.9 = 5.7; L40: 1,270, 14.7; L100: 3,070, 32.7
-->
The **Gorgon** is Ice and Fire's snake-haired guardian of the Gorgon Temple. Looking at it turns a player into a stone statue. [[progression/act-ii-first-steps|Act II]]'s Ice and Fire branch has an optional quest to find the temple and kill its Gorgon.

## Spawning

The Gorgon lives in the **Gorgon Temple**, which generates on Overworld beaches.

## Gaze

A player who looks at the Gorgon is turned to stone. The Gorgon checks for Blindness before using its gaze, so fighting it while blinded is the usual counter.

> [!CAUTION]
> Being turned to stone is fatal. Look away from the Gorgon or fight it under Blindness.

## Stats

The Gorgon has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Its health comes from Ice and Fire's config (100).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 100 HP | 370 HP | 1,270 HP | 3,070 HP |
| Attack damage | 3 | 5.7 | 14.7 | 32.7 |
| Armor | 1 | 1.1 | 1.4 | 2.1 |
| Movement speed | 0.25 | | | |

## Drops

Soulrend replaces the Gorgon's loot table: it always drops one [[item:iceandfire:witherbone]], and nothing else. Ice and Fire's Gorgon Head can't be obtained in Soulrend.

## Quests

- **Gorgon Temple** (Act II, Ice and Fire branch): find the structure. Reward: a roll on Structure Loot.
- **Gorgon**: kill one. Rewards: a roll on [[progression/reward-tables#Gem tables|Chipped Gems]] and 2 [[item:dungeons_and_combat:estus_flask]].

See [[progression/act-ii-first-steps/dread-citadel|Dread Citadel]].
