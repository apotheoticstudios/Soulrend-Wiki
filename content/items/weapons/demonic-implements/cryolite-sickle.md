---
{
  "title": "Cryolite Sickle",
  "summary": "A sickle from dungeons and combat, part of the Demonic Implements quest chapter.",
  "infobox": {
    "item": "dungeons_and_combat:cryolite_sickle",
    "rows": [
      ["Type", "Sickle"],
      ["Handling", "One Handed"],
      ["Rarity", "Common"],
      ["Attack damage", "8.5"],
      ["Attack speed", "2.50"]
    ]
  },
  "items": ["dungeons_and_combat:cryolite_sickle"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type epicfight:dagger, from jar:dungeons_and_combat-1.2.4-forge-1.20.1.jar)
  game-data/items.json (tooltip)
  dungeons_and_combat jar: CryoliteSickleItem (tooltip only)
-->

**Cryolite Sickle** is a sickle from dungeons and combat. It is weapon 2 of 27 in [[items/weapons/demonic-implements|Demonic Implements]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

The default column is the tooltip value (Epic Fight one-hand style). The two-handed column applies the weapon's two-handed style modifiers instead.

| Stat | Default | Two-handed style |
| --- | --- | --- |
| Attack Damage | 8.5 | 8.5 |
| Attack Speed | 2.50 | 2.5 |
| Impact | 1.3 | 1.3 |
| Targets per swing | 1 | 2 |
| Armor Negation | 10% | 10% |
| Entity Reach | 3 | 3 |
| Enchantability | 24 |  |
| Fire resistant | Yes |  |

## Usage

Its tooltip lists **Freezing** as a hit effect, but the item itself has no hit procedure; the effect is handled elsewhere in the mod.

<!-- TODO: find where Dungeons and Combat applies Freezing for cryolite weapons. -->

## Moveset

In Epic Fight it is a dagger. Its default One Handed style has a five-hit basic combo and the innate skill Eviscerate. It has one other style, shown below.

{{moveset dungeons_and_combat:cryolite_sickle}}

## Crafting

{{recipes dungeons_and_combat:cryolite_sickle}}

## Used in

{{uses dungeons_and_combat:cryolite_sickle}}
