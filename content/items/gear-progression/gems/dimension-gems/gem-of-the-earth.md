---
{
  "title": "Gem of the Earth",
  "summary": "An Apotheosis gem for chestplates, heavy weapons, leggings, pickaxes, shovels, swords and tridents.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`apotheosis:overworld/earth`"],
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

**Gem of the Earth** is an Apotheosis gem (`apotheosis:overworld/earth`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in chestplates, heavy weapons, leggings, pickaxes, shovels, swords and tridents.

| Socketed in | Rare | Epic | Mythic | Ancient |
| --- | --- | --- | --- | --- |
| Melee Weapons | +1 level to existing Sharpness | +2 levels to existing Sharpness | +3 levels to existing Sharpness | +4 levels to existing Sharpness |
| Core Armor | +1 level to existing Protection | +2 levels to existing Protection | +3 levels to existing Protection | +4 levels to existing Protection |
| Mining Tools | +1 level to existing Fortune | +2 levels to existing Fortune | +3 levels to existing Fortune | +4 levels to existing Fortune |

## Obtaining

It is one of the random gems, only in the Overworld. Random gems drop from hostile mobs killed by a player (8% of kills, 58% for bosses) and appear in chests (25% of vanilla chests, 20% of other chests). Its drop weight is 5, which makes it about 1.1% of random gems in the Overworld (before Luck). It drops as Rare in the Overworld.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
