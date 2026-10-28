---
{
  "title": "Luxtructosaurus",
  "summary": "A level 500–550 volcanic dinosaur summoned at the Volcanic Core in the Primordial Caves with an Ominous Catalyst.",
  "items": ["alexscaves:spawn_egg_luxtructosaurus"],
  "infobox": {
    "item": "alexscaves:spawn_egg_luxtructosaurus",
    "rows": [
      ["ID", "`alexscaves:luxtructosaurus`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "500–550"],
      ["Health", "90,420–99,420 HP"],
      ["Location", "Volcanic Core, Primordial Caves"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:alexscaves:tectonic_shard]] ×7–11"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/alexscaves/leveling_settings/entities/luxtructosaurus.json (starting_level 500, max_level 550, random_level_bonus 50)
  mods/alexscaves-2.0.2.jar LuxtructosaurusEntity.createAttributes (600 max health, 12 attack damage, 20 armor, 1.0 knockback resistance, 0.325 movement speed, 256 follow range); ENRAGED field
  mods/alexscaves-2.0.2.jar assets/alexscaves/sounds (stomp, kick, tail, jump, breath) and LuxtructosaurusSpitParticle
  mods/alexscaves-2.0.2.jar VolcanicCoreBlockEntity (Ominous Catalyst; boss spawn cooldown)
  config/alexscaves-general.toml (luxtructosaurus_block_drop_chance 0.75)
  mods/alexscaves-2.0.2.jar data/alexscaves/loot_tables/entities/luxtructosaurus.json (Tectonic Shard 7-11, looting +0-1)
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/luxtructosaurus_additions_new.json (scroll 60%: Primordial Steed)
  config/soulrend_core/boss_damage.toml (alexscaves:luxtructosaurus=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/the_caverns.snbt (Ancestral Original Mine, Primordial Caves, Defeat Luxtructosaurus)
  calc: L500: health 600 × (1 + 0.3 × 499) = 90,420; attack 12 × 50.9 = 610.8; armor 20 × (1 + 0.011 × 499) = 129.8; cap 18,084 HP/s
        L550: health 600 × 165.7 = 99,420; attack 12 × 55.9 = 670.8; armor 20 × 7.039 = 140.8; cap 19,884 HP/s
-->
**Luxtructosaurus** is a colossal dinosaur of magma and stone from the Primordial Caves, the prehistoric cave biome of Alex's Caves. It is a boss of The Caverns chapter (see [[progression/side-chapters/fabled-realms|Fabled Realms]]), which is linked from [[progression/act-iii-into-the-flames|Act III]]. With a level of 500 or more, it is the highest-level boss of the chapter.

## Location

The Luxtructosaurus is summoned at a **Volcanic Core** in the Primordial Caves by using an [[item:alexscaves:ominous_catalyst]] on it. The [[item:alex_caves_dimensions:primordial_caves_key]] key teleports the player to the Primordial Caves (see [[features/mobs-and-world/alexs-caves-dimensions|Alex's Caves Dimensions]]).

{{recipes alexscaves:ominous_catalyst}}

## Stats

The Luxtructosaurus's level is at least 500, plus a random 0–50, up to 550 (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Level 500 | Level 550 |
| --- | --- | --- | --- |
| Health | 600 HP | **90,420 HP** (45,210 hearts) | 99,420 HP |
| Attack damage | 12 | **610.8** | 670.8 |
| Armor | 20 | **129.8** | 140.8 |
| Knockback resistance | 100% | 100% | 100% |
| Movement speed | 0.325 | 0.325 | 0.325 |
| Follow range | 256 blocks | | |
| Damage cap | | 20% per second (18,084 HP), at least 5 s | 20% per second (19,884 HP), at least 5 s |

Blocks it destroys drop as items 75% of the time.

## Attacks

- **Stomp**
- **Kick**
- **Tail swipe**
- **Jump**
- **Breath attack**
- **Spit**

It can become enraged during the fight.

<!-- TODO: attack conditions and cooldowns (LuxtructosaurusMeleeGoal). -->

## Strategy

- **Armor piercing matters.** At about 130 armor, plain damage is heavily reduced.
- **Sustained damage beats burst.** The damage cap blocks anything above 20% of its maximum health in a second.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:alexscaves:tectonic_shard]] | 7–11 | Always; Looting adds 0–1 |
| [[item:irons_spellbooks:scroll]] (Primordial Steed) | 1 | 60% |

## Quests

**Ancestral Original Mine** (The Caverns) asks for the Primordial Caves key, and **Primordial Caves** requires entering that dimension (reward: 3 XP levels).

**Defeat Luxtructosaurus** requires killing it. Rewards: a roll on the Flawed Gems reward table and 10 XP levels.
