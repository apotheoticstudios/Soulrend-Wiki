# Finding things in the Soulrend instance

Where the modpack keeps the information the wiki needs, and what to watch out for when reading it. This was written while researching the wiki outline (2026-10-22). Paths are relative to the dev instance:

```
~/Documents/curseforge/minecraft/Instances/Soulrend-Development/
```

## Quick map

| Looking for | Look in |
| --- | --- |
| Acts and quests | `config/ftbquests/quests/chapters/*.snbt` |
| Pack mechanics (spawns, bosses, recipes, items) | `kubejs/` |
| Origins (races and classes) | `config/paxi/datapacks/soulrend_origins_classes/` and `soulrend_reforged/` |
| Skill trees | `config/paxi/datapacks/soulrend_skilltree/data/skilltree/` |
| English text for origins and skill trees | `config/paxi/resourcepacks/soulrend_lang/` |
| Soulrend Core settings (levelling, boss damage, loot) | `config/soulrend_core/` |
| Two-handed weapons and `soulrend:` tags | `config/the_config_of_alexandria/` (has its own README, `ATTRIBUTES.md` and `SOULREND_TAGS.md`) |
| Removed items | `config/item_obliterator.json5`, the `soulrend:deleted_items` tag, `global.deleted_items` in KubeJS |
| Spells and attributes | `registry_dumps/spells.txt`, `registry_dumps/attributes.txt` |
| Items, recipes and tags | the wiki's own `game-data/` (from the KubeJS export), not the instance |
| Installed mods | the `mods/` folder (421 jars) |

## Quests: `config/ftbquests/quests/`

- `chapter_groups.snbt` defines the groups. The main line is the group **"The Exalted Path"**. The other groups are Tales of Soulrend, Legendary Armoury, Pursuit of Mastery and The Fabled Realms.
- `data.snbt` sets progression to `linear`.
- Each act's chapter ends with an octagon "Act X – Completed" quest that opens the next act.

| File | Chapter |
| --- | --- |
| `the_realms.snbt` | Prologue (tutorial) |
| `act_1.snbt` | Act I – Awakening |
| `act_2.snbt` | Act II – First Steps (the Nether seal) |
| `act_iii__into_the_flames.snbt` | Act III – Into The Flames (the Eight Sins) |
| `act_35.snbt` | Act III – Deeper and Darker (optional; the wiki calls it Act III-b) |
| `act_4.snbt` | Act IV – Beyond Reality |
| `duties.snbt` | Act V – Duties (the Past) |
| `rise_of_the_champion.snbt` | Armor tiers (not an act) |

The side chapters are linked from the acts by "Move to X Chapter" quests:

- `hunters_journal`, `lfactions`, `l9_sky_arena`
- `mowzies_mobs` (Fallen Myths), `dragonslayer`, `soulslike_champions`, `aquamirae`, `ldimensions_remastered` (Journey to the End)
- the weapon paths: `path_of_the_*`, `greatsword`, `dancing_blades`, `too_many_bows` and others
- the realm chapters: `the_overworld`, `the_nether`, `the_deep_dark`, `the_end`, `the_caverns`

Things to watch for:

