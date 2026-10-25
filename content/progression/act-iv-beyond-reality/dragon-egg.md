---
{
  "title": "Dragon Egg",
  "summary": "Act IV quest for the Ender Dragon's egg, which Soulrend uses to craft Universium Ingots; also covers Dragon's Breath.",
  "aliases": ["Used to craft Universium", "Dragon's Breath (Quest)"],
  "infobox": {
    "item": "minecraft:dragon_egg",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/act-iv-beyond-reality|Act IV – Beyond Reality]]"],
      ["Requires", "[[progression/act-iv-beyond-reality/beyond-reality|Beyond Reality]]"],
      ["Task", "[[item:minecraft:dragon_egg]]"],
      ["Rewards", "A roll on Chipped Gems"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/act_4.snbt: Dragon Egg (subtitle "Used to craft Universium"; task minecraft:dragon_egg; Chipped Gems), Dragon's Breath (subtitle "Get some Dragon's Breath to craft the best bookshelves"; task minecraft:dragon_breath; Chipped Gems, 4 Dragon's Breath)
  kubejs/server_scripts/recipes/ingot_progression_recipes.js (4 Universium Ingots from a Dragon Egg, an Abyssal Egg, 2 Moon Crystals, a Brimspec Ingot, 2 Soul Infused Ingots and 2 High-frequency Alloy)
  config/betterendisland-forge-1_20.toml ("Resummoned Dragon Drops Egg" = true)
  config/ftbquests/quests/chapters/apotheosis.snbt "Ugh It Stinks" (Infused Dragon's Breath)
-->
**Dragon Egg** ("Used to craft Universium") is an [[progression/act-iv-beyond-reality|Act IV]] quest for the [[item:minecraft:dragon_egg]] that the Ender Dragon leaves behind. In Soulrend the egg is an ingredient of [[item:astral_calamity_extras:universium_ingot]], the metal behind Act V's Nightmare and Astral Ingots.

## Requirements

- [[progression/act-iv-beyond-reality/beyond-reality|Beyond Reality]]

## Objectives

Have a Dragon Egg.

## Rewards

- A roll on [[progression/reward-tables#Gem tables|Chipped Gems]]

## Walkthrough

1. Kill the [[Ender Dragon]]. The egg appears on top of the exit portal. YUNG's Better End Island is set to drop an egg for every kill, including resummoned dragons, so more eggs only take more fights.
2. The egg teleports when hit, so push it off with a piston instead of punching it.
3. Keep it for Universium. Soulrend's recipe makes four ingots:

   ```recipe
   { "station": "crafting_table", "grid": ["BCE", "FDF", "EAB"], "key": { "A": "cataclysm:abyssal_egg", "B": "astral_calamity_extras:moon_crystals", "C": "minecraft:dragon_egg", "D": "astral_calamity_extras:brimspec_ingot", "E": "soulsweapons:soul_ingot", "F": "efn:hf_ingot" }, "output": "astral_calamity_extras:universium_ingot", "count": 4 }
   ```

> [!IMPORTANT]
> Each Ender Dragon fight gives one egg, and each egg makes four Universium Ingots. [[progression/act-v-duties/nightmare-and-astral-ingots|Act V]] needs four Nightmare and four Astral Ingots, which take eight Universium in all. The optional Nightwarden quest gives two more.

## Dragon's Breath

**Dragon's Breath** ("Get some Dragon's Breath to craft the best bookshelves") also depends on Beyond Reality. It asks for one [[item:minecraft:dragon_breath]] and gives 4 more plus a Chipped Gems roll. The bookshelves it means are in the [[progression/side-chapters/enchanting|Enchanting Module]] chapter, which uses Infused Dragon's Breath.

## Next

- [[progression/act-v-duties/nightmare-and-astral-ingots|Nightmare & Astral Ingots]] (Act V)
