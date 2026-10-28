---
{
  "title": "Monarch of Chaos",
  "summary": "A level 200 chaos lord summoned at a Blackstone Pedestal with the Wither's Shard of Uncertainty; its steps wither the ground.",
  "aliases": ["Chaos Monarch"],
  "items": ["soulsweapons:chaos_monarch_spawn_egg"],
  "infobox": {
    "item": "soulsweapons:chaos_monarch_spawn_egg",
    "model": "soulsweapons:chaos_monarch",
    "rows": [
      ["ID", "`soulsweapons:chaos_monarch`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "200"],
      ["Health", "27,315 HP"],
      ["Location", "Summoned at a Blackstone Pedestal"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:soulsweapons:withered_wabbajack]], [[item:soulsweapons:chaos_crown]], [[item:soulsweapons:chaos_robes]], [[item:soulsweapons:lord_soul_void]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/soulsweapons/leveling_settings/entities/chaos_monarch.json (starting_level 200, max_level 0 = no cap; players cap at 200, so always 200)
  config/soulsweapons/soulsweapons_boss_config.json chaos_monarch_* (health 450, armor 4, attack cooldown 20 ticks, consumes summoning item, wither ground within 6 blocks, disables shields, fire immune, inverted heal and harm, immune to Bleed, Levitation and Wither)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar ChaosMonarch.createBossAttributes (max health and armor from BossConfig, 20 attack damage, 0.15 movement speed, 1.0 knockback resistance, 2.0 attack knockback, 60 follow range); ChaosMonarch$Attack (attacks)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar BlackstonePedestal (Shard of Uncertainty summons chaos_monarch)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar WitherEntityMixin (the Wither drops Lord Soul (void) and Shard of Uncertainty)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar data/soulsweapons/loot_tables/entities/chaos_monarch.json
  config/soulrend_core/boss_damage.toml (soulsweapons:chaos_monarch=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/soulslike_champions.snbt "The Smell of Decay is near...", "Defeat The Wither", "Defeat The Monarch of Chaos"
  calc: level 200 -> Auto Leveling level 199
        health 450 × 60.7 = 27,315; attack 20 × 20.9 = 418; armor 4 × 3.189 = 12.8
        damage cap 20% × 27,315 = 5,463 HP per second -> at least 5 s
-->
**Monarch of Chaos** is a lord of chaos summoned from a Blackstone Pedestal. It is the last boss of the Wither branch of the [[progression/side-chapters/soulslike-champions|Soulslike Champions]] chapter, which is linked from [[progression/act-ii-first-steps|Act II]]. The ground withers wherever it walks.

## Location

The Monarch of Chaos doesn't spawn naturally. It is summoned by using a [[item:soulsweapons:shard_of_uncertainty]] on a [[item:soulsweapons:blackstone_pedestal]]; the shard is used up.

The [[Wither]] drops the Shard of Uncertainty (along with a Lord Soul) when it dies. The pedestal is crafted:

{{recipes soulsweapons:blackstone_pedestal}}

## Stats

The Monarch of Chaos has a level floor of 200 and no cap. Players can't go above Soulrend level 200, so it is always level 200. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 200 |
| --- | --- | --- |
| Health | 450 HP | **27,315 HP** (13,657.5 hearts) |
| Attack damage | 20 | **418** |
| Armor | 4 | **12.8** |
| Knockback resistance | 100% | 100% |
| Movement speed | 0.15 | 0.15 |
| Follow range | 60 blocks | 60 blocks |
| Damage cap | | 20% of max health per second (5,463 HP), so a kill takes at least 5 s |

Its health and armor come from the Soulslike Weaponry boss config. It is immune to fire, Bleed, Levitation and Wither. Instant Health harms it and Instant Damage heals it.

## Attacks

| Attack | Notes |
| --- | --- |
| Melee | |
| Lightning | |
| Shoot | A ranged attack. |
| Barrage | |
| Teleport | |

Its attacks have a 1 s cooldown and disable shields. It withers the ground within 6 blocks of itself.

## Strategy

- **Stay off the withered ground.** Fighting at range keeps out of the 6-block area around it.
- **Don't block.** Its attacks disable shields.
- **Its armor is low.** At 12.8 armor it takes raw damage better than the other level-200 Soulslike boss, [[the Decaying King]].
- **Sustained damage beats burst.** The damage cap blocks anything above 5,463 HP in a second.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:soulsweapons:withered_wabbajack]] | 1 | Always |
| [[item:soulsweapons:chaos_crown]] | 1 | Always |
| [[item:soulsweapons:chaos_robes]] | 1 | Always |
| [[item:soulsweapons:lord_soul_void]] | 1 | Always |
| [[item:minecraft:netherite_upgrade_smithing_template]] | 1 | Always |
| [[item:soulsweapons:blood_vial_recipe_page]] | 1 | Always |

## Quests

**The Smell of Decay is near...** ([[progression/side-chapters/soulslike-champions|Soulslike Champions]], after The Guiding Moon) requires crafting a Blackstone Pedestal. Rewards: a roll on the Chipped Gems and the Common Loot reward tables.

**Defeat The Wither** requires holding a [[item:minecraft:nether_star]] and the Lord Soul the Wither drops. Rewards: a roll on the Flawed Gems and the Magic Materials reward tables.

**Defeat The Monarch of Chaos** requires killing the Monarch and holding its Lord Soul, a Blackstone Pedestal and a Shard of Uncertainty. Rewards: a roll on the Flawed Gems, Orb and Rare Loot reward tables.

> [!LORE] Defeat The Monarch of Chaos (Soulslike Champions)
> A dangerous monster, summoned from the pedestal using the shard, will decay anything it walks on, the Monarch of Chaos. Slay him and receive his personal equipment.
>
> Summoned with an Shard of Uncertainty in a Blackstone Pedastel.
