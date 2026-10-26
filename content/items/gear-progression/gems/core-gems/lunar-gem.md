---
{
  "title": "Lunar Gem",
  "summary": "An Apotheosis gem for boots, heavy weapons, leggings, staffs, swords and tridents.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`apotheosis:core/lunar`"],
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

**Lunar Gem** is an Apotheosis gem (`apotheosis:core/lunar`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in boots, heavy weapons, leggings, staffs, swords and tridents.

| Socketed in | Common | Uncommon | Rare | Epic | Mythic | Ancient |
| --- | --- | --- | --- | --- | --- | --- |
| Light Weapons | +0.42 Cold Damage | +0.63 Cold Damage | +1.05 Cold Damage | +1.68 Cold Damage | +2.52 Cold Damage | +3.36 Cold Damage |
| Boots | -3.5% Gravity | -8.75% Gravity | -15.75% Gravity | -22.75% Gravity | -29.75% Gravity | -36.4% Gravity |
| Leggings | +3.5% Swim Speed | +7% Swim Speed | +10.5% Swim Speed | +15.75% Swim Speed | +21% Swim Speed | +28% Swim Speed |
| Heavy Weapons | +0.92 Cold Damage | +1.13 Cold Damage | +1.55 Cold Damage | +2.5 Cold Damage | +3.5 Cold Damage | +4.5 Cold Damage |
| Staffs | +0.5% Ice Spell Power | +1% Ice Spell Power | +2.5% Ice Spell Power | +4.5% Ice Spell Power | +7% Ice Spell Power | +10% Ice Spell Power |

## Obtaining

It is one of the random gems, in every dimension. Random gems drop from hostile mobs killed by a player (8% of kills, 58% for bosses) and appear in chests (25% of vanilla chests, 20% of other chests). Its drop weight is 10, which makes it about 2.2% of random gems in the Overworld, the Nether and the End (before Luck). It drops as Common–Uncommon in the Overworld, Rare–Epic in the Nether, Rare–Mythic in the End and Uncommon–Rare in the Otherside, and as any rarity from Common to Ancient elsewhere.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
