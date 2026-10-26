---
{
  "title": "Gem of the Combatant",
  "summary": "An Apotheosis gem for bows, chestplates, crossbows, heavy weapons, leggings, staffs, swords and tridents.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`apotheosis:core/combatant`"],
      ["Rarities", "Common to Ancient"],
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

**Gem of the Combatant** is an Apotheosis gem (`apotheosis:core/combatant`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in bows, chestplates, crossbows, heavy weapons, leggings, staffs, swords and tridents.

| Socketed in | Common | Uncommon | Rare | Epic | Mythic | Ancient |
| --- | --- | --- | --- | --- | --- | --- |
| Ranged Weapons | +1.75% Arrow Damage | +5.25% Arrow Damage | +7% Arrow Damage | +10.5% Arrow Damage | +14% Arrow Damage | +17.5% Arrow Damage |
| Core Armor | Physical damage taken is reduced by 2.1% | Physical damage taken is reduced by 3.14% | Physical damage taken is reduced by 5.24% | Physical damage taken is reduced by 7.34% | Physical damage taken is reduced by 9.46% | Physical damage taken is reduced by 11.56% |
| Melee Weapons | +1 Attack Damage | +2 Attack Damage | +3.5 Attack Damage | +5 Attack Damage | +7 Attack Damage | +10 Attack Damage |
| Staffs | +20 Max Mana | +35 Max Mana | +50 Max Mana | +65 Max Mana | +80 Max Mana | +100 Max Mana |

## Obtaining

It is one of the random gems, in every dimension. Random gems drop from hostile mobs killed by a player (8% of kills, 58% for bosses) and appear in chests (25% of vanilla chests, 20% of other chests). Its drop weight is 10, which makes it about 2.2% of random gems in the Overworld, the Nether and the End (before Luck). It drops as Common–Uncommon in the Overworld, Rare–Epic in the Nether, Rare–Mythic in the End and Uncommon–Rare in the Otherside, and as any rarity from Common to Ancient elsewhere.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
