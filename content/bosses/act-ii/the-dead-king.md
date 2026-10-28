---
{
  "title": "The Dead King",
  "summary": "A level 40 undead spellcaster on a throne in the Catacombs; an Act II boss.",
  "aliases": ["Dead King"],
  "infobox": {
    "rows": [
      ["Mod", "Iron's Spells 'n Spellbooks"],
      ["ID", "`irons_spellbooks:dead_king`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "40 (fixed)"],
      ["Health", "6,350 HP"],
      ["Location", "Catacombs"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:irons_spellbooks:arcane_essence]] ×28–45, inks"],
      ["Chance", "[[item:irons_spellbooks:blood_staff]] or [[item:irons_spellbooks:necronomicon_spell_book]] (50%)"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/irons_spellbooks/leveling_settings/entities/dead_king.json (starting_level 40 = max_level 40)
  mods/irons_spellbooks-1.20.1-3.15.6.jar DeadKingBoss.prepareAttributes (500 max health, 10 attack damage, 15 armor, 0.8 knockback resistance, 0.6 attack knockback, 1.15 spell power, 4 entity reach, 0.155 movement speed, 32 follow range); spells: Blood Slash, Blood Step, Ray of Siphoning, Wither Skull, Raise Dead, Summon Vex, Fang Strike, Fang Ward, Acid Orb, Blight, Poison Arrow, Blaze Storm; melee, slam, phase transition
  mods/irons_spellbooks-1.20.1-3.15.6.jar data/irons_spellbooks/structures/catacombs/catacombs_origin.nbt (holds the Dead King); worldgen/structure_set/catacombs.json (spacing 72, separation 48); tags/worldgen/biome/has_structure/catacombs.json
  mods/irons_spellbooks-1.20.1-3.15.6.jar data/irons_spellbooks/loot_tables/entities/dead_king.json
  mods/traveloptics-6.3.0-1.20.1.jar loot_tables/chests/catacombs_additions.json (Call Forth The Dead King scroll)
  config/soulrend_core/boss_damage.toml (irons_spellbooks:dead_king=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_2.snbt "Find Structure: Catacombs", "Defeat The Dead King"
  calc: level 40 -> Auto Leveling level 39
        health 500 × (1 + 0.3 × 39) = 6,350; attack 10 × 4.9 = 49; armor 15 × 1.429 = 21.4
        damage cap 20% × 6,350 = 1,270 HP per second -> at least 5 s
-->
**The Dead King** is an undead king who rules the Catacombs, an underground Iron's Spellbooks structure. It fights with blood and necromancy spells as well as melee. It is an [[progression/act-ii-first-steps|Act II]] boss, and its defeat opens the fight against its stronger form, the [[Enraged Dead King]].

## Location

The Dead King sits in the Catacombs (`irons_spellbooks:catacombs`), which generate in most temperate Overworld biomes (hills, taigas, jungles, forests, plains, savannas, deserts, swamps and others), at most once per 72 × 72 chunk area. The [[item:explorerscompass:explorerscompass]] can search for them.

## Stats

The Dead King's level is fixed at 40, so its stats never change. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 40 |
| --- | --- | --- |
| Health | 500 HP | **6,350 HP** (3,175 hearts) |
| Attack damage | 10 | **49** |
| Armor | 15 | **21.4** |
| Knockback resistance | 80% | 80% |
| Spell power | 115% | 115% |
| Movement speed | 0.155 | 0.155 |
| Follow range | 32 blocks | 32 blocks |
| Damage cap | | 20% of max health per second (1,270 HP), so a kill takes at least 5 s |

## Attacks

The Dead King fights in two phases, with melee swings and a slam as well as spells:

| Spell | |
| --- | --- |
| Blood Slash, Blood Step, Ray of Siphoning | |
| Raise Dead, Summon Vex | Summon allies. |
| Fang Strike, Fang Ward | |
| Wither Skull, Acid Orb, Blight, Poison Arrow, Blaze Storm | |

<!-- TODO: phase threshold and spell weights (DeadKingBoss). -->

## Strategy

- **Expect summons.** Raise Dead and Summon Vex add enemies to the fight.
- **Sustained damage beats burst.** The damage cap blocks anything above 1,270 HP in a second.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:irons_spellbooks:arcane_essence]] | 28–45 | Always; Looting adds 2–6 |
| Spell scroll or [[item:irons_spellbooks:blank_rune]] | 2 | Two rolls, 50% each |
| Ink | 3 | Three rolls on Iron's Spellbooks' reward ink table |
| [[item:irons_spellbooks:blood_staff]] or [[item:irons_spellbooks:necronomicon_spell_book]] | 1 | Player kill; 50% (+5% per Looting level) |

## Quests

**Find Structure: Catacombs** ([[progression/act-ii-first-steps|Act II]], after the [[progression/act-ii-first-steps/estus-flask|Estus Flask]] quest) requires finding the Catacombs. Reward: 2 XP levels.

**Defeat The Dead King** requires killing it. Reward: a roll on the Ink reward table. See [[progression/act-ii-first-steps/defeat-the-dead-king|Defeat The Dead King]].

> [!LORE] Defeat The Dead King (Act II)
> Once a great leader, The Dead King descended into madness along with thousands of his people...

The next quest asks for the [[Enraged Dead King]], summoned with a scroll found in Catacombs chests.
