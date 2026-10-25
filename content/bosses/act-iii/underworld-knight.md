---
{
  "title": "Underworld Knight",
  "summary": "A level 150 knight in the Nether's Underworld Arena; its Knight Sword unlocks the subclass keystones of the skill trees.",
  "items": ["block_factorys_bosses:underworld_knight_spawn_egg"],
  "infobox": {
    "item": "block_factorys_bosses:underworld_knight_spawn_egg",
    "rows": [
      ["ID", "`block_factorys_bosses:underworld_knight`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "150 (fixed)"],
      ["Health", "20,565 HP"],
      ["Location", "Underworld Arena, Nether"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:block_factorys_bosses:knight_sword]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/block_factorys_bosses/leveling_settings/entities/underworld_knight.json (starting_level 150 = max_level 150)
  config/bosses_rise_config.toml ["Boss Health"] Knight 450, ["Boss Armor"] 10, ["Base Boss Damages"] 10 (applied as base values by UnderworldKnightOnEntityTickUpdateProcedure)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar UnderworldKnightEntity.createAttributes (0.3 movement speed, 64 follow range, 1.0 knockback resistance); fireImmune; hurt ignores fire, lightning, wither, wither skull and fall damage
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar assets/block_factorys_bosses/sounds.json (knight sword swing, thrust, dodge, flame layer)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar data/block_factorys_bosses/worldgen/structure/underworld_arena.json (biome tag = nether_wastes, soul_sand_valley; start y 31-32; Soul Skeleton and Wither Knight spawns), structure_set (spacing 48, separation 40); structure/underworld_arena_p1.nbt (holds the knight)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar UnderworldKnightEntityDiesProcedure -> loot_tables/bosses/underworld_knight.json (Knight Sword 1)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/*.json (54 skills require stat minecraft:picked_up block_factorys_bosses:knight_sword >= 1)
  config/autoleveling-common.toml [Attributes]
  config/soulrend_core/boss_damage.toml (not listed: no damage cap)
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt "Find Structure: Underworld Area", "Defeat The Underworld Knight"
  calc: level 150 -> Auto Leveling level 149
        health 450 × (1 + 0.3 × 149) = 20,565; attack 10 × (1 + 0.1 × 149) = 159; armor 10 × (1 + 0.011 × 149) = 26.4
-->
**Underworld Knight** is an armored knight that guards the Underworld Arena in the Nether. It is an [[progression/act-iii-into-the-flames|Act III]] boss, and its [[item:block_factorys_bosses:knight_sword]] is the key to the subclass keystones of the [[skill-trees|skill trees]].

## Location

The knight waits in the Underworld Arena (`block_factorys_bosses:underworld_arena`). The arena generates:

- in the Nether Wastes and Soul Sand Valley biomes;
- at y=31–32;
- at most once per 48 × 48 chunk area.

Soul Skeletons and [[bosses/optional-and-world/wither-knight|Wither Knights]] spawn inside the arena. The [[item:explorerscompass:explorerscompass]] can search for it.

## Stats

The knight's level is fixed at 150, so its stats never change. See [[features/mobs-and-world/mob-levelling|Mob Levelling]] for how levels scale other mobs.

| Stat | Base | Level 150 |
| --- | --- | --- |
| Health | 450 HP | **20,565 HP** (10,282.5 hearts) |
| Attack damage | 10 | **159** |
| Armor | 10 | **26.4** |
| Knockback resistance | 100% | 100% |
| Movement speed | 0.3 | 0.3 |
| Follow range | 64 blocks | 64 blocks |
| Damage cap | | None |

The base health, armor and damage come from the Bosses' Rise config, which replaces the mod's built-in values. Attack damage is the value its attacks are based on; not all of its attacks use it.

The knight is immune to fire, and takes no damage from lightning, Wither, wither skulls or falling.

## Attacks

- **Sword swings**
- **Thrust**
- **Dodge**
- **Flame attacks**

<!-- TODO: attack conditions and cooldowns; the MCreator tick procedure is a large state machine. -->

## Strategy

- **Fire and Wither do nothing.** Neither hurts it, and lightning doesn't either.
- **No damage cap.** At over 20,000 HP it is a long fight, but burst damage is never blocked.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:block_factorys_bosses:knight_sword]] | 1 | Always |

The Knight Sword throws a powerful slash on left-click. The subclass keystones of every skill tree (54 skills) can only be unlocked by a player who has picked up a Knight Sword at least once.

## Quests

**Find Structure: Underworld Area** ([[progression/act-iii-into-the-flames|Act III]], after Into the Flames) requires finding the arena. Rewards: a roll on the Structure Loot reward table and 2 XP levels.

**Defeat The Underworld Knight** requires killing the knight. Rewards: a roll on the Flawed Gems reward table and 3 XP levels. See [[progression/act-iii-into-the-flames/defeat-the-underworld-knight|Defeat The Underworld Knight]].
