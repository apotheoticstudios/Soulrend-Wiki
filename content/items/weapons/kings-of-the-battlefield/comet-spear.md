---
{
  "title": "Comet Spear",
  "summary": "A spear from Marium's Soulslike Weaponry, part of the Kings of the Battlefield quest chapter.",
  "infobox": {
    "item": "soulsweapons:comet_spear",
    "rows": [
      ["Type", "Spear"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "8"],
      ["Attack speed", "1.20"]
    ]
  },
  "items": ["soulsweapons:comet_spear"]
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
  soulsweapons jar: CometSpear class, lang tooltip.soulsweapons.throw_comet_spear.*, riptide.*, meteor_strike.*
  config/soulsweapons/soulsweapons.json (comet_spear_projectile_damage 8, skyfall_ability_cooldown 400)
-->

**Comet Spear** is a spear from Marium's Soulslike Weaponry. It is weapon 36 of 52 in [[items/weapons/kings-of-the-battlefield|Kings of the Battlefield]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 8 |
| Attack Speed | 1.20 |
| Impact | 1.7 |
| Targets per swing | 4 |
| Armor Negation | 5% |
| Entity Reach | 3 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

Its abilities, listed in the tooltip under Left Alt:

- **Mortal Will:** using it throws Comet Spears (8 damage in Soulrend), which deal double damage to targets below 20% health.
- **Riptide:** used while sneaking, the wielder launches in the direction they face and gets Calculated Fall, which protects the landing and triggers a Meteor Strike. Cooldown 20 s, but none while it is raining.
- **Meteor Strike:** landing with Calculated Fall cancels fall damage and causes an explosion that grows with the fall distance.

## Moveset

In Epic Fight it is an enhanced spear. Its default Two Handed style has a two-hit basic combo and the innate skill Spear Dance. It has one other style, shown below.

{{moveset soulsweapons:comet_spear}}

## Crafting

{{recipes soulsweapons:comet_spear}}

## Used in

{{uses soulsweapons:comet_spear}}
