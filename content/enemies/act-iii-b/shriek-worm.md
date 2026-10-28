---
{
  "title": "Shriek Worm",
  "summary": "Deeper and Darker's giant sculk worm, summoned by walking on Infested Sculk; Soulrend gives it a boss bar and makes it immune to attacks from more than 7 blocks away.",
  "items": ["deeperdarker:shriek_worm_spawn_egg"],
  "infobox": {
    "item": "deeperdarker:shriek_worm_spawn_egg",
    "rows": [
      ["ID", "`deeperdarker:shriek_worm`"],
      ["Act", "[[progression/act-iii-b-deeper-and-darker|Act III-b]]"],
      ["Level", "The player's level"],
      ["Health", "4,570 HP (level 150)"],
      ["Location", "Summoned from [[item:deeperdarker:infested_sculk]]"],
      ["Drops", "None"]
    ]
  }
}
---
<!-- sources:
  mods/deeperdarker-forge-1.20.1-1.3.3.jar InfestedSculkBlock.stepOn (spawns DDEntities.SHRIEK_WORM), InfestedSculkBlock.spawnAfterBreak (spawns a Sculk Leech)
  mods/deeperdarker-forge-1.20.1-1.3.3.jar ShriekWorm attributes (100 health, 7 attack, 0 movement speed, 1 knockback resistance)
  kubejs/server_scripts/progression/deeperdarker.js (blue notched "Shriek Worm" boss bar shown to all players; damage from attackers more than 7 blocks away is cancelled with the message "Too far away! The creature's armor deflects your strikes.")
  game-data/loot-tables.json deeperdarker:entities/shriek_worm (empty)
  config/ftbquests/quests/chapters/the_deep_dark.snbt ("Kill a Shriek Worm": "Found by stepping on Infested Sculk"; 20 XP levels)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level); config/soulrend_core/boss_damage.toml (not listed)
  calc: L100: 100 × 30.7 = 3,070, 7 × 10.9 = 76.3; L150: 4,570, 111.3; L180: 5,470, 132.3
-->
The **Shriek Worm** is a huge sculk worm from Deeper and Darker that erupts from the ground when a player walks on Infested Sculk. It doesn't move, but it strikes anything nearby. Soulrend's KubeJS script gives it a boss bar and armor against ranged attacks: only attackers within 7 blocks can hurt it. The Fabled Realms chapter, part of [[progression/act-iii-b-deeper-and-darker|Act III-b]]'s exploration, has a quest to kill one.

## Spawning

Walking on an [[item:deeperdarker:infested_sculk]] block can summon a Shriek Worm. Breaking Infested Sculk instead releases a [[enemies/act-iii-b/otherside-creatures|Sculk Leech]].

## Mechanics

- **Boss bar:** a blue "Shriek Worm" boss bar appears for every player while one is alive.
- **Range limit:** damage from any attacker (player, projectile owner or mob) more than 7 blocks away is cancelled, and the player sees "Too far away! The creature's armor deflects your strikes." Bows and spells only work from close range.

## Stats

The Shriek Worm has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Act III (100) | Act III-b (150) | Act IV (180) |
| --- | --- | --- | --- | --- |
| Health | 100 HP | 3,070 HP | 4,570 HP | 5,470 HP |
| Attack damage | 7 | 76.3 | 111.3 | 132.3 |
| Knockback resistance | 100% | | | |
| Movement speed | 0 (stationary) | | | |

## Drops

Its loot table is empty, so it drops nothing.

## Quests

- **Kill a Shriek Worm** ([[progression/side-chapters/fabled-realms|Fabled Realms]]): reward 20 XP levels.
