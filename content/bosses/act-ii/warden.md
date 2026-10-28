---
{
  "title": "Warden",
  "summary": "A level 60 Warden of the Deep Dark with Epic Fight combos; it drops the Nether Crystal that opens the Nether and the skill tree keystones.",
  "items": ["minecraft:warden_spawn_egg"],
  "infobox": {
    "item": "minecraft:warden_spawn_egg",
    "model": "minecraft:warden",
    "rows": [
      ["ID", "`minecraft:warden`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "60 (fixed)"],
      ["Health", "9,350 HP"],
      ["Location", "Deep Dark, summoned by Sculk Shriekers"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:efn:deepdark_heart]], [[item:deeperdarker:warden_carapace]] ×1–3"],
      ["Chance", "[[item:nether_remastered:seal_crystal]] (50%)"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/minecraft/leveling_settings/entities/warden.json (starting_level 60 = max_level 60)
  libraries/net/minecraft/client/1.20.1-20230612.114412 client-srg.jar Warden.createAttributes (500 max health, 30 attack damage, 1.0 knockback resistance, 1.5 attack knockback, 0.3 movement speed)
  mods/super_warden-20.13.0.jar ("Epic fight - Super Warden": patches EntityType.WARDEN; animations atk_1 to atk_4 combos, skill_1, skill_2, sonic boom, dig, emerge)
  config/serilum/configurableextramobdrops/mobdropconfig.txt (minecraft:warden: nether_remastered:seal_crystal dropchance 0.5; efn:deepdark_heart dropchance 1.0)
  mods/deeperdarker-forge-1.20.1-1.3.3.jar data/deeperdarker/loot_modifiers/warden_carapace_from_warden.json (Warden Carapace 1-3)
  config/paxi/datapacks/soulrend_loot/data/deeperdarker/loot_modifiers/warden_heart_from_warden.json (Heart of the Deep set to 0-0: removed)
  minecraft 1.20.1 loot table entities/warden (Sculk Catalyst)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills (core keystones need a picked-up nether_remastered:seal_crystal; see docs/instance-guide.md)
  config/soulrend_core/boss_damage.toml (minecraft:warden=20)
  config/autoleveling-common.toml [Attributes]; levels always hidden for minecraft:warden
  config/ftbquests/quests/chapters/act_2.snbt "The Warden"
  calc: level 60 -> Auto Leveling level 59
        health 500 × 18.7 = 9,350; attack 30 × 6.9 = 207
        damage cap 20% × 9,350 = 1,870 HP per second -> at least 5 s
-->
**Warden** is the guardian of the Deep Dark. In Soulrend its level is fixed at 60, and Epic Fight – Super Warden gives it new combo attacks. It is an [[progression/act-ii-first-steps|Act II]] boss: it is the main source of the [[item:nether_remastered:seal_crystal]], the crystal that the Nether seal and the core keystones of the [[skill-trees|skill trees]] both need.

## Location

The Warden appears in the Deep Dark when a Sculk Shrieker is set off enough times, as in vanilla Minecraft. Deep Dark biomes lie deep underground, often around Ancient Cities.

## Stats

The Warden's level is fixed at 60, so its stats never change. Its level is never shown above its head. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 60 |
| --- | --- | --- |
| Health | 500 HP | **9,350 HP** (4,675 hearts) |
| Attack damage | 30 | **207** |
| Armor | 0 | 0 |
| Knockback resistance | 100% | 100% |
| Movement speed | 0.3 | 0.3 |
| Damage cap | | 20% of max health per second (1,870 HP), so a kill takes at least 5 s |

## Attacks

Soulrend includes **Epic Fight – Super Warden**, which replaces the Warden's animations with Epic Fight ones:

- four melee attack combos;
- two special skills;
- the sonic boom;
- digging into and emerging from the ground.

<!-- TODO: combo damage and conditions (super_warden SWCombatBehaviors). -->

## Strategy

- **207 attack damage is a lot for Act II.** The Warden hits harder than any other level-60 boss of the act.
- **Sustained damage beats burst.** The damage cap blocks anything above 1,870 HP in a second.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:efn:deepdark_heart]] | 1 | Always |
| [[item:deeperdarker:warden_carapace]] | 1–3 | Always |
| [[item:minecraft:sculk_catalyst]] | 1 | Always |
| [[item:nether_remastered:seal_crystal]] | 1 | 50% |

Soulrend removes Deeper and Darker's Heart of the Deep from the Warden's drops.

The Nether Crystal is used for the Nether seal (see [[items/progression-keys/nether-seal|Nether Seal]]). Picking one up also unlocks the core keystones of the skill trees.

## Quests

**The Warden** ([[progression/act-ii-first-steps|Act II]], after Crying Obsidian) requires killing the Warden. Rewards:

- an [[item:minecraft:echo_shard]]
- 5 [[item:dungeons_and_combat:estus_flask]]
- a roll on the Rare Loot reward table
- 10 XP levels

It opens The Otherside and the Sky Arena chapter. See the [[progression/act-ii-first-steps/the-warden|quest page]].

> [!LORE] The Warden (Act II)
> The Warden is the guardian of the Deep Dark. A spooky and awful place filled with all sorts of new blocks and mobs.
