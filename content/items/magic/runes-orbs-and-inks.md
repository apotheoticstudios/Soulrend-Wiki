---
{
  "title": "Runes, Orbs & Inks",
  "aliases": ["Arcane Essence"],
  "summary": "Runes, Orbs & Inks: 62 items from the Soulrend modpack.",
  "items": [
    "irons_spellbooks:arcane_essence",
    "alshanex_familiars:sound_rune",
    "dacxirons:wither_rune",
    "gtbcs_geomancy_plus:geo_rune",
    "irons_spellbooks:arcane_rune",
    "irons_spellbooks:blood_rune",
    "irons_spellbooks:cinderous_soul_rune",
    "irons_spellbooks:cooldown_rune",
    "irons_spellbooks:ender_rune",
    "irons_spellbooks:evocation_rune",
    "irons_spellbooks:fire_rune",
    "irons_spellbooks:holy_rune",
    "irons_spellbooks:ice_rune",
    "irons_spellbooks:lightning_rune",
    "irons_spellbooks:nature_rune",
    "irons_spellbooks:protection_rune",
    "traveloptics:aqua_rune",
    "irons_spellbooks:blank_rune",
    "alshanex_familiars:sound_upgrade_orb",
    "gtbcs_geomancy_plus:geo_upgrade_orb",
    "irons_spellbooks:blood_upgrade_orb",
    "irons_spellbooks:cooldown_upgrade_orb",
    "irons_spellbooks:ender_upgrade_orb",
    "irons_spellbooks:evocation_upgrade_orb",
    "irons_spellbooks:fire_upgrade_orb",
    "irons_spellbooks:holy_upgrade_orb",
    "irons_spellbooks:ice_upgrade_orb",
    "irons_spellbooks:lightning_upgrade_orb",
    "irons_spellbooks:mana_upgrade_orb",
    "irons_spellbooks:nature_upgrade_orb",
    "irons_spellbooks:protection_upgrade_orb",
    "irons_spellbooks:upgrade_orb",
    "traveloptics:aqua_upgrade_orb",
    "traveloptics:eldritch_upgrade_orb",
    "irons_spellbooks:common_ink",
    "irons_spellbooks:epic_ink",
    "irons_spellbooks:legendary_ink",
    "irons_spellbooks:rare_ink",
    "irons_spellbooks:uncommon_ink",
    "irons_spellbooks:lesser_spell_slot_upgrade",
    "traveloptics:sanctified_spell_slot_upgrade",
    "traveloptics:spectral_spell_slot_upgrade",
    "traveloptics:abyssal_spellweave_ingot",
    "traveloptics:aqua_echo",
    "traveloptics:blood_echo",
    "traveloptics:celestial_spellweave_ingot",
    "traveloptics:crimson_spellweave_ingot",
    "traveloptics:cryo_spellweave_ingot",
    "traveloptics:eldritch_echo",
    "traveloptics:eldritch_spellweave_ingot",
    "traveloptics:ender_echo",
    "traveloptics:evocation_echo",
    "traveloptics:evokated_spellweave_ingot",
    "traveloptics:fire_echo",
    "traveloptics:holy_echo",
    "traveloptics:ice_echo",
    "traveloptics:lightning_echo",
    "traveloptics:lightning_spellweave_ingot",
    "traveloptics:nature_echo",
    "traveloptics:pyro_spellweave_ingot",
    "traveloptics:verdant_spellweave_ingot",
    "traveloptics:void_spellweave_ingot"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json
  game-data/loot-tables.json, game-data/recipes.json, game-data/loot-index.json
  kubejs/server_scripts/magic/ironspells_recipes.js (Protective Rune recipe, Protection Upgrade Orb recipe removed, Eldritch Upgrade Orb, Wandering Wizard smithing)
  kubejs/server_scripts/magic/dacxoptics_recipes.js (echo smithing: rune template, familiar trinket base, astral_calamity_extras:corrupted_ingot)
  config/paxi/datapacks/soulrend_irons_spellbooks_rebalance (ignored: wrong folder and field name; see content/bugs.md)
  irons_spellbooks jar: data/irons_spellbooks/irons_spellbooks/upgrade_orb_type/*.json (amount 0.05 etc.), ArcaneAnvilMenu, SpellSlotUpgradeItem
-->

**Runes, Orbs & Inks** lists 62 spellcasting materials: runes, upgrade orbs, inks, spell slot improvements, Traveloptics echoes and spellweave ingots.

## Usage

These are Iron's Spells 'n Spellbooks' crafting materials and their addon versions.

- **[[item:irons_spellbooks:arcane_essence]]** is the basic magic material, used in ink, runes and most magic recipes. It drops from 67 loot tables, and one lapis lazuli with an amethyst shard crafts two.
- **School runes** are a [[item:irons_spellbooks:blank_rune]] surrounded by eight of a school's focus items, such as Blaze Rods for the Fire Rune.
  - Fire, Ice and Lightning Runes can also use the matching Ice and Fire dragon scales.
  - The Arcane Rune uses Arcane Essence and the Recovery Rune phantom membranes.
  - The Wither Rune uses coal in the corners and ebony scrap on the sides.
  - A Shriving Stone turns any inscribed rune back into a Blank Runestone.
  - A Blank Runestone with cinder essence, tuff and arcane ingots crafts two.
  - The **Protective Rune** has a Soulrend recipe instead: an echo shard over a Blank Runestone, surrounded by deepslate. Soulrend uses it for the Wandering Wizard armor (smithing) and the Eldritch Upgrade Orb.
  - The **Cinderous Soul Rune** is a block, not a crafting rune. No recipe or loot table gives it.
- **Upgrade orbs** start as an [[item:irons_spellbooks:upgrade_orb]] (arcane ingots, cinder essence and a mithril ingot). Eight matching runes around it make a school orb.
  - At the [[items/magic/magic-stations#Arcane Anvil|Arcane Anvil]] an orb adds its bonus to a piece of gear, up to 3 upgrades per item. Each orb gives +5% to its school's spell power, +5% Cooldown Reduction or +50 Max Mana, as the tables show.
  - Soulrend's datapack meant to lower these values isn't read by the game (see [[bugs|Known Bugs]]).
  - The **Eldritch Upgrade Orb** has a Soulrend recipe: an Empty Upgrade Orb surrounded by eight Protective Runes.
  - Soulrend removes the **Protection Upgrade Orb**'s recipe, and nothing else gives it.
- **Inks** set the rarity of scrolls made in the [[items/magic/magic-stations#Scroll Forge|Scroll Forge]].
  - Common Ink is crafted from a glass bottle, an ink sac (or glow ink sac) and two Arcane Essence.
  - Each higher ink is brewed from the one below in the [[items/magic/magic-stations#Alchemist Cauldron|Alchemist Cauldron]]: copper for Uncommon, iron for Rare, gold for Epic and amethyst for Legendary.
  - Scrolls recycle back into ink in the same cauldron.
- **Spell slot improvements** add a slot to a spellbook at the Arcane Anvil. The Lesser Spell Slot Improvement works up to 12 slots; the Sanctified and Spectral ones work up to 15.
- **Traveloptics echoes** are charm curios, described on [[items/curios-and-accessories/other-curios|Other Curios]]. Soulrend replaces their recipes with smithing: the school's rune is the template, the matching familiar trinket is the base, and a Corrupted Ingot is the addition.
- **Spellweave ingots** are Traveloptics crafting materials for its unique weapons and armor:
  - Abyssal: the Abyssal Hide armor, Abyssal Tidecaller and The Obliterator.
  - Pyro: the Infernal Devastator.
  - Verdant: the Thorns of Oblivion.
  - Void: the Voidstrike Reaper.
  - The Celestial, Crimson, Cryo, Eldritch, Evokated and Lightning ingots have no recipe or use in Soulrend; of those six, only the Lightning ingot drops from a loot table.

## Items

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:irons_spellbooks:arcane_essence]] | Iron's Spells 'n Spellbooks |  | crafting, 67 loot tables |

## School runes

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:alshanex_familiars:sound_rune]] | Alshanex Familiars Mod |  | crafting |
| [[item:dacxirons:wither_rune]] | dacxirons |  | crafting |
| [[item:gtbcs_geomancy_plus:geo_rune]] | GTBC's Geomancy Plus |  | crafting, 2 loot tables |
| [[item:irons_spellbooks:arcane_rune]] | Iron's Spells 'n Spellbooks |  | crafting |
| [[item:irons_spellbooks:blood_rune]] | Iron's Spells 'n Spellbooks |  | crafting |
| [[item:irons_spellbooks:cinderous_soul_rune]] | Iron's Spells 'n Spellbooks |  |  |
| [[item:irons_spellbooks:cooldown_rune]] | Iron's Spells 'n Spellbooks |  | crafting |
| [[item:irons_spellbooks:ender_rune]] | Iron's Spells 'n Spellbooks |  | crafting, 1 loot table |
| [[item:irons_spellbooks:evocation_rune]] | Iron's Spells 'n Spellbooks |  | crafting, 1 loot table |
| [[item:irons_spellbooks:fire_rune]] | Iron's Spells 'n Spellbooks |  | crafting |
| [[item:irons_spellbooks:holy_rune]] | Iron's Spells 'n Spellbooks |  | crafting |
| [[item:irons_spellbooks:ice_rune]] | Iron's Spells 'n Spellbooks |  | crafting |
| [[item:irons_spellbooks:lightning_rune]] | Iron's Spells 'n Spellbooks |  | crafting |
| [[item:irons_spellbooks:nature_rune]] | Iron's Spells 'n Spellbooks |  | crafting |
| [[item:irons_spellbooks:protection_rune]] | Iron's Spells 'n Spellbooks |  |  |
| [[item:traveloptics:aqua_rune]] | T.O Magic 'n Extras |  | crafting, 2 loot tables |
| [[item:irons_spellbooks:blank_rune]] | Iron's Spells 'n Spellbooks |  | crafting, 29 loot tables |

## Upgrade orbs

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:alshanex_familiars:sound_upgrade_orb]] | Alshanex Familiars Mod | +5% Sound Spell Power | crafting |
| [[item:gtbcs_geomancy_plus:geo_upgrade_orb]] | GTBC's Geomancy Plus | +5% Geo Spell Power | crafting |
| [[item:irons_spellbooks:blood_upgrade_orb]] | Iron's Spells 'n Spellbooks | +5% Blood Spell Power | crafting |
| [[item:irons_spellbooks:cooldown_upgrade_orb]] | Iron's Spells 'n Spellbooks | +5% Cooldown Reduction | crafting |
| [[item:irons_spellbooks:ender_upgrade_orb]] | Iron's Spells 'n Spellbooks | +5% Ender Spell Power | crafting |
| [[item:irons_spellbooks:evocation_upgrade_orb]] | Iron's Spells 'n Spellbooks | +5% Evocation Spell Power | crafting |
| [[item:irons_spellbooks:fire_upgrade_orb]] | Iron's Spells 'n Spellbooks | +5% Fire Spell Power | crafting |
| [[item:irons_spellbooks:holy_upgrade_orb]] | Iron's Spells 'n Spellbooks | +5% Holy Spell Power | crafting |
| [[item:irons_spellbooks:ice_upgrade_orb]] | Iron's Spells 'n Spellbooks | +5% Ice Spell Power | crafting |
| [[item:irons_spellbooks:lightning_upgrade_orb]] | Iron's Spells 'n Spellbooks | +5% Lightning Spell Power | crafting |
| [[item:irons_spellbooks:mana_upgrade_orb]] | Iron's Spells 'n Spellbooks | +50 Max Mana | crafting |
| [[item:irons_spellbooks:nature_upgrade_orb]] | Iron's Spells 'n Spellbooks | +5% Nature Spell Power | crafting |
| [[item:irons_spellbooks:protection_upgrade_orb]] | Iron's Spells 'n Spellbooks | +5% Spell Resistance |  |
| [[item:irons_spellbooks:upgrade_orb]] | Iron's Spells 'n Spellbooks |  | crafting, 1 loot table |
| [[item:traveloptics:aqua_upgrade_orb]] | T.O Magic 'n Extras | +5% Aqua Spell Power | crafting |
| [[item:traveloptics:eldritch_upgrade_orb]] | T.O Magic 'n Extras | +5% Eldritch Spell Power | 1 loot table |

## Inks

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:irons_spellbooks:common_ink]] | Iron's Spells 'n Spellbooks | Can Craft Common Scrolls | crafting, 3 loot tables |
| [[item:irons_spellbooks:epic_ink]] | Iron's Spells 'n Spellbooks | Can Craft Epic Scrolls | crafting, 5 loot tables |
| [[item:irons_spellbooks:legendary_ink]] | Iron's Spells 'n Spellbooks | Can Craft Legendary Scrolls | crafting, 4 loot tables |
| [[item:irons_spellbooks:rare_ink]] | Iron's Spells 'n Spellbooks | Can Craft Rare Scrolls | crafting, 5 loot tables |
| [[item:irons_spellbooks:uncommon_ink]] | Iron's Spells 'n Spellbooks | Can Craft Uncommon Scrolls | crafting, 4 loot tables |

## Spell slot upgrades

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:irons_spellbooks:lesser_spell_slot_upgrade]] | Iron's Spells 'n Spellbooks | Improves Spell Book capacity, up to 12 Slots | crafting |
| [[item:traveloptics:sanctified_spell_slot_upgrade]] | T.O Magic 'n Extras | Improves Spell Book capacity, up to 15 Slots | crafting |
| [[item:traveloptics:spectral_spell_slot_upgrade]] | T.O Magic 'n Extras | Improves Spell Book capacity, up to 15 Slots | crafting, 2 loot tables |

## Traveloptics school echoes and spellweave ingots

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:traveloptics:abyssal_spellweave_ingot]] | T.O Magic 'n Extras | Crafting Item | 2 loot tables |
| [[item:traveloptics:aqua_echo]] | T.O Magic 'n Extras | Slot: Charm; Right-click to absorb the power of an Aqua spell! Requires Experience Points!; +15% Aqua Spell Power | crafting, 3 loot tables |
| [[item:traveloptics:blood_echo]] | T.O Magic 'n Extras | Slot: Charm; Right-click to imbue with a Blood spell! Requires Experience Points!; +15% Blood Spell Power | crafting, 1 loot table |
| [[item:traveloptics:celestial_spellweave_ingot]] | T.O Magic 'n Extras | Crafting Item |  |
| [[item:traveloptics:crimson_spellweave_ingot]] | T.O Magic 'n Extras | Crafting Item |  |
| [[item:traveloptics:cryo_spellweave_ingot]] | T.O Magic 'n Extras | Crafting Item |  |
| [[item:traveloptics:eldritch_echo]] | T.O Magic 'n Extras | Slot: Charm; Right-click to awaken an Eldritch spell! Requires Experience Points!; +15% Eldritch Spell Power | crafting, 1 loot table |
| [[item:traveloptics:eldritch_spellweave_ingot]] | T.O Magic 'n Extras | Crafting Item |  |
| [[item:traveloptics:ender_echo]] | T.O Magic 'n Extras | Slot: Charm; Right-click to imbue with a Ender spell! Requires Experience Points!; +15% Ender Spell Power | crafting, 1 loot table |
| [[item:traveloptics:evocation_echo]] | T.O Magic 'n Extras | Slot: Charm; Right-click to call forth an Evocation spell! Requires Experience Points!; +15% Evocation Spell Power | crafting, 1 loot table |
| [[item:traveloptics:evokated_spellweave_ingot]] | T.O Magic 'n Extras | Crafting Item |  |
| [[item:traveloptics:fire_echo]] | T.O Magic 'n Extras | Slot: Charm; Right-click to imbue with a Fire spell! Requires Experience Points!; +15% Fire Spell Power | crafting, 1 loot table |
| [[item:traveloptics:holy_echo]] | T.O Magic 'n Extras | Slot: Charm; Right-click to imbue with a Holy spell! Requires Experience Points!; +15% Holy Spell Power | crafting, 1 loot table |
| [[item:traveloptics:ice_echo]] | T.O Magic 'n Extras | Slot: Charm; Right-click to imbue with an Ice spell! Requires Experience Points!; +15% Ice Spell Power | crafting, 1 loot table |
| [[item:traveloptics:lightning_echo]] | T.O Magic 'n Extras | Slot: Charm; Right-click to charge it with a Lightning spell! Requires Experience Points!; +15% Lightning Spell Power | crafting, 1 loot table |
| [[item:traveloptics:lightning_spellweave_ingot]] | T.O Magic 'n Extras | Crafting Item | 1 loot table |
| [[item:traveloptics:nature_echo]] | T.O Magic 'n Extras | Slot: Charm; Right-click to imbue with a Nature spell! Requires Experience Points!; +15% Nature Spell Power | crafting, 1 loot table |
| [[item:traveloptics:pyro_spellweave_ingot]] | T.O Magic 'n Extras | Crafting Item | 2 loot tables |
| [[item:traveloptics:verdant_spellweave_ingot]] | T.O Magic 'n Extras | Crafting Item | 2 loot tables |
| [[item:traveloptics:void_spellweave_ingot]] | T.O Magic 'n Extras | Crafting Item | 2 loot tables |
