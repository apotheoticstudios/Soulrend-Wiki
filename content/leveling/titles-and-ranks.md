---
{
  "title": "Titles & Ranks",
  "category": "Leveling",
  "order": 3,
  "summary": "Cosmetic titles unlocked by stats, mob kills or operator status, and the five ranks from Novice to Ascendant.",
  "aliases": ["Titles", "Ranks", "Novice", "Initiate", "Adept", "Champion", "Ascendant"],
  "icon": "minecraft:name_tag"
}
---
<!-- sources:
  mods/soulrend_core-2.7-1.20.1.jar SoulrendTitles (IDS: 41 titles; isUnlocked: titleless and rookie always; fighter/warrior/ranger/alchemist/lucky_one/magician need stat index 1/0/2/3/4/5 >= 16, *_great >= 30; mob_killer 100, _great 1,000, _master 10,000 mob kills; administrator needs permission level 2; every other id returns false)
  mods/soulrend_core-2.7-1.20.1.jar SoulrendStats (stat indices: 0 constitution, 1 strength, 2 agility, 3 intelligence, 4 luckiness, 5 focus)
  mods/soulrend_core-2.7-1.20.1.jar SoulrendPlayerEvents.onLivingDeath (a Mob killed by a player adds 1 to MobKills)
  mods/soulrend_core-2.7-1.20.1.jar LevellingScreen.rankName (Soulrend level >= 60 Ascendant, >= 40 Champion, >= 25 Adept, >= 10 Initiate, else Novice)
  mods/soulrend_core-2.7-1.20.1.jar assets/soulrend_core/lang/en_us.json (title names, requirement text, rank names, Active/Unlocked/Locked)
-->
**Titles** and **ranks** are cosmetic parts of [[leveling|leveling]]. A title is a name a player picks from the ones they have unlocked; a rank is shown on the Levelling screen and follows the player's Soulrend level. Neither gives any stat bonus.

## Titles

Titles are chosen in the **Titles** menu of the Levelling screen, which marks each one Active, Unlocked or Locked. Every player starts with Rookie and Titleless; Titleless shows no title to other players.

| Title | Unlocked by |
| --- | --- |
| Titleless | Always |
| Rookie | Always |
| Fighter / Great Fighter | 16 / 30 points in Strength |
| Warrior / Great Warrior | 16 / 30 points in Constitution |
| Ranger / Great Ranger | 16 / 30 points in Agility |
| Alchemist / Great Alchemist | 16 / 30 points in Intelligence |
| Lucky One / Great Lucky One | 16 / 30 points in Luckiness |
| Magician / Great Magician | 16 / 30 points in Focus |
| Mob Killer | Kill 100 mobs |
| Great Mob Killer | Kill 1,000 mobs |
| Master Mob Killer | Kill 10,000 mobs |
| Administrator | Be a server operator |

Stat titles stay unlocked only while the stat is high enough: moving points out of a stat (see [[leveling/stats|Stats]]) locks its titles again. Any mob killed by the player counts toward the Mob Killer titles.

> [!NOTE]
> Some requirement texts in game don't match the check. Great Warrior's text says Constitution 16, but it needs 30. Ranger's texts say "Dexterity" and Magician's say "Magic"; the checks use Agility and Focus.

### Titles that can't be unlocked

The Titles menu also lists these titles with requirements, but nothing in the game unlocks them, so they always stay Locked (see [[bugs|Known Bugs]]):

| Title | Requirement shown in game |
| --- | --- |
| Tank / Great Tank | Level Defense to 16 / 30 |
| Miner / Great Miner | Level Building to 16 / 30 |
| DragonSlayer | Kill 10 Ender Dragons |
| PlayerKiller | Kill 100 players |
| Hero | Win 10 raids |
| Villain | Kill 100 villagers |
| Fisherman / Great / Master | Fish 100 / 1,000 / 10,000 times |
| Enchanter / Great / Master | Enchant 100 / 1,000 / 10,000 items |
| Survivor | Survive 100 Minecraft days |
| Dealer Maker | Trade 100 times with villagers |
| Boat Driver, Cart Driver | Travel 10k by boat / minecart |
| Horse Rider, Pig Rider, Strider Rider | Travel 10k by horse / pig / strider |
| Infernal Traveler | Travel to the Nether |
| End Traveler | Travel to the End |

## Ranks

The rank follows the Soulrend level and appears on the Levelling screen as "Rank *name*".

| Rank | Soulrend level |
| --- | --- |
| Novice | 0–9 |
| Initiate | 10–24 |
| Adept | 25–39 |
| Champion | 40–59 |
| Ascendant | 60 and up |

## Related

- [[leveling/earning-levels|Earning Levels]]
- [[leveling/stats|Stats]]
