---
{
  "title": "Candy Cavity Mobs",
  "summary": "The candy creatures of the Candy Cavity dimension: Caniacs, Gumbeepers and Caramel Cubes that attack, and the giant Gum Worm.",
  "aliases": ["Caniac", "Gumbeeper", "Caramel Cube", "Gummy Bear", "Gum Worm", "Candicorn"],
  "items": ["alexscaves:caniac_spawn_egg", "alexscaves:gumbeeper_spawn_egg", "alexscaves:caramel_cube_spawn_egg", "alexscaves:gummy_bear_spawn_egg", "alexscaves:gum_worm_spawn_egg", "alexscaves:candicorn_spawn_egg"],
  "infobox": {
    "item": "alexscaves:caniac_spawn_egg",
    "rows": [
      ["ID", "`alexscaves:caniac`, `gumbeeper`, `caramel_cube`, `gummy_bear`, `gum_worm`, `candicorn`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "The player's level"],
      ["Location", "Candy Cavity dimension"],
      { "heading": "Drops" },
      ["Common", "[[item:alexscaves:candy_cane]], [[item:alexscaves:gumball_pile]], [[item:alexscaves:caramel]]"]
    ]
  }
}
---
<!-- sources:
  mods/alexscaves-2.0.2.jar data/alexscaves/worldgen/biome/candy_cavity.json (caniac 100, gumbeeper 100, candicorn 100, gummy_bear 100, gum_worm 80, caramel_cube 40, sweetish_fish 10)
  config/alexscaves_biome_generation/candy_cavity.json (disabled_completely); Dimensions of Alex's Caves dimension/candy_cavity.json; the Candy Cavity key comes only from Alex's Caves' cave_key recipe (docs/instance-guide.md)
  mods/alexscaves-2.0.2.jar *Entity.createAttributes (Caniac 38 health, 2 attack, 48 follow; Gumbeeper 14, 4, 4 armor; Caramel Cube 4, 2; Gummy Bear 36, 4; Gum Worm 150, 9, 10 armor, 128 follow; Candicorn 30, 6); registerGoals (Caniac, Gumbeeper, Caramel Cube target players; Gum Worm only HurtByTargetGoal; Candicorn defends its young)
  game-data/loot-tables.json alexscaves:entities/{caniac,gumbeeper,caramel_cube,gummy_bear,gum_worm,candicorn}
  calc: L100: health ×30.7, attack ×10.9, armor ×2.089; L150: ×45.7, ×15.9, ×2.639
-->
The **Candy Cavity** is Alex's Caves' sweets-themed cave biome. In Soulrend it is its own dimension, reached in [[progression/act-iii-into-the-flames|Act III]]'s The Caverns chapter with a key that only Alex's Caves' own cave-key recipe makes. No boss lives there, and no quest asks for its mobs.

## Spawning

| Mob | Weight | Attacks players |
| --- | --- | --- |
| Caniac | 100 | Yes |
| Gumbeeper | 100 | Yes |
| Gummy Bear | 100 | Only when attacked (hunts Sweetish Fish and Husks) |
| Candicorn | 100 | Only to defend its young |
| Gum Worm | 80 | Only when attacked |
| Caramel Cube | 40 | Yes |
| Sweetish Fish | 10 | No |

## Stats

None of them has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act III (100) | Act III-b (150) |
| --- | --- | --- | --- |
| Caniac | 38 HP / 2 / 0 | 1,166.6 HP / 21.8 / 0 | 1,736.6 HP / 31.8 / 0 |
| Gumbeeper | 14 HP / 4 / 4 | 429.8 HP / 43.6 / 8.4 | 639.8 HP / 63.6 / 10.6 |
| Caramel Cube | 4 HP / 2 / 0 | 122.8 HP / 21.8 / 0 | 182.8 HP / 31.8 / 0 |
| Gum Worm | 150 HP / 9 / 10 | 4,605 HP / 98.1 / 20.9 | 6,855 HP / 143.1 / 26.4 |

The Gum Worm notices threats from 128 blocks away.

## Drops

| Mob | Drops |
| --- | --- |
| Caniac | 0–2 [[item:alexscaves:candy_cane]]; 0–1 [[item:alexscaves:sharpened_candy_cane]] |
| Gumbeeper | 0–2 [[item:alexscaves:gumball_pile]]; 0–1 [[item:minecraft:gunpowder]] |
| Caramel Cube | 0–2 [[item:alexscaves:caramel]] |
| Gummy Bear | 0–3 [[item:alexscaves:gelatin_red]]; 0–1 [[item:alexscaves:sweetish_fish_red]] |
| Gum Worm | 2–4 [[item:alexscaves:sweet_tooth]] |
| Candicorn | 0–1 [[item:alexscaves:sweet_puff]] |
