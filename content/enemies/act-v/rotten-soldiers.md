---
{
  "title": "Rotten Soldiers",
  "summary": "The armored, oversized zombies of the Past: every zombie that spawns there becomes a Rotten Soldier, Knight, Guard, Champion, Giant or Titan.",
  "aliases": ["Rotten Soldier", "Rotten Knight", "Rotten Guard", "Rotten Champion", "Rotten Giant", "Rotten Titan"],
  "infobox": {
    "item": "efn:ruinsgreatsword",
    "itemRows": false,
    "rows": [
      ["ID", "`minecraft:zombie`, `minecraft:zombie_villager` (renamed)"],
      ["Act", "[[progression/act-v-duties|Act V]]"],
      ["Level", "The player's level"],
      ["Location", "The Past (Dead Wasteland)"],
      ["Drops", "Zombie loot; their gear (8.5% per piece)"]
    ]
  }
}
---
<!-- sources:
  kubejs/server_scripts/dimension/past.js (PastRottenSpawns: name, weapon, off hand, armor set, Pehkui size, base health, base attack, base speed, weight; SOLDIERS maps minecraft:zombie and minecraft:zombie_villager to it; pastSoldierSpawn sets CustomName, HandItems, ArmorItems, max_health, movement_speed = speed / size, attack_damage, knockback_resistance 1.0; pastSpawnBlocked: cancelled if more than 3 soldiers within 24 blocks or a Past boss within 96 blocks; forced thunder every 20 ticks)
  kubejs/server_scripts/global.js (PAST_DIMENSION graveyard:past)
  config/paxi/datapacks/soulrend_worldgen/data/soulrend/worldgen/biome/dead_wasteland.json (zombie 950, zombie_villager 50, skeleton 990, wither_skeleton 10, groups of 1-4)
  docs/instance-guide.md (Auto Leveling's level modifier still multiplies Past base stats, confirmed in game by the pack author)
  Install/libraries/.../client-1.20.1-...-srg.jar Mob (equipment drop chance 0.085 per slot unless set, +1% per Looting level, needs a recent player hit); past.js doesn't change it
  game-data/loot-tables.json minecraft:entities/zombie (unchanged)
  config/paxi/datapacks/soulrend_mob_leveling (no zombie file: level = player level)
  calc: level 200: health × 60.7, attack × 20.9; speed = base / size
-->
**Rotten Soldiers** are the undead army of the Past, the dimension where [[progression/act-v-duties|Act V]] takes place. Soulrend's KubeJS script turns every Zombie and Zombie Villager that spawns there into one of six named soldiers, each with its own gear, size and fixed base stats. They can't be knocked back, and the bigger ones are giants several times a player's height. No quest asks for them.

## Spawning

The Past's Dead Wasteland spawns Zombies (weight 950) and Zombie Villagers (50) in groups of 1–4; each one is replaced as it spawns. A soldier's spawn is cancelled when more than three soldiers are already within 24 blocks, or when one of the Past's bosses is within 96 blocks. Thunder rolls in the Past at all times.

| Soldier | Chance | Size | Weapon | Off hand | Armor |
| --- | --- | --- | --- | --- | --- |
| Rotten Soldier | 60% | ×1.25 | [[item:efn:ruinsgreatsword]] | | Ruinfighter ([[item:efn:ruinfighter_chestplate]]) |
| Rotten Knight | 20% | ×1.5 | [[item:efn:sword_of_pioneer]] | [[item:dungeons_and_combat:steel_shield]] | Kamath ([[item:dungeons_and_combat:kamath_armor_chestplate]]) |
| Rotten Guard | 14% | ×2 | [[item:dungeons_and_combat:morning_star_mace]] | [[item:dungeons_and_combat:ebony_shield]] | Dark Metal ([[item:dungeons_and_combat:dark_metal_chestplate]]) |
| Rotten Champion | 3% | ×4 | Ruins Greatsword | | Kamath |
| Rotten Giant | 2% | ×4 | [[item:soulsweapons:kirkhammer]] | Ebony Shield | Dark Metal |
| Rotten Titan | 1% | ×6 | [[item:efn:kusabimaru]] | | Oni Slayer ([[item:dungeons_and_combat:oni_slayer_chestplate]]) |

## Stats

The script sets each soldier's base health and attack. Their level still follows the nearest player (see [[leveling/mob-levels|Mob Levels]]), and Auto Leveling multiplies those bases, so at level 200 they are far stronger than the base suggests. Armor comes from the full set each one wears, and the weapon adds to the attack.

| Soldier | Base health / attack | Level 200 | Speed |
| --- | --- | --- | --- |
| Rotten Soldier | 100 HP / 20 | 6,070 HP / 418 | 0.4 |
| Rotten Knight | 200 HP / 40 | 12,140 HP / 836 | 0.4 |
| Rotten Guard | 600 HP / 5 | 36,420 HP / 104.5 | 0.3 |
| Rotten Champion | 500 HP / 80 | 30,350 HP / 1,672 | 0.15 |
| Rotten Giant | 1,200 HP / 20 | 72,840 HP / 418 | 0.15 |
| Rotten Titan | 2,000 HP / 80 | 121,400 HP / 1,672 | 0.1 |

All of them have 100% knockback resistance. Larger soldiers move more slowly: their speed is divided by their size.

> [!CAUTION]
> At level 200 a Rotten Champion or Titan's attack value alone is over 1,600. Keep away from the giants and pick off the smaller soldiers.

## Drops

They keep the vanilla Zombie loot: 0–2 [[item:minecraft:rotten_flesh]] and, on a player kill, a 2.5% chance of an [[item:minecraft:iron_ingot]], [[item:minecraft:carrot]] or [[item:minecraft:potato]]. The script doesn't change their equipment drop chances, so each weapon, shield and armor piece has vanilla's 8.5% chance (+1% per Looting level) to drop when a player kills them.
