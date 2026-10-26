---
{
  "title": "Blacksmith Hammer",
  "summary": "A hammer from dungeons and combat, part of the Heavy Load quest chapter.",
  "infobox": {
    "item": "dungeons_and_combat:blacksmith_hammer",
    "rows": [
      ["Type", "Hammer"],
      ["Handling", "One Handed"],
      ["Rarity", "Common"],
      ["Attack damage", "6"],
      ["Attack speed", "1.30"],
      ["Durability", "321"]
    ]
  },
  "items": ["dungeons_and_combat:blacksmith_hammer"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type soulrend_weapon_types:hammer, from paxi:soulrend_ef_capabilities)
  dungeons_and_combat jar: BlacksmithHammerItem has no hit or use procedure
-->

**Blacksmith Hammer** is a hammer from dungeons and combat. It is weapon 9 of 56 in [[items/weapons/heavy-load|Heavy Load]], a Pursuit of Mastery quest chapter.

## Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `dungeons_and_combat:chests/blacksmithy` (chest) | 100% | 0–1 |

It can also be crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 6 |
| Attack Speed | 1.30 |
| Impact | 1.5 |
| Targets per swing | 3 |
| Armor Negation | 5% |
| Entity Reach | 3 |
| Durability | 321 |
| Enchantability | 8 |

## Usage

It has no abilities of its own: its tooltip lists only stats (see [[#Stats]]), and it fights with the Epic Fight moveset below.

## Moveset

In Epic Fight it is an axe. Its default One Handed style has a five-hit basic combo and the innate skill Steel Whirlwind.

{{moveset dungeons_and_combat:blacksmith_hammer}}

## Crafting

{{recipes dungeons_and_combat:blacksmith_hammer}}

## Used in

{{uses dungeons_and_combat:blacksmith_hammer}}
