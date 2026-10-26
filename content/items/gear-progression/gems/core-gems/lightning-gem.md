---
{
  "title": "Lightning Gem",
  "summary": "An Apotheosis gem for boots, bows, crossbows, leggings, pickaxes, shovels and staffs.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`apotheosis:core/lightning`"],
      ["Rarities", "Common to Ancient"]
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

**Lightning Gem** is an Apotheosis gem (`apotheosis:core/lightning`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in boots, bows, crossbows, leggings, pickaxes, shovels and staffs.

| Socketed in | Common | Uncommon | Rare | Epic | Mythic | Ancient |
| --- | --- | --- | --- | --- | --- | --- |
| Ranged Weapons | +1.75% Arrow Velocity | +5.25% Arrow Velocity | +8.75% Arrow Velocity | +12.25% Arrow Velocity | +14.87% Arrow Velocity | +19.25% Arrow Velocity |
| Mining Tools | +1.75% Mining Speed | +5.25% Mining Speed | +8.75% Mining Speed | +12.25% Mining Speed | +14.87% Mining Speed | +17.5% Mining Speed |
| Lower Armor | +3.5% Speed | +7.88% Speed | +13.12% Speed | +14% Speed | +19.25% Speed | +24.5% Speed |
| Staffs | +0.5% Lightning Spell Power | +1% Lightning Spell Power | +2.5% Lightning Spell Power | +4.5% Lightning Spell Power | +7% Lightning Spell Power | +10% Lightning Spell Power |

## Obtaining

It is one of the random gems, in every dimension. Random gems drop from hostile mobs killed by a player (8% of kills, 58% for bosses) and appear in chests (25% of vanilla chests, 20% of other chests). Its drop weight is 10, which makes it about 2.2% of random gems in the Overworld, the Nether and the End (before Luck). It drops as Common–Uncommon in the Overworld, Rare–Epic in the Nether, Rare–Mythic in the End and Uncommon–Rare in the Otherside, and as any rarity from Common to Ancient elsewhere.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
