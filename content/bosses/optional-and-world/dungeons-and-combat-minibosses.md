---
{
  "title": "Dungeons and Combat Minibosses",
  "summary": "The Dungeons and Combat guardians of the Forgotten Sands, the Blazing Fortress and the Church, which no quest asks for.",
  "aliases": ["Pyro Knight", "Infernus", "Blazing Lady", "Lady Blaze", "The Aberrator", "Sandstone Golem", "Ammit", "Horuso", "Gigant Scorpion", "Palehand"],
  "items": [
    "dungeons_and_combat:pyro_knight_spawn_egg",
    "dungeons_and_combat:infernus_spawn_egg",
    "dungeons_and_combat:lady_blaze_spawn_egg",
    "dungeons_and_combat:the_aberrator_spawn_egg",
    "dungeons_and_combat:sandstone_golem_spawn_egg",
    "dungeons_and_combat:ammit_spawn_egg",
    "dungeons_and_combat:horuso_spawn_egg",
    "dungeons_and_combat:gigant_scorpion_spawn_egg",
    "dungeons_and_combat:palehand_spawn_egg"
  ]
}
---
<!-- sources:
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar *Entity.createAttributes (base stats in the comparison table)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar data/dungeons_and_combat/structures/*.nbt (forgotten_sands: ammit, gigant_scorpion, horuso, sandstone_golem; fortress_blaze: infernus, lady_blaze, pyro_knight; the_church: the_aberrator, high_priest)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar data/dungeons_and_combat/worldgen/structure/{the_forgotten_sands (desert), blazing_fortress (nether_wastes, y >= 30), the_church (crimson_forest, y >= 35)}.json and structure_set (spacing 40 / 50 / 52)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar TheGraveWatcherIAProcedure (summons Palehands)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar data/dungeons_and_combat/loot_tables/entities/*.json (no palehand table)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar assets/dungeons_and_combat/lang/en_us.json (lady_blaze = "Blazing Lady")
  config/paxi/datapacks/soulrend_mob_leveling (no files for these mobs: level = player level)
  config/soulrend_core/boss_damage.toml (none listed)
  config/autoleveling-common.toml [Attributes]
  calc: Overworld rows at level 40 (health ×12.7, attack ×4.9, armor ×1.429); Nether rows at level 100 (health ×30.7, attack ×10.9, armor ×2.089)
        Horuso 20 -> 254, 3 -> 14.7; Ammit 26 -> 330.2, 2 -> 9.8; Gigant Scorpion 18 -> 228.6, 3 -> 14.7, armor 6 -> 8.6; Sandstone Golem 50 -> 635, 1 -> 4.9, armor 4 -> 5.7; Palehand 10 -> 127, 1 -> 4.9
        Infernus 26 -> 798.2, 3 -> 32.7, armor 4 -> 8.4; Blazing Lady 20 -> 614, 3 -> 32.7; Pyro Knight 240 -> 7,368, 1 -> 10.9; The Aberrator 42 -> 1,289.4, 6 -> 65.4
-->
**Dungeons and Combat minibosses** are the stronger mobs that guard three Dungeons and Combat structures: the Forgotten Sands in the desert, and the Blazing Fortress and the Church in the Nether. No quest requires them, but they drop the materials for several Dungeons and Combat items.

None of them has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). None has a damage cap.

{{model dungeons_and_combat:sandstone_golem dungeons_and_combat:ammit dungeons_and_combat:horuso dungeons_and_combat:gigant_scorpion dungeons_and_combat:palehand dungeons_and_combat:pyro_knight dungeons_and_combat:infernus dungeons_and_combat:lady_blaze dungeons_and_combat:the_aberrator caption="The Dungeons and Combat minibosses, in the order of the table below."}}


## Comparison

The scaled columns use level 40 for the Overworld (Act II) and level 100 for the Nether (Act III).

| Mob | Found in | Base health | Base attack | Base armor | Scaled health | Scaled attack |
| --- | --- | --- | --- | --- | --- | --- |
| [[item:dungeons_and_combat:sandstone_golem_spawn_egg]] | Forgotten Sands | 50 | 1 | 4 | 635 HP | 4.9 |
| [[item:dungeons_and_combat:ammit_spawn_egg]] | Forgotten Sands | 26 | 2 | 0 | 330.2 HP | 9.8 |
| [[item:dungeons_and_combat:horuso_spawn_egg]] | Forgotten Sands | 20 | 3 | 0 | 254 HP | 14.7 |
| [[item:dungeons_and_combat:gigant_scorpion_spawn_egg]] | Forgotten Sands | 18 | 3 | 6 | 228.6 HP | 14.7 |
| [[item:dungeons_and_combat:palehand_spawn_egg]] | Summoned by [[the GraveWatcher]] | 10 | 1 | 0 | 127 HP | 4.9 |
| [[item:dungeons_and_combat:pyro_knight_spawn_egg]] | Blazing Fortress | 240 | 1 | 0 | 7,368 HP | 10.9 |
| [[item:dungeons_and_combat:infernus_spawn_egg]] | Blazing Fortress | 26 | 3 | 4 | 798.2 HP | 32.7 |
| [[item:dungeons_and_combat:lady_blaze_spawn_egg]] | Blazing Fortress | 20 | 3 | 0 | 614 HP | 32.7 |
| [[item:dungeons_and_combat:the_aberrator_spawn_egg]] | The Church | 42 | 6 | 0 | 1,289.4 HP | 65.4 |

## Structures

- **The Forgotten Sands** (`dungeons_and_combat:the_forgotten_sands`) generates in deserts, at most once per 40 × 40 chunk area.
- **The Blazing Fortress** (`dungeons_and_combat:blazing_fortress`) generates in the Nether Wastes, at most once per 50 × 50 chunk area.
- **The Church** (`dungeons_and_combat:the_church`) generates in Crimson Forests, at most once per 52 × 52 chunk area. It also holds a [[High Priest]].

## Forgotten Sands

### Sandstone Golem

| Item | Count | Chance |
| --- | --- | --- |
| [[item:minecraft:sandstone]] | 0–3 | Always rolled |
| [[item:dungeons_and_combat:blessed_dust]] | 0–2 | Always rolled |
| [[item:dungeons_and_combat:linen_cloth]] | 0–3 | 6 in 19 |
| [[item:dungeons_and_combat:solar_emblem]] | 1 | 3 in 19 (instead of Linen Cloth) |

### Ammit

| Item | Count | Chance |
| --- | --- | --- |
| [[item:dungeons_and_combat:reptile_meat]] | 0–2 | 1 in 7 |
| [[item:dungeons_and_combat:ammit_fang]] | 0–3 | 1 in 7 |
| [[item:dungeons_and_combat:solar_emblem]] | 0–1 | 1 in 21 |

### Horuso

| Item | Count | Chance |
| --- | --- | --- |
| [[item:dungeons_and_combat:horuso_feather]] | 0–2 | 12 in 46 |
| [[item:dungeons_and_combat:solar_emblem]] | 1 | 4 in 46 (instead of feathers) |

### Gigant Scorpion

| Item | Count | Chance |
| --- | --- | --- |
| [[item:dungeons_and_combat:scorpion_tail]] | 1 | 1 in 3 |
| [[item:dungeons_and_combat:scorpion_claw]] | 1 | 1 in 11 |

## The GraveWatcher's summons

### Palehand

[[The GraveWatcher]] summons Palehands four at a time. They have no loot table and drop nothing.

## Blazing Fortress

### Pyro Knight

The Pyro Knight has by far the most health of the minibosses.

| Item | Count | Chance |
| --- | --- | --- |
| [[item:dungeons_and_combat:molten_bone]] | 0–8 | Always rolled; Fortune adds more |
| [[item:dungeons_and_combat:raw_molten_dark_steel]] | 0–4 | Always rolled; Fortune adds more |
| [[item:dungeons_and_combat:armor_plate]] | 1–2 | Always |
| [[item:dungeons_and_combat:estus_flask]] | 1–3 | Always |
| [[item:dungeons_and_combat:molten_smithing_template]] | 0–2 | Always rolled |

### Infernus

| Item | Count | Chance |
| --- | --- | --- |
| [[item:minecraft:blaze_powder]] | 0–2 | 1 in 3 |
| [[item:dungeons_and_combat:molten_bone]] | 0–2 | 1 in 4 |
| [[item:dungeons_and_combat:raw_molten_dark_steel]] | 0–1 | 1 in 4 |

### Blazing Lady

The Blazing Lady (`dungeons_and_combat:lady_blaze`) flies.

| Item | Count | Chance |
| --- | --- | --- |
| [[item:dungeons_and_combat:molten_bone]] | 0–2 | 1 in 3 |
| [[item:minecraft:blaze_powder]] | 0–2 | 1 in 3 |
| [[item:dungeons_and_combat:raw_molten_dark_steel]] | 0–1 | 1 in 5 |

## The Church

### The Aberrator

| Item | Count | Chance |
| --- | --- | --- |
| [[item:dungeons_and_combat:ritual_bone]] | 0–2 | Always rolled |
| [[item:dungeons_and_combat:blood_vial]] | 0–1 | Always rolled |
| [[item:minecraft:rotten_flesh]] | 0–3 | Always rolled |
| [[item:dungeons_and_combat:ebony_scrap]] | 0–3 | Always rolled |
