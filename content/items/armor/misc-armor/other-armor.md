---
{
  "title": "Other Armor",
  "aliases": [
    "Rusty Helmet",
    "Blazymancer Hood",
    "Stray Robe",
    "Wildfire Crown",
    "Tarnished Crown",
    "Wizard Hat",
    "Forgotten Hat"
  ],
  "summary": "The 30 armor pieces from mods that add only one or two, such as the Rusty Helmet, Wizard Hat and Wildfire Crown.",
  "items": [
    "alshanex_familiars:rusty_helmet",
    "dacxirons:blazymancer_hood",
    "epicfight:stray_robe",
    "friendsandfoes:wildfire_crown",
    "irons_spellbooks:tarnished_helmet",
    "irons_spellbooks:wizard_hat",
    "quark:forgotten_hat",
    "dacxirons:blazymancer_tunic",
    "epicfight:stray_hat",
    "epicfight:stray_pants",
    "ice_and_fire_spellbooks:fodaan",
    "ice_and_fire_spellbooks:toornahkriin",
    "ice_and_fire_spellbooks:vulnilviir",
    "ice_and_fire_spellbooks:vulonqo",
    "ice_and_fire_spellbooks:vulsilah",
    "irons_spellbooks:gold_crown",
    "quark:backpack",
    "supplementaries:confetti_popper",
    "supplementaries:enderman_head",
    "wom:cursed_mask",
    "wom:diamond_armbracelet",
    "wom:diamond_crown",
    "wom:diamond_legbottomseal",
    "wom:diamond_legtopseal",
    "wom:emerald_anklebracelet",
    "wom:emerald_chakra",
    "wom:emerald_earrings",
    "wom:emerald_tasset",
    "wom:golden_chrono",
    "wom:golden_kit",
    "wom:golden_mokassin",
    "wom:golden_monocle",
    "wom:netherite_belt",
    "wom:netherite_chains",
    "wom:netherite_manicle",
    "wom:netherite_mask",
    "wom:unholy_cursed_mask"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage and Epic Fight researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (tooltips)
  game-data/item-stats.json (armor slot)
  game-data/item-stats.json (epicfight:weight and epicfight:stun_armor modifiers, set by config/the_config_of_alexandria); epicfight jar: lang epicfight.tip.weight, epicfight.tip.stun_armor
  config/quark-common.toml ([oddities] Backpack = false)
-->

**Other Armor** lists 30 armor pieces (from mods with only one or two pieces). Values are the tooltip modifiers of each piece.

## Usage

- **Blazymancer** set: full set bonus Burning Spell Aura, which sets attackers on fire and casts a firebolt at them.
- **Backpack** (Quark): its tooltip says it is disabled, and Soulrend's Quark config turns it off (`Backpack = false`), so it has no recipe and does nothing.
- **Rusty Helmet:** its tooltip says Unusable.
- The rest (Weapons of Miracles accessories, dragon priest crowns, crowns and hats) have no ability text; their effects are the attributes in the tables.

## Epic Fight

The Stun Armor and Weight columns are Epic Fight stats. In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## dacxirons

| Piece | Slot | Armor | Armor Toughness | Fire Magic Resistance | Fire Spell Power | Max Mana | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:dacxirons:blazymancer_tunic]] | Chestplate | +5 | +2 | +15% | +10% | +100 | +1.88 | +12.5 |

## Ice and Fire: Spellbooks

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Attack Damage | Ice Spell Power | Mana Regeneration | Max Mana | Spell Power | Stun Armor | Weight | Fire Spell Power | Ender Spell Power | Lightning Spell Power | Eldritch Spell Power |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:ice_and_fire_spellbooks:fodaan]] | Helmet | +5 | +2 | +10% | -20% | +15% | +30% | +225 | +5% | +2.25 | +15 |  |  |  |  |
| [[item:ice_and_fire_spellbooks:toornahkriin]] | Helmet | +5 | +2 | +10% | -20% |  | +30% | +225 | +5% | +2.25 | +15 | +15% |  |  |  |
| [[item:ice_and_fire_spellbooks:vulnilviir]] | Helmet | +5 | +2 | +10% | -20% |  | +30% | +225 | +5% | +2.25 | +15 |  | +15% |  |  |
| [[item:ice_and_fire_spellbooks:vulonqo]] | Helmet | +5 | +2 | +10% | -20% |  | +30% | +225 | +5% | +2.25 | +15 |  |  | +15% |  |
| [[item:ice_and_fire_spellbooks:vulsilah]] | Helmet | +5 | +2 | +10% | -20% |  | +30% | +225 | +5% | +2.25 | +15 |  |  |  | +15% |

