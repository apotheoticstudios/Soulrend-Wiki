---
{
  "title": "Skeleton",
  "summary": "The vanilla bow-wielding undead of the Overworld; a Hunter's Journal target and a source of Bottled Nether Essence.",
  "aliases": ["Skeletons", "Stray"],
  "items": ["minecraft:skeleton_spawn_egg", "minecraft:stray_spawn_egg"],
  "infobox": {
    "item": "minecraft:skeleton_spawn_egg",
    "model": ["minecraft:skeleton", "minecraft:stray"],
    "rows": [
      ["ID", "`minecraft:skeleton`"],
      ["Act", "[[progression/act-i-awakening|Act I]]"],
      ["Level", "The player's level"],
      ["Health", "74 HP (level 10)"],
      ["Location", "Overworld, at night and in the dark"],
      { "heading": "Drops" },
      ["Common", "0–2 [[item:minecraft:arrow]], 0–2 [[item:minecraft:bone]]"]
    ]
  }
}
---
<!-- sources:
  Install/libraries/net/minecraft/client/1.20.1-20230612.114412/client-1.20.1-20230612.114412-srg.jar AbstractSkeleton.createAttributes m_32166_ (20 health, 2 attack, 0 armor, 0.25 speed, 16 follow range); Stray uses the same
  game-data/loot-tables.json minecraft:entities/{skeleton,stray} (unchanged from vanilla)
  config/ftbquests/quests/chapters/hunters_journal.snbt (minecraft:skeleton 50, 200, 500, 1000)
  config/nether remastered.toml "Nether Essence" (skeleton, stray, skeleton_horse, ...)
  mods/awakenedmobs-1.1.3.jar data/awakenedmobs/awakened_mobs/skeletons.json (#minecraft:skeletons), config/awakenedmobs-common.toml (runnerChance 0.05, runnerSpeedBonus 0.2, fleeChance 0.05 below 10% health)
  kubejs/server_scripts/dimension/past.js (skeletons in the Past become Emaciated Soldiers)
  config/apotheosis/adventure.cfg "Boss Spawn Dimensions" (Nether and End only); soulrend_apotheosis_rebalance forge/biome_modifier/boss_dungeon*.json; .../bosses/overworld/{skeleton,stray}.json (uncommon-rare, #overworld_bow gear, fire resistance, modifiers)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L10: health 20 × 3.7 = 74, attack 2 × 1.9 = 3.8; L40: 254, 9.8; L100: 614, 21.8
-->
The **Skeleton** is Minecraft's undead archer. In Soulrend it is one of the three mobs on the [[progression/side-chapters/hunters-journal|Hunter's Journal]]'s main ladders, and like Zombies it fills bottles of Nether essence for the Nether seal. The Stray, its snowy variant, shares its stats.

## Spawning

Skeletons spawn in the dark across the Overworld as in vanilla Minecraft; Strays replace most of them in snowy biomes.

In the Past, every Skeleton that spawns is turned into one of the [[enemies/act-v/emaciated-soldiers|Emaciated Soldiers]].

## Stats

The Skeleton has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Strays use the same values. Skeletons fight with bows, so most of their damage comes from arrows rather than the attack value.

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 20 HP | 74 HP | 254 HP | 614 HP |
| Attack damage | 2 | 3.8 | 9.8 | 21.8 |
| Armor | 0 | 0 | 0 | 0 |
| Movement speed | 0.25 | 0.25 | 0.25 | 0.25 |
| Follow range | 16 blocks | | | |

**Runners.** Awakened Mobs gives each Skeleton and Stray a 5% chance to spawn as a runner, 20% faster than normal. One that drops below 10% health after a hit has a 5% chance to flee.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:minecraft:arrow]] | 0–2 | Looting adds 0–1 |
| [[item:minecraft:bone]] | 0–2 | Looting adds 0–1 |

Strays also drop 0–1 [[item:minecraft:tipped_arrow]] of Slowness on a player kill.

**Bottled Nether Essence.** Killing a Skeleton or Stray while holding an [[item:nether_remastered:obsidian_infused_bottle]] in the off hand turns the bottle into [[item:nether_remastered:bottled_nether_essence]]. See [[progression/act-ii-first-steps/bottled-nether-essence|Bottled Nether Essence]].

## Apothic variants

Apotheosis bosses don't spawn naturally in the Overworld in Soulrend, but **Boss Dungeons** (in every Overworld biome except oceans and the Deep Dark) summon one when a player comes near, and a Skeleton or Stray can be chosen. Soulrend's versions are Uncommon or Rare, carry Overworld bow gear with random affixes and have Fire Resistance. On top of the scaled stats above:

| Rarity | Skeleton | Stray |
| --- | --- | --- |
| Uncommon | +20–60 health; +5–10% speed; +20–40% arrow damage; +25% knockback resistance | Same as the Skeleton |
| Rare | +40–100 health; +10–18% speed; +25–50% arrow damage; +33% knockback resistance | +45–105 health; +10–20% speed; +30–55% arrow damage; +35% knockback resistance |

## Quests

- [[progression/side-chapters/hunters-journal|Hunter's Journal]]: 50, 200, 500 and 1,000 Skeleton kills. Strays don't count.
