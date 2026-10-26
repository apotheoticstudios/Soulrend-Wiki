---
{
  "title": "Riptide Sovereign Armor",
  "aliases": [
    "Riptide Sovereign Hood",
    "Riptide Sovereign Fincloak",
    "Riptide Sovereign Leggings",
    "Riptide Sovereign Boots"
  ],
  "summary": "Armor set from T.O Magic 'n Extras on the Mage Armor.",
  "infobox": {
    "item": "traveloptics:riptide_sovereign_fincloak",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "32"],
      ["Toughness (all pieces)", "16"]
    ]
  },
  "items": [
    "traveloptics:riptide_sovereign_hat",
    "traveloptics:riptide_sovereign_fincloak",
    "traveloptics:riptide_sovereign_leggings",
    "traveloptics:riptide_sovereign_boots"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage and Epic Fight researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json (durability)
  game-data/loot-tables.json, game-data/recipes.json
  game-data/item-stats.json (epicfight:weight and epicfight:stun_armor modifiers, set by config/the_config_of_alexandria); epicfight jar: lang epicfight.tip.weight, epicfight.tip.stun_armor
  game-data/items.json (tooltip)
  traveloptics jar: lang item.traveloptics.riptide_sovereign_armor.*
-->

**Riptide Sovereign Armor** is an armor set from T.O Magic 'n Extras. It is set 16 of 30 on [[items/armor/mage-armor|Mage Armor]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Aqua Spell Power | Lightning Spell Power | Max Mana | Spell Power | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:traveloptics:riptide_sovereign_hat]] | Helmet | +6 | +4 | +5% | +10% | +5% | +150 | +5% | +15 | +12.5 |  |
| [[item:traveloptics:riptide_sovereign_fincloak]] | Chestplate | +11 | +4 | +5% | +10% | +5% | +150 | +5% | +40 | +18 |  |
| [[item:traveloptics:riptide_sovereign_leggings]] | Leggings | +9 | +4 | +5% | +10% | +5% | +150 | +5% | +25 | +14 |  |
| [[item:traveloptics:riptide_sovereign_boots]] | Boots | +6 | +4 | +5% | +10% | +5% | +150 | +5% | +15 | +4 |  |
| **Full set** |  | **+32** | **+16** | **+20%** | **+40%** | **+20%** | **+600** | **+20%** | **+95** | **+48.5** |  |

## Usage

**Full set ability, Stormline Ascension:** dealing Aqua or Lightning magic damage builds Stormline through five ranks, from Initiate to Sovereign (shown in the tooltip; Aqua builds it faster). Each rank adds +5% final Aqua spell damage, plus 20% more at Sovereign; Lightning gets half as much. Taking damage removes a rank and calls a lightning storm around the attacker, scaling with generic and Lightning spell power.

**Passive:** the full set enables the Hydrocharge elemental interaction, and a Hydrocharge Bracelet adds +15% Hydrocharge damage. The chestplate has one empty imbue slot.

## Epic Fight

Together, its 4 pieces add **48.5 Weight** and **95 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes traveloptics:riptide_sovereign_hat}}

{{recipes traveloptics:riptide_sovereign_fincloak}}

{{recipes traveloptics:riptide_sovereign_leggings}}

{{recipes traveloptics:riptide_sovereign_boots}}
