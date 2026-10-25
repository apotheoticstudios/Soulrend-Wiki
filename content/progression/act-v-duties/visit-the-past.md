---
{
  "title": "Visit the Past",
  "summary": "Act V quest that completes on arriving in the Past, entered with the Emblem of the Past and left by dying or warping out.",
  "infobox": {
    "item": "kubejs:emblem_of_the_past",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/act-v-duties|Act V – Duties]]"],
      ["Requires", "[[progression/act-v-duties/emblem-of-the-past|Emblem of the Past]]"],
      ["Task", "Enter the Past (`graveyard:past`)"],
      ["Rewards", "None"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/duties.snbt quest 7DAC338EE5CF1A0D (depends on Emblem of the Past; dimension task graveyard:past; description; no rewards)
  kubejs/server_scripts/dimension/past.js (Emblem right-click: refuses inside the Past with "You are already in the battlefield..."; teleports to the same x/z at y=200; Slow Falling for 600 ticks; 100-tick cooldown; message "You have been cast into the infinite trenches..."; forced thunder in the Past)
  pack author (2026-10-24): the way out of the Past is dying or warping out with a waystone item
-->
**Visit the Past** is the [[progression/act-v-duties|Act V]] quest that completes on arrival in the Past, the act's own dimension. It has no reward, but it opens every remaining quest of the act: the two boss lines and the [[progression/act-v-duties/esoteric-material|Galactic Core]].

## Requirements

- [[progression/act-v-duties/emblem-of-the-past|Emblem of the Past]]

## Objectives

Enter the Past.

> [!LORE] Visit the Past (Act V)
> Your greatest challenge begins now.

## Walkthrough

1. Right-click the [[item:kubejs:emblem_of_the_past]] anywhere outside the Past. It drops you into the Past at the same x and z, at y=200, with 30 s of Slow Falling and the message "You have been cast into the infinite trenches...".
2. Land and get your bearings. It is always thundering in the Past, and its soldiers are reskinned, much stronger versions of normal mobs (see [[features/mobs-and-world/the-past|The Past]]).
3. To leave, warp out with a [[item:waystones:warp_stone]] or [[item:waystones:warp_scroll]] to a waystone in another dimension, or die. The Emblem doesn't work inside the Past ("You are already in the battlefield...").

> [!TIP]
> Because the Emblem keeps your x and z, using it from a known spot means you always arrive above the same area of the Past. Carry a Warp Stone or spare Warp Scrolls before going in.

## Next

- [[progression/act-v-duties/defeat-the-scarlet-hunter|Defeat The Scarlet Hunter]]
- [[progression/act-v-duties/defeat-arterius|Defeat Arterius]]
- [[progression/act-v-duties/esoteric-material|Esoteric Material]]
