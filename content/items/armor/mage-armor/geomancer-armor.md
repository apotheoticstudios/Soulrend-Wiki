---
{
  "title": "Geomancer Armor",
  "aliases": [
    "Geomancer Beads",
    "Geomancer Robe",
    "Geomancer Belt",
    "Geomancer Sandals"
  ],
  "summary": "Armor set from Mowzie's Mobs on the Mage Armor.",
  "infobox": {
    "item": "mowziesmobs:geomancer_robe",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "17"],
      ["Toughness (all pieces)", "4"]
    ]
  },
  "items": [
    "mowziesmobs:geomancer_beads",
    "mowziesmobs:geomancer_robe",
    "mowziesmobs:geomancer_belt",
    "mowziesmobs:geomancer_sandals"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage and Epic Fight researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json
  game-data/loot-tables.json, game-data/recipes.json
  game-data/item-stats.json (epicfight:weight and epicfight:stun_armor modifiers, set by config/the_config_of_alexandria); epicfight jar: lang epicfight.tip.weight, epicfight.tip.stun_armor
  game-data/items.json (tooltips)
  mowziesmobs jar: lang item.mowziesmobs.geomancer_*.text.0
-->

**Geomancer Armor** is an armor set from Mowzie's Mobs. It is set 6 of 30 on [[items/armor/mage-armor|Mage Armor]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Geo Spell Power | Max Mana | Spell Power | Stun Armor | Weight |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:mowziesmobs:geomancer_beads]] | Helmet | +2 | +1 | +10% | +125 | +5% | +0.75 | +5 |
| [[item:mowziesmobs:geomancer_robe]] | Chestplate | +7 | +1 | +10% | +125 | +5% | +2.62 | +17.5 |
| [[item:mowziesmobs:geomancer_belt]] | Leggings | +6 | +1 | +10% | +125 | +5% | +2.25 | +15 |
| [[item:mowziesmobs:geomancer_sandals]] | Boots | +2 | +1 | +10% | +125 | +5% | +0.75 | +5 |
| **Full set** |  | **+17** | **+4** | **+40%** | **+500** | **+20%** | **+6.37** | **+42.5** |

## Usage

Each Mowzie's Mobs geomancer piece has its own effect:

- **Beads:** +3 attack when punching, including with the Earthrend Gauntlet.
- **Robe:** a chance to raise a geomancy boulder nearby when the wearer deals or takes damage.
- **Belt:** +4 armor and +1 knockback resistance while the wearer has Slowness.
- **Sandals:** more movement speed for 3 s after falling more than 4 blocks.

## Epic Fight

Together, its 4 pieces add **42.5 Weight** and **6.38 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

[[item:mowziesmobs:geomancer_beads]] drops from 3 loot tables:

| Source | Chance | Count |
| --- | --- | --- |
| Tongbi, the Sculptor (drop) | 20% (player kill) | 1 |
| `gtbcs_geomancy_plus:chests/geomancer_tower/geomancer_treasure_storage` (chest) | 9.38% | 1 |
| `mowziesmobs:chests/monastery_chest` (chest) | 1% per roll, 3–8 rolls | 1 |

[[item:mowziesmobs:geomancer_robe]] drops from 3 loot tables:

| Source | Chance | Count |
| --- | --- | --- |
| Tongbi, the Sculptor (drop) | 20% (player kill) | 1 |
| `gtbcs_geomancy_plus:chests/geomancer_tower/geomancer_treasure_storage` (chest) | 9.38% | 1 |
| `mowziesmobs:chests/monastery_chest` (chest) | 1% per roll, 3–8 rolls | 1 |

[[item:mowziesmobs:geomancer_belt]] drops from 3 loot tables:

| Source | Chance | Count |
| --- | --- | --- |
| Tongbi, the Sculptor (drop) | 20% (player kill) | 1 |
| `gtbcs_geomancy_plus:chests/geomancer_tower/geomancer_treasure_storage` (chest) | 9.38% | 1 |
| `mowziesmobs:chests/monastery_chest` (chest) | 1% per roll, 3–8 rolls | 1 |

[[item:mowziesmobs:geomancer_sandals]] drops from 3 loot tables:

| Source | Chance | Count |
| --- | --- | --- |
| Tongbi, the Sculptor (drop) | 20% (player kill) | 1 |
| `gtbcs_geomancy_plus:chests/geomancer_tower/geomancer_treasure_storage` (chest) | 9.38% | 1 |
| `mowziesmobs:chests/monastery_chest` (chest) | 1% per roll, 3–8 rolls | 1 |

## Crafting

{{recipes mowziesmobs:geomancer_beads}}

{{recipes mowziesmobs:geomancer_robe}}

{{recipes mowziesmobs:geomancer_belt}}

{{recipes mowziesmobs:geomancer_sandals}}
