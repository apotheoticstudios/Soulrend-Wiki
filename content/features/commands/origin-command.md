---
{
  "title": "/origin",
  "summary": "Operator command from the Origins mod: read, set, randomize or re-pick a player's race and class.",
  "aliases": ["origin command", "/origin set", "/origin gui", "Change Origin", "Change Class"],
  "icon": "minecraft:armor_stand"
}
---
<!-- sources:
  mods/Origins-1.10.2+mc.1.20.x.jar OriginCommand (literals set <targets> <layer> <origin>, has <targets> <layer> <origin>, get <target> <layer>, gui <targets> [layer], random <targets> [layer]; requires permission level 2; random refused on layers that don't allow it)
  config/paxi/datapacks/soulrend_origins_classes/data/origins/origin_layers/rpg_class.json (layer origins:rpg_class, allow_random, exclude_random classes:wildheart); Origins jar data/origins/origin_layers/origin.json (layer origins:origin, allow_random, exclude_random origins:human)
  mods/soulrend_core-2.7-1.20.1.jar SoulrendClientGuiEvents.replaceDefaultOriginSelectionScreen (the Soulrend selector replaces Origins' choose screen)
-->
**/origin** is the Origins mod's command for a player's [[origins|origin]]. Soulrend has two origin layers: `origins:origin` is the **race** and `origins:rpg_class` is the **class**. The command needs **permission level 2** (operators, or cheats in singleplayer); players can't change their own origin once it is picked.

## How it works

| Command | Does |
| --- | --- |
| `/origin get <player> <layer>` | Shows the player's origin on that layer. |
| `/origin has <players> <layer> <origin>` | Checks whether they have that origin (useful in `/execute if`). |
| `/origin set <players> <layer> <origin>` | Gives them that origin. |
| `/origin random <players> [layer]` | Picks a random origin, on one layer or on all of them. |
| `/origin gui <players> [layer]` | Opens the [[features/character/origin-selector\|Origin Selector]] again, for one layer or all, so the player can choose anew. |

## Details

- **Examples:** `/origin set Steve origins:rpg_class classes:mage_fire` makes Steve a [[origins/mage-classes/pyromancer|Pyromancer]]; `/origin gui Steve origins:rpg_class` lets Steve pick a new class.
- **Ids** of races and classes are listed in each origin page's sources, and tab completion suggests them.
- **Random** skips the Human race and the Wildheart class, as in the selector.
- `/origin gui` shows Soulrend's selector, not the Origins mod's default screen.

## Related

- [[origins|Origins]]
- [[features/character/origin-selector|Origin Selector]]
- [[features/commands|Commands]]
