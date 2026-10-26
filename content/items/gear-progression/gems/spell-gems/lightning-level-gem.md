---
{
  "title": "Lightning Level Gem",
  "summary": "An Apotheosis gem for back, body, feet curios, hands, head curios and spellbooks.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`fallen_gems_affixes:compat/spell_lightning`"],
      ["Rarities", "Epic to Ancient"],
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

**Lightning Level Gem** is an Apotheosis gem (`fallen_gems_affixes:compat/spell_lightning`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in back, body, feet curios, hands, head curios and spellbooks.

| Socketed in | Epic | Mythic | Ancient |
| --- | --- | --- | --- |
| Helmets | +0.3 Lightning School Level | +0.75 Lightning School Level | +1 Lightning School Level |

## Obtaining

It is one of the random gems, in every dimension. Random gems drop from hostile mobs killed by a player (8% of kills, 58% for bosses) and appear in chests (25% of vanilla chests, 20% of other chests). Its drop weight is 5, which makes it about 1.1% of random gems in the Overworld, the Nether and the End (before Luck). It drops as Epic in the Overworld, Epic in the Nether, Epic–Mythic in the End and Epic in the Otherside, and as any rarity from Epic to Ancient elsewhere.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
