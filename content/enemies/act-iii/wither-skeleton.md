---
{
  "title": "Wither Skeleton",
  "summary": "The Nether fortress skeleton that drops the skulls for the Wither and, in Soulrend, End Remastered's Wither Eye; a Hunter's Journal target.",
  "aliases": ["Wither Skeletons"],
  "items": ["minecraft:wither_skeleton_spawn_egg"],
  "infobox": {
    "item": "minecraft:wither_skeleton_spawn_egg",
    "rows": [
      ["ID", "`minecraft:wither_skeleton`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "The player's level"],
      ["Health", "614 HP (level 100)"],
      ["Location", "Nether fortresses"],
      { "heading": "Drops" },
      ["Rare", "[[item:minecraft:wither_skeleton_skull]] (2.5%), [[item:endrem:wither_eye]] (10%)"]
    ]
  }
}
---
<!-- sources:
  Install/libraries/net/minecraft/client/1.20.1-20230612.114412/client-1.20.1-20230612.114412-srg.jar AbstractSkeleton.createAttributes m_32166_ (20 health, 2 attack, 0.25 speed, 16 follow); the Wither Skeleton is registered with it
  game-data/loot-tables.json minecraft:entities/wither_skeleton (unchanged from vanilla: up to 1 coal, 0-2 bones, skull 2.5% +1%/Looting on a player kill)
  config/serilum/configurableextramobdrops/mobdropconfig.txt (minecraft:wither_skeleton: endrem:wither_eye at 0.1)
  config/ftbquests/quests/chapters/hunters_journal.snbt (wither_skeleton kill 25, then 75; rewards 1, then 5 Wither Skeleton Skulls)
  structure NBT: The Graveyard medium_graveyard, small_crypt_pool, feature_pool (wither_skeleton); config/graveyard/the-graveyard-3.0-config.json5 disableWitherSkeletonSpawner false
  kubejs/server_scripts/dimension/past.js (wither skeletons in the Past become the Decaying King)
  mods/awakenedmobs-1.1.3.jar awakened_mobs/skeletons.json (#minecraft:skeletons); config/awakenedmobs-common.toml (runnerChance 0.05, runnerSpeedBonus 0.2)
  config/apotheosis/adventure.cfg (minecraft:the_nether|0.025|ANY); soulrend_apotheosis_rebalance bosses/the_nether/wither_skeleton.json (rare-epic, weight 100, modifiers)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L40: health 20 × 12.7 = 254, attack 2 × 4.9 = 9.8; L100: 614, 21.8; L150: 20 × 45.7 = 914, 2 × 15.9 = 31.8
-->
The **Wither Skeleton** is the tall, sword-wielding skeleton of Nether fortresses. In Soulrend it matters for two reasons: its skulls summon [[bosses/act-iii/wither|the Wither]] in [[progression/act-iii-into-the-flames|Act III]], and it has a 10% chance to drop End Remastered's [[item:endrem:wither_eye]], one of the twelve eyes that open the End. The [[progression/side-chapters/hunters-journal|Hunter's Journal]] also has a Wither Skeleton ladder that pays in skulls.

## Spawning

- **Nether fortresses**, as in vanilla Minecraft.
- **The Graveyard** places some in its Overworld structures (medium graveyards and crypts), and keeps its Wither Skeleton spawner.
- **The Past:** every Wither Skeleton that spawns there becomes the [[bosses/act-v/decaying-king-past|Decaying King]].

## Stats

The Wither Skeleton has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Most of its damage comes from its stone sword.

| Stat | Base | Act II (40) | Act III (100) | Act III-b (150) |
| --- | --- | --- | --- | --- |
| Health | 20 HP | 254 HP | 614 HP | 914 HP |
| Attack damage | 2 | 9.8 | 21.8 | 31.8 |
| Movement speed | 0.25 | | | |

Awakened Mobs gives each Wither Skeleton a 5% chance to spawn as a runner, 20% faster.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:minecraft:coal]] | Up to 1 | Looting adds 0–1 |
| [[item:minecraft:bone]] | 0–2 | Looting adds 0–1 |
| [[item:minecraft:wither_skeleton_skull]] | 1 | Player kill, 2.5% (+1% per Looting level) |
| [[item:endrem:wither_eye]] | 1 | 10% (added by Soulrend) |

## Apothic variants

Apotheosis bosses spawn naturally in the Nether: each spawn has a 2.5% chance to become one, and the Wither Skeleton is the most likely candidate there (weight 100). Soulrend's Apothic Wither Skeletons are Rare or Epic, wear Nether gear with random affixes and have Fire Resistance. On top of the scaled stats:

| Rarity | Health | Speed | Melee and arrow damage | Knockback resistance | Armor / toughness |
| --- | --- | --- | --- | --- | --- |
| Rare | +40–120 | +10–28% | +25–55% | +40% | |
| Epic | +60–140 | +20–40% | +35–70% | +50% | +4 / +2 |

## Hunter's Journal

- 25 kills: 1 [[item:minecraft:wither_skeleton_skull]].
- 75 kills: 5 Wither Skeleton Skulls.

Six skulls are enough for two Withers. See [[progression/side-chapters/hunters-journal|Hunter's Journal]].
