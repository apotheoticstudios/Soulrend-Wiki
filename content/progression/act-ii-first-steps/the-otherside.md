---
{
  "title": "The Otherside",
  "summary": "Act II quest for a Heart of the Deep, which lights the portal to the Otherside and opens the optional Act III-b.",
  "aliases": ["Is that my heart beating?", "Heart of the Deep (Quest)"],
  "infobox": {
    "item": "deeperdarker:heart_of_the_deep",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/act-ii-first-steps|Act II – First Steps]]"],
      ["Requires", "[[progression/act-ii-first-steps/the-warden|The Warden]] and [[progression/act-ii-first-steps/dungeon-crawl|Dark Iron Ingot]]"],
      ["Task", "[[item:deeperdarker:heart_of_the_deep]]"],
      ["Rewards", "Ancient Vase, 64 Sculk, a link to [[progression/act-iii-b-deeper-and-darker|Act III-b]]"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/act_2.snbt quest 57F46262D879BF01 (subtitle "Is that my heart beating?", dependencies The Warden and Dark Iron Ingot, description, task deeperdarker:heart_of_the_deep, rewards ancient vase, 64 sculk, open_book 591A7010D78B40B8 = act_35 "Deeper and Darker")
  kubejs/server_scripts/recipes/misc_utility.js (Heart of the Deep: Ancient Sapphire, 2 Dark Iron Blocks, Warden Tendril, Withered Demon Heart)
  content/bosses/act-ii/the-decaying-king.md (Withered Demon Heart: guaranteed drop; Decaying Kingdom generates in the Nether)
  config/paxi/datapacks/soulrend_loot/data/deeperdarker/loot_modifiers/warden_heart_from_warden.json (min 0, max 0)
  config/ftbquests/quests/chapters/the_deep_dark.snbt "Enter The Otherside" (depends on this quest)
-->
**The Otherside** ("Is that my heart beating?") is an [[progression/act-ii-first-steps|Act II]] quest for a [[item:deeperdarker:heart_of_the_deep]], the item that lights the portal to the Otherside, Deeper and Darker's dimension under the Deep Dark. The quest is the entrance to the optional [[progression/act-iii-b-deeper-and-darker|Act III-b – Deeper and Darker]]. It is not needed for the Nether seal or for Act III.

## Requirements

- [[progression/act-ii-first-steps/the-warden|The Warden]]
- the Dark Iron Ingot quest of the [[progression/act-ii-first-steps/dungeon-crawl|Dungeon Crawl]] branch

## Objectives

Have a Heart of the Deep.

> [!LORE] The Otherside (Act II)
> Heart is Craftable Now
>
> Before lighting the portal, you must first remove all the Sculk Veins from the inner frame. After the frame is cleared, you can right click it with the Heart of The Deep
>
> Act III - Deeper and Darker is optional
>
> If you wanna continue your journey, keep following "Nether"

## Rewards

- [[item:deeperdarker:ancient_vase]]
- 64 [[item:minecraft:sculk]]
- "Move to Deep and Darker Chapter", which opens [[progression/act-iii-b-deeper-and-darker/deeper-and-darker|Deeper and Darker]].

## Walkthrough

1. Gather the parts. Soulrend sets the Warden's Heart of the Deep drop to zero, so the heart has to be crafted, and replaces its recipe:

   ```recipe
   { "station": "crafting_table", "grid": [" C ", "BAB", " D "], "key": { "A": "iceandfire:sapphire_gem", "B": "graveyard:dark_iron_block", "C": "apotheosis:warden_tendril", "D": "soulsweapons:withered_demon_heart" }, "output": "deeperdarker:heart_of_the_deep" }
   ```

   - [[item:iceandfire:sapphire_gem]]: the [[progression/act-ii-first-steps/dread-citadel|Dread Citadel]].
   - [[item:graveyard:dark_iron_block]]: made from Dark Iron Ingots, from the [[progression/act-ii-first-steps/dungeon-crawl|Crypt]].
   - [[item:soulsweapons:withered_demon_heart]]: a guaranteed drop of [[The Decaying King]].
2. Find an Ancient City's portal frame in the Deep Dark and clear every Sculk Vein from inside the frame.
3. Right-click the frame with the Heart of the Deep.

> [!IMPORTANT]
> The Decaying King lives in the Decaying Kingdom, which generates in the Nether. Until the Nether is open, the Withered Demon Heart and so the Heart of the Deep can't be made, so this quest usually waits until [[progression/act-iii-into-the-flames|Act III]].

The Heart of the Deep is also an ingredient of the [[item:endrem:black_eye]], one of the [[progression/side-chapters/journey-to-the-end|Legendary Eyes]].

## Next

- [[progression/act-iii-b-deeper-and-darker/deeper-and-darker|Deeper and Darker]] (Act III-b)
- The Otherside quests in [[progression/side-chapters/fabled-realms|Fabled Realms]]
