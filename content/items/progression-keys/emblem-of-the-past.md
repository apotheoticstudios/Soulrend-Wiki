---
{
  "title": "Emblem of the Past (Items)",
  "summary": "The Emblem of the Past, Soulrend's own item and the only way into the Past in Act V.",
  "items": ["kubejs:emblem_of_the_past"]
}
---
<!-- sources:
  first pass from the game-data dumps (obtaining, crafting); Usage researched 2026-10-27
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips), game-data/loot-tables.json, game-data/recipes.json
  kubejs/server_scripts/dimension/past.js (ItemEvents.rightClicked: same x/z, y 200, Slow Falling 600 ticks, 100-tick cooldown, "already in the battlefield" message; recipe)
  config/ftbquests/quests/chapters/duties.snbt (Emblem of the Past quest: 10 Huge Estus Flasks)
  docs/instance-guide.md (leaving the Past: dying or a waystone item, confirmed by the pack author 2026-10-24)
-->

The **Emblem of the Past** is the key to the Past, the dimension of [[progression/act-v-duties|Act V]]. Soulrend adds it with KubeJS; nothing else leads there.

## Usage

- **Using it** (right-click) teleports the user to the Past at the same x and z, at y=200, with 30 s of Slow Falling so the drop is safe. It isn't used up, and it has a 5 s cooldown. Inside the Past it only says "You are already in the battlefield...".
- **Leaving the Past:** the Emblem doesn't bring its user back. The way out is dying or warping out with a waystone item.
- **Crafting:** four Astral Ingots, four Nightmare Ingots and a Manifestation of Infinity (see [[items/materials/act-v-materials|Act V Materials]]). The [[progression/act-v-duties/emblem-of-the-past|Emblem of the Past]] quest asks for one and gives 10 Huge Estus Flasks.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:kubejs:emblem_of_the_past]] | Soulrend | Many thought they could end the war. Many perished. |  |

## Emblem of the Past

[[item:kubejs:emblem_of_the_past]] (Soulrend, epic)

Its tooltip says:

- Many thought they could end the war. Many perished.

### Crafting

{{recipes kubejs:emblem_of_the_past}}
