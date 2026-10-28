---
{
  "title": "Dread Army",
  "summary": "Ice and Fire's undead Dread Thralls, Ghouls, Beasts, Scuttlers and Knights, which guard snowy Mausoleums and answer the Dread Lich.",
  "aliases": ["Dread Thrall", "Dread Ghoul", "Dread Beast", "Dread Scuttler", "Dread Knight", "Dread Mausoleum", "Mausoleum"],
  "items": [
    "iceandfire:spawn_egg_dread_thrall",
    "iceandfire:spawn_egg_dread_ghoul",
    "iceandfire:spawn_egg_dread_beast",
    "iceandfire:spawn_egg_dread_scuttler",
    "iceandfire:spawn_egg_dread_knight"
  ],
  "infobox": {
    "item": "iceandfire:spawn_egg_dread_knight",
    "model": ["iceandfire:dread_thrall", "iceandfire:dread_ghoul", "iceandfire:dread_beast", "iceandfire:dread_scuttler", "iceandfire:dread_knight"],
    "rows": [
      ["ID", "`iceandfire:dread_thrall`, `dread_ghoul`, `dread_beast`, `dread_scuttler`, `dread_knight`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "The player's level"],
      ["Location", "Mausoleums in snowy Overworld biomes; summoned by the [[Dread Lich]]"],
      { "heading": "Drops" },
      ["Common", "[[item:minecraft:bone]], [[item:iceandfire:dread_shard]]"]
    ]
  }
}
---
<!-- sources:
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar data/iceandfire/worldgen/structure/mausoleum.json, structure_set/mausoleum.json (random_spread spacing 32, separation 12), template_pool/mausoleum/start_pool.json, processor_list/mausoleum_processors.json
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar MausoleumStructure (IafConfig.generateMausoleums, BiomeConfig.mausoleumBiomes)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar data/iceandfire/structures/mausoleum/building.nbt (iceandfire:dread_spawner blocks)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar IafProcessors ("dread_mausoleum_processor" = DreadRuinProcessor), DreadRuinProcessor.getRandomMobForMobSpawner (< 0.3 thrall, < 0.5 ghoul, < 0.7 beast, < 0.85 scuttler, else knight)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityDread{Thrall,Ghoul,Beast,Scuttler,Knight}.bakeAttributes
    thrall 20 health, 0.2 speed, 2 attack, 128 follow, 2 armor; ghoul 30, 0.35, 5, 128, 4; beast 30, 0.45, 4, 128, 1;
    scuttler 40, 0.34, 7, 12, 10; knight 40, 0.25, 2, 128, 20
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityDreadThrall.populateDefaultEquipmentSlots (random swords and armor), EntityDreadKnight (Dread Knight's Sword in main hand, generated shield in off hand)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar EntityDreadLich (summons thralls, ghouls, beasts and scuttlers)
  mods/iceandfire-2.1.13-1.20.1-beta-5.jar data/iceandfire/loot_tables/entities/dread_{thrall,ghoul,beast,scuttler,knight}.json (2 rolls, no Soulrend override in soulrend_loot; no extra drops in mobdropconfig.txt)
  config/iceandfire-common.toml ("Generate Mausoleums" true)
  config/iceandfire/mausoleum_biomes.json (Overworld snowy, not wet or water; Terralith wintry forest and lowlands)
  config/paxi/datapacks/soulrend_mob_leveling (no Ice and Fire dread files: level = player level)
  config/autoleveling-common.toml [Attributes]
  calc: health × 3.7 / 12.7 / 30.7, attack × 1.9 / 4.9 / 10.9, armor × 1.099 / 1.429 / 2.089 at levels 10 / 40 / 100
-->
The **Dread Army** is Ice and Fire's undead host: Dread Thralls, Dread Ghouls, Dread Beasts, Dread Scuttlers and Dread Knights. They guard Mausoleums in snowy lands and rise at the call of the [[Dread Lich]], which summons them in battle. No quest asks for them, but they are the main source of [[item:iceandfire:dread_shard]] and the escort of every Dread Lich met in [[progression/act-ii-first-steps|Act II]]'s snowy biomes.

## Spawning

**Mausoleums.** Dread stone Mausoleums generate in snowy Overworld biomes that aren't wet or watery, plus Terralith's Wintry Forest and Wintry Lowlands; Mausoleums are spaced about 32 chunks apart. Each holds Dread spawners, and each spawner is set to one Dread mob when the structure generates:

| Mob | Chance per spawner |
| --- | --- |
| Dread Thrall | 30% |
| Dread Ghoul | 20% |
| Dread Beast | 20% |
| Dread Scuttler | 15% |
| Dread Knight | 15% |

**The Dread Lich.** Dread Liches spawn on their own in the same snowy biomes and summon Dread Thralls, Ghouls, Beasts and Scuttlers while they fight. Dread Knights are never summoned; they only come from Mausoleum spawners.

None of the Dread mobs spawn naturally on their own.

## Stats

The Dread mobs have no level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act I (10) | Act II (40) | Act III (100) | Speed |
| --- | --- | --- | --- | --- | --- |
| Dread Thrall | 20 HP / 2 / 2 | 74 HP / 3.8 / 2.2 | 254 HP / 9.8 / 2.9 | 614 HP / 21.8 / 4.2 | 0.2 |
| Dread Ghoul | 30 HP / 5 / 4 | 111 HP / 9.5 / 4.4 | 381 HP / 24.5 / 5.7 | 921 HP / 54.5 / 8.4 | 0.35 |
| Dread Beast | 30 HP / 4 / 1 | 111 HP / 7.6 / 1.1 | 381 HP / 19.6 / 1.4 | 921 HP / 43.6 / 2.1 | 0.45 |
| Dread Scuttler | 40 HP / 7 / 10 | 148 HP / 13.3 / 11 | 508 HP / 34.3 / 14.3 | 1,228 HP / 76.3 / 20.9 | 0.34 |
| Dread Knight | 40 HP / 2 / 20 | 148 HP / 3.8 / 22 | 508 HP / 9.8 / 28.6 | 1,228 HP / 21.8 / 41.8 | 0.25 |

Every Dread mob tracks targets from 128 blocks away, except the Dread Scuttler, which only notices targets within 12 blocks.

## The mobs

- **Dread Thrall:** the weakest and slowest. Thralls spawn with random weapons and armor pieces, including the [[item:iceandfire:dread_sword]], so their damage depends on what they hold.
- **Dread Ghoul:** fast, with 5 base attack.
- **Dread Beast:** the fastest of the army, with almost no armor.
- **Dread Scuttler:** the strongest base attack and 10 armor, but it only notices targets within 12 blocks.
- **Dread Knight:** the most heavily armored (20 base armor). It carries a [[item:iceandfire:dread_knight_sword]] and a shield, so most of its damage comes from the sword rather than its own attack value of 2.

## Drops

Each Dread mob rolls its loot table twice, picking one entry per roll. Looting adds 0–1 to each.

| Mob | Each roll gives one of |
| --- | --- |
| Dread Thrall | 0–2 [[item:minecraft:bone]], 0–2 [[item:iceandfire:dread_shard]] |
| Dread Ghoul | 0–2 Bone, 0–2 [[item:minecraft:rotten_flesh]], 0–2 Dread Shard |
| Dread Beast | 0–2 Bone, 0–2 Rotten Flesh, 0–2 Dread Shard |
| Dread Scuttler | 0–1 Rotten Flesh, 0–1 [[item:minecraft:spider_eye]] |
| Dread Knight | 0–2 Bone, 0–1 [[item:minecraft:iron_ingot]], 0–2 Dread Shard |

The Gravemaster's Key comes from the [[Dread Lich]], not from its army.

{{uses iceandfire:dread_shard limit=8}}
