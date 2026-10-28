---
{
  "title": "Magnetic Caves Mobs",
  "summary": "The Alex's Caves mobs of the Magnetic Caves dimension: Teletors, Boundroids and Ferrouslimes, around the Magnetron.",
  "aliases": ["Teletor", "Boundroid", "Ferrouslime", "Notor"],
  "items": ["alexscaves:teletor_spawn_egg", "alexscaves:boundroid_spawn_egg", "alexscaves:ferrouslime_spawn_egg", "alexscaves:notor_spawn_egg"],
  "infobox": {
    "item": "alexscaves:boundroid_spawn_egg",
    "model": ["alexscaves:teletor", "alexscaves:boundroid", "alexscaves:ferrouslime", "alexscaves:notor"],
    "rows": [
      ["ID", "`alexscaves:teletor`, `boundroid`, `ferrouslime`, `notor`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "The player's level (Notor never levels)"],
      ["Location", "Magnetic Caves dimension"],
      { "heading": "Drops" },
      ["Common", "[[item:alexscaves:raw_azure_neodymium]], [[item:alexscaves:raw_scarlet_neodymium]]"]
    ]
  }
}
---
<!-- sources:
  mods/alexscaves-2.0.2.jar data/alexscaves/worldgen/biome/magnetic_caves.json (boundroid 350, teletor 225, ferrouslime 200, magnetron 80, notor 20, plus vanilla monsters)
  config/alexscaves_biome_generation/magnetic_caves.json (disabled_completely: no Overworld cave biome); mods/Dimensions-of-Alex's-Caves-1.20.1-1.0.4.jar data/alex_caves_dimensions/dimension/magnetic_caves.json (uses the Alex's Caves biome)
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt ("Move to The Caverns Chapter"); the_caverns.snbt (kill alexscaves:magnetron)
  mods/alexscaves-2.0.2.jar *Entity.createAttributes (Teletor 18 health, 2 attack, flying; Boundroid 20, 5, 20 armor; Ferrouslime 10, 2, 0.35 speed; Notor 6, 2) and registerGoals (Teletor, Boundroid, Ferrouslime target players; Notor has no target goals)
  config/autoleveling-common.toml [Mobs] (alexscaves:notor never levels)
  game-data/loot-tables.json alexscaves:entities/{teletor,boundroid,ferrouslime,notor}
  calc: L100: health ×30.7, attack ×10.9, armor ×2.089; L150: ×45.7, ×15.9, ×2.639
-->
The **Magnetic Caves** are one of the Alex's Caves cave biomes. In Soulrend they don't generate in the Overworld: each is its own dimension, reached with a key from the Dimensions of Alex's Caves mod, and visited in [[progression/act-iii-into-the-flames|Act III]]'s The Caverns chapter. Their mobs are magnetic robots and slimes. The [[Magnetron]], a quest target, has its own page.

## Spawning

| Mob | Weight | Attacks players |
| --- | --- | --- |
| Boundroid | 350 | Yes |
| Teletor | 225 | Yes (flies) |
| Ferrouslime | 200 | Yes |
| [[Magnetron]] | 80 | Yes |
| Notor | 20 | No |

Vanilla monsters (Zombies, Spiders, Skeletons, Slimes and others) also spawn there.

## Stats

All but the Notor have no level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act III (100) | Act III-b (150) |
| --- | --- | --- | --- |
| Boundroid | 20 HP / 5 / 20 | 614 HP / 54.5 / 41.8 | 914 HP / 79.5 / 52.8 |
| Teletor | 18 HP / 2 / 0 | 552.6 HP / 21.8 / 0 | 822.6 HP / 31.8 / 0 |
| Ferrouslime | 10 HP / 2 / 0 | 307 HP / 21.8 / 0 | 457 HP / 31.8 / 0 |

The Notor (6 HP) never levels.

## Drops

| Mob | Drops |
| --- | --- |
| Teletor | 1–2 [[item:alexscaves:raw_azure_neodymium]] or [[item:alexscaves:raw_scarlet_neodymium]]; 0–1 [[item:alexscaves:telecore]] |
| Boundroid | 0–1 [[item:alexscaves:heavyweight]]; 2–3 [[item:minecraft:chain]] |
| Ferrouslime | 0–1 [[item:alexscaves:ferrouslime_ball]] |
| Notor | 0–1 [[item:alexscaves:notor_gizmo]] |
