---
{
  "title": "Dread Thrall's Sword",
  "summary": "A sword from Ice and Fire, part of the Bladesworn Battallion quest chapter.",
  "infobox": {
    "item": "iceandfire:dread_sword",
    "rows": [
      ["Type", "Sword"],
      ["Handling", "One Handed"],
      ["Rarity", "Common"],
      ["Attack damage", "5"],
      ["Attack speed", "1.60"],
      ["Durability", "100"]
    ]
  },
  "items": ["iceandfire:dread_sword"]
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

**Dread Thrall's Sword** is a sword from Ice and Fire. It is weapon 4 of 50 in [[items/weapons/bladesworn-battallion|Bladesworn Battallion]], a Pursuit of Mastery quest chapter.

## Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `idas:chests/dread_citadel/dread_citadel` (chest) | 13.5% per roll, 1–2 rolls | 1 |

It can also be crafted (see [[#Crafting]]).

## Stats

The default column is the tooltip value (Epic Fight one-hand style). The two-handed column applies the weapon's two-handed style modifiers instead.

| Stat | Default | Two-handed style |
| --- | --- | --- |
| Attack Damage | 5 | 5 |
| Attack Speed | 1.60 | 1.6 |
| Impact | 1.76 | 1.76 |
| Targets per swing | 2 | 4 |
| Armor Negation | 13% | 13% |
| Entity Reach | 3 | 3 |
| Durability | 100 |  |

## Usage

It has no abilities of its own: its tooltip lists only stats (see [[#Stats]]), and it fights with the Epic Fight moveset below.

## Moveset

In Epic Fight it is a sword. Its default One Handed style has a five-hit basic combo and the innate skill Sweeping Edge. It has one other style, shown below.

{{moveset iceandfire:dread_sword}}

## Crafting

{{recipes iceandfire:dread_sword}}
