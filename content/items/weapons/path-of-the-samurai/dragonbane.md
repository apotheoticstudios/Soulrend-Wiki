---
{
  "title": "Dragonbane",
  "summary": "A katana from Marium's Soulslike Weaponry, part of the Path of the Samurai quest chapter.",
  "infobox": {
    "item": "soulsweapons:dragonbane",
    "rows": [
      ["Type", "Katana"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "9"],
      ["Attack speed", "1.60"],
      ["Durability", "1,756"]
    ]
  },
  "items": ["soulsweapons:dragonbane"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type epicfight:uchigatana, from jar:soulslike-weaponry-1.4.10-1.20.1-forge.jar)
  soulsweapons jar: Dragonbane class, lang tooltip.soulsweapons.chain_lightning.*, dragons_bane.*
  config/soulsweapons/soulsweapons.json (dragonbane_dragons_scourge_bonus 20, chain_lightning_damage_per_level 6)
-->

**Dragonbane** is a katana from Marium's Soulslike Weaponry. It is weapon 23 of 42 in [[items/weapons/path-of-the-samurai|Path of the Samurai]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 9 |
| Attack Speed | 1.60 |
| Impact | 1.9 |
| Targets per swing | 2 |
| Armor Negation | 16% |
| Entity Reach | 3 |
| Durability | 1,756 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

It has two abilities, listed in the tooltip under Left Alt:

- **Chain Lightning:** hits damage mobs near the main target with soul-infused lightning, more with higher enchantment levels.
- **Dragon's Scourge:** it deals 20 more damage to dragons in Soulrend.

## Moveset

In Epic Fight it is an uchigatana. Its default Two Handed style has a five-hit basic combo and the innate skill Battojutsu. It has one other style, shown below. It also has a passive skill.

{{moveset soulsweapons:dragonbane}}

## Crafting

{{recipes soulsweapons:dragonbane}}
