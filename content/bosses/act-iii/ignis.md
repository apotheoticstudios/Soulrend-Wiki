---
{
  "title": "Ignis",
  "summary": "The Sin of the Flame: a level 250 Cataclysm boss in the Burning Arena, reached through the Eye of Flame.",
  "items": ["cataclysm:ignis_spawn_egg"],
  "infobox": {
    "item": "cataclysm:ignis_spawn_egg",
    "model": "cataclysm:ignis",
    "rows": [
      ["ID", "`cataclysm:ignis`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Sin", "Sin of the Flame"],
      ["Level", "250 (fixed)"],
      ["Health", "40,878 HP"],
      ["Location", "Burning Arena, Inferno's Maw"],
      ["Summon", "[[item:cataclysm:flame_eye]]"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:cataclysm:ignitium_ingot]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/cataclysm/leveling_settings/entities/ignis.json (starting_level 250 = max_level 250)
  mods/L_Enders_Cataclysm-3.16.jar Ignis_Entity.createAttributes (450 max health, 14 attack damage, 10 armor, 1 knockback resistance, 0.33 movement speed, 50 follow range); animation and cooldown fields (attack names)
  mods/L_Enders_Cataclysm-3.16.jar Animation_Monsters.setConfigattribute (adds base × (multiplier − 1) to max health and attack damage)
  mods/L_Enders_Cataclysm-3.16.jar Ignis_Entity.hurt (no damage from attackers beyond the long range limit unless BYPASSES_INVULNERABILITY)
  config/cataclysm.toml (IgnisHealthMultiplier 1.2, IgnisDamageMultiplier 1.3, long range limit 150)
  config/soulrend_core/boss_damage.toml (cataclysm:ignis=5; Soulrend's budget replaces Cataclysm's own per-hit damage cap)
  mods/cataclysm_dimension-forge1.20.1-1.5.7.jar (dimension cataclysm_dimension:cataclysm_infernos_maw, biome "Inferno's Maw"; Shift-right-click with an eye to enter) and config/cataclysm_dimension/cataclysm_dimension.json (enable_teleport_eye true, keep_structures_in_original_dimensions false)
  config/paxi/datapacks/soulrend_loot/data/cataclysm/loot_tables/entities/ignis.json
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/ignis_additions_new.json (the second table is added by traveloptics' global loot modifier)
  mods/fallen_gems_affixes-1.20.1-2.1.5.jar data/fallen_gems_affixes/loot_modifiers/infernal_overlord_modifier.json (player kill; epic 0.5, mythic 0.25, ancient 0.05)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt "Eight Sins", "Eye of Flame", "Enter The Infernos Maw", "Defeat Ignis"
  calc: level 250 -> Auto Leveling level 249
        health 450 × 1.2 × (1 + 0.3 × 249) = 40,878; attack 14 × 1.3 × (1 + 0.1 × 249) = 471.4; armor 10 × (1 + 0.011 × 249) = 37.4
        damage cap 5% × 40,878 = 2,043.9 HP per second -> at least 20 s
-->
**Ignis** is the **Sin of the Flame**, a burning knight with a sword and shield that guards the Burning Arena. It is one of the Eight Sins of [[progression/act-iii-into-the-flames|Act III]], the eight L_Ender's Cataclysm bosses that guard the way to [[progression/act-iv-beyond-reality|Act IV]] (see [[progression/act-iii-into-the-flames/the-eight-sins|The Eight Sins]]).

At level 250 it is far above any player's level, and Soulrend limits it to losing 5% of its health per second, so every fight lasts at least 20 s.

## Location

Ignis lives in the Burning Arena (`cataclysm:burning_arena`). In Soulrend, Cataclysm Dimensions moves this structure into its own dimension, the **Inferno's Maw** (`cataclysm_dimension:cataclysm_infernos_maw`). Shift-right-clicking with an [[item:cataclysm:flame_eye]] teleports the player there. See [[items/progression-keys/cataclysm-eyes|Cataclysm Eyes]].

{{recipes cataclysm:flame_eye}}

The Eye of Flame needs Burning Ashes, which Ignited Berserkers drop in Nether Fortresses (25%).

## Stats

Ignis's level is fixed at 250, so its stats never change. Cataclysm's config multiplies its base health by 1.2 and its attack damage by 1.3 before the level bonus applies. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 250 |
| --- | --- | --- |
| Health | 450 HP (×1.2 = 540) | **40,878 HP** (20,439 hearts) |
| Attack damage | 14 (×1.3 = 18.2) | **471.4** |
| Armor | 10 | **37.4** |
| Knockback resistance | 100% | 100% |
| Movement speed | 0.33 | 0.33 |
| Follow range | 50 blocks | 50 blocks |
| Damage cap | | 5% of max health per second (2,043.9 HP), so a kill takes at least 20 s |

It takes no damage from attackers more than 150 blocks away.

## Attacks

| Attack | Notes |
| --- | --- |
| Sword swings, pokes and combos |  |
| Shield smash and body checks |  |
| Smash and reinforced smash (also from the air) |  |
| Spin attack |  |
| Earth Shudders |  |
| Counter and strike |  |
| Magic attack |  |
| Ultimate attack |  |

Ignis fights in three phases. It blocks with a shield that can be broken, and it has soul-fire versions of several attacks.

<!-- TODO: attack conditions and cooldown lengths (Ignis_Entity cooldown fields). -->

## Strategy

- **Plan for a long fight.** The 5% damage cap means at least 20 s of fighting however much damage the party deals. Damage over that limit is wasted.
- **Stay within 150 blocks.** Attacks from farther away deal no damage.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:cataclysm:ignitium_ingot]] | 3 | Always |
| [[item:cataclysm:music_disc_ignis]] | 1 | 10% (+10% per Looting level) |
| [[item:traveloptics:flame_tempered_handguard]] | 1–2 | 40%, rolled twice |
| [[item:irons_spellbooks:scroll]] (Meteor Storm) | 1 | 30% |
| [[item:irons_spellbooks:scroll]] (Burning Judgment) | 1 | 50% |
| [[item:apotheosis:gem]] (Gem of the Infernal Overlord) | 1 | Player kill: 50% Epic, 25% Mythic, 5% Ancient |

"Rolled twice" means the item appears in both the Soulrend loot table and the Traveloptics table added to it, so it can drop twice. Spell scrolls hold the named Traveloptics spell at a random level.

## Quests

**Eight Sins** ([[progression/act-iii-into-the-flames|Act III]], after Into the Flames) opens a quest for each Sin's eye. **Eye of Flame** requires the eye ("Craftable"), and **Enter The Infernos Maw** requires entering its dimension (reward: a [[item:waystones:warp_scroll]]).

**Defeat Ignis** requires killing it. Rewards:

- a roll on the Chipped Gems reward table
- a [[item:skilltree:wisdom_scroll]]
- 5 XP levels

It also opens quests for the Bulwark of the Flame, The Incinerator and Blazing Grips.

> [!LORE] Defeat Ignis (Act III)
> A blazing warrior forged in the fires of the Nether. Face Ignis and survive the trial by flame.

The other Sins are [[bosses/act-iii/ancient-remnant|Ancient Remnant]], [[bosses/act-iii/ender-guardian|Ender Guardian]], [[bosses/act-iii/maledictus|Maledictus]], [[bosses/act-iii/netherite-monstrosity|Netherite Monstrosity]], [[bosses/act-iii/scylla|Scylla]], [[bosses/act-iii/the-harbinger|The Harbinger]] and [[bosses/act-iii/the-leviathan|The Leviathan]].
