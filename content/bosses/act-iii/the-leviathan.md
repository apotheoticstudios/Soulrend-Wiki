---
{
  "title": "The Leviathan",
  "summary": "The Sin of the Abyss: a level 250 Cataclysm boss in the Sunken City, reached through the Eye of Abyss.",
  "items": ["cataclysm:the_leviathan_spawn_egg"],
  "infobox": {
    "item": "cataclysm:the_leviathan_spawn_egg",
    "model": "cataclysm:the_leviathan",
    "rows": [
      ["ID", "`cataclysm:the_leviathan`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Sin", "Sin of the Abyss"],
      ["Level", "250 (fixed)"],
      ["Health", "36,336 HP"],
      ["Location", "Sunken City, Abyssal Depths"],
      ["Summon", "[[item:cataclysm:abyss_eye]]"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:cataclysm:tidal_claws]], [[item:cataclysm:abyssal_egg]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/cataclysm/leveling_settings/entities/the_leviathan.json (starting_level 250 = max_level 250)
  mods/L_Enders_Cataclysm-3.16.jar The_Leviathan_Entity.createAttributes (400 max health, 15 attack damage, 10 armor, 1 knockback resistance, 0.15 movement speed, 64 follow range); animation and cooldown fields (attack names)
  mods/L_Enders_Cataclysm-3.16.jar Animation_Monsters.setConfigattribute (adds base × (multiplier − 1) to max health and attack damage)
  mods/L_Enders_Cataclysm-3.16.jar The_Leviathan_Entity.hurt (no damage from attackers beyond the long range limit unless BYPASSES_INVULNERABILITY)
  config/cataclysm.toml (LeviathanHealthMultiplier 1.2, LeviathanDamageMultiplier 1.2, long range limit 38, HP damage: bite 0.1, rush 0.05, tail swing 0.08, tentacle 0.03; abyss blast 10 (+0.1 HP); immune out of water true)
  config/soulrend_core/boss_damage.toml (cataclysm:the_leviathan=5; Soulrend's budget replaces Cataclysm's own per-hit damage cap)
  mods/cataclysm_dimension-forge1.20.1-1.5.7.jar (dimension cataclysm_dimension:cataclysm_abyssal_depths, biome "Abyssal Depths"; Shift-right-click with an eye to enter) and config/cataclysm_dimension/cataclysm_dimension.json (enable_teleport_eye true, keep_structures_in_original_dimensions false)
  config/paxi/datapacks/soulrend_loot/data/cataclysm/loot_tables/entities/the_leviathan.json
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/leviathan_additions_new.json (the second table is added by traveloptics' global loot modifier)
  mods/fallen_gems_affixes-1.20.1-2.1.5.jar data/fallen_gems_affixes/loot_modifiers/ruler_of_abyss_modifier.json (player kill; epic 0.5, mythic 0.25, ancient 0.05)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt "Eight Sins", "Eye of Abyss", "Enter The Abyssal Depths", "Defeat The Leviathan"
  calc: level 250 -> Auto Leveling level 249
        health 400 × 1.2 × (1 + 0.3 × 249) = 36,336; attack 15 × 1.2 × (1 + 0.1 × 249) = 466.2; armor 10 × (1 + 0.011 × 249) = 37.4
        damage cap 5% × 36,336 = 1,816.8 HP per second -> at least 20 s
-->
**The Leviathan** is the **Sin of the Abyss**, a colossal sea monster that lurks in the drowned Sunken City. It is one of the Eight Sins of [[progression/act-iii-into-the-flames|Act III]], the eight L_Ender's Cataclysm bosses that guard the way to [[progression/act-iv-beyond-reality|Act IV]] (see [[progression/act-iii-into-the-flames/the-eight-sins|The Eight Sins]]).

At level 250 it is far above any player's level, and Soulrend limits it to losing 5% of its health per second, so every fight lasts at least 20 s.

## Location

The Leviathan lives in the Sunken City (`cataclysm:sunken_city`). In Soulrend, Cataclysm Dimensions moves this structure into its own dimension, the **Abyssal Depths** (`cataclysm_dimension:cataclysm_abyssal_depths`). Shift-right-clicking with an [[item:cataclysm:abyss_eye]] teleports the player there. See [[features/mobs-and-world/cataclysm-dimensions|Cataclysm Dimensions]].

{{recipes cataclysm:abyss_eye}}

## Stats

The Leviathan's level is fixed at 250, so its stats never change. Cataclysm's config multiplies its base health by 1.2 and its attack damage by 1.2 before the level bonus applies. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 250 |
| --- | --- | --- |
| Health | 400 HP (×1.2 = 480) | **36,336 HP** (18,168 hearts) |
| Attack damage | 15 (×1.2 = 18) | **466.2** |
| Armor | 10 | **37.4** |
| Knockback resistance | 100% | 100% |
| Movement speed | 0.15 | 0.15 |
| Follow range | 64 blocks | 64 blocks |
| Damage cap | | 5% of max health per second (1,816.8 HP), so a kill takes at least 20 s |

It takes no damage from attackers more than 38 blocks away. It takes no damage while it is out of water ("The Leviathan is invincible outside of water!").

## Attacks

| Attack | Notes |
| --- | --- |
| Bite and grab | Bite: plus 10% of the target's maximum health. |
| Rush | Plus 5% of the target's maximum health. |
| Tail whips | Plus 8% of the target's maximum health. |
| Tentacle strikes | Plus 3% of the target's maximum health. |
| Abyss blast (also through portals) | 10 damage plus 10% of the target's maximum health. |
| Mines |  |
| Break dimension |  |

The Leviathan has a second phase. Damage based on the target's maximum health is added on top of the attack's normal damage.

<!-- TODO: attack conditions and cooldown lengths (The_Leviathan_Entity cooldown fields). -->

## Strategy

- **Plan for a long fight.** The 5% damage cap means at least 20 s of fighting however much damage the party deals. Damage over that limit is wasted.
- **Stay within 38 blocks.** Attacks from farther away deal no damage.
- **Raw health doesn't protect against everything.** Several of its attacks add a share of the target's maximum health, so armor and resistance matter more than a big health pool.
- **Keep it in the water.** It is invulnerable on land.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:cataclysm:tidal_claws]] | 1 | Always |
| [[item:cataclysm:abyssal_egg]] | 1 | Always |
| [[item:cataclysm:music_disc_the_leviathan]] | 1 | 10% (+10% per Looting level) |
| [[item:traveloptics:abyssal_spellweave_ingot]] | 1–3 | Always, rolled twice |
| [[item:traveloptics:abyssal_tentacle]] | 1–2 | 40%, rolled twice |
| [[item:traveloptics:archive_of_abyssal_secrets]] | 1 | 29% |
| [[item:irons_spellbooks:scroll]] (Shadowed Miasma, Cursed Minefield or Orbital Void) | 1 | 33%, rolled twice |
| [[item:irons_spellbooks:scroll]] (Abyssal Blast) | 1 | 56%, rolled twice |
| [[item:apotheosis:gem]] (Gem of the Ruler of Abyss) | 1 | Player kill: 50% Epic, 25% Mythic, 5% Ancient |

"Rolled twice" means the item appears in both the Soulrend loot table and the Traveloptics table added to it, so it can drop twice. Spell scrolls hold the named Traveloptics spell at a random level.

## Quests

**Eight Sins** ([[progression/act-iii-into-the-flames|Act III]], after Into the Flames) opens a quest for each Sin's eye. **Eye of Abyss** requires the eye ("Craftable"), and **Enter The Abyssal Depths** requires entering its dimension (reward: a [[item:waystones:warp_scroll]]).

**Defeat The Leviathan** requires killing it. Rewards:

- a roll on the Chipped Gems reward table
- a [[item:skilltree:wisdom_scroll]]
- 5 XP levels

It also opens quests for the Tidal Claws.

> [!LORE] Defeat The Leviathan (Act III)
> A colossal terror lurking in the abyss. Face the Leviathan and survive the depths.

The other Sins are [[bosses/act-iii/ancient-remnant|Ancient Remnant]], [[bosses/act-iii/ender-guardian|Ender Guardian]], [[bosses/act-iii/ignis|Ignis]], [[bosses/act-iii/maledictus|Maledictus]], [[bosses/act-iii/netherite-monstrosity|Netherite Monstrosity]], [[bosses/act-iii/scylla|Scylla]] and [[bosses/act-iii/the-harbinger|The Harbinger]].
