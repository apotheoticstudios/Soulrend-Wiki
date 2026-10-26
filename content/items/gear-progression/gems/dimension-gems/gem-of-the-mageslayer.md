---
{
  "title": "Gem of the Mageslayer",
  "summary": "An Apotheosis gem for heavy weapons, helmets, shields, staffs, swords and tridents.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`apotheosis:the_end/mageslayer`"],
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

**Gem of the Mageslayer** is an Apotheosis gem (`apotheosis:the_end/mageslayer`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in heavy weapons, helmets, shields, staffs, swords and tridents.

| Socketed in | Epic | Mythic | Ancient |
| --- | --- | --- | --- |
| Light Weapons | +6 Protection Pierce | +8 Protection Pierce | +12 Protection Pierce |
| Heavy Weapons | +25% Protection Shred | +37.5% Protection Shred | +50% Protection Shred |
| Helmets | Ignore 15% of magic damage and heal for the same amount. | Ignore 22.5% of magic damage and heal for the same amount. | Ignore 35% of magic damage and heal for the same amount. |
| Shields | Upon blocking, gain Resistance (00:10) [⌛ 00:20] | Upon blocking, gain Resistance (00:15) [⌛ 00:20] | Upon blocking, gain Resistance II (00:15) [⌛ 00:25] |
| Staffs | +5% Ender Spell Power | +10% Ender Spell Power | +15% Ender Spell Power |

## Obtaining

It is one of the random gems, only in the End. Random gems drop from hostile mobs killed by a player (8% of kills, 58% for bosses) and appear in chests (25% of vanilla chests, 20% of other chests). Its drop weight is 5, which makes it about 1.1% of random gems in the End (before Luck). It drops as Epic–Mythic in the End.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
