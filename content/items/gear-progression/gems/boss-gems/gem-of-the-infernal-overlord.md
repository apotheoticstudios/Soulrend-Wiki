---
{
  "title": "Gem of the Infernal Overlord",
  "summary": "An Apotheosis gem for chestplates, heavy weapons, helmets, shields, swords and tridents.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`fallen_gems_affixes:boss_gems/infernal_overlord`"],
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

**Gem of the Infernal Overlord** is an Apotheosis gem (`fallen_gems_affixes:boss_gems/infernal_overlord`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in chestplates, heavy weapons, helmets, shields, swords and tridents.

| Socketed in | Epic | Mythic | Ancient |
| --- | --- | --- | --- |
| Helmets | Gain Regeneration [∞] | Gain Regeneration II [∞] | Gain Regeneration III [∞] |
| Chestplates | +6 Armor and +3 Armor Toughness | +8 Armor and +4 Armor Toughness | +11 Armor and +6 Armor Toughness |
| Heavy Weapons | On hit, inflict Blazing Brand (00:05) [⌛ 00:25] | On hit, inflict Blazing Brand II (00:07) [⌛ 00:25] | On hit, inflict Blazing Brand III (00:10) [⌛ 00:25] |
| Light Weapons | +15 Attack Damage | +20 Attack Damage | +30 Attack Damage |
| Shields | +15% Healing Received | +20% Healing Received | +30% Healing Received |

## Obtaining

It never drops at random (weight 0). [[bosses/act-iii/ignis|Ignis]] drops exactly one when a player kills it: Epic 62.5%, Mythic 31.3%, Ancient 6.3%.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
