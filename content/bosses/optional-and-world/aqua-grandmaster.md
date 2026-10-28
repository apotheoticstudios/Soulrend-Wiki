---
{
  "title": "Aqua Grandmaster",
  "summary": "A Traveloptics water mage that spawns rarely on beaches and drops the Aqua Rune; its level follows the player's.",
  "items": ["traveloptics:aqua_grandmaster_spawn_egg"],
  "infobox": {
    "item": "traveloptics:aqua_grandmaster_spawn_egg",
    "rows": [
      ["ID", "`traveloptics:aqua_grandmaster`"],
      ["Level", "The player's level"],
      ["Health", "1,524 HP (level 40)"],
      ["Location", "Beaches"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:traveloptics:aqua_rune]], Aqua spell scroll"]
    ]
  }
}
---
<!-- sources:
  mods/traveloptics-6.3.0-1.20.1.jar AquaGrandmasterEntity.prepareAttributes (120 max health, 3 attack damage, 0.25 movement speed, 64 follow range); spells: Aqua Missiles, Bubble Spray, Flood Slash, Hydroshot, Rainfall, Tidal Grasp, Tsunami, Ascension, Ball Lightning
  mods/traveloptics-6.3.0-1.20.1.jar data/traveloptics/forge/biome_modifier/spawn_aqua_grandmaster.json (#minecraft:is_beach, weight 1, groups of 1)
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/aqua_grandmaster.json (Aqua Rune; Arcane Essence 0-10, Looting +0-2; Aqua scroll quality 0.15-0.65; 1-3 rolls of good ink)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  config/soulrend_core/boss_damage.toml (not listed)
  config/autoleveling-common.toml [Attributes]
  calc: health 120 × (1 + 0.3 × (L − 1)); attack 3 × (1 + 0.1 × (L − 1))
        L10: 444, 5.7; L40: 1,524, 14.7; L100: 3,684, 32.7
-->
**Aqua Grandmaster** is a Traveloptics mage of the Aqua school of magic. It spawns rarely on beaches and drops the [[item:traveloptics:aqua_rune]] used for Aqua magic. No quest requires killing one.

## Spawning

Aqua Grandmasters spawn naturally in beach biomes, one at a time, with a spawn weight of 1 (rare).

## Stats

The Aqua Grandmaster has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 120 HP | 444 HP | 1,524 HP | 3,684 HP |
| Attack damage | 3 | 5.7 | 14.7 | 32.7 |
| Movement speed | 0.25 | 0.25 | 0.25 | 0.25 |
| Follow range | 64 blocks | | | |

## Attacks

| Spells | |
| --- | --- |
| Aqua Missiles, Bubble Spray, Hydroshot | Ranged water attacks |
| Flood Slash, Tidal Grasp, Tsunami, Rainfall | |
| Ascension, Ball Lightning | Lightning spells |

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:traveloptics:aqua_rune]] | 1 | Always |
| [[item:irons_spellbooks:scroll]] (random Aqua spell) | 1 | Always |
| [[item:irons_spellbooks:arcane_essence]] | 0–10 | Always rolled; Looting adds 0–2 |
| Ink | 1–3 | Rolls on Iron's Spellbooks' good ink table |
