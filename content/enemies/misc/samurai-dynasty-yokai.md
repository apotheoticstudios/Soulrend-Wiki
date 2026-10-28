---
{
  "title": "Samurai Dynasty Yokai",
  "summary": "Samurai Dynasty's hostile yokai: Jorogumo, Kitsune and Enenra in the Overworld, Oni and Akaname in the Nether.",
  "aliases": ["Jorogumo", "Kitsune", "Enenra", "Onibi", "Oni", "Akaname", "Two-Tailed Fox"],
  "items": [
    "samurai_dynasty:jorogumo_spawn_egg",
    "samurai_dynasty:kitsune_spawn_egg",
    "samurai_dynasty:enenra_spawn_egg",
    "samurai_dynasty:onibi_spawn_egg",
    "samurai_dynasty:oni_spawn_egg",
    "samurai_dynasty:akaname_spawn_egg"
  ],
  "infobox": {
    "item": "samurai_dynasty:kitsune_spawn_egg",
    "model": ["samurai_dynasty:jorogumo", "samurai_dynasty:kitsune", "samurai_dynasty:enenra", "samurai_dynasty:onibi", "samurai_dynasty:oni", "samurai_dynasty:akaname", "samurai_dynasty:twotailed", "samurai_dynasty:tanuki"],
    "rows": [
      ["ID", "`samurai_dynasty:jorogumo`, `kitsune`, `enenra`, `onibi`, `oni`, `akaname`"],
      ["Level", "The player's level"],
      ["Location", "Jungles, cherry groves, taigas, caves and mountains; the Nether"]
    ]
  }
}
---
<!-- sources:
  mods/samurai_dynasty-0.0.51-1.20.1-forge.jar data/samurai_dynasty/forge/biome_modifier (jorogumo 20, 1-2; kitsune 20, 1-2; twotailed 10, 1-3; enenra 5, 1-5; tanuki 1 in #is_overworld; oni 1, 1-2 and akaname 2, 1-3 in #is_nether; kawauso, komainu)
  mods/samurai_dynasty-0.0.51-1.20.1-forge.jar data/samurai_dynasty/tags/worldgen/biome/{jorogumo,kitsune,twotailed,enenra}_biomes.json
  config/ysns/disabled_entities.json5 (samurai_dynasty:kawauso, samurai_dynasty:komainu)
  mods/samurai_dynasty-0.0.51-1.20.1-forge.jar entity/custom/*Entity attribute methods: Jorogumo 100 health, 8 attack, 0.6 speed, 25 follow; Kitsune 100, 8, 0.3, 25; Enenra 20, 3, 0.23; Onibi 8, 4, 0.2, flying, 48 follow; Oni 100, 7, 0.2, 16 follow, 1 attack knockback; Akaname 20, 3, 0.23; TwoTailedFox 20, 3, 0.3
  registerGoals: Jorogumo (JorogumoTargetGoal Player), Kitsune, Enenra, Onibi, Oni, Akaname (NearestAttackableTargetGoal Player); TwoTailedFox (tameable, targets animals only)
  mods/samurai_dynasty-0.0.51-1.20.1-forge.jar KitsuneAttackGoal fires KitsuneProjectileEntity; KitsuneProjectileEntity.onHitBlock spawns ModEntityTypes.ONIBI
  game-data/loot-tables.json samurai_dynasty:entities/{jorogumo,kitsune,enenra,onibi,oni,akaname,twotailed}
  config/paxi/datapacks/soulrend_mob_leveling (no files: level = player level); config/autoleveling-common.toml [Mobs] (samurai_dynasty:tanuki never levels)
  calc: L10: health ×3.7, attack ×1.9; L40: ×12.7, ×4.9; L100: ×30.7, ×10.9
-->
**Samurai Dynasty** adds yokai, creatures of Japanese folklore, as hostile mobs. Jorogumo, Kitsune and Enenra roam the Overworld, and the Oni and Akaname join the Nether's mobs. No quest asks for them, but their drops feed Samurai Dynasty's gear.

## Spawning

| Mob | Where | Weight | Group |
| --- | --- | --- | --- |
| Jorogumo | Jungles, Sparse and Bamboo Jungles; spooky, lush and wet Overworld biomes | 20 | 1–2 |
| Kitsune | Cherry Grove; spooky, lush and coniferous biomes | 20 | 1–2 |
| Enenra | Dripstone Caves; spooky, cave and mountain biomes | 5 | 1–5 |
| Oni | Every Nether biome | 1 | 1–2 |
| Akaname | Every Nether biome | 2 | 1–3 |
| Onibi | Doesn't spawn on its own; created where a Kitsune's fireball hits a block | | |

The **Two-Tailed Fox** (Cherry Grove and Flower Forest) and the **Tanuki** also spawn, but they don't attack players. Kawauso and Komainu are disabled by You Shall Not Spawn.

## Stats

None of the yokai has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Jorogumo | 100 HP / 8 / 0 | 370 HP / 15.2 / 0 | 1,270 HP / 39.2 / 0 | 3,070 HP / 87.2 / 0 |
| Kitsune | 100 HP / 8 / 0 | 370 HP / 15.2 / 0 | 1,270 HP / 39.2 / 0 | 3,070 HP / 87.2 / 0 |
| Enenra | 20 HP / 3 / 0 | 74 HP / 5.7 / 0 | 254 HP / 14.7 / 0 | 614 HP / 32.7 / 0 |
| Onibi | 8 HP / 4 / 0 | 29.6 HP / 7.6 / 0 | 101.6 HP / 19.6 / 0 | 245.6 HP / 43.6 / 0 |
| Oni | 100 HP / 7 / 0 | 370 HP / 13.3 / 0 | 1,270 HP / 34.3 / 0 | 3,070 HP / 76.3 / 0 |
| Akaname | 20 HP / 3 / 0 | 74 HP / 5.7 / 0 | 254 HP / 14.7 / 0 | 614 HP / 32.7 / 0 |

The Oni and Akaname are Nether mobs, so in practice they are met from Act III. The Jorogumo is the fastest (movement speed 0.6), and the Onibi flies.

## Drops

| Mob | Drops |
| --- | --- |
| Jorogumo | 0–2 [[item:samurai_dynasty:jorogumo_eye]] |
| Kitsune | 0–2 [[item:samurai_dynasty:kitsune_tail]]; 1 [[item:samurai_dynasty:kitsune_hide]] |
| Enenra | 0–3 [[item:minecraft:coal]]; 1–2 [[item:minecraft:gunpowder]] |
| Onibi | 0–4 [[item:samurai_dynasty:spirit_flame]] (+0–2 per Looting level) |
| Oni | 1–2 [[item:samurai_dynasty:oni_horn]]; 1 [[item:samurai_dynasty:ruby]] |
| Akaname | 0–2 [[item:samurai_dynasty:akaname_tongue]] |

Looting adds 0–1 to Jorogumo Eyes and Akaname Tongues.
