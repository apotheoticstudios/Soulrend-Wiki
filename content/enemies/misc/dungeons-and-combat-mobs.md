---
{
  "title": "Dungeons and Combat Mobs",
  "summary": "Dungeons and Combat's rank-and-file Overworld mobs: Remanents in forests, Hermit Witches in swamps and the armored Centinels of the Forgotten Sands.",
  "aliases": ["Remanent", "Hermit Witch", "Centinel", "Mummy", "Flower Fairy"],
  "items": [
    "dungeons_and_combat:remanent_spawn_egg",
    "dungeons_and_combat:hermit_witch_spawn_egg",
    "dungeons_and_combat:mummy_spawn_egg"
  ],
  "infobox": {
    "item": "dungeons_and_combat:remanent_spawn_egg",
    "model": ["dungeons_and_combat:remanent", "dungeons_and_combat:hermit_witch", "dungeons_and_combat:mummy", "dungeons_and_combat:flower_fairy"],
    "rows": [
      ["ID", "`dungeons_and_combat:remanent`, `hermit_witch`, `mummy`"],
      ["Level", "The player's level"],
      ["Location", "Forests, taigas and swamps; Remanent camps, Hermit Witch houses, the Forgotten Sands"]
    ]
  }
}
---
<!-- sources:
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar data/dungeons_and_combat/forge/biome_modifier (remanent 12, 1-3 in forest, taiga, dark forest; hermit_witch 14, 1-2 in swamp, dark forest, forest, taiga, snowy taiga; flower_fairy 10, 1-3 in flower forest, sunflower plains)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar worldgen/structure: remanent_camp, remanent_watch_tower (forest, snowy taiga, taiga, birch forest), witch_hermit_house (swamp), the_forgotten_sands (desert), ancient_tree (flower forest, sunflower plains); structure NBT remanent_camp / remanent_watch_tower (remanent), hermit_house (hermit_witch), forgotten_sands (mummy = "Centinel"), ancient_tree (flower_fairy)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar entity classes: RemanentEntity.createAttributes (24 health, 5 attack, 5 armor, 0.4 knockback resistance, 0.2 speed, 16 follow), HermitWitchEntity (18, 3, 2, 0, 0.2; ranged attack; Corroding Flame Scepter and Nullfire Amulet), MummyEntity (Zombie subclass; 24, 1, 2, 0.4, 0.2; full Centinel armor and Dawnbreaker), FlowerFairyEntity (PathfinderMob, no attack target goals)
  game-data/loot-tables.json dungeons_and_combat:entities/{remanent,hermit_witch,mummy,flower_fairy}
  config/paxi/datapacks/soulrend_mob_leveling (no Dungeons and Combat files for these: level = player level)
  calc: L10: health ×3.7, attack ×1.9, armor ×1.099; L40: ×12.7, ×4.9, ×1.429; L100: ×30.7, ×10.9, ×2.089
-->
**Dungeons and Combat** adds a handful of ordinary hostile mobs alongside its bosses and minibosses. Remanents and Hermit Witches roam forests and swamps, and the armored Centinels guard the Forgotten Sands in the desert. No quest asks for them. The structure guardians (Sandstone Golem, Ammit, Horuso and others) are on [[bosses/optional-and-world/dungeons-and-combat-minibosses|Dungeons and Combat Minibosses]], and the skeletal Skulls on [[enemies/misc/catacomb-skulls|Catacomb Skulls]].

## Spawning

| Mob | Natural spawns | Weight | Group | Structures |
| --- | --- | --- | --- | --- |
| Remanent | Forest, Taiga, Dark Forest | 12 | 1–3 | Remanent Camps and Watch Towers (forests and taigas) |
| Hermit Witch | Swamp, Dark Forest, Forest, Taiga, Snowy Taiga | 14 | 1–2 | Hermit Witch houses (swamps) |
| Centinel | None | | | The Forgotten Sands (deserts) |

## Stats

None of these mobs has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Remanent | 24 HP / 5 / 5 | 88.8 HP / 9.5 / 5.5 | 304.8 HP / 24.5 / 7.1 | 736.8 HP / 54.5 / 10.4 |
| Hermit Witch | 18 HP / 3 / 2 | 66.6 HP / 5.7 / 2.2 | 228.6 HP / 14.7 / 2.9 | 552.6 HP / 32.7 / 4.2 |
| Centinel | 24 HP / 1 / 2 | 88.8 HP / 1.9 / 2.2 | 304.8 HP / 4.9 / 2.9 | 736.8 HP / 10.9 / 4.2 |

All three move at 0.2 and notice players from 16 blocks. Remanents and Centinels have 40% knockback resistance.

## The mobs

- **Remanent:** the toughest of the three, with 5 base armor.
- **Hermit Witch:** attacks from range. It spawns holding a [[item:dungeons_and_combat:corroding_flame]] and wearing a [[item:dungeons_and_combat:nullfire_amulet]].
- **Centinel:** a zombie-type mob (its internal id is `mummy`) that spawns in a full set of [[items/armor/agility-path/centinel-armor|Centinel Armor]] holding a [[item:dungeons_and_combat:dawn_breaker_sword]]. Its own attack value is 1, so its damage comes from the sword.

The **Flower Fairy**, which spawns in Flower Forests and Sunflower Plains and around the Ancient Tree, never attacks. It drops a [[item:dungeons_and_combat:fairy_wing]] one time in seven and 0–2 [[item:minecraft:dandelion]].

## Drops

| Mob | Drops |
| --- | --- |
| Remanent | 0–3 [[item:dungeons_and_combat:rusty_bronze_plates]]; 0–2 [[item:minecraft:rotten_flesh]] |
| Hermit Witch | 1–2 [[item:dungeons_and_combat:bottled_acid_fire]]; 0–2 of one of [[item:minecraft:redstone]], [[item:minecraft:gunpowder]], [[item:minecraft:sugar]] or [[item:minecraft:glowstone_dust]]; 0–1 [[item:minecraft:glass_bottle]] |
| Centinel | 0–1 Rotten Flesh or [[item:minecraft:bone]]; [[item:dungeons_and_combat:linen_cloth]] (12 in 46) or a [[item:dungeons_and_combat:solar_emblem]] (4 in 46); 0–2 [[item:dungeons_and_combat:blessed_dust]] |

Each item or choice above is its own roll. Looting doesn't change these drops.
