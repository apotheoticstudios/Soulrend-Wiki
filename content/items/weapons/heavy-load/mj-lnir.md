---
{
  "title": "Mjölnir",
  "summary": "A hammer from Marium's Soulslike Weaponry, part of the Heavy Load quest chapter.",
  "infobox": {
    "item": "soulsweapons:mjolnir",
    "rows": [
      ["Type", "Hammer"],
      ["Handling", "One Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "18"],
      ["Attack speed", "1.20"]
    ]
  },
  "items": ["soulsweapons:mjolnir"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type soulsweapons:throwable_sword, from jar:soulslike-weaponry-1.4.10-1.20.1-forge.jar)
  soulsweapons jar: Mjolnir class, lang tooltip.soulsweapons.mjolnir_lightning_call*, riptide*, mjolnir_throw*, weatherborn*
  config/soulsweapons/soulsweapons.json (mjolnir_smash_damage 20, lightning_smash_cooldown 200, riptide_cooldown 300, projectile_damage 26, rain_bonus_damage 5)
-->

**Mjölnir** is a hammer from Marium's Soulslike Weaponry. It is weapon 57 of 58 in [[items/weapons/heavy-load|Heavy Load]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 18 |
| Attack Speed | 1.20 |
| Impact | 2.1 |
| Targets per swing | 3 |
| Armor Negation | 10% |
| Entity Reach | 3 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

Its abilities, listed in the tooltip under Left Alt:

- **Lightning Call:** the wielder smashes the ground and calls lightning that spreads outward (20 smash damage in Soulrend, 10 s cooldown).
- **Riptide:** used while sneaking, the wielder launches in the direction they face and gets Calculated Fall, which protects the landing and triggers a Meteor Strike. It has a 15 s cooldown, but none while it is raining.
- **Divine Instrument:** the hammer can be thrown at enemies (26 damage), calling lightning on them if the sky is clear.
- **Weatherborn:** it is empowered while it rains (+5 damage).

## Moveset

In Epic Fight it is a sword. Its default One Handed style has a three-hit basic combo and the innate skill The Guillotine.

{{moveset soulsweapons:mjolnir}}

## Crafting

{{recipes soulsweapons:mjolnir}}
