---
{
  "title": "Soulrender",
  "summary": "A scythe from Simply Swords, part of the Demonic Implements quest chapter.",
  "infobox": {
    "item": "simplyswords:soulrender",
    "rows": [
      ["Type", "Scythe"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "14.6"],
      ["Attack speed", "1.42"]
    ]
  },
  "items": ["simplyswords:soulrender"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type simplyswords:soulrender, from jar:Simplyswords-Epicfied-pre3.0.jar)
  game-data/items.json (tooltip)
  simply_swords_overhaul jar: MixinRendSword, lang tooltip.simply_swords_overhaul.rendsworditem*
  config/simply_swords_overhaul-common.toml (soulrenderEffectRadius 10, soulrenderHealMultiplier 0.5, soulrenderBaseDamage 2, soulrenderStacksPerStage 5, max healing 0.5, soulrenderMaxSlownessLevel 3, soulrenderMaxWeaknessLevel 2)
-->

**Soulrender** is a scythe from Simply Swords. It is weapon 22 of 27 in [[items/weapons/demonic-implements|Demonic Implements]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 14.6 |
| Attack Speed | 1.42 |
| Impact | 2.5 |
| Targets per swing | 6 |
| Armor Negation | 66.6% |
| Entity Reach | 3 |
| Enchantability | 30 |
| Fire resistant | Yes |

## Usage

Soulrend's Simply Swords Overhaul mod reworks this weapon.

- **Soul Rend** (unique effect): hits apply a stacking debuff. The overhaul caps the Slowness it applies at level III and the Weakness at level II.
- **On right-click:** the wielder takes every stack from enemies within 10 blocks, dealing magic damage and healing 0.5 health per stack, up to 50% of their maximum health. The damage per stack starts at 2 and rises every 5 stacks.

## Moveset

In Epic Fight it is an antitheu. Its default Two Handed style has a six-hit basic combo and the innate skill Demonic Ascension. It has one other style, shown below. It also has a passive skill.

{{moveset simplyswords:soulrender}}

## Crafting

{{recipes simplyswords:soulrender}}

## Used in

{{uses simplyswords:soulrender}}
