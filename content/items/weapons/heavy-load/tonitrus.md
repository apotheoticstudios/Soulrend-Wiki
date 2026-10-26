---
{
  "title": "Tonitrus",
  "summary": "A hammer from Marium's Soulslike Weaponry, part of the Heavy Load quest chapter.",
  "infobox": {
    "item": "soulsweapons:tonitrus",
    "rows": [
      ["Type", "Hammer"],
      ["Handling", "One Handed"],
      ["Rarity", "Rare"],
      ["Attack damage", "6"],
      ["Attack speed", "1.40"],
      ["Durability", "1,537"]
    ]
  },
  "items": ["soulsweapons:tonitrus"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type soulsweapons:throwable_sword, from jar:soulslike-weaponry-1.4.10-1.20.1-forge.jar)
  soulsweapons jar: Tonitrus class, lang tooltip.soulsweapons.stormveil*, electric_cherry.*
  config/soulsweapons/soulsweapons.json (tonitrus_stormveil_effect_duration 400, tonitrus_ability_cooldown 80)
-->

**Tonitrus** is a hammer from Marium's Soulslike Weaponry. It is weapon 50 of 56 in [[items/weapons/heavy-load|Heavy Load]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 6 |
| Attack Speed | 1.40 |
| Impact | 2.1 |
| Targets per swing | 3 |
| Armor Negation | 10% |
| Entity Reach | 3 |
| Durability | 1,537 |
| Enchantability | 16 |

## Usage

Its abilities, listed in the tooltip under Left Alt:

- **Stormveil:** using it gives the wielder the Stormveil effect for 20 s, making them immune to lightning damage. Using it again with Stormveil makes the next attack strike the target with lightning and removes Stormveil. Cooldown 4 s.
- **Stormveil Surge:** while the wielder has Stormveil, hits set off Chain Lightning from the main target.
- **Electric Cherry:** while the wielder has Stormveil, getting hit has a chance to set off Chain Lightning on the attacker and briefly slow it heavily.

## Moveset

In Epic Fight it is a sword. Its default One Handed style has a three-hit basic combo and the innate skill The Guillotine.

{{moveset soulsweapons:tonitrus}}

## Crafting

{{recipes soulsweapons:tonitrus}}

## Used in

{{uses soulsweapons:tonitrus}}
