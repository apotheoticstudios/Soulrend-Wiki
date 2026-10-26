---
{
  "title": "Broken Sword",
  "summary": "A sword from dungeons and combat, part of the Bladesworn Battallion quest chapter.",
  "infobox": {
    "item": "dungeons_and_combat:broken_sword",
    "rows": [
      ["Type", "Sword"],
      ["Handling", "One Handed"],
      ["Rarity", "Common"],
      ["Attack damage", "5.5"],
      ["Attack speed", "2.60"],
      ["Durability", "210"]
    ]
  },
  "items": ["dungeons_and_combat:broken_sword"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type epicfight:dagger, from paxi:soulrend_ef_capabilities)
  dungeons_and_combat jar: BrokenSwordItem has no hit or use procedure
-->

**Broken Sword** is a sword from dungeons and combat. It is weapon 2 of 49 in [[items/weapons/bladesworn-battallion|Bladesworn Battallion]], a Pursuit of Mastery quest chapter.

## Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `dungeons_and_combat:chests/ernos_cave_loot` (chest) | 100% | 0–1 |

It can also be crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 5.5 |
| Attack Speed | 2.60 |
| Impact | 1.3 |
| Targets per swing | 2 |
| Entity Reach | 3 |
| Durability | 210 |
| Enchantability | 2 |

## Usage

It has no abilities of its own: its tooltip lists only stats (see [[#Stats]]), and it fights with the Epic Fight moveset below.

## Moveset

In Epic Fight it is a dagger. Its default One Handed style has a five-hit basic combo and the innate skill Eviscerate. It has one other style, shown below.

{{moveset dungeons_and_combat:broken_sword}}

## Crafting

{{recipes dungeons_and_combat:broken_sword}}

## Used in

{{uses dungeons_and_combat:broken_sword}}
