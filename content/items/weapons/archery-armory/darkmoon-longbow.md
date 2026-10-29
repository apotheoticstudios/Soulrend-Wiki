---
{
  "title": "Darkmoon Longbow",
  "summary": "A bow from Marium's Soulslike Weaponry, part of the Archery Armory (Weapons) quest chapter.",
  "infobox": {
    "item": "soulsweapons:darkmoon_longbow",
    "rows": [
      ["Type", "Bow"],
      ["Handling", "Ranged"],
      ["Rarity", "Epic"],
      ["Projectile damage", "+18"]
    ]
  },
  "items": ["soulsweapons:darkmoon_longbow"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type epicfight:bow, from jar:soulslike-weaponry-1.4.10-1.20.1-forge.jar)
  soulsweapons jar: DarkmoonLongbow class (MOONLIGHT_ARROW, ARROW_STORM abilities), lang tooltip.soulsweapons.moonlight_arrow.*, tooltip.soulsweapons.arrow_storm.*
  config/soulsweapons/soulsweapons.json (darkmoon_longbow_ability_damage 13, ability_cooldown_ticks 150, ability_min_cooldown_ticks 60)
-->

**Darkmoon Longbow** is a bow from Marium's Soulslike Weaponry. It is weapon 18 of 35 in [[items/weapons/archery-armory|Archery Armory (Weapons)]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Pull Time (s) | 1.25 |
| Arrow Velocity | +270% |
| Projectile Damage | +18 |
| Impact | 1.25 |
| Targets per swing | 1 |
| Enchantability | 1 |
| Fire resistant | Yes |

## Usage

It has two abilities, listed in the tooltip under Left Alt:

- **Moonlight Quiver:** it fires Moonlight Arrows, which deal only magic damage and pierce through targets.
- **Arrow Storm:** it summons a cloud that rains Moonlight Arrows. In Soulrend the ability deals 13 damage and has a 7.5 s cooldown. Enchantments can lower the cooldown to 3 s.

## Moveset

Epic Fight treats it as a ranged weapon, so it has no melee combo.

## Crafting

{{recipes soulsweapons:darkmoon_longbow}}
