---
{
  "title": "Igenous Molten Shield",
  "summary": "A shield from dungeons and combat, part of the Bulwark and Brawl quest chapter.",
  "infobox": {
    "item": "dungeons_and_combat:igenous_molten_shield",
    "rows": [
      ["Type", "Shield"],
      ["Handling", "One Handed"],
      ["Rarity", "Common"]
    ]
  },
  "items": ["dungeons_and_combat:igenous_molten_shield"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type epicfight:shield, from the export)
  game-data/items.json (tooltip)
  dungeons_and_combat jar: IgenousMoltenShieldItem (inventoryTick), IgenousMoltenShieldToolInHandTickProcedure
  config/soulsweapons/soulsweapons.json (enable_shield_parry true, shield_parry_cooldown 40); soulsweapons jar: Parry ability, lang tooltip.soulsweapons.parry*
-->

**Igenous Molten Shield** is a shield from dungeons and combat. It is weapon 12 of 27 in [[items/weapons/bulwark-and-brawl|Bulwark and Brawl]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Targets per swing | 1 |
| Enchantability | 1 |
| Fire resistant | Yes |

## Usage

While it is held, the wielder has Resistance I and Slowness I. The tooltip lists Resistance as its blocking effect.

Like every shield in Soulrend, it can also parry (tooltip under Left Alt): with it in the off hand, Soulslike Weaponry's "Parry with shield" key attempts a parry that Posture Breaks an attacker. The parry has a 2 s cooldown.

## Moveset

In Epic Fight it is a shield with no attack combo of its own.

{{moveset dungeons_and_combat:igenous_molten_shield}}

## Crafting

{{recipes dungeons_and_combat:igenous_molten_shield}}

## Used in

{{uses dungeons_and_combat:igenous_molten_shield}}
