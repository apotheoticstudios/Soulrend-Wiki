---
{
  "title": "Lich Bane",
  "summary": "A dagger from Marium's Soulslike Weaponry, part of the Assassin's Armoury quest chapter.",
  "infobox": {
    "item": "soulsweapons:lich_bane",
    "rows": [
      ["Type", "Dagger"],
      ["Handling", "One Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "7"],
      ["Attack speed", "1.70"],
      ["Durability", "1,756"]
    ]
  },
  "items": ["soulsweapons:lich_bane"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type ba_tweaks:sword, from paxi:soulrend_ef_capabilities)
  soulsweapons jar: LichBane class (BLAZING_BLADE, BONUS_MAGIC_DAMAGE, APPLY_ECHO_EFFECT abilities), lang tooltip.soulsweapons.blazing_blade.*, spellblade.*, echo.*
  config/soulsweapons/soulsweapons.json (lich_bane_bonus_magic_damage 2)
-->

**Lich Bane** is a dagger from Marium's Soulslike Weaponry. It is weapon 36 of 50 in [[items/weapons/assassins-armoury|Assassin's Armoury]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 7 |
| Attack Speed | 1.70 |
| Impact | 1.3 |
| Targets per swing | 3 |
| Entity Reach | 3 |
| Durability | 1,756 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

It has three abilities, listed in the tooltip under Left Alt:

- **Blazing Blade:** it sets mobs on fire for longer, more so with higher Fire Aspect.
- **Spellblade:** each hit deals extra magic damage that goes through armor (2 in Soulrend), reduced against players.
- **Resonance:** hits apply the Echo effect, which saves up damage the target takes and deals it back when the effect ends.

## Moveset

In Epic Fight it is a sword. Its default One Handed style has a five-hit basic combo and the innate skill Enhanced Sweeping Blade. It has two other styles, shown below.

{{moveset soulsweapons:lich_bane}}

## Crafting

{{recipes soulsweapons:lich_bane}}
