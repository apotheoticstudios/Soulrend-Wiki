---
{
  "title": "Cursed Wraithguard Armor",
  "aliases": [
    "Cursed Wraithguard Crown",
    "Cursed Wraithguard Chestplate",
    "Cursed Wraithguard Spectral Wrapping",
    "Cursed Wraithguard Boots"
  ],
  "summary": "Armor set from T.O Magic 'n Extras on the Mage Armor.",
  "infobox": {
    "item": "traveloptics:cursed_wraithguard_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "32"],
      ["Toughness (all pieces)", "16"]
    ]
  },
  "items": [
    "traveloptics:cursed_wraithguard_crown",
    "traveloptics:cursed_wraithguard_chestplate",
    "traveloptics:cursed_wraithguard_spectral_wrapping",
    "traveloptics:cursed_wraithguard_boots"
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
  traveloptics jar: lang item.traveloptics.cursed_wraithguard_armor.*
-->

**Cursed Wraithguard Armor** is an armor set from T.O Magic 'n Extras. It is set 23 of 30 on [[items/armor/mage-armor|Mage Armor]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Arrow Damage | Ice Spell Power | Max Mana | Sound Spell Power | Spell Power | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:traveloptics:cursed_wraithguard_crown]] | Helmet | +6 | +4 | +5% | +5% | +10% | +150 | +10% | +5% | +20 | +9 |
| [[item:traveloptics:cursed_wraithguard_chestplate]] | Chestplate | +11 | +4 | +5% | +5% | +10% | +150 | +10% | +5% | +22.5 | +25 |
| [[item:traveloptics:cursed_wraithguard_spectral_wrapping]] | Leggings | +9 | +4 | +5% | +5% | +10% | +150 | +10% | +5% | +22.5 | +20 |
| [[item:traveloptics:cursed_wraithguard_boots]] | Boots | +6 | +4 | +5% | +5% | +10% | +150 | +10% | +5% | +20 | +8.5 |
| **Full set** |  | **+32** | **+16** | **+20%** | **+20%** | **+40%** | **+600** | **+40%** | **+20%** | **+85** | **+62.5** |

## Usage

**Full set ability, Grudge:** every hit the wearer takes fills Phantom Rage (up to 350, shown in the tooltip). When it is full, the wearer gets +30% attack damage, spell power and arrow damage for 15 s. Cooldown 25 s. **Passive:** below 50% health, the bonus rises to 60%. While the ability is on cooldown, long-cast spells imbued in the armor are interrupted. The chestplate has one empty imbue slot.

## Epic Fight

Together, its 4 pieces add **62.5 Weight** and **85 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes traveloptics:cursed_wraithguard_crown}}

{{recipes traveloptics:cursed_wraithguard_chestplate}}

{{recipes traveloptics:cursed_wraithguard_spectral_wrapping}}

{{recipes traveloptics:cursed_wraithguard_boots}}
