---
{
  "title": "Ghost",
  "summary": "Ice and Fire's spirit that haunts its Graveyard structures; one optional Act II kill quest, and a guaranteed Cursed Soul drop.",
  "items": ["iceandfire:spawn_egg_ghost"],
  "infobox": {
    "item": "iceandfire:spawn_egg_ghost",
    "model": "iceandfire:ghost",
    "rows": [
      ["ID", "`iceandfire:ghost`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "The player's level"],
      ["Health", "381 HP (level 40)"],
      ["Location", "Ice and Fire Graveyards; PvP deaths"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:dungeons_and_combat:cursed_soul]]"],
      ["Common", "0–1 [[item:iceandfire:ectoplasm]]"]
    ]
  }
}
---
<!-- sources:
  config/iceandfire-common.toml ("Generate Graveyards" true, "Ghost Max Health" 30, "Ghost Attack Strength" 3, "Ghost Spawn from PvP deaths" true)
  config/iceandfire/graveyard_biomes.json (Overworld land: not water, beach or underground)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityGhost.bakeAttributes (health and attack from config, 1 armor, 0.15 speed, 64 follow range)
  game-data/loot-tables.json iceandfire:entities/ghost (0-1 Phantasm, Looting +0-1; Phantasmal Ingot 2.5% +1%/Looting on a player kill)
  config/serilum/configurableextramobdrops/mobdropconfig.txt (iceandfire:ghost: one dungeons_and_combat:cursed_soul, drop chance 1.0)
  config/ftbquests/quests/chapters/act_2.snbt (Graveyard structure task; kill 1 iceandfire:ghost)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L10: health 30 × 3.7 = 111, attack 3 × 1.9 = 5.7; L40: 381, 14.7; L100: 921, 32.7
-->
The **Ghost** is a spirit from Ice and Fire that haunts its Graveyard structures. Soulrend makes every Ghost drop a [[item:dungeons_and_combat:cursed_soul]], and an optional quest in [[progression/act-ii-first-steps|Act II]]'s Ice and Fire branch asks for one kill. Not to be confused with The Graveyard mod's undead (see [[enemies/misc/graveyard-undead|Graveyard Undead]]).

## Spawning

- Ghosts haunt Ice and Fire's **Graveyards**, which generate on Overworld land. The quest's subtitle warns: "Don't open the CHEST".
- A Ghost also rises where a player is killed by another player.

## Stats

The Ghost has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Its health and attack come from Ice and Fire's config (30 and 3).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 30 HP | 111 HP | 381 HP | 921 HP |
| Attack damage | 3 | 5.7 | 14.7 | 32.7 |
| Armor | 1 | 1.1 | 1.4 | 2.1 |
| Movement speed | 0.15 | | | |
| Follow range | 64 blocks | | | |

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:dungeons_and_combat:cursed_soul]] | 1 | Always (added by Soulrend) |
| [[item:iceandfire:ectoplasm]] | 0–1 | Looting adds 0–1 |
| [[item:iceandfire:ghost_ingot]] | 1 | Player kill, 2.5% (+1% per Looting level) |

## Quests

- **Graveyard** (Act II, Ice and Fire branch): find the structure. Reward: 1 XP level.
- **Ghost**: kill one. Rewards: a roll on [[progression/reward-tables#Gem tables|Cracked Gems]] and an [[item:dungeons_and_combat:estus_flask]].

See [[progression/act-ii-first-steps/dread-citadel|Dread Citadel]].
