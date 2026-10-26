---
{
  "title": "Gem of the Howling Storm",
  "summary": "An Apotheosis gem for boots, bows, chestplates, crossbows, heavy weapons, helmets, leggings, swords and tridents.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`fallen_gems_affixes:boss_gems/howling_storm`"],
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

**Gem of the Howling Storm** is an Apotheosis gem (`fallen_gems_affixes:boss_gems/howling_storm`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in boots, bows, chestplates, crossbows, heavy weapons, helmets, leggings, swords and tridents.

| Socketed in | Epic | Mythic | Ancient |
| --- | --- | --- | --- |
| Helmets | On hit, inflict Wetness (00:04) [⌛ 00:25] | On hit, inflict Wetness II (00:07) [⌛ 00:25] | On hit, inflict Wetness III (00:11) [⌛ 00:25] |
| Chestplates | +1 level to all existing enchantments | +2 levels to all existing enchantments | +3 levels to all existing enchantments |
| Boots | +50% Speed | +70% Speed | +90% Speed |
| Heavy Weapons | +20% Attack Damage | +30% Attack Damage | +40% Attack Damage |
| Light Weapons | On hit, inflict Stun [⌛ 00:25] | On hit, inflict Stun II (00:02) [⌛ 00:25] | On hit, inflict Stun III (00:03) [⌛ 00:25] |
| Ranged Weapons | +30% Arrow Velocity | +50% Arrow Velocity | +70% Arrow Velocity |
| Leggings | Gain Charged [∞] | Gain Charged II [∞] | Gain Charged III [∞] |

## Obtaining

It never drops at random (weight 0). [[bosses/act-iii/scylla|Scylla]] drops exactly one when a player kills it: Epic 62.5%, Mythic 31.3%, Ancient 6.3%.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
