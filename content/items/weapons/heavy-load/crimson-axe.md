---
{
  "title": "Crimson Axe",
  "summary": "An axe from dungeons and combat, part of the Heavy Load quest chapter.",
  "infobox": {
    "item": "dungeons_and_combat:crimson_axe",
    "rows": [
      ["Type", "Axe"],
      ["Handling", "One Handed"],
      ["Rarity", "Common"],
      ["Attack damage", "15"],
      ["Attack speed", "0.80"],
      ["Durability", "3,021"]
    ]
  },
  "items": ["dungeons_and_combat:crimson_axe"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type epicfight:axe, from the export)
  dungeons_and_combat jar: CrimsonAxeItem (hurtEnemy), BleedingOnHitProcedure, BleedingOnEffectActiveTickProcedure
-->

**Crimson Axe** is an axe from dungeons and combat. It is weapon 26 of 58 in [[items/weapons/heavy-load|Heavy Load]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 15 |
| Attack Speed | 0.80 |
| Impact | 2.4 |
| Targets per swing | 1 |
| Armor Negation | 40% |
| Entity Reach | 3 |
| Durability | 3,021 |
| Enchantability | 8 |
| Fire resistant | Yes |

## Usage

**Hit effect:** each hit makes the target bleed for 16 s. Bleeding deals 1 damage every 1.5 s and removes Regeneration and Health Boost.

## Moveset

In Epic Fight it is an axe. Its default One Handed style has a five-hit basic combo and the innate skill The Guillotine.

{{moveset dungeons_and_combat:crimson_axe}}

## Crafting

{{recipes dungeons_and_combat:crimson_axe}}

## Used in

{{uses dungeons_and_combat:crimson_axe limit=8}}
