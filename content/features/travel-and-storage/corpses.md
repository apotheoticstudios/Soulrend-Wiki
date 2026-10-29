---
{
  "title": "Corpses",
  "summary": "On death your items stay in a corpse where you fell. It never despawns while it holds items, and anyone can open it.",
  "aliases": ["Corpse", "Death History", "Grave"],
  "icon": "minecraft:skeleton_skull"
}
---
<!-- sources:
  saves/New World/serverconfig/corpse-server.toml (mod defaults, no defaultconfigs override: death_storage_duration -1; skeleton_time 72000 ticks; show_equipment true; fall_into_void false; lava_damage false; access.only_owner false; despawn.time 600 ticks once empty, force_time -1)
  config/corpsecurioscompat-common.toml (curios go back to their slots; transfer_cursed_items false)
  mods/corpse-forge-1.20.1-1.0.23.jar lang (Corpse of %s, Transfer Items, Additional Items, Player Death History, Teleport) and HistoryCommand (/deathhistory, permission level 2)
  config/defaultoptions/keybindings.txt (key.corpse.death_history unbound)
  defaultconfigs/travelersbackpack-server.toml (backpackDeathPlace true, voidProtection true)
  content/origins/index.md (Soulbound starting kits); content/origins/races/shulk.md (Hoarder inventory kept on death)
-->
**Corpses** keep a dead player's items in the world. When a player dies, the Corpse mod gathers their inventory, armor and curios into a body that lies where they fell, wearing their equipment, named "Corpse of" the player. Walking back and opening it recovers everything.

## How it works

1. Die. The items stay in the corpse; nothing is scattered on the ground.
2. Go back to the death location and right-click the corpse.
3. Press **Transfer Items** to move everything back: armor and curios return to their slots, the rest to the inventory.

Level, stats, skill points and title aren't affected by death (see [[leveling|Leveling]]).

## Details

- **No time limit.** A corpse holding items never despawns. After 1 hour it turns into a skeleton, which changes only its look.
- **It despawns 30 s after it is emptied.**
- **Anyone can open it.** On a server, other players can loot a corpse, so get back quickly or bring friends you trust.
- **Lava and the void don't destroy it.** A corpse doesn't burn in lava and doesn't fall out of the world.
- **Cursed curios** (with a curse enchantment) aren't put back into their curio slots by Transfer Items.
- **Kept on death:** Soulbound items, such as most class starting kits, stay with the player. A [[features/travel-and-storage/backpacks|Traveler's Backpack]] doesn't go in the corpse: it is placed as a block where the player died.
- **Death history.** Corpse keeps a list of every death, with time, dimension and location. Players open it with the **Open Player Death History** key, which is unbound in Soulrend (set it in Controls). Server operators can also use `/deathhistory` to see a player's deaths and teleport to them.

## Tips

- Bind the death history key: it gives the exact coordinates of the last death.
- Carry a [[features/travel-and-storage/waystones|Warp Stone or Warp Scroll]] so you can return to the body without walking.

## Related

- [[features/travel-and-storage/backpacks|Backpacks]]
- [[features/travel-and-storage/storage-practices|Storage Practices]]
