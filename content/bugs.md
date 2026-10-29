---
{
  "title": "Known Bugs",
  "summary": "Bugs observed in Soulrend, with workarounds where known.",
  "icon": "minecraft:spider_eye"
}
---
<!-- sources: observed in the Soulrend-Development instance; each entry notes where it was seen. -->

This page lists bugs observed in Soulrend. Each entry says what happens, where it was seen, and any known workaround.

## Open

### Some weapon types name animations that don't exist
- **Seen:** 2026-10-28, while building the wiki's attack viewer: Epic Fight weapon types in `config/paxi/datapacks/soulrend_ef_capabilities/data/epicfight/capabilities/weapons/types/` (`harbinger.json`, `ignisshield.json`, `maledictus_bow.json`) and `data/soulrend_weapon_types/capabilities/`, Weapons of Traveloptics 1.3.1 and Simply Swords Epicfied pre3.0, checked against every animation the Epic Fight add-ons register and ship.
- **What happens:** these weapon types list animations that no installed mod has, so that step of the moveset has nothing to play:
  - `wom:biped/skill/ruine_counterattack` (not in Weapons of Miracles 2.0.171): the Harbinger type's combo (Void and Wither Assault Shoulder Weapon), the dash of the Ignis shield type (Bulwark of the Flame) and the Maledictus bow type, and the Mechanized Wraithblade's dash.
  - `wom:biped/skill/ruine_block`: the two-handed guard of Soulrend's longsword type (Crimson Long Sword, Diamond Claymore, Netherite Zweihander and others) and heavy weapon type, and of the Thorns of Oblivion.
  - `cdmoveset:biped/new/spear/spear_twohand_auto5` (Resurrection only has two-handed spear attacks 1 and 2): the last hit of the Magiscythe's two-handed combo.
  Not yet confirmed in game.
- **Workaround:** none known.

### Revenant squads above tier 0 are out of reach
- **Seen:** 2026-10-27, `mods/soulrend_origins-1.2-1.20.1.jar` (`OriginMath.revenantTier`, `Revenant.summon` and its `SQUADS` table), read against `game-data/attributes.json` (Evocation Spell Power defaults to 1.0) and the Revenance badge text in `config/paxi/resourcepacks/soulrend_lang/assets/medievalorigins/lang/en_us.json`.
- **What happens:** the squad tier is Evocation Spell Power divided by 4, rounded down, minus 1. Tier 1 needs 8.0 (800%) and the full squad with Kamath needs 20.0, so in practice every Revenant raises tier 0: one Zombie and one Skeleton archer. The in-game text promises "up to 8 summons". The other Soulrend origins step their abilities every +0.25 spell power, so the divisor looks unintended. Not yet confirmed in game.
- **Workaround:** none known.

### Origin descriptions don't match their powers
- **Seen:** 2026-10-27, `config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json` read against the origin and power files in `config/paxi/datapacks/soulrend_origins_classes/`, `soulrend_reforged/` and the `soulrend_origins` jar.
- **What happens:** several texts in the origin picker describe powers the origin doesn't have, or give the wrong numbers:
  - Priest: "+50% holy spell power"; the power gives +30%.
  - Orc (Colossal Physique): "+50% Attack Damage" and "-75%" combat potency while crawling; neither is applied (the power gives +50% max health).
  - Keres badges: "2 per Soul" healing; Devour Souls heals 4% of max health per Soul.
  - Berserker "battle axe", Rogue "2 cutlass", Blade Dancer "a twinblade": the kits give an Iron Axe, two Flint Knives and a Wooden staff.
  - Moon Elf and Valkyrie overviews still list traits that `config/origins_server.json` turns off (Foreign World, Nimble, Elegant; Corruption).
- **Workaround:** none needed; the wiki's origin pages follow the powers.

### Shulk and Orc shield ban only covers the vanilla Shield
- **Seen:** 2026-10-27, `origins:no_shield` (Shulk) and `medievalorigins:orc/unwieldy` (Orc), which block items in `origins:shields`; `game-data/tags.json` lists only `minecraft:shield` in that tag.
- **What happens:** both races are meant to be unable to use shields, but every modded shield (for example the Wooden Shield the Tank starts with) still works for them. Not yet confirmed in game.
- **Workaround:** none needed for players.

### Vampirize skill book is blacklisted but required by a quest
- **Seen:** 2026-10-24, `config/item_obliterator.json5` (`blacklisted_nbt` lists `wom:vampirize`), the End Game tier of the Epic Fight quest chapter (`epicfight.snbt`, quest `31CD1EBF3B8994B3`, not optional) and the recipe in `kubejs/server_scripts/recipes/skillbook_recipes.js`.
- **What happens:** Item Obliterator removes items whose NBT matches `wom:vampirize`, which should include the Vampirize skill book. The pack still has a recipe for it and a quest that asks for it. Not yet confirmed in game.
- **Workaround:** none known.

