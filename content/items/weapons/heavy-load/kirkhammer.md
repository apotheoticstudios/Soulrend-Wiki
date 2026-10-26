---
{
  "title": "Kirkhammer",
  "summary": "A hammer from Marium's Soulslike Weaponry, part of the Heavy Load quest chapter.",
  "infobox": {
    "item": "soulsweapons:kirkhammer",
    "rows": [
      ["Type", "Hammer"],
      ["Handling", "One Handed"],
      ["Rarity", "Rare"],
      ["Attack damage", "9"],
      ["Attack speed", "1.30"],
      ["Durability", "1,537"]
    ]
  },
  "items": ["soulsweapons:kirkhammer"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type ba_tweaks:greatsword, from paxi:soulrend_ef_capabilities)
  soulsweapons jar: Kirkhammer class, lang tooltip.soulsweapons.heavy_weapon.*, meteor_strike.*
  config/soulsweapons/soulsweapons.json (kirkhammer_posture_loss 40)
-->

**Kirkhammer** is a hammer from Marium's Soulslike Weaponry. It is weapon 38 of 56 in [[items/weapons/heavy-load|Heavy Load]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 9 |
| Attack Speed | 1.30 |
| Impact | 2.5 |
| Targets per swing | 5 |
| Armor Negation | 10% |
| Entity Reach | 3 |
| Durability | 1,537 |
| Enchantability | 16 |

## Usage

It has two abilities, listed in the tooltip under Left Alt:

- **Ultra Heavy:** hits give the wielder Haste while they have Strength, cause Posture Loss (40 in Soulrend), and disable shields.
- **Meteor Strike:** landing with Calculated Fall cancels fall damage and causes an explosion that grows with the fall distance.

## Moveset

In Epic Fight it is a greatsword. Its default One Handed style has a five-hit basic combo and the innate skill Steel Whirlwind.

{{moveset soulsweapons:kirkhammer}}

## Crafting

{{recipes soulsweapons:kirkhammer}}
