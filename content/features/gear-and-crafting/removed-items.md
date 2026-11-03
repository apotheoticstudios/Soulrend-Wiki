---
{
  "title": "Removed Items",
  "summary": "Soulrend removes items in three ways: Item Obliterator makes them unusable, a tag deletes their recipes and hides them in JEI, and a recipe list removes particular crafts.",
  "icon": "minecraft:barrier"
}
---
<!-- sources:
  config/item_obliterator.json5 (blacklisted_items, blacklisted_nbt, only_disable_recipes)
  config/soulrend_core/recipes/removals.toml ([remove] byOutput, byInput)
  game-data/tags.json (soulrend:deleted_items, 24 items; soulrend:custom_recipes_only, 757 items)
  kubejs/client_scripts/jei.js, jei_remove_hidden.js (hide #soulrend:deleted_items), jei_show.js (CONFIG.JEI_SHOW.ITEMS)
  content/bugs.md (Item Obliterator's pattern entries don't match anything)
-->

**Removed items** are items that exist in a mod jar but that Soulrend takes out of the game. Three systems do this, and they work differently.

## How it works

| System | Effect | Where |
| --- | --- | --- |
| Item Obliterator | The item is unusable and its recipes are disabled | `config/item_obliterator.json5` |
| The `#soulrend:deleted_items` tag | Every recipe that makes or uses the item is removed, and JEI hides it | `removals.toml`, KubeJS client scripts |
| Recipe removals | Only the recipes are removed. The item still exists | `removals.toml` (`byOutput`) |

## Item Obliterator

Item Obliterator marks these items as unusable. Their recipes are disabled too:

- `dungeons_and_combat:compat_style_manual`
- [[item:paraglider:stamina_vessel]]
- [[item:soulsweapons:gatling_gun]], [[item:soulsweapons:hunter_cannon]], [[item:soulsweapons:hunter_pistol]], [[item:soulsweapons:blunderbuss]] and [[item:soulsweapons:mehrunes_razor]]

Items carrying certain NBT data are removed as well: those tagged `wom:vampirize` and `soulsweapons:visceral`.

> [!NOTE]
> The config also lists patterns for estocs, stylets, bastard swords, ranseurs, ahlspiesses, short swords and Myrmex items. Item Obliterator reads an entry as a pattern only when it starts with `!`, so these items are still in the game. See [[bugs|Known Bugs]].

## Deleted items

The `#soulrend:deleted_items` tag holds 24 items. Any recipe that makes or uses one is removed, and JEI hides them.

| Mod | Items |
| --- | --- |
| Alex's Caves | Candy Cane Hook, Nuclear Bomb, Nuclear Furnace Component, Nuclear Siren, Raygun, Remote Detonator, Shot Gum |
| Alshanex's Familiars | Tome of Familiar Alignment |
| Dungeons and Combat | Blessed Amulet, Cobalt Dagger, Cobalt Greataxe, Cobalt Long Sword, Tin Dagger, Tin Greathammer, Tin Mace, Wulfrum Greatsword, Wulfrum Uchigatana, Wulfrum Rapier |
| Moveset add-on (`cdmoveset`) | Phantom Katana, Yamato |
| Samurai Dynasty | Warden Samurai Helmet, Chestplate, Leggings and Boots |

## Recipe-only removals

`removals.toml` also removes every recipe whose result is:

- ten Too Many Bows bows: Ancient Sage Bow, Torchbearer, Verdant Vigor, Shulker Blast, Frostbite, Sentinel's Wrath, Ironclad Bow, Twin Shadows, Radiance and Crimson Nexus;
- Create's Andesite Alloy;
- anything in `#soulrend:custom_recipes_only` (757 items), whose only recipes are Soulrend's own, such as those on [[features/gear-and-crafting/equipment-upgrades|Equipment Upgrades]].

Soulrend's own recipes are never removed this way, so a rule can replace a mod's recipe with the pack's version.

## Shown in JEI

JEI would otherwise hide the Cryolite set (boots, chestplate, helmet, leggings, greatsword, lance, sickle, sword and shard) and the Molten Cryolite pieces, so a KubeJS script adds them back.

## Related

- [[features/gear-and-crafting/loot-changes|Loot Changes]]
- [[features/gear-and-crafting/scrapping|Scrapping]]