### Greater Conjurer's Talisman tooltip doesn't show its effect
- **Seen:** 2026-10-25, Iron's Spells 'n Spellbooks 3.15.6, `irons_spellbooks:greater_conjurers_talisman` (exported tooltip in `game-data/items.json`; effect in `SummonManager.recastFinishedHelper`; text in lang `item.irons_spellbooks.greater_conjurers_talisman.desc`).
- **What happens:** the talisman stops summon spells that time out from going on cooldown, but its tooltip shows only the +15% Summon Damage line, the same as the plain Conjurer's Talisman, so the two look identical.
- **Workaround:** none needed; the effect works. The wiki's Necklaces page describes it.

### Mobs take double spell damage
- **Seen:** 2026-10-25, `kubejs/server_scripts/magic/magic_fixes.js` (`EntityEvents.spawned`, `SPELL_RESIST_RESET_THRESHOLD: 0.1`) read against Iron's Spells 'n Spellbooks 3.15.6 (`DamageSources.getResist`, `AttributeRegistry`).
- **What happens:** the script removes all Spell Resistance modifiers from every spawning mob and sets its base Spell Resistance to 0 whenever the base is 0.1 or more. Iron's default base is 1.0, which means "no resistance": spell damage is multiplied by 2 minus the resistance. So every mob ends up at 0 and takes twice the spell damage, and mobs meant to resist magic lose that too. The script's comment suggests the intent was only to remove resistance, which would mean setting the base to 1.0. Not yet confirmed in game.
- **Workaround:** none needed for players; spells simply hit harder than their numbers say.

### Soulrend's upgrade orb rebalance doesn't load
- **Seen:** 2026-10-25, `config/paxi/datapacks/soulrend_irons_spellbooks_rebalance/` (generated by its `orbs.py`) read against Iron's Spells 'n Spellbooks 3.15.6, which ships its orb types at `data/irons_spellbooks/irons_spellbooks/upgrade_orb_type/*.json`; exported tooltips in `game-data/items.json`.
- **What happens:** the pack is meant to cut each upgrade orb to +1.5% school power, +2% Cooldown Reduction and +10 Max Mana. Its files sit in `data/<ns>/upgrade_orbs/` and use a `valuePerLevel` field, but Iron's reads `data/<ns>/irons_spellbooks/upgrade_orb_type/` with an `amount` field, so the game never sees them. The orbs keep Iron's defaults, and the in-game tooltips show +5% and +50 Max Mana.
- **Workaround:** none needed for players; the wiki lists the values the game uses.

