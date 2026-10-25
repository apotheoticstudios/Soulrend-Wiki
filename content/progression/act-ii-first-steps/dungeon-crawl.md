---
{
  "title": "Dungeon Crawl",
  "summary": "Act II branch for new players: a first dungeon, a free steel weapon, a Spirit Orb, an XP Tome and the Dark Iron the Otherside needs.",
  "aliases": ["Don't Have Weapon Yet?", "Spirit Orb (Quest)", "XP Tome (Quest)", "Crypt (Quest)", "Dark Iron Ingot (Quest)"],
  "infobox": {
    "item": "dungeons_and_combat:steel_sword",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/act-ii-first-steps|Act II – First Steps]]"],
      ["Requires", "[[progression/act-ii-first-steps/the-real-journey-begins|The Real Journey Begins]]"],
      ["Quests", "7"],
      ["Rewards", "A steel weapon of your choice, 50 experience points, loot"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/act_2.snbt: Dungeon Crawl (structure dungeoncrawl:dungeon; subtitle "The most iconic dungeon to start (recommended for new players!)"; Structure Loot), Spirit Orb (subtitle "Find Goddess Statue"; task paraglider:spirit_orb; 2 XP levels), XP Tome (subtitle "Keep dying and don't wanna lose exp? use this!"; 50 experience points), Don't Have Weapon Yet? (subtitle "Take one for free!"; choice of Steel Weapons), Lantern (subtitle "Good source of light... use in trinket slot"; 16 cobblestone), Crypt (structure graveyard:crypt; subtitle "Corruption can be used for trading... under Dead Tree.."; Structure Loot), Dark Iron Ingot (subtitle "Used for Agony or Torment"; 1 XP level)
  config/ftbquests/quests/chapters/act_2.snbt The Otherside (depends on Dark Iron Ingot)
  config/ftbquests/quests/reward_tables/steel_weapons.snbt; config/item_obliterator.json5 (removes *_estoc, *_stylet, *_bastardsword, *_ranseur, *_ahlspiess)
  game-data/items.json xpbook:xp_tome tooltip
-->
The **Dungeon Crawl** branch of [[progression/act-ii-first-steps|Act II]] starts with the quest's own recommendation for new players: a Dungeon Crawl dungeon. It hands out a free steel weapon, points to a few useful items, and leads to the Crypt, whose Dark Iron Ingot is one of the two requirements of [[progression/act-ii-first-steps/the-otherside|The Otherside]].

## Requirements

- [[progression/act-ii-first-steps/the-real-journey-begins|The Real Journey Begins]]

## Objectives

| Quest | Requires | Task | Rewards |
| --- | --- | --- | --- |
| Dungeon Crawl | The Real Journey Begins | Find a `dungeoncrawl:dungeon` | Structure Loot |
| Don't Have Weapon Yet? ("Take one for free!") | Dungeon Crawl | Checkmark | One weapon of your choice from [[progression/reward-tables#Steel Weapons\|Steel Weapons]] |
| Lantern ("Good source of light... use in trinket slot") | Don't Have Weapon Yet? | Have a [[item:minecraft:lantern]] | 16 Cobblestone |
| Spirit Orb ("Find Goddess Statue") | Dungeon Crawl | Have a [[item:paraglider:spirit_orb]] | 2 XP levels |
| XP Tome | Dungeon Crawl | Have an [[item:xpbook:xp_tome]] | 50 experience points |
| Crypt | Dungeon Crawl | Find a `graveyard:crypt` | Structure Loot |
| Dark Iron Ingot ("Used for Agony or Torment") | Crypt | Have a [[item:graveyard:dark_iron_ingot]] | 1 XP level |

The subtitles explain the items: the lantern can be worn in a trinket slot as a light source, the Spirit Orb comes from a Goddess Statue, and the XP Tome ("Keep dying and don't wanna lose exp? use this!") stores experience: sneak and right-click to store, right-click to take it back.

The Crypt quest's subtitle adds a hint about The Graveyard mod: "Corruption can be used for trading... under Dead Tree..".

## Walkthrough

1. Find a Dungeon Crawl dungeon with an Explorer's Compass and claim the free weapon.
2. Find a Crypt and take a Dark Iron Ingot from it.
3. Keep the Dark Iron: [[progression/act-ii-first-steps/the-otherside|The Otherside]] needs this quest, and its Heart of the Deep recipe uses Dark Iron Blocks.

> [!WARNING]
> The Steel Weapons choice also lists the Steel Stiletto, Ranseur, Ahlspiess, Bastard Sword and Estoc. Soulrend removes all five weapon types, so pick something else.

## Next

- [[progression/act-ii-first-steps/the-otherside|The Otherside]] (with The Warden)
