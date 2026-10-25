---
{
  "title": "The Seal of the Underworld",
  "summary": "Act II's goal: craft the Seal of the Underworld from the four shards, the Nether Crystal and four essences, then use it to open the Nether.",
  "aliases": ["The Seal Of The Underworld", "You are worthy", "Seal of the Underworld (Quest)"],
  "infobox": {
    "item": "nether_remastered:seal_of_the_underworld_item",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/act-ii-first-steps|Act II – First Steps]]"],
      ["Requires", "The four shard quests and the Nether Crystal quest"],
      ["Task", "[[item:nether_remastered:seal_of_the_underworld_item]]"],
      ["Rewards", "10 XP levels, a long Fire Resistance potion"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/act_2.snbt: The Seal Of The Underworld (gear shape; subtitle "You are worthy"; depends on the Nether Crystal quest and the four shard item quests; description; task seal_of_the_underworld_item; rewards long Fire Resistance potion, 10 XP levels)
  config/ftbquests/quests/chapters/act_2.snbt shard item quests: Top-Left (min 1 of Act I Complete, Ice and Fire), Top-Right (min 2: Act I Complete, Fallen Myths), Bottom-Left (min 2 of Act I Complete, Ruins of Kamath, Pantheon of Sunleia), Bottom-Right (min 2 of Act I Complete, Sandworm Nest, Dragon Tower, Yeti Hideout); each rewards a Blessed Gold Ingot and a Flawed Gems roll and can't repeat
  game-data/recipes.json nether_remastered:sotu_recipe
  config/nether remastered.toml ("Consume Seal" = false; "Unworthy Message" = true)
  mods/nether_remastered-2.6-forge-1.20.1.jar NetherPortalTravelProcedure (checks the nether_remastered:seal_of_the_underworld advancement)
  mods/ftb-quests-forge-2001.4.22.jar Quest.checkDependencies (min_required_dependencies)
-->
**The Seal Of The Underworld** ("You are worthy") is the goal of [[progression/act-ii-first-steps|Act II]]. Soulrend's Nether is sealed: a Nether portal doesn't take a player there until they have used the [[item:nether_remastered:seal_of_the_underworld_item]]. The quest asks for the seal itself, and completing it leads to the end of the act.

## Requirements

The seal quest depends on five item quests, one for each rare ingredient. Each of them gives a [[item:dungeons_and_combat:blessed_gold_ingot]] and a roll on [[progression/reward-tables#Gem tables|Flawed Gems]].

| Item quest | Opens after | Where the item comes from |
| --- | --- | --- |
| Top-Left Shard ([[item:nether_remastered:seal_piece_1]]) | Act I Complete **or** the Ice and Fire checkmark | [[progression/act-ii-first-steps/dread-citadel\|Dread Citadel]] branch, or abandoned mineshaft chests (10%) |
| Top-Right Shard ([[item:nether_remastered:seal_piece_2]]) | Act I Complete **and** Fallen Myths | [[progression/act-ii-first-steps/frostmaw-shard\|Frostmaw]], or witches |
| Bottom-Left Shard ([[item:nether_remastered:seal_piece_3]]) | Two of: Act I Complete, finding the Ruins of Kamath, finding the Pantheon of Sunleia | [[progression/act-ii-first-steps/dungeons-and-combat-bosses\|Sunleia and Kamath]], or evokers |
| Bottom-Right Shard ([[item:nether_remastered:seal_piece_4]]) | Two of: Act I Complete, finding the Sandworm Nest, the Dragon Tower or the Yeti Hideout | [[progression/act-ii-first-steps/bosses-rise\|Bosses' Rise]], or pillager outpost chests (10%) |
| Nether Crystal ([[item:nether_remastered:seal_crystal]]) | The Warden **or** Obsidian Infused Bottle | [[progression/act-ii-first-steps/the-warden\|The Warden]] (50%) |

All four shards are named "Mysterious Shard" in game. The quest subtitles give their positions.

The recipe also needs four [[item:nether_remastered:bottled_nether_essence]], which no quest asks for in that number (see [[progression/act-ii-first-steps/bottled-nether-essence|Bottled Nether Essence]]).

## Objectives

Have a Seal of the Underworld.

> [!LORE] The Seal Of The Underworld (Act II)
> You are now worthy of entering the underworld. Adventurer, eat the seal and unlock transportation to The Nether.
>
> Right-Click 5 sec to use that sigil

## Rewards

- 10 XP levels
- A long [[item:minecraft:potion]] of Fire Resistance

## Walkthrough

1. Collect the four shards, the Nether Crystal and four Bottled Nether Essence.
2. Craft the seal:

   {{recipes nether_remastered:seal_of_the_underworld_item}}

3. Claim the quest while the seal is in your inventory.
4. Hold right-click with the seal for 5 seconds to use it. Soulrend's config keeps the seal after use.
5. Build a Nether portal (a [[progression/act-i-awakening/explorers-compass#Diamond Pickaxe|Diamond Pickaxe]] mines obsidian) and go through.

> [!NOTE]
> Each player needs to use a seal. Trying a portal without having used one shows a message instead of teleporting. The seal isn't used up, so one seal can be passed around a team.

## Next

- [[progression/act-ii-first-steps/act-ii-completed|Act II Completed]]
