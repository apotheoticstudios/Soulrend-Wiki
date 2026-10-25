---
{
  "title": "Your First Backpack",
  "summary": "Act I quest for the leather and string of a Traveler's Backpack; it opens the Backpacks chapter. Also covers Sleeping Bag.",
  "aliases": ["Your First Backpack!", "More pockets for my rocks!", "Sleeping Bag (Quest)"],
  "infobox": {
    "item": "travelersbackpack:standard",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/act-i-awakening|Act I – Awakening]]"],
      ["Requires", "[[progression/act-i-awakening/find-a-place-to-call-home|Find a Place To Call Home]]"],
      ["Tasks", "4 Leather, 1 String"],
      ["Rewards", "A link to the [[progression/side-chapters/backpacks|Backpacks]] chapter"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/act_1.snbt "Your First Backpack!" (subtitle, description, tasks minecraft:leather count 4 and minecraft:string with no count field = 1; reward: open_book Backpacks "Personalizing Your Bag")
  config/ftbquests/quests/chapters/act_1.snbt "Sleeping Bag" (subtitle "First Night...", advancement travelersbackpack:sleeping_bag, 1 XP level)
  mods/ftb-quests-forge-2001.4.22.jar ItemTask.readData (count = max(count, 1); the stack's own Count is ignored)
-->
**Your First Backpack!** ("More pockets for my rocks!") is an Act I quest that asks for the materials of a [[item:travelersbackpack:standard]]. Its only reward is a button to the [[progression/side-chapters/backpacks|Backpacks]] chapter, which covers backpack upgrades and the decorated backpack types. It also leads to [[progression/act-i-awakening/explorers-compass|Diamond Pickaxe and Explorer's Compass]].

## Requirements

- [[progression/act-i-awakening/find-a-place-to-call-home|Find a Place To Call Home]]

## Objectives

- Have 4 [[item:minecraft:leather]].
- Have 1 [[item:minecraft:string]]. The quest file shows a stack of 4, but FTB Quests only counts the task's own count, which is 1.

The quest doesn't ask for the backpack itself.

> [!LORE] Your First Backpack! (Act I)
> You're gonna need more storage space during a mining outting or while going through stuctures.
> Worry not, for we can build and upgrade a backpack to help us carry all that extra junk!

## Rewards

- A "Move to Backpack Chapter" button, which opens the first quest of the [[progression/side-chapters/backpacks|Backpacks]] chapter.

## Walkthrough

1. Collect the leather and string.
2. Craft the backpack. It has several recipes, with or without tanks and a sleeping bag:

   {{recipes travelersbackpack:standard limit=2}}

## Sleeping Bag

**Sleeping Bag** ("First Night...") is a separate quest that also depends on Find a Place To Call Home. It completes with Traveler's Backpack's Sleeping Bag advancement and gives 1 XP level.

> [!LORE] Sleeping Bag (Act I)
> The Realms of Soulrendia are unforgiving, and few survive long without proper rest.
>
> A Sleeping Bag allows you to recover during your travels without settling down. The path ahead is dangerous, so make sure you're ready for whatever awaits beyond the darkness.

## Next

- [[progression/act-i-awakening/explorers-compass#Diamond Pickaxe|Diamond Pickaxe]]
- [[progression/side-chapters/backpacks|Backpacks]] (side chapter)
