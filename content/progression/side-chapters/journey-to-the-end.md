---
{
  "title": "Journey to the End",
  "summary": "Tales of Soulrend chapter for the 16 End Remastered Legendary Eyes; any five of its quests open Act IV, and the End portal needs twelve eyes.",
  "aliases": ["Journey To The End", "Magical Eyes", "End Remastered (Quest)"],
  "infobox": {
    "item": "endrem:exotic_eye",
    "itemRows": false,
    "rows": [
      ["Group", "Tales of Soulrend"],
      ["Opened from", "Magical Eyes, from [[progression/act-ii-first-steps/the-real-journey-begins|The Real Journey Begins]] (Act II)"],
      ["Quests", "17"],
      ["Rewards", "XP and a Flawed Gem of your choice per eye"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/ldimensions_remastered.snbt (17 quests; "End Remastered" depends on act_2 "Magical Eyes", task ender pearl, two Cracked Gems rolls; 16 eye quests depend on it; subtitles, "Difficulty" lines; rewards 5 XP levels and a choice of Flawed Gems, except Witch Eye (30 experience points) and Cryptic Eye (10 XP levels))
  config/ftbquests/quests/chapters/act_2.snbt "Magical Eyes" (description)
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt Act IV gate (min_required_dependencies 5 of the 16 eye quests)
  mods/endrem_forge-5.3.3-R-1.20.1.jar data/endrem/loot_tables/minecraft/{chests,entities}/*.json (chances below) and AncientPortalFrame / ERPortalPredicate (12 frames, no duplicate eye types)
  config/endrem.toml (is_cryptic_eye_obtainable = false, is_evil_eye_obtainable = false, use_ender_eye = false, can_remove_eye = false)
  config/serilum/configurableextramobdrops/mobdropconfig.txt (infernal_dragon: evil_eye 100%; yeti: cold_eye 100%; wither_skeleton: wither_eye 10%)
  kubejs/server_scripts/recipes/misc_utility.js (Guardian Eye smithing; Undead Soul from 8 Black Steel Nuggets and Soul Sand; Black Eye from Heart of the Deep and Eye of Ender; Witch Pupil smithing; Witch Eye; Cryptic Eye apotheosis:enchanting with eterna 20-25, quanta 10, arcana 25-30)
  game-data/recipes.json endrem:exotic_eye, endrem:undead_eye
-->
**Journey To The End** is the side chapter for the sixteen **Legendary Eyes** of End Remastered. In Soulrend these eyes replace Eyes of Ender: the stronghold's End portal only accepts Legendary Eyes, and the chapter's eye quests are what open [[progression/act-iv-beyond-reality|Act IV]].

## Requirements

- **Magical Eyes**, a checkmark that opens with Act II's [[progression/act-ii-first-steps/the-real-journey-begins|The Real Journey Begins]], links here. Its text calls Act IV "still far beyond your reach... unless you're speedrunning, of course."
- The chapter's first quest, **End Remastered** ("The Legendary Eyes"), asks for an [[item:minecraft:ender_pearl]] and gives two rolls on Cracked Gems. All sixteen eye quests depend on it.

> [!LORE] End Remastered (Journey To The End)
> To activate the End portal, you'll need to find 16 of the Legendary Eyes. They can be foud as rare loot throughout Overworld structures.
>
> The Stronghold has also been overhauled, with many enemies and rooms to discover, use the Legendary Eyes to locate it instead of eyes of ender.

## What the eyes unlock

- **Act IV:** the [[progression/act-iii-into-the-flames/act-iv-beyond-reality-gate|Act IV gate]] needs any **five** of the sixteen eye quests, then a visit to the End.
- **The End portal:** it has twelve frames, each takes one Legendary Eye, and a frame refuses an eye of a type already in the portal. Opening it takes **twelve different** eyes, despite the quest's "16". Eyes can't be removed once placed.

## The eyes

Each quest asks for one eye and gives 5 XP levels and a Flawed Gem of your choice (Witch Eye: 30 experience points; Cryptic Eye: 10 XP levels). The "Difficulty" column is the quest's own rating.

| Eye | Difficulty | Where it comes from in Soulrend |
| --- | --- | --- |
| [[item:endrem:corrupted_eye]] | 1/10 | Pillager outpost chests (30%) |
| [[item:endrem:nether_eye]] | 2/10 | Nether Fortress chests (30%) |
| [[item:endrem:wither_eye]] | 2/10 | The [[Wither]] (two rolls at 90% each); [[Wither Skeleton]]s (10%) |
| [[item:endrem:witch_eye]] | 3/10 | Crafted from a Witch Pupil and an Eye of Ender; witches drop Witch Pupils (10%) |
| [[item:endrem:old_eye]] | 4/10 | Desert pyramid chests (15%), dungeon chests (2.5%) |
| [[item:endrem:cryptic_eye]] | 4/10 | Infusing an Eye of Ender at an enchanting table (Soulrend recipe, below) |
| [[item:endrem:lost_eye]] | 5/10 | Mineshaft chests (20%), dungeon chests (2.5%) |
| [[item:endrem:rogue_eye]] | 5/10 | Jungle pyramid chests (40%) |
| [[item:endrem:cursed_eye]] | 5/10 | Bastion treasure chests (50%) |
| [[item:endrem:guardian_eye]] | 6/10 | Elder Guardians (30%); or smithing (Soulrend recipe, below) |
| [[item:endrem:undead_eye]] | 7/10 | Crafted; its Undead Soul comes from skeleton horses (25%) or a Soulrend recipe |
| [[item:endrem:exotic_eye]] | 7/10 | Crafted from corals, conduits, glow ink and an Eye of Ender |
| [[item:endrem:black_eye]] | 8/10 | Buried treasure chests (30%), shipwreck treasure (5%); or crafted (Soulrend recipe, below) |
| [[item:endrem:magical_eye]] | 8/10 | Woodland mansion chests (10%), evokers (5%) |
| [[item:endrem:cold_eye]] | 9/10 | The [[bosses/act-ii/yeti\|Yeti]] (always); igloo chests (70%) |
| [[item:endrem:evil_eye]] | 10/10 | The [[Infernal Dragon]] (always) |

Chest chances are per chest. Soulrend turns off two End Remastered sources: Cryptic Eyes from normal enchanting and Evil Eyes from Cleric trades.

## Crafting

Soulrend adds or changes these recipes:

- **Cryptic Eye:** infuse an Eye of Ender in an enchanting table with 20–25 Eterna, 10% Quanta and 25–30% Arcana. The quest says the same. See [[progression/side-chapters/enchanting|Enchanting Module]] for the stats.
- **Guardian Eye:**

  ```recipe
  { "station": "smithing_table", "inputs": ["minecraft:tide_armor_trim_smithing_template", "minecraft:ender_eye", "minecraft:netherite_ingot"], "output": "endrem:guardian_eye" }
  ```

- **Black Eye:**

  ```recipe
  { "station": "crafting_table", "ingredients": ["deeperdarker:heart_of_the_deep", "minecraft:ender_eye"], "output": "endrem:black_eye" }
  ```

- **Witch Pupil**, then **Witch Eye**:

  ```recipe
  { "station": "smithing_table", "inputs": ["minecraft:spider_eye", "minecraft:phantom_membrane", "minecraft:ghast_tear"], "output": "endrem:witch_pupil" }
  ```

  ```recipe
  { "station": "crafting_table", "ingredients": ["endrem:witch_pupil", "minecraft:ender_eye"], "output": "endrem:witch_eye" }
  ```

- **Undead Soul**, then **Undead Eye**:

  ```recipe
  { "station": "crafting_table", "grid": ["BBB", "BSB", "BBB"], "key": { "B": "cataclysm:black_steel_nugget", "S": "minecraft:soul_sand" }, "output": "endrem:undead_soul" }
  ```

  {{recipes endrem:undead_eye}}

- **Exotic Eye:**

  {{recipes endrem:exotic_eye}}

## Tips

- Claim each eye quest before putting the eye in the portal; the quests check the inventory.
- The two boss eyes (Cold and Evil) are guaranteed drops from the [[progression/act-ii-first-steps/bosses-rise|Bosses' Rise]] bosses, which Act II already sends you to.
- Several eyes need Nether materials (Ghast Tears, Netherite, Soul Sand), so the full set usually comes together during [[progression/act-iii-into-the-flames|Act III]].

See [[items/progression-keys/legendary-eyes|Legendary Eyes]].
