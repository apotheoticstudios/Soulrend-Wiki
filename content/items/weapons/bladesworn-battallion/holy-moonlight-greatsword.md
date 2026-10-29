---
{
  "title": "Holy Moonlight Greatsword",
  "summary": "A sword from Marium's Soulslike Weaponry, part of the Bladesworn Battallion quest chapter.",
  "infobox": {
    "item": "soulsweapons:holy_moonlight_greatsword",
    "rows": [
      ["Type", "Sword"],
      ["Handling", "One Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "10"],
      ["Attack speed", "1.30"]
    ]
  },
  "items": ["soulsweapons:holy_moonlight_greatsword"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type ba_tweaks:greatsword, from paxi:soulrend_ef_capabilities)
  soulsweapons jar: HolyMoonlightGreatsword class, lang tooltip.soulsweapons.moonfall.*, righteous.*, lunar_essence.*, need_essence.*
  config/soulsweapons/soulsweapons.json (holy_moonlight_greatsword_righteous_undead_bonus_damage 2, charge_added_post_hit 3)
-->

**Holy Moonlight Greatsword** is a sword from Marium's Soulslike Weaponry. It is weapon 20 of 50 in [[items/weapons/bladesworn-battallion|Bladesworn Battallion]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 10 |
| Attack Speed | 1.30 |
| Impact | 2.5 |
| Targets per swing | 5 |
| Armor Negation | 10% |
| Entity Reach | 3 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

Its abilities, listed in the tooltip under Left Alt:

- **Moonfall:** charge the weapon and smash the ground, sending ruptures down the aimed path.
- **Righteous:** it deals extra damage to undead (2 in Soulrend), more at higher upgrade levels.
- **Lunar Essence:** each hit gives 3 Essence.
- **Sealed Potential:** Moonfall needs Essence and uses it all up. The **Lunar Herald** effect removes the need.

## Moveset

In Epic Fight it is a greatsword. Its default One Handed style has a five-hit basic combo and the innate skill Steel Whirlwind.

{{moveset soulsweapons:holy_moonlight_greatsword}}

## Crafting

{{recipes soulsweapons:holy_moonlight_greatsword}}

## Used in

{{uses soulsweapons:holy_moonlight_greatsword}}
