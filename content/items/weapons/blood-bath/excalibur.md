---
{
  "title": "Excalibur",
  "summary": "A greatsword from Marium's Soulslike Weaponry, part of the Blood Bath quest chapter.",
  "infobox": {
    "item": "soulsweapons:excalibur",
    "rows": [
      ["Type", "Greatsword"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "16"],
      ["Attack speed", "1.60"],
      ["Durability", "2,548"]
    ]
  },
  "items": ["soulsweapons:excalibur"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type ba_tweaks:longsword, from paxi:soulrend_ef_capabilities)
  soulsweapons jar: Excalibur class, lang tooltip.soulsweapons.life_guard.*, sonic_boom.*, lightbringer.*
  config/soulsweapons/soulsweapons.json (excalibur_life_guard_percent 0.3, sonic_boom_damage 10, sonic_boom_max_range 40, sonic_boom_target_search_range 16, sonic_boom_cooldown 100, sonic_boom_min_cooldown 40)
-->

**Excalibur** is a greatsword from Marium's Soulslike Weaponry. It is weapon 52 of 61 in [[items/weapons/blood-bath|Blood Bath]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 16 |
| Attack Speed | 1.60 |
| Impact | 1.7 |
| Targets per swing | 4 |
| Entity Reach | 3 |
| Durability | 2,548 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

It has three abilities, listed in the tooltip under Left Alt:

- **Life Guard:** part of the damage the wielder takes (30% in Soulrend) damages the sword instead. When the wielder would take lethal damage while holding it, there is a chance to negate all of it and cause an explosion around them, which costs the sword extra durability.
- **Sonic Boom:** using it fires a Sonic Boom (10 damage) at the last target hit if it is within 40 blocks, otherwise at the nearest entity within 16 blocks. Cooldown 5 s, which enchantments can lower to 2 s.
- **Lightbringer:** while it is held, the wielder is immune to Darkness and Blindness and gets Speed, Night Vision and Strength instead.

## Moveset

In Epic Fight it is a longsword. Its default Two Handed style has a four-hit basic combo and the innate skill Ender Ritual.

{{moveset soulsweapons:excalibur}}

## Crafting

{{recipes soulsweapons:excalibur}}

## Used in

{{uses soulsweapons:excalibur}}
