---
{
  "title": "Bottled Nether Essence",
  "summary": "Act II quests for Crying Obsidian, Obsidian Infused Bottles and the Bottled Nether Essence that the Nether seal needs.",
  "aliases": ["Crying Obsidian (Quest)", "Obsidian Infused Bottle (Quest)", "Haunting"],
  "infobox": {
    "item": "nether_remastered:bottled_nether_essence",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/act-ii-first-steps|Act II – First Steps]]"],
      ["Requires", "[[progression/act-ii-first-steps/the-real-journey-begins|The Real Journey Begins]]"],
      ["Quests", "Crying Obsidian → Obsidian Infused Bottle → Bottled Nether Essence"],
      ["Rewards", "A Stove, Onion Crates, 4 XP levels, a roll on Rare Loot"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/act_2.snbt: Crying Obsidian (subtitle "Who's Cutting Onions", task minecraft:crying_obsidian, count field absent = 1; rewards farmersdelight:stove, 3 experience points, 2 onion crates), Obsidian Infused Bottle (subtitle "Don't drop them...", 3 XP levels), Bottled Nether Essence (subtitle "Haunting", description, 1 XP level, Rare Loot)
  config/ftbquests/quests/chapters/act_2.snbt (The Warden depends on Crying Obsidian; the Nether Crystal quest depends on Obsidian Infused Bottle or The Warden)
  config/nether remastered.toml ["Nether Essence Drops"] (zombie, skeleton, husk, zombie_villager, zombified_piglin, zoglin, stray, skeleton_horse, drowned)
  mods/nether_remastered-2.6-forge-1.20.1.jar CaptureEssenceProcedure (checks the off-hand item for an Obsidian Infused Bottle, removes one, gives one Bottled Nether Essence)
  game-data/recipes.json nether_remastered:obsidian_infused_bottle (2 glass + 1 crying obsidian -> 3), nether_remastered:sotu_recipe (4 Bottled Nether Essence)
  kubejs/server_scripts/recipes/misc_utility.js (crying obsidian from obsidian and 4 spider eyes)
-->
**Bottled Nether Essence** is the last of three short [[progression/act-ii-first-steps|Act II]] quests that make the essence for the [[progression/act-ii-first-steps/the-seal-of-the-underworld|Seal of the Underworld]]. Crying Obsidian makes Obsidian Infused Bottles, and a bottle held in the off hand fills with essence when its holder kills an undead mob.

## Requirements

- [[progression/act-ii-first-steps/the-real-journey-begins|The Real Journey Begins]]

## Objectives

| Quest | Requires | Task | Rewards |
| --- | --- | --- | --- |
| Crying Obsidian ("Who's Cutting Onions") | The Real Journey Begins | Have 1 [[item:minecraft:crying_obsidian]] | [[item:farmersdelight:stove]], 2 [[item:farmersdelight:onion_crate]], 3 experience points |
| Obsidian Infused Bottle ("Don't drop them...") | Crying Obsidian | Have an [[item:nether_remastered:obsidian_infused_bottle]] | 3 XP levels |
| Bottled Nether Essence ("Haunting") | Obsidian Infused Bottle | Have a [[item:nether_remastered:bottled_nether_essence]] | 1 XP level, a roll on [[progression/reward-tables#Rare Loot\|Rare Loot]] |

> [!LORE] Crying Obsidian (Act II)
> Crying obsidian is our first step to help get us into the Nether.
> You'll be able to find it in some structures or around ruined Nether Portals.

> [!LORE] Bottled Nether Essence (Act II)
> Hold an Obsidian Infused Bottle in your off-hand while slaying Zombies, Skeletons, and Spiders to collect Bottled Nether Essence.

## Walkthrough

1. Get Crying Obsidian from ruined portals or structures, or craft it. Soulrend adds a recipe:

   ```recipe
   { "station": "crafting_table", "grid": [" A ", "ABA", " A "], "key": { "A": "minecraft:spider_eye", "B": "minecraft:obsidian" }, "output": "minecraft:crying_obsidian" }
   ```

2. Craft Obsidian Infused Bottles. One Crying Obsidian makes three:

   {{recipes nether_remastered:obsidian_infused_bottle}}

3. Put the bottles in your off hand and kill undead. Each kill of a listed mob turns one bottle into one Bottled Nether Essence. The mobs that count are zombies, husks, zombie villagers, drowned, skeletons, strays, skeleton horses, zombified piglins and zoglins.
4. Make **four** essences, not one. The seal's recipe uses four.

> [!IMPORTANT]
> The quest text says spiders work, but Soulrend's Nether Remastered config doesn't list spiders. Only the undead mobs above fill the bottle.

## Next

- [[progression/act-ii-first-steps/the-warden|The Warden]] (opened by Crying Obsidian)
- The Obsidian Infused Bottle quest also unlocks the [[progression/act-ii-first-steps/the-warden#The Nether Crystal|Nether Crystal]] quest.
- [[progression/act-ii-first-steps/the-seal-of-the-underworld|The Seal of the Underworld]]
