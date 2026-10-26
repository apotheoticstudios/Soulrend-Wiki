---
{
  "title": "Gem of the Ruler of Abyss",
  "summary": "An Apotheosis gem for boots, bows, chestplates, crossbows, heavy weapons, helmets, swords and tridents.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`fallen_gems_affixes:boss_gems/ruler_of_abyss`"],
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

**Gem of the Ruler of Abyss** is an Apotheosis gem (`fallen_gems_affixes:boss_gems/ruler_of_abyss`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in boots, bows, chestplates, crossbows, heavy weapons, helmets, swords and tridents.

| Socketed in | Epic | Mythic | Ancient |
| --- | --- | --- | --- |
| Chestplates | Magic damage taken is reduced by 10% | Magic damage taken is reduced by 15% | Magic damage taken is reduced by 25% |
| Boots | +5% Dodge Chance and +40% Swim Speed | +10% Dodge Chance and +50% Swim Speed | +15% Dodge Chance and +60% Swim Speed |
| Heavy Weapons | On hit, inflict Abyssal Curse (00:05) [⌛ 00:25] | On hit, inflict Abyssal Curse II (00:07) [⌛ 00:25] | On hit, inflict Abyssal Curse III (00:10) [⌛ 00:25] |
| Light Weapons | On hit, inflict Abyssal Fear (00:05) [⌛ 00:25] | On hit, inflict Abyssal Fear II (00:07) [⌛ 00:25] | On hit, inflict Abyssal Fear III (00:10) [⌛ 00:25] |
| Ranged Weapons | +45% Draw Speed | +60% Draw Speed | +75% Draw Speed |
| Helmets | On hit, gain Planar Sight (00:05) [⌛ 00:25] | On hit, gain Planar Sight (00:07) [⌛ 00:25] | On hit, gain Planar Sight (00:10) [⌛ 00:25] |

## Obtaining

It never drops at random (weight 0). [[bosses/act-iii/the-leviathan|The Leviathan]] drops exactly one when a player kills it: Epic 62.5%, Mythic 31.3%, Ancient 6.3%.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
