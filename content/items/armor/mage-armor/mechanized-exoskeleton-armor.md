---
{
  "title": "Mechanized Exoskeleton Armor",
  "aliases": [
    "Mechanized Exoskeleton Helmet",
    "Mechanized Exoskeleton Chestplate",
    "Mechanized Exoskeleton Leggings",
    "Mechanized Exoskeleton Boots"
  ],
  "summary": "Armor set from T.O Magic 'n Extras on the Mage Armor.",
  "infobox": {
    "item": "traveloptics:mechanized_exoskeleton_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "32"],
      ["Toughness (all pieces)", "16"]
    ]
  },
  "items": [
    "traveloptics:mechanized_exoskeleton_helmet",
    "traveloptics:mechanized_exoskeleton_chestplate",
    "traveloptics:mechanized_exoskeleton_leggings",
    "traveloptics:mechanized_exoskeleton_boots"
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
  traveloptics jar: lang item.traveloptics.mechanized_exoskeleton.*
-->

**Mechanized Exoskeleton Armor** is an armor set from T.O Magic 'n Extras. It is set 25 of 30 on [[items/armor/mage-armor|Mage Armor]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Speed | Lightning Spell Power | Max Mana | Spell Power | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:traveloptics:mechanized_exoskeleton_helmet]] | Helmet | +6 | +4 | +10% | +5% | +10% | +150 | +5% | +25 | +17 |  |
| [[item:traveloptics:mechanized_exoskeleton_chestplate]] | Chestplate | +11 | +4 | +10% | +5% | +10% | +150 | +5% | +35 | +28 |  |
| [[item:traveloptics:mechanized_exoskeleton_leggings]] | Leggings | +9 | +4 | +10% | +5% | +10% | +150 | +5% | +27.5 | +24.5 |  |
| [[item:traveloptics:mechanized_exoskeleton_boots]] | Boots | +6 | +4 | +10% | +5% | +10% | +150 | +5% | +20 | +13 |  |
| **Full set** |  | **+32** | **+16** | **+40%** | **+20%** | **+40%** | **+600** | **+20%** | **+107.5** | **+82.5** |  |

## Usage

**Full set ability, Aerial Arsenal**, powered by Plasma Fuel (shown in the tooltip):

- **Jetpack Boost** (a key): upward thrust.
- **Elytra Boost** (a key, while gliding): a fast forward boost.
- **Laser Cannons** (hold a key): continuous laser bursts.
- **Missile Launchers** (a key): explosive homing missiles.

**Passive:** when fuel drops to 1% in the air, the suit uses a Tesla Bulb from the inventory to refill up to 50%. Plasma Power Cells also refuel it. The chestplate has one empty imbue slot.

## Epic Fight

Together, its 4 pieces add **82.5 Weight** and **107.5 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes traveloptics:mechanized_exoskeleton_helmet}}

{{recipes traveloptics:mechanized_exoskeleton_chestplate}}

{{recipes traveloptics:mechanized_exoskeleton_leggings}}

{{recipes traveloptics:mechanized_exoskeleton_boots}}
