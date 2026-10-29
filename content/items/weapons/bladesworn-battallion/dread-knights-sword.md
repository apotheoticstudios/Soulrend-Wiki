---
{
  "title": "Dread Knight's Sword",
  "summary": "A sword from Ice and Fire, part of the Bladesworn Battallion quest chapter.",
  "infobox": {
    "item": "iceandfire:dread_knight_sword",
    "rows": [
      ["Type", "Sword"],
      ["Handling", "One Handed"],
      ["Rarity", "Common"],
      ["Attack damage", "17"],
      ["Attack speed", "1.60"],
      ["Durability", "1,200"]
    ]
  },
  "items": ["iceandfire:dread_knight_sword"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type epicfight:sword, from paxi:soulrend_ef_capabilities)
-->

**Dread Knight's Sword** is a sword from Ice and Fire. It is weapon 44 of 50 in [[items/weapons/bladesworn-battallion|Bladesworn Battallion]], a Pursuit of Mastery quest chapter.

## Obtaining

2 loot tables drop it:

| Source | Chance | Count |
| --- | --- | --- |
| `idas:chests/dread_citadel/dread_citadel_throne` (chest) | 3.13% per roll, 1–2 rolls | 1 |
| `idas:chests/dread_citadel/dread_citadel` (chest) | 2.7% per roll, 1–2 rolls | 1 |

It can also be crafted (see [[#Crafting]]).

## Stats

The default column is the tooltip value (Epic Fight one-hand style). The two-handed column applies the weapon's two-handed style modifiers instead.

| Stat | Default | Two-handed style |
| --- | --- | --- |
| Attack Damage | 17 | 17 |
| Attack Speed | 1.60 | 1.6 |
| Impact | 2.8 | 2.8 |
| Targets per swing | 3 | 5 |
| Armor Negation | 90% | 90% |
| Entity Reach | 3 | 3 |
| Durability | 1,200 |  |
| Enchantability | 10 |  |

## Usage

It has no abilities of its own: its tooltip lists only stats (see [[#Stats]]), and it fights with the Epic Fight moveset below.

## Moveset

In Epic Fight it is a sword. Its default One Handed style has a five-hit basic combo and the innate skill Sweeping Edge. It has one other style, shown below.

{{moveset iceandfire:dread_knight_sword}}

## Crafting

{{recipes iceandfire:dread_knight_sword}}
