---
{
  "title": "Decrepit Scythe",
  "summary": "A scythe from Iron's Spells 'n Spellbooks, part of the Demonic Implements quest chapter.",
  "infobox": {
    "item": "irons_spellbooks:decrepit_scythe",
    "rows": [
      ["Type", "Scythe"],
      ["Handling", "Two Handed"],
      ["Rarity", "Uncommon"],
      ["Attack damage", "11"],
      ["Attack speed", "1.40"],
      ["Durability", "1,000"]
    ]
  },
  "items": ["irons_spellbooks:decrepit_scythe"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type soulsweapons:scythe, from paxi:soulrend_ef_capabilities)
-->

**Decrepit Scythe** is a scythe from Iron's Spells 'n Spellbooks. It is weapon 13 of 27 in [[items/weapons/demonic-implements|Demonic Implements]], a Pursuit of Mastery quest chapter.

## Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:entities/fire_boss` (mob drop) | 27.5% (player kill, +5% per Looting level) | 1 |

It can also be crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 11 |
| Attack Speed | 1.40 |
| Targets per swing | 1 |
| Entity Reach | 3 |
| Durability | 1,000 |
| Enchantability | 4 |
| Fire resistant | Yes |

## Usage

It has no abilities of its own: its tooltip lists only stats (see [[#Stats]]), and it fights with the Epic Fight moveset below.

## Moveset

In Epic Fight it is a spear. Its default Two Handed style has a two-hit basic combo and the innate skill Sweeping Edge.

{{moveset irons_spellbooks:decrepit_scythe}}

## Crafting

{{recipes irons_spellbooks:decrepit_scythe}}

## Used in

{{uses irons_spellbooks:decrepit_scythe}}
