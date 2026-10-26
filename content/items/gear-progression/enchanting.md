---
{
  "title": "Enchanting (Items)",
  "summary": "Enchanting (Items): 52 items from the Soulrend modpack.",
  "items": [
    "apotheosis:beeshelf",
    "apotheosis:blazing_hellshelf",
    "apotheosis:crystal_seashelf",
    "apotheosis:deepshelf",
    "apotheosis:dormant_deepshelf",
    "apotheosis:draconic_endshelf",
    "apotheosis:echoing_deepshelf",
    "apotheosis:echoing_sculkshelf",
    "apotheosis:ender_library",
    "apotheosis:endshelf",
    "apotheosis:filtering_shelf",
    "apotheosis:glowing_hellshelf",
    "apotheosis:heart_seashelf",
    "apotheosis:hellshelf",
    "apotheosis:infused_hellshelf",
    "apotheosis:infused_seashelf",
    "apotheosis:library",
    "apotheosis:melonshelf",
    "apotheosis:pearl_endshelf",
    "apotheosis:rectifier",
    "apotheosis:rectifier_t2",
    "apotheosis:rectifier_t3",
    "apotheosis:seashelf",
    "apotheosis:sightshelf",
    "apotheosis:sightshelf_t2",
    "apotheosis:soul_touched_deepshelf",
    "apotheosis:soul_touched_sculkshelf",
    "apotheosis:stoneshelf",
    "apotheosis:treasure_shelf",
    "apotheotic_additions:gilded_aerogel_skyshelf",
    "apotheotic_additions:hollowed_barrel_shelf",
    "apotheotic_additions:infused_skyshelf",
    "apotheotic_additions:infused_thornshelf",
    "apotheotic_additions:nuclear_barrel_shelf",
    "apotheotic_additions:occult_thornshelf",
    "apotheotic_additions:sacrificial_shelf",
    "apotheotic_additions:terra_shelf",
    "apotheotic_additions:thornshelf",
    "apotheotic_additions:void_shelf",
    "apotheotic_additions:wavebinders_shelf",
    "apotheosis:boots_tome",
    "apotheosis:bow_tome",
    "apotheosis:chestplate_tome",
    "apotheosis:extraction_tome",
    "apotheosis:fishing_tome",
    "apotheosis:helmet_tome",
    "apotheosis:improved_scrap_tome",
    "apotheosis:leggings_tome",
    "apotheosis:other_tome",
    "apotheosis:pickaxe_tome",
    "apotheosis:scrap_tome",
    "apotheosis:weapon_tome"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json
  game-data/loot-tables.json, game-data/recipes.json (apotheosis:enchanting infusions with requirements and max_requirements)
  Apotheosis jar: lang gui.apotheosis.enchant.*, info.apotheosis.*; EnchModule (shelves and tomes crafted through Placebo's RecipeHelper)
  ApotheoticAdditions jar: data/apotheotic_additions/recipes/shelves/*skyshelf.json (forge:mod_loaded aether)
-->

**Enchanting (Items)** lists Apotheosis's 52 enchanting shelves and tomes, which turn the enchanting table into a tunable station.

## Usage

Apotheosis replaces the enchanting table's single bookshelf count with several stats. Shelves placed around the table, the way vanilla bookshelves are, add to them, and the table shows the totals:

- **Eterna** sets the highest enchanting level the table can reach. Each shelf adds Eterna only up to its own Max, so higher shelves are needed for higher levels.
- **Quanta** adds randomness to how strong the enchantments roll, up or down.
- **Arcana** makes rare enchantments more common and adds more enchantments per item.
- **Rectification** reduces how much Quanta can lower the result.
- **Enchanting Clues** show more of the enchantments an option will give before choosing it.

Some shelves lower a stat on purpose, for example the Melonshelf and Stoneshelf, so a table can be tuned.

### Special shelves and tomes

- The **Enchantment Library** and **Library of Alexandria** store enchanted books, and any enchantment they hold can be taken back out, up to their level capacity (XVI and XXXI).
- The **Filtering Shelf** holds enchanted books whose enchantments then can't appear at the table, and the **Treasure Shelf** allows treasure enchantments.
- **Tomes** for a slot (helmet, weapon, bow and so on) are enchanted like a book but only receive enchantments for that kind of item.
- The **Tome of Scrapping** pulls half of an item's enchantments onto a book and destroys the item; the Tome of Superior Scrapping pulls all of them. The **Tome of Extraction** pulls all of them and keeps the item.

### Infusion

Some items are made by **infusing** another item in an enchanting table. The table's stats must reach the recipe's values, and where a range is given, stay inside it:

| Item | Becomes | Eterna | Quanta | Arcana |
| --- | --- | --- | --- | --- |
| Hellshelf | Infused Hellshelf | 22.5 | 30% | 0% |
| Seashelf | Infused Seashelf | 22.5 | 15% | 10% |
| Thornshelf | Infused Thornshelf | 17.5 | 10% | 0% |
| Dormant Deepshelf | Deepshelf | 30 | 40% | 40% |
| Enchantment Library | Library of Alexandria | 50 | 45–50% | 100% |
| Tome of Scrapping | Tome of Superior Scrapping | 22.5 | 25–50% | 35% |
| Tome of Superior Scrapping | Tome of Extraction | 30 | 25–75% | 45% |

Infusion also makes the [[items/gear-progression/coins-and-apples|Infused and Ascended Coins]], three [[items/gear-progression/sigils|sigils]] and the Gem Case of House Fabergé.

The **Gilded Aerogel Skyshelf** and **Infused Skyshelf** need the Aether mod, which Soulrend doesn't include, so they can't be obtained.

<!-- TODO: most shelf and tome crafting recipes are registered in Apotheosis's code (EnchModule via Placebo) and are missing from game-data/recipes.json until the next export with the updated wiki_export.js -->

## Enchanting shelves

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:apotheosis:beeshelf]] | Apotheosis | - Eterna: -15.00; - Quanta: +100.00% |  |
| [[item:apotheosis:blazing_hellshelf]] | Apotheosis | - Eterna: +4.00 (Max 30.00); - Quanta: +5.00%; - Enchanting Clues: -1 |  |
| [[item:apotheosis:crystal_seashelf]] | Apotheosis | - Eterna: +2.00 (Max 30.00); - Quanta: +4.00%; - Arcana: +2.00% |  |
| [[item:apotheosis:deepshelf]] | Apotheosis | - Eterna: +2.50 (Max 35.00); - Quanta: +5.00%; - Arcana: +5.00% | crafting |
| [[item:apotheosis:dormant_deepshelf]] | Apotheosis | - Eterna: +1.00 (Max 15.00) |  |
| [[item:apotheosis:draconic_endshelf]] | Apotheosis | - Eterna: +10.00 (Max 50.00) |  |
| [[item:apotheosis:echoing_deepshelf]] | Apotheosis | - Eterna: +2.50 (Max 37.50); - Arcana: +15.00% | crafting |
| [[item:apotheosis:echoing_sculkshelf]] | Apotheosis | - Eterna: +5.00 (Max 40.00); - Quanta: +5.00%; - Arcana: +15.00%; - Enchanting Clues: +1 | crafting |
| [[item:apotheosis:ender_library]] | Apotheosis | Level Capacity: XXXI | crafting |
| [[item:apotheosis:endshelf]] | Apotheosis | - Eterna: +2.50 (Max 45.00); - Quanta: +5.00%; - Arcana: +5.00% | crafting |
| [[item:apotheosis:filtering_shelf]] | Apotheosis | Insert enchanted books to prevent them from appearing in the table. | crafting |
| [[item:apotheosis:glowing_hellshelf]] | Apotheosis | - Eterna: +2.00 (Max 30.00); - Quanta: +2.00%; - Arcana: +4.00% |  |
| [[item:apotheosis:heart_seashelf]] | Apotheosis | - Eterna: +3.00 (Max 30.00); - Arcana: +10.00%; - Rectification: -5.00% |  |
| [[item:apotheosis:hellshelf]] | Apotheosis | - Eterna: +1.50 (Max 22.50); - Quanta: +3.00% |  |
| [[item:apotheosis:infused_hellshelf]] | Apotheosis | - Eterna: +1.75 (Max 27.00); - Quanta: +1.75% | crafting |
| [[item:apotheosis:infused_seashelf]] | Apotheosis | - Eterna: +1.75 (Max 27.00); - Arcana: +1.75% | crafting |
| [[item:apotheosis:library]] | Apotheosis | Level Capacity: XVI | crafting |
| [[item:apotheosis:melonshelf]] | Apotheosis | - Eterna: -1.00; - Quanta: -10.00% |  |
| [[item:apotheosis:pearl_endshelf]] | Apotheosis | - Eterna: +5.00 (Max 45.00); - Quanta: +7.50%; - Arcana: +7.50% |  |
| [[item:apotheosis:rectifier]] | Apotheosis | - Rectification: +10.00% | crafting |
| [[item:apotheosis:rectifier_t2]] | Apotheosis | - Rectification: +15.00% | crafting |
| [[item:apotheosis:rectifier_t3]] | Apotheosis | - Rectification: +25.00% | crafting |
| [[item:apotheosis:seashelf]] | Apotheosis | - Eterna: +1.50 (Max 22.50); - Arcana: +2.00% |  |
| [[item:apotheosis:sightshelf]] | Apotheosis | - Enchanting Clues: +1 | crafting |
| [[item:apotheosis:sightshelf_t2]] | Apotheosis | - Enchanting Clues: +2 | crafting |
| [[item:apotheosis:soul_touched_deepshelf]] | Apotheosis | - Eterna: +2.50 (Max 37.50); - Quanta: +15.00% | crafting |
| [[item:apotheosis:soul_touched_sculkshelf]] | Apotheosis | - Eterna: +5.00 (Max 40.00); - Quanta: +15.00%; - Arcana: +5.00%; - Rectification: +5.00% | crafting |
| [[item:apotheosis:stoneshelf]] | Apotheosis | - Eterna: -1.50; - Arcana: -7.50% | crafting |
| [[item:apotheosis:treasure_shelf]] | Apotheosis | - Quanta: -10.00%; - Arcana: +10.00%; - Allows Treasure Enchantments | crafting |
| [[item:apotheotic_additions:gilded_aerogel_skyshelf]] | Apotheotic Additions |  |  |
| [[item:apotheotic_additions:hollowed_barrel_shelf]] | Apotheotic Additions | - Eterna: +1.50 (Max 17.50); - Quanta: +1.50% | crafting |
| [[item:apotheotic_additions:infused_skyshelf]] | Apotheotic Additions |  |  |
| [[item:apotheotic_additions:infused_thornshelf]] | Apotheotic Additions | - Eterna: +2.25 (Max 30.00); - Quanta: +2.00% | crafting |
| [[item:apotheotic_additions:nuclear_barrel_shelf]] | Apotheotic Additions | - Eterna: +3.00 (Max 35.00); - Quanta: +35.00%; - Enchanting Clues: -1 | crafting |
| [[item:apotheotic_additions:occult_thornshelf]] | Apotheotic Additions | - Eterna: +4.50 (Max 35.00); - Quanta: +2.25%; - Arcana: +5.00%; - Enchanting Clues: +1 | crafting |
| [[item:apotheotic_additions:sacrificial_shelf]] | Apotheotic Additions | - Eterna: +7.50 (Max 50.00); - Quanta: +7.50%; - Arcana: -10.00%; - Enchanting Clues: -2 | crafting |
| [[item:apotheotic_additions:terra_shelf]] | Apotheotic Additions | - Eterna: -5.00; - Quanta: +100.00%; - Arcana: +2.50% | crafting |
| [[item:apotheotic_additions:thornshelf]] | Apotheotic Additions | - Eterna: +2.00 (Max 17.50); - Quanta: +1.00% | crafting |
| [[item:apotheotic_additions:void_shelf]] | Apotheotic Additions | - Eterna: +6.00 (Max 50.00); - Quanta: +6.00%; - Arcana: +20.00%; - Enchanting Clues: +2 | crafting |
| [[item:apotheotic_additions:wavebinders_shelf]] | Apotheotic Additions | - Eterna: +5.00 (Max 50.00); - Quanta: -1.00%; - Arcana: +15.00%; - Rectification: -10.00% | crafting |

## Enchanting tomes

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:apotheosis:boots_tome]] | Apotheosis | Accepts boot enchantments |  |
| [[item:apotheosis:bow_tome]] | Apotheosis | Accepts bow enchantments. |  |
| [[item:apotheosis:chestplate_tome]] | Apotheosis | Accepts chestplate enchantments. |  |
| [[item:apotheosis:extraction_tome]] | Apotheosis | Extracts all of the enchantments from an item. Does not destroy the item. | crafting |
| [[item:apotheosis:fishing_tome]] | Apotheosis | Accepts fishing pole enchantments. |  |
| [[item:apotheosis:helmet_tome]] | Apotheosis | Accepts helmet enchantments. |  |
| [[item:apotheosis:improved_scrap_tome]] | Apotheosis | Extracts all of the enchantments from an item. Destroys the item in the process. | crafting |
| [[item:apotheosis:leggings_tome]] | Apotheosis | Accepts legplate enchantments. |  |
| [[item:apotheosis:other_tome]] | Apotheosis | Accepts miscellaneous enchantments. |  |
| [[item:apotheosis:pickaxe_tome]] | Apotheosis | Accepts pickaxe enchantments. |  |
| [[item:apotheosis:scrap_tome]] | Apotheosis | Extracts half of the enchantments from an item. Destroys the item in the process. |  |
| [[item:apotheosis:weapon_tome]] | Apotheosis | Accepts weapon enchantments. |  |
