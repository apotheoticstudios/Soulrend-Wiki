---
{
  "title": "Enraged Dead King",
  "summary": "A level 200 Traveloptics version of the Dead King, summoned with a Call Forth The Dead King scroll from the Catacombs.",
  "items": ["traveloptics:enraged_dead_king_spawn_egg"],
  "infobox": {
    "item": "traveloptics:enraged_dead_king_spawn_egg",
    "rows": [
      ["ID", "`traveloptics:enraged_dead_king`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "200 (fixed)"],
      ["Health", "36,420 HP"],
      ["Location", "Summoned with a scroll"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:irons_spellbooks:arcane_essence]] ×64–90, 4 spell scrolls"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/traveloptics/leveling_settings/entities/enraged_dead_king.json (starting_level 200 = max_level 200)
  mods/traveloptics-6.3.0-1.20.1.jar EnragedDeadKingBoss.deadkingAttributes (600 max health, 14 attack damage, 20 armor, 1.0 knockback resistance, 0.6 attack knockback, 1.5 spell power, 1.25 spell resist, 4 entity reach, 0.155 movement speed, 64 follow range); spells: Blood Slash, Blood Step, Acupuncture, Fang Strike, Acid Orb, Wither Skull, Blackout, Blood Howl, Cursed Revenants, Nocturnal Swarm, Aerial Collapse, Ashen Breath, Meteor Storm, Rainfall, Stele Cascade
  config/paxi/resourcepacks/soulrend_lang/assets/traveloptics/lang/en_us.json (spell.traveloptics.call_forth_the_dead_king.guide: summons the boss, cast from scroll, only found in Catacombs chests)
  mods/traveloptics-6.3.0-1.20.1.jar data/traveloptics/loot_tables/chests/catacombs_additions.json (Call Forth The Dead King scroll)
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/enraged_dead_king.json (2 rolls Arcane Essence 32-45, Looting +4-8; 3 random scrolls quality 0.75-1; 4 rolls Blank Runestone or Legendary Ink; 1 Blackout scroll)
  config/soulrend_core/boss_damage.toml (traveloptics:enraged_dead_king=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_2.snbt (Enraged Dead King quest after Defeat The Dead King)
  calc: level 200 -> Auto Leveling level 199
        health 600 × 60.7 = 36,420; attack 14 × 20.9 = 292.6; armor 20 × 3.189 = 63.8
        damage cap 20% × 36,420 = 7,284 HP per second -> at least 5 s
-->
**Enraged Dead King** is Traveloptics' stronger version of [[The Dead King]], called back with a spell scroll. It follows The Dead King in [[progression/act-ii-first-steps|Act II]], but its level is fixed at 200, the player level cap.

## Location

The Enraged Dead King is summoned by casting **Call Forth The Dead King** directly from its scroll. The scroll is found only in Catacombs chests, and the spell can't be cast from a spellbook.

## Stats

The Enraged Dead King's level is fixed at 200, so its stats never change. See [[features/mobs-and-world/mob-levelling|Mob Levelling]].

| Stat | Base | Level 200 |
| --- | --- | --- |
| Health | 600 HP | **36,420 HP** (18,210 hearts) |
| Attack damage | 14 | **292.6** |
| Armor | 20 | **63.8** |
| Knockback resistance | 100% | 100% |
| Spell power | 150% | 150% |
| Spell resistance | 125% | 125% |
| Movement speed | 0.155 | 0.155 |
| Follow range | 64 blocks | 64 blocks |
| Damage cap | | 20% of max health per second (7,284 HP), so a kill takes at least 5 s |

## Attacks

It keeps the Dead King's melee and adds Traveloptics spells:

| Spells | |
| --- | --- |
| Blood Slash, Blood Step, Acupuncture, Fang Strike, Acid Orb, Wither Skull | From Iron's Spellbooks |
| Blackout, Blood Howl, Cursed Revenants, Nocturnal Swarm | From Traveloptics |
| Aerial Collapse, Ashen Breath, Meteor Storm, Rainfall, Stele Cascade | From Traveloptics |

<!-- TODO: spell weights and phases (EnragedDeadKingBoss). -->

## Strategy

- **Expect a level-200 fight in Act II.** Its level doesn't depend on the player's.
- **Magic is weaker against it.** Its 125% spell resistance reduces spell damage.
- **Sustained damage beats burst.** The damage cap blocks anything above 7,284 HP in a second.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:irons_spellbooks:arcane_essence]] | 32–45, twice | Always; Looting adds 4–8 each time |
| [[item:irons_spellbooks:scroll]] (random spell, high level) | 3 | Always |
| [[item:irons_spellbooks:scroll]] (Blackout) | 1 | Always |
| [[item:irons_spellbooks:blank_rune]] or [[item:irons_spellbooks:legendary_ink]] | 4 | Four rolls, 50% each |

Blackout is the boss's exclusive spell.

## Quests

The quest after **Defeat The Dead King** ([[progression/act-ii-first-steps|Act II]]) asks for a Call Forth The Dead King scroll and the Enraged Dead King's kill. Reward: a choice from the Orb reward table and from the Magic Runes reward table.

> [!LORE] Enraged Dead King quest (Act II)
> Alas, the crazed servant of Mortusest has returned...
