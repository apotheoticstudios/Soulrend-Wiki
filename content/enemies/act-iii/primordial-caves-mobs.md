---
{
  "title": "Primordial Caves Mobs",
  "summary": "The dinosaurs of the Primordial Caves dimension: pack-hunting Vallumraptors and Tremorsauruses, and the giant herbivores that fight back.",
  "aliases": ["Vallumraptor", "Tremorsaurus", "Relicheirus", "Grottoceratops", "Atlatitan", "Subterranodon"],
  "items": ["alexscaves:vallumraptor_spawn_egg", "alexscaves:tremorsaurus_spawn_egg", "alexscaves:relicheirus_spawn_egg", "alexscaves:grottoceratops_spawn_egg", "alexscaves:atlatitan_spawn_egg", "alexscaves:subterranodon_spawn_egg"],
  "infobox": {
    "item": "alexscaves:tremorsaurus_spawn_egg",
    "model": ["alexscaves:vallumraptor", "alexscaves:tremorsaurus", "alexscaves:relicheirus", "alexscaves:grottoceratops", "alexscaves:atlatitan", "alexscaves:subterranodon"],
    "rows": [
      ["ID", "`alexscaves:vallumraptor`, `tremorsaurus`, `relicheirus`, `grottoceratops`, `atlatitan`, `subterranodon`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "The player's level"],
      ["Location", "Primordial Caves dimension"],
      { "heading": "Drops" },
      ["Common", "[[item:alexscaves:dinosaur_chop]], [[item:alexscaves:heavy_bone]]"]
    ]
  }
}
---
<!-- sources:
  mods/alexscaves-2.0.2.jar data/alexscaves/worldgen/biome/primordial_caves.json (grottoceratops 27, trilocaris 15, relicheirus 13, atlatitan 10, subterranodon 6, vallumraptor 6, tremorsaurus 5, frog 7)
  config/alexscaves_biome_generation/primordial_caves.json (disabled_completely); Dimensions of Alex's Caves dimension/primordial_caves.json
  config/ftbquests/quests/chapters/the_caverns.snbt (kill alexscaves:luxtructosaurus)
  mods/alexscaves-2.0.2.jar *Entity.createAttributes (Vallumraptor 28 health, 3 attack; Tremorsaurus 150, 14, 8 armor, 0.9 knockback resistance; Relicheirus 120, 12; Grottoceratops 50, 10, 8 armor, 0.9; Atlatitan 400, 8, 1 knockback resistance; Subterranodon 20, 2, flying); registerGoals (Vallumraptor and Tremorsaurus: MobTargetClosePlayers; the others only HurtByTargetGoal or animal targets)
  game-data/loot-tables.json alexscaves:entities/{vallumraptor,tremorsaurus,relicheirus,grottoceratops,atlatitan,subterranodon}
  calc: L100: health ×30.7, attack ×10.9, armor ×2.089; L150: ×45.7, ×15.9, ×2.639
-->
The **Primordial Caves** are Alex's Caves' prehistoric cave biome, full of dinosaurs. In Soulrend they are their own dimension, reached with a Dimensions of Alex's Caves key in [[progression/act-iii-into-the-flames|Act III]]'s The Caverns chapter. Most of the dinosaurs only fight back, but Vallumraptors and Tremorsauruses attack players who come close. The [[Luxtructosaurus]], a quest target, and the [[Tremorzilla]] have their own pages.

## Spawning

| Mob | Weight | Attacks players |
| --- | --- | --- |
| Grottoceratops | 27 | Only when attacked |
| Relicheirus | 13 | Only when attacked |
| Atlatitan | 10 | Only when attacked |
| Subterranodon | 6 | Only when attacked |
| Vallumraptor | 6 | Yes, players who come close; hunts in packs |
| Tremorsaurus | 5 | Yes, players who come close |

Trilocaris and Frogs also spawn there. Several of these dinosaurs can be tamed.

## Stats

None of them has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act III (100) | Act III-b (150) |
| --- | --- | --- | --- |
| Vallumraptor | 28 HP / 3 / 0 | 859.6 HP / 32.7 / 0 | 1,279.6 HP / 47.7 / 0 |
| Tremorsaurus | 150 HP / 14 / 8 | 4,605 HP / 152.6 / 16.7 | 6,855 HP / 222.6 / 21.1 |
| Relicheirus | 120 HP / 12 / 0 | 3,684 HP / 130.8 / 0 | 5,484 HP / 190.8 / 0 |
| Grottoceratops | 50 HP / 10 / 8 | 1,535 HP / 109 / 16.7 | 2,285 HP / 159 / 21.1 |
| Atlatitan | 400 HP / 8 / 0 | 12,280 HP / 87.2 / 0 | 18,280 HP / 127.2 / 0 |

The Tremorsaurus and Grottoceratops have 90% knockback resistance and the Atlatitan 100%.

## Drops

| Mob | Drops |
| --- | --- |
| Vallumraptor, Subterranodon | Nothing |
| Tremorsaurus | 0–2 [[item:alexscaves:dinosaur_chop]]; 2–3 [[item:alexscaves:heavy_bone]] |
| Relicheirus | 1–2 Dinosaur Chop; 1–3 Heavy Bone; 1–4 [[item:minecraft:feather]] |
| Grottoceratops | 1–2 Dinosaur Chop; 0–2 [[item:alexscaves:tough_hide]] |
| Atlatitan | 7–9 Dinosaur Chop; 5–9 Heavy Bone |
