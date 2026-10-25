---
{
  "title": "Old Champion's Remains",
  "summary": "A shield-bearing undead champion at the Champion's Grave in taigas; when it dies, the Frenzied Shade rises from it.",
  "aliases": ["Old Champion", "Draugr Boss"],
  "items": ["soulsweapons:draugr_boss_spawn_egg"],
  "infobox": {
    "item": "soulsweapons:draugr_boss_spawn_egg",
    "rows": [
      ["ID", "`soulsweapons:draugr_boss`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "100–200 (at least 100)"],
      ["Health", "9,210 HP (level 100)"],
      ["Location", "Champion's Grave, taigas"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:soulsweapons:draugr]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/soulsweapons/leveling_settings/entities/draugr_boss.json (starting_level 100, max_level 1000)
  config/soulsweapons/soulsweapons_boss_config.json old_champions_remains_* (health 300, armor 10, attack cooldown 10 ticks, special cooldown 300 ticks, 3 hits before growing resistant, immune to projectiles after 3 hits, bleed applied 100, disables shields, fire immune, inverted heal and harm, immune to Bleed)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar DraugrBoss.createBossAttributes (max health and armor from BossConfig, 10 attack damage, 0.23 movement speed, 1.0 knockback resistance, 60 follow range); DraugrBoss$States (attacks); DraugrBoss.die (spawns soulsweapons:night_shade)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar AltarBlock (Draugr on an Old Moon Altar summons draugr_boss)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar data/soulsweapons/worldgen/structure/champions_graves.json (#minecraft:is_taiga); structure_set/overworld_structures.json (spacing 60, separation 30, shared with cathedral_of_resurrection); structures/champions_graves_main.nbt (holds the boss)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar data/soulsweapons/loot_tables/entities/draugr_boss.json (Draugr 1)
  config/soulrend_core/boss_damage.toml (soulsweapons:draugr_boss=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/soulslike_champions.snbt "The Guiding Moon", "Find the Champion's Grave", "Defeat The Old Champion"
  calc: L100: health 300 × 30.7 = 9,210; attack 10 × 10.9 = 109; armor 10 × 2.089 = 20.9; cap 20% = 1,842 HP/s
        L200: health 300 × 60.7 = 18,210; attack 10 × 20.9 = 209; armor 10 × 3.189 = 31.9; cap 20% = 3,642 HP/s
-->
**Old Champion's Remains** is the undead champion buried at the Champion's Grave. It fights with a sword and shield, and when it dies, the [[Frenzied Shade]] rises from its body for a second fight. Both kills complete the Defeat The Old Champion quest in the [[progression/side-chapters/soulslike-champions|Soulslike Champions]] chapter, which is linked from [[progression/act-ii-first-steps|Act II]].

## Location

The Old Champion's Remains waits at the Champion's Grave (`soulsweapons:champions_graves`), which generates in taiga biomes. The Champion's Grave and the Cathedral of Resurrection share one placement grid, so between them they generate at most once per 60 × 60 chunk area.

The [[item:soulsweapons:boss_compass]] points to the structures of this mod. Using the boss's own weapon, the [[item:soulsweapons:draugr]], on an [[item:soulsweapons:altar_block]] summons it again.

## Stats

The Old Champion's Remains has a level floor of 100: it takes the nearest player's Soulrend level, but never less than 100. See [[features/mobs-and-world/mob-levelling|Mob Levelling]].

| Stat | Base | Level 100 (floor) | Level 200 |
| --- | --- | --- | --- |
| Health | 300 HP | **9,210 HP** (4,605 hearts) | 18,210 HP |
| Attack damage | 10 | **109** | 209 |
| Armor | 10 | **20.9** | 31.9 |
| Knockback resistance | 100% | 100% | 100% |
| Movement speed | 0.23 | 0.23 | 0.23 |
| Follow range | 60 blocks | 60 blocks | 60 blocks |
| Damage cap | | 20% per second (1,842 HP), at least 5 s | 20% per second (3,642 HP), at least 5 s |

Its health and armor come from the Soulslike Weaponry boss config. It is immune to fire and to Bleed. Instant Health harms it and Instant Damage heals it.

## Attacks

| Attack | Notes |
| --- | --- |
| Swipes | |
| Heavy attack | |
| Run thrust | A running thrust. |
| Leap | |
| Ground slam | |
| Shield bash, shield vault | Uses its shield as a weapon. |
| Parry, counter | Blocks a hit and strikes back. |
| Backstep | |
| Battle cry | |

Its basic attacks have a 0.5 s cooldown and its special attacks a 15 s cooldown. Its hits apply Bleed buildup, and they disable shields.

## Strategy

- **Vary the damage.** It grows resistant after taking 3 hits, and it becomes immune to projectiles after 3 projectile hits.
- **Don't block.** Its attacks disable shields.
- **Fire and Bleed don't work.** It is immune to both.
- **Prepare for a second fight.** The Frenzied Shade appears as soon as it dies.
- **Sustained damage beats burst.** The damage cap blocks anything above 20% of its maximum health in a second.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:soulsweapons:draugr]] | 1 | Always |

The Frenzied Shade, which rises after the fight, drops the [[item:soulsweapons:lord_soul_dark]] and the [[item:soulsweapons:essence_of_eventide]].

## Quests

The Soulslike Champions chapter starts with **The Guiding Moon**: craft a [[item:soulsweapons:boss_compass]] (reward: 2 [[item:soulsweapons:lost_soul]]).

**Find the Champion's Grave** requires finding the structure. Rewards: a roll on the Chipped Gems and the Common Loot reward tables.

**Defeat The Old Champion** requires killing both the Old Champion's Remains and the Frenzied Shade, and holding the [[item:soulsweapons:lord_soul_dark]] and the [[item:soulsweapons:essence_of_eventide]]. Rewards: two rolls on the Flawed Gems reward table and one on the Rare Loot reward table.

> [!LORE] Find the Champion's Grave (Soulslike Champions)
> Here lies a great champion, unable to find peace and rest. You must kill him and send his body back to the earth.
