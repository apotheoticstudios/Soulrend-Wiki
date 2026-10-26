---
{
  "title": "Gem of the Withered Sentinel",
  "summary": "An Apotheosis gem for boots, bows, chestplates, crossbows, heavy weapons, helmets and leggings.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`fallen_gems_affixes:boss_gems/withered_sentinel`"],
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

**Gem of the Withered Sentinel** is an Apotheosis gem (`fallen_gems_affixes:boss_gems/withered_sentinel`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in boots, bows, chestplates, crossbows, heavy weapons, helmets and leggings.

| Socketed in | Epic | Mythic | Ancient |
| --- | --- | --- | --- |
| Chestplates | Explosive damage taken is reduced by 10% | Explosive damage taken is reduced by 20% | Explosive damage taken is reduced by 30% |
| Leggings | +10% Armor | +20% Armor | +25% Armor |
| Boots | +10% Armor Shred and +2.5 Armor Pierce | +20% Armor Shred and +5 Armor Pierce | +25% Armor Shred and +7.5 Armor Pierce |
| Heavy Weapons | +20% Attack Speed | +40% Attack Speed | +50% Attack Speed |
| Ranged Weapons | +25% Arrow Damage and +60% Arrow Velocity | +35% Arrow Damage and +70% Arrow Velocity | +45% Arrow Damage and +80% Arrow Velocity |
| Helmets | On hit, gain Charged (00:05) [⌛ 00:25] | On hit, gain Charged II (00:10) [⌛ 00:25] | On hit, gain Charged III (00:15) [⌛ 00:25] |

## Obtaining

It never drops at random (weight 0). [[bosses/act-iii/the-harbinger|The Harbinger]] drops exactly one when a player kills it: Epic 62.5%, Mythic 31.3%, Ancient 6.3%.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
