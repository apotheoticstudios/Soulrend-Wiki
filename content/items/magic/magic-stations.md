---
{
  "title": "Magic Stations",
  "aliases": [
    "Inscription Table",
    "Scroll Forge",
    "Arcane Anvil",
    "Alchemist Cauldron"
  ],
  "summary": "Magic Stations: 4 items from the Soulrend modpack.",
  "items": [
    "irons_spellbooks:inscription_table",
    "irons_spellbooks:scroll_forge",
    "irons_spellbooks:arcane_anvil",
    "irons_spellbooks:alchemist_cauldron"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json
  game-data/loot-tables.json, game-data/recipes.json
  irons_spellbooks jar: InscriptionTableMenu, ScrollForgeMenu (ink + paper + focus; allowCrafting; getMinLevelForRarity), ArcaneAnvilMenu (scroll merging, imbuing, unique-item improvement, SpellSlotUpgradeItem, upgrade orbs up to MAX_UPGRADES, Shriving Stone), AlchemistCauldronTile (fill/empty 250 mB, getInkFromScroll, SCROLL_RECYCLE_CHANCE); lang item.irons_spellbooks.blood_vial.guide
  game-data/recipes.json (irons_spellbooks:alchemist_cauldron_brew / _fill / _empty)
  defaultconfigs/irons_spellbooks-server.toml (scrollRecycleChance 0.9, maxUpgrades 3, swordsConsumeMana, swordsCooldownMultiplier 0.5)
-->

**Magic Stations** lists the four Iron's Spells 'n Spellbooks work blocks: the Inscription Table and Scroll Forge for scrolls and spellbooks, the Arcane Anvil for upgrading, and the Alchemist Cauldron for ink, elixirs and recycling.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:irons_spellbooks:inscription_table]] | Iron's Spells 'n Spellbooks |  | crafting |
| [[item:irons_spellbooks:scroll_forge]] | Iron's Spells 'n Spellbooks |  | crafting |
| [[item:irons_spellbooks:arcane_anvil]] | Iron's Spells 'n Spellbooks |  | crafting |
| [[item:irons_spellbooks:alchemist_cauldron]] | Iron's Spells 'n Spellbooks |  | crafting |

## Inscription Table

[[item:irons_spellbooks:inscription_table]] (Iron's Spells 'n Spellbooks)

Puts spells into [[items/magic/spellbooks|spellbooks]]. Place a spellbook and a scroll, pick an empty slot, and the scroll's spell is written into it; the scroll is used up. Selecting a spell that is already inscribed offers it back as a scroll, which removes it from the book. Locked spells (those that unique books come with) can't be taken out.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes irons_spellbooks:inscription_table}}

## Scroll Forge

[[item:irons_spellbooks:scroll_forge]] (Iron's Spells 'n Spellbooks, uncommon)

Crafts scrolls. It takes ink, paper and a school's focus item (a Blaze Rod for Fire, an Echo Shard for Eldritch; the [[items/magic/spells|Spells]] page lists them all), then lists every spell of that school that allows crafting. The chosen spell comes out as a scroll at the lowest level of the ink's rarity, so better ink gives higher-level scrolls. Eldritch spells appear only after they have been learned.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes irons_spellbooks:scroll_forge}}

## Arcane Anvil

[[item:irons_spellbooks:arcane_anvil]] (Iron's Spells 'n Spellbooks, epic)

Combines two items:

- **Scroll + ink:** raises the scroll one level, if the ink matches the rarity of the next level.
- **Weapon or staff + scroll:** imbues the scroll's spell into an item that can hold one. The spell can then be cast from the item, costing mana, at half its normal cooldown in Soulrend.
- **Unique spellbook or weapon + scroll of one of its spells:** raises that spell one level.
- **Spellbook + spell slot improvement:** adds a spell slot, up to the improvement's limit (12 or 15).
- **Gear + [[items/magic/runes-orbs-and-inks|upgrade orb]]:** adds the orb's bonus to the item, up to 3 upgrades per item.
- **Item + [[item:irons_spellbooks:shriving_stone]]:** removes the item's imbued spells and upgrades.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes irons_spellbooks:arcane_anvil}}

## Alchemist Cauldron

[[item:irons_spellbooks:alchemist_cauldron]] (Iron's Spells 'n Spellbooks)

A cauldron for magic liquids. It holds fluids that bottles fill and empty 250 mB at a time, and brews when an item is used on it while it holds the right liquid:

- **Ink:** Common Ink with a copper ingot becomes Uncommon Ink, which with an iron ingot becomes Rare, then a gold ingot for Epic and an amethyst shard for Legendary.
- **Elixirs:** for example, an ender pearl turns potion into Evasion Elixir, and an oak log turns it into Oakskin Elixir. Some elixirs have greater versions, made by adding an amethyst shard, amethyst cluster or dragon's breath.
- **Scroll recycling:** a scroll put in turns into ink of its rarity. In Soulrend this works 90% of the time.
- **Blood:** mobs cooked inside it give blood for [[item:irons_spellbooks:blood_vial|Blood Vials]], the Blood school's focus.

### Obtaining

It is crafted (see below).

### Crafting

{{recipes irons_spellbooks:alchemist_cauldron}}
