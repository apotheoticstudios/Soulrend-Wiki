---
{
  "title": "The Harbinger",
  "summary": "The Sin of the Mech: a level 250 Cataclysm boss in the Ancient Factory, reached through the Eye of Mech.",
  "items": ["cataclysm:the_harbinger_spawn_egg"],
  "infobox": {
    "item": "cataclysm:the_harbinger_spawn_egg",
    "rows": [
      ["ID", "`cataclysm:the_harbinger`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Sin", "Sin of the Mech"],
      ["Level", "250 (fixed)"],
      ["Health", "38,379.9 HP"],
      ["Location", "Ancient Factory, Forge of Aeons"],
      ["Summon", "[[item:cataclysm:mech_eye]]"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:cataclysm:witherite_block]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/cataclysm/leveling_settings/entities/the_harbinger.json (starting_level 250 = max_level 250)
  mods/L_Enders_Cataclysm-3.16.jar The_Harbinger_Entity.createAttributes (390 max health, 9 attack damage, 12 armor, 0.5 knockback resistance, 0.6 movement speed, 40 follow range); animation and cooldown fields (attack names)
  mods/L_Enders_Cataclysm-3.16.jar Animation_Monsters.setConfigattribute (adds base × (multiplier − 1) to max health and attack damage)
  mods/L_Enders_Cataclysm-3.16.jar The_Harbinger_Entity.hurt (no damage from attackers beyond the long range limit unless BYPASSES_INVULNERABILITY)
  config/cataclysm.toml (HarbingerHealthMultiplier 1.3, HarbingerDamageMultiplier 1.2, long range limit 35, wither missile 8, laser 5, charge HP damage 0.06, lights fires)
  config/soulrend_core/boss_damage.toml (cataclysm:the_harbinger=5; Soulrend's budget replaces Cataclysm's own per-hit damage cap)
  mods/cataclysm_dimension-forge1.20.1-1.5.7.jar (dimension cataclysm_dimension:cataclysm_forge_of_aeons, biome "Forge of Aeons"; Shift-right-click with an eye to enter) and config/cataclysm_dimension/cataclysm_dimension.json (enable_teleport_eye true, keep_structures_in_original_dimensions false)
  config/paxi/datapacks/soulrend_loot/data/cataclysm/loot_tables/entities/the_harbinger.json
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/harbinger_additions_new.json (the second table is added by traveloptics' global loot modifier)
  mods/fallen_gems_affixes-1.20.1-2.1.5.jar data/fallen_gems_affixes/loot_modifiers/withered_sentinel_modifier.json (player kill; epic 0.5, mythic 0.25, ancient 0.05)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt "Eight Sins", "Eye of Mech", "Enter The Forge of Aeons", "Defeat The Harbinger"
  calc: level 250 -> Auto Leveling level 249
        health 390 × 1.3 × (1 + 0.3 × 249) = 38,379.9; attack 9 × 1.2 × (1 + 0.1 × 249) = 279.7; armor 12 × (1 + 0.011 × 249) = 44.9
        damage cap 5% × 38,379.9 = 1,919 HP per second -> at least 20 s
-->
**The Harbinger** is the **Sin of the Mech**, a flying war machine built in the Ancient Factory. It is one of the Eight Sins of [[progression/act-iii-into-the-flames|Act III]], the eight L_Ender's Cataclysm bosses that guard the way to [[progression/act-iv-beyond-reality|Act IV]] (see [[progression/act-iii-into-the-flames/the-eight-sins|The Eight Sins]]).

At level 250 it is far above any player's level, and Soulrend limits it to losing 5% of its health per second, so every fight lasts at least 20 s.

## Location

The Harbinger lives in the Ancient Factory (`cataclysm:ancient_factory`). In Soulrend, Cataclysm Dimensions moves this structure into its own dimension, the **Forge of Aeons** (`cataclysm_dimension:cataclysm_forge_of_aeons`). Shift-right-clicking with an [[item:cataclysm:mech_eye]] teleports the player there. See [[features/mobs-and-world/cataclysm-dimensions|Cataclysm Dimensions]].

{{recipes cataclysm:mech_eye}}

## Stats

The Harbinger's level is fixed at 250, so its stats never change. Cataclysm's config multiplies its base health by 1.3 and its attack damage by 1.2 before the level bonus applies. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 250 |
| --- | --- | --- |
| Health | 390 HP (×1.3 = 507) | **38,379.9 HP** (19,190 hearts) |
| Attack damage | 9 (×1.2 = 10.8) | **279.7** |
| Armor | 12 | **44.9** |
| Knockback resistance | 50% | 50% |
| Movement speed | 0.6 | 0.6 |
| Follow range | 40 blocks | 40 blocks |
| Damage cap | | 5% of max health per second (1,919 HP), so a kill takes at least 20 s |

It takes no damage from attackers more than 35 blocks away.

## Attacks

| Attack | Notes |
| --- | --- |
| Wither missiles | 8 damage. Fired in normal and fast volleys. |
| Laser and death laser | Laser: 5 damage. |
| Charge | Plus 6% of the target's maximum health. |
| Launch |  |

The Harbinger flies, switches between missile and laser modes, can overload, and can be stunned. It sets fires. Damage based on the target's maximum health is added on top of the attack's normal damage.

<!-- TODO: attack conditions and cooldown lengths (The_Harbinger_Entity cooldown fields). -->

## Strategy

- **Plan for a long fight.** The 5% damage cap means at least 20 s of fighting however much damage the party deals. Damage over that limit is wasted.
- **Stay within 35 blocks.** Attacks from farther away deal no damage.
- **Raw health doesn't protect against everything.** Several of its attacks add a share of the target's maximum health, so armor and resistance matter more than a big health pool.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:cataclysm:witherite_block]] | 1 | Always |
| [[item:cataclysm:music_disc_the_harbinger]] | 1 | 10% (+10% per Looting level) |
| [[item:traveloptics:last_glow]] | 1–2 | 40%, rolled twice |
| [[item:traveloptics:mechanized_catalyst]] | 1–2 | 40% (instead of Last Glow), rolled twice |
| [[item:irons_spellbooks:scroll]] (Death Laser, EM-Pulse, Rapid Laser or Blood Howl) | 1 | 83%, rolled twice |
| [[item:apotheosis:gem]] (Gem of the Withered Sentinel) | 1 | Player kill: 50% Epic, 25% Mythic, 5% Ancient |

"Rolled twice" means the item appears in both the Soulrend loot table and the Traveloptics table added to it, so it can drop twice. Spell scrolls hold the named Traveloptics spell at a random level.

## Quests

**Eight Sins** ([[progression/act-iii-into-the-flames|Act III]], after Into the Flames) opens a quest for each Sin's eye. **Eye of Mech** requires the eye ("Craftable"), and **Enter The Forge of Aeons** requires entering its dimension (reward: a [[item:waystones:warp_scroll]]).

**Defeat The Harbinger** requires killing it. Rewards:

- a roll on the Chipped Gems reward table
- a [[item:skilltree:wisdom_scroll]]
- 5 XP levels

It also opens quests for the Meat Shredder, Lase Gatling and Wither Assault Shoulder Weapon.

> [!LORE] Defeat The Harbinger (Act III)
> A harbinger of destruction awakens from ancient ruins. Defeat it before its power consumes the world.

The other Sins are [[bosses/act-iii/ancient-remnant|Ancient Remnant]], [[bosses/act-iii/ender-guardian|Ender Guardian]], [[bosses/act-iii/ignis|Ignis]], [[bosses/act-iii/maledictus|Maledictus]], [[bosses/act-iii/netherite-monstrosity|Netherite Monstrosity]], [[bosses/act-iii/scylla|Scylla]] and [[bosses/act-iii/the-leviathan|The Leviathan]].
