---
{
  "title": "Dragonslayer Swordspear",
  "summary": "A spear from Marium's Soulslike Weaponry, part of the Kings of the Battlefield quest chapter.",
  "infobox": {
    "item": "soulsweapons:dragonslayer_swordspear",
    "rows": [
      ["Type", "Spear"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "16"],
      ["Attack speed", "1.30"],
      ["Durability", "1,756"]
    ]
  },
  "items": ["soulsweapons:dragonslayer_swordspear"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type cdmoveset:s_spear, from paxi:soulrend_ef_capabilities)
  soulsweapons jar: DragonslayerSwordspear class, lang tooltip.soulsweapons.throw_dragonslayer_swordspear.*, lightning_call.*, storm_stomp.*, weatherborn.*, dragons_bane.*
  config/soulsweapons/soulsweapons.json (dragonslayer_swordspear_projectile_damage 14, throw_cooldown 100, ability_damage 20, ability_cooldown 300, rain_bonus_damage 1, dragons_scourge_bonus 3)
-->

**Dragonslayer Swordspear** is a spear from Marium's Soulslike Weaponry. It is weapon 46 of 52 in [[items/weapons/kings-of-the-battlefield|Kings of the Battlefield]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 16 |
| Attack Speed | 1.30 |
| Impact | 1.7 |
| Targets per swing | 4 |
| Armor Negation | 5% |
| Entity Reach | 3 |
| Durability | 1,756 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

Its abilities, listed in the tooltip under Left Alt:

- **Falling Bolt:** it can be thrown at enemies (14 damage in Soulrend), calling lightning on them if the sky is clear. Cooldown 5 s.
- **Lightning Call:** it calls lightning on all nearby mobs (20 damage). Cooldown 15 s.
- **Storm Stomp:** it knocks away targets the lightning didn't hit.
- **Weatherborn:** it is empowered while it rains (+1 damage).
- **Dragon's Scourge:** it deals 3 more damage to dragons.

Enchantments can shorten its cooldowns.

## Moveset

In Epic Fight it is an enhanced spear. Its default Two Handed style has a two-hit basic combo and the innate skill Spear Dance. It has one other style, shown below.

{{moveset soulsweapons:dragonslayer_swordspear}}

## Crafting

{{recipes soulsweapons:dragonslayer_swordspear}}
