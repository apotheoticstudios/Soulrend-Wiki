---
{
  "title": "Naga",
  "summary": "A flying sea serpent that spawns at night over stony coasts and spits poison; its level follows the player's.",
  "items": ["mowziesmobs:naga_spawn_egg"],
  "infobox": {
    "item": "mowziesmobs:naga_spawn_egg",
    "rows": [
      ["ID", "`mowziesmobs:naga`"],
      ["Level", "The player's level"],
      ["Health", "111 HP (level 10) to 1,821 HP (level 200)"],
      ["Location", "Stony and mountain coasts, at night"],
      { "heading": "Drops" },
      ["Chance", "[[item:mowziesmobs:naga_fang]]"]
    ]
  }
}
---
<!-- sources:
  mods/mowziesmobs-1.8.2.jar EntityNaga.createAttributes (30 max health, 4 attack damage, 40 follow range)
  mods/mowziesmobs-1.8.2.jar EntityNaga (animations: spit, swoop, dodge, hurt-to-fall, land, get up) and EntityPoisonBall (Poison, 80 ticks)
  config/mowziesmobs-common.toml [mobs.naga] (biome tags is_beach+is_mountain, is_beach+is_hill, whitelist stony_shore; spawn_rate 20, groups 1-2, Overworld, y >= 68, needs darkness, needs sky; multipliers 1.0)
  mods/mowziesmobs-1.8.2.jar data/mowziesmobs/loot_tables/entities/naga.json (fang 0-1, looting +0-1)
  config/paxi/datapacks/soulrend_mob_leveling (no Naga file: level = player level)
  config/autoleveling-common.toml [Attributes]
  config/soulrend_core/boss_damage.toml (not listed)
  calc: health 30 × (1 + 0.3 × (L − 1)); attack 4 × (1 + 0.1 × (L − 1))
        L10: 111, 7.6; L40: 381, 19.6; L100: 921, 43.6; L180: 1,641, 75.6; L200: 1,821, 83.6
-->
**Naga** is a winged sea serpent that circles over rocky coastlines at night. It isn't tied to any act or quest; it spawns naturally in the Overworld, so players meet it at every stage of the game.

The Naga attacks from the air. It spits balls of poison and dives at its target, and it drops the [[item:mowziesmobs:naga_fang]].

## Spawning

Naga spawn like normal hostile mobs, in groups of 1–2:

- in the Overworld, in beach biomes that are also mountains or hills, and on the Stony Shore;
- at y=68 or higher;
- in darkness, with a clear view of the sky;
- away from villages and pillager outposts.

## Stats

The Naga has no level floor or cap, so its level matches the Soulrend level of the nearest player. The columns use the typical level of each act (see [[features/mobs-and-world/mob-levelling|Mob Levelling]]).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) | Act IV (180) | Act V (200) |
| --- | --- | --- | --- | --- | --- | --- |
| Health | 30 HP | 111 HP | 381 HP | 921 HP | 1,641 HP | 1,821 HP |
| Attack damage | 4 | 7.6 | 19.6 | 43.6 | 75.6 | 83.6 |
| Armor | 0 | 0 | 0 | 0 | 0 | 0 |
| Follow range | 40 blocks | | | | | |

## Attacks

| Attack | Effect |
| --- | --- |
| Spit | Fires a ball of poison. A hit inflicts Poison for 4 s. |
| Swoop | Dives at the target. |
| Dodge | Moves out of the way of attacks. |

A Naga that takes damage in the air can fall to the ground, where it stays until it gets back up.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:mowziesmobs:naga_fang]] | 0–1 | Looting adds 0–1. |

The fang brews the Potion of Poison Resistance and crafts the [[item:mowziesmobs:naga_fang_dagger]] and darts.

{{uses mowziesmobs:naga_fang}}
