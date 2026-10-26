---
{
  "title": "Twisted Jewel",
  "summary": "An Apotheosis gem for spell foci, back, belts, body, charms, feet curios, hands, head curios, necklaces and rings.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`apotheotic_additions:curios/twisted`"],
      ["Rarities", "Uncommon to Esoteric"],
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

**Twisted Jewel** is an Apotheosis gem (`apotheotic_additions:curios/twisted`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in spell foci, back, belts, body, charms, feet curios, hands, head curios, necklaces and rings.

| Socketed in | Uncommon | Rare | Epic | Mythic | Ancient | Artifact | Heirloom | Esoteric |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Curios Armor | +0.65 Max Health and -0.65 Armor | +1.3 Max Health and -1.3 Armor | +1.95 Max Health and -1.95 Armor | +2.6 Max Health and -2.6 Armor | +3.25 Max Health and -3.25 Armor | +3.9 Max Health and -3.9 Armor | +4.55 Max Health and -4.55 Armor | +5.2 Max Health and -5.2 Armor |
| Jewelry | +0.1 Luck | +0.2 Luck | +0.3 Luck | +0.4 Luck | +0.5 Luck | +0.6 Luck | +0.7 Luck | +0.8 Luck |

## Obtaining

It is one of the random gems, in every dimension. Random gems drop from hostile mobs killed by a player (8% of kills, 58% for bosses) and appear in chests (25% of vanilla chests, 20% of other chests). Its drop weight is 3, which makes it about 0.7% of random gems in the Overworld, the Nether and the End (before Luck). It drops as Uncommon in the Overworld, Rare–Epic in the Nether, Rare–Mythic in the End and Uncommon–Rare in the Otherside, and as any rarity from Uncommon to Esoteric elsewhere.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Esoteric.