- **Quest text and quest tasks can disagree.** Check the task, not the description. Act III's "Eight Sins" says to defeat four Sins, but the gate into Act IV needs any five of the 16 End Remastered eye quests, plus entering the End. Other known mismatches: the Nether Crystal is a 50% Warden drop (extra-drops config), not 30%; Nether essence comes from undead only (`config/nether remastered.toml`), not spiders; the Eye of Flame recipe uses no Burning Ashes.
- **`min_required_dependencies` beats `dependency_requirement`.** FTB Quests' `Quest.checkDependencies` uses the minimum count whenever it is above 0, so a quest with `one_completed` and `min_required_dependencies: 5` needs five. Several Act II shard quests and the Act IV gate use it.
- **Item task counts come from the task's `count` field only** (`ItemTask.readData`: `max(count, 1)`). A task whose item is stored as a stack of 4 but has no `count` asks for 1. `default_consume_items` is false, so item tasks only check the inventory unless the task says `consume_items`.
- **Reward tables** (`reward_tables/*.snbt`) have `loot_size` 1. Table ids in chapters are stored as signed longs (`table_id: …L`); convert to unsigned hex to match the table's `id`. The wiki lists them on `progression/reward-tables`.
- A quick way to read chapters: parse the SNBT and print one line per quest (title, dependencies, tasks, rewards). Don't trust the stack `Count` in tasks (see above).
- **The `optional` flag matters.** The Nightwarden is the Act IV icon text but is optional.
- **Some link quests point at chapters that don't exist** (Simply NightFall, Dungeons and Combat, Soulslike Weaponry, Epic Knight).
- **Default key bindings** for new players are in `config/defaultoptions/keybindings.txt`, not `options.txt` (which is the author's own). Inventory is on I; Epic Fight's mode switch and the FTB Quests key are unbound.
- **Kill tasks name entity IDs.** Look up their display names in the mod's `assets/<mod>/lang/en_us.json`, or check whether a KubeJS script renames them (`dimension/past.js` does).

## KubeJS: `kubejs/`

- **`startup_scripts/`** registers things:
  - `start.js` names the KubeJS mod "Soulrend", so pack items show that mod name.
  - `past/items.js` adds the Emblem of the Past.
  - `simply_nightfall_registry.js` adds the 48 Sword Souls.
  - `magic/spells.js` adds the Cannibalism spell; `magic/spell_attributes.js` adds per-spell attributes.
  - `lifesteal.js` and `mounted.js` add an attribute and an effect.
  - `dragon_summoning.js` makes summoning crystals reusable.
- **`server_scripts/`** holds the behaviour:
  - `progression/` has the boss spawn and summon rules (Maze Mother, Shriek Worm, Lich, Sunleia re-summon, Forlorn).
  - `dimension/past.js` has everything about the Past: mob reskins, boss HP, the Decaying King.
  - `minor_features/` has lifesteal, the Estus Flask and disabled affixes.
  - `magic/` and `recipes/` add recipes.
  - `global.js` defines the `/soulrend` commands and carries item data through crafting.
- **`client_scripts/`** has tooltips (`tooltips.js`) and JEI hiding (`jei*.js`).
- **`wiki_export.js`** (server and client) is the wiki's own exporter, which writes to `kubejs/exported/wiki/`. It only runs when `enabled.json` exists.

Recipes that KubeJS scripts **add** (`event.shaped`, `shapeless`, `smithing`, `custom`, and `replaceShaped` in `global.js`) are **not** in `game-data/recipes.json`: the exporter's `forEachRecipe` runs inside the recipes event, before those additions are registered. That covers the Estus and Huge Estus Flasks, Waystone and Warp Stone, Universium, Nightmare and Astral Ingots, the cave keys, the Emblem of the Past, Heart of the Deep, several Legendary Eyes and the skill books. Read the script and hand-write a `recipe` block until the exporter is fixed.

## Paxi datapacks: `config/paxi/datapacks/`

Paxi loads these into every world. This is where most Soulrend data lives:

- `soulrend_origins_classes`: origin layers, most classes and the Faded, Keres, Orc and Ungoliant races. Starting kits are in `functions/*.mcfunction`.
- `soulrend_reforged`: reworked origins (Beast Master, Hunter, Lancer, Reaper, Corrosid, Dwarf, Revenant, Forest Elf, Yeti, Shulk).
- `soulrend_skilltree`: all skill tree data (985 skill files, 7 trees). Only Warrior, Ranger, Rogue and Mage are used. The jar's own trees are overridden to empty.
- `soulrend_recipes` (about 860 recipes, folders by weapon type) and `soulrend_extra_recipes`.
- `soulrend_tags`, `soulrend_loot`, `soulrend_mob_leveling`, `soulrend_worldgen` (the Past, the Tree of Light), and the Apotheosis and Iron's rebalance packs.
- `soulrend_ef_capabilities` and `soulrend_ef_mobpatches`: Epic Fight data.

`datapack_load_order.json` lists only some of these packs. `soulrend_reforged` is not in it.

The text that players see for origins and skill trees is in `config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins,skilltree}/lang/en_us.json`. It doesn't always match the data. For example, the Priest's holy power is 50% in the text but 30% in the data, and several starting kits differ. Trust the data.

## End Remastered, the Nether seal and the Past

- **End portal:** 12 frames; `ERPortalPredicate` refuses an eye type already in the portal, so it takes 12 different eyes. `config/endrem.toml` disables Eyes of Ender in frames, eye removal, the Cryptic Eye from enchanting and the Evil Eye from Clerics. Eye sources: the jar's `data/endrem/loot_tables`, the extra-drops config (Yeti, Infernal Dragon, Wither Skeletons) and `misc_utility.js`.
- **Nether seal:** Nether Remastered's `CaptureEssenceProcedure` turns one off-hand Obsidian Infused Bottle into Bottled Nether Essence per kill of a listed mob. The seal recipe uses four essences. `"Consume Seal" = false`, and portal travel checks the `nether_remastered:seal_of_the_underworld` advancement.
- **Heart of the Deep:** `soulrend_loot` sets the Warden's drop to 0, so it is only crafted (recipe in `misc_utility.js`, needs a Withered Demon Heart from the Nether's Decaying King).
- **Dragon eggs:** `config/betterendisland-forge-1_20.toml` makes every Ender Dragon kill drop an egg.
- **The Past:** the Emblem (`dimension/past.js`) is the only way in. The way out is dying or warping out with a waystone item (confirmed by the pack author, 2026-10-24); no script adds an exit.

