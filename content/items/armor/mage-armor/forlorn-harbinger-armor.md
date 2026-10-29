---
{
  "title": "Forlorn Harbinger Armor",
  "aliases": [
    "Forlorn Harbinger Hood",
    "Forlorn Harbinger Robe",
    "Forlorn Harbinger Leggings",
    "Forlorn Harbinger Boots"
  ],
  "summary": "Armor set from T.O Magic 'n Extras on the Mage Armor.",
  "infobox": {
    "item": "traveloptics:forlorn_harbinger_robe",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "32"],
      ["Toughness (all pieces)", "16"]
    ]
  },
  "items": [
    "traveloptics:forlorn_harbinger_hood",
    "traveloptics:forlorn_harbinger_robe",
    "traveloptics:forlorn_harbinger_leggings",
    "traveloptics:forlorn_harbinger_boots"
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
  traveloptics jar: lang item.traveloptics.forlorn_harbinger.*
-->

**Forlorn Harbinger Armor** is an armor set from T.O Magic 'n Extras. It is set 10 of 30 on [[items/armor/mage-armor|Mage Armor]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Blood Spell Power | Evocation Spell Power | Max Mana | Spell Power | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:traveloptics:forlorn_harbinger_hood]] | Helmet | +6 | +4 | +5% | +10% | +10% | +150 | +5% | +15 | +8.6 |
| [[item:traveloptics:forlorn_harbinger_robe]] | Chestplate | +11 | +4 | +5% | +10% | +10% | +150 | +5% | +22.5 | +21 |
| [[item:traveloptics:forlorn_harbinger_leggings]] | Leggings | +9 | +4 | +5% | +10% | +10% | +150 | +5% | +25 | +17 |
| [[item:traveloptics:forlorn_harbinger_boots]] | Boots | +6 | +4 | +5% | +10% | +10% | +150 | +5% | +10 | +8 |
| **Full set** |  | **+32** | **+16** | **+20%** | **+40%** | **+40%** | **+600** | **+20%** | **+72.5** | **+54.6** |

## Usage

**Full set ability, Nightfallen Dominion**, powered by a Darkness meter shown in the tooltip:

- **Hollow Drift:** sustained flight, costing 2% Darkness per second.
- **Nocturnal Uplift** (a key, on the ground): launches the wearer upward with a burst that hits enemies within 6 blocks. Each enemy hit restores Darkness. Cooldown 10 s.
- **Crimson Descend** (a key): dives at high speed and releases a shockwave on impact that damages entities within 8 blocks. The damage scales with Blood spell power, and each enemy hit heals the wearer. Cooldown 10 s.
- **Eclipsed Sight** (a key): switches Night Vision on or off, costing 0.6% Darkness per second. Cooldown 3 s.

**Passive:** at night the two attacks have shorter cooldowns. Nocturnal Uplift restores 6% Darkness per hit, and Crimson Descend heals 15% of the wearer's maximum health per enemy hit. (The detailed key lines give 3% and 10% for the same effects; the shown tooltip gives 6% and 15%.) The robe has one empty imbue slot.

## Epic Fight

Together, its 4 pieces add **54.6 Weight** and **72.5 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes traveloptics:forlorn_harbinger_hood}}

{{recipes traveloptics:forlorn_harbinger_robe}}

{{recipes traveloptics:forlorn_harbinger_leggings}}

{{recipes traveloptics:forlorn_harbinger_boots}}
