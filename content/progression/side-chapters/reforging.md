---
{
  "title": "Reforging",
  "summary": "Legendary Armoury chapter on Apotheosis affixes: gem dust, the salvaging and reforging tables, sigils, augments and boss gems.",
  "aliases": ["Affix Enchanting", "Reforging (Chapter)"],
  "infobox": {
    "item": "apotheosis:reforging_table",
    "itemRows": false,
    "rows": [
      ["Group", "Legendary Armoury"],
      ["Opened from", "[[progression/act-i-awakening/a-stone-imbued-with-magic|A Stone Imbued with Magic]] (Act I)"],
      ["Quests", "38"],
      ["Rewards", "Gems, slates, gem dust, a Netherite Ingot, a Perfect Gem"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/affix_enchanting.snbt (38 quests; "Affix Enchanting" depends on act_1 "A Stone Imbued with Magic"; tasks, dependencies, descriptions and rewards as listed; the 13 crafted boss gems apotheotic_additions:crafted/*; Esoteric Reforging Table depends on duties "Galactic Core")
  kubejs/server_scripts/magic/dacxoptics_recipes.js (Esoteric Reforging Table recipe)
-->
**Reforging** is the Legendary Armoury chapter on Apotheosis gear: affixes (the random bonus stats on gear), rarities, gems and sockets. It starts with gem dust and the Salvaging Table and ends with the Esoteric Reforging Table, which needs a material from [[progression/act-v-duties|Act V]].

## Requirements

- [[progression/act-i-awakening/a-stone-imbued-with-magic|A Stone Imbued with Magic]] in Act I links to **Affix Enchanting** ("Not your average upgrades"), whose tasks are a checkmark and a [[item:minecraft:smithing_table]].

> [!LORE] Affix Enchanting (Reforging)
> This questline will show you how to use the Reforging Tables which will be a great help at surviving higher level mobs!

## The tables

| Quest | Requires | Item | Rewards |
| --- | --- | --- | --- |
| Gem Dust ("Smashing success!") | Affix Enchanting | [[item:apotheosis:gem_dust]] | 16 Gem Dust |
| Salvaging Table ("Recycling") | Gem Dust | [[item:apotheosis:salvaging_table]] | Chipped Gems |
| Gem-Fused Slate ("A clean slate") | Salvaging Table | [[item:apotheosis:gem_fused_slate]] | 12 Gem Dust, 12 Gem-Fused Slate |
| Gem Cutting Table | Salvaging Table | [[item:apotheosis:gem_cutting_table]] | Two rolls on Cracked Gems |
| Rarity Levels Of The Realms | Salvaging Table | Checkmark | One each of the common, uncommon and rare rarity materials |
| Simple Reforging Table ("Finally!") | Sigil of Rebirth | [[item:apotheosis:simple_reforging_table]] | A Chipped Gem of your choice, Flawed Gems |
| Reforging Table ("Fancy") | Simple Reforging Table | [[item:apotheosis:reforging_table]] | A Netherite Ingot, 10 XP levels, Flawed Gems |
| Ancient Reforging Table ("Fancier") | Reforging Table | [[item:ancientreforging:ancient_reforging_table]] | A Manifestation of Infinity |
| Augmenting Table | Sigil of Enhancement | [[item:apotheosis:augmenting_table]] | A Perfect Gem of your choice |
| Esoteric Reforging Table ("Finally!") | Ancient Reforging Table and [[progression/act-v-duties/esoteric-material\|Galactic Core]] (Act V) | [[item:esotericreforging:esoteric_reforging_table]] | None |

The quest text gives the basics: drop an anvil on unwanted gems to break them into Gem Dust; the Salvaging Table breaks affix gear and gems into rarity materials; the Simple Reforging Table is crafted from 1 Iron, an Enchanting Table, 3 Smooth Stone and 2 Gem Dust; the Reforging Table reforges up to Mythic, the Ancient table up to Ancient.

> [!LORE] Rarity Levels Of The Realms (Reforging)
> In the Overworld you'll find mostly up to Rare tiered gear. In the Nether you'll find up to Epic, Mythic gear, and sometimes Ancient/Heirloom tier. The End is where you'll find the bulk of your Ancient Gear pieces.

## Sigils

| Sigil | Requires | What the quest says it does |
| --- | --- | --- |
| [[item:apotheosis:sigil_of_withdrawal]] | Gem-Fused Slate | Removes all gems from an item (smithing table) |
| [[item:apotheosis:sigil_of_rebirth]] | Gem-Fused Slate | Fuel for the reforging tables, like lapis for enchanting |
| [[item:apotheosis:sigil_of_unnaming]] | Gem-Fused Slate | Removes the affix name from an item |
| [[item:apotheosis:sigil_of_enhancement]] | Reforging Table | Fuel for the Augmenting Table |
| [[item:apotheosis:sigil_of_socketing]] | Sigil of Withdrawal | Adds sockets, up to a cap per rarity (smithing table) |
| [[item:fallen_gems_affixes:sigil_of_severance]] | Sigil of Withdrawal | Removes sockets |
| [[item:fallen_gems_affixes:sigil_of_ascension]] | Sigil of Socketing | Turns an empty socket into an augment slot |
| [[item:fallen_gems_affixes:sigil_of_transmutation]] | Sigil of Socketing | Moves affixes to another weapon; the old weapon is destroyed |
| [[item:apotheotic_additions:gemboundsigil]] (Sigil of Awakening) | Sigil of Unnaming | Combined with artifact shards and boss materials, makes a special gem |

Most sigil quests reward two gem rolls.

## Augments and boss gems

- **Augments:** five quests after the Sigil of Ascension, one per [[item:fallen_gems_affixes:augment]] type, each worth a Chipped Gems roll.
- **Boss gems:** thirteen quests after the Sigil of Awakening, one per crafted boss gem: Captain Cornelia, the Ender Dragon, Frostmaw, the Harbinger, Ignis, the Leviathan, Maledictus, the Netherite Monstrosity, the Ancient Remnant, Umvuthi (Sunbird), the Warden, the Wither and the Ferrous Wroughtnaut. Each is worth a Chipped Gems roll.

See [[features/gear-and-crafting/reforging-and-affixes|Reforging and Affixes]], [[features/gear-and-crafting/gems-and-sigils|Gems and Sigils]] and [[items/gear-progression/reforging-tables|Reforging Tables]].
