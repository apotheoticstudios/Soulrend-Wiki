---
{
  "title": "Gem of the Royal Family",
  "summary": "An Apotheosis gem for bows, crossbows, helmets, pickaxes and shields.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`apotheosis:overworld/royalty`"],
      ["Rarities", "Rare to Ancient"],
      ["Unique", "Yes"]
    ]
  }
}
---
<!-- sources:
  researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/gems.json (weight, dimensions, rarities, bonus lines), game-data/recipes.json (crafted gems)
  config/apotheosis/adventure.cfg (Gem Drop Chance 0.08, Gem Boss Bonus 0.5, Gem Loot Rules, Gem Dimensional Rarities as parsed: dimension|min|max)
  Apotheosis jar: AdventureEvents.dropsHigh (player kills of Monsters only)
  fallen_gems_affixes jar: data/fallen_gems_affixes/loot_modifiers/*_modifier.json, GemLootModifier (one gem per kill, chances as weights)
  calc: drop share = weight / sum of weights of gems that can drop in that dimension
-->

**Gem of the Royal Family** is an Apotheosis gem (`apotheosis:overworld/royalty`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in bows, crossbows, helmets, pickaxes and shields.

| Socketed in | Rare | Epic | Mythic | Ancient |
| --- | --- | --- | --- | --- |
| Helmets | +0.5% to All Stats | +1% to All Stats | +1.5% to All Stats | +2% to All Stats |
| Pickaxes | Breaking Copper Ore has a 15% chance to drop Raw Gold instead. | Breaking Copper Ore has a 20% chance to drop Raw Gold instead. | Breaking Copper Ore has a 25% chance to drop Raw Gold instead. | Breaking Copper Ore has a 40% chance to drop Raw Gold instead. |
| Ranged Weapons | +25% Protection Shred | +30% Protection Shred | +35% Protection Shred | +40% Protection Shred |
| Shields | +15% Armor and +7.5% Armor Toughness, but -25% Speed | +25% Armor and +12.5% Armor Toughness, but -30% Speed | +35% Armor and +22.5% Armor Toughness, but -35% Speed | +50% Armor and +30% Armor Toughness, but -40% Speed |

## Obtaining

It is one of the random gems, only in the Overworld. Random gems drop from hostile mobs killed by a player (8% of kills, 58% for bosses) and appear in chests (25% of vanilla chests, 20% of other chests). Its drop weight is 5, which makes it about 1.1% of random gems in the Overworld (before Luck). It drops as Rare in the Overworld.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
