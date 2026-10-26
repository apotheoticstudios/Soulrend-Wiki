---
{
  "title": "Magiscythe",
  "summary": "A scythe from Simply Swords, part of the Demonic Implements quest chapter.",
  "infobox": {
    "item": "simplyswords:magiscythe",
    "rows": [
      ["Type", "Scythe"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "16.1"],
      ["Attack speed", "1.34"],
      ["Durability", "3,270"]
    ]
  },
  "items": ["simplyswords:magiscythe"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type simplyswords:magiscythe, from jar:Simplyswords-Epicfied-pre3.0.jar)
  game-data/items.json (tooltip)
  config/simplyswords_main/unique_effects.json5 (magistormRadius 4, magistormDamage 3, magistormDuration 400, magistormCooldown 980)
-->

**Magiscythe** is a scythe from Simply Swords. It is weapon 21 of 27 in [[items/weapons/demonic-implements|Demonic Implements]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 16.1 |
| Attack Speed | 1.34 |
| Impact | 2.6 |
| Targets per swing | 8 |
| Armor Negation | 66.6% |
| Entity Reach | 3 |
| Durability | 3,270 |
| Enchantability | 30 |
| Fire resistant | Yes |

## Usage

- **Magistorm** (unique effect): attacking enemies while Magistorm is active has a chance to repair an equipped item.
- **On right-click:** a magical storm forms above the wielder and strikes nearby enemies (within 4 blocks, 3 damage per strike). Each strike has a chance to extend the storm and make it more severe. In Soulrend the storm lasts 20 s, and its cooldown is 49 s.

The ability scales with Arcane spell power.

## Moveset

In Epic Fight it is a tachi. Its default Two Handed style has a six-hit basic combo and the innate skill Orbital beam. It also has a passive skill.

{{moveset simplyswords:magiscythe}}

## Crafting

{{recipes simplyswords:magiscythe}}

## Used in

{{uses simplyswords:magiscythe}}
