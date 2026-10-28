---
{
  "title": "Ender Guardian",
  "summary": "The Sin of the Void: a level 250 Cataclysm boss in the Ruined Citadel, reached through the Eye of Void.",
  "items": ["cataclysm:ender_guardian_spawn_egg"],
  "infobox": {
    "item": "cataclysm:ender_guardian_spawn_egg",
    "model": "cataclysm:ender_guardian",
    "rows": [
      ["ID", "`cataclysm:ender_guardian`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Sin", "Sin of the Void"],
      ["Level", "250 (fixed)"],
      ["Health", "30,249.7 HP"],
      ["Location", "Ruined Citadel, Bastion of the Lost"],
      ["Summon", "[[item:cataclysm:void_eye]]"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:cataclysm:gauntlet_of_guard]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/cataclysm/leveling_settings/entities/ender_guardian.json (starting_level 250 = max_level 250)
  mods/L_Enders_Cataclysm-3.16.jar Ender_Guardian_Entity.createAttributes (333 max health, 16 attack damage, 20 armor, 1 knockback resistance, 0.27 movement speed, 50 follow range); animation and cooldown fields (attack names)
  mods/L_Enders_Cataclysm-3.16.jar Animation_Monsters.setConfigattribute (adds base × (multiplier − 1) to max health and attack damage)
  mods/L_Enders_Cataclysm-3.16.jar Ender_Guardian_Entity.hurt (no damage from attackers beyond the long range limit unless BYPASSES_INVULNERABILITY)
  config/cataclysm.toml (EnderGuardianHealthMultiplier 1.2, EnderGuardianDamageMultiplier 1.2, long range limit 100, HP damage: gravity punch 0.05, teleport 0.05, knockback 0.06, uppercut 0.1, rocket punch 0.1, area 0.08)
  config/soulrend_core/boss_damage.toml (cataclysm:ender_guardian=5; Soulrend's budget replaces Cataclysm's own per-hit damage cap)
  mods/cataclysm_dimension-forge1.20.1-1.5.7.jar (dimension cataclysm_dimension:cataclysm_bastion_lost, biome "Bastion of the Lost"; Shift-right-click with an eye to enter) and config/cataclysm_dimension/cataclysm_dimension.json (enable_teleport_eye true, keep_structures_in_original_dimensions false)
  config/paxi/datapacks/soulrend_loot/data/cataclysm/loot_tables/entities/ender_guardian.json
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/ender_guardian_additions_new.json (the second table is added by traveloptics' global loot modifier)
  mods/fallen_gems_affixes-1.20.1-2.1.5.jar data/fallen_gems_affixes/loot_modifiers/void_guardian_modifier.json (player kill; epic 0.5, mythic 0.25, ancient 0.05)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt "Eight Sins", "Eye of Void", "Enter The Lost Bastion", "Defeat Ender Guardian"
  calc: level 250 -> Auto Leveling level 249
        health 333 × 1.2 × (1 + 0.3 × 249) = 30,249.7; attack 16 × 1.2 × (1 + 0.1 × 249) = 497.3; armor 20 × (1 + 0.011 × 249) = 74.8
        damage cap 5% × 30,249.7 = 1,512.5 HP per second -> at least 20 s
-->
**Ender Guardian** is the **Sin of the Void**, the armored protector of the ruined citadel at the edge of the void. It is one of the Eight Sins of [[progression/act-iii-into-the-flames|Act III]], the eight L_Ender's Cataclysm bosses that guard the way to [[progression/act-iv-beyond-reality|Act IV]] (see [[progression/act-iii-into-the-flames/the-eight-sins|The Eight Sins]]).

At level 250 it is far above any player's level, and Soulrend limits it to losing 5% of its health per second, so every fight lasts at least 20 s.

## Location

Ender Guardian lives in the Ruined Citadel (`cataclysm:ruined_citadel`). In Soulrend, Cataclysm Dimensions moves this structure into its own dimension, the **Bastion of the Lost** (`cataclysm_dimension:cataclysm_bastion_lost`). Shift-right-clicking with an [[item:cataclysm:void_eye]] teleports the player there. See [[features/mobs-and-world/cataclysm-dimensions|Cataclysm Dimensions]].

{{recipes cataclysm:void_eye}}

## Stats

Ender Guardian's level is fixed at 250, so its stats never change. Cataclysm's config multiplies its base health by 1.2 and its attack damage by 1.2 before the level bonus applies. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 250 |
| --- | --- | --- |
| Health | 333 HP (×1.2 = 399.6) | **30,249.7 HP** (15,124.9 hearts) |
| Attack damage | 16 (×1.2 = 19.2) | **497.3** |
| Armor | 20 | **74.8** |
| Knockback resistance | 100% | 100% |
| Movement speed | 0.27 | 0.27 |
| Follow range | 50 blocks | 50 blocks |
| Damage cap | | 5% of max health per second (1,512.5 HP), so a kill takes at least 20 s |

It takes no damage from attackers more than 100 blocks away.

## Attacks

| Attack | Notes |
| --- | --- |
| Left and right punches and swings | Knockback punch: plus 6% of the target's maximum health. |
| Uppercut | Plus 10% of the target's maximum health. |
| Rocket punch | Plus 10% of the target's maximum health. |
| Gravity punch | Plus 5% of the target's maximum health. |
| Teleport attack | Plus 5% of the target's maximum health. |
| Stomp, burst and air strikes | Area attacks: plus 8% of the target's maximum health. |
| Black hole |  |
| Mass destruction |  |

The Ender Guardian can lose its helmet during the fight, and it has rage versions of its uppercut and stomp. Damage based on the target's maximum health is added on top of the attack's normal damage.

<!-- TODO: attack conditions and cooldown lengths (Ender_Guardian_Entity cooldown fields). -->

## Strategy

- **Plan for a long fight.** The 5% damage cap means at least 20 s of fighting however much damage the party deals. Damage over that limit is wasted.
- **Stay within 100 blocks.** Attacks from farther away deal no damage.
- **Raw health doesn't protect against everything.** Several of its attacks add a share of the target's maximum health, so armor and resistance matter more than a big health pool.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:cataclysm:gauntlet_of_guard]] | 1 | Always |
| [[item:cataclysm:music_disc_ender_guardian]] | 1 | 10% (+10% per Looting level) |
| [[item:traveloptics:void_spellweave_ingot]] | 1–3 | Always, rolled twice |
| [[item:irons_spellbooks:scroll]] (Void Eruption) | 1 | 83%, rolled twice |
| [[item:apotheosis:gem]] (Gem of the Void Guardian) | 1 | Player kill: 50% Epic, 25% Mythic, 5% Ancient |

"Rolled twice" means the item appears in both the Soulrend loot table and the Traveloptics table added to it, so it can drop twice. Spell scrolls hold the named Traveloptics spell at a random level.

## Quests

**Eight Sins** ([[progression/act-iii-into-the-flames|Act III]], after Into the Flames) opens a quest for each Sin's eye. **Eye of Void** requires the eye ("Craftable"), and **Enter The Lost Bastion** requires entering its dimension (reward: a [[item:waystones:warp_scroll]]).

**Defeat Ender Guardian** requires killing it. Rewards:

- a roll on the Chipped Gems reward table
- a [[item:skilltree:wisdom_scroll]]
- 5 XP levels

It also opens quests for the Gauntlet of Guard, Gauntlet of Bulwark and Gauntlet of Maelstrom.

> [!LORE] Defeat Ender Guardian (Act III)
> The ancient protector of the End’s forgotten cities. Challenge the Ender Guardian and claim victory.

The other Sins are [[bosses/act-iii/ancient-remnant|Ancient Remnant]], [[bosses/act-iii/ignis|Ignis]], [[bosses/act-iii/maledictus|Maledictus]], [[bosses/act-iii/netherite-monstrosity|Netherite Monstrosity]], [[bosses/act-iii/scylla|Scylla]], [[bosses/act-iii/the-harbinger|The Harbinger]] and [[bosses/act-iii/the-leviathan|The Leviathan]].
