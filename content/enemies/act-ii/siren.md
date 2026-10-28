---
{
  "title": "Siren (Enemy)",
  "summary": "Ice and Fire's singing sea creature of ocean islands and the Sirens Cove; an Act II quest asks for three.",
  "aliases": ["Siren (Ice and Fire)"],
  "items": ["iceandfire:spawn_egg_siren"],
  "infobox": {
    "item": "iceandfire:spawn_egg_siren",
    "rows": [
      ["ID", "`iceandfire:siren`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "The player's level"],
      ["Health", "635 HP (level 40)"],
      ["Location", "Overworld oceans; the Sirens Cove"],
      { "heading": "Drops" },
      ["Common", "[[item:minecraft:prismarine_crystals]], [[item:minecraft:prismarine_shard]], [[item:iceandfire:shiny_scales]]"],
      ["Rare", "[[item:iceandfire:siren_tear]] (2.5%)"]
    ]
  }
}
---
<!-- sources:
  config/iceandfire-common.toml ("Siren Max Health" 50, "Spawn Sirens Chance" 400, "Siren Max Sing Time" 12000, "Siren Time Between Songs" 2000, "Use Siren Shader" true)
  config/iceandfire/siren_biomes.json (Overworld + #minecraft:is_ocean)
  mods/idas_forge-1.13.0+1.20.1.jar data/idas/worldgen/structure/iceandfire/sirens_cove.json (needs iceandfire; #idas:has_structure/sirens_cove_biomes)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntitySiren.bakeAttributes (health from config, 6 attack, 0.25 speed, 16 follow range)
  game-data/loot-tables.json iceandfire:entities/siren
  config/ftbquests/quests/chapters/act_2.snbt (Sirens Cove structure task; kill 3 iceandfire:siren)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L10: health 50 × 3.7 = 185, attack 6 × 1.9 = 11.4; L40: 635, 29.4; L100: 1,535, 65.4
-->
The **Siren** is a sea creature from Ice and Fire that sits on rocks in the ocean and sings. Its song lures players toward it, and an angered Siren fights back. [[progression/act-ii-first-steps|Act II]]'s Ice and Fire branch sends players to the **Sirens Cove** to kill three of them. Not to be confused with the [[origins/races/siren|Siren]] race.

## Spawning

- Sirens spawn on small islands in Overworld oceans.
- The **Sirens Cove**, a structure from Integrated Dungeons and Structures, holds several and is the quest's target.

A Siren sings for up to 10 minutes (12,000 ticks) at a time, with at least 100 seconds (2,000 ticks) between songs.

## Stats

The Siren has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Its health comes from Ice and Fire's config (50).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 50 HP | 185 HP | 635 HP | 1,535 HP |
| Attack damage | 6 | 11.4 | 29.4 | 65.4 |
| Armor | 0 | 0 | 0 | 0 |
| Movement speed | 0.25 | | | |

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:minecraft:prismarine_crystals]] | 1–5 | Looting adds 0–2 |
| [[item:minecraft:prismarine_shard]] | 0–3 | Looting adds 0–2 |
| [[item:iceandfire:shiny_scales]] | 1–5 | Looting adds 0–2 |
| [[item:iceandfire:siren_tear]] | 1 | Player kill, 2.5% (+1% per Looting level) |

## Quests

- **Sirens Cove** (Act II, Ice and Fire branch): find the structure. Reward: a roll on Structure Loot.
- **Sirens**: kill 3. Rewards: a roll on [[progression/reward-tables#Gem tables|Chipped Gems]] and 3 [[item:dungeons_and_combat:estus_flask]].

See [[progression/act-ii-first-steps/dread-citadel|Dread Citadel]].
