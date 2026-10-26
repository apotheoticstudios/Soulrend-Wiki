---
{
  "title": "Kraken Slayer Spear Bow",
  "summary": "A bow from Marium's Soulslike Weaponry, part of the Archery Armory (Weapons) quest chapter.",
  "infobox": {
    "item": "soulsweapons:kraken_slayer",
    "rows": [
      ["Type", "Bow"],
      ["Handling", "Ranged"],
      ["Rarity", "Epic"],
      ["Projectile damage", "+21"],
      ["Durability", "1,258"]
    ]
  },
  "items": ["soulsweapons:kraken_slayer"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type epicfight:bow, from jar:soulslike-weaponry-1.4.10-1.20.1-forge.jar)
  soulsweapons jar: KrakenSlayer class (THIRD_SHOT ability), lang tooltip.soulsweapons.third_shot.*
  config/soulsweapons/soulsweapons.json (kraken_slayer_bow_use_animation SPEAR, kraken_slayer_bonus_true_damage 4)
-->

**Kraken Slayer Spear Bow** is a bow from Marium's Soulslike Weaponry. It is weapon 2 of 33 in [[items/weapons/archery-armory|Archery Armory (Weapons)]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Pull Time (s) | 0.5 |
| Projectile Damage | +21 |
| Impact | 1 |
| Targets per swing | 1 |
| Durability | 1,258 |
| Enchantability | 1 |
| Fire resistant | Yes |

## Usage

It is drawn like a spear (overhead) rather than a bow. Its ability, **Bring It Down** (tooltip under Left Alt), builds stacks with every shot. Once enough stacks build up, the next shot deals bonus true damage, which ignores armor: 4 in Soulrend. The bonus true damage is lower against players.

## Moveset

Epic Fight treats it as a ranged weapon, so it has no melee combo.

## Crafting

{{recipes soulsweapons:kraken_slayer}}
