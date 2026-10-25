---
{
  "title": "The Nightwarden",
  "summary": "A level 500 Traveloptics boss in the Void Cathedral of the End Highlands; the optional final fight of Act IV, worth 250 XP levels.",
  "aliases": ["Nightwarden"],
  "items": ["traveloptics:the_nightwarden_spawn_egg"],
  "infobox": {
    "item": "traveloptics:the_nightwarden_spawn_egg",
    "rows": [
      ["ID", "`traveloptics:the_nightwarden`"],
      ["Act", "[[progression/act-iv-beyond-reality|Act IV]] (optional)"],
      ["Level", "500 (fixed)"],
      ["Health", "90,420 HP"],
      ["Location", "Void Cathedral, End Highlands"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:traveloptics:withered_excrucis]] ×2, [[item:irons_spellbooks:arcane_essence]], 2 Ender spell scrolls"],
      ["Chance", "[[item:traveloptics:cradle_of_will]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/traveloptics/leveling_settings/entities/the_nightwarden.json (starting_level 500 = max_level 500)
  mods/traveloptics-6.3.0-1.20.1.jar NightwardenBossEntity.prepareAttributes (600 max health, 18 attack damage, 10 armor, 1.0 knockback resistance, 0.2 attack knockback, 1.5 spell power, 1.0 spell resist, 0.2 movement speed, 70 follow range); anti_cheese handlers (anti-CC, summon, teleport, void teleport); NightwardenReturnHomeHandler
  config/traveloptics/traveloptics-entity.toml [entity.nightwarden] (dynamic damage cap 100; clone slashes 0.5556 × base + 5% HP; dimensional spike 0.6667 × base; spin clones 0.4444 × base + 3% HP; drop clones 0.4444 × base + 5% HP; end eruption 0.2778 × base; spin clone trail explosion 0.3611 × base + 5% HP; dragon spirit 10% HP)
  mods/traveloptics-6.3.0-1.20.1.jar data/traveloptics/structures/void_cathedral.nbt (holds the Nightwarden and a Voidshelf Golem); worldgen/structure/void_cathedral.json (#traveloptics:has_structure/void_cathedral = minecraft:end_highlands), structure_set (spacing 90, separation 78)
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/the_nightwarden.json
  config/soulrend_core/boss_damage.toml (traveloptics:the_nightwarden=4)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_4.snbt "Find Void Cathedral", counterspell scroll quest (optional), "Your test begins." (optional)
  calc: level 500 -> Auto Leveling level 499
        health 600 × (1 + 0.3 × 499) = 90,420; attack 18 × (1 + 0.1 × 499) = 916.2; armor 10 × (1 + 0.011 × 499) = 64.9
        damage cap 4% × 90,420 = 3,616.8 HP per second -> at least 25 s
-->
**The Nightwarden** is the guardian of the Void Cathedral, a forgotten cathedral in the End Highlands. At level 500 it is the highest-level boss in Soulrend's main questline and has the tightest damage cap of any boss: it loses at most 4% of its health per second. Killing it is an optional quest at the end of [[progression/act-iv-beyond-reality|Act IV]] that rewards 250 XP levels.

## Location

The Nightwarden waits in the Void Cathedral (`traveloptics:void_cathedral`), which generates in the End Highlands of the outer End, at most once per 90 × 90 chunk area. A [[bosses/optional-and-world/voidshelf-golem|Voidshelf Golem]] guards the cathedral too.

The Nightwarden returns to its home position if pulled away, and it has handlers that counter crowd control, teleport tricks and void cheese.

## Stats

The Nightwarden's level is fixed at 500, so its stats never change. See [[features/mobs-and-world/mob-levelling|Mob Levelling]].

| Stat | Base | Level 500 |
| --- | --- | --- |
| Health | 600 HP | **90,420 HP** (45,210 hearts) |
| Attack damage | 18 | **916.2** |
| Armor | 10 | **64.9** |
| Knockback resistance | 100% | 100% |
| Spell power | 150% | 150% |
| Movement speed | 0.2 | 0.2 |
| Follow range | 70 blocks | 70 blocks |
| Damage cap | | 4% of max health per second (3,616.8 HP), so a kill takes at least 25 s |

## Attacks

Most of its attacks deal a fraction of its attack damage, plus a share of the target's maximum health:

| Attack | Damage |
| --- | --- |
| Clone slashes | 55.56% of attack damage, plus 5% of the target's maximum health |
| Dimensional spike | 66.67% of attack damage |
| Spin clones | 44.44% of attack damage, plus 3% of the target's maximum health |
| Drop clones (slam) | 44.44% of attack damage, plus 5% of the target's maximum health |
| Spin clone trail explosion | 36.11% of attack damage, plus 5% of the target's maximum health |
| End eruption | 27.78% of attack damage |
| Dragon spirit | 10% of the target's maximum health |

At level 500, 55.56% of its attack damage is about 509 damage before armor.

<!-- TODO: phases and attack order (NightwardenBossEntity). -->

## Strategy

- **Bring Counterspell.** The quest before the fight asks for a Counterspell scroll ("Useful on black holes").
- **Plan for at least 25 s of damage.** The 4% cap blocks anything above 3,616.8 HP in a second.
- **Big health pools aren't enough.** Several attacks deal a share of the target's maximum health.
- **Don't try to cheese it.** It counters crowd control, teleporting and the void, and returns home if pulled away.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:traveloptics:withered_excrucis]] | 2 | Always |
| [[item:irons_spellbooks:arcane_essence]] | 28–45, twice | Always; Looting adds 2–6 each time |
| [[item:irons_spellbooks:scroll]] (random Ender spell, high level) | 2 | Always |
| [[item:irons_spellbooks:blank_rune]] or [[item:irons_spellbooks:legendary_ink]] | 3 | Three rolls, 50% each |
| [[item:traveloptics:cradle_of_will]] | 0–2 | Two rolls, 67% each |
| [[item:traveloptics:music_disc_nightwarden]] | 1 | 20% (+10% per Looting level) |

## Quests

**Find Void Cathedral** ([[progression/act-iv-beyond-reality|Act IV]], after End Highlands) requires finding the cathedral. Rewards: a roll on the Chipped Gems reward table and 3 XP levels. See [[progression/act-iv-beyond-reality/void-cathedral|Void Cathedral]].

An optional quest asks for a **Counterspell** scroll (subtitle "Useful on black holes"; reward: 2 XP levels).

**Your test begins.** (optional) requires killing the Nightwarden. Rewards:

- two choices from the Perfect Gems reward table
- 2 [[item:astral_calamity_extras:universium_ingot]]
- a [[item:skilltree:wisdom_scroll]]
- 250 XP levels

See [[progression/act-iv-beyond-reality/defeat-the-nightwarden|Defeat The Nightwarden]].

A last optional quest trades a [[item:traveloptics:cradle_of_will]] for a [[item:traveloptics:void_manuscript]].

> [!LORE] Your test begins. (Act IV)
> A silent sentinel of the void, bound to shadows older than time. Face the Nightwarden, and prove your strength against the final darkness.
