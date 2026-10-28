---
{
  "title": "Emaciated Soldiers",
  "summary": "The armored skeleton soldiers of the Past: every skeleton that spawns there becomes an Emaciated Pikeman, Spearman or Noble.",
  "aliases": ["Emaciated Pikeman", "Emaciated Spearman", "Emaciated Noble"],
  "infobox": {
    "item": "wom:agony",
    "itemRows": false,
    "rows": [
      ["ID", "`minecraft:skeleton` (renamed)"],
      ["Act", "[[progression/act-v-duties|Act V]]"],
      ["Level", "The player's level"],
      ["Location", "The Past (Dead Wasteland)"],
      ["Drops", "Skeleton loot; their gear (8.5% per piece)"]
    ]
  }
}
---
<!-- sources:
  kubejs/server_scripts/dimension/past.js (SOLDIERS["minecraft:skeleton"]: Emaciated Pikeman (Dragon Steel Fire Pike, Steel Shield, Ronin armor, size 1.25, 50 health, 80 attack, speed 0.6, weight 60, attack speed 5), Emaciated Spearman (Agony, Dark Cover armor, 1.25, 100, 120, 0.6, weight 35, attack speed 6), Emaciated Noble (Astrape, Electric Blue Dragon Shield, Sunset Wings armor, 2, 600, 160, 1, weight 5, attack speed 6); minecraft:wither_skeleton becomes the Decaying King; spawn throttling as for Rotten Soldiers)
  config/paxi/datapacks/soulrend_worldgen/data/soulrend/worldgen/biome/dead_wasteland.json (skeleton 990, groups of 1-4; wither_skeleton 10)
  docs/instance-guide.md (Auto Leveling's level modifier still multiplies Past base stats)
  Install/libraries/.../client-1.20.1-...-srg.jar Mob (equipment drop chance 0.085 per slot by default)
  game-data/loot-tables.json minecraft:entities/skeleton (unchanged)
  config/paxi/datapacks/soulrend_mob_leveling (no skeleton file: level = player level)
  calc: level 200: health × 60.7, attack × 20.9; speed = base / size
-->
**Emaciated Soldiers** are the skeleton warriors of the Past, the dimension of [[progression/act-v-duties|Act V]]. Soulrend's KubeJS script turns every Skeleton that spawns there into an Emaciated Pikeman, Spearman or Noble, with polearms instead of bows and very high base damage. No quest asks for them. Wither Skeletons in the Past become the [[bosses/act-v/decaying-king-past|Decaying King]] instead.

## Spawning

The Past's Dead Wasteland spawns Skeletons (weight 990) in groups of 1–4; each is replaced as it spawns. As with the [[enemies/act-v/rotten-soldiers|Rotten Soldiers]], a spawn is cancelled when more than three soldiers are within 24 blocks or a Past boss is within 96 blocks.

| Soldier | Chance | Size | Weapon | Off hand | Armor |
| --- | --- | --- | --- | --- | --- |
| Emaciated Pikeman | 60% | ×1.25 | [[item:epic_knights_ice_and_fire:dragonsteel_fire_pike]] | [[item:dungeons_and_combat:steel_shield]] | Ronin ([[item:fantasy_armor:ronin_chestplate]]) |
| Emaciated Spearman | 35% | ×1.25 | [[item:wom:agony]] | | Dark Cover ([[item:fantasy_armor:dark_cover_chestplate]]) |
| Emaciated Noble | 5% | ×2 | [[item:cataclysm:astrape]] | [[item:dungeons_and_combat:electric_dragon_shield]] | Sunset Wings ([[item:fantasy_armor:sunset_wings_chestplate]]) |

## Stats

The script sets each soldier's base health and attack, and Auto Leveling multiplies them by the nearest player's level (see [[leveling/mob-levels|Mob Levels]]). Armor comes from the set each one wears.

| Soldier | Base health / attack | Level 200 | Speed |
| --- | --- | --- | --- |
| Emaciated Pikeman | 50 HP / 80 | 3,035 HP / 1,672 | 0.48 |
| Emaciated Spearman | 100 HP / 120 | 6,070 HP / 2,508 | 0.48 |
| Emaciated Noble | 600 HP / 160 | 36,420 HP / 3,344 | 0.5 |

All three have 100% knockback resistance.

> [!CAUTION]
> Emaciated Soldiers are frail compared with the Rotten Soldiers but hit much harder: a level 200 Noble's attack value is over 3,000.

## Drops

They keep the vanilla Skeleton loot: 0–2 [[item:minecraft:arrow]] and 0–2 [[item:minecraft:bone]]. Each weapon, shield and armor piece has vanilla's 8.5% chance (+1% per Looting level) to drop when a player kills them.
