---
{
  "title": "Glaive of Hodir",
  "summary": "A glaive from Marium's Soulslike Weaponry, part of the Kings of the Battlefield quest chapter.",
  "infobox": {
    "item": "soulsweapons:glaive_of_hodir",
    "rows": [
      ["Type", "Glaive"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "8"],
      ["Attack speed", "1.60"]
    ]
  },
  "items": ["soulsweapons:glaive_of_hodir"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type ba_tweaks:longsword, from paxi:soulrend_ef_capabilities)
  soulsweapons jar: GlaiveOfHodir class, lang tooltip.soulsweapons.blade_dance.*, ghost_glaive.*
  config/soulsweapons/soulsweapons.json (glaive_of_hodir_max_stacks 5, bonus_damage_per_stack 0.8, bonus_attack_speed_per_stack 0.1, add_effects_cooldown 200, projectile_damage 7, projectile_cooldown 160, projectile_posture_loss 125)
-->

**Glaive of Hodir** is a glaive from Marium's Soulslike Weaponry. It is weapon 41 of 52 in [[items/weapons/kings-of-the-battlefield|Kings of the Battlefield]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 8 |
| Attack Speed | 1.60 |
| Impact | 1.7 |
| Targets per swing | 4 |
| Entity Reach | 3 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

Its abilities, listed in the tooltip under Left Alt:

- **Blade Dance:** attacking builds stacks of Blade Dance (up to 5 in Soulrend), and getting hit removes one. Each stack adds 0.8 damage and 0.1 attack speed. At full stacks, the wielder gets Resistance and Absorption every 10 s while not under the Cooldown effect. Every third attack also sweeps the area.
- **Spectral Glaive:** using it throws a spectral glaive that flies through walls, damaging targets (7 damage) and causing heavy Posture Loss. Cooldown 8 s.

## Moveset

In Epic Fight it is a longsword. Its default Two Handed style has a four-hit basic combo and the innate skill Ender Ritual.

{{moveset soulsweapons:glaive_of_hodir}}

## Crafting

{{recipes soulsweapons:glaive_of_hodir}}
