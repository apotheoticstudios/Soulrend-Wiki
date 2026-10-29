---
{
  "title": "Storage Practices",
  "summary": "How to store items well in Soulrend: upgrade chests in place, pick the right container, and keep storage safe from explosions and other players.",
  "aliases": ["Maximizing Storage", "Waterlogged Chests", "Storage Security", "Chest Upgrades"],
  "icon": "sophisticatedstorage:chest"
}
---
<!-- sources:
  content/items/storage.md (tiers, slot counts and upgrades of Sophisticated Storage, Iron Chests, Storage Drawers, Tom's Simple Storage and Create vaults; sourced there)
  client-1.20.1-srg.jar ExplosionDamageCalculator.getBlockExplosionResistance (max of block and fluid resistance), WaterFluid.getExplosionResistance (100.0); ChestBlock implements SimpleWaterloggedBlock, BarrelBlock doesn't
  mods/sophisticatedstorage-1.20.1-1.5.6.2183.jar ChestBlock implements SimpleWaterloggedBlock (WATERLOGGED); mods/ironchests-5.0.2-forge.jar GenericChestBlock implements SimpleWaterloggedBlock; no SimpleWaterloggedBlock in Sophisticated barrels or StorageDrawers-forge-1.20.1-12.15.1.jar
  calc: an explosion ray loses (resistance + 0.3) x 0.3 per step through a block, 30.09 for water; a ray starts at most at power x 1.3 (TNT 4 -> 5.2, Wither spawn 7 -> 9.1), so a waterlogged block stops it
  config/ysns/disabled_entities.json5 (minecraft:creeper and graveyard:skeleton_creeper can't spawn)
  saves/New World/serverconfig/openpartiesandclaims-default-player-config.toml (claims.protection.exceptions blocksByExplosions false, fireSpread false; mod defaults)
  defaultconfigs/travelersbackpack-server.toml (backpackDeathPlace true, voidProtection true)
-->
**Storage Practices** is a guide to keeping items in Soulrend without running out of room or losing them. The pack has five storage mods; their items and tiers are listed on [[items/storage|Storage Items]], and [[features/travel-and-storage/toms-storage-network|Tom's Storage Network]] explains how to tie them together.

## Before you start

- A few stacks of wood and iron are enough for the first upgrades; gold, diamond and netherite come later.
- A water bucket, for waterlogging chests.

## Upgrade in place

Never empty a chest to replace it with a bigger one. Both chest mods upgrade a placed chest with its contents inside:

- **Sophisticated Storage:** use a **tier upgrade** (Basic to Copper, Copper to Iron, and so on) on the placed chest, barrel or shulker box. A **Basic Tier Upgrade** turns a vanilla chest or barrel into its Sophisticated version first. Each tier adds slots and upgrade slots, up to 132 slots at Netherite.
- **Iron Chests:** use a **chest upgrade** on the placed chest to move it to the next tier.

{{recipes sophisticatedstorage:basic_tier_upgrade}}

## Pick the right container

| Storing | Use | Why |
| --- | --- | --- |
| Many different items | Sophisticated chests and barrels | Most slots per block, plus upgrade slots for magnets, filters, compacting and void upgrades. |
| Huge amounts of a few items (ores, stone, drops) | Storage Drawers or Sophisticated **Limited Barrels** | One item type per slot in very large stacks; drawer storage upgrades multiply that up to ×2,048. |
| Bulk materials next to Create machines | Create **Item Vaults** | Vaults merge into one large inventory. |
| Everything, searchable | Any of the above behind a [[features/travel-and-storage/toms-storage-network\|Tom's Storage]] terminal | One screen to search and craft from. |

**Compacting** saves the most room: a Sophisticated Compacting Upgrade or a Compacting Drawer stores nuggets, ingots and blocks as their compressed form.

## Keep it safe

### Waterlog your chests

A chest with water in its block space is **waterlogged**. The game uses the stronger of the block's and the water's blast resistance, and water's is 100, so a waterlogged chest survives TNT, Ghast fireballs, End Crystals, bed explosions and the Wither. Its items stay dry and usable.

To waterlog a chest, use a water bucket on it, or place it in water. This works for:

- vanilla Chests and Trapped Chests;
- Sophisticated Storage chests;
- Iron Chests' chests.

Barrels (vanilla or Sophisticated) and Storage Drawers can't be waterlogged.

> [!NOTE]
> Creepers are disabled in Soulrend (You Shall Not Spawn blocks them), so most explosions near a base come from Ghasts, TNT, End Crystals, beds or respawn anchors used in the wrong dimension, and the Wither. Waterlogging also guards against those, and against explosions set off by other players.

### Claim your base on a server

On a multiplayer server, claim the chunks around your storage with Open Parties and Claims. By default, claimed chunks can't be changed by other players, and explosions and fire spread don't affect them. See [[features/multiplayer/teams-and-claims|Teams & Claims]].

### Lock what matters

- Storage Drawers' **Personal Key** keeps other players out of a drawer.
- Iron Chests' **Lock** and **Key** lock a chest to its key.

## Tips

- Keep valuables in a [[features/travel-and-storage/backpacks|Traveler's Backpack]] rather than loose in the inventory: when you die, the backpack is placed as a block where you fell and can't be destroyed.
- Read [[features/travel-and-storage/corpses|Corpses]] before a risky trip: your other items wait in your corpse.

## Next

- [[features/travel-and-storage/toms-storage-network|Tom's Storage Network]]
- [[items/storage|Storage Items]]
