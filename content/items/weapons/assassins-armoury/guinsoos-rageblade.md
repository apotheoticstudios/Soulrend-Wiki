---
{
  "title": "Guinsoo's Rageblade",
  "summary": "A dagger from Marium's Soulslike Weaponry, part of the Assassin's Armoury quest chapter.",
  "infobox": {
    "item": "soulsweapons:rageblade",
    "rows": [
      ["Type", "Dagger"],
      ["Handling", "One Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "9"],
      ["Attack speed", "1.60"]
    ]
  },
  "items": ["soulsweapons:rageblade"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type epicfight:sword, from jar:soulslike-weaponry-1.4.10-1.20.1-forge.jar)
  soulsweapons jar: Rageblade class (FURY, FURY_CAP, SOUL_OF_CINDER abilities), lang tooltip.soulsweapons.fury*, tooltip.soulsweapons.soul_of_cinder.*
  config/soulsweapons/soulsweapons.json (rageblade_haste_cap)
-->

**Guinsoo's Rageblade** is a dagger from Marium's Soulslike Weaponry. It is weapon 35 of 50 in [[items/weapons/assassins-armoury|Assassin's Armoury]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 9 |
| Attack Speed | 1.60 |
| Impact | 1.6 |
| Targets per swing | 3 |
| Armor Negation | 14% |
| Entity Reach | 3 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

It has three abilities, listed in the tooltip under Left Alt:

- **Fury:** each hit gives a little more of a buff, building up the longer the wielder keeps hitting.
- **You're Mine:** the item's level raises the cap of that buff.
- **My Only Chance:** while on fire, the wielder gets the Soul of Cinder effect, which raises damage.

<!-- TODO: Fury's %s is filled in by code (the config has rageblade_haste_cap, so it is likely Haste); confirm in game. -->

## Moveset

In Epic Fight it is a sword. Its default One Handed style has a five-hit basic combo and the innate skill Sweeping Edge. It has one other style, shown below.

{{moveset soulsweapons:rageblade}}

## Crafting

{{recipes soulsweapons:rageblade}}
