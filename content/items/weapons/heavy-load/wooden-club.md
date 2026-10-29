---
{
  "title": "Wooden Club",
  "summary": "A hammer from dungeons and combat, part of the Heavy Load quest chapter.",
  "infobox": {
    "item": "dungeons_and_combat:wooden_mace",
    "rows": [
      ["Type", "Hammer"],
      ["Handling", "One Handed"],
      ["Rarity", "Common"],
      ["Attack damage", "4.5"],
      ["Attack speed", "1.40"]
    ]
  },
  "items": ["dungeons_and_combat:wooden_mace"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type epicfight:sword, from the export)
  dungeons_and_combat jar: WoodenMaceItem has no hit or use procedure
-->

**Wooden Club** is a hammer from dungeons and combat. It is weapon 3 of 58 in [[items/weapons/heavy-load|Heavy Load]], a Pursuit of Mastery quest chapter.

## Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `dungeons_and_combat:chests/ernos_cave_loot` (chest) | 100% | 0–1 |

It can also be crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 4.5 |
| Attack Speed | 1.40 |
| Targets per swing | 1 |
| Entity Reach | 3 |
| Enchantability | 2 |

## Usage

It has no abilities of its own: its tooltip lists only stats (see [[#Stats]]), and it fights with the Epic Fight moveset below.

## Moveset

In Epic Fight it is a sword. Its default One Handed style has a five-hit basic combo and the innate skill Sweeping Edge. It has one other style, shown below.

{{moveset dungeons_and_combat:wooden_mace}}

## Crafting

{{recipes dungeons_and_combat:wooden_mace}}

## Used in

{{uses dungeons_and_combat:wooden_mace}}
