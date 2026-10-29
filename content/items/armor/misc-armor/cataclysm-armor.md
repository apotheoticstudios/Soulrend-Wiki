---
{
  "title": "Cataclysm Armor",
  "aliases": [
    "Bloom Stone Pauldrons",
    "Bone Reptile Chestplate",
    "Bone Reptile Helmet",
    "Ignitium Elytra Chestplate",
    "Monstrous Helm"
  ],
  "summary": "Cataclysm Armor: 5 armor pieces and their stats.",
  "items": [
    "cataclysm:bloom_stone_pauldrons",
    "cataclysm:bone_reptile_chestplate",
    "cataclysm:bone_reptile_helmet",
    "cataclysm:ignitium_elytra_chestplate",
    "cataclysm:monstrous_helm"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage and Epic Fight researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (tooltips)
  game-data/item-stats.json (armor slot)
  game-data/item-stats.json (epicfight:weight and epicfight:stun_armor modifiers, set by config/the_config_of_alexandria); epicfight jar: lang epicfight.tip.weight, epicfight.tip.stun_armor
  cataclysm jar: lang item.cataclysm.bloom_stone_pauldrons.desc, monstrous_helm*.desc
-->

**Cataclysm Armor** lists 5 armor pieces. Values are the tooltip modifiers of each piece.

## Usage

- **Bloom Stone Pauldrons:** pressing Y fires amethyst clusters around the wearer that damage entities.
- **Monstrous Helm:** when the wearer falls below half health, it knocks back nearby entities and raises defense, knockback resistance and regeneration.
- **Ignitium Elytra Chestplate** and **Bone Reptile** pieces: no ability text in their tooltips.

## Epic Fight

The Stun Armor and Weight columns are Epic Fight stats. In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## cataclysm

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- |
| [[item:cataclysm:bone_reptile_helmet]] | Helmet | +6 | +3 | +20% | +50 | +7 |
| [[item:cataclysm:monstrous_helm]] | Helmet | +3 | +3 | +10% | +50 | +10.5 |
| [[item:cataclysm:bloom_stone_pauldrons]] | Chestplate | +8 | +2 | +10% | +50 | +28 |
| [[item:cataclysm:bone_reptile_chestplate]] | Chestplate | +11 | +3 | +20% | +50 | +7 |
| [[item:cataclysm:ignitium_elytra_chestplate]] | Chestplate | +11 | +4 | +15% | +25 | +27 |

