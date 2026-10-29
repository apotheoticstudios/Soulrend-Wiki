---
{
  "title": "Crimson Long Sword",
  "summary": "A greatsword from dungeons and combat, part of the Blood Bath quest chapter.",
  "infobox": {
    "item": "dungeons_and_combat:crimson_long_sword",
    "rows": [
      ["Type", "Greatsword"],
      ["Handling", "Two Handed"],
      ["Rarity", "Common"],
      ["Attack damage", "31"],
      ["Attack speed", "1.60"]
    ]
  },
  "items": ["dungeons_and_combat:crimson_long_sword"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type soulrend_weapon_types:longsword, from paxi:soulrend_ef_capabilities)
  dungeons_and_combat jar: CrimsonLongSwordItem (hurtEnemy, use), BleedingOnHitProcedure, BloodOathAbilityProcedure, BleedingOnEffectActiveTickProcedure
-->

**Crimson Long Sword** is a greatsword from dungeons and combat. It is weapon 48 of 61 in [[items/weapons/blood-bath|Blood Bath]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 31 |
| Attack Speed | 1.60 |
| Impact | 4.5 |
| Targets per swing | 4 |
| Armor Negation | 35% |
| Entity Reach | 3 |
| Enchantability | 8 |
| Fire resistant | Yes |

## Usage

- **Hit effect:** each hit makes the target bleed for 16 s. Bleeding deals 1 damage every 1.5 s and removes Regeneration and Health Boost.
- **Blood Oath** (sneak and right-click, 11 s cooldown): the wielder starts Bleeding for 40 s.

## Moveset

In Epic Fight it is a longsword. Its default Two Handed style has a four-hit basic combo and the innate skill Ender Ritual.

{{moveset dungeons_and_combat:crimson_long_sword}}

## Crafting

{{recipes dungeons_and_combat:crimson_long_sword}}
