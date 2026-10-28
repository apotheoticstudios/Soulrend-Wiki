---
{
  "title": "Moderately Sized Chungus",
  "summary": "A Soulslike Weaponry Overworld mob that only spawns, in packs of 4–8, near a Chungus Monolith a player has built; it drops Chungus Emeralds.",
  "aliases": ["Chungus", "Big Chungus"],
  "items": ["soulsweapons:big_chungus_spawn_egg"],
  "infobox": {
    "item": "soulsweapons:big_chungus_spawn_egg",
    "rows": [
      ["ID", "`soulsweapons:big_chungus`"],
      ["Level", "The player's level"],
      ["Health", "178 HP (level 40)"],
      ["Location", "Overworld, within 32 blocks of a [[item:soulsweapons:chungus_monolith]]"],
      { "heading": "Drops" },
      ["Player kill", "0–1 [[item:soulsweapons:chungus_emerald]]"]
    ]
  }
}
---
<!-- sources:
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar data/soulsweapons/forge/biome_modifier (#forge:is_overworld, soulsweapons:big_chungus weight 100, groups of 4-8)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar BigChungus.checkSpawnObstruction (valid block AND isSpawnable AND checkForMonolith), checkForMonolith (searches ConfigConstructor.chungus_monolith_radius around the mob for BlockRegistry.CHUNGUS_MONOLITH), isSpawnable (can_moderatly_sized_chungus_spawn), canSpawnInDark (no Peaceful, dark enough)
  config/soulsweapons/soulsweapons.json (can_moderatly_sized_chungus_spawn true, chungus_monolith_radius 32, moderatly_sized_chungus_heath 14, moderatly_sized_chungus_armor 0)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar BigChungus.createChungusAttributes (health and armor from config, 0.3 speed, 2 attack, 35 follow range)
  game-data/recipes.json soulsweapons:chungus_monolith (shaped); no structure NBT in the scanned mods contains the monolith
  game-data/loot-tables.json soulsweapons:entities/big_chungus (player kill, 0-1 Chungus Emerald, Looting +0-1)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L10: 14 × 3.7 = 51.8, attack 2 × 1.9 = 3.8; L40: 177.8, 9.8; L100: 429.8, 21.8
-->
The **Moderately Sized Chungus** is a hostile mob from Soulslike Weaponry. It never appears in the wild on its own: packs of Chungus only spawn around a [[item:soulsweapons:chungus_monolith]], a block players craft. Placing one turns the area into a Chungus farm, the only source of [[item:soulsweapons:chungus_emerald]].

## Spawning

The Chungus is on the Overworld's hostile spawn list with a high weight (100, in groups of 4–8), but each spawn is cancelled unless a Chungus Monolith is within 32 blocks. Like other hostile mobs, it needs darkness and doesn't spawn on Peaceful.

No structure in Soulrend contains a Monolith, so Chungus only appear where a player has placed one.

{{recipes soulsweapons:chungus_monolith}}

## Stats

The Chungus has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Its health and armor come from Soulslike Weaponry's config (14 and 0).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 14 HP | 51.8 HP | 177.8 HP | 429.8 HP |
| Attack damage | 2 | 3.8 | 9.8 | 21.8 |
| Armor | 0 | 0 | 0 | 0 |
| Movement speed | 0.3 | 0.3 | 0.3 | 0.3 |
| Follow range | 35 blocks | | | |

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:soulsweapons:chungus_emerald]] | 0–1 (+0–1 per Looting level) | Player kill |

{{uses soulsweapons:chungus_emerald}}
