---
{
  "title": "Ceremonial Dagger",
  "summary": "A dagger from dungeons and combat, part of the Assassin's Armoury quest chapter.",
  "infobox": {
    "item": "dungeons_and_combat:ceremonial_dagger",
    "rows": [
      ["Type", "Dagger"],
      ["Handling", "One Handed"],
      ["Rarity", "Common"],
      ["Attack damage", "14"],
      ["Attack speed", "2.40"]
    ]
  },
  "items": ["dungeons_and_combat:ceremonial_dagger"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type epicfight:dagger, from paxi:soulrend_ef_capabilities)
  dungeons_and_combat jar: CeremonialDaggerItem (hurtEnemy, use), CeremonialDaggerLivingEntityIsHitWithToolProcedure, BloodOathAbilityProcedure, BleedingOnEffectActiveTickProcedure
-->

**Ceremonial Dagger** is a dagger from dungeons and combat. It is weapon 31 of 50 in [[items/weapons/assassins-armoury|Assassin's Armoury]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 14 |
| Attack Speed | 2.40 |
| Impact | 1.3 |
| Targets per swing | 2 |
| Armor Negation | 25% |
| Entity Reach | 3 |
| Enchantability | 8 |

## Usage

- **Hit effect:** each hit gives the wielder Regeneration I for 4 s.
- **Blood Oath** (sneak and right-click, 11 s cooldown): the wielder starts Bleeding for 40 s. Bleeding deals 1 damage every 1.5 s and removes Regeneration and Health Boost.

## Moveset

In Epic Fight it is a dagger. Its default One Handed style has a five-hit basic combo and the innate skill Eviscerate. It has one other style, shown below.

{{moveset dungeons_and_combat:ceremonial_dagger}}

## Crafting

{{recipes dungeons_and_combat:ceremonial_dagger}}

## Used in

{{uses dungeons_and_combat:ceremonial_dagger}}
