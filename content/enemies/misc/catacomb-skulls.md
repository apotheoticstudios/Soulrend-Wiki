---
{
  "title": "Catacomb Skulls",
  "summary": "Dungeons and Combat's skeletal Skulls that guard the Lugubrious Catacombs and the Tower of Eldrich, and the Skull Mimics hiding in Skull Chests.",
  "aliases": ["Skull", "Skull Deserter", "Prisoner Skull", "Royal Skull", "Counselor Skull", "Skull Mimic", "Skull Chest"],
  "items": [
    "dungeons_and_combat:skull_spawn_egg",
    "dungeons_and_combat:skull_deserter_spawn_egg",
    "dungeons_and_combat:prisoner_skull_spawn_egg",
    "dungeons_and_combat:royal_skull_spawn_egg",
    "dungeons_and_combat:counselor_skull_spawn_egg",
    "dungeons_and_combat:skull_mimic_spawn_egg"
  ],
  "infobox": {
    "item": "dungeons_and_combat:skull_spawn_egg",
    "model": ["dungeons_and_combat:skull", "dungeons_and_combat:skull_deserter", "dungeons_and_combat:prisoner_skull", "dungeons_and_combat:royal_skull", "dungeons_and_combat:counselor_skull", "dungeons_and_combat:skull_mimic"],
    "rows": [
      ["ID", "`dungeons_and_combat:skull`, `skull_deserter`, `prisoner_skull`, `royal_skull`, `counselor_skull`, `skull_mimic`"],
      ["Level", "The player's level"],
      ["Location", "Lugubrious Catacombs, Tower of Eldrich, Skull Chests"],
      { "heading": "Drops" },
      ["Common", "[[item:minecraft:bone]], [[item:dungeons_and_combat:steel_ingot]], [[item:dungeons_and_combat:cursed_soul]]"]
    ]
  }
}
---
<!-- sources:
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar worldgen/structure: the_catacumbs_lugubrious (dark forest, forest, snowy taiga), the_tower_of_eldrich (dark forest, plains, forest, snowy taiga)
  structure NBT: catacombs_lugubrious / catacumb_lugubrious (skull, skull_deserter, prisoner_skull), the_tower (prisoner_skull, royal_skull, counselor_skull); skull_chest block in catacombs_lugubrious, catacumb_lugubrious, field_of_the_fallen, the_ruins_of_kamath
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar SkullChestOnBlockRightClickedProcedure, SkullChestBlockDestroyedByPlayerProcedure (replace the chest with air and spawn SKULL_MIMIC)
  entity classes (all Monster subclasses targeting players): SkullEntity.createAttributes (22 health, 3 attack, 0 armor, 0.4 knockback resistance, 0.2 speed, 16 follow), SkullDeserterEntity (12, 1, 0, 0.4, 0.2; Deserter armor and Deserter Steel Sword), PrisonerSkullEntity (10, 4, 2, 0, 0.2; Prisoner Helmet), RoyalSkullEntity (12, 1, 0, 0.4, 0.2; Royal Steel armor and sword), CounselorSkullEntity (14, 3, 0, 0.4, 0.25; Counselor Tunic, leggings, Cursed Steel Dagger), SkullMimicEntity (28, 3, 2, 0.4, 0.25)
  game-data/loot-tables.json dungeons_and_combat:entities/{skull,skull_deserter,skull_mimic}; no tables for prisoner_skull, royal_skull, counselor_skull
  config/paxi/datapacks/soulrend_mob_leveling (no files: level = player level)
  calc: L10: health ×3.7, attack ×1.9, armor ×1.099; L40: ×12.7, ×4.9, ×1.429; L100: ×30.7, ×10.9, ×2.089
-->
The **Catacomb Skulls** are Dungeons and Combat's undead skeleton soldiers. They never spawn in the open: each one stands inside a structure when it generates, mostly in the Lugubrious Catacombs and the Tower of Eldrich. The **Skull Mimic** waits inside Skull Chests. No quest asks for them.

## Spawning