### Item Obliterator's pattern entries don't match anything
- **Seen:** 2026-10-25, `config/item_obliterator.json5` (`blacklisted_items`) read against Item Obliterator 2.3.1 (`Utils.isDisabled`); exported items and recipes in `game-data/`.
- **What happens:** the config lists `.*:.*_estoc`, `.*:.*_stylet`, `.*:.*_bastardsword`, `.*:.*_ranseur`, `.*:.*_ahlspiess`, `.*:.*_shortswords` and `.*myrmex.*` to remove those weapons. Item Obliterator only reads an entry as a regular expression when it starts with `!` (as the config's own header says); otherwise it compares the whole item id. So these seven entries match no item, and the 219 matching items and their 202 recipes stay in the game. None of them are in `#soulrend:deleted_items` either. Adding `!` in front of each entry would fix it. Not yet confirmed in game.
- **Workaround:** none needed for players; the items simply aren't removed.

### Metal Plate has no working recipe
- **Seen:** 2026-10-25, EpicFight - Dawnday, recipe `epicfight_dd:iron_plate` (exported JSON in `game-data/recipes.json`); the instance log says "Failed to parse recipe 'epicfight_dd:iron_plate'".
- **What happens:** the mod's only recipe for the Metal Plate has its `result` inside the `key` object, so the game can't read it and skips it. Three other recipes need a Metal Plate.
- **Workaround:** none known.

### Dimensional rarity caps are one tier lower than configured
- **Seen:** 2026-10-25, `config/apotheosis/adventure.cfg` ("Affix Convert Rarities" and "Gem Dimensional Rarities") read against Apotheosis 7.4.8's `AdventureConfig`; `logs/latest.log` ("Invalid Gem Dimensional Rarity: graveyard:past|mythic will be ignored", and the same for affixes).
- **What happens:** Apotheosis reads each entry as `dimension|min|max` and ignores anything after the third field, but Soulrend lists every rarity in between (`overworld|common|uncommon|rare`). So the cap is the second rarity listed:
  - Overworld gems drop only as Common or Uncommon, and chest gear becomes Common or Uncommon affix gear, not Rare as intended (the Reforging quest also says Rare).
  - Nether chest gear tops out at Rare instead of Epic, End chest gear at Epic instead of Mythic, and Otherside gems at Rare instead of Epic.
  - The two Past entries (`graveyard:past|ancient`, `graveyard:past|mythic`) have only one rarity, fail to parse and are skipped, so the Past uses every rarity.
- **Workaround:** none for players; the config needs `dimension|min|max` entries.
- **Also seen:** the Relic of the Renowned's tooltip reads "Rarity Material (rarity.null)" (a missing lang key in Fallen Gems & Affixes).

### Ernos Fang Necklace can't be obtained
- **Seen:** 2026-10-26, Dungeons and Combat 1.2.4, `dungeons_and_combat:ernos_fang_necklace`: the jar has recipes for the Ammit Fang and Klauen necklaces but none for this one, Soulrend's KubeJS replaces only the Ammit Fang Necklace's recipe, and no loot table in `game-data/loot-tables.json` contains it.
- **What happens:** the necklace (an attack damage bonus in the necklace slot) exists and shows in JEI, but nothing makes or drops it. Its material, the Ernos Fang, goes into other recipes instead.
- **Workaround:** none known.

### Some skill tree bonuses check tags that don't exist
- **Seen:** 2026-10-27, `config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/`: `ranger_88`–`ranger_92` (the Sharpshooter Critical path) check `#soulrend:ranged_weapons`, and `rogue_1` (the Rogue root) and `rogue_93` (Assassin Impact hub) check `#my_tags:weapons/dualwield`. Neither tag is in the exported tag list (`game-data/tags.json`), and no Paxi pack, KubeJS script or mod jar defines either one.
- **What happens:** an item can't match a tag that doesn't exist, so these bonuses never apply: the Rogue root's +5% Attack Speed, the Crit Damage of the five Sharpshooter Critical path nodes, and the Assassin Impact hub's Impact and Offhand Impact. Defining the tags, or pointing the skills at existing ones (`#soulrend:shields` and `#soulrend:light_armor` show the naming the pack uses elsewhere), would fix it. Not yet confirmed in game.
- **Workaround:** none known.

### 23 titles can never be unlocked
- **Seen:** 2026-10-27, Soulrend Core 2.7: `SoulrendTitles.IDS` lists 41 titles, and the lang file gives each a requirement, but `SoulrendTitles.isUnlocked` only has rules for Titleless, Rookie, the twelve stat titles, the three Mob Killer titles and Administrator. Every other id returns false.
- **What happens:** Tank, Great Tank, Miner, Great Miner, DragonSlayer, PlayerKiller, Hero, Villain, the three Fisherman and three Enchanter titles, Survivor, Dealer Maker, Boat Driver, Cart Driver, Horse Rider, Pig Rider, Strider Rider, Infernal Traveler and End Traveler show requirements on the Titles menu but stay Locked whatever the player does. Tank and Miner refer to "Defense" and "Building" stats that don't exist. Separately, Great Warrior's text says Constitution 16 while the check needs 30. Not yet confirmed in game.
- **Workaround:** none known.

### Graphics preset descriptions don't match what the presets set
- **Seen:** 2026-10-28, Feelix's Soulrend Optimizations 0.1.1: the preset descriptions in its lang file (`feelixs_soulrend_optimizations.preset.*.desc`) read against `config/feelixs_soulrend_optimizations/presets.cfg`.
- **What happens:** the descriptions in Video Settings give render distances of 6, 8, 10, 14 and 16 for Potato to Ultra, but `presets.cfg` sets 6, 10, 14, 16 and 22. Medium's description also says "no entity shadows", while the config turns entity shadows on for Medium. The config's own header says the descriptions don't follow edits to it.
- **Workaround:** none needed; the presets apply the config's values. [[features/settings-and-performance/graphics-presets|Graphics Presets]] lists them.

### Lifesteal attribute has no source
- **Seen:** 2026-10-28, `kubejs/startup_scripts/lifesteal.js` registers `kubejs:lifesteal` and `kubejs/server_scripts/minor_features/lifesteal.js` heals from it, but no item, skill tree node, origin power, gem or config in `config/`, `kubejs/` or `config/paxi/` grants it, and no exported item has it (`game-data/item-stats.json`).
- **What happens:** Soulrend's [[features/combat/lifesteal|Lifesteal]] formula never runs in normal play. The Levelling screen's "Lifesteal" row shows Apothic Attributes' `attributeslib:life_steal`, a different attribute, which adds to the confusion.
- **Workaround:** none known.

### Nuclear Barrel Shelf can't be crafted
- **Seen:** 2026-10-29, `mods/ApotheoticAdditionsV2.2.2.jar` `data/apotheotic_additions/recipes/shelves/nuclear_barrel_shelf.json` (a Hollowed Barrel Shelf with 4 Nuclear Bombs, 2 Polymer Plates and 2 Tectonic Shards), against `config/soulrend_core/recipes/removals.toml`, which removes every recipe that uses an item in `#soulrend:deleted_items`, and `alexscaves:nuclear_bomb` is in that tag. `game-data/recipes.json` has no recipe for the shelf, and no loot table in `game-data/loot-tables.json` holds it.
- **What happens:** the Nuclear Barrel Shelf (Eterna +3 up to 35, Quanta +35%) exists, but nothing makes or drops it. It is the last step of the Alex's Caves barrel path in the [[guides/enchanting-guide|Enchanting Guide]].
- **Workaround:** none known.

<!-- Entry template:
### Short description
- **Seen:** 2026-10-24, where (mod, item, boss, file)
- **What happens:** …
- **Workaround:** … (or "none known")
-->

## Fixed

*None yet.*
