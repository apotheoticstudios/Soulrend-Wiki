---
{
  "title": "Moonveil",
  "summary": "A katana from Marium's Soulslike Weaponry, part of the Path of the Samurai quest chapter.",
  "infobox": {
    "item": "soulsweapons:moonveil",
    "rows": [
      ["Type", "Katana"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "9"],
      ["Attack speed", "1.70"],
      ["Durability", "1,756"]
    ]
  },
  "items": ["soulsweapons:moonveil"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type cdmoveset:katana, from paxi:soulrend_ef_capabilities)
  soulsweapons jar: Moonveil class, lang tooltip.soulsweapons.bleed.*, transient_moonlight.*
  config/soulsweapons/soulsweapons.json (moonveil_bleed_post_hit 25, wave_damage 8, vertical_damage 12, ability_cooldown 30)
-->

**Moonveil** is a katana from Marium's Soulslike Weaponry. It is weapon 10 of 42 in [[items/weapons/path-of-the-samurai|Path of the Samurai]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 9 |
| Attack Speed | 1.70 |
| Impact | 1.5 |
| Targets per swing | 3 |
| Entity Reach | 3 |
| Durability | 1,756 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

It has two abilities, listed in the tooltip under Left Alt:

- **Bleed:** hits build up bleed (25 per hit in Soulrend). At full buildup the target suffers Blood Loss and takes heavy damage. The Bloodthirsty effect raises the buildup.
- **Transient Moonlight:** using it releases a wide moonlight wave that passes through blocks and damages mobs in its path (8 damage). Used while sneaking, it fires a vertical wave instead (12 damage). Cooldown 1.5 s.

## Moveset

In Epic Fight it is a katana. Its default Two Handed style has a three-hit basic combo and the innate skill Critical Strike. It has one other style, shown below. It also has a passive skill.

{{moveset soulsweapons:moonveil}}

## Crafting

{{recipes soulsweapons:moonveil}}

## Used in

{{uses soulsweapons:moonveil}}
