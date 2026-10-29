---
{
  "title": "Galeforce",
  "summary": "A bow from Marium's Soulslike Weaponry, part of the Archery Armory (Weapons) quest chapter.",
  "infobox": {
    "item": "soulsweapons:galeforce",
    "rows": [
      ["Type", "Bow"],
      ["Handling", "Ranged"],
      ["Rarity", "Epic"],
      ["Projectile damage", "+2"]
    ]
  },
  "items": ["soulsweapons:galeforce"]
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
  soulsweapons jar: Galeforce class (GALE_ARROWS, CLOUDBURST abilities), lang tooltip.soulsweapons.gale_arrows.*, tooltip.soulsweapons.cloudburst.*
  config/soulsweapons/soulsweapons.json (galeforce_speed_effect_duration_ticks 50, amplifier 4, dash_cooldown 80)
  game-data/items.json (tooltip attributes)
-->

**Galeforce** is a bow from Marium's Soulslike Weaponry. It is weapon 33 of 35 in [[items/weapons/archery-armory|Archery Armory (Weapons)]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Pull Time (s) | 1 |
| Cast Time Reduction | +20% |
| Fire Spell Power | +0.4 |
| Projectile Damage | +2 |
| Impact | 1.1 |
| Targets per swing | 1 |
| Enchantability | 1 |
| Fire resistant | Yes |

## Usage

It has two abilities, listed in the tooltip under Left Alt:

- **Gale Arrows:** firing gives the player Speed V for 2.5 s.
- **Cloudburst:** the player dashes in a direction and fires an arrow at the last enemy they attacked, or straight ahead if there is none. The arrow deals more damage the more health the target is missing. The dash has a 4 s cooldown.

While held it also adds Fire spell power and cast time reduction.

## Moveset

Epic Fight treats it as a ranged weapon, so it has no melee combo.

## Crafting

{{recipes soulsweapons:galeforce}}

## Used in

{{uses soulsweapons:galeforce}}
