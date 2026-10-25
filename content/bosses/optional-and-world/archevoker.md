---
{
  "title": "Archevoker",
  "summary": "An Iron's Spellbooks illager mage who leads the Evoker Forts and casts Evocation spells; its level follows the player's.",
  "items": ["irons_spellbooks:archevoker_spawn_egg"],
  "infobox": {
    "item": "irons_spellbooks:archevoker_spawn_egg",
    "rows": [
      ["ID", "`irons_spellbooks:archevoker`"],
      ["Level", "The player's level"],
      ["Health", "1,524 HP (level 40)"],
      ["Location", "Evoker Fort"],
      { "heading": "Drops" },
      ["Chance", "[[item:irons_spellbooks:evocation_rune]] (50%), Evocation spell scroll"]
    ]
  }
}
---
<!-- sources:
  mods/irons_spellbooks-1.20.1-3.15.6.jar ArchevokerEntity.prepareAttributes (60 max health, 3 attack damage, 1.5 cast time reduction, 0.25 movement speed, 24 follow range); spells: Fang Strike, Fang Ward, Summon Vex, Firecracker, Shield, Invisibility
  mods/irons_spellbooks-1.20.1-3.15.6.jar data/irons_spellbooks/structures/evoker_fort/tower.nbt and villager_spawns/villager_mage.nbt (hold Archevokers); worldgen/structure_set/evoker_fort.json (spacing 85, separation 50); tags/worldgen/biome/has_structure/evoker_fort.json (hills, forests, deserts, plains, savannas)
  mods/irons_spellbooks-1.20.1-3.15.6.jar data/irons_spellbooks/loot_tables/entities/archevoker.json (Arcane Essence 0-8, Looting +0-1; Evocation scroll quality 0.25-0.85; Evocation Rune 50% on player kill; 1-3 rolls of good ink) and additional_evoker_loot.json (Grimoire of Evokation 1.25% + 0.8% per Looting, player kill)
  mods/alshanex_familiars-1.20.1_v3.8_HOTFIX.jar loot_modifiers/entity_loot/additional_power_essence.json (Lesser Magic Power Essence 50% + 5% per Looting, player kill)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  config/autoleveling-common.toml [Attributes]
  calc: health 60 × (1 + 0.3 × (L − 1)); attack 3 × (1 + 0.1 × (L − 1))
        L10: 222, 5.7; L40: 762, 14.7; L100: 1,842, 32.7
-->
**Archevoker** is an illager archmage from Iron's Spells 'n Spellbooks that commands the Evoker Forts. It fights entirely with Evocation magic: summoned vexes, evoker fangs, shields and fireworks. No quest requires killing one, but it is the main source of the [[item:irons_spellbooks:evocation_rune]].

## Spawning

Archevokers live in Evoker Forts (`irons_spellbooks:evoker_fort`), which generate in hills, forests, deserts, plains and savannas, at most once per 85 × 85 chunk area.

## Stats

The Archevoker has no level setting, so its level matches the Soulrend level of the nearest player (see [[features/mobs-and-world/mob-levelling|Mob Levelling]]).

| Stat | Base | Act I (10) | Act II (40) | Act III (100) |
| --- | --- | --- | --- | --- |
| Health | 60 HP | 222 HP | 762 HP | 1,842 HP |
| Attack damage | 3 | 5.7 | 14.7 | 32.7 |
| Movement speed | 0.25 | 0.25 | 0.25 | 0.25 |
| Follow range | 24 blocks | | | |

Its spells cast faster than usual (150% cast time reduction).

## Attacks

| Spell | |
| --- | --- |
| Fang Strike, Fang Ward | Evoker fangs |
| Summon Vex | Summons vexes |
| Firecracker | |
| Shield | |
| Invisibility | |

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:irons_spellbooks:arcane_essence]] | 0–8 | Always rolled; Looting adds 0–1 |
| [[item:irons_spellbooks:scroll]] (random Evocation spell) | 1 | Always |
| Ink | 1–3 | Rolls on Iron's Spellbooks' good ink table |
| [[item:irons_spellbooks:evocation_rune]] | 1 | Player kill; 50% |
| [[item:alshanex_familiars:magic_power_tier_1]] | 1 | Player kill; 50% (+5% per Looting level) |
| [[item:irons_spellbooks:evoker_spell_book]] | 1 | Player kill; 1.25% (+0.8% per Looting level) |
