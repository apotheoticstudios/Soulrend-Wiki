---
{
  "title": "Nyxite Crystal",
  "summary": "An Apotheosis gem for boots, chestplates, heavy weapons, helmets and staffs.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`fallen_gems_affixes:compat/nyxite_crystal`"],
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

**Nyxite Crystal** is an Apotheosis gem (`fallen_gems_affixes:compat/nyxite_crystal`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in boots, chestplates, heavy weapons, helmets and staffs.

| Socketed in | Rare | Epic | Mythic | Ancient |
| --- | --- | --- | --- | --- |
| Staffs | +2.5% Ender Spell Power | +5% Ender Spell Power | +7.5% Ender Spell Power | +10% Ender Spell Power |
| Chestplates | +10% Ender Magic Resistance | +12.5% Ender Magic Resistance | +15% Ender Magic Resistance | +20% Ender Magic Resistance |
| Helmets | On spell damage, gain Evasion (00:07) [⌛ 00:25] | On spell damage, gain Evasion II (00:10) [⌛ 00:25] | On spell damage, gain Evasion III (00:13) [⌛ 00:25] | On spell damage, gain Evasion IV (00:16) [⌛ 00:25] |
| Boots | When attacked, gain Astral Sense [Entity] (00:07) [⌛ 00:25] | When attacked, gain Astral Sense [Entity] II (00:10) [⌛ 00:25] | When attacked, gain Astral Sense [Entity] III (00:13) [⌛ 00:25] | When attacked, gain Astral Sense [Entity] III (00:16) [⌛ 00:25] |
| Heavy Weapons | +1 Echoing Strikes | +1 Echoing Strikes | +2 Echoing Strikes | +2 Echoing Strikes |

## Obtaining

It is one of the random gems, in every dimension. Random gems drop from hostile mobs killed by a player (8% of kills, 58% for bosses) and appear in chests (25% of vanilla chests, 20% of other chests). Its drop weight is 10, which makes it about 2.2% of random gems in the Overworld, the Nether and the End (before Luck). It drops as Rare in the Overworld, Rare–Epic in the Nether, Rare–Mythic in the End and Rare in the Otherside, and as any rarity from Rare to Ancient elsewhere.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
