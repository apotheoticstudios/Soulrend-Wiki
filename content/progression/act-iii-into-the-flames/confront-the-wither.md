---
{
  "title": "Confront The Wither",
  "summary": "Act III quests to gather Soul Sand and three Wither Skeleton Skulls, then summon the Wither.",
  "aliases": ["Prepare the Ritual"],
  "infobox": {
    "item": "minecraft:wither_skeleton_skull",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/act-iii-into-the-flames|Act III – Into The Flames]]"],
      ["Requires", "[[progression/act-iii-into-the-flames/into-the-flames|Into the Flames]]"],
      ["Boss", "[[Wither]]"],
      ["Rewards", "8 XP levels, Rare Loot, Flawed Gems, 3 Huge Estus Flasks"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/act_iii__into_the_flames.snbt: Prepare the Ritual (subtitle; tasks soul sand and wither skeleton skull, stored as stacks of 4 and 3 with no count field, so 1 each; 3 XP levels, Rare Loot), Confront The Wither (octagon; advancement minecraft:nether/summon_wither; 5 XP levels, Flawed Gems, 3 Huge Estus Flasks)
  mods/ftb-quests-forge-2001.4.22.jar ItemTask.readData (count defaults to 1; the stack's Count is ignored)
  config/ftbquests/quests/chapters/hunters_journal.snbt (Wither Skeleton kill quests reward skulls)
-->
**Confront The Wither** is an [[progression/act-iii-into-the-flames|Act III]] quest that completes when the player summons the [[Wither]]. It follows **Prepare the Ritual**, which asks for the summoning materials.

## Requirements

- [[progression/act-iii-into-the-flames/into-the-flames|Into the Flames]], then Prepare the Ritual

## Objectives

| Quest | Task | Rewards |
| --- | --- | --- |
| Prepare the Ritual | Have [[item:minecraft:soul_sand]] and a [[item:minecraft:wither_skeleton_skull]] | 3 XP levels, a roll on [[progression/reward-tables#Rare Loot\|Rare Loot]] |
| Confront The Wither | Summon the Wither (the "Withering Heights" advancement) | 5 XP levels, a roll on [[progression/reward-tables#Gem tables\|Flawed Gems]], 3 [[item:dungeons_and_combat:crimson_flask]] |

> [!LORE] Prepare the Ritual (Act III)
> Legends speak of a terrible creature born from soul sand and the remains of withered skeletons.

The quest file shows stacks of 4 Soul Sand and 3 skulls, but FTB Quests only counts each task's own count, which is 1. The Wither itself still needs 4 Soul Sand and 3 skulls.

## Walkthrough

1. Kill [[Wither Skeleton]]s in Nether Fortresses for three skulls. The [[progression/side-chapters/hunters-journal|Hunter's Journal]] also gives skulls for 25 and 75 Wither Skeleton kills.
2. Build the Wither: 4 Soul Sand in a T shape with the three skulls on top. The quest completes on summoning.
3. Kill it. See [[Wither#Strategy]].

The Wither drops the [[item:minecraft:nether_star]] that the [[progression/side-chapters/soulslike-champions|Soulslike Champions]] chapter asks for.

## Next

- No quests depend on this line.
