---
{
  "title": "Origins",
  "navTitle": "Overview",
  "category": "Origins",
  "order": 0,
  "summary": "The race and class every character picks at the start: what each layer does and how the picker works."
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_origins_classes/data/origins/origin_layers/origin.json and rpg_class.json (layers, class conditions, auto_choose, allow_random)
  mods/medievalorigins-forge-1.20.1-6.7.9.jar data/origins/origin_layers/origin.json (Medieval Origins races)
  config/origins_server.json (enabled origins and powers)
  config/soulrend_core/common.toml classCategories (selector tabs)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (names)
  config/paxi/datapacks/soulrend_origins_classes/data/classes/origins/*.json and config/paxi/datapacks/soulrend_reforged/data/classes/origins/*.json (impact values)
-->
Every Soulrend character has an **origin** made of two choices, picked on the first join: a **race** and a **class**. Both come from the Origins mod and its add-ons (Medieval Origins and Soulrend's own packs). Each gives a set of permanent **powers**: stat bonuses, abilities on keys, and sometimes drawbacks.

## The two layers

| Layer | What it gives | Choices |
| --- | --- | --- |
| [[origins/races\|Race]] | The body: size, health, movement, diet and innate abilities. | 19 |
| Class | Combat training: damage or spell power bonuses and a starting kit. | 26, in four tabs |

The class picker groups classes into tabs: [[origins/melee-classes|Melee]], [[origins/ranged-classes|Ranged]], [[origins/mage-classes|Mage]] and [[origins/fusion-classes|Fusion]]. Blade Dancer and Wildheart appear under **Other**, and are described with the melee classes here.

Two races limit the class choice:

- A [[origins/races/faded|Faded]] can only pick a mage class.
- A [[origins/races/feral-beast|Feral Beast]] always gets [[origins/melee-classes/wildheart|Wildheart]].

Each origin has an **impact** rating shown in the picker (none, low, medium or high), which marks how much it changes normal play.

## Ability keys

Many powers are used with a key: Origins' **Primary Active** and **Secondary Active** keys, and Medieval Origins' **Tertiary Active** key. Set them in the Controls menu. Each power's page says which key it uses and its cooldown.

## Things to know

- **No weapon penalties.** The in-game text of several classes mentions "No Mastery" penalties for other weapons. Those powers aren't part of any class in Soulrend: every class can use every weapon, and only its own bonus is limited to certain weapons. [[origins/melee-classes/wildheart|Wildheart]] is the exception.
- **Starting kits** are given once, when the class is chosen. Most starting weapons and spellbooks are Soulbound (kept on death).
- **Some in-game descriptions are out of date.** Where the text and the powers disagree, these pages follow the powers; see [[bugs#Origin descriptions don't match their powers|Known Bugs]].
- **Skill trees aren't tied to classes.** Any character can spend points in any [[skill-trees|skill tree]].

## In this section

- [[origins/races|Races]]: the race layer.
- [[origins/melee-classes|Melee Classes]]: martial classes.
- [[origins/ranged-classes|Ranged Classes]]: the Hunter.
- [[origins/mage-classes|Mage Classes]]: the twelve school mages.
- [[origins/fusion-classes|Fusion Classes]]: hybrid martial and magic classes.
