---
{
  "title": "Echo of Tyros",
  "summary": "A level 100 scythe-wielding fire mage summoned in the Nether Citadel with a Cinderous Soulcaller.",
  "aliases": ["Echo of Tyros, First Flamebearer", "Tyros", "Fire Boss"],
  "infobox": {
    "item": "irons_spellbooks:tyros_statue",
    "model": "irons_spellbooks:fire_boss",
    "rows": [
      ["ID", "`irons_spellbooks:fire_boss`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "100 (fixed)"],
      ["Health", "30,700 HP"],
      ["Location", "Citadel, Nether"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:irons_spellbooks:divine_soulshard]], [[item:irons_spellbooks:cinder_essence]], [[item:irons_spellbooks:arcane_essence]]"],
      ["Chance", "[[item:irons_spellbooks:decrepit_scythe]] or [[item:irons_spellbooks:betrayer_signet]] (55%)"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/irons_spellbooks/leveling_settings/entities/fire_boss.json (starting_level 100 = max_level 100)
  mods/irons_spellbooks-1.20.1-3.15.6.jar FireBossEntity.prepareAttributes (1,000 max health, 10 attack damage, 15 armor, 0.8 knockback resistance, 1.25 spell power, 1.25 spell resist, 1.5 fire magic resist, 3 entity reach, 0.21 movement speed, 48 follow range); scythe animations, offhand parry, stance break, half-health attack, soul mode; spells Fire Arrow, Raise Hell, Scorch, summon fiery daggers; FireBossAttackGoal (Fireball)
  mods/irons_spellbooks-1.20.1-3.15.6.jar assets/irons_spellbooks/lang/en_us.json (fire_boss = "Echo of Tyros, First Flamebearer"; Cinderous Soulcaller, Cinderous Soul Rune)
  mods/irons_spellbooks-1.20.1-3.15.6.jar data/irons_spellbooks/worldgen/structure/citadel.json (#minecraft:has_structure/bastion_remnant), structure_set (spacing 100, separation 80)
  mods/irons_spellbooks-1.20.1-3.15.6.jar data/irons_spellbooks/loot_tables/entities/fire_boss.json (no Decrepit Key; DECREPIT_KEY only referenced by item, tab and vault config)
  config/soulrend_core/boss_damage.toml (irons_spellbooks:fire_boss=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt "Find Structure: Citadel" (description), Cinderous Soulcaller quest, "Defeat Echo Of Tyros, First Flamebearer"
  calc: level 100 -> Auto Leveling level 99
        health 1,000 × 30.7 = 30,700; attack 10 × 10.9 = 109; armor 15 × 2.089 = 31.3
        damage cap 20% × 30,700 = 6,140 HP per second -> at least 5 s
-->
**Echo of Tyros** (in game, **Echo of Tyros, First Flamebearer**) is the fire mage that haunts the Citadel, a black castle in the Nether. It fights with a scythe and fire magic. It is an [[progression/act-iii-into-the-flames|Act III]] boss.

## Location

The Citadel (`irons_spellbooks:citadel`) generates in the same Nether biomes as Bastion Remnants, at most once per 100 × 100 chunk area. Under its glass dome stands a **Cinderous Soul Rune**. Ringing a [[item:irons_spellbooks:cinderous_soulcaller]] next to the rune summons Echo of Tyros.

{{recipes irons_spellbooks:cinderous_soulcaller}}

## Stats

Echo of Tyros's level is fixed at 100, so its stats never change. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 100 |
| --- | --- | --- |
| Health | 1,000 HP | **30,700 HP** (15,350 hearts) |
| Attack damage | 10 | **109** |
| Armor | 15 | **31.3** |
| Knockback resistance | 80% | 80% |
| Spell power | 125% | 125% |
| Spell resistance | 125% (fire 150%) | |
| Movement speed | 0.21 | 0.21 |
| Follow range | 48 blocks | 48 blocks |
| Damage cap | | 20% of max health per second (6,140 HP), so a kill takes at least 5 s |

## Attacks

| Attack | Notes |
| --- | --- |
| Scythe combos | Horizontal slashes, down- and side-slashes, a spinning slash and a jumping combo. |
| Backpedal | |
| Parry | Blocks with its off hand. |
| Fiery daggers | Summons flaming daggers. |
| Spells | Fireball, Fire Arrow, Scorch and Raise Hell. |

At half health it switches to a "soul" mode and uses a special attack. Its stance can be broken.

<!-- TODO: attack conditions and stance mechanics (FireBossEntity). -->

## Strategy

- **Don't use fire magic.** It resists fire spells even more than other spells.
- **Sustained damage beats burst.** The damage cap blocks anything above 6,140 HP in a second.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:irons_spellbooks:divine_soulshard]] | 1 | Player kill |
| [[item:irons_spellbooks:arcane_essence]] | 28–45, twice | Always; Looting adds 2–6 each time |
| [[item:irons_spellbooks:cinder_essence]] | 1 | Always; Looting adds 8–16 |
| [[item:irons_spellbooks:decrepit_scythe]] or [[item:irons_spellbooks:betrayer_signet]] | 1 | Player kill; 55% (+5% per Looting level) |

> [!NOTE]
> The Citadel quest says the boss drops the Decrepit Key for the Citadel's vaults, but its loot table contains no key.

## Quests

**Find Structure: Citadel** ([[progression/act-iii-into-the-flames|Act III]], after Into the Flames) requires finding the Citadel. Rewards: a roll on the Structure Loot reward table and 2 XP levels.

The next quest asks for a Cinderous Soulcaller (rewards: 3 [[item:dungeons_and_combat:estus_flask]], a roll on the Rare Loot reward table and 3 XP levels).

**Defeat Echo Of Tyros, First Flamebearer** requires killing it. Rewards: a roll on the Ancient and the Flawed Gems reward tables and 3 XP levels. See [[progression/act-iii-into-the-flames/defeat-echo-of-tyros|Defeat Echo of Tyros]].

> [!LORE] Find Structure: Citadel (Act III)
> The Citadel is a new Structure in the Nether, its a big black Castle with a Glass Dome at the top. In the middle of the Dome is a Block called Cinderous Soul Rune. You need to craft a Cinderous Soulcaller, ring it next to that Block, defeat the Spawning Boss and then he drops the Decrepit Key. There are Vaults all over the Citadel, they work just like trial chamber vaults/keys. You should get Pyrium from those Vaults
