---
{
  "title": "Night Prowler",
  "summary": "The deity of night, summoned with a Chaos Orb alongside the Day Stalker; it grows stronger at night.",
  "items": ["soulsweapons:night_prowler_spawn_egg"],
  "infobox": {
    "item": "soulsweapons:night_prowler_spawn_egg",
    "rows": [
      ["ID", "`soulsweapons:night_prowler`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "50–200 (at least 50)"],
      ["Health", "7,850 HP per phase (level 50)"],
      ["Location", "Summoned with a Chaos Orb"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:soulsweapons:soul_reaper]], [[item:soulsweapons:forlorn_scythe]], [[item:soulsweapons:lord_soul_night_prowler]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/soulsweapons/leveling_settings/entities/night_prowler.json (starting_level 50, max_level 1000)
  config/soulsweapons/soulsweapons_boss_config.json night_prowler_* (health 500, armor 10, eclipse healing 3, projectile heal 5 below 50% health, teleport chance 0.3, disables shields, fire immune, heal and harm not inverted) and duo_fight_time_before_switch 400 ticks
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar NightProwler.createBossAttributes (max health and armor from BossConfig, 20 attack damage, 0.3 movement speed, 0.8 flying speed, knockback resistance 10 (clamped to 1.0), 120 follow range); NightProwler$Attacks (attacks)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar NightProwler.hurt (teleport chance while idle; projectile heal below the health threshold); NightProwler.isEmpowered (night or phase 2); phase 2 when the Day Stalker partner is missing or dead, with a full heal
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar NightProwlerGoal (one of the pair flies; they switch every duo_fight_time_before_switch ticks)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar ChaosOrbEntity (spawns night_prowler and day_stalker)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar data/soulsweapons/loot_tables/entities/night_prowler.json
  config/soulrend_core/boss_damage.toml (soulsweapons:night_prowler=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/soulslike_champions.snbt (Chaos Orb quest, "Defeat The Night Prowler")
  calc: L50: health 500 × 15.7 = 7,850; attack 20 × 5.9 = 118; armor 10 × 1.539 = 15.4; cap 1,570 HP/s
        L100: health 15,350; attack 218; armor 20.9; cap 3,070 HP/s
        L200: health 30,350; attack 418; armor 31.9; cap 6,070 HP/s
-->
**Night Prowler** is the deity of night, fought together with its counterpart, the [[Day Stalker]]. Both are summoned at once by throwing a Chaos Orb into the sky. They are the final bosses of the [[progression/side-chapters/soulslike-champions|Soulslike Champions]] chapter, which is linked from [[progression/act-ii-first-steps|Act II]].

## Location

The Night Prowler doesn't spawn naturally. Throwing a [[item:soulsweapons:chaos_orb]] into the sky summons the Night Prowler and the Day Stalker together. See [[Day Stalker#Location]] for the recipe.

## Stats

The Night Prowler has a level floor of 50: it takes the nearest player's Soulrend level, but never less than 50. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 50 (floor) | Level 100 | Level 200 |
| --- | --- | --- | --- | --- |
| Health (each phase) | 500 HP | **7,850 HP** (3,925 hearts) | 15,350 HP | 30,350 HP |
| Attack damage | 20 | **118** | 218 | 418 |
| Armor | 10 | **15.4** | 20.9 | 31.9 |
| Knockback resistance | 100% | 100% | 100% | 100% |
| Movement speed | 0.3 (flying 0.8) | | | |
| Follow range | 120 blocks | | | |
| Damage cap | | 20% per second (1,570 HP) | 20% per second (3,070 HP) | 20% per second (6,070 HP) |

Its health and armor come from the Soulslike Weaponry boss config. It is immune to fire.

## Attacks

| Attack | | |
| --- | --- | --- |
| Blackflame Snake | Blade's Reach | Darkness Rise |
| Deathbringer's Grasp | Diminishing Light | Eclipse |
| Engulf | Lunar Displacement | Night's Embrace |
| Reaping Slash | Ripple Fang | Soul Reaper |
| Trinity | | |

Its attacks disable shields. When hit while idle, it has a 30% chance to teleport. Below half health, projectile hits heal it by 5 health, and the Eclipse attack also heals it.

### The duo fight

While both bosses live, one of them fights from the air and the other on the ground, and they switch every 20 s. When the Day Stalker dies (or is missing), the Night Prowler clears its effects, heals back to full and starts its second phase.

The Night Prowler is **empowered** at night and in its second phase.

## Strategy

- **One of the pair is always empowered.** Night empowers the Night Prowler and daytime empowers the Day Stalker, so the one that isn't empowered is the easier target.
- **Avoid projectiles below half health.** They heal it instead of finishing it.
- **Kill them close together.** Whichever boss dies first, the survivor refills its health for a second phase.
- **Don't block.** Its attacks disable shields.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:soulsweapons:soul_reaper]] | 1 | Always |
| [[item:soulsweapons:forlorn_scythe]] | 1 | Always |
| [[item:soulsweapons:lord_soul_night_prowler]] | 1 | Always |

## Quests

A Soulslike Champions quest asks for a Chaos Orb once the Old Champion, Decaying King, Fallen Icon and Monarch of Chaos quests are all done. Reward: a roll on the Chipped Gems reward table. It opens:

**Defeat The Night Prowler**, which requires holding the Night Prowler's Lord Soul. Reward: a [[item:minecraft:nether_star]].

> [!LORE] Defeat The Night Prowler (Soulslike Champions)
> Vanquish him, so that you may sleep in peace!
