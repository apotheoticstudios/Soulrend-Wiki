---
{
  "title": "Bulwark of the Flame",
  "summary": "A shield from cataclysm, part of the Bulwark and Brawl quest chapter.",
  "infobox": {
    "item": "cataclysm:bulwark_of_the_flame",
    "rows": [
      ["Type", "Shield"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"]
    ]
  },
  "items": ["cataclysm:bulwark_of_the_flame"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type epicfight:ignisshield, from paxi:soulrend_ef_capabilities)
  game-data/items.json (tooltip)
  cataclysm jar: lang item.cataclysm.bulwark_of_the_flame*.desc
  config/soulsweapons/soulsweapons.json (enable_shield_parry true, shield_parry_cooldown 40); soulsweapons jar: Parry ability, lang tooltip.soulsweapons.parry*
-->

**Bulwark of the Flame** is a shield from cataclysm. It is weapon 21 of 27 in [[items/weapons/bulwark-and-brawl|Bulwark and Brawl]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Impact | 6.5 |
| Targets per swing | 5 |
| Enchantability | 1 |
| Fire resistant | Yes |

## Usage

It is a shield. Releasing a block while sneaking makes the wielder charge forward, damaging entities in front. A target driven into a wall takes extra damage and is stunned for a moment.

Soulrend's Epic Fight data also gives it attacks of its own (see [[#Moveset]]).

Like every shield in Soulrend, it can also parry (tooltip under Left Alt): with it in the off hand, Soulslike Weaponry's "Parry with shield" key attempts a parry that Posture Breaks an attacker. The parry has a 2 s cooldown.

## Moveset

In Epic Fight it is a shield. Its default Two Handed style has a four-hit basic combo and the innate skill Liechtenauer. It has one other style, shown below.

{{moveset cataclysm:bulwark_of_the_flame}}

## Crafting

{{recipes cataclysm:bulwark_of_the_flame}}
