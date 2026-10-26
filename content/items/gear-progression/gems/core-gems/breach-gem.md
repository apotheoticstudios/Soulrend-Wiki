---
{
  "title": "Breach Gem",
  "summary": "An Apotheosis gem for bows, crossbows, heavy weapons, staffs, swords and tridents.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`apotheosis:core/breach`"],
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

**Breach Gem** is an Apotheosis gem (`apotheosis:core/breach`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in bows, crossbows, heavy weapons, staffs, swords and tridents.

| Socketed in | Common | Uncommon | Rare | Epic | Mythic | Ancient |
| --- | --- | --- | --- | --- | --- | --- |
| Light Weapons | +0.21 Armor Pierce | +0.42 Armor Pierce | +0.84 Armor Pierce | +1.15 Armor Pierce | +1.47 Armor Pierce | +2.31 Armor Pierce |
| Heavy Weapons | +2.1% Armor Shred | +4.2% Armor Shred | +5.24% Armor Shred | +6.3% Armor Shred | +7.34% Armor Shred | +10.5% Armor Shred |
| Ranged Weapons | +0.21 Protection Pierce | +0.42 Protection Pierce | +0.84 Protection Pierce | +1.26 Protection Pierce | +1.68 Protection Pierce | +2.1 Protection Pierce |
| Staffs | +0.5% Cast Time Reduction | +1% Cast Time Reduction | +2.5% Cast Time Reduction | +4.5% Cast Time Reduction | +7% Cast Time Reduction | +10% Cast Time Reduction |

## Obtaining

It is one of the random gems, in every dimension. Random gems drop from hostile mobs killed by a player (8% of kills, 58% for bosses) and appear in chests (25% of vanilla chests, 20% of other chests). Its drop weight is 10, which makes it about 2.2% of random gems in the Overworld, the Nether and the End (before Luck). It drops as Common–Uncommon in the Overworld, Rare–Epic in the Nether, Rare–Mythic in the End and Uncommon–Rare in the Otherside, and as any rarity from Common to Ancient elsewhere.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
