---
{
  "title": "Scylla",
  "summary": "The Sin of the Storm: a level 250 Cataclysm boss in the Acropolis, reached through the Eye of Storm.",
  "items": ["cataclysm:scylla_spawn_egg"],
  "infobox": {
    "item": "cataclysm:scylla_spawn_egg",
    "model": "cataclysm:scylla",
    "rows": [
      ["ID", "`cataclysm:scylla`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Sin", "Sin of the Storm"],
      ["Level", "250 (fixed)"],
      ["Health", "38,379.9 HP"],
      ["Location", "Acropolis, Sanctum Fallen"],
      ["Summon", "[[item:cataclysm:storm_eye]]"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:cataclysm:lacrima]], [[item:cataclysm:essence_of_the_storm]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/cataclysm/leveling_settings/entities/scylla.json (starting_level 250 = max_level 250)
  mods/L_Enders_Cataclysm-3.16.jar Scylla_Entity.createAttributes (390 max health, 18 attack damage, 12 armor, 1 knockback resistance, 0.31 movement speed, 50 follow range); animation and cooldown fields (attack names)
  mods/L_Enders_Cataclysm-3.16.jar Animation_Monsters.setConfigattribute (adds base × (multiplier − 1) to max health and attack damage)
  mods/L_Enders_Cataclysm-3.16.jar Scylla_Entity.hurt (no damage from attackers beyond the long range limit unless BYPASSES_INVULNERABILITY)
  config/cataclysm.toml (ScyllaHealthMultiplier 1.3, ScyllaDamageMultiplier 1.2, long range limit 10, spear 14, lightning storm 10 (+0.04 HP), lightning area 4, snake 16, anchor 16, HP damage 0.05, spin 0.07, weather change true)
  config/soulrend_core/boss_damage.toml (cataclysm:scylla=5; Soulrend's budget replaces Cataclysm's own per-hit damage cap)
  mods/cataclysm_dimension-forge1.20.1-1.5.7.jar (dimension cataclysm_dimension:cataclysm_sanctum_fallen, biome "Sanctum Fallen"; Shift-right-click with an eye to enter) and config/cataclysm_dimension/cataclysm_dimension.json (enable_teleport_eye true, keep_structures_in_original_dimensions false)
  config/paxi/datapacks/soulrend_loot/data/cataclysm/loot_tables/entities/scylla.json
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/scylla_additions.json (the second table is added by traveloptics' global loot modifier)
  mods/fallen_gems_affixes-1.20.1-2.1.5.jar data/fallen_gems_affixes/loot_modifiers/howling_storm_modifier.json (player kill; epic 0.5, mythic 0.25, ancient 0.05)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt "Eight Sins", "Eye of Storm", "Enter The Fallen Sanctum", "Defeat Scylla"
  calc: level 250 -> Auto Leveling level 249
        health 390 × 1.3 × (1 + 0.3 × 249) = 38,379.9; attack 18 × 1.2 × (1 + 0.1 × 249) = 559.4; armor 12 × (1 + 0.011 × 249) = 44.9
        damage cap 5% × 38,379.9 = 1,919 HP per second -> at least 20 s
-->
**Scylla** is the **Sin of the Storm**, the storm empress who rules the heights of the Acropolis. It is one of the Eight Sins of [[progression/act-iii-into-the-flames|Act III]], the eight L_Ender's Cataclysm bosses that guard the way to [[progression/act-iv-beyond-reality|Act IV]] (see [[progression/act-iii-into-the-flames/the-eight-sins|The Eight Sins]]).

At level 250 it is far above any player's level, and Soulrend limits it to losing 5% of its health per second, so every fight lasts at least 20 s.

## Location

Scylla lives in the Acropolis (`cataclysm:acropolis`). In Soulrend, Cataclysm Dimensions moves this structure into its own dimension, the **Sanctum Fallen** (`cataclysm_dimension:cataclysm_sanctum_fallen`). Shift-right-clicking with an [[item:cataclysm:storm_eye]] teleports the player there. See [[features/mobs-and-world/cataclysm-dimensions|Cataclysm Dimensions]].

{{recipes cataclysm:storm_eye}}

## Stats

Scylla's level is fixed at 250, so its stats never change. Cataclysm's config multiplies its base health by 1.3 and its attack damage by 1.2 before the level bonus applies. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 250 |
| --- | --- | --- |
| Health | 390 HP (×1.3 = 507) | **38,379.9 HP** (19,190 hearts) |
| Attack damage | 18 (×1.2 = 21.6) | **559.4** |
| Armor | 12 | **44.9** |
| Knockback resistance | 100% | 100% |
| Movement speed | 0.31 | 0.31 |
| Follow range | 50 blocks | 50 blocks |
| Damage cap | | 5% of max health per second (1,919 HP), so a kill takes at least 20 s |

It takes no damage from attackers more than 10 blocks away.

## Attacks

| Attack | Notes |
| --- | --- |
| Melee attacks | Plus 5% of the target's maximum health. |
| Spin | Plus 7% of the target's maximum health. |
| Spear throw | 14 damage. |
| Lightning storm | 10 damage plus 4% of the target's maximum health; 4 damage in the area. |
| Snakes | 16 damage. |
| Chained anchor | 16 damage. |
| Waves, whip, explosion |  |
| Parry and back step |  |

Scylla flies, parries attacks, and changes the weather. Damage based on the target's maximum health is added on top of the attack's normal damage.

<!-- TODO: attack conditions and cooldown lengths (Scylla_Entity cooldown fields). -->

## Strategy

- **Plan for a long fight.** The 5% damage cap means at least 20 s of fighting however much damage the party deals. Damage over that limit is wasted.
- **Stay within 10 blocks.** Attacks from farther away deal no damage.
- **Raw health doesn't protect against everything.** Several of its attacks add a share of the target's maximum health, so armor and resistance matter more than a big health pool.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:cataclysm:lacrima]] | 8–16 | Always |
| [[item:cataclysm:essence_of_the_storm]] | 7–8 | Always |
| [[item:cataclysm:music_disc_scylla]] | 1 | 10% (+10% per Looting level) |
| [[item:irons_spellbooks:scroll]] (Serpentide or The Howling Tempest) | 1 | 83%, rolled twice |
| [[item:apotheosis:gem]] (Gem of the Howling Storm) | 1 | Player kill: 50% Epic, 25% Mythic, 5% Ancient |

"Rolled twice" means the item appears in both the Soulrend loot table and the Traveloptics table added to it, so it can drop twice. Spell scrolls hold the named Traveloptics spell at a random level.

## Quests

**Eight Sins** ([[progression/act-iii-into-the-flames|Act III]], after Into the Flames) opens a quest for each Sin's eye. **Eye of Storm** requires the eye ("Craftable"), and **Enter The Fallen Sanctum** requires entering its dimension (reward: a [[item:waystones:warp_scroll]]).

**Defeat Scylla** requires killing it. Rewards:

- a roll on the Chipped Gems reward table
- a [[item:skilltree:wisdom_scroll]]
- 5 XP levels

It also opens quests for the Astrape and Ceraunus.

> [!LORE] Defeat Scylla (Act III)
> The Storm Empress rules the heights of the Acropolis. Face Scylla and survive the fury of thunder.

The other Sins are [[bosses/act-iii/ancient-remnant|Ancient Remnant]], [[bosses/act-iii/ender-guardian|Ender Guardian]], [[bosses/act-iii/ignis|Ignis]], [[bosses/act-iii/maledictus|Maledictus]], [[bosses/act-iii/netherite-monstrosity|Netherite Monstrosity]], [[bosses/act-iii/the-harbinger|The Harbinger]] and [[bosses/act-iii/the-leviathan|The Leviathan]].
