---
{
  "title": "Umvuthi",
  "summary": "A level 60 sun-worshipped chief on a throne in the Umvuthana Grove who fights with sunstrikes, solar beams and summoned followers.",
  "aliases": ["Umvuthi, the Sunbird", "Barako"],
  "items": ["mowziesmobs:umvuthi_spawn_egg"],
  "infobox": {
    "item": "mowziesmobs:umvuthi_spawn_egg",
    "model": "mowziesmobs:umvuthi",
    "rows": [
      ["ID", "`mowziesmobs:umvuthi`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "60 (fixed)"],
      ["Health", "2,805 HP"],
      ["Location", "Umvuthana Grove, savannas"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:mowziesmobs:sol_visage]]"],
      ["Chance", "Spell scroll (50%)"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/mowziesmobs/leveling_settings/entities/umvuthi.json (starting_level 60 = max_level 60)
  mods/mowziesmobs-1.8.2.jar EntityUmvuthi.createAttributes (150 max health, 2 attack damage, 1.0 knockback resistance, 40 follow range)
  mods/mowziesmobs-1.8.2.jar EntityUmvuthi.tick (followers: 1/80 chance per tick, target beyond 5.5 blocks or Umvuthi under Sunblock, fewer than 4 Umvuthana within 50 blocks, 200-tick cooldown;
    solar beam: health <= 60%, target within 30 blocks, in front and visible, 230-tick cooldown; supernova: health <= 60%, target within 10.5 blocks, not under Sunblock, 230-tick cooldown;
    solar flare: target within 4 blocks (6 in some states); sunstrike otherwise, SUNSTRIKE_PAUSE 30-50 ticks; Umvuthana Cranes when health lost >= threshold and fewer than 3 cranes within 40 blocks)
  config/mowziesmobs-common.toml [mobs.umvuthi] (multipliers 1.0, heals out of battle, health reset on respawn, spawn_healers_threshold 45, trade 7 gold blocks, biome is_savanna, height 50-100)
  mods/mowziesmobs-1.8.2.jar data/mowziesmobs/worldgen/structure_set/umvuthana_groves.json (spacing 25, separation 8, 10 chunks from villages)
  mods/mowziesmobs-1.8.2.jar data/mowziesmobs/loot_tables/entities/umvuthi.json (Sol Visage killed_by_player; feathers 0-4, looting +0-2)
  mods/gtbcs_geomancy_plus-2.0.0-1.20.1.jar data/gtbcs_geomancy_plus/loot_modifiers/entity/umvuthi_modifier.json + loot_tables/entities/umvuthi_additions.json (scroll weight 5 vs empty 5: Solar Beam or Solar Storm)
  config/soulrend_core/boss_damage.toml (mowziesmobs:umvuthi=20, windowTicks 20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/mowzies_mobs.snbt "The Umvuthana Grove", "Umvuthi, the Sunbird"
  calc: level 60 -> Auto Leveling level 59
        health 150 × (1 + 0.3 × 59) = 2,805; attack 2 × (1 + 0.1 × 59) = 13.8
        damage cap 20% × 2,805 = 561 HP per second -> at least 5 s
-->
**Umvuthi** (in game, **Umvuthi, the Sunbird**) sits on a throne in the Umvuthana Grove and is worshipped by the masked Umvuthana. It is one of the [[progression/act-ii-first-steps|Act II]] bosses, and killing it completes the Umvuthi, the Sunbird quest in the [[progression/side-chapters/fallen-myths|Fallen Myths]] chapter.

Umvuthi never leaves its throne. It fights with sun magic and by calling Umvuthana followers and healers to defend it.

## Location

Umvuthi lives in the Umvuthana Grove (`mowziesmobs:umvuthana_grove`). The grove generates:

- in savanna biomes;
- between y=50 and y=100;
- at most once per 25 × 25 chunk area, and at least 10 chunks from any village.

The [[item:explorerscompass:explorerscompass]] can search for the structure. Finding it completes The Umvuthana Grove quest.

Umvuthi heals while it is out of combat. A player who approaches peacefully can trade with it: 7 [[item:minecraft:gold_block]] buy the Sun's Blessing effect.

## Stats

Umvuthi's level is fixed at 60, so its stats never change. See [[leveling/mob-levels|Mob Levels]] for how levels scale other mobs.

| Stat | Base | Level 60 |
| --- | --- | --- |
| Health | 150 HP | **2,805 HP** (1,402.5 hearts) |
| Attack damage | 2 | **13.8** |
| Armor | 0 | 0 |
| Knockback resistance | 100% | 100% |
| Follow range | 40 blocks | 40 blocks |
| Damage cap | | 20% of max health per second (561 HP), so a kill takes at least 5 s |

Attack damage is the value its attacks are based on. Individual attacks deal different amounts.

## Attacks

| Attack | Condition | Cooldown |
| --- | --- | --- |
| Sunstrike | Its default attack, used whenever nothing else is ready. | 1.5–2.5 s |
| Solar Flare | The target is within 4 blocks. | |
| Summon Umvuthana | The target is more than 5.5 blocks away, and fewer than 4 Umvuthana are within 50 blocks. | 10 s |
| Summon Umvuthana Cranes | Umvuthi has lost 45 health since the last summon, and fewer than 3 Cranes are within 40 blocks. | |
| Solar Beam | Health at 60% or less. The target is within 30 blocks, in front of it and in sight. | 11.5 s |
| Supernova | Health at 60% or less. The target is within 10.5 blocks. | 11.5 s |

Umvuthana Cranes heal Umvuthi. Below 60% health it adds the Solar Beam and Supernova to its attacks.

## Strategy

- **Kill the Cranes first.** The 45-health threshold is tiny next to Umvuthi's 2,805 HP, so it calls new Cranes after almost every hit, up to 3 at a time. Cranes left alive keep healing it.
- **Keep its followers in check.** It summons more Umvuthana whenever the target stands more than 5.5 blocks away and fewer than 4 are nearby.
- **Watch the second half.** Below 60% health, standing far away invites the Solar Beam (up to 30 blocks, in front of it), and standing close invites the Supernova (within 10.5 blocks). Moving out of its line of sight blocks the beam.
- **Sustained damage beats burst.** The damage cap blocks anything above 561 HP in a second.

> [!WARNING]
> Umvuthi's health resets to full when a player respawns nearby. Dying during the fight loses all progress on it.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:mowziesmobs:sol_visage]] | 1 | A player gets the kill. |
| [[item:minecraft:feather]] | 0–4 | Looting adds 0–2. |
| [[item:irons_spellbooks:scroll]] | 1 | 50% chance. Holds Solar Beam or Solar Storm at a random level. |

The Sol Visage is a helmet that never breaks. While wearing it, right-clicking with another mask summons an Umvuthana follower.

## Quests

**The Umvuthana Grove** (Fallen Myths chapter) requires finding the grove. Rewards: [[item:mowziesmobs:blowgun]] and 2 XP levels.

**Umvuthi, the Sunbird** (Fallen Myths chapter) requires killing Umvuthi. Rewards:

- an Epic Solar gem ([[item:apotheosis:gem]])
- 3 XP levels

> [!LORE] Umvuthi, the Sunbird (Fallen Myths)
> Umvuthi resides in a stationary seat upon a throne in savanna groves. He draws his power from the sun, calling forth sunstrikes, solar flares, and massive solar beams.
>
> He can also create Umvuthana followers - including healers called Umvuthana Cranes - from masks to defend him during combat. As such, his masked children revere him as a god. Unequipped travelers should keep their distance from his grove, lest they be smitten by his heliomancy.
