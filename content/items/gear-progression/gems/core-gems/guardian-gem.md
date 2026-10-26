---
{
  "title": "Guardian Gem",
  "summary": "An Apotheosis gem for chestplates, heavy weapons, leggings, shields, staffs, swords and tridents.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`apotheosis:core/guardian`"],
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

**Guardian Gem** is an Apotheosis gem (`apotheosis:core/guardian`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in chestplates, heavy weapons, leggings, shields, staffs, swords and tridents.

| Socketed in | Common | Uncommon | Rare | Epic | Mythic | Ancient |
| --- | --- | --- | --- | --- | --- | --- |
| Core Armor | +2% Armor | +3.5% Armor | +5% Armor | +7% Armor | +9% Armor | +12% Armor |
| Light Weapons | +1% Overheal | +3% Overheal | +5% Overheal | +6% Overheal | +7% Overheal | +9% Overheal |
| Heavy Weapons | +1.75% Overheal | +3.5% Overheal | +5.25% Overheal | +7% Overheal | +8.75% Overheal | +10% Overheal |
| Shields | +0.25 Armor Toughness | +0.5 Armor Toughness | +0.75 Armor Toughness | +1 Armor Toughness | +1.5 Armor Toughness | +2 Armor Toughness |
| Staffs | +0.5% Nature Spell Power | +1% Nature Spell Power | +2.5% Nature Spell Power | +4.5% Nature Spell Power | +7% Nature Spell Power | +10% Nature Spell Power |

## Obtaining

It is one of the random gems, in every dimension. Random gems drop from hostile mobs killed by a player (8% of kills, 58% for bosses) and appear in chests (25% of vanilla chests, 20% of other chests). Its drop weight is 10, which makes it about 2.2% of random gems in the Overworld, the Nether and the End (before Luck). It drops as Common–Uncommon in the Overworld, Rare–Epic in the Nether, Rare–Mythic in the End and Uncommon–Rare in the Otherside, and as any rarity from Common to Ancient elsewhere.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
