---
{
  "title": "The Darkin Blade",
  "summary": "A sword from Marium's Soulslike Weaponry, part of the Bladesworn Battallion quest chapter.",
  "infobox": {
    "item": "soulsweapons:darkin_blade",
    "rows": [
      ["Type", "Sword"],
      ["Handling", "One Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "11"],
      ["Attack speed", "1.30"],
      ["Durability", "1,984"]
    ]
  },
  "items": ["soulsweapons:darkin_blade"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type ba_tweaks:greatsword, from paxi:soulrend_ef_capabilities)
  soulsweapons jar: DarkinBlade class, lang tooltip.soulsweapons.sword_leap.*, omnivamp.*
  config/soulsweapons/soulsweapons.json (darkin_blade_ability_damage 12, ability_cooldown 150)
-->

**The Darkin Blade** is a sword from Marium's Soulslike Weaponry. It is weapon 46 of 50 in [[items/weapons/bladesworn-battallion|Bladesworn Battallion]], a Pursuit of Mastery quest chapter.

## Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/the-decaying-king\|The Decaying King]] (drop) | 100% | 1 |

It can also be crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 11 |
| Attack Speed | 1.30 |
| Impact | 2.5 |
| Targets per swing | 5 |
| Armor Negation | 10% |
| Entity Reach | 3 |
| Durability | 1,984 |
| Enchantability | 8 |
| Fire resistant | Yes |

## Usage

It has two abilities, listed in the tooltip under Left Alt:

- **Sword Decimation:** using it makes the wielder leap and gives them Calculated Fall, which protects the landing and triggers a Meteor Strike (12 ability damage in Soulrend). Not fully charging the leap causes a weak explosion instead. Cooldown 7.5 s.
- **Omnivamp:** attacks and abilities heal the wielder while the item is not on cooldown.

## Moveset

In Epic Fight it is a greatsword. Its default One Handed style has a five-hit basic combo and the innate skill Steel Whirlwind.

{{moveset soulsweapons:darkin_blade}}

## Crafting

{{recipes soulsweapons:darkin_blade}}

## Used in

{{uses soulsweapons:darkin_blade}}
