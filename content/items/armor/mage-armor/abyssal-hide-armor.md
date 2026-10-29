---
{
  "title": "Abyssal Hide Armor",
  "aliases": [
    "Abyssal Hide Hat",
    "Abyssal Hide Robe",
    "Abyssal Hide Leggings",
    "Abyssal Hide Boots"
  ],
  "summary": "Armor set from T.O Magic 'n Extras on the Mage Armor.",
  "infobox": {
    "item": "traveloptics:abyssal_hide_armor_robe",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "32"],
      ["Toughness (all pieces)", "16"]
    ]
  },
  "items": [
    "traveloptics:abyssal_hide_armor_hat",
    "traveloptics:abyssal_hide_armor_robe",
    "traveloptics:abyssal_hide_armor_leggings",
    "traveloptics:abyssal_hide_armor_boots"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage and Epic Fight researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json
  game-data/loot-tables.json, game-data/recipes.json
  game-data/item-stats.json (epicfight:weight and epicfight:stun_armor modifiers, set by config/the_config_of_alexandria); epicfight jar: lang epicfight.tip.weight, epicfight.tip.stun_armor
  game-data/items.json (tooltip)
  traveloptics jar: lang item.traveloptics.abyssal_hide_armor.*
-->

**Abyssal Hide Armor** is an armor set from T.O Magic 'n Extras. It is set 29 of 30 on [[items/armor/mage-armor|Mage Armor]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Armor Pierce | Eldritch Spell Power | Ender Spell Power | Max Mana | Spell Power | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:traveloptics:abyssal_hide_armor_hat]] | Helmet | +6 | +4 | +5% | +0.05 | +10% | +10% | +150 | +5% | +15 | +12 |
| [[item:traveloptics:abyssal_hide_armor_robe]] | Chestplate | +11 | +4 | +5% | +0.05 | +10% | +10% | +150 | +5% | +25 | +18 |
| [[item:traveloptics:abyssal_hide_armor_leggings]] | Leggings | +9 | +4 | +5% | +0.05 | +10% | +10% | +150 | +5% | +20 | +15 |
| [[item:traveloptics:abyssal_hide_armor_boots]] | Boots | +6 | +4 | +5% | +0.05 | +10% | +10% | +150 | +5% | +5 | +8 |
| **Full set** |  | **+32** | **+16** | **+20%** | **+0.2** | **+40%** | **+40%** | **+600** | **+20%** | **+65** | **+53** |

## Usage

**Full set ability, Orbital Void:** when the wearer drops below 75% health, Abyssal Orbs fire and home in on nearby enemies. Their damage scales with Eldritch and Ender spell power. Cooldown 20 s. The response can be switched on or off with a key (B by default, shown in the tooltip). While the ability is on cooldown, long-cast spells imbued in the armor are interrupted. The chestplate has one empty imbue slot.

## Epic Fight

Together, its 4 pieces add **53 Weight** and **65 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes traveloptics:abyssal_hide_armor_hat}}

{{recipes traveloptics:abyssal_hide_armor_robe}}

{{recipes traveloptics:abyssal_hide_armor_leggings}}

{{recipes traveloptics:abyssal_hide_armor_boots}}