## Origins

- **Race layer:** `origins:origin`. It merges the Origins jar, the Medieval Origins jar and the Soulrend packs.
- **Class layer:** `origins:rpg_class`, in `soulrend_origins_classes/.../origin_layers/rpg_class.json`. The Feral Beast race only sees Wildheart. Faded only sees mage classes.
- **`config/origins_server.json`** turns origins and powers on or off. It looks auto-generated and out of date: it lists powers that no longer exist.
  - Disabled origins (Enderian, Feline, Elytrian and others) are left out of the wiki.
  - So are the "not implemented" Troll and the empty Magic Specialization layer.
- **Native mechanics are Java code** in `mods/soulrend_origins-*.jar` (Pixie flight, Shulk Phase Step, Yeti Glacial Slam, …). The jar contains no data files.
- **The class tabs** in the origin picker come from `config/soulrend_core/common.toml`: Melee, Ranged, Mage, Fusion. Blade Dancer appears under "Other".

## Skill trees

- `skilltree/editor/` in the instance root is the Passive Skill Tree editor's working copy, byte-identical to the Paxi pack. Read the Paxi copy.
- Each tree has the same layout:
  - A root.
  - Core keystones. Their unlock needs a picked-up `nether_remastered:seal_crystal`.
  - Core spokes, each with minor nodes, a hub notable and leaves.
  - Subclass hubs, whose keystones need a `block_factorys_bosses:knight_sword`.
  - The Mage tree uses 12 school branches instead of subclasses.
- Clusters have no names in the data. File names often don't match what a node gives (`warrior_berserker_resilient` gives crit damage), so read the node's bonuses.
- **Skill points:** Soulrend Core gives points for damage dealt (`config/soulrend_core/common.toml [skilltree]`). See also `config/skilltree-common.toml` and `config/skilltree-mkp.toml`.

## Soulrend jars

Read these with `unzip -l` / `unzip -p`. There's no need to decompile.

