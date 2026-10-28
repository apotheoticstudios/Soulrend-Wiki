---
{
  "title": "Yeti (Boss)",
  "summary": "A huge ape of the snowy plains that guards the Yeti Hideout; one of the Bosses' Rise bosses behind the Bottom-Right Shard.",
  "aliases": ["Yeti Boss"],
  "items": ["block_factorys_bosses:yeti_spawn_egg"],
  "infobox": {
    "item": "block_factorys_bosses:yeti_spawn_egg",
    "model": "block_factorys_bosses:yeti",
    "rows": [
      ["ID", "`block_factorys_bosses:yeti`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "The player's level"],
      ["Health", "3,175 HP (level 40)"],
      ["Location", "Yeti Hideout, snowy plains"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:block_factorys_bosses:frozen_fist]], [[item:endrem:cold_eye]]"]
    ]
  }
}
---
<!-- sources:
  config/bosses_rise_config.toml ["Boss Health"] Yeti 250, ["Boss Armor"] 10, ["Base Boss Damages"] 18 (applied as base values by YetiEntity on spawn)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar YetiEntity.createAttributes (0.3 movement speed, 64 follow range, 1.0 knockback resistance); YetiEntity.hurt (ignores wither, wither skull, falling anvil, fall, trident and drowning damage)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar YetiSpawnerEntityCollidesInTheBlockProcedure (a player touching the spawner block summons the Yeti); YetiSpawnerOnTickUpdateProcedure ("You feel a dangerous presence nearby..")
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar assets/block_factorys_bosses/sounds.json (yeti hand swipe, punch, ground smash, snowball throw, icicle throw, jump/land, rage)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar data/block_factorys_bosses/worldgen/structure/yeti_hideout.json (biome minecraft:snowy_plains) and structure_set/yeti_hideout.json (spacing 30, separation 25)
  mods/bossesrise-1.20.1-forge-1.0.9.2b.jar YetiEntityDiesProcedure -> loot_tables/bosses/yeti.json (1 Frozen Fist)
  config/serilum/configurableextramobdrops/mobdropconfig.txt (block_factorys_bosses:yeti: endrem:cold_eye, dropchance 1.0)
  config/paxi/datapacks/soulrend_mob_leveling (no Yeti file: level = player level)
  config/autoleveling-common.toml [Attributes]
  config/soulrend_core/boss_damage.toml (not listed: no damage cap)
  config/ftbquests/quests/chapters/act_2.snbt "Find Structure: Yeti Hideout", "Defeat Yeti", "Bottom-Right Shard"
  calc: L40: health 250 × 12.7 = 3,175; attack 18 × 4.9 = 88.2; armor 10 × 1.429 = 14.3
        L200: health 250 × 60.7 = 15,175; attack 18 × 20.9 = 376.2; armor 10 × 3.189 = 31.9
-->
**Yeti** is a huge white ape that waits in the Yeti Hideout on the snowy plains. It is one of the three Bosses' Rise bosses of [[progression/act-ii-first-steps|Act II]]: killing two of the three earns the [[item:nether_remastered:seal_piece_4]], one of the four seal pieces that open the Nether. It always drops the [[item:endrem:cold_eye]], one of the eyes that open the End portal.

This page is about the boss. For the playable race, see [[Yeti (Race)]].

## Location

The Yeti lives in the Yeti Hideout (`block_factorys_bosses:yeti_hideout`), a structure that generates on Snowy Plains, at most once per 30 × 30 chunk area. The [[item:explorerscompass:explorerscompass]] can search for it.

The hideout holds a spawner block. Nearby players see the message "You feel a dangerous presence nearby..", and the Yeti appears when a player touches the spawner.

## Stats

The Yeti has no level floor or cap, so its level matches the Soulrend level of the player who summons it. The columns show a typical Act II level and the player cap (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Level 40 | Level 200 |
| --- | --- | --- | --- |
| Health | 250 HP | **3,175 HP** (1,587.5 hearts) | 15,175 HP |
| Attack damage | 18 | **88.2** | 376.2 |
| Armor | 10 | **14.3** | 31.9 |
| Knockback resistance | 100% | 100% | 100% |
| Movement speed | 0.3 | 0.3 | 0.3 |
| Follow range | 64 blocks | 64 blocks | 64 blocks |
| Damage cap | | None | None |

The base health, armor and damage come from the Bosses' Rise config, which replaces the mod's built-in values. Attack damage is the value its attacks are based on; not all of its attacks use it.

The Yeti takes no damage from Wither, wither skulls, falling anvils, falls, tridents or drowning.

## Attacks

- **Hand swipe** and **punch** in melee
- **Ground smash**
- **Jump attack**
- **Snowball throw** and **icicle throw** at range

<!-- TODO: attack conditions and cooldowns; the MCreator tick procedure is a large state machine. -->

## Strategy

- **No damage cap.** Unlike the Sandworm, the Yeti can be burst down.
- **Tridents and Wither don't work.** Both deal no damage to it.
- **Its stats follow the player's level.** Fighting it early in Act II keeps its health and damage low.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:block_factorys_bosses:frozen_fist]] | 1 | Always |
| [[item:endrem:cold_eye]] | 1 | Always |

The Frozen Fist freezes targets on hit, freezes nearby entities on sneak-right-click, and works as a shield. See [[items/progression-keys/legendary-eyes|Legendary Eyes]] for the Cold Eye.

## Quests

**Find Structure: Yeti Hideout** ([[progression/act-ii-first-steps|Act II]], after the [[progression/act-ii-first-steps/estus-flask|Estus Flask]] quest) requires finding the hideout. Reward: 2 XP levels.

**Defeat Yeti** requires killing the Yeti. Rewards:

- a roll on the Chipped Gems reward table
- 3 [[item:dungeons_and_combat:estus_flask]]
- 3 XP levels

**Bottom-Right Shard** completes once two of the three Bosses' Rise bosses are dead (the [[bosses/act-ii/infernal-dragon|Infernal Dragon]], the [[Sandworm]] and the Yeti). It rewards the [[item:nether_remastered:seal_piece_4]] and a [[item:skilltree:wisdom_scroll]]. See [[progression/act-ii-first-steps/bosses-rise|Bosses' Rise]].

> [!LORE] Defeat Yeti (Act II)
> High among the frozen peaks dwells a creature spoken of only in fearful whispers.
>
> The Yeti is a massive beast perfectly adapted to the harsh cold. Its immense strength and relentless aggression make it a formidable opponent for any adventurer brave enough to challenge it.