| Mob | Where |
| --- | --- |
| Skull | Lugubrious Catacombs |
| Skull Deserter | Lugubrious Catacombs |
| Prisoner Skull | Lugubrious Catacombs, Tower of Eldrich |
| Royal Skull | Tower of Eldrich |
| Counselor Skull | Tower of Eldrich |
| Skull Mimic | Any [[item:dungeons_and_combat:skull_chest]] |

The Lugubrious Catacombs generate in Dark Forest, Forest and Snowy Taiga biomes; the Tower of Eldrich in Dark Forest, Plains, Forest and Snowy Taiga.

> [!WARNING]
> Opening or breaking a **Skull Chest** destroys it and releases a Skull Mimic. Skull Chests appear in the Lugubrious Catacombs, the Field of the Fallen and the Ruins of Kamath.

## Stats

None of these mobs has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor, before the weapons and armor they spawn with.

| Mob | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Skull | 22 HP / 3 / 0 | 81.4 HP / 5.7 / 0 | 279.4 HP / 14.7 / 0 | 675.4 HP / 32.7 / 0 |
| Skull Deserter | 12 HP / 1 / 0 | 44.4 HP / 1.9 / 0 | 152.4 HP / 4.9 / 0 | 368.4 HP / 10.9 / 0 |
| Prisoner Skull | 10 HP / 4 / 2 | 37 HP / 7.6 / 2.2 | 127 HP / 19.6 / 2.9 | 307 HP / 43.6 / 4.2 |
| Royal Skull | 12 HP / 1 / 0 | 44.4 HP / 1.9 / 0 | 152.4 HP / 4.9 / 0 | 368.4 HP / 10.9 / 0 |
| Counselor Skull | 14 HP / 3 / 0 | 51.8 HP / 5.7 / 0 | 177.8 HP / 14.7 / 0 | 429.8 HP / 32.7 / 0 |
| Skull Mimic | 28 HP / 3 / 2 | 103.6 HP / 5.7 / 2.2 | 355.6 HP / 14.7 / 2.9 | 859.6 HP / 32.7 / 4.2 |

All of them notice players from 16 blocks. Every Skull except the Prisoner Skull has 40% knockback resistance.

## Equipment

Several Skulls spawn armed and armored, which raises their damage and armor above the table:

| Mob | Spawns with |
| --- | --- |
| Skull Deserter | Full [[items/armor/strength-path/deserter-armor\|Deserter Armor]] and a [[item:dungeons_and_combat:deserter_steel_sword]] |
| Prisoner Skull | [[item:dungeons_and_combat:prisoner_helmet]] |
| Royal Skull | Full Royal Steel armor ([[item:dungeons_and_combat:royal_steel_helmet]]) and a [[item:dungeons_and_combat:royal_steel_sword]] |
| Counselor Skull | [[item:dungeons_and_combat:counselor_chestplate]], Counselor leggings and a [[item:dungeons_and_combat:cursed_steel_dagger]] |

## Drops

| Mob | Drops |
| --- | --- |
| Skull | 0–2 [[item:minecraft:bone]]; then 0–1 [[item:dungeons_and_combat:steel_ingot]] (4 in 35) or 1 [[item:dungeons_and_combat:cursed_soul]] (1 in 35) |
| Skull Deserter | 0–2 Bone; 0–2 Steel Ingot (8 in 40) or 1 Cursed Soul (2 in 40); an [[item:dungeons_and_combat:armor_plate]] (1 in 6) |
| Skull Mimic | 0–4 [[item:dungeons_and_combat:bone_planks]]; 0–1 [[item:dungeons_and_combat:mimic_eye]]; 0–1 [[item:dungeons_and_combat:slimy_tongue]]; 0–2 Bone; 0–3 [[item:minecraft:gold_ingot]] (10 in 46), 0–1 [[item:minecraft:golden_apple]] (5 in 46) or 0–3 [[item:minecraft:stick]] (1 in 46); an [[item:dungeons_and_combat:avarice_mask_helmet]] (1 in 11) |

Each entry separated by a semicolon is its own roll. Prisoner, Royal and Counselor Skulls have no loot table of their own. Looting doesn't change these drops.
