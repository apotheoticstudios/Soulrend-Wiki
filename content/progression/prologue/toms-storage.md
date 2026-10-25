---
{
  "title": "Tom's Storage",
  "summary": "Four Prologue quests for a Tom's Simple Storage network: an Inventory Connector, a Storage Terminal and 36 Item Vaults.",
  "aliases": ["Tom's Simple Storage (Quest)", "A Super Simple Storage Solution"],
  "infobox": {
    "item": "toms_storage:ts.wireless_terminal",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/prologue|Prologue]]"],
      ["Requires", "[[progression/prologue/welcome-to-soulrend|Welcome to Soulrend]]"],
      ["Quests", "4"],
      ["Rewards", "3 Comparators, 2 Glowstone, a Diamond, 2 Barrels, 2 XP levels"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/the_realms.snbt "Tom's Simple Storage" (checkmark; 3 minecraft:comparator, 2 minecraft:glowstone), Inventory Connector quest (task toms_storage:ts.inventory_connector; 1 diamond, 1 XP level), Storage Terminal quest (task toms_storage:ts.storage_terminal; 2 barrels, 1 XP level), Item Vault quest (36 create:item_vault, depends on both, no rewards)
-->
**Tom's Simple Storage** ("A Super Simple Storage Solution") is a short Prologue quest line about the Tom's Simple Storage mod, which links chests and other containers into one searchable terminal. A checkmark quest opens two crafting quests, and those two open a last one for Create Item Vaults.

## Quests

| Quest | Requires | Task | Rewards |
| --- | --- | --- | --- |
| Tom's Simple Storage | [[progression/prologue/welcome-to-soulrend\|Welcome to Soulrend]] | Checkmark | 3 [[item:minecraft:comparator]], 2 [[item:minecraft:glowstone]] |
| Inventory Connector | Tom's Simple Storage | Have an [[item:toms_storage:ts.inventory_connector]] | 1 [[item:minecraft:diamond]], 1 XP level |
| Storage Terminal | Tom's Simple Storage | Have a [[item:toms_storage:ts.storage_terminal]] | 2 [[item:minecraft:barrel]], 1 XP level |
| Item Vault | Both of the above | Have 36 [[item:create:item_vault]] | None |

> [!LORE] Inventory Connector and Storage Terminal (Prologue)
> An Inventory Connector does what it sounds like, it connects chest, barrels, etc together to be a network of storage. Just place the Inventory Connector where it is touching a storage unit and it will connect all touching inventories.
>
> A Storage Terminal allows you to access your storage network in a single interface. Place the Storage Terminal onto the Inventory Connector to access your storage network.

The Item Vault quest's subtitle reads: "Item Vaults from Create allow for performant item storage! Plus, they're inexpensive."

## Walkthrough

1. Click the Tom's Simple Storage checkmark. Its comparators and glowstone go into the next two recipes.
2. Craft an Inventory Connector:

   {{recipes toms_storage:ts.inventory_connector}}

3. Craft a Storage Terminal:

   {{recipes toms_storage:ts.storage_terminal}}

4. Place the connector touching your chests, and place the terminal on the connector.
5. Optionally, craft 36 Item Vaults. The quest checks for all 36 in the inventory at once.

See [[features/travel-and-storage/toms-storage-network|Tom's Storage Network]] for more.
