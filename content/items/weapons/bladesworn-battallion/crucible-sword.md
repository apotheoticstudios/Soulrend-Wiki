---
{
  "title": "Crucible Sword",
  "summary": "A sword from Marium's Soulslike Weaponry, part of the Bladesworn Battallion quest chapter.",
  "infobox": {
    "item": "soulsweapons:crucible_sword",
    "rows": [
      ["Type", "Sword"],
      ["Handling", "One Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "9"],
      ["Attack speed", "1.70"]
    ]
  },
  "items": ["soulsweapons:crucible_sword"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type ba_tweaks:sword, from paxi:soulrend_ef_capabilities)
  soulsweapons jar: CrucibleSword class (DOOM ability), lang tooltip.soulsweapons.doom.*
  config/soulsweapons/soulsweapons.json (crucible_sword_normal_damage 9, empowered_damage 30, empowered_cooldown 300, empowered_min_cooldown 100, empowered_cooldown_modifier_in_nether 0.4)
-->

**Crucible Sword** is a sword from Marium's Soulslike Weaponry. It is weapon 41 of 50 in [[items/weapons/bladesworn-battallion|Bladesworn Battallion]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 9 |
| Attack Speed | 1.70 |
| Impact | 1.3 |
| Targets per swing | 3 |
| Entity Reach | 3 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

**Raw Hell Energy** (tooltip under Left Alt): its next strike hits much harder. In Soulrend an empowered strike deals 30 damage instead of 9. The empowered strike has a 15 s cooldown, which enchantments can lower to 5 s. In ultra-warm dimensions such as the Nether, the cooldown is 40% as long.

## Moveset

In Epic Fight it is a sword. Its default One Handed style has a five-hit basic combo and the innate skill Enhanced Sweeping Blade. It has two other styles, shown below.

{{moveset soulsweapons:crucible_sword}}

## Crafting

{{recipes soulsweapons:crucible_sword}}
