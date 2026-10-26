---
{
  "title": "Gem of the Warlord",
  "summary": "An Apotheosis gem for bows, chestplates, crossbows, heavy weapons, helmets, swords and tridents.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`apotheosis:core/warlord`"],
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

**Gem of the Warlord** is an Apotheosis gem (`apotheosis:core/warlord`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in bows, chestplates, crossbows, heavy weapons, helmets, swords and tridents.

| Socketed in | Common | Uncommon | Rare | Epic | Mythic | Ancient |
| --- | --- | --- | --- | --- | --- | --- |
| Light or Ranged Weapons | +3.75% Crit Damage | +7.5% Crit Damage | +10% Crit Damage | +12.5% Crit Damage | +18.75% Crit Damage | +25% Crit Damage |
| Heavy Weapons | +3.75% Crit Damage | +7.5% Crit Damage | +10% Crit Damage | +12.5% Crit Damage | +18.75% Crit Damage | +25% Crit Damage |
| Chestplates | +2.5% Max Health | +5% Max Health | +7.5% Max Health | +10% Max Health | +15% Max Health | +20% Max Health |
| Helmets | +2% Attack Damage | +3.5% Attack Damage | +5% Attack Damage | +6.5% Attack Damage | +8% Attack Damage | +10% Attack Damage |

## Obtaining

It is one of the random gems, in every dimension. Random gems drop from hostile mobs killed by a player (8% of kills, 58% for bosses) and appear in chests (25% of vanilla chests, 20% of other chests). Its drop weight is 10, which makes it about 2.2% of random gems in the Overworld, the Nether and the End (before Luck). It drops as Common–Uncommon in the Overworld, Rare–Epic in the Nether, Rare–Mythic in the End and Uncommon–Rare in the Otherside, and as any rarity from Common to Ancient elsewhere.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
