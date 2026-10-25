---
{
  "title": "Progression",
  "navTitle": "Overview",
  "category": "Progression",
  "order": 0,
  "summary": "Soulrend's main quest line act by act: what each act asks for, what opens the next one, and the side chapters around it.",
  "icon": "ftbquests:book"
}
---
<!-- sources:
  config/ftbquests/quests/chapter_groups.snbt, config/ftbquests/quests/data.snbt (progression_mode linear, default_consume_items false)
  config/ftbquests/quests/chapters/the_realms.snbt, act_1.snbt, act_2.snbt, act_iii__into_the_flames.snbt, act_35.snbt, act_4.snbt, duties.snbt (gate quests and their dependencies)
  mods/ftb-quests-forge-2001.4.22.jar Quest.checkDependencies, ItemTask.readData
-->
Soulrend's progression follows the quest book. Its main line, **The Exalted Path**, is split into a Prologue and five acts, and each act ends with an octagon-shaped quest that opens the next one. Side chapters for bosses, gear and exploration hang off the acts. Mob levels follow the player's Soulrend level rather than the act (see [[features/mobs-and-world/mob-levelling|Mob Levelling]]), but many bosses are pinned to a fixed level, which is what makes later acts harder.

## The acts

| Act | Setting | What opens the next act |
| --- | --- | --- |
| [[progression/prologue\|Prologue]] | Tutorial | Click Welcome to Soulrend |
| [[progression/act-i-awakening\|Act I – Awakening]] | Overworld | Kill 3 Zombies |
| [[progression/act-ii-first-steps\|Act II – First Steps]] | Overworld bosses | Craft the Seal of the Underworld (four shards, the Nether Crystal, four Bottled Nether Essence) |
| [[progression/act-iii-into-the-flames\|Act III – Into The Flames]] | The Nether and the Cataclysm dimensions | Any five Legendary Eye quests, then enter the End |
| [[progression/act-iii-b-deeper-and-darker\|Act III-b – Deeper and Darker]] (optional) | The Otherside | Nothing; it is a side branch |
| [[progression/act-iv-beyond-reality\|Act IV – Beyond Reality]] | The End | Kill the Ender Dragon, then visit the End Highlands |
| [[progression/act-v-duties\|Act V – Duties]] | The Past | The last act: kill Arterius and the Scarlet Hunter |

## Gates at a glance

- **Into the Nether:** the Nether is sealed until a player uses the [[item:nether_remastered:seal_of_the_underworld_item]]. See [[progression/act-ii-first-steps/the-seal-of-the-underworld|The Seal of the Underworld]].
- **Into the End:** the End portal needs twelve different [[progression/side-chapters/journey-to-the-end|Legendary Eyes]]; the Act IV quest needs five eye quests. See [[progression/act-iii-into-the-flames/act-iv-beyond-reality-gate|Act IV – Beyond Reality Gate]].
- **Into the Past:** the [[item:kubejs:emblem_of_the_past]], made from Universium-based ingots. See [[progression/act-v-duties/emblem-of-the-past|Emblem of the Past]].

## How the quest book works

- **Linear progression.** A quest's tasks can't progress until the quests it depends on are complete. Most quests also stay hidden until then.
- **Items are checked, not taken.** Item tasks look at the inventory and don't consume the items, unless the quest says so (the Sky Arena shop and the Heart of Deepdark trade do). Only the task's own count matters: a quest that shows a stack of four but has no count asks for one.
- **Some quests need only part of their requirements.** For example, the Bottom-Right Shard quest needs any two of three boss kills, and the Act IV gate any five of sixteen eye quests.
- **Chapter links.** Many quests are checkmarks whose rewards are buttons that jump to a side chapter. A few point at chapters that aren't in the book (Simply NightFall, Dungeons and Combat, Soulslike Weaponry, Epic Knights) and do nothing.
- **Table rewards.** "A roll on Chipped Gems" and similar rewards come from the [[progression/reward-tables|Quest Reward Tables]].

## In this section

- [[progression/prologue|Prologue]]: the tutorial chapter.
- [[progression/act-i-awakening|Act I – Awakening]]
- [[progression/act-ii-first-steps|Act II – First Steps]]
- [[progression/act-iii-into-the-flames|Act III – Into The Flames]]
- [[progression/act-iii-b-deeper-and-darker|Act III-b – Deeper and Darker]]
- [[progression/act-iv-beyond-reality|Act IV – Beyond Reality]]
- [[progression/act-v-duties|Act V – Duties]]
- [[progression/side-chapters|Side Chapters]]: the chapters linked from the acts.
- [[progression/reward-tables|Quest Reward Tables]]: the loot tables behind table rewards.
