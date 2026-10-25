---
{
  "title": "Dread Citadel",
  "summary": "Act II's Ice and Fire branch: an Ancient Sapphire from the Dread Citadel gives the Top-Left seal shard and the Summoning Crystals.",
  "aliases": ["Ice and Fire (Quest)", "Top-Left Shard (Quest)", "Ancient Sapphire (Quest)"],
  "infobox": {
    "item": "nether_remastered:seal_piece_1",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/act-ii-first-steps|Act II – First Steps]]"],
      ["Requires", "[[progression/act-ii-first-steps/the-real-journey-begins|The Real Journey Begins]]"],
      ["Key item", "[[item:iceandfire:sapphire_gem]]"],
      ["Rewards", "[[item:nether_remastered:seal_piece_1]], dragon blood, gems, Estus Flasks"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/act_2.snbt: Ice and Fire (checkmark, depends on The Real Journey Begins), Dread Citadel (structure idas:iceandfire/dread_citadel, subtitle "Prepare before visit...", Rare Loot), Ancient Sapphire (iceandfire:sapphire_gem, 2 XP levels), Fire / Ice / Lightning Dragon Summoning Crystal (each rewards that dragon's blood), Top-Left Shard (checkmark after Ancient Sapphire; reward seal piece 1), Dragon Bone (iceandfire:dragonbone; 1 XP level; link to Dragonslayer "Dragons"), Witherbone (checkmark; 2 witherbone), Mausoleum, Graveyard, Ghost, Sirens Cove, Siren x3, Gorgon Temple, Gorgon, Sea Serpent / Cyclops / Hydra "(optional)"
  kubejs/server_scripts/recipes/misc_utility.js (fire and lightning crystal recipes: blood, ender pearl, diamond, Ancient Sapphire; a one-item recipe resets a used crystal)
  game-data/recipes.json iceandfire:summoning_crystal_ice
  kubejs/startup_scripts/dragon_summoning.js (crystals are reusable)
-->
The **Ice and Fire** branch of [[progression/act-ii-first-steps|Act II]] covers the dragons, monsters and structures of the Ice and Fire mod. Its main thread runs through the **Dread Citadel**: an [[item:iceandfire:sapphire_gem]] found there completes the Top-Left Shard quest, which gives the [[item:nether_remastered:seal_piece_1]], and also opens the three dragon Summoning Crystal quests. The rest of the branch is optional monster hunting.

## Requirements

- [[progression/act-ii-first-steps/the-real-journey-begins|The Real Journey Begins]] opens the **Ice and Fire** checkmark, and every quest below depends on that checkmark.

## Objectives

### The Top-Left Shard

| Quest | Requires | Task | Rewards |
| --- | --- | --- | --- |
| Dread Citadel ("Prepare before visit...") | Ice and Fire | Find `idas:iceandfire/dread_citadel` | Rare Loot |
| Ancient Sapphire | Dread Citadel | Have an [[item:iceandfire:sapphire_gem]] | 2 XP levels |
| **Top-Left Shard** | Ancient Sapphire | Checkmark | [[item:nether_remastered:seal_piece_1]] |
| Fire Dragon Summoning Crystal | Ancient Sapphire | Have a [[item:iceandfire:summoning_crystal_fire]] | [[item:iceandfire:fire_dragon_blood]] |
| Ice Dragon Summoning Crystal | Ancient Sapphire | Have a [[item:iceandfire:summoning_crystal_ice]] | [[item:iceandfire:ice_dragon_blood]] |
| Lightning Dragon Summoning Crystal | Ancient Sapphire | Have a [[item:iceandfire:summoning_crystal_lightning]] | [[item:iceandfire:lightning_dragon_blood]] |

### Dragon bones

| Quest | Requires | Task | Rewards |
| --- | --- | --- | --- |
| Dragon Bone | Ice and Fire | Have an Ice and Fire [[item:iceandfire:dragonbone]] | 1 XP level, a link to [[progression/side-chapters/dragonslayer\|Dragonslayer]] |
| Witherbone | Dragon Bone | Checkmark | 2 [[item:iceandfire:witherbone]] |

> [!LORE] Dragon Bone (Act II)
> While exploring the wilderness, you may stumble upon the remains of a creature long thought impossible.
>
> These massive bones once belonged to a dragon, a beast powerful enough to leave its mark upon the Realms of Soulrendia even in death. Though the creature itself is gone, its remains may still prove valuable

The Witherbone quest adds: "Combined with Dragon Bones, they can be used to create a powerful Dragonbone Pickaxe."

### Optional structures and monsters

| Quest | Requires | Task | Rewards |
| --- | --- | --- | --- |
| Mausoleum ("Hard structure, will help you with dragon forge..") | Ice and Fire | Find `iceandfire:mausoleum` | Common Loot |
| Graveyard ("Don't open the CHEST") | Ice and Fire | Find `iceandfire:graveyard` | 1 XP level |
| Ghost ("Booooo...") | Graveyard | Kill a [[enemies/act-ii/ghost\|Ghost]] | Cracked Gems, 1 Estus Flask |
| Sirens Cove | Ice and Fire | Find `idas:iceandfire/sirens_cove` | Structure Loot |
| Sirens | Sirens Cove | Kill 3 [[enemies/act-ii/siren\|Sirens]] | Chipped Gems, 3 Estus Flasks |
| Gorgon Temple | Ice and Fire | Find `iceandfire:gorgon_temple` | Structure Loot |
| Gorgon | Gorgon Temple | Kill a [[enemies/act-ii/gorgon\|Gorgon]] | Chipped Gems, 2 Estus Flasks |
| Sea Serpent | Ice and Fire | Kill a [[enemies/act-ii/sea-serpent\|Sea Serpent]] | Chipped Gems, 2 XP levels, 1 Estus Flask |
| Cyclops | Ice and Fire | Kill a [[enemies/act-ii/cyclops\|Cyclops]] | Chipped Gems, 2 XP levels, 1 Estus Flask |
| Hydra | Ice and Fire | Kill a [[enemies/act-ii/hydra\|Hydra]] | Chipped Gems, 2 XP levels, 1 Estus Flask |

Table rewards ("Rare Loot", "Chipped Gems" and so on) are explained on [[progression/reward-tables|Quest Reward Tables]].

## Walkthrough

1. Find a Dread Citadel with an Explorer's Compass. The quest subtitle, "Prepare before visit...", warns that it is dangerous.
2. Take an Ancient Sapphire from the Citadel, then claim the Top-Left Shard.
3. Summoning Crystals are optional. They call back a tamed dragon (see [[features/dragons/reusable-summoning-crystals|Reusable Summoning Crystals]]). Soulrend makes the fire and lightning crystals from the dragon's blood, an Ender Pearl, a Diamond and an Ancient Sapphire:

   ```recipe
   { "station": "crafting_table", "grid": ["AB", "CD"], "key": { "A": "iceandfire:fire_dragon_blood", "B": "minecraft:ender_pearl", "C": "minecraft:diamond", "D": "iceandfire:sapphire_gem" }, "output": "iceandfire:summoning_crystal_fire" }
   ```

   The lightning crystal uses [[item:iceandfire:lightning_dragon_blood]] in the same pattern. The ice crystal keeps its Ice and Fire recipe:

   {{recipes iceandfire:summoning_crystal_ice}}

> [!TIP]
> The Top-Left Shard also drops from abandoned mineshaft chests (a 10% chance per chest), so a mineshaft can stand in for the Citadel.

## Next

- The [[item:nether_remastered:seal_piece_1]] goes into [[progression/act-ii-first-steps/the-seal-of-the-underworld|The Seal of the Underworld]].
- [[progression/side-chapters/dragonslayer|Dragonslayer]], from the Dragon Bone quest.
