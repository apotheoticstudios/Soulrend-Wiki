---
{
  "title": "Backpacks (Feature)",
  "summary": "How to make, wear, upgrade and keep a Traveler's Backpack: 27 to 99 slots worn on your back, safe on death.",
  "aliases": ["Traveler's Backpack", "Travelers Backpack"],
  "icon": "travelersbackpack:standard"
}
---
<!-- sources:
  defaultconfigs/travelersbackpack-server.toml (tier slots and upgrade slots; backSlotIntegration true; backpackDeathPlace true, backpackForceDeathPlace false, voidProtection true; quickSleepingBag true, enableSleepingBagSpawnPoint false; allowShulkerBoxes false; every upgrade enabled; enableBackpackAbilities true)
  game-data/recipes.json (travelersbackpack:standard and its no-tank / no-sleeping-bag variants, travelersbackpack:*_tier_upgrade, travelersbackpack:standard_smithing)
  config/defaultoptions/keybindings.txt (key.travelersbackpack.inventory 0; sort, ability, cycle tool and upgrade toggles unbound)
  content/items/curios-and-accessories/backpacks-and-quivers.md (tier table, upgrades, abilities; sourced there)
-->
A **Traveler's Backpack** is a wearable chest: it sits in the Curios **Back** slot, opens from anywhere, and holds 27 to 99 slots plus two fluid tanks and its own crafting and smelting upgrades. Every design holds the same storage; they differ in their special abilities, listed on [[items/curios-and-accessories/backpacks-and-quivers|Backpacks & Quivers]].

## How it works

1. **Craft one.** The Standard backpack is the base recipe; the other designs are made from it.

   {{recipes travelersbackpack:standard limit=1}}

2. **Wear it** in the Curios Back slot. Soulrend only lets backpacks be worn there.
3. **Open it** with the backpack key (0 by default), or place it on the ground and right-click it.
4. **Upgrade its tier** at a smithing table, one tier at a time from Leather to Netherite:

   | Tier | Slots | Upgrade slots | Tool slots |
   | --- | --- | --- | --- |
   | Leather | 27 | 2 | 2 |
   | Iron | 45 | 3 | 3 |
   | Gold | 63 | 4 | 4 |
   | Diamond | 81 | 5 | 5 |
   | Netherite | 99 | 6 | 6 |

5. **Add upgrades** in the upgrade slots: tanks, crafting, furnace, smoker, blast furnace, jukebox, pickup, magnet, feeding, refill and void.

## Details

- **Safe on death.** When its wearer dies, the backpack is placed as a block where they fell instead of going into the [[features/travel-and-storage/corpses|corpse]], and it can't be destroyed. A death in the void puts it on a floating spot above the world's bottom instead.
- **No shulker boxes.** Items that hold their own inventory, such as shulker boxes, can't be put inside.
- **Sleeping bag.** The backpack's sleeping bag can be used while it is worn, but sleeping in it doesn't set a spawn point.
- **Abilities** are on in Soulrend; the Enable/Disable Special Ability key (unbound) switches one off. See [[items/curios-and-accessories/backpacks-and-quivers#Traveler's Backpacks|Backpacks & Quivers]] for what each design does.
- The sort, ability, tool-cycling and upgrade-toggle keys are unbound; set them in Controls.

## Tips

- A backpack is the safest place for valuables on a dangerous trip, because it can't be lost to lava, the void or other players looting a corpse.
- Pickup and magnet upgrades fill the backpack as you walk, which helps on long mining or farming runs.

## Related

- [[items/curios-and-accessories/backpacks-and-quivers|Backpacks & Quivers]]
- [[features/travel-and-storage/corpses|Corpses]]
- [[features/travel-and-storage/storage-practices|Storage Practices]]
