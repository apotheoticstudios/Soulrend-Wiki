---
{
  "title": "Enchanting (Chapter)",
  "navTitle": "Enchanting Module",
  "summary": "Legendary Armoury chapter on Apotheosis enchanting: the bookshelf families, infusion, tomes and the enchantment libraries.",
  "aliases": ["Enchanting Module", "Apotheosis Enchanting"],
  "infobox": {
    "item": "apotheosis:hellshelf",
    "itemRows": false,
    "rows": [
      ["Group", "Legendary Armoury"],
      ["Opened from", "[[progression/act-i-awakening/forging-your-path|Forging Your Path]] (Act I)"],
      ["Quests", "37"],
      ["Rewards", "XP levels, shelf materials, gems"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/apotheosis.snbt (37 quests; "Apotheosis Enchanting" depends on act_1 "Forging Your Path"; tasks, dependencies, descriptions and rewards as listed)
  config/ftbquests/quests/chapters/act_1.snbt Forging Your Path (open_book 6B086EB4C1B336F4 = this chapter)
  kubejs/server_scripts/recipes/misc_utility.js (Soulrend's Dormant Deepshelf recipe)
-->
The **Enchanting Module** is a Legendary Armoury chapter that teaches Apotheosis enchanting. Apotheosis replaces plain bookshelves with shelf blocks that set three stats around an enchanting table:

- **Eterna**, the enchanting level;
- **Quanta**, how much the result can swing, "kinda like gambling with your experience";
- **Arcana**, which makes rare enchantments more common.

The chapter walks up each shelf family, then covers infusion, tomes and the libraries.

## Requirements

- [[progression/act-i-awakening/forging-your-path|Forging Your Path]] in Act I links to **Apotheosis Enchanting** (5 XP levels and a guide book). Every quest starts there.

## Shelves

Each quest asks for one block and needs the quest before it.

| Family | Quests, in order | What the quest text says |
| --- | --- | --- |
| Start | [[item:minecraft:enchanting_table]] (a Diamond, 10 XP levels) | An enchanting table and 15 shelves to start |
| Sea | [[item:apotheosis:seashelf]] → [[item:apotheosis:infused_seashelf]] → [[item:apotheosis:crystal_seashelf]] or [[item:apotheosis:heart_seashelf]] | Eterna and Arcana; the Heart-Forged Seashelf adds **Rectification**, which shifts Quanta's swings up or down |
| Hell | [[item:apotheosis:hellshelf]] → [[item:apotheosis:infused_hellshelf]] → [[item:apotheosis:glowing_hellshelf]], [[item:apotheosis:blazing_hellshelf]] or [[item:apotheosis:sightshelf]] → [[item:apotheosis:sightshelf_t2]] | Quanta; Blazing Hellshelves remove the enchanting clues, and the Shelves of Sight show more of them |
| Modifier | [[item:apotheosis:melonshelf]] → [[item:apotheosis:beeshelf]] → [[item:apotheosis:stoneshelf]] | Melonshelves lower Eterna and Quanta, Beeshelves max out Quanta, Stoneshelves lower Eterna and Arcana |
| Deep | [[item:apotheosis:dormant_deepshelf]] (needs the best Hell and Sea shelves) → [[item:apotheosis:deepshelf]] → [[item:apotheosis:echoing_deepshelf]] or [[item:apotheosis:soul_touched_deepshelf]] → [[item:apotheosis:echoing_sculkshelf]] / [[item:apotheosis:soul_touched_sculkshelf]] | High stats in all three; Echoing raises Arcana, Soul-Touched raises Quanta |
| Treasure | [[item:apotheosis:treasure_shelf]] (after the Deepshelf) | Treasure enchantments such as Mending |
| Filter | [[item:apotheosis:filtering_shelf]] (after the Infused Seashelf) | No stats; books placed in it remove those enchantments from the pool |
| End | [[item:apotheosis:infused_breath]] (needs both Sculkshelves and the Treasure shelf) → [[item:apotheosis:endshelf]] → [[item:apotheosis:pearl_endshelf]] or [[item:apotheosis:draconic_endshelf]] | The highest Eterna; the Draconic Endshelf has the highest cap |
| Library | [[item:apotheosis:library]] (after the Endshelf) → [[item:apotheosis:ender_library]] | Crafted from infused shelves to raise the enchantment cap; the Library of Alexandria is infused at exactly 50 Eterna, 45–50% Quanta and 100% Arcana, and its quest gives 100 XP levels |

Several quests explain **infusion**: an item placed in the enchanting table with the right Eterna, Quanta and Arcana (and enough XP levels) turns into its infused version. The Infused Hellshelf needs at least 22.5 Eterna and 30% Quanta, the Deepshelf at least 30 Eterna, 40% Quanta and 40% Arcana, and Infused Dragon's Breath at least 40 Eterna, 15–25% Quanta and 60% Arcana.

Soulrend changes one recipe: the Dormant Deepshelf is made from books, deepslate and red nether bricks.

```recipe
{ "station": "crafting_table", "grid": ["BCB", "AAA", "BCB"], "key": { "A": "minecraft:book", "B": "#apotheosis:deepslate", "C": "minecraft:red_nether_bricks" }, "output": "apotheosis:dormant_deepshelf" }
```

## Tomes

"What Are Tomes?" (have a Book; 32 Books) opens five quests. Tomes are used in an anvil.

| Quest | Items | Rewards |
| --- | --- | --- |
| Armor Tomes | [[item:apotheosis:helmet_tome]], [[item:apotheosis:chestplate_tome]], [[item:apotheosis:leggings_tome]], [[item:apotheosis:boots_tome]] | 20 XP levels |
| Weapon Tomes | [[item:apotheosis:weapon_tome]], [[item:apotheosis:bow_tome]] | 10 XP levels |
| Tool Tomes | [[item:apotheosis:pickaxe_tome]], [[item:apotheosis:fishing_tome]] | 10 XP levels |
| Misc Tome | [[item:apotheosis:other_tome]] | 5 XP levels |
| Tome of Scrapping → Superior Scrapping → Extraction | [[item:apotheosis:scrap_tome]], [[item:apotheosis:improved_scrap_tome]], [[item:apotheosis:extraction_tome]] | 5 XP levels; 5 experience points; 15 XP levels |

The scrapping tomes pull enchantments off an item: the Tome of Scrapping keeps half and breaks the item, the Superior version keeps all of them, and the Tome of Extraction keeps all without breaking the item.

## Tips

- The Cryptic Eye for [[progression/side-chapters/journey-to-the-end|Journey To The End]] is made by infusing an Eye of Ender at 20–25 Eterna, 10% Quanta and 25–30% Arcana.
- The [[item:traveloptics:obsidian_bookshelf]] from Act IV's [[progression/act-iv-beyond-reality/void-cathedral|Void Cathedral]] adds 15 Eterna.
