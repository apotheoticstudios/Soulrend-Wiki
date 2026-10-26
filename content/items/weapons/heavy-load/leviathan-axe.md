---
{
  "title": "Leviathan Axe",
  "summary": "An axe from Marium's Soulslike Weaponry, part of the Heavy Load quest chapter.",
  "infobox": {
    "item": "soulsweapons:leviathan_axe",
    "rows": [
      ["Type", "Axe"],
      ["Handling", "One Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "18"],
      ["Attack speed", "1.20"],
      ["Durability", "1,756"]
    ]
  },
  "items": ["soulsweapons:leviathan_axe"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type ba_tweaks:hammer, from paxi:soulrend_ef_capabilities)
  soulsweapons jar: LeviathanAxe class, lang tooltip.soulsweapons.freeze*, permafrost*, heavy_throw*, returning*
  config/soulsweapons/soulsweapons.json (leviathan_axe_projectile_damage 28)
-->

**Leviathan Axe** is an axe from Marium's Soulslike Weaponry. It is weapon 34 of 56 in [[items/weapons/heavy-load|Heavy Load]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 18 |
| Attack Speed | 1.20 |
| Impact | 1.5 |
| Targets per swing | 3 |
| Armor Negation | 5% |
| Entity Reach | 3 |
| Durability | 1,756 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

Its abilities, listed in the tooltip under Left Alt:

- **Frost Runes:** hits add Frost Buildup and give the target Permafrost.
- **Icicle Explosion:** an enemy with Permafrost explodes when it dies, damaging nearby mobs and spreading Permafrost to them.
- **Heavy Throw:** the axe can be thrown (28 damage in Soulrend), giving Permafrost to every mob it hits.
- **Soulbound:** a key calls the thrown axe back, and it deals damage and effects on the way back too. Walking over it picks it up.

## Moveset

In Epic Fight it is an axe. Its default One Handed style has a five-hit basic combo and the innate skill Steel Whirlwind.

{{moveset soulsweapons:leviathan_axe}}

## Crafting

{{recipes soulsweapons:leviathan_axe}}

## Used in

{{uses soulsweapons:leviathan_axe limit=8}}
