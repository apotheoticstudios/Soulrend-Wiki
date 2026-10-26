---
{
  "title": "Gem of the Fallen Warrior",
  "summary": "An Apotheosis gem for boots, heavy weapons, helmets, leggings, swords and tridents.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`fallen_gems_affixes:boss_gems/fallen_warrior`"],
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

**Gem of the Fallen Warrior** is an Apotheosis gem (`fallen_gems_affixes:boss_gems/fallen_warrior`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in boots, heavy weapons, helmets, leggings, swords and tridents.

| Socketed in | Epic | Mythic | Ancient |
| --- | --- | --- | --- |
| Helmets | +50% Cold Damage | +75% Cold Damage | +100% Cold Damage |
| Leggings | +12.5% Dodge Chance | +17.5% Dodge Chance | +25% Dodge Chance |
| Heavy Weapons | +4 Impact | +7 Impact | +10 Impact |
| Light Weapons | +5% Overheal | +12% Overheal | +20% Overheal |
| Boots | On hit, inflict Chilled (00:07) [⌛ 00:25] | On hit, inflict Chilled II (00:10) [⌛ 00:25] | On hit, inflict Chilled III (00:15) [⌛ 00:25] |

## Obtaining

It never drops at random (weight 0). [[bosses/act-iii/maledictus|Maledictus]] drops exactly one when a player kills it: Epic 62.5%, Mythic 31.3%, Ancient 6.3%.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
