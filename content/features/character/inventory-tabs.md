---
{
  "title": "Inventory Tabs",
  "summary": "Five tabs on the inventory screen: Inventory, Levelling, Skill Tree, Quests and Combat Skills.",
  "aliases": ["Levelling Screen", "Character Screen", "Combat Skills Tab"],
  "icon": "ftbquests:book"
}
---
<!-- sources:
  mods/soulrend_core-2.7-1.20.1.jar SoulrendClientGuiEvents.addInventoryTabs (five InventoryTabButtons on InventoryScreen: Inventory, Levelling -> LevellingScreen, Skill Tree -> PassiveSkillTreeCompat.openSkillTree, Quests -> FTBQuestsCompat.openQuestBook, Combat Skills -> EpicFightCompat.openSkillEditor; icons skilltree:wisdom_scroll, ftbquests:book, epicfight:skillbook)
  mods/soulrend_core-2.7-1.20.1.jar LevellingScreen (left Character panel: model, level, rank, earned and available points, stat rows with + and -, Level Up, progress bar; SidebarPanel ATTRIBUTES, TITLES, FACTIONS, ORIGINS; Factions reads the player's scoreboard team against the valarian_conquest faction list; Origins shows race, class and their powers with an Impact rating)
  mods/soulrend_core-2.7-1.20.1.jar assets/soulrend_core/lang/en_us.json (gui.soulrend_core.tab.*, menu.*, factions.*, origins.*)
  config/defaultoptions/keybindings.txt (inventory I, skill tree O, Epic Fight skill gui K, FTB Quests unbound)
-->
The **inventory tabs** are a row of five tabs Soulrend Core adds to the player's inventory screen (I by default). They are the quickest way to reach the screens that track a character: the Levelling screen, the [[skill-trees|skill tree]], the quest book and Epic Fight's skill editor.

## How it works

| Tab | Opens | Also opens with |
| --- | --- | --- |
| **Inventory** | The normal inventory (the tab that is already open). | I |
| **Levelling** | Soulrend's Levelling screen, described below. | — |
| **Skill Tree** | The Passive Skill Tree screen, where skill points are spent. See [[skill-trees\|Skill Trees]]. | O |
| **Quests** | The FTB Quests book, which holds the acts and side chapters. See [[progression\|Progression]]. | — (the quest key is unbound) |
| **Combat Skills** | Epic Fight's skill editor, where learned skill books are equipped into slots. See [[items/skill-books\|Skill Books]]. | K |

The tabs only appear on the survival inventory, not in creative mode's inventory.

## The Levelling screen

The Levelling screen has two halves.

**The Character panel** (left) shows the player model, the Soulrend level and rank, the skill points earned so far and the progress toward the next level. Below it are the six [[leveling/stats|stats]], each with + and − buttons; the changes stay queued until **Level Up** is pressed.

**The detail panel** (right) has four menus, switched with the buttons beside it:

| Menu | Shows |
| --- | --- |
| **Attributes** | The player's current attribute values in sections: Core, Combat, Defense, Vigor, Resist, Spell and Utility. |
| **Titles** | Every title, marked Active, Unlocked or Locked. Clicking an unlocked one makes it the active title. See [[leveling/titles-and-ranks\|Titles & Ranks]]. |
| **Factions** | The player's Valarian Conquest citizenship, if any, and the list of known factions (Barathians, Bohemians, Burgundians, Caladrians, Galicians, Hospitallers, Lancastians, Numerians, Orleanians, Templars, Valarians and Visigothians). |
| **Origins** | The player's race and class, each with its Impact rating and a scrollable list of its powers. Hovering a power shows its description. See [[origins\|Origins]]. |

## Tips

- The Combat Skills tab is the only way to reach the skill editor with the mouse; the K key does the same.
- The Origins menu is the easiest place to reread what a power does after the [[features/character/origin-selector|Origin Selector]] closes.

## Related

- [[leveling|Leveling]]
- [[features/character/origin-selector|Origin Selector]]
- [[features/commands|Commands]]
