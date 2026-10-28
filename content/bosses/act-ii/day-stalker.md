---
{
  "title": "Day Stalker",
  "summary": "The deity of day, summoned with a Chaos Orb alongside the Night Prowler; it grows stronger in daylight.",
  "items": ["soulsweapons:day_stalker_spawn_egg"],
  "infobox": {
    "item": "soulsweapons:day_stalker_spawn_egg",
    "rows": [
      ["ID", "`soulsweapons:day_stalker`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "50–200 (at least 50)"],
      ["Health", "9,420 HP per phase (level 50)"],
      ["Location", "Summoned with a Chaos Orb"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:soulsweapons:dawnbreaker]], [[item:soulsweapons:lord_soul_day_stalker]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/soulsweapons/leveling_settings/entities/day_stalker.json (starting_level 50, max_level 1000)
  config/soulsweapons/soulsweapons_boss_config.json day_stalker_* (health 600, armor 15, empowered projectile damage taken 0.8 in phase 1 and 0.6 in phase 2, disables shields, fire immune, heal and harm not inverted) and duo_fight_time_before_switch 400 ticks
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar DayStalker.createBossAttributes (max health and armor from BossConfig, 20 attack damage, 0.3 movement speed, 0.8 flying speed, knockback resistance 10 (clamped to 1.0), 120 follow range); DayStalker$Attacks (attacks)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar DayStalker.hurt (no fall damage; Overheat: damage × 0.6; empowered and not flying: projectile damage × phase modifier); DayStalker.isEmpowered (daytime or phase 2); DayStalker.customServerAiStep (partner Night Prowler missing or dead -> phase 2, effects cleared); phase-2 transition heals max health
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar DayStalkerGoal (one of the pair flies; they switch every duo_fight_time_before_switch ticks)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar ChaosOrbEntity (spawns night_prowler and day_stalker); game-data/items.json soulsweapons:chaos_orb tooltip
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar data/soulsweapons/loot_tables/entities/day_stalker.json
  config/soulrend_core/boss_damage.toml (soulsweapons:day_stalker=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/soulslike_champions.snbt (Chaos Orb quest, "Defeat The Day Stalker")
  calc: L50: health 600 × 15.7 = 9,420; attack 20 × 5.9 = 118; armor 15 × 1.539 = 23.1; cap 1,884 HP/s
        L100: health 18,420; attack 218; armor 31.3; cap 3,684 HP/s
        L200: health 36,420; attack 418; armor 47.8; cap 7,284 HP/s
-->
**Day Stalker** is the deity of day, fought together with its counterpart, the [[Night Prowler]]. Both are summoned at once by throwing a Chaos Orb into the sky. They are the final bosses of the [[progression/side-chapters/soulslike-champions|Soulslike Champions]] chapter, which is linked from [[progression/act-ii-first-steps|Act II]].

## Location

The Day Stalker doesn't spawn naturally. Throwing a [[item:soulsweapons:chaos_orb]] into the sky summons the Day Stalker and the Night Prowler together.

{{recipes soulsweapons:chaos_orb}}

## Stats

The Day Stalker has a level floor of 50: it takes the nearest player's Soulrend level, but never less than 50. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 50 (floor) | Level 100 | Level 200 |
| --- | --- | --- | --- | --- |
| Health (each phase) | 600 HP | **9,420 HP** (4,710 hearts) | 18,420 HP | 36,420 HP |
| Attack damage | 20 | **118** | 218 | 418 |
| Armor | 15 | **23.1** | 31.3 | 47.8 |
| Knockback resistance | 100% | 100% | 100% | 100% |
| Movement speed | 0.3 (flying 0.8) | | | |
| Follow range | 120 blocks | | | |
| Damage cap | | 20% per second (1,884 HP) | 20% per second (3,684 HP) | 20% per second (7,284 HP) |

Its health and armor come from the Soulslike Weaponry boss config. It is immune to fire and fall damage.

## Attacks

| Attack | | |
| --- | --- | --- |
| Air Combustion | Blaze Barrage | Chaos Storm |
| Conflagration | Dawnbreaker | Decimate |
| Flamethrower | Flame's Edge | Flame's Reach |
| Inferno | Overheat | Radiance |
| Sky High | Sunfire Rush | Warmth |

During Overheat it takes only 60% damage. Its attacks disable shields.

### The duo fight

While both bosses live, one of them fights from the air and the other on the ground, and they switch every 20 s. When the Night Prowler dies (or is missing), the Day Stalker clears its effects, heals back to full and starts its second phase.

### Empowered

The Day Stalker is **empowered** in daytime and in its second phase. While empowered and on the ground, it takes only 80% damage from projectiles (60% in phase 2).

## Strategy

- **One of the pair is always empowered.** Daytime empowers the Day Stalker and night empowers the [[Night Prowler]], so the one that isn't empowered is the easier target.
- **Kill them close together.** Whichever boss dies first, the survivor refills its health for a second phase.
- **Don't block.** Its attacks disable shields.
- **Fire does nothing.** It is immune to fire.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:soulsweapons:dawnbreaker]] | 1 | Always |
| [[item:soulsweapons:lord_soul_day_stalker]] | 1 | Always |

## Quests

A Soulslike Champions quest asks for a Chaos Orb once the Old Champion, Decaying King, Fallen Icon and Monarch of Chaos quests are all done. Reward: a roll on the Chipped Gems reward table. It opens:

**Defeat The Day Stalker**, which requires holding the Day Stalker's Lord Soul. Reward: a [[item:minecraft:nether_star]].

> [!LORE] Defeat The Day Stalker (Soulslike Champions)
> Vanquish her, so that you may live freely under the sun!
