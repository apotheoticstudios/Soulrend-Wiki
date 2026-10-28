---
{
  "title": "Witch & Evoker",
  "summary": "The vanilla Witch and Evoker, which drop the Top-Right and Bottom-Left shards of the Nether seal in Soulrend.",
  "aliases": ["Witch", "Evoker"],
  "items": ["minecraft:witch_spawn_egg", "minecraft:evoker_spawn_egg"],
  "infobox": {
    "item": "minecraft:evoker_spawn_egg",
    "rows": [
      ["ID", "`minecraft:witch`, `minecraft:evoker`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "The player's level"],
      ["Location", "Witch: Overworld, swamp huts. Evoker: woodland mansions, raids, Evoker Forts"],
      { "heading": "Drops" },
      ["Witch", "[[item:nether_remastered:seal_piece_2]] (Top-Right Shard)"],
      ["Evoker", "[[item:nether_remastered:seal_piece_3]] (Bottom-Left Shard)"]
    ]
  }
}
---
<!-- sources:
  config/nether remastered.toml ["Shards Drops"] ("Top Right Piece" = minecraft:witch, "Bottom Left Piece" = minecraft:evoker)
  mods/nether_remastered-2.6-forge-1.20.1.jar TopRightPieceProcedure / BottomLeftPieceProcedure (on death, roll nether_remastered:entities/top_right_piece / bottom_left_piece: shard weight 10 vs air 90)
  config/serilum/configurableextramobdrops/mobdropconfig.txt (minecraft:witch: seal_piece_2 at 0.1; minecraft:evoker: seal_piece_3 at 0.1)
  game-data/loot-tables.json minecraft:entities/{witch,evoker} (unchanged from vanilla)
  Install/libraries/net/minecraft/client/1.20.1-20230612.114412/client-1.20.1-20230612.114412-srg.jar Witch m_34155_ (26 health, 0.25 speed, 16 follow), Evoker m_32657_ (24 health, 0.5 speed, 12 follow)
  mods/irons_spellbooks-1.20.1-3.15.6.jar worldgen/structure/evoker_fort.json, structure NBT evoker_fort (archevoker, vex)
  config/paxi/datapacks/soulrend_mob_leveling (no files: level = player level)
  calc: two independent 10% rolls: at least one shard = 1 - 0.9² = 19%; Witch L10 health 26 × 3.7 = 96.2, L40 330.2, L100 798.2; Evoker 88.8, 304.8, 736.8
-->
The **Witch** and the **Evoker** are vanilla Minecraft mobs that Soulrend ties into [[progression/act-ii-first-steps|Act II]]: each can drop one of the four shards of the [[progression/act-ii-first-steps/the-seal-of-the-underworld|Seal of the Underworld]]. Witches carry the Top-Right Shard and Evokers the Bottom-Left Shard, so either mob is an alternative to the boss that normally gives that shard.

## Shard drops

| Mob | Shard | Chance per kill |
| --- | --- | --- |
| Witch | Top-Right Shard ([[item:nether_remastered:seal_piece_2]]) | Two separate 10% rolls (19% for at least one) |
| Evoker | Bottom-Left Shard ([[item:nether_remastered:seal_piece_3]]) | Two separate 10% rolls (19% for at least one) |

One roll comes from Nether Remastered and the other from Soulrend's extra mob drops, so a lucky kill can drop two shards. All four shards are called "Mysterious Shard" in game.

The bosses that give the same shards are [[bosses/act-ii/frostmaw|Frostmaw]] (Top-Right) and [[bosses/act-ii/sunleia|Sunleia]] with [[bosses/act-ii/kamath|Kamath]] (Bottom-Left).

## Spawning

- **Witch:** spawns in the dark across the Overworld and lives in swamp huts, as in vanilla Minecraft. Apotheosis Boss Dungeons can also summon an Apothic Witch.
- **Evoker:** found in woodland mansions and raids, as in vanilla Minecraft. Iron's Spellbooks' Evoker Forts are led by the [[bosses/optional-and-world/archevoker|Archevoker]] instead.

## Stats

Neither has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Both fight with potions or spells rather than their attack value.

| Mob | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Witch | 26 HP | 96.2 HP | 330.2 HP | 798.2 HP |
| Evoker | 24 HP | 88.8 HP | 304.8 HP | 736.8 HP |

## Other drops

Both keep their vanilla loot: the Witch drops potion ingredients, and the Evoker always drops an [[item:minecraft:totem_of_undying]] and, on a player kill, 0–1 [[item:minecraft:emerald]].
