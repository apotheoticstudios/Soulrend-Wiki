---
{
  "title": "Magnetron",
  "summary": "A magnetic construct of the Magnetic Caves that builds its body from nearby metal blocks; its level follows the player's.",
  "items": ["alexscaves:spawn_egg_magnetron"],
  "infobox": {
    "item": "alexscaves:spawn_egg_magnetron",
    "model": "alexscaves:magnetron",
    "rows": [
      ["ID", "`alexscaves:magnetron`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "The player's level"],
      ["Health", "921 HP (level 100)"],
      ["Location", "Magnetic Caves"],
      { "heading": "Drops" },
      ["Chance", "Spell scroll (60%)"]
    ]
  }
}
---
<!-- sources:
  mods/alexscaves-2.0.2.jar MagnetronEntity.createAttributes (30 max health, 2 attack damage, 6 armor, 0.2 movement speed, 32 follow range); fields FORMED, BLOCK_COUNT, BLOCK_POSES, ATTACK_POSE, FORM_TIME
  mods/alexscaves-2.0.2.jar data/alexscaves/worldgen/biome/magnetic_caves.json (monster spawn, weight 80, groups of 1)
  mods/alexscaves-2.0.2.jar data/alexscaves/loot_tables/entities/magnetron.json (empty)
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/magnetron_additions_new.json (scroll 60%: Magnetron Deployment)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  config/soulrend_core/boss_damage.toml (not listed)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/the_caverns.snbt (Square Lead Magnet, Magnetic Caves, Defeat Magnetron)
  calc: L100: health 30 × 30.7 = 921; attack 2 × 10.9 = 21.8; armor 6 × 2.089 = 12.5
        L150: health 30 × 45.7 = 1,371; attack 31.8; armor 15.8
        L200: health 30 × 60.7 = 1,821; attack 41.8; armor 19.1
-->
**Magnetron** is a magnetic construct from the Magnetic Caves of Alex's Caves. It forms a body out of nearby blocks before it fights. The Caverns chapter (see [[progression/side-chapters/fabled-realms|Fabled Realms]]), linked from [[progression/act-iii-into-the-flames|Act III]], asks for one kill.

Unlike the other bosses of the chapter, Magnetron is a regular spawning mob with no level floor and no damage cap.

## Spawning

Magnetrons spawn naturally as hostile mobs in the Magnetic Caves, one at a time. The [[item:alex_caves_dimensions:magnetic_caves_key]] key teleports the player there (see [[features/mobs-and-world/alexs-caves-dimensions|Alex's Caves Dimensions]]).

## Stats

Magnetron has no level setting, so its level matches the Soulrend level of the nearest player. The columns use the typical levels of the acts in which players visit the caves (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Act III (100) | Act III-b (150) | Act V (200) |
| --- | --- | --- | --- | --- |
| Health | 30 HP | 921 HP | 1,371 HP | 1,821 HP |
| Attack damage | 2 | 21.8 | 31.8 | 41.8 |
| Armor | 6 | 12.5 | 15.8 | 19.1 |
| Movement speed | 0.2 | 0.2 | 0.2 | 0.2 |
| Follow range | 32 blocks | | | |

## Attacks

Magnetron first gathers blocks around itself to form its body, then attacks with it.

<!-- TODO: attack list and conditions (MagnetronEntity). -->

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:irons_spellbooks:scroll]] (Magnetron Deployment) | 1 | 60% |

Its own loot table is empty; the scroll comes from the Traveloptics table that Soulrend adds to it.

## Quests

**Square Lead Magnet** (The Caverns) asks for the Magnetic Caves key, and **Magnetic Caves** requires entering that dimension (reward: 3 XP levels).

**Defeat Magnetron** requires killing one. Rewards: a roll on the Flawed Gems reward table and 10 XP levels.
