---
{
  "title": "Spider",
  "summary": "The vanilla wall-climbing spider of the Overworld; one of the Hunter's Journal's three main ladders.",
  "aliases": ["Spiders", "Cave Spider"],
  "items": ["minecraft:spider_spawn_egg", "minecraft:cave_spider_spawn_egg"],
  "infobox": {
    "item": "minecraft:spider_spawn_egg",
    "rows": [
      ["ID", "`minecraft:spider`"],
      ["Act", "[[progression/act-i-awakening|Act I]]"],
      ["Level", "The player's level"],
      ["Health", "59.2 HP (level 10)"],
      ["Location", "Overworld, in the dark"],
      { "heading": "Drops" },
      ["Common", "0–2 [[item:minecraft:string]]"],
      ["Player kill", "[[item:minecraft:spider_eye]]"]
    ]
  }
}
---
<!-- sources:
  Install/libraries/net/minecraft/client/1.20.1-20230612.114412/client-1.20.1-20230612.114412-srg.jar Spider.createAttributes m_33815_ (16 health, 2 attack, 0.3 speed, 16 follow range), CaveSpider.createAttributes m_32267_ (12 health, 2 attack, 0.3 speed)
  game-data/loot-tables.json minecraft:entities/{spider,cave_spider} (unchanged from vanilla)
  config/ftbquests/quests/chapters/hunters_journal.snbt (minecraft:spider 50, 200, 500, 1000)
  config/nether remastered.toml "Nether Essence" (spiders are not listed)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: Spider L10: health 16 × 3.7 = 59.2, attack 2 × 1.9 = 3.8; L40: 203.2, 9.8; L100: 491.2, 21.8
        Cave Spider L10: 12 × 3.7 = 44.4; L40: 152.4; L100: 368.4
-->
The **Spider** is Minecraft's climbing arachnid. In Soulrend it is one of the three mobs on the [[progression/side-chapters/hunters-journal|Hunter's Journal]]'s main ladders, next to Zombies and Skeletons. Unlike them, spiders don't fill bottles of Nether essence, although some quest text says they do.

## Spawning

Spiders spawn in the dark across the Overworld as in vanilla Minecraft. Cave Spiders come from spawners in mineshafts.

## Stats

The Spider has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 16 HP | 59.2 HP | 203.2 HP | 491.2 HP |
| Attack damage | 2 | 3.8 | 9.8 | 21.8 |
| Armor | 0 | 0 | 0 | 0 |
| Movement speed | 0.3 | 0.3 | 0.3 | 0.3 |
| Follow range | 16 blocks | | | |

The Cave Spider has the same attack and speed but 12 base health (44.4 HP at level 10, 152.4 at level 40, 368.4 at level 100).

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:minecraft:string]] | 0–2 | Looting adds 0–1 |
| [[item:minecraft:spider_eye]] | Up to 1 | Player kill; Looting adds 0–1 |

Cave Spiders drop the same.

## Quests

- [[progression/side-chapters/hunters-journal|Hunter's Journal]]: 50, 200, 500 and 1,000 Spider kills. Cave Spiders don't count.
