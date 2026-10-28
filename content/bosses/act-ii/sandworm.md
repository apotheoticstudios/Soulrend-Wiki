---
{
  "title": "Sandworm",
  "summary": "A giant burrowing worm that bursts out of the Sandworm Nest in deserts; one of the Bosses' Rise bosses behind the Bottom-Right Shard.",
  "aliases": ["Sand Worm"],
  "items": ["block_factorys_bosses:sandworm_spawn_egg"],
  "infobox": {
    "item": "block_factorys_bosses:sandworm_spawn_egg",
    "model": "block_factorys_bosses:sandworm",
    "rows": [
      ["ID", "`block_factorys_bosses:sandworm`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "The player's level"],
      ["Health", "2,540 HP (level 40)"],
      ["Location", "Sandworm Nest, deserts"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:block_factorys_bosses:sandworm_dart]] ×2, [[item:astral_calamity_extras:sandworm_scale]] ×4"]
    ]
  }
}
---
<!-- sources:
  config/bosses_rise_config.toml ["Boss Health"] Sandworm 200, ["Boss Armor"] 20, ["Base Boss Damages"] 12 (applied as base values by SandwormEntity on spawn)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar SandwormEntity.createAttributes (0.3 movement speed, 64 follow range); SandwormEntity.hurt (ignores cactus and fall damage)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar SandwormSpawnerEntityCollidesInTheBlockProcedure (a player touching the spawner block summons the Sandworm)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar assets/block_factorys_bosses/sounds.json (attack sounds: bite, poison spit, screech, burrow in/out)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar data/block_factorys_bosses/worldgen/structure/sandworm_nest.json (biome minecraft:desert) and structure_set/sandworm_nest.json (spacing 45, separation 30)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar SandwormEntityDiesProcedure -> loot_tables/bosses/sandworm.json (1 Sandworm Dart)
  config/paxi/datapacks/soulrend_loot/data/block_factorys_bosses/loot_tables/entities/sandworm.json (entity loot table: 1 Sandworm Dart, 4 Sandworm Scales)
  config/paxi/datapacks/soulrend_mob_leveling (no Sandworm file: level = player level)
  config/autoleveling-common.toml [Attributes]
  config/soulrend_core/boss_damage.toml (block_factorys_bosses:sandworm=20)
  config/ftbquests/quests/chapters/act_2.snbt "Find Structure: Sandworm Nest", "Defeat The Sandworm", "Bottom-Right Shard" (min_required_dependencies 2)
  config/ftbquests/quests/reward_tables/chipped_gems.snbt (table 7543698869780680000 = Chipped Gems)
  calc: L40: health 200 × 12.7 = 2,540; attack 12 × 4.9 = 58.8; armor 20 × (1 + 0.011 × 39) = 28.6; cap 20% = 508 HP/s
        L200: health 200 × 60.7 = 12,140; attack 12 × 20.9 = 250.8; armor 20 × (1 + 0.011 × 199) = 63.8; cap 20% = 2,428 HP/s
-->
**Sandworm** is a giant worm that hides under the dunes of the Sandworm Nest. It is one of the three Bosses' Rise bosses of [[progression/act-ii-first-steps|Act II]]: killing two of the three earns the [[item:nether_remastered:seal_piece_4]], one of the four seal pieces that open the Nether.

## Location

The Sandworm lives in the Sandworm Nest (`block_factorys_bosses:sandworm_nest`), a structure that generates in deserts, at most once per 45 × 45 chunk area. The [[item:explorerscompass:explorerscompass]] can search for it.

The nest holds a spawner block. The Sandworm appears when a player touches it.

## Stats

The Sandworm has no level floor or cap, so its level matches the Soulrend level of the player who summons it. The columns show a typical Act II level and the player cap (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Level 40 | Level 200 |
| --- | --- | --- | --- |
| Health | 200 HP | **2,540 HP** (1,270 hearts) | 12,140 HP |
| Attack damage | 12 | **58.8** | 250.8 |
| Armor | 20 | **28.6** | 63.8 |
| Movement speed | 0.3 | 0.3 | 0.3 |
| Follow range | 64 blocks | 64 blocks | 64 blocks |
| Damage cap | | 20% per second (508 HP), at least 5 s | 20% per second (2,428 HP), at least 5 s |

The base health, armor and damage come from the Bosses' Rise config, which replaces the mod's built-in values. Attack damage is the value its attacks are based on; not all of its attacks use it.

The Sandworm takes no damage from falling or from cacti.

## Attacks

The Sandworm burrows into the sand and resurfaces. Its attacks are:

- **Bite**
- **Poison spit**
- **Screech**

<!-- TODO: attack conditions and cooldowns; the MCreator tick procedure is a large state machine. -->

## Strategy

- **Sustained damage beats burst.** The damage cap blocks anything above 20% of its maximum health in a second, shared by every attacker.
- **Its stats follow the player's level.** Fighting it early in Act II keeps its health and damage low.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:block_factorys_bosses:sandworm_dart]] | 2 | Always (one from the boss's own loot, one from the Soulrend loot table) |
| [[item:astral_calamity_extras:sandworm_scale]] | 4 | Always |

The Sandworm Dart shoots poisonous darts on left-click and recharges by consuming health on right-click. Sandworm Scales are an armor material:

{{uses astral_calamity_extras:sandworm_scale}}

## Quests

**Find Structure: Sandworm Nest** ([[progression/act-ii-first-steps|Act II]], after the [[progression/act-ii-first-steps/estus-flask|Estus Flask]] quest) requires finding the nest. Reward: 2 XP levels.

**Defeat The Sandworm** requires killing the Sandworm. Rewards:

- a roll on the Chipped Gems reward table
- 3 [[item:dungeons_and_combat:estus_flask]]
- 3 XP levels

**Bottom-Right Shard** completes once two of the three Bosses' Rise bosses are dead (the [[bosses/act-ii/infernal-dragon|Infernal Dragon]], the Sandworm and the [[bosses/act-ii/yeti|Yeti]]). It rewards the [[item:nether_remastered:seal_piece_4]] and a [[item:skilltree:wisdom_scroll]]. See [[progression/act-ii-first-steps/bosses-rise|Bosses' Rise]].

> [!LORE] Defeat The Sandworm (Act II)
> Beneath the endless sands lurks a predator older than memory itself.
>
> The Sand Worm waits patiently beneath the dunes, striking without warning and dragging its prey into the depths. By the time you see it, it may already be too late.
