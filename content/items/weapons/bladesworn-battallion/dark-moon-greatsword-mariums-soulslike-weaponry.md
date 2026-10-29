---
{
  "title": "Dark Moon Greatsword (Marium's Soulslike Weaponry)",
  "summary": "A sword from Marium's Soulslike Weaponry, part of the Bladesworn Battallion quest chapter.",
  "infobox": {
    "item": "soulsweapons:dark_moon_greatsword",
    "rows": [
      ["Type", "Sword"],
      ["Handling", "One Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "18"],
      ["Attack speed", "1.30"],
      ["Durability", "1,756"]
    ]
  },
  "items": ["soulsweapons:dark_moon_greatsword"]
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
  soulsweapons jar: DarkMoonGreatsword class, lang tooltip.soulsweapons.frost_moon*, freeze*, permafrost*
  config/soulsweapons/soulsweapons.json (dark_moon_greatsword_frost_moon_base_duration 400, frost_moon_cooldown 700, frost_moon_min_cooldown 300, post_hit_permafrost_base_duration 80)
-->

**Dark Moon Greatsword (Marium's Soulslike Weaponry)** is a sword from Marium's Soulslike Weaponry. It is weapon 45 of 50 in [[items/weapons/bladesworn-battallion|Bladesworn Battallion]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 18 |
| Attack Speed | 1.30 |
| Impact | 2.5 |
| Targets per swing | 5 |
| Armor Negation | 10% |
| Entity Reach | 3 |
| Durability | 1,756 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

Its abilities, listed in the tooltip under Left Alt:

- **Frost Moon:** the ability key gives the wielder the Frost Moon effect for 20 s, making them immune to freezing and powder snow. Cooldown 35 s, which enchantments can lower to 15 s.
- **Frostbound:** its other abilities only work while the wielder has Frost Moon.
- **Frost Runes:** hits add Frost Buildup and give the target Permafrost for 4 s.
- **Icicle Explosion:** an enemy with Permafrost explodes when it dies, damaging nearby mobs and spreading Permafrost to them.

## Moveset

In Epic Fight it is a greatsword. Its default One Handed style has a five-hit basic combo and the innate skill Steel Whirlwind.

{{moveset soulsweapons:dark_moon_greatsword}}

## Crafting

{{recipes soulsweapons:dark_moon_greatsword}}
