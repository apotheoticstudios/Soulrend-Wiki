---
{
  "title": "Toxic Caves Mobs",
  "summary": "The radioactive Alex's Caves mobs of the Toxic Caves dimension: Nucleepers and Gammaroaches, around the Brainiac.",
  "aliases": ["Nucleeper", "Gammaroach", "Raycat", "Radgill"],
  "items": ["alexscaves:nucleeper_spawn_egg", "alexscaves:gammaroach_spawn_egg", "alexscaves:raycat_spawn_egg", "alexscaves:radgill_spawn_egg"],
  "infobox": {
    "item": "alexscaves:nucleeper_spawn_egg",
    "rows": [
      ["ID", "`alexscaves:nucleeper`, `gammaroach`, `raycat`, `radgill`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "The player's level"],
      ["Location", "Toxic Caves dimension"],
      { "heading": "Drops" },
      ["Common", "[[item:alexscaves:toxic_paste]], [[item:alexscaves:fissile_core]]"]
    ]
  }
}
---
<!-- sources:
  mods/alexscaves-2.0.2.jar data/alexscaves/worldgen/biome/toxic_caves.json (brainiac 160, gammaroach 55, nucleeper 45, raycat 10, radgill 10, plus vanilla monsters)
  config/alexscaves_biome_generation/toxic_caves.json (disabled_completely); Dimensions of Alex's Caves dimension/toxic_caves.json
  config/ftbquests/quests/chapters/the_caverns.snbt (kill alexscaves:brainiac)
  mods/alexscaves-2.0.2.jar *Entity.createAttributes (Nucleeper 40 health, 2 attack, 4 armor; Gammaroach 14, 2, 0.4 speed; Raycat 24, 1; Radgill 8, 2) and registerGoals (Nucleeper targets players; Gammaroach targets any LivingEntity; Raycat and Radgill have no player target)
  config/serilum/configurableextramobdrops/mobdropconfig.txt (alexscaves:gammaroach: alexscaves:uranium at 0.5)
  game-data/loot-tables.json alexscaves:entities/{nucleeper,gammaroach,raycat,radgill}
  calc: L100: health ×30.7, attack ×10.9, armor ×2.089; L150: ×45.7, ×15.9, ×2.639
-->
The **Toxic Caves** are Alex's Caves' radioactive cave biome. In Soulrend they are their own dimension, reached with a Dimensions of Alex's Caves key in [[progression/act-iii-into-the-flames|Act III]]'s The Caverns chapter. The [[Brainiac]], a quest target and by far the most common spawn there, has its own page.

## Spawning

| Mob | Weight | Attacks players |
| --- | --- | --- |
| [[Brainiac]] | 160 | Yes |
| Gammaroach | 55 | Yes (attacks any creature) |
| Nucleeper | 45 | Yes |
| Raycat | 10 | No |
| Radgill | 10 | No (a fish) |

Vanilla monsters also spawn there.

## Stats

None of them has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act III (100) | Act III-b (150) |
| --- | --- | --- | --- |
| Nucleeper | 40 HP / 2 / 4 | 1,228 HP / 21.8 / 8.4 | 1,828 HP / 31.8 / 10.6 |
| Gammaroach | 14 HP / 2 / 0 | 429.8 HP / 21.8 / 0 | 639.8 HP / 31.8 / 0 |
| Raycat | 24 HP / 1 / 0 | 736.8 HP / 10.9 / 0 | 1,096.8 HP / 15.9 / 0 |

## Drops

| Mob | Drops |
| --- | --- |
| Nucleeper | 0–1 [[item:alexscaves:fissile_core]]; 0–2 [[item:minecraft:gunpowder]] |
| Gammaroach | 0–3 [[item:alexscaves:toxic_paste]]; [[item:alexscaves:uranium]] at 50% (added by Soulrend) |
| Raycat | 0–1 [[item:minecraft:bone]] |
| Radgill | One [[item:alexscaves:radgill]] |
