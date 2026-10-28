---
{
  "title": "Hunter",
  "summary": "Archer and fletcher: +30% arrow damage, extra arrows per craft, camouflage in leaves and Looting II on every kill.",
  "icon": "minecraft:bow",
  "infobox": {
    "item": "minecraft:bow",
    "itemRows": false,
    "rows": [
      [
        "ID",
        "`classes:hunter`"
      ],
      [
        "Tab",
        "Ranged"
      ],
      [
        "Impact",
        "Low"
      ]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_reforged/data/classes/origins/hunter.json
  config/paxi/datapacks/soulrend_reforged/data/classes/powers/hunter/*.json (marksman: attributeslib:arrow_damage +0.3; leaves: phase through #leaves, invisible inside leaves; fletcher: 6 arrows, 3 spectral, 8 dragonbone, not for medievalorigins:wood_elf; looting)
  config/paxi/datapacks/soulrend_reforged/data/soulrend/recipes/hunter/twig_arrows.json (type soulrend_origins:twig_arrows, 6 arrows)
  mods/soulrend_origins-1.2-1.20.1.jar TwigArrows (only for the Hunter class; Forest Elves get 8)
  mods/soulrend_core-2.7-1.20.1.jar gameplay/HunterClass (onLooting: Looting at least 2 for kills by a Hunter; starter Supplementaries quiver with 32 arrows)
  config/paxi/datapacks/soulrend_reforged/data/classes/functions/hunter.mcfunction (starting kit)
  config/soulrend_core/common.toml classCategories (selector tabs)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names; "Jump!" is not in the origin)
-->
The **Hunter** is the only class in the Ranged tab: a practiced archer who gets more out of every arrow, hides in foliage and takes richer spoils from its prey.

## Powers

| Power | Effect |
| --- | --- |
| Marksman | +30% Arrow Damage. |
| One With Leaves | Walks through leaves, and is invisible while inside them. Sneaking on leaves sinks through them. |
| Resourceful Fletcher | The [[item:minecraft:arrow]] recipe makes 6 arrows, [[item:minecraft:spectral_arrow]] 3 and [[item:iceandfire:dragonbone_arrow]] 8. Adds a twig arrow recipe (below). Doesn't apply to [[origins/races/forest-elf\|Forest Elves]], whose own Fletcher gives more. |
| Hunter's Harvest | Every kill counts as Looting II, unless the weapon's Looting is higher. |
| Basic Items | Leather armor, a Soulbound [[item:minecraft:bow]] with Unbreaking V, a [[item:supplementaries:quiver]] holding 32 arrows, and 8 Cooked Chicken. |

The twig arrow recipe takes a Feather, String, Shadow Silk or Cursed Silk at the bottom; it makes 6 arrows for a Hunter and 8 for a Forest Elf Hunter.

```recipe
{ "station": "crafting_table", "grid": ["F", "T", "B"], "key": { "F": "minecraft:flint", "T": "twigs:twig", "B": "minecraft:feather" }, "output": "minecraft:arrow", "count": 6 }
```

## Playstyle

The Hunter fights from range and never runs short of arrows. Hunter's Harvest raises drops from every kill, so it also suits farming mobs. One With Leaves turns any forest into cover.

## Pairs well with

- [[origins/races/forest-elf|Forest Elf]]: piercing, armor-shredding arrows and 8 arrows per twig craft.
- [[origins/races/pixie|Pixie]] and [[origins/races/corrosid|Corrosid]]: fliers that can shoot from where melee enemies can't reach.