| Jar | Contains |
| --- | --- |
| `soulrend_core-*.jar` | Levelling, titles and ranks (lang file), the origin picker, boss damage limits, mob levelling, the custom recipe types. No items, no quest data. |
| `soulrend_origins-*.jar` | Origin mechanics only (Java). Data comes from Paxi. |
| `soulrend_tweaks-*.jar` | The two-handed rule, the Sigil of Withdrawal change, bug fixes. No items. |
| `SoulrendCompanion-*.jar` (`cdu_soulrend`) | The Soulrend Realms server picker. |
| `feelixs_soulrend_optimizations-*.jar` | Graphics presets, first-launch setup, pre-generation. |

The `soulrend:` namespace only holds tags, recipes and textures. Pack items are `kubejs:*`.

## Bosses and enemies

- `config/soulrend_core/boss_damage.toml` is the closest thing to a full boss list. It also sets how much health each boss can lose per second.
- Mob levels follow the player (`config/soulrend_core/common.toml [mobLeveling]`), not the act. The player's "Soulrend level" is their skill-point progress, 0–200 (`SoulrendPlayerData.getSoulrendLevel`).
  - **Per-entity floors and caps** are in `config/paxi/datapacks/soulrend_mob_leveling/data/<mod>/leveling_settings/entities/`. Soulrend's resolver (`SoulrendAutoLeveling` in `soulrend_core`, readable with `javap -c -p`) computes `min(max(starting_level, player level) + random bonus, max_level)`, with 0 meaning no cap. Many bosses are pinned (`starting_level == max_level`), some far above 200 (the Ender Dragon at 467).
  - **The `…/dimensions/` files in that pack are ignored** while `[mobLeveling] enabled = true`. The resolver only reads entity settings.
  - **Stats per level:** `config/autoleveling-common.toml [Attributes]`. Auto Leveling adds a MULTIPLY_TOTAL modifier of `bonus × (level − 1)`: health 0.3, attack 0.1, armor 0.011 per level.
  - **Base stats** are in each entity class's `createAttributes()` (`javap -c -p -constants`), times any health or attack multiplier in the mod's config.
- **Apothic mobs:** Apotheosis bosses are in `data/apotheosis/bosses/` in its jar. Natural spawns happen only in the Nether and the outer End (`config/apotheosis/adventure.cfg`, "Boss Spawn Dimensions"). Minibosses are in `data/apotheosis/minibosses/`, and Soulrend's own are in `config/paxi/datapacks/soulrend_apotheosis_rebalance/`.
- Where each boss belongs comes from the quest that kills it. Side-chapter bosses are placed by the act the chapter is linked from, which is an approximation.
- **Mod configs replace base stats** before the level bonus applies:
  - `config/bosses_rise_config.toml` sets Bosses'Rise health, armor and damage.
  - `config/soulsweapons/soulsweapons_boss_config.json` sets Soulslike health, armor, cooldowns and immunities.
  - `config/cataclysm.toml` multiplies Cataclysm health and damage (×1.2 or ×1.3, added as a modifier, so it stacks under the level bonus). Its "prevent attacks from far away" ranges make bosses ignore distant attackers.
  - `config/graveyard/the-graveyard-3.0-config.json5` (`corrupted_champion`) sets the Lich's stats.
  - Ice and Fire dragon stats grow with age: `min + (max − min) / 125 × days`. Roost dragons are 52–59 days old, cave dragons 75–124.
  - `config/nightfall_invade-common.toml` gives Arterius and the Scarlet Hunter their own per-hit caps and damage reduction; they aren't on the Soulrend list.
  - Auto Leveling's mob blacklist (`[Mobs]` in `autoleveling-common.toml`) includes the Maze Mother and the Land, Ocean and Sky Battle Tower golems, so they never level.
  - In the Past, `past.js` rewrites boss NBT to 12,000 base health and 2,000 base attack (6,000 / 200 for the Decaying King). Auto Leveling's level modifier still multiplies these bases (confirmed in game by the pack author), so at level 200 a Past boss has 728,400 health.
