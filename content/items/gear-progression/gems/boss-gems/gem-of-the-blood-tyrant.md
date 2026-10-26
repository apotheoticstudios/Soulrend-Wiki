---
{
  "title": "Gem of the Blood Tyrant",
  "summary": "An Apotheosis gem for heavy weapons, helmets and leggings.",
  "infobox": {
    "item": "apotheosis:gem",
    "itemRows": false,
    "rows": [
      ["Gem ID", "`fallen_gems_affixes:boss_gems/blood_tyrant`"],
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

**Gem of the Blood Tyrant** is an Apotheosis gem (`fallen_gems_affixes:boss_gems/blood_tyrant`). Gems go into sockets on gear and give a bonus that depends on the gem's rarity and the kind of item it is socketed in; [[items/gear-progression/gems|Gems]] explains sockets and the notation in the table.

## Bonuses

It fits in heavy weapons, helmets and leggings.

| Socketed in | Epic | Mythic | Ancient |
| --- | --- | --- | --- |
| Helmets | +3% to All Stats | +6% to All Stats | +10% to All Stats |
| Leggings | On hit, inflict Bone Fracture (00:05) [⌛ 00:25] | On hit, inflict Bone Fracture II (00:07) [⌛ 00:25] | On hit, inflict Bone Fracture III (00:10) [⌛ 00:25] |
| Heavy Weapons | +5% Overheal | +10% Overheal | +15% Overheal |

## Obtaining

It never drops at random (weight 0). [[bosses/act-iii/ancient-remnant|Ancient Remnant]] drops exactly one when a player kills it: Epic 62.5%, Mythic 31.3%, Ancient 6.3%.

The [[items/gear-progression/gems#Upgrading gems|Gem Cutting Table]] raises a gem one rarity at a time, up to Ancient.
