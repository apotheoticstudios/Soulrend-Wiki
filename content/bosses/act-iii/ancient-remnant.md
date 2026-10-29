---
{
  "title": "Ancient Remnant",
  "summary": "The Sin of the Desert: a level 250 Cataclysm boss in the Cursed Pyramid, reached through the Eye of Desert.",
  "items": ["cataclysm:ancient_remnant_spawn_egg"],
  "infobox": {
    "item": "cataclysm:ancient_remnant_spawn_egg",
    "model": "cataclysm:ancient_remnant",
    "rows": [
      ["ID", "`cataclysm:ancient_remnant`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Sin", "Sin of the Desert"],
      ["Level", "250 (fixed)"],
      ["Health", "40,878 HP"],
      ["Location", "Cursed Pyramid, Pharaoh's Bane"],
      ["Summon", "[[item:cataclysm:desert_eye]]"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:cataclysm:sandstorm_in_a_bottle]], [[item:cataclysm:remnant_skull]], [[item:cataclysm:ancient_metal_block]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/cataclysm/leveling_settings/entities/ancient_remnant.json (starting_level 250 = max_level 250)
  mods/L_Enders_Cataclysm-3.16.jar Ancient_Remnant_Entity.createAttributes (450 max health, 25 attack damage, 12 armor, 4 armor toughness, 1 knockback resistance, 0.33 movement speed, 70 follow range); animation and cooldown fields (attack names)
  mods/L_Enders_Cataclysm-3.16.jar Animation_Monsters.setConfigattribute (adds base × (multiplier − 1) to max health and attack damage)
  mods/L_Enders_Cataclysm-3.16.jar Ancient_Remnant_Entity.hurt (no damage from attackers beyond the long range limit unless BYPASSES_INVULNERABILITY)
  config/cataclysm.toml (AncientRemnantHealthMultiplier 1.2, AncientRemnantDamageMultiplier 1.2, long range limit 14, charge 0.1 / normal 0.05 / stomp 0.03 HP damage, earthquake 11)
  config/soulrend_core/boss_damage.toml (cataclysm:ancient_remnant=5; Soulrend's budget replaces Cataclysm's own per-hit damage cap)
  mods/cataclysm_dimension-forge1.20.1-1.5.7.jar (dimension cataclysm_dimension:cataclysm_pharaohs_bane, biome "Pharaoh's Bane"; Shift-right-click with an eye to enter) and config/cataclysm_dimension/cataclysm_dimension.json (enable_teleport_eye true, keep_structures_in_original_dimensions false)
  config/paxi/datapacks/soulrend_loot/data/cataclysm/loot_tables/entities/ancient_remnant.json
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/ancient_remnant_additions_new.json (the second table is added by traveloptics' global loot modifier)
  mods/fallen_gems_affixes-1.20.1-2.1.5.jar data/fallen_gems_affixes/loot_modifiers/blood_tyrant_modifier.json (player kill; epic 0.5, mythic 0.25, ancient 0.05)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt "Eight Sins", "Eye of Desert", "Enter The Pharaoh's Bane", "Defeat Ancient Remnant"
  calc: level 250 -> Auto Leveling level 249
        health 450 × 1.2 × (1 + 0.3 × 249) = 40,878; attack 25 × 1.2 × (1 + 0.1 × 249) = 777; armor 12 × (1 + 0.011 × 249) = 44.9
        damage cap 5% × 40,878 = 2,043.9 HP per second -> at least 20 s
-->
**Ancient Remnant** is the **Sin of the Desert**, an ancient guardian buried under the sand of the Cursed Pyramid. It is one of the Eight Sins of [[progression/act-iii-into-the-flames|Act III]], the eight L_Ender's Cataclysm bosses that guard the way to [[progression/act-iv-beyond-reality|Act IV]] (see [[progression/act-iii-into-the-flames/the-eight-sins|The Eight Sins]]).

At level 250 it is far above any player's level, and Soulrend limits it to losing 5% of its health per second, so every fight lasts at least 20 s.

## Location

Ancient Remnant lives in the Cursed Pyramid (`cataclysm:cursed_pyramid`). In Soulrend, Cataclysm Dimensions moves this structure into its own dimension, the **Pharaoh's Bane** (`cataclysm_dimension:cataclysm_pharaohs_bane`). Shift-right-clicking with an [[item:cataclysm:desert_eye]] teleports the player there. See [[items/progression-keys/cataclysm-eyes|Cataclysm Eyes]].

{{recipes cataclysm:desert_eye}}

## Stats

Ancient Remnant's level is fixed at 250, so its stats never change. Cataclysm's config multiplies its base health by 1.2 and its attack damage by 1.2 before the level bonus applies. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 250 |
| --- | --- | --- |
| Health | 450 HP (×1.2 = 540) | **40,878 HP** (20,439 hearts) |
| Attack damage | 25 (×1.2 = 30) | **777** |
| Armor | 12 | **44.9** |
| Armor toughness | 4 | 4 |
| Knockback resistance | 100% | 100% |
| Movement speed | 0.33 | 0.33 |
| Follow range | 70 blocks | 70 blocks |
| Damage cap | | 5% of max health per second (2,043.9 HP), so a kill takes at least 20 s |

It takes no damage from attackers more than 14 blocks away.

## Attacks

| Attack | Notes |
| --- | --- |
| Normal attack | Plus 5% of the target's maximum health. |
| Charge | Plus 10% of the target's maximum health. |
| Stomp | Plus 3% of the target's maximum health. |
| Earthquake | 11 damage. |
| Roar |  |
| Monoliths |  |

The Ancient Remnant can become enraged. Damage based on the target's maximum health is added on top of the attack's normal damage.

<!-- TODO: attack conditions and cooldown lengths (Ancient_Remnant_Entity cooldown fields). -->

## Strategy

- **Plan for a long fight.** The 5% damage cap means at least 20 s of fighting however much damage the party deals. Damage over that limit is wasted.
- **Stay within 14 blocks.** Attacks from farther away deal no damage.
- **Raw health doesn't protect against everything.** Several of its attacks add a share of the target's maximum health, so armor and resistance matter more than a big health pool.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:cataclysm:sandstorm_in_a_bottle]] | 1 | Always |
| [[item:cataclysm:remnant_skull]] | 1 | Always |
| [[item:cataclysm:ancient_metal_block]] | 1 | Always |
| [[item:cataclysm:music_disc_ancient_remnant]] | 1 | 10% (+10% per Looting level) |
| [[item:traveloptics:desert_jewel_fragment]] | 1–2 | 40%, rolled twice |
| [[item:irons_spellbooks:scroll]] (Stele Cascade) | 1 | 83%, rolled twice |
| [[item:apotheosis:gem]] (Gem of the Blood Tyrant) | 1 | Player kill: 50% Epic, 25% Mythic, 5% Ancient |

"Rolled twice" means the item appears in both the Soulrend loot table and the Traveloptics table added to it, so it can drop twice. Spell scrolls hold the named Traveloptics spell at a random level.

## Quests

**Eight Sins** ([[progression/act-iii-into-the-flames|Act III]], after Into the Flames) opens a quest for each Sin's eye. **Eye of Desert** requires the eye ("Craftable"), and **Enter The Pharaoh's Bane** requires entering its dimension (reward: a [[item:waystones:warp_scroll]]).

**Defeat Ancient Remnant** requires killing it. Rewards:

- a roll on the Chipped Gems reward table
- a [[item:skilltree:wisdom_scroll]]
- 5 XP levels

It also opens quests for the Ancient Metal Ingot, Bone Reptile Chestplate and Bone Reptile Helmet.

> [!LORE] Defeat Ancient Remnant (Act III)
> An ancient guardian buried beneath the desert sands has awakened. Defeat the Ancient Remnant and uncover the relics of a forgotten civilization.

The other Sins are [[bosses/act-iii/ender-guardian|Ender Guardian]], [[bosses/act-iii/ignis|Ignis]], [[bosses/act-iii/maledictus|Maledictus]], [[bosses/act-iii/netherite-monstrosity|Netherite Monstrosity]], [[bosses/act-iii/scylla|Scylla]], [[bosses/act-iii/the-harbinger|The Harbinger]] and [[bosses/act-iii/the-leviathan|The Leviathan]].
