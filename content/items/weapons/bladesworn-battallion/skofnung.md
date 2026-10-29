---
{
  "title": "Skofnung",
  "summary": "A sword from Marium's Soulslike Weaponry, part of the Bladesworn Battallion quest chapter.",
  "infobox": {
    "item": "soulsweapons:skofnung",
    "rows": [
      ["Type", "Sword"],
      ["Handling", "One Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "8"],
      ["Attack speed", "1.70"],
      ["Durability", "1,756"]
    ]
  },
  "items": ["soulsweapons:skofnung"]
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
  soulsweapons jar: Skofnung class, lang tooltip.soulsweapons.disable_heal.*, sharpen.*
  config/soulsweapons/soulsweapons.json (skofnung_stone_additional_empowered_strikes 8, skofnung_empowered_bleed_effect_duration 200)
-->

**Skofnung** is a sword from Marium's Soulslike Weaponry. It is weapon 21 of 50 in [[items/weapons/bladesworn-battallion|Bladesworn Battallion]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 8 |
| Attack Speed | 1.70 |
| Impact | 1.3 |
| Targets per swing | 3 |
| Entity Reach | 3 |
| Durability | 1,756 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

It has two abilities, listed in the tooltip under Left Alt:

- **Thousand Cuts:** hits give the target Cursed Wounds, which stop it from healing while the effect lasts.
- **Supernatural Sharpness:** certain items, such as the Skofnung Stone, sharpen it. Each sharpening adds 8 empowered strikes. While sharpened it gains bonus stats, and its hits cause Bleed (10 s in Soulrend). The tooltip counts the empowered strikes left.

## Moveset

In Epic Fight it is a sword. Its default One Handed style has a five-hit basic combo and the innate skill Enhanced Sweeping Blade. It has two other styles, shown below.

{{moveset soulsweapons:skofnung}}

## Crafting

{{recipes soulsweapons:skofnung}}

## Used in

{{uses soulsweapons:skofnung}}
