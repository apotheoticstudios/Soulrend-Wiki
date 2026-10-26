---
{
  "title": "Tyrannical Gem",
  "summary": "An Apotheosis gem for bows, chestplates, crossbows, heavy weapons, leggings, shields, swords and tridents.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`apotheosis:core/tyrannical`"],
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

**Tyrannical Gem** is an Apotheosis gem (`apotheosis:core/tyrannical`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in bows, chestplates, crossbows, heavy weapons, leggings, shields, swords and tridents.

| Socketed in | Common | Uncommon | Rare | Epic | Mythic | Ancient |
| --- | --- | --- | --- | --- | --- | --- |
| Heavy Weapons | +1 Impact | +2 Impact | +3 Impact | +4 Impact | +5.5 Impact | +7 Impact |
| Light Weapons | +0.17 Attack Knockback | +0.35 Attack Knockback | +0.52 Attack Knockback | +0.7 Attack Knockback | +1.05 Attack Knockback | +1.23 Attack Knockback |
| Core Armor | +1% Armor Toughness | +2% Armor Toughness | +3% Armor Toughness | +5% Armor Toughness | +7% Armor Toughness | +10% Armor Toughness |
| Shields | +0.25 Attack Knockback | +0.5 Attack Knockback | +0.75 Attack Knockback | +1 Attack Knockback | +1.5 Attack Knockback | +2 Attack Knockback |
| Ranged Weapons |  |  |  |  | On arrow hit, inflict Bleeding (00:08) [⌛ 00:02] [Stacking] | On arrow hit, inflict Bleeding II (00:10) [⌛ 00:02] [Stacking] |

## Obtaining

It is one of the random gems, in every dimension. Random gems drop from hostile mobs killed by a player (8% of kills, 58% for bosses) and appear in chests (25% of vanilla chests, 20% of other chests). Its drop weight is 10, which makes it about 2.2% of random gems in the Overworld, the Nether and the End (before Luck). It drops as Common–Uncommon in the Overworld, Rare–Epic in the Nether, Rare–Mythic in the End and Uncommon–Rare in the Otherside, and as any rarity from Common to Ancient elsewhere.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
