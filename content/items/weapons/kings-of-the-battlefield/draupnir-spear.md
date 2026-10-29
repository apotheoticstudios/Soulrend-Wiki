---
{
  "title": "Draupnir Spear",
  "summary": "A spear from Marium's Soulslike Weaponry, part of the Kings of the Battlefield quest chapter.",
  "infobox": {
    "item": "soulsweapons:draupnir_spear",
    "rows": [
      ["Type", "Spear"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "16"],
      ["Attack speed", "1.20"]
    ]
  },
  "items": ["soulsweapons:draupnir_spear"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type cdmoveset:s_spear, from paxi:soulrend_ef_capabilities)
  soulsweapons jar: DraupnirSpear class, lang tooltip.soulsweapons.spear_arsenal.*, draupnirs_call.*, draupnirs_wail.*
  config/soulsweapons/soulsweapons.json (draupnir_spear_projectile_damage 36, max_age 400, throw_cooldown 40, summon_spears_cooldown 300, detonate_power 2, detonate_cooldown 100)
-->

**Draupnir Spear** is a spear from Marium's Soulslike Weaponry. It is weapon 47 of 52 in [[items/weapons/kings-of-the-battlefield|Kings of the Battlefield]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 16 |
| Attack Speed | 1.20 |
| Impact | 1.7 |
| Targets per swing | 4 |
| Armor Negation | 5% |
| Entity Reach | 3 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

Its abilities, listed in the tooltip under Left Alt:

- **Spear Arsenal:** it can be thrown (36 damage in Soulrend), and thrown spears stay in place for 20 s. Cooldown 2 s.
- **Draupnir's Call:** it summons Draupnir Spears from the sky around the wielder. Cooldown 15 s.
- **Draupnir's Wail:** the wielder strikes the ground, damaging nearby mobs, and every Draupnir Spear they summoned explodes (explosion power 2). At power 2 or more, targets hit get Weakness. Cooldown 5 s.

## Moveset

In Epic Fight it is an enhanced spear. Its default Two Handed style has a two-hit basic combo and the innate skill Spear Dance. It has one other style, shown below.

{{moveset soulsweapons:draupnir_spear}}

## Crafting

{{recipes soulsweapons:draupnir_spear}}
