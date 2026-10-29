---
{
  "title": "Frostmourne",
  "summary": "A sword from Marium's Soulslike Weaponry, part of the Bladesworn Battallion quest chapter.",
  "infobox": {
    "item": "soulsweapons:frostmourne",
    "rows": [
      ["Type", "Sword"],
      ["Handling", "One Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "11"],
      ["Attack speed", "1.70"],
      ["Durability", "1,756"]
    ]
  },
  "items": ["soulsweapons:frostmourne"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type ba_tweaks:sword, from paxi:soulrend_ef_capabilities)
  soulsweapons jar: Frostmourne class, lang tooltip.soulsweapons.freeze*, permafrost*, soul_release.*
  config/soulsweapons/soulsweapons.json (frostmourne_summoned_allies_cap 50)
-->

**Frostmourne** is a sword from Marium's Soulslike Weaponry. It is weapon 38 of 50 in [[items/weapons/bladesworn-battallion|Bladesworn Battallion]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 11 |
| Attack Speed | 1.70 |
| Impact | 1.3 |
| Targets per swing | 3 |
| Entity Reach | 3 |
| Durability | 1,756 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

Its abilities, listed in the tooltip under Left Alt:

- **Frost Runes:** hits add Frost Buildup and give the target Permafrost.
- **Icicle Explosion:** an enemy with Permafrost explodes when it dies, damaging nearby mobs and spreading Permafrost to them.
- **Soul Release:** using it summons a familiar whose strength depends on the souls the sword has harvested. Soulrend caps summoned allies at 50.

## Moveset

In Epic Fight it is a sword. Its default One Handed style has a five-hit basic combo and the innate skill Enhanced Sweeping Blade. It has two other styles, shown below.

{{moveset soulsweapons:frostmourne}}

## Crafting

{{recipes soulsweapons:frostmourne}}

## Used in

{{uses soulsweapons:frostmourne}}
