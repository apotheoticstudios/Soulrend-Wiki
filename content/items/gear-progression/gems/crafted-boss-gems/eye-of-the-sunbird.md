---
{
  "title": "Eye of the Sunbird",
  "summary": "An Apotheosis gem for back, body, feet curios, hands and head curios.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`apotheotic_additions:crafted/sunbird`"],
      ["Rarities", "Artifact to Esoteric"],
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

**Eye of the Sunbird** is an Apotheosis gem (`apotheotic_additions:crafted/sunbird`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in back, body, feet curios, hands and head curios.

| Socketed in | Artifact | Heirloom | Esoteric |
| --- | --- | --- | --- |
| Chestplates | When attacked, gain Sun's Blessing (04:10) [⌛ 05:00] | When attacked, gain Sun's Blessing (05:00) [⌛ 04:10] | When attacked, gain Sun's Blessing (05:50) [⌛ 03:20] |

## Obtaining

It never drops at random (weight 0). It is crafted, and comes out at Artifact rarity:

{{recipe apotheotic_additions:crafted_gems/eye_sunbird}}

The [[item:apotheotic_additions:gemboundsigil]] in the recipe is the Sigil of Awakening (see [[items/gear-progression/sigils|Sigils]]).

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Esoteric.
