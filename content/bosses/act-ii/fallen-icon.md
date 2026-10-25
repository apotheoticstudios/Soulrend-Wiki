---
{
  "title": "Fallen Icon",
  "summary": "A moonlit knight summoned with an Essence of Eventide at an Old Moon Altar; it refills its health for a second phase.",
  "aliases": ["Moonknight", "Harbinger of Moonlight"],
  "items": ["soulsweapons:moonknight_spawn_egg"],
  "infobox": {
    "item": "soulsweapons:moonknight_spawn_egg",
    "rows": [
      ["ID", "`soulsweapons:moonknight`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "50–200 (at least 50)"],
      ["Health", "8,635 HP per phase (level 50)"],
      ["Location", "Old Moon Altar, Cathedral of Resurrection"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:soulsweapons:moonlight_greatsword]], [[item:soulsweapons:essence_of_luminescence]], [[item:soulsweapons:moonstone]] ×2, [[item:soulsweapons:lord_soul_white]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/soulsweapons/leveling_settings/entities/moonknight.json (starting_level 50, max_level 1000)
  config/soulsweapons/soulsweapons_boss_config.json fallen_icon_* (health 550, armor 20, attack cooldown 30 ticks in phase 1 and 0 in phase 2, special cooldown 50 ticks, consumes summoning item, projectile whitelist empty, disables shields, fire immune, heal and harm not inverted, immune to Poison)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar Moonknight.createBossAttributes (max health and armor from BossConfig, 15 attack damage, 0.15 movement speed, knockback resistance 10 (clamped to 1.0), 50 follow range); Moonknight$MoonknightPhaseOne / PhaseTwo (attacks)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar Moonknight.hurt (a hit that would leave less than 1 health in phase 1 starts phase 2 instead; invulnerable while transitioning; projectiles not on the whitelist are destroyed) and phase-2 transition (heals max health over the transition)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar assets/soulsweapons/lang/en_us.json (moonknight_phase_2 = "Harbinger of Moonlight")
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar AltarBlock (Essence of Eventide on an Old Moon Altar summons moonknight)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar data/soulsweapons/loot_tables/entities/moonknight.json
  config/soulrend_core/boss_damage.toml (soulsweapons:moonknight=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/soulslike_champions.snbt "Defeat The Fallen Icon"
  calc: L50: health 550 × 15.7 = 8,635; attack 15 × 5.9 = 88.5; armor 20 × 1.539 = 30.8; cap 1,727 HP/s
        L100: health 16,885; attack 163.5; armor 41.8; cap 3,377 HP/s
        L200: health 33,385; attack 313.5; armor 63.8; cap 6,677 HP/s
-->
**Fallen Icon** is the moonlit knight the [[Returning Knight]] once was. It is summoned at an Old Moon Altar with the Essence of Eventide and fights in two phases; in the second it becomes the **Harbinger of Moonlight**. It is the last fight of the Moon Altar branch of the [[progression/side-chapters/soulslike-champions|Soulslike Champions]] chapter, which is linked from [[progression/act-ii-first-steps|Act II]].

## Location

The Fallen Icon is summoned by using an [[item:soulsweapons:essence_of_eventide]] on an [[item:soulsweapons:altar_block]]. The essence is used up. The [[Frenzied Shade]] drops the essence.

Old Moon Altars stand in the Cathedral of Resurrection (hills) and the Corrupt Altar (savannas and plains); see [[Returning Knight#Location]].

## Stats

The Fallen Icon has a level floor of 50: it takes the nearest player's Soulrend level, but never less than 50. See [[features/mobs-and-world/mob-levelling|Mob Levelling]].

| Stat | Base | Level 50 (floor) | Level 100 | Level 200 |
| --- | --- | --- | --- | --- |
| Health (each phase) | 550 HP | **8,635 HP** (4,317.5 hearts) | 16,885 HP | 33,385 HP |
| Attack damage | 15 | **88.5** | 163.5 | 313.5 |
| Armor | 20 | **30.8** | 41.8 | 63.8 |
| Knockback resistance | 100% | 100% | 100% | 100% |
| Movement speed | 0.15 | 0.15 | 0.15 | 0.15 |
| Follow range | 50 blocks | | | |
| Damage cap | | 20% per second (1,727 HP) | 20% per second (3,377 HP) | 20% per second (6,677 HP) |

Its health and armor come from the Soulslike Weaponry boss config. It is immune to fire, Poison and projectiles. Unlike most Soulslike bosses, Instant Health and Instant Damage work on it normally.

## Attacks

**Phase 1:**

| Attack | Notes |
| --- | --- |
| Mace of Spades | |
| Obliterate | |
| Rupture | |
| Blinding light | |
| Summon | |
| Unbreakable | |

**Phase 2 (Harbinger of Moonlight):**

| Attack | Notes |
| --- | --- |
| Sword of Light | |
| Heavy swing, thrust | |
| Moonfall | |
| Moonveil | |
| Core beam | |
| Rupture | |
| Blinding light | |
| Unbreakable | |

When a hit would bring it below 1 health in phase 1, it doesn't die. It becomes invulnerable, heals back to full and starts phase 2. Its basic attacks have a 1.5 s cooldown in phase 1 and none in phase 2; its special attacks have a 2.5 s cooldown. Its attacks disable shields.

## Strategy

- **Plan for twice its health.** Phase 2 starts at full health, so the fight is two full health bars.
- **Use melee or spells.** Projectiles are destroyed before they hit it.
- **Phase 2 attacks without pause.** It has no cooldown between basic attacks in the second phase.
- **Don't block.** Its attacks disable shields.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:soulsweapons:moonlight_greatsword]] | 1 | Always |
| [[item:soulsweapons:essence_of_luminescence]] | 1 | Always |
| [[item:soulsweapons:moonstone]] | 2 | Always |
| [[item:soulsweapons:lord_soul_white]] | 1 | Always |

## Quests

**Defeat The Fallen Icon** ([[progression/side-chapters/soulslike-champions|Soulslike Champions]], after Defeat The Returning Knight) requires killing the Fallen Icon and holding its Lord Soul, an Essence of Eventide and an Old Moon Altar. Rewards: a roll on the Flawed Gems, Ancient and Rare Loot reward tables.

> [!LORE] Defeat The Fallen Icon (Soulslike Champions)
> You have brought back a fallen knight to their rightful body, and now you faced him in his former glory.
>
> Summoned with an Essence of Eventide in an Old Moon Altar.
