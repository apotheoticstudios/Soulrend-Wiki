---
{
  "title": "The Eight Sins",
  "summary": "Act III's Cataclysm line: craft eight eyes, enter eight boss dimensions and kill each Sin for a Wisdom Scroll and its weapons.",
  "aliases": ["Eight Sins", "Cataclysm Bosses (Quests)"],
  "infobox": {
    "item": "cataclysm:void_eye",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/act-iii-into-the-flames|Act III – Into The Flames]]"],
      ["Requires", "[[progression/act-iii-into-the-flames/into-the-flames|Into the Flames]]"],
      ["Task", "Checkmark, then 8 eyes, 8 dimensions, 8 bosses"],
      ["Rewards", "5 XP levels and 5 Estus Flasks; per boss: 5 XP levels, Chipped Gems, a [[item:skilltree:wisdom_scroll]]"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt: Eight Sins (octagon checkmark; description; 5 XP levels, 5 Estus Flasks), eight "Eye of ..." quests (subtitle "Craftable"; task the eye; no rewards; Eye of Flame description about Burning Ashes), eight dimension quests (task cataclysm_dimension:cataclysm_<name>; reward 1 Warp Scroll), eight kill quests (5 XP levels, Chipped Gems, 1 Wisdom Scroll), 25 weapon and armor quests (rewards listed below), Nautilus Shell quest
  game-data/recipes.json cataclysm:abyss_eye, cursed_eye, desert_eye, flame_eye, monstrous_eye, storm_eye, void_eye
  kubejs/server_scripts/magic/dacxoptics_recipes.js (kubejs:mech_eye_recipe)
  config/ftbquests/quests/chapters/act_4.snbt Slay The Ender Dragon (rewards an Eye of Storm)
-->
**The Eight Sins** is the Cataclysm line of [[progression/act-iii-into-the-flames|Act III]]. Each of the eight Cataclysm bosses lives in its own dimension, reached with a craftable eye. For every Sin there is an eye quest, a dimension quest, a kill quest and one or more quests for its weapons and armor. Every boss kill gives a [[item:skilltree:wisdom_scroll]], a free passive skill point.

## Requirements

- [[progression/act-iii-into-the-flames/into-the-flames|Into the Flames]] opens the **Eight Sins** checkmark, and the eight eye quests depend on it.

## Objectives

Click the **Eight Sins** checkmark (5 XP levels and 5 Estus Flasks), then work through any of the eight lines in any order.

> [!LORE] Eight Sins (Act III)
> Deep within the Inferno, eight dreadful entities reign supreme.
>
> Each represents one of the ancient sins, their very existence warping the world around them. Many have attempted to purge these abominations, but few lived long enough to face them all.
>
> Hunt down the Eight Sins and bring an end to their reign
>
> Defeat at least Four Sins to unlock Act IV

> [!IMPORTANT]
> The last line is out of step with the quests. The [[progression/act-iii-into-the-flames/act-iv-beyond-reality-gate|Act IV gate]] needs Legendary Eyes and a trip to the End, not Sin kills.

### The eight lines

| Eye | Dimension | Boss | Item quests |
| --- | --- | --- | --- |
| [[item:cataclysm:desert_eye]] | The Pharaoh's Bane | [[Ancient Remnant]] | Ancient Metal Ingot → Ancient Spear; Bone Reptile Chestplate; Bone Reptile Helmet |
| [[item:cataclysm:storm_eye]] | The Fallen Sanctum | [[Scylla]] | Astrape; Ceraunus |
| [[item:cataclysm:mech_eye]] | The Forge of Aeons | [[The Harbinger]] | Meat Shredder; Laser Gatling; Wither Assault Shoulder Weapon → Void Assault Shoulder Weapon |
| [[item:cataclysm:flame_eye]] | The Infernos Maw | [[Ignis]] | Bulwark of the Flame; The Incinerator; Blazing Grips |
| [[item:cataclysm:void_eye]] | The Lost Bastion | [[Ender Guardian]] | Gauntlet of Guard; Gauntlet of Bulwark; Gauntlet of Maelstrom |
| [[item:cataclysm:cursed_eye]] | The Eternal Frosthold | [[Maledictus]] | Soul Render; The Annihilator → The Immolator; Cursed Bow → Wrath of the Desert |
| [[item:cataclysm:monstrous_eye]] | The Soul Anvil | [[Netherite Monstrosity]] | Monstrous Helm; Infernal Forge → Void Forge |
| [[item:cataclysm:abyss_eye]] | The Abyssal Depths | [[The Leviathan]] | Tidal Claws |

Each line has the same three main steps:

| Step | Task | Rewards |
| --- | --- | --- |
| Eye of … ("Craftable") | Have the eye | None |
| Enter The … | Enter the boss's dimension | 1 [[item:waystones:warp_scroll]] |
| Defeat … | Kill the boss | 5 XP levels, a roll on [[progression/reward-tables#Gem tables\|Chipped Gems]], a [[item:skilltree:wisdom_scroll]] |

The item quests are hidden until their boss is dead. Most give 5 XP levels and a Chipped Gems roll; Gauntlet of Guard, Infernal Forge and Tidal Claws give only 1 XP level, Ancient Metal Ingot gives 2, and Ancient Spear and the Bone Reptile pieces give 3 (the Bone Reptile pieces roll [[progression/reward-tables#Gem tables|Cracked Gems]] instead).

## Walkthrough

1. Craft an eye. Seven of the recipes are Cataclysm's own:

   {{recipes cataclysm:desert_eye}}

   {{recipes cataclysm:storm_eye}}

   {{recipes cataclysm:flame_eye}}

   {{recipes cataclysm:void_eye}}

   {{recipes cataclysm:cursed_eye}}

   {{recipes cataclysm:monstrous_eye}}

   {{recipes cataclysm:abyss_eye}}

   Soulrend adds a recipe for the Eye of Mech:

   ```recipe
   { "station": "crafting_table", "grid": ["ABA", "CDC", "ABA"], "key": { "A": "create:andesite_alloy_block", "B": "minecraft:lava_bucket", "C": "minecraft:redstone_block", "D": "minecraft:ender_eye" }, "output": "cataclysm:mech_eye" }
   ```

2. Use the eye to travel to its dimension. The dimension quest gives a Warp Scroll, which can take you back to a waystone afterward.
3. Find and kill the boss. Each boss page has its stats, attacks and drops; the Cataclysm bosses are among the highest-level bosses before the End.
4. Collect the boss's weapons and armor for the item quests.

> [!NOTE]
> The Eye of Flame quest says it needs Burning Ashes, but the pack's Eye of Flame recipe (above) uses Blaze Powder, Netherite Scale and Soul Sand. Burning Ashes are only used in other recipes; see [[progression/act-iii-into-the-flames/burning-ashes|Burning Ashes]].

The Ender Dragon kill in Act IV gives a second [[item:cataclysm:storm_eye]].

## Next

- [[progression/act-iii-into-the-flames/act-iv-beyond-reality-gate|Act IV – Beyond Reality Gate]]
