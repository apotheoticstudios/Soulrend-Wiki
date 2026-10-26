---
{
  "title": "Eye of the Warden",
  "summary": "An Apotheosis gem for boots, bows, chestplates, crossbows, heavy weapons, helmets, leggings, pickaxes, shields, shovels…",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`apotheotic_additions:crafted/warden`"],
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

**Eye of the Warden** is an Apotheosis gem (`apotheotic_additions:crafted/warden`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in boots, bows, chestplates, crossbows, heavy weapons, helmets, leggings, pickaxes, shields, shovels, swords and tridents.

| Socketed in | Artifact | Heirloom | Esoteric |
| --- | --- | --- | --- |
| Anything | +6 Max Health | +10 Max Health | +15 Max Health |

## Obtaining

It never drops at random (weight 0). It is crafted, and comes out at Artifact rarity:

{{recipe apotheotic_additions:crafted_gems/eye_warden}}

The [[item:apotheotic_additions:gemboundsigil]] in the recipe is the Sigil of Awakening (see [[items/gear-progression/sigils|Sigils]]).

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Esoteric.