## Iron's Spells 'n Spellbooks

| Piece | Slot | Cooldown Reduction | Max Mana | Spell Power |
| --- | --- | --- | --- | --- |
| [[item:irons_spellbooks:gold_crown]] | Helmet | +75% | +10000 | +100% |

## Quark

| Piece | Slot | Stun Armor | Weight |
| --- | --- | --- | --- |
| [[item:quark:backpack]] | Chestplate | +1.12 | +7.5 |

## Supplementaries

| Piece | Slot |
| --- | --- |
| [[item:supplementaries:confetti_popper]] | Helmet |
| [[item:supplementaries:enderman_head]] | Helmet |

## Weapons of miracle

| Piece | Slot | Max Health | Max Stamina |
| --- | --- | --- | --- |
| [[item:wom:cursed_mask]] | Helmet | +5 | +20 |

| Piece | Slot | Armor | Armor Toughness | Max Health | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- |
| [[item:wom:diamond_crown]] | Helmet | +2 | +1 | +5 | +0.75 | +5 |
| [[item:wom:diamond_armbracelet]] | Chestplate | +4 | +1 | +5 | +1.5 | +10 |
| [[item:wom:diamond_legtopseal]] | Leggings | +3 | +1 | +5 | +1.12 | +7.5 |
| [[item:wom:diamond_legbottomseal]] | Boots | +1 | +1 | +5 | +0.38 | +2.5 |
| **Full set** |  | **+10** | **+4** | **+20** | **+3.75** | **+25** |

| Piece | Slot | Armor | Armor Toughness | Max Health | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- |
| [[item:wom:emerald_earrings]] | Helmet | +2 | +1.25 | +7 | +0.75 | +5 |
| [[item:wom:emerald_chakra]] | Chestplate | +4 | +1.25 | +8 | +1.5 | +10 |
| [[item:wom:emerald_tasset]] | Leggings | +3 | +1.25 | +8 | +1.12 | +7.5 |
| [[item:wom:emerald_anklebracelet]] | Boots | +1 | +1.25 | +7 | +0.38 | +2.5 |
| **Full set** |  | **+10** | **+5** | **+30** | **+3.75** | **+25** |

| Piece | Slot | Armor | Max Health | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- |
| [[item:wom:golden_monocle]] | Helmet | +1 | +3 | +0.38 | +2.5 |
| [[item:wom:golden_kit]] | Chestplate | +2 | +4 | +0.75 | +5 |
| [[item:wom:golden_chrono]] | Leggings | +1 | +4 | +0.38 | +2.5 |
| [[item:wom:golden_mokassin]] | Boots | +1 | +3 | +0.38 | +2.5 |
| **Full set** |  | **+5** | **+14** | **+1.89** | **+12.5** |

| Piece | Slot | Armor | Armor Toughness | Max Health | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- |
| [[item:wom:netherite_mask]] | Helmet | +2 | +1.5 | +10 | +0.75 | +5 |
| [[item:wom:netherite_manicle]] | Chestplate | +4 | +1.5 | +10 | +1.5 | +10 |
| [[item:wom:netherite_belt]] | Leggings | +3 | +1.5 | +10 | +1.12 | +7.5 |
| [[item:wom:netherite_chains]] | Boots | +1 | +1.5 | +10 | +0.38 | +2.5 |
| **Full set** |  | **+10** | **+6** | **+40** | **+3.75** | **+25** |

| Piece | Slot | Armor Toughness | Max Health | Attack Damage | Max Stamina |
| --- | --- | --- | --- | --- | --- |
| [[item:wom:unholy_cursed_mask]] | Helmet | +0.5 | +8 | +2 | +10 |
