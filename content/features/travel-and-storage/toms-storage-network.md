---
{
  "title": "Tom's Storage Network",
  "summary": "A step-by-step guide to Tom's Simple Storage: connect chests into one network and search, craft and pull items from a terminal.",
  "aliases": ["Tom's Simple Storage", "Toms Storage", "Storage Terminal", "Crafting Terminal", "Inventory Connector"],
  "icon": "toms_storage:ts.storage_terminal"
}
---
<!-- sources:
  mods/toms_storage-1.20-1.7.1.jar assets/toms_storage/lang/en_us.json (tooltip.toms_storage.*: inventory_connector, trim, storage_terminal, crafting_terminal, inventory_cable, inventory_cable_connector, inventory_proxy, inventory_hopper, level_emitter, open_crate, wireless_terminal, adv_wireless_terminal and its beacon lines, sorting_*, search_*, ctrlMode_*, pull_*, item_filter, poly_item_filter, tag_item_filter, loop)
  saves/New World/serverconfig/toms_storage-server.toml (inventoryConnectorRange 16, wirelessReach 16, advWirelessRange 64, wirelessTermBeaconLvl 1, wirelessTermBeaconLvlDim 4; mod defaults, no defaultconfigs override)
  game-data/items.json (toms_storage items; Storage and Crafting Terminal "Works on Create Contraptions"; Advanced Wireless Terminal open key "Not Bound")
  game-data/recipes.json (toms_storage:* recipes, unchanged by Soulrend; Advanced Wireless Terminal is a smithing recipe)
  config/defaultoptions/keybindings.txt (key.toms_storage.open_terminal unbound)
  mods/Toms-Performant-Storage-forge-0.1.0+1.20.1.jar (performance add-on, no items)
-->
**Tom's Simple Storage** joins chests, barrels, drawers and other inventories into one network, then shows everything in it on a single **terminal**: search, sort, take items out and craft from them, all in one screen. It works with every container in Soulrend, so it is the usual way to tie together the storage described in [[features/travel-and-storage/storage-practices|Storage Practices]].

## Before you start

- Wood, iron, a little redstone and diamonds cover the basic network.
- Decide where the storage room goes. Every inventory in the network must touch the connector, a Trim or a cable.

## Steps

### 1. Place the Inventory Connector

The **Inventory Connector** is the heart of the network. It joins every inventory that touches it, or touches another inventory that does, into one.

{{recipes toms_storage:ts.inventory_connector}}

Place chests (or barrels, drawers, Sophisticated storage, Create vaults) against it and against each other. The network reaches up to 16 blocks from the connector.

### 2. Fill the gaps with Trims

An inventory that doesn't touch the others can be joined with **Inventory Trims**: decorative blocks that carry the connection across a gap.

{{recipes toms_storage:ts.trim}}

### 3. Add a terminal

A **Storage Terminal** is placed on any inventory of the network and shows every item in it. The **Crafting Terminal** does the same with a crafting grid built in, which takes ingredients straight from storage.

{{recipes toms_storage:ts.storage_terminal}}

{{recipes toms_storage:ts.crafting_terminal}}

### 4. Use the terminal

- **Search** with the text box. The search mode button switches between Standard Search, Auto Search and their "Keep" versions.
- **Sort** by item amount, name or mod.
- **Take items** by clicking them. The control mode button chooses how single items are pulled: Vanilla-like (right-click), AE-like (Shift+right-click) or Refined Storage-like (middle click).
- **Deposit items** by shift-clicking them from your inventory.
- In the Crafting Terminal, a toggle lets crafting also pull missing ingredients from your inventory.

### 5. Reach it from a distance

| Item | Range |
| --- | --- |
| [[item:toms_storage:ts.wireless_terminal]] | Opens a terminal you look at from up to 16 blocks away. |
| [[item:toms_storage:ts.adv_wireless_terminal]] | Shift-right-click a terminal to bind it; then works from up to 64 blocks away, from anywhere in the dimension with a level 1 beacon within 8 blocks of the bound terminal, and from other dimensions with a level 4 beacon. The terminal's chunk must be loaded. |

The Advanced Wireless Terminal is made at a smithing table from the plain one:

{{recipes toms_storage:ts.adv_wireless_terminal}}

It can also be opened with the **Open Terminal** key, which is unbound in Soulrend; set it in Controls.

## Expanding the network

- **Inventory Cables** carry the network over long distances. An **Inventory Cable Connector** attaches each inventory to the cable, and one Inventory Connector must still be on the network. Filtered and framed versions exist.
- An **Inventory Proxy** extends the face of the block it points at.
- A **Basic Inventory Hopper** imports or exports items for the network. Right-click it with an item to set its filter; shift-click with an empty hand to clear it.
- A **Level Emitter** gives a redstone signal when the stored amount of an item is above or below a set number.
- **Item Filters** (by item, damage and NBT), **Tag Item Filters** and **Polymorphic Item Filters** (only items already in that inventory) limit what goes where.
- An **Open Crate** turns the block in front of it into an inventory that drops what goes in as item entities.
- A **Paint Kit** repaints Trims and framed cables to match the walls.

## Details

- **Loops break the network.** If cables or connectors form a loop, the terminal reports "Loop detected in your storage system".
- **Create contraptions.** Storage and Crafting Terminals also work when mounted on a Create contraption.
- **Tom's Performant Storage** is installed alongside to make large networks cheaper to run; it adds no items.

## Next

- [[features/travel-and-storage/storage-practices|Storage Practices]]
- [[items/storage#Tom's Simple Storage|Storage Items]]
