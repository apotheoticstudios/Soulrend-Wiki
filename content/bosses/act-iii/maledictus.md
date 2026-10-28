---
{
  "title": "Maledictus",
  "summary": "The Sin of the Curse: a level 250 Cataclysm boss in the Frosted Prison, reached through the Eye of Curse.",
  "items": ["cataclysm:maledictus_spawn_egg"],
  "infobox": {
    "item": "cataclysm:maledictus_spawn_egg",
    "rows": [
      ["ID", "`cataclysm:maledictus`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Sin", "Sin of the Curse"],
      ["Level", "250 (fixed)"],
      ["Health", "38,152.8 HP"],
      ["Location", "Frosted Prison, Eternal Frosthold"],
      ["Summon", "[[item:cataclysm:cursed_eye]]"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:cataclysm:cursium_ingot]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/cataclysm/leveling_settings/entities/maledictus.json (starting_level 250 = max_level 250)
  mods/L_Enders_Cataclysm-3.16.jar Maledictus_Entity.createAttributes (420 max health, 13 attack damage, 10 armor, 1 knockback resistance, 0.33 movement speed, 50 follow range); animation and cooldown fields (attack names)
  mods/L_Enders_Cataclysm-3.16.jar Animation_Monsters.setConfigattribute (adds base × (multiplier − 1) to max health and attack damage)
  mods/L_Enders_Cataclysm-3.16.jar Maledictus_Entity.hurt (no damage from attackers beyond the long range limit unless BYPASSES_INVULNERABILITY)
  config/cataclysm.toml (MaledictusHealthMultiplier 1.2, MaledictusDamageMultiplier 1.2, long range limit 10, phantom halberd 13, phantom arrow 5, HP damage: melee 0.05, shock wave 0.03, AOE 0.15, flying smash 0.1, jump smash 0.08)
  config/soulrend_core/boss_damage.toml (cataclysm:maledictus=5; Soulrend's budget replaces Cataclysm's own per-hit damage cap)
  mods/cataclysm_dimension-forge1.20.1-1.5.7.jar (dimension cataclysm_dimension:cataclysm_eternal_frosthold, biome "Eternal Frosthold"; Shift-right-click with an eye to enter) and config/cataclysm_dimension/cataclysm_dimension.json (enable_teleport_eye true, keep_structures_in_original_dimensions false)
  config/paxi/datapacks/soulrend_loot/data/cataclysm/loot_tables/entities/maledictus.json
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/maledictus_additions_new.json (the second table is added by traveloptics' global loot modifier)
  mods/fallen_gems_affixes-1.20.1-2.1.5.jar data/fallen_gems_affixes/loot_modifiers/fallen_warrior_modifier.json (player kill; epic 0.5, mythic 0.25, ancient 0.05)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt "Eight Sins", "Eye of Curse", "Enter The Eternal Frosthold", "Defeat Maledictus"
  calc: level 250 -> Auto Leveling level 249
        health 420 × 1.2 × (1 + 0.3 × 249) = 38,152.8; attack 13 × 1.2 × (1 + 0.1 × 249) = 404; armor 10 × (1 + 0.011 × 249) = 37.4
        damage cap 5% × 38,152.8 = 1,907.6 HP per second -> at least 20 s
-->
**Maledictus** is the **Sin of the Curse**, a cursed fallen champion imprisoned in the Frosted Prison. It is one of the Eight Sins of [[progression/act-iii-into-the-flames|Act III]], the eight L_Ender's Cataclysm bosses that guard the way to [[progression/act-iv-beyond-reality|Act IV]] (see [[progression/act-iii-into-the-flames/the-eight-sins|The Eight Sins]]).

At level 250 it is far above any player's level, and Soulrend limits it to losing 5% of its health per second, so every fight lasts at least 20 s.

## Location

Maledictus lives in the Frosted Prison (`cataclysm:frosted_prison`). In Soulrend, Cataclysm Dimensions moves this structure into its own dimension, the **Eternal Frosthold** (`cataclysm_dimension:cataclysm_eternal_frosthold`). Shift-right-clicking with an [[item:cataclysm:cursed_eye]] teleports the player there. See [[features/mobs-and-world/cataclysm-dimensions|Cataclysm Dimensions]].

{{recipes cataclysm:cursed_eye}}

## Stats

Maledictus's level is fixed at 250, so its stats never change. Cataclysm's config multiplies its base health by 1.2 and its attack damage by 1.2 before the level bonus applies. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 250 |
| --- | --- | --- |
| Health | 420 HP (×1.2 = 504) | **38,152.8 HP** (19,076.4 hearts) |
| Attack damage | 13 (×1.2 = 15.6) | **404** |
| Armor | 10 | **37.4** |
| Knockback resistance | 100% | 100% |
| Movement speed | 0.33 | 0.33 |
| Follow range | 50 blocks | 50 blocks |
| Damage cap | | 5% of max health per second (1,907.6 HP), so a kill takes at least 20 s |

It takes no damage from attackers more than 10 blocks away.

## Attacks

| Attack | Notes |
| --- | --- |
| Melee swings | Plus 5% of the target's maximum health. |
| Shock wave | Plus 3% of the target's maximum health. |
| Area attack | Plus 15% of the target's maximum health. |
| Flying smash | Plus 10% of the target's maximum health. |
| Jump smash | Plus 8% of the target's maximum health. |
| Phantom halberds | 13 damage. |
| Phantom arrows | 5 damage. |
| Charge, uppercut, spin, grab and spear swing |  |

Maledictus switches weapons, flies, and can become enraged. Damage based on the target's maximum health is added on top of the attack's normal damage.

<!-- TODO: attack conditions and cooldown lengths (Maledictus_Entity cooldown fields). -->

## Strategy

- **Plan for a long fight.** The 5% damage cap means at least 20 s of fighting however much damage the party deals. Damage over that limit is wasted.
- **Stay within 10 blocks.** Attacks from farther away deal no damage.
- **Raw health doesn't protect against everything.** Several of its attacks add a share of the target's maximum health, so armor and resistance matter more than a big health pool.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:cataclysm:cursium_ingot]] | 3–4 | Always |
| [[item:cataclysm:music_disc_maledictus]] | 1 | 10% (+10% per Looting level) |
| [[item:traveloptics:echo_winglet]] | 1–2 | 40%, rolled twice |
| [[item:traveloptics:the_accused_codex]] | 1 | 29% |
| [[item:irons_spellbooks:scroll]] (Despair) | 1 | 30%, rolled twice |
| [[item:irons_spellbooks:scroll]] (Halberd Horizon) | 1 | 50%, rolled twice |
| [[item:apotheosis:gem]] (Gem of the Fallen Warrior) | 1 | Player kill: 50% Epic, 25% Mythic, 5% Ancient |

"Rolled twice" means the item appears in both the Soulrend loot table and the Traveloptics table added to it, so it can drop twice. Spell scrolls hold the named Traveloptics spell at a random level.

## Quests

**Eight Sins** ([[progression/act-iii-into-the-flames|Act III]], after Into the Flames) opens a quest for each Sin's eye. **Eye of Curse** requires the eye ("Craftable"), and **Enter The Eternal Frosthold** requires entering its dimension (reward: a [[item:waystones:warp_scroll]]).

**Defeat Maledictus** requires killing it. Rewards:

- a roll on the Chipped Gems reward table
- a [[item:skilltree:wisdom_scroll]]
- 5 XP levels

It also opens quests for the Soul Render, The Annihilator and Cursed Bow.

> [!LORE] Defeat Maledictus (Act III)
> A fallen champion consumed by dark power. Face Maledictus and end the ancient curse.

The other Sins are [[bosses/act-iii/ancient-remnant|Ancient Remnant]], [[bosses/act-iii/ender-guardian|Ender Guardian]], [[bosses/act-iii/ignis|Ignis]], [[bosses/act-iii/netherite-monstrosity|Netherite Monstrosity]], [[bosses/act-iii/scylla|Scylla]], [[bosses/act-iii/the-harbinger|The Harbinger]] and [[bosses/act-iii/the-leviathan|The Leviathan]].
