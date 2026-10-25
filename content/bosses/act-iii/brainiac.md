---
{
  "title": "Brainiac",
  "summary": "A mutant of the Toxic Caves that throws and drinks barrels; its level follows the player's.",
  "items": ["alexscaves:spawn_egg_brainiac"],
  "infobox": {
    "item": "alexscaves:spawn_egg_brainiac",
    "rows": [
      ["ID", "`alexscaves:brainiac`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "The player's level"],
      ["Health", "1,228 HP (level 100)"],
      ["Location", "Toxic Caves"],
      { "heading": "Drops" },
      ["Chance", "[[item:alexscaves:green_soylent]], [[item:alexscaves:charred_remnant]]"]
    ]
  }
}
---
<!-- sources:
  mods/alexscaves-2.0.2.jar BrainiacEntity.createAttributes (40 max health, 5 attack damage, 8 armor, 0.25 movement speed, 32 follow range); animation fields (throw barrel, drink barrel, bite, smash; tongue)
  mods/alexscaves-2.0.2.jar data/alexscaves/worldgen/biome/toxic_caves.json (monster spawn, weight 160, groups of 1-2)
  mods/alexscaves-2.0.2.jar data/alexscaves/loot_tables/entities/brainiac.json (Green Soylent -2..1, Rotten Flesh 0-2, Charred Remnant 0-1, each Looting +0-1)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  config/soulrend_core/boss_damage.toml (not listed)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/the_caverns.snbt (Emerald Arsenic Copper Uranium, Toxic Caves, Defeat Brainiac)
  calc: L100: health 40 × 30.7 = 1,228; attack 5 × 10.9 = 54.5; armor 8 × 2.089 = 16.7
        L150: health 40 × 45.7 = 1,828; attack 79.5; armor 21.1
        L200: health 40 × 60.7 = 2,428; attack 104.5; armor 25.5
-->
**Brainiac** is a mutant from the Toxic Caves of Alex's Caves that fights with barrels and a long tongue. The Caverns chapter (see [[progression/side-chapters/fabled-realms|Fabled Realms]]), linked from [[progression/act-iii-into-the-flames|Act III]], asks for one kill.

Unlike the other bosses of the chapter, Brainiac is a regular spawning mob with no level floor and no damage cap.

## Spawning

Brainiacs spawn naturally as hostile mobs in the Toxic Caves, in groups of 1–2. The [[item:alex_caves_dimensions:toxic_caves_key]] key teleports the player there (see [[features/mobs-and-world/alexs-caves-dimensions|Alex's Caves Dimensions]]).

## Stats

Brainiac has no level setting, so its level matches the Soulrend level of the nearest player. The columns use the typical levels of the acts in which players visit the caves (see [[features/mobs-and-world/mob-levelling|Mob Levelling]]).

| Stat | Base | Act III (100) | Act III-b (150) | Act V (200) |
| --- | --- | --- | --- | --- |
| Health | 40 HP | 1,228 HP | 1,828 HP | 2,428 HP |
| Attack damage | 5 | 54.5 | 79.5 | 104.5 |
| Armor | 8 | 16.7 | 21.1 | 25.5 |
| Movement speed | 0.25 | 0.25 | 0.25 | 0.25 |
| Follow range | 32 blocks | | | |

## Attacks

| Attack | Notes |
| --- | --- |
| Bite | |
| Smash | |
| Tongue | |
| Throw barrel | |
| Drink barrel | |

<!-- TODO: attack conditions and effects (BrainiacEntity). -->

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:alexscaves:green_soylent]] | 1 | 25%; Looting adds 0–1 |
| [[item:minecraft:rotten_flesh]] | 0–2 | Always rolled; Looting adds 0–1 |
| [[item:alexscaves:charred_remnant]] | 0–1 | Always rolled; Looting adds 0–1 |

## Quests

**Emerald Arsenic Copper Uranium** (The Caverns) asks for the Toxic Caves key, and **Toxic Caves** requires entering that dimension (reward: 3 XP levels).

**Defeat Brainiac** requires killing one. Rewards: a roll on the Flawed Gems reward table and 10 XP levels.
