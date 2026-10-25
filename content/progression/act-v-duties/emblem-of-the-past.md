---
{
  "title": "Emblem of the Past",
  "summary": "Act V quest to craft the Emblem of the Past, Soulrend's own item that teleports its user to the Past.",
  "infobox": {
    "item": "kubejs:emblem_of_the_past",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/act-v-duties|Act V – Duties]]"],
      ["Requires", "[[progression/act-v-duties/nightmare-and-astral-ingots|Forged from Nightmares and The Metal of the Stars]]"],
      ["Task", "[[item:kubejs:emblem_of_the_past]]"],
      ["Rewards", "A roll on Flawed Gems, 10 [[item:dungeons_and_combat:crimson_flask]]"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/duties.snbt quest 63A3823CE53B3DEA (depends on both ingot quests; task kubejs:emblem_of_the_past; Flawed Gems, 10 Huge Estus Flasks)
  kubejs/server_scripts/dimension/past.js (recipe ANA/NIN/ANA: A astral ingot, N nightmare ingot, I apotheosis:ancient_material; right-click: teleports to graveyard:past at the same x/z and y=200, Slow Falling for 600 ticks, 100-tick cooldown, refuses inside the Past)
  kubejs/startup_scripts/past/items.js (stack size 1, tooltip, epic rarity)
-->
**Emblem of the Past** is the [[progression/act-v-duties|Act V]] quest for the [[item:kubejs:emblem_of_the_past]], an item Soulrend adds itself. Right-clicking the Emblem teleports its user to the Past, the dimension where the rest of the act takes place.

## Requirements

- [[progression/act-v-duties/nightmare-and-astral-ingots|Forged from Nightmares]]
- [[progression/act-v-duties/nightmare-and-astral-ingots|The Metal of the Stars]]

## Objectives

Have an Emblem of the Past.

## Rewards

- A roll on [[progression/reward-tables#Gem tables|Flawed Gems]]
- 10 [[item:dungeons_and_combat:crimson_flask]]s (each heals 75% of maximum health)

## Walkthrough

1. Get a [[item:apotheosis:ancient_material]] (see [[progression/act-iv-beyond-reality/end-highlands#Manifestation of Infinity|End Highlands]]).
2. Craft the Emblem from four Astral Ingots, four Nightmare Ingots and the Manifestation of Infinity:

   ```recipe
   { "station": "crafting_table", "grid": ["ANA", "NIN", "ANA"], "key": { "A": "astral_calamity_extras:astral_ingot", "N": "astral_calamity_extras:nightmare_ingot", "I": "apotheosis:ancient_material" }, "output": "kubejs:emblem_of_the_past" }
   ```

3. Keep the Huge Estus Flasks from the reward for the Past.

## Next

- [[progression/act-v-duties/visit-the-past|Visit the Past]]
