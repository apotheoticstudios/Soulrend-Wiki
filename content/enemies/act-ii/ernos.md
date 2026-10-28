---
{
  "title": "Ernos",
  "summary": "Dungeons and Combat's armored beast of forests and taigas; an optional Act II kill quest and the source of Ernos Fur and Fangs.",
  "items": ["dungeons_and_combat:ernos_spawn_egg"],
  "infobox": {
    "item": "dungeons_and_combat:ernos_spawn_egg",
    "model": "dungeons_and_combat:ernos",
    "rows": [
      ["ID", "`dungeons_and_combat:ernos`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "The player's level"],
      ["Health", "762 HP (level 40)"],
      ["Location", "Forests and taigas; Ernos Caves"],
      { "heading": "Drops" },
      ["Common", "0–3 [[item:dungeons_and_combat:ernos_fur]]"],
      ["Chance", "0–2 [[item:dungeons_and_combat:ernos_fang]] (1 in 3)"]
    ]
  }
}
---
<!-- sources:
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar data/dungeons_and_combat/forge/biome_modifier (ernos weight 15, groups of 1 in dark_forest, forest, taiga, snowy_taiga); worldgen/structure/ernos_cave.json (dark forest, taiga, snowy taiga, forest); structure NBT ernos_cave (ernos)
  mods/dungeons_and_combat-1.2.4-forge-1.20.1.jar ErnosEntity.createAttributes (60 health, 12 attack, 8 armor, 0.8 knockback resistance, 1 attack knockback, 0.2 speed, 16 follow range)
  game-data/loot-tables.json dungeons_and_combat:entities/ernos (Ernos Fang 0-2 weight 1 vs air 2; Ernos Fur 0-3)
  config/ftbquests/quests/chapters/act_2.snbt (kill 1 dungeons_and_combat:ernos "(optional)"; rewards 2 Ernos Fur, 2 XP levels, 1 Estus Flask; Hunter Cape and Hunter Boots follow it)
  content/bugs.md (Ernos Fang Necklace can't be obtained)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  calc: L10: health 60 × 3.7 = 222, attack 12 × 1.9 = 22.8, armor 8 × 1.099 = 8.8; L40: 762, 58.8, 11.4; L100: 1,842, 130.8, 16.7
-->
**Ernos** is a large, armored beast from Dungeons and Combat that roams forests and taigas. It hits hard for an early mob and is the only source of [[item:dungeons_and_combat:ernos_fur]], which the Hunter gear needs. Killing one is an optional quest in [[progression/act-ii-first-steps|Act II]]'s Dungeons and Combat branch.

## Spawning

- Ernos spawns alone in Dark Forests, Forests, Taigas and Snowy Taigas, with a spawn weight of 15.
- An **Ernos Cave** in the same biomes holds one.

## Stats

Ernos has no level setting, so its level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 60 HP | 222 HP | 762 HP | 1,842 HP |
| Attack damage | 12 | 22.8 | 58.8 | 130.8 |
| Armor | 8 | 8.8 | 11.4 | 16.7 |
| Knockback resistance | 80% | 80% | 80% | 80% |
| Movement speed | 0.2 | | | |
| Follow range | 16 blocks | | | |

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:dungeons_and_combat:ernos_fur]] | 0–3 | Always rolled |
| [[item:dungeons_and_combat:ernos_fang]] | 0–2 | 1 in 3 |

Looting doesn't change these drops. The Ernos Fang Necklace can't be obtained (see [[bugs|Known Bugs]]), but the fang has other uses:

{{uses dungeons_and_combat:ernos_fang}}

## Quests

- **Ernos (optional)** (Act II, Dungeons and Combat branch): kill one. Rewards: 2 [[item:dungeons_and_combat:ernos_fur]], 2 XP levels and an [[item:dungeons_and_combat:estus_flask]]. It opens the Hunter Cape and Hunter Boots quests. See [[progression/act-ii-first-steps/dungeons-and-combat-bosses|Dungeons and Combat Bosses]].
