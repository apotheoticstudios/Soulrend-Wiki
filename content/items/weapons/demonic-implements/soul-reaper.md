---
{
  "title": "Soul Reaper",
  "summary": "A scythe from Marium's Soulslike Weaponry, part of the Demonic Implements quest chapter.",
  "infobox": {
    "item": "soulsweapons:soul_reaper",
    "rows": [
      ["Type", "Scythe"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "21"],
      ["Attack speed", "1.20"]
    ]
  },
  "items": ["soulsweapons:soul_reaper"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type ba_tweaks:heavy_weapon, from paxi:soulrend_ef_capabilities)
  soulsweapons jar: SoulReaper class, lang tooltip.soulsweapons.soul_release.*, key.soulsweapons.collect_summons_soul_reaper
  config/soulsweapons/soulsweapons.json (soul_reaper_summoned_allies_cap 50)
-->

**Soul Reaper** is a scythe from Marium's Soulslike Weaponry. It is weapon 24 of 27 in [[items/weapons/demonic-implements|Demonic Implements]], a Pursuit of Mastery quest chapter.

## Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| [[bosses/act-ii/night-prowler\|Night Prowler]] (drop) | 100% | 1 |

It can also be crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 21 |
| Attack Speed | 1.20 |
| Impact | 3 |
| Targets per swing | 10 |
| Armor Negation | 20% |
| Entity Reach | 3 |
| Enchantability | 10 |
| Fire resistant | Yes |

## Usage

**Soul Release** (tooltip under Left Alt): using it summons a familiar whose strength depends on the souls the scythe has harvested. A key ("Collect summons to item") calls the summons back into the scythe. Soulrend caps summoned allies at 50.

## Moveset

In Epic Fight it is a spear. Its default Two Handed style has a five-hit basic combo and the innate skill Steel Whirlwind.

{{moveset soulsweapons:soul_reaper}}

## Crafting

{{recipes soulsweapons:soul_reaper}}
