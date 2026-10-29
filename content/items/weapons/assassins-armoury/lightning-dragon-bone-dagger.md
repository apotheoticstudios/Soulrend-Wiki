---
{
  "title": "Lightning Dragon Bone Dagger",
  "summary": "A dagger from dungeons and combat, part of the Assassin's Armoury quest chapter.",
  "infobox": {
    "item": "dungeons_and_combat:dragon_dagger_lightning",
    "rows": [
      ["Type", "Dagger"],
      ["Handling", "One Handed"],
      ["Rarity", "Common"],
      ["Attack damage", "13"],
      ["Attack speed", "2.50"]
    ]
  },
  "items": ["dungeons_and_combat:dragon_dagger_lightning"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type soulrend_weapon_types:backwards_dagger, from paxi:soulrend_ef_capabilities)
  dungeons_and_combat jar: DragonDaggerLightningItem (hurtEnemy), LightningEdgeProcedure, ConductiveEffectExpiresProcedure
-->

**Lightning Dragon Bone Dagger** is a dagger from dungeons and combat. It is weapon 42 of 50 in [[items/weapons/assassins-armoury|Assassin's Armoury]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 13 |
| Attack Speed | 2.50 |
| Impact | 2.5 |
| Targets per swing | 4 |
| Armor Negation | 3% |
| Entity Reach | 3 |
| Enchantability | 12 |
| Fire resistant | Yes |

## Usage

**Hit effect (Lightning Strike):** a hit gives the target the Conductive effect for 2.25 s, unless it already has it. When Conductive ends, a lightning bolt strikes where the target stands.

## Moveset

In Epic Fight it is a dagger. Its default One Handed style has a five-hit basic combo and the innate skill Tsunami. It has one other style, shown below.

{{moveset dungeons_and_combat:dragon_dagger_lightning}}

## Crafting

{{recipes dungeons_and_combat:dragon_dagger_lightning}}
