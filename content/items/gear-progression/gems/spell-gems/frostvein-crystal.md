---
{
  "title": "Frostvein Crystal",
  "summary": "An Apotheosis gem for boots, chestplates, leggings and staffs.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`fallen_gems_affixes:compat/frostvein_crystal`"],
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

**Frostvein Crystal** is an Apotheosis gem (`fallen_gems_affixes:compat/frostvein_crystal`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in boots, chestplates, leggings and staffs.

| Socketed in | Rare | Epic | Mythic | Ancient |
| --- | --- | --- | --- | --- |
| Staffs | +2.5% Ice Spell Power | +5% Ice Spell Power | +7.5% Ice Spell Power | +10% Ice Spell Power |
| Leggings | +10% Ice Magic Resistance | +12.5% Ice Magic Resistance | +15% Ice Magic Resistance | +20% Ice Magic Resistance |
| Chestplates | On spell damage, inflict Chilled (00:03) [⌛ 00:25] | On spell damage, inflict Chilled II (00:07) [⌛ 00:25] | On spell damage, inflict Chilled III (00:10) [⌛ 00:25] | On spell damage, inflict Chilled IV (00:14) [⌛ 00:25] |
| Boots | On hit, inflict Frozen Sight (00:03) [⌛ 00:25] | On hit, inflict Frozen Sight II (00:07) [⌛ 00:25] | On hit, inflict Frozen Sight III (00:10) [⌛ 00:25] | On hit, inflict Frozen Sight IV (00:14) [⌛ 00:25] |

## Obtaining

It is one of the random gems, in every dimension. Random gems drop from hostile mobs killed by a player (8% of kills, 58% for bosses) and appear in chests (25% of vanilla chests, 20% of other chests). Its drop weight is 10, which makes it about 2.2% of random gems in the Overworld, the Nether and the End (before Luck). It drops as Rare in the Overworld, Rare–Epic in the Nether, Rare–Mythic in the End and Rare in the Otherside, and as any rarity from Rare to Ancient elsewhere.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
