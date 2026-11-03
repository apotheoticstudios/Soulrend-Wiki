---
{
  "title": "Equipment Upgrades",
  "summary": "Soulrend's upgrade recipes turn one piece of gear into a better one and carry its enchantments, affixes and gems over.",
  "icon": "minecraft:smithing_table"
}
---
<!-- sources:
  game-data/recipes.json (665 recipes of type soulrend_core:upgrade_shaped (209) and soulrend_core:upgrade_smithing (456), ids soulrend:equipment/<category>/<mod>/<item>; "keep" field)
  mods/soulrend_core-2.7-1.20.1.jar recipe/upgrade/UpgradeData.carryOver, merge, moveSpells; UpgradeShapedRecipe and UpgradeSmithingRecipe (keep, keepBase, keepAddition)
  config/soulrend_core/recipes/removals.toml (byOutput #soulrend:custom_recipes_only)
  game-data/tags.json (soulrend:all_crafted 830 items, soulrend:custom_recipes_only 757 items)
-->

**Equipment upgrades** are Soulrend's own crafting and smithing recipes for improving gear. Hundreds of weapons and armor pieces are made by upgrading a lower piece instead of crafting them from raw materials, and the upgrade keeps what the player put into the old piece.

## How it works

Soulrend Core adds two recipe types. Both behave like their vanilla counterparts, with one addition: one or more of the inputs are marked **kept**, and the result inherits that input's data.

| Type | Station | Count | Kept input |
| --- | --- | --- | --- |
| Upgrade (smithing) | Smithing Table: template, base item, addition | 456 | The base item in 416 recipes, the base and the addition in 40 |
| Upgrade (shaped) | Crafting Table, shaped | 209 | The item named by the recipe's `keep` key letter, usually the lower piece of gear |

A normal smithing upgrade keeps only the base's NBT, and a normal shaped recipe keeps nothing. Here the kept item's whole NBT tag is copied onto the result. That covers enchantments, Apotheosis rarity, affixes, sockets and gems, durability damage, custom names and anything else the item stores. If more than one input is kept, the one with the most data wins.

Iron's Spells 'n Spellbooks spell containers are carried separately. The spells are moved onto the result's own spell slots.

## Where upgrades are used

The recipe ids are sorted by item category. Armor takes the largest share.

| Category | Recipes |
| --- | --- |
| Armor | 180 |
| Greatswords | 58 |
| Daggers | 48 |
| Polearms and swords | 47 each |
| Heavy weapons | 46 |
| Katanas | 44 |
| Staffs | 37 |
| Dancing blades | 35 |
| Bows | 34 |
| Spellbooks | 26 |
| Scythes | 24 |
| Other armaments | 22 |
| Rapiers | 17 |

Most of these items cannot be crafted any other way. Soulrend removes every other recipe whose result is in the `#soulrend:custom_recipes_only` tag (757 items), so the upgrade is the only route. The `#soulrend:all_crafted` tag (830 items) lists the gear meant to be crafted. It is taken out of chest and mob loot (see [[features/gear-and-crafting/loot-changes|Loot Changes]]) and never drops from a dying mob.

## Examples

The Steel Shield is a shaped upgrade. The wooden shield in the middle slot is kept:

{{recipe soulrend:equipment/armaments/dungeons_and_combat/steel_shield}}

The Acid Molten Blazing Fists are a smithing upgrade. The Jabberwocky fists in the base slot are kept:

{{recipe soulrend:equipment/armaments/dungeons_and_combat/acid_molten_blazing_fists}}

## Tips

- Upgrade after enchanting, socketing or reforging a piece. The work carries over, so it is not lost.
- Dragon armor uses ordinary smithing recipes instead, described on [[features/gear-and-crafting/dragon-armor-upgrades|Dragon Armor Upgrades]].

## Related

- [[features/gear-and-crafting/reforging-and-affixes|Reforging & Affixes]]
- [[features/gear-and-crafting/scrapping|Scrapping]]
