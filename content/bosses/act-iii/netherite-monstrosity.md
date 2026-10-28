---
{
  "title": "Netherite Monstrosity",
  "summary": "The Sin of the Monstrous: a level 250 Cataclysm boss in the Soul Black Smith, reached through the Eye of Monstrous.",
  "items": ["cataclysm:netherite_monstrosity_spawn_egg"],
  "infobox": {
    "item": "cataclysm:netherite_monstrosity_spawn_egg",
    "model": "cataclysm:netherite_monstrosity",
    "rows": [
      ["ID", "`cataclysm:netherite_monstrosity`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Sin", "Sin of the Monstrous"],
      ["Level", "250 (fixed)"],
      ["Health", "54,504 HP"],
      ["Location", "Soul Black Smith, Soulforge Anvil"],
      ["Summon", "[[item:cataclysm:monstrous_eye]]"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:cataclysm:infernal_forge]], [[item:cataclysm:monstrous_horn]], [[item:cataclysm:lava_power_cell]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/cataclysm/leveling_settings/entities/netherite_monstrosity.json (starting_level 250 = max_level 250)
  mods/L_Enders_Cataclysm-3.16.jar Netherite_Monstrosity_Entity.createAttributes (600 max health, 25 attack damage, 12 armor, 5 armor toughness, 1 knockback resistance, 0.25 movement speed, 50 follow range); animation and cooldown fields (attack names)
  mods/L_Enders_Cataclysm-3.16.jar Animation_Monsters.setConfigattribute (adds base × (multiplier − 1) to max health and attack damage)
  mods/L_Enders_Cataclysm-3.16.jar Netherite_Monstrosity_Entity.hurt (no damage from attackers beyond the long range limit unless BYPASSES_INVULNERABILITY)
  config/cataclysm.toml (MonstrosityHealthMultiplier 1.2, MonstrosityDamageMultiplier 1.2, long range limit 18, attack HP damage 0.08, lava bombs (3 per volley, magazine 3), body blocking true)
  config/soulrend_core/boss_damage.toml (cataclysm:netherite_monstrosity=5; Soulrend's budget replaces Cataclysm's own per-hit damage cap)
  mods/cataclysm_dimension-forge1.20.1-1.5.7.jar (dimension cataclysm_dimension:cataclysm_souls_anvil, biome "Soulforge Anvil"; Shift-right-click with an eye to enter) and config/cataclysm_dimension/cataclysm_dimension.json (enable_teleport_eye true, keep_structures_in_original_dimensions false)
  config/paxi/datapacks/soulrend_loot/data/cataclysm/loot_tables/entities/netherite_monstrosity.json
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/netherite_monstrosity_additions_new.json (the second table is added by traveloptics' global loot modifier)
  mods/fallen_gems_affixes-1.20.1-2.1.5.jar data/fallen_gems_affixes/loot_modifiers/guardian_of_hell_modifier.json (player kill; epic 0.5, mythic 0.25, ancient 0.05)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt "Eight Sins", "Eye of Monstrous", "Enter The Soul Anvil", "Defeat Netherite Monstrosity"
  calc: level 250 -> Auto Leveling level 249
        health 600 × 1.2 × (1 + 0.3 × 249) = 54,504; attack 25 × 1.2 × (1 + 0.1 × 249) = 777; armor 12 × (1 + 0.011 × 249) = 44.9
        damage cap 5% × 54,504 = 2,725.2 HP per second -> at least 20 s
-->
**Netherite Monstrosity** is the **Sin of the Monstrous**, a living fortress of netherite in the Soul Black Smith. It is one of the Eight Sins of [[progression/act-iii-into-the-flames|Act III]], the eight L_Ender's Cataclysm bosses that guard the way to [[progression/act-iv-beyond-reality|Act IV]] (see [[progression/act-iii-into-the-flames/the-eight-sins|The Eight Sins]]).

At level 250 it is far above any player's level, and Soulrend limits it to losing 5% of its health per second, so every fight lasts at least 20 s.

## Location

Netherite Monstrosity lives in the Soul Black Smith (`cataclysm:soul_black_smith`). In Soulrend, Cataclysm Dimensions moves this structure into its own dimension, the **Soulforge Anvil** (`cataclysm_dimension:cataclysm_souls_anvil`). Shift-right-clicking with an [[item:cataclysm:monstrous_eye]] teleports the player there. See [[features/mobs-and-world/cataclysm-dimensions|Cataclysm Dimensions]].

{{recipes cataclysm:monstrous_eye}}

## Stats

Netherite Monstrosity's level is fixed at 250, so its stats never change. Cataclysm's config multiplies its base health by 1.2 and its attack damage by 1.2 before the level bonus applies. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 250 |
| --- | --- | --- |
| Health | 600 HP (×1.2 = 720) | **54,504 HP** (27,252 hearts) |
| Attack damage | 25 (×1.2 = 30) | **777** |
| Armor | 12 | **44.9** |
| Armor toughness | 5 | 5 |
| Knockback resistance | 100% | 100% |
| Movement speed | 0.25 | 0.25 |
| Follow range | 50 blocks | 50 blocks |
| Damage cap | | 5% of max health per second (2,725.2 HP), so a kill takes at least 20 s |

It takes no damage from attackers more than 18 blocks away.

## Attacks

| Attack | Notes |
| --- | --- |
| Melee attacks | Plus 8% of the target's maximum health. |
| Lava bombs | Fired in volleys of 3. |
| Flare shot |  |
| Overpower |  |

The Netherite Monstrosity is dormant until awakened, and it can turn berserk. Damage based on the target's maximum health is added on top of the attack's normal damage.

<!-- TODO: attack conditions and cooldown lengths (Netherite_Monstrosity_Entity cooldown fields). -->

## Strategy

- **Plan for a long fight.** The 5% damage cap means at least 20 s of fighting however much damage the party deals. Damage over that limit is wasted.
- **Stay within 18 blocks.** Attacks from farther away deal no damage.
- **Raw health doesn't protect against everything.** Several of its attacks add a share of the target's maximum health, so armor and resistance matter more than a big health pool.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:cataclysm:infernal_forge]] | 1 | Always |
| [[item:cataclysm:monstrous_horn]] | 1 | Always |
| [[item:cataclysm:lava_power_cell]] | 16–24 | Always |
| [[item:cataclysm:music_disc_netherite_monstrosity]] | 1 | 10% (+10% per Looting level) |
| [[item:traveloptics:pyro_spellweave_ingot]] | 1–2 | Always, rolled twice |
| [[item:irons_spellbooks:scroll]] (Lava Bomb) | 1 | 71%, rolled twice |
| [[item:apotheosis:gem]] (Gem of the Guardian of Hell) | 1 | Player kill: 50% Epic, 25% Mythic, 5% Ancient |

"Rolled twice" means the item appears in both the Soulrend loot table and the Traveloptics table added to it, so it can drop twice. Spell scrolls hold the named Traveloptics spell at a random level.

## Quests

**Eight Sins** ([[progression/act-iii-into-the-flames|Act III]], after Into the Flames) opens a quest for each Sin's eye. **Eye of Monstrous** requires the eye ("Craftable"), and **Enter The Soul Anvil** requires entering its dimension (reward: a [[item:waystones:warp_scroll]]).

**Defeat Netherite Monstrosity** requires killing it. Rewards:

- a roll on the Chipped Gems reward table
- a [[item:skilltree:wisdom_scroll]]
- 5 XP levels

It also opens quests for the Monstrous Helm and Infernal Forge.

> [!LORE] Defeat Netherite Monstrosity (Act III)
> A living fortress forged from ancient Netherite. Defeat the Netherite Monstrosity and survive the inferno.

The other Sins are [[bosses/act-iii/ancient-remnant|Ancient Remnant]], [[bosses/act-iii/ender-guardian|Ender Guardian]], [[bosses/act-iii/ignis|Ignis]], [[bosses/act-iii/maledictus|Maledictus]], [[bosses/act-iii/scylla|Scylla]], [[bosses/act-iii/the-harbinger|The Harbinger]] and [[bosses/act-iii/the-leviathan|The Leviathan]].
