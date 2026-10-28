---
{
  "title": "Zombie",
  "summary": "The vanilla undead of the Overworld; three kills end Act I, the Hunter's Journal counts them, and they fill Bottled Nether Essence.",
  "aliases": ["Zombies", "Husk", "Drowned", "Zombie Villager"],
  "items": ["minecraft:zombie_spawn_egg", "minecraft:husk_spawn_egg", "minecraft:drowned_spawn_egg", "minecraft:zombie_villager_spawn_egg"],
  "infobox": {
    "item": "minecraft:zombie_spawn_egg",
    "model": ["minecraft:zombie", "minecraft:husk", "minecraft:drowned", "minecraft:zombie_villager"],
    "rows": [
      ["ID", "`minecraft:zombie`"],
      ["Act", "[[progression/act-i-awakening|Act I]]"],
      ["Level", "The player's level"],
      ["Health", "74 HP (level 10)"],
      ["Location", "Overworld, at night and in the dark"],
      { "heading": "Drops" },
      ["Common", "0–2 [[item:minecraft:rotten_flesh]]"],
      ["Rare", "[[item:minecraft:iron_ingot]], [[item:minecraft:carrot]] or [[item:minecraft:potato]]"]
    ]
  }
}
---
<!-- sources:
  Install/libraries/net/minecraft/client/1.20.1-20230612.114412/client-1.20.1-20230612.114412-srg.jar Zombie.createAttributes m_34328_ (20 health, 3 attack, 2 armor, 0.23 speed, 35 follow range); Husk, Drowned and ZombieVillager use the same attributes
  game-data/loot-tables.json minecraft:entities/{zombie,husk,zombie_villager,drowned} (unchanged from vanilla)
  config/ftbquests/quests/chapters/act_1.snbt (kill 3 minecraft:zombie), hunters_journal.snbt (50, 200, 500, 1000)
  config/nether remastered.toml "Nether Essence" (zombie, husk, zombie_villager, drowned, ...)
  mods/awakenedmobs-1.1.3.jar data/awakenedmobs/awakened_mobs/zombies.json (#awakenedmobs:zombies = zombie, zombie_villager, husk, drowned, zombified_piglin; no weapon chance, so config weaponChance 0 applies), config/awakenedmobs-common.toml (runnerChance 0.05, runnerSpeedBonus 0.2, fleeHealthFraction 0.1, fleeChance 0.05)
  kubejs/server_scripts/dimension/past.js (zombies and zombie villagers in the Past become Rotten Soldiers)
  config/apotheosis/adventure.cfg "Boss Spawn Dimensions" (Nether and End only); config/paxi/datapacks/soulrend_apotheosis_rebalance/data/apotheosis/forge/biome_modifier/boss_dungeon*.json (all biomes but oceans and deep_dark); .../bosses/overworld/{zombie,husk}.json (uncommon-rare, #overworld gear, fire resistance, modifiers)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L10: health 20 × 3.7 = 74, attack 3 × 1.9 = 5.7, armor 2 × 1.099 = 2.2; L40: 254, 14.7, 2.9; L100: 614, 32.7, 4.2
-->
The **Zombie** is Minecraft's basic undead mob, and in Soulrend it is the first enemy the quest book asks for: killing three ends [[progression/act-i-awakening|Act I]]. Its variants, the Husk, Drowned and Zombie Villager, share its stats. Zombies also fill the bottles of Nether essence that the Nether seal needs.

## Spawning

Zombies spawn in the dark across the Overworld as in vanilla Minecraft. Husks replace them in deserts, Drowned live in water, and some spawn as Zombie Villagers.

In the Past, every Zombie and Zombie Villager that spawns is turned into one of the [[enemies/act-v/rotten-soldiers|Rotten Soldiers]].

## Stats

The Zombie has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Husks, Drowned and Zombie Villagers use the same values.

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 20 HP | 74 HP | 254 HP | 614 HP |
| Attack damage | 3 | 5.7 | 14.7 | 32.7 |
| Armor | 2 | 2.2 | 2.9 | 4.2 |
| Movement speed | 0.23 | 0.23 | 0.23 | 0.23 |
| Follow range | 35 blocks | | | |

**Runners.** Awakened Mobs gives each Zombie, Husk, Drowned and Zombie Villager a 5% chance to spawn as a runner, 20% faster than normal. Any of them that drops below 10% health after a hit has a 5% chance to turn and flee.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:minecraft:rotten_flesh]] | 0–2 | Always rolled; Looting adds 0–1 |
| [[item:minecraft:iron_ingot]], [[item:minecraft:carrot]] or [[item:minecraft:potato]] (cooked if the Zombie was burning) | 1 | Player kill, 2.5% (+1% per Looting level) |

Drowned drop a [[item:minecraft:copper_ingot]] instead of the rare drop, at 11% (+2% per Looting level).

**Bottled Nether Essence.** Killing a Zombie, Husk, Drowned or Zombie Villager while holding an [[item:nether_remastered:obsidian_infused_bottle]] in the off hand turns the bottle into [[item:nether_remastered:bottled_nether_essence]]. See [[progression/act-ii-first-steps/bottled-nether-essence|Bottled Nether Essence]].

## Apothic variants

Apotheosis bosses don't spawn naturally in the Overworld in Soulrend, but **Boss Dungeons** (in every Overworld biome except oceans and the Deep Dark) summon one when a player comes near, and a Zombie or Husk can be chosen. Soulrend's versions are Uncommon or Rare, wear Overworld gear with random affixes and have Fire Resistance. On top of the scaled stats above:

| Rarity | Zombie | Husk |
| --- | --- | --- |
| Uncommon | +20–60 health; +5–10% speed; +20–40% attack; +30% knockback resistance | +20–60 health; +15–20% speed; +20–40% attack; +30% knockback resistance |
| Rare | +40–100 health; +10–18% speed; +25–50% attack; +40% knockback resistance | +40–90 health; +15–25% speed; +25–50% attack; +40% knockback resistance |

## Quests

- [[progression/act-i-awakening/kill-3-zombies|Kill 3 Zombies]]: the last task of Act I.
- [[progression/side-chapters/hunters-journal|Hunter's Journal]]: 50, 200, 500 and 1,000 Zombie kills. Husks and other variants don't count.
