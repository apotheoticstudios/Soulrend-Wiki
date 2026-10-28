---
{
  "title": "Sea Serpent",
  "summary": "Ice and Fire's giant ocean serpent, whose strength depends on its size rather than its level; one optional Act II kill quest.",
  "items": ["iceandfire:spawn_egg_sea_serpent"],
  "infobox": {
    "item": "iceandfire:spawn_egg_sea_serpent",
    "model": "iceandfire:sea_serpent",
    "rows": [
      ["ID", "`iceandfire:sea_serpent`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "Never levels"],
      ["Health", "30–110 HP (Ancient: 180–270 HP)"],
      ["Location", "Overworld oceans"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:iceandfire:sea_serpent_scales_blue]], [[item:iceandfire:sea_serpent_fang]]"],
      ["Rare", "[[item:iceandfire:seaserpent_skull]] (2.5%)"]
    ]
  }
}
---
<!-- sources:
  config/iceandfire-common.toml ("Spawn Sea Serpent Chance" 250, "Sea Serpent Base Health" 20, "Sea Serpent Base Attack Strength" 4, "Sea Serpent Griefing" true)
  config/iceandfire/sea_serpent_biomes.json (Overworld + #minecraft:is_ocean)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntitySeaSerpent.finalizeSpawn (1 in 16 is Ancient with scale 6 + random × 3; otherwise scale 1.5 + random × 4), updateAttributes (health max(10, 20 × scale × ancient), attack max(4, 4 × scale × ancient), speed min(0.25, 0.15 × scale × ancient); ancient modifier 1.5), bakeAttributes (3 armor)
  config/autoleveling-common.toml [Mobs] (iceandfire:sea_serpent never levels; soulrend_mob_leveling's seaserpent.json doesn't match the entity id and has no effect)
  game-data/loot-tables.json iceandfire:entities/sea_serpent (scales and fang tinted to the serpent's color; skull 2.5% +1%/Looting on a player kill)
  config/ftbquests/quests/chapters/act_2.snbt (kill 1 iceandfire:sea_serpent)
  calc: normal health 20 × 1.5 = 30 to 20 × 5.5 = 110, attack 6 to 22; ancient health 20 × 6 × 1.5 = 180 to 20 × 9 × 1.5 = 270, attack 36 to 54
-->
The **Sea Serpent** is a huge serpent from Ice and Fire that lives in the Overworld's oceans. Unlike most mobs in Soulrend, it never levels up: its strength comes from its size, which is rolled when it spawns. Killing one is an optional quest in [[progression/act-ii-first-steps|Act II]]'s Ice and Fire branch.

## Spawning

Sea Serpents spawn in Overworld oceans. Each spawn rolls a size, and 1 in 16 spawns is an **Ancient** Sea Serpent, much larger and 50% stronger. Sea Serpents can break blocks.

## Stats

Sea Serpents are on Auto Leveling's never-level list, so the player's level doesn't affect them.

| Stat | Normal (scale 1.5–5.5) | Ancient (scale 6–9) |
| --- | --- | --- |
| Health | 30–110 HP | 180–270 HP |
| Attack damage | 6–22 | 36–54 |
| Armor | 3 | 3 |

Health is 20 × scale (× 1.5 for Ancient), and attack 4 × scale (× 1.5 for Ancient).

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:iceandfire:sea_serpent_scales_blue]] (in the serpent's color) | 1 | Always |
| [[item:iceandfire:sea_serpent_fang]] | 1 | Always |
| [[item:iceandfire:seaserpent_skull]] | 1 | Player kill, 2.5% (+1% per Looting level) |

## Quests

- **Sea Serpent** (Act II, Ice and Fire branch): kill one. Rewards: a roll on [[progression/reward-tables#Gem tables|Chipped Gems]], 2 XP levels and an [[item:dungeons_and_combat:estus_flask]]. See [[progression/act-ii-first-steps/dread-citadel|Dread Citadel]].
