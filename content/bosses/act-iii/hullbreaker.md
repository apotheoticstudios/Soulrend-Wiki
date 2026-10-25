---
{
  "title": "Hullbreaker",
  "summary": "A level 400–440 deep-sea monster of the Abyssal Chasm; projectiles deal it only 65% damage.",
  "items": ["alexscaves:spawn_egg_hullbreaker"],
  "infobox": {
    "item": "alexscaves:spawn_egg_hullbreaker",
    "rows": [
      ["ID", "`alexscaves:hullbreaker`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "400–440"],
      ["Health", "48,280–53,080 HP"],
      ["Location", "Abyssal Chasm, underwater"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:alexscaves:enigmatic_engine]], [[item:alexscaves:immortal_embryo]], [[item:traveloptics:hullbreaker_scales]] ×6–10"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/alexscaves/leveling_settings/entities/hullbreaker.json (starting_level 400, max_level 440, random_level_bonus 40)
  mods/alexscaves-2.0.2.jar HullbreakerEntity.createAttributes (400 max health, 16 attack damage, 0.3 movement speed); animation fields (bite, bash, puzzle); HullbreakerEntity.hurt (projectile damage × 0.65)
  mods/alexscaves-2.0.2.jar data/alexscaves/worldgen/biome/abyssal_chasm.json (underground_water_creature spawn, weight 20, groups of 1)
  mods/alexscaves-2.0.2.jar data/alexscaves/loot_tables/entities/hullbreaker.json
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/hullbreaker_additions_new.json (scroll 40%: Echo Of The Abyss; Hullbreaker Scales 6-10)
  config/soulrend_core/boss_damage.toml (alexscaves:hullbreaker=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/the_caverns.snbt (Abyssal Reef, Abyssal Chasm, Defeat Hullbreaker)
  calc: L400: health 400 × 120.7 = 48,280; attack 16 × 40.9 = 654.4; cap 9,656 HP/s
        L440: health 400 × 132.7 = 53,080; attack 16 × 44.9 = 718.4; cap 10,616 HP/s
-->
**Hullbreaker** is a huge predator of the Abyssal Chasm, the deep-sea cave biome of Alex's Caves. It is a boss of The Caverns chapter (see [[progression/side-chapters/fabled-realms|Fabled Realms]]), which is linked from [[progression/act-iii-into-the-flames|Act III]].

## Location

The Hullbreaker spawns naturally in the water of the Abyssal Chasm, one at a time. The [[item:alex_caves_dimensions:abyssal_chasm_key]] key teleports the player to the Abyssal Chasm (see [[features/mobs-and-world/alexs-caves-dimensions|Alex's Caves Dimensions]]).

## Stats

The Hullbreaker's level is at least 400, plus a random 0–40, up to 440 (see [[features/mobs-and-world/mob-levelling|Mob Levelling]]).

| Stat | Base | Level 400 | Level 440 |
| --- | --- | --- | --- |
| Health | 400 HP | **48,280 HP** (24,140 hearts) | 53,080 HP |
| Attack damage | 16 | **654.4** | 718.4 |
| Armor | 0 | 0 | 0 |
| Movement speed | 0.3 | 0.3 | 0.3 |
| Damage cap | | 20% per second (9,656 HP), at least 5 s | 20% per second (10,616 HP), at least 5 s |

Projectiles deal it only 65% of their damage.

## Attacks

- **Bite**
- **Bash**

<!-- TODO: attack conditions and cooldowns. -->

## Strategy

- **Fight it in its element.** It lives underwater, so water breathing and underwater mobility are needed.
- **Melee and spells beat projectiles.** Projectiles lose 35% of their damage against it.
- **Sustained damage beats burst.** The damage cap blocks anything above 20% of its maximum health in a second.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:alexscaves:enigmatic_engine]] | 1 | Always |
| [[item:alexscaves:immortal_embryo]] | 1 | Always |
| [[item:traveloptics:hullbreaker_scales]] | 6–10 | Always |
| [[item:minecraft:copper_ingot]] | 2–8 | Always |
| [[item:alexscaves:sea_glass_shards]] | 2–5 | Always |
| [[item:alexscaves:scrap_metal]] | 2–4 | Always |
| [[item:irons_spellbooks:scroll]] (Echo Of The Abyss) | 1 | 40% |

## Quests

**Abyssal Reef** (The Caverns) asks for the Abyssal Chasm key, and **Abyssal Chasm** requires entering that dimension (reward: 3 XP levels).

**Defeat Hullbreaker** requires killing it. Rewards: a roll on the Flawed Gems reward table and 10 XP levels.