- **Boss drops come from four places.** Read all of them:
  - the entity loot table (Soulrend overrides in `soulrend_loot`);
  - `config/serilum/configurableextramobdrops/mobdropconfig.txt` (Evil Eye, Cold Eye, Nether Crystal, Cursed Souls and more);
  - global loot modifiers in jars: Traveloptics' `*_additions(_new)` tables (Soulrend overrides them in `soulrend_loot/data/traveloptics`, and also copied their pools into some Cataclysm entity tables, so those items roll twice), Fallen Gems Affixes' boss gems, Deeper and Darker, Iron's Spellbooks, Alshanex's Familiars, End Remastered and Paraglider;
  - code: MCreator death procedures (Bosses'Rise rolls `bosses/<name>` tables), Soulslike's Wither mixin, the Nightlord's greatsword.
- **`config/bossultimatum.json5`** affects `soulsweapons:*` and `cataclysm:*` bosses when they kill a player. Its Forge behavior (it calls `setHealth(max × ultimatum_death_healing)` for each event) hasn't been confirmed in game, so the wiki doesn't describe it.
- **Some outline bosses don't exist:** Ice and Fire 2.1.13 doesn't register the Dread Queen or Black Frost (only lang keys and items remain). Battle Towers beta 3.2.1 only has Land, Core and Ocean towers, so the Nether, End and Sky golems never generate.
- **Reading obfuscated names:** the launcher install has full mappings: `Install/libraries/de/oceanlabs/mcp/mcp_config/1.20.1-*/…-mappings-merged.txt` (obfuscated → SRG) and `Install/libraries/net/minecraft/client/1.20.1-*/…-mappings.txt` (official → obfuscated). Join them to turn `f_22276_` into `Attributes.MAX_HEALTH`. The SRG-named client jar in the same folder gives vanilla `createAttributes` values.
- **Names are ambiguous:**
  - "Decaying King" is both a Soulslike boss (`soulsweapons:accursed_lord_boss`) and the wither skeleton reskin in the Past.
  - The Corrupted Champion's entity ID is `graveyard:lich`.
  - The Scarlet Hunter is called "Brad" by its mod.

## Items

Use `game-data/items.json` and `tags.json`, not registry dumps.

- **The pack's own item groups** are the `soulrend:*` tags: weapon classes, armor weights, `class_*`, `deleted_items`.
- **Formatting codes in names:** about 300 names contain `§` codes, including `§#rrggbb` hex colours and Apotheosis's `§rainbow`. `itemName()` strips them.
- **Item collections with many copies of the same item:**
  - Every Compat (`everycomp:*`, about 1,700 items)
  - wood and colour sets
  - stairs, slabs and walls
  - weapon tiers (e.g. Epic Knights: 11 materials × 20 weapons)
  - The wiki lists each of these as one group.
- **Removed or hidden items:**
  - Item Obliterator removes every `_estoc`, `_stylet`, `_bastardsword`, `_ranseur`, `_ahlspiess` and `myrmex` item.
  - The `soulrend:deleted_items` tag and `global.deleted_items` (in KubeJS) hide more.

## Places with nothing useful

- **Empty files and folders:**
  - `core_tower`, `land_tower` and `ocean_tower` are empty files.
  - `moonlight-global-datapacks/`, `patchouli_books/` and `data_driven/slm_epicfight/` are empty.
- **`datapacks/*.zip` in the instance root** only contains Epic Fight compatibility data, and nothing seems to load it.
- **`manifest.json` and `modlist.html` are stale** (from the October 16 export). Use the `mods/` folder.
- **`registry_dumps/`** only has `spells.txt` and `attributes.txt`. They're fine for spell lists, but not useful for items.
- **No mod adds a "spellbinding table".**
