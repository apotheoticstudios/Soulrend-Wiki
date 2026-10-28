---
{
  "title": "Alex's Mobs Predators",
  "summary": "The Alex's Mobs animals that attack players in Soulrend, where they spawn, and the predators Soulrend switches off.",
  "aliases": ["Komodo Dragon", "Grizzly Bear", "Froststalker", "Tusklin", "Rattlesnake", "Rocky Roller", "Skelewag", "Farseer"],
  "items": [
    "alexsmobs:spawn_egg_komodo_dragon",
    "alexsmobs:spawn_egg_grizzly_bear",
    "alexsmobs:spawn_egg_froststalker",
    "alexsmobs:spawn_egg_tusklin",
    "alexsmobs:spawn_egg_rattlesnake",
    "alexsmobs:spawn_egg_rocky_roller",
    "alexsmobs:spawn_egg_skelewag",
    "alexsmobs:spawn_egg_farseer"
  ],
  "infobox": {
    "item": "alexsmobs:spawn_egg_grizzly_bear",
    "model": ["alexsmobs:grizzly_bear", "alexsmobs:komodo_dragon", "alexsmobs:froststalker", "alexsmobs:tusklin", "alexsmobs:rattlesnake", "alexsmobs:rocky_roller", "alexsmobs:skelewag", "alexsmobs:farseer"],
    "rows": [
      ["ID", "`alexsmobs:grizzly_bear` and others"],
      ["Level", "Base stats (most never level up)"],
      ["Location", "Overworld biomes; see the table"]
    ]
  }
}
---
<!-- sources:
  mods/alexsmobs-1.22.9.jar Entity*.registerGoals: target goals aimed at Player in EntityKomodoDragon, EntityGrizzlyBear, EntityFroststalker (with predicate), EntityTusklin (with predicate), EntityRattlesnake (ShortDistanceTarget), EntityRockyRoller, EntitySkelewag, EntityFarseer; only HurtByTargetGoal in EntityGorilla, EntityMoose, EntityMurmur, EntityGiantSquid, EntityUnderminer, EntityTarantulaHawk; EntityTiger uses ResetUniversalAngerTargetGoal; EntitySnowLeopard targets #alexsmobs:snow_leopard_targets
  mods/alexsmobs-1.22.9.jar Entity*.bakeAttributes: komodo_dragon 30 health, 4 attack, 0.23 speed; grizzly_bear 55, 8, 0 armor, 0.6 kb res, 0.25; froststalker 24, 4.5, 2 armor, 0.3; tusklin 40, 9, 0.9 kb res, 0.3; rattlesnake 8, 2, 0.28; rocky_roller 10, 2, 20 armor, 0.7 kb res, 0.25; skelewag 20, 3, 0.45; farseer 70, 4.5, 6 armor, 0.35
  config/alexsmobs.toml (komodoDragonSpawnWeight 16 rolls 1, grizzlyBearSpawnWeight 8, froststalkerSpawnWeight 20, tusklinSpawnWeight 18, rattlesnakeSpawnWeight 12, rockyRollerSpawnWeight 60, skelewagSpawnWeight 15, farseerSpawnWeight 30, farseerBorderSpawnDistance 100)
  config/alexsmobs/{komodo_dragon,grizzly_bear,froststalker,tusklin,rattlesnake,rocky_roller,skelewag,farseer}_spawns.json (biome rules; Terralith entries ignored: not installed); 24 *_spawns.json files with empty biome lists
  config/ysns/disabled_entities.json5 (alexsmobs:crocodile, alexsmobs:cosmaw)
  config/autoleveling-common.toml [Mobs] never-level list (froststalker, tusklin, rattlesnake, rocky_roller, skelewag, farseer and many other Alex's Mobs animals)
  game-data/loot-tables.json alexsmobs:entities/* (komodo_dragon is empty)
  calc: L10: health ×3.7, attack ×1.9; L40: ×12.7, ×4.9; L100: ×30.7, ×10.9
-->
**Alex's Mobs** fills the Overworld with animals, and a few of them hunt players. They are no threat to the quest line, which never asks for them, but they can catch a new player off guard. Most of them are on Auto Leveling's never-level list, so they stay at their base stats however strong the player gets.

## Spawning

| Mob | Where it spawns | Weight |
| --- | --- | --- |
| Komodo Dragon | Jungles that aren't dense | 16 |
| Grizzly Bear | Overworld forests (not sparse jungles) and taigas | 8 |
| Froststalker | Ice Spikes, Frozen Peaks | 20 |
| Tusklin | Ice Spikes, snowy plains | 18 |
| Rattlesnake | Badlands; hot, dry, sandy biomes | 12 |
| Rocky Roller | Dripstone Caves | 60 |
| Skelewag | Deep oceans | 15 |
| Farseer | Any biome with hostile mobs, except Mushroom Fields, but only within 100 blocks of the world border | 30 |

## Behavior

| Mob | Attacks players |
| --- | --- |
| Komodo Dragon | Yes |
| Grizzly Bear | Yes, under conditions in its code; also when hurt |
| Froststalker | Yes, under conditions in its code |
| Tusklin | Yes, under conditions in its code |
| Rattlesnake | When a player comes close |
| Rocky Roller | Yes (also villagers) |
| Skelewag | Yes |
| Farseer | Yes |

Gorillas, Moose, Murmurs, Giant Squid, Underminers and Tarantula Hawks only fight back when hurt. Tigers are neutral until angered.

## Stats

Only the Komodo Dragon and the Grizzly Bear level up; their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Komodo Dragon | 30 HP / 4 / 0 | 111 HP / 7.6 / 0 | 381 HP / 19.6 / 0 | 921 HP / 43.6 / 0 |
| Grizzly Bear | 55 HP / 8 / 0 | 203.5 HP / 15.2 / 0 | 698.5 HP / 39.2 / 0 | 1,688.5 HP / 87.2 / 0 |

The rest never level up:

| Mob | Health | Attack | Armor | Notes |
| --- | --- | --- | --- | --- |
| Froststalker | 24 HP | 4.5 | 2 | |
| Tusklin | 40 HP | 9 | 0 | 90% knockback resistance |
| Rattlesnake | 8 HP | 2 | 0 | |
| Rocky Roller | 10 HP | 2 | 20 | 70% knockback resistance |
| Skelewag | 20 HP | 3 | 0 | Fast (0.45) |
| Farseer | 70 HP | 4.5 | 6 | |

## Drops

| Mob | Drops |
| --- | --- |
| Komodo Dragon | Nothing (empty loot table) |
| Grizzly Bear | Up to 2 [[item:alexsmobs:bear_fur]]; [[item:alexsmobs:bear_dust]] at 1% (+1% per Looting level) |
| Froststalker | [[item:alexsmobs:froststalker_horn]], 23% (+10% per Looting level), player kill |
| Tusklin | 3–6 [[item:minecraft:porkchop]] (cooked if on fire); 0–1 [[item:minecraft:snowball]] |
| Rattlesnake | 0–1 [[item:alexsmobs:rattlesnake_rattle]] |
| Rocky Roller | [[item:alexsmobs:rocky_shell]] at 75% (+10% per Looting level); 0–2 [[item:minecraft:tuff]]; 0–2 [[item:minecraft:pointed_dripstone]] |
| Skelewag | [[item:alexsmobs:skelewag_sword]] at 10% (+5%); [[item:alexsmobs:fish_bones]] at 30% (+20%); [[item:alexsmobs:novelty_hat]] at 1% (+1.5%); 0–2 [[item:minecraft:bone]] |
| Farseer | 0–1 [[item:alexsmobs:farseer_arm]] |

Looting adds 0–1 to each counted drop.

## Switched off in Soulrend

Soulrend's Alex's Mobs config gives these animals no spawn biomes, so they never appear naturally: Anaconda, Bone Serpent, Caiman, Capuchin Monkey, Cave Centipede, Cockroach, Crimson Mosquito, Crocodile, Dropbear, Elephant, Flutter, Fly, Guster, Kangaroo, Mantis Shrimp, Mimic Octopus, Mudskipper, Mungus, Raccoon, Rhinoceros, Skunk, Sugar Glider, Void Worm and Warped Mosco. You Shall Not Spawn also blocks Crocodiles and Cosmaws.
