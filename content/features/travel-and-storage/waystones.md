---
{
  "title": "Waystones Guide",
  "summary": "How to find, craft, activate and use waystones, warp stones and warp scrolls to travel across Soulrend.",
  "aliases": ["Waystones (Feature)", "Waystones & Warp Items (Feature)", "Fast Travel", "Teleporting"],
  "icon": "waystones:warp_stone"
}
---
<!-- sources:
  config/waystones-common.toml ([worldGen] worldGenStyle BIOME, frequency 25, dimensionAllowList overworld/nether/end, spawnInVillages true, forceSpawnInVillages false, nameGenerationMode PRESET_FIRST with no custom names; [xpCost] blocksPerXpLevel 1000, minimum and maximum base cost 1, dimensionalWarpXpCost 1, xpCostPerLeashed 0; [restrictions] generatedWaystonesUnbreakable false, transportLeashed / transportLeashedDimensional true, dimensionalWarp ALLOW, allowWaystoneToWaystoneTeleport true; [cooldowns] warpStoneCooldown 300 s per player, warpStoneUseTime 32 ticks, scrollUseTime 32 ticks, warpPlateUseTime 20 ticks; [inventoryButton] inventoryButton "" (off))
  kubejs/server_scripts/recipes/misc_utility.js (Warp Stone: Ender Pearl + Amethyst Shard + Emerald; five waystones from their stone with a Warp Stone over Obsidian; Mossy Waystone from a Waystone + 3 Vines)
  kubejs/server_scripts/magic/dacxoptics_recipes.js (second Warp Scroll recipe)
  game-data/recipes.json (exported waystone, warp stone and scroll recipes)
  mods/WaystonesTeleportPets-1.20-1.20.1--1.2.jar W2PetsMod (on WaystoneTeleportEvent.Pre: the player's tamed animals within 30 blocks horizontally and 10 vertically come along unless ordered to sit)
  mods/waystones-forge-1.20.1-14.1.21.jar PlayerWaystoneManager.getExperienceLevelCost (same dimension: clamp(floor(distance / 1000), min 1, max 1); other dimension: clamp(dimensionalWarpXpCost 1, min 1, 1); the dimensional cost replaces the distance cost, so every trip is 1 level)
  docs/instance-guide.md (leaving the Past with a waystone item)
-->
**Waystones** are Soulrend's fast-travel network. Every waystone a player activates becomes a destination they can teleport to from any other waystone, or from anywhere with a warp item. This guide covers finding waystones in the world, crafting your own, and getting around with them. The items themselves are listed on [[items/travel|Travel Items]].

## Before you start

- **Teleporting costs experience.** Every trip costs exactly **1 XP level**, however far it goes and whether or not it changes dimension.
- **There is no inventory warp button** in Soulrend. To teleport you need to stand at a waystone or carry a Warp Stone or a Warp Scroll.
- The [[progression/prologue/waystones-and-warp-items|Waystones & Warp Items]] Prologue quests ask for a Waystone, a Warp Stone and a Warp Scroll.

## Finding waystones

Waystones generate on their own in the **Overworld, the Nether and the End**:

- **In the wild**, roughly one every 25 chunks (about 400 blocks) in any direction.
- **In villages.** Waystones adds one to village generation, though some villages still spawn without one, and it isn't always in the village center. The [[item:explorerscompass:explorerscompass]] can point to the nearest village.
- **Their look follows the biome:** mossy, sandy, deepslate, blackstone and end stone versions all generate where they fit.

A found waystone already has a name. Right-click it once to **activate** it: it is added to your list of destinations for good. Generated waystones can be broken like any other block.

## Crafting waystones

Every waystone is built around a Warp Stone, so craft that first:

{{recipes waystones:warp_stone}}

Then the waystone of your choice. The plain one uses Stone Bricks; the sandy, deepslate, blackstone and end stone versions use their own stone in the same pattern:

{{recipes waystones:waystone}}

A Mossy Waystone is a plain Waystone with three Vines:

{{recipes waystones:mossy_waystone}}

Place it, then right-click it to name and activate it. A waystone at your base is the first one worth building: every Warp Stone and Warp Scroll can then bring you home.

> [!TIP]
> Activate or build a waystone in every dimension you return to (each Cataclysm dimension, the Otherside, the Past). Any warp item can then take you there for 1 level.

## Traveling

| Method | How | Cost and limits |
| --- | --- | --- |
| **Waystone** | Right-click a waystone and pick a destination. | XP only. |
| **[[item:waystones:warp_stone]]** | Hold right-click for about 1.6 s, then pick a destination. | XP, then a **5-minute cooldown**. The cooldown belongs to the player, so a second Warp Stone doesn't help. 100 uses. |
| **[[item:waystones:warp_scroll]]** | Hold right-click for about 1.6 s, then pick a destination. | XP. The scroll is used up. |
| **[[item:waystones:warp_plate]]** | Stand on the plate for 1 s. | Goes to the plate linked by its Attuned Shard. |

Sharestones only link to Sharestones of the same color, and a Portstone can send you to waystones but can't be a destination. See [[items/travel#Warp items|Travel Items]] for the Bound and Return Scrolls.

## Details

- **Animals come along.** Mobs on a lead travel with you at no extra cost, even between dimensions (except Withers). Your tamed pets within 30 blocks follow too, without a lead, unless they were told to sit.
- **Dimensions.** Teleporting between any two dimensions is allowed, which includes leaving the [[progression/act-v-duties/visit-the-past|Past]], where the Emblem of the Past can't take you back.
- **Waystones are personal.** Activating a waystone only adds it to your own list; each player activates their own.

## Next

- [[features/travel-and-storage/backpacks|Backpacks]]: carry more on long trips.
- [[features/travel-and-storage/corpses|Corpses]]: what happens to your items if a trip goes wrong.
