---
{
  "title": "Shriving Stones",
  "summary": "A Shriving Stone and one of 35 unique items in a crafting grid give the item back with all of its locked spells unlocked.",
  "items": ["irons_spellbooks:shriving_stone"],
  "icon": "irons_spellbooks:shriving_stone"
}
---
<!-- sources:
  kubejs/server_scripts/magic/magic_fixes.js (SHRIVING_UNLOCKABLES: 35 ids; shapeless item + irons_spellbooks:shriving_stone; modifyResult copies the NBT and sets "locked" to false for every spell; recipe ids soulrend:shriving_unlock_<mod>_<item>)
  content/items/magic/magic-stations.md (Arcane Anvil removal)
-->

**Shriving Stones** ([[item:irons_spellbooks:shriving_stone]]) have a second use in Soulrend. Besides stripping spells at an Arcane Anvil, they unlock the locked spells of 35 unique weapons, staffs and spellbooks.

## How it works

Put the item and a Shriving Stone anywhere in a crafting grid. The result is the same item with its data copied and the `locked` flag cleared on every spell in its Iron's Spells 'n Spellbooks spell container. The stone is consumed.

A Shriving Stone used in an [[items/magic/magic-stations|Arcane Anvil]] instead removes an item's imbued spells and upgrades.

## Unlockable items

| Source | Items |
| --- | --- |
| Traveloptics weapons | Mechanized Wraithblade, Flames of Eldritch, Harbinger's Wrath, Scourge of the Sands, Thorns of Oblivion, Voidstrike Reaper, Infernal Devastator, Galenic Polarizer, Charged Sands, Cursed Wraithblade, Wand of Final Light, Stellothorn, Trident of the Eternal Maelstrom, Gauntlet of Extinction, Abyssal Tidecaller, The Obliterator |
| Traveloptics spellbooks | Chronicles of the Firelord, The Accused Codex, Archive of Abyssal Secrets, Codex of the Crushing Depths |
| Other spellbooks | Codex of Shattered Horizons (Geomancy Plus), Divine Manuscript, Necronomicon, Evoker Spell Book |
| Iron's Spellbooks weapons | Spellbreaker, Amethyst Rapier, Boreal Blade, Twilight Gale, Hellrazor, Hither Thither Wand |
| Dacxirons staffs | Scepter of Compensation, Pyromancer Staff, Corroding Flame Staff, Fairy Wand, Sanguine Scepter |

## Related

- [[faq/magic/what-are-shriving-stones|What are Shriving Stones?]]
- [[items/magic/spellbooks|Spellbooks]]
