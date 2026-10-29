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

Recipes that KubeJS scripts **add** (`event.shaped`, `shapeless`, `smithing`, `custom`, and `replaceShaped` in `global.js`) sit in `event.addedRecipes`, not in `forEachRecipe` (which only visits datapack recipes). The exporter reads both, and the 2026-10-25 export has them under ids like `minecraft:kjs/<output>`.

**Recipes are also removed after the KubeJS event**, so the recipe event alone doesn't show the final list:

- **`soulrend_core`'s `config/soulrend_core/recipes/removals.toml`** runs on `TagsUpdatedEvent` and edits the live recipe manager. It drops every recipe whose result is in `#soulrend:deleted_items` or `#soulrend:custom_recipes_only` (plus a few Too Many Bows bows and Create's Andesite Alloy), and every recipe with an ingredient in `#soulrend:deleted_items`. Ids in the `soulrend_core`, `soulrend` and `kubejs` namespaces, and `*:kjs/*`, are never removed. That is how the pack swaps about 680 mod recipes for its own `soulrend:` versions (most of them Mechanical Fusion Anvil or `soulrend_core:upgrade_*` recipes). The class is `net.apotheoticstudios.soulrend_core.recipe.RecipeRules`.
- **Recipes that fail to parse** in game are skipped (the log says "Failed to parse recipe").

`wiki_export.js` therefore collects the JSON in the recipe event and writes `recipes.json` on server start, keeping only ids the started server still has. Until an export made with that version is synced, `sync-game` applies `removals.toml` itself from the JSON.

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
- **`origins_server.json` still applies:** a power set to `false` there is removed from its origin (Valkyrie's Intervention, Moon Elf's Nimble, High Elf's Draw Essence, …). Check it for every origin. Powers it lists that no origin file names do nothing, and lang text for them (the "No Mastery" penalties, Tank's "Stand Behind Me!") never shows.
- **`soulrend_reforged` wins over `soulrend_origins_classes`** where both define a file (Reaper's origin). Race files there override the Medieval Origins jar; races without a Soulrend file (Pixie, High Elf, Plague Victim, Valkyrie, Goblin, Moon Elf, Siren) use the jar's data.
- **Native mechanics are Java code** in `mods/soulrend_origins-*.jar` (Pixie flight, Shulk Phase Step and Hoarder, Yeti Glacial Slam, Revenant squads, Forest Elf companions, Feral/Wildheart, Orc leap, Faded phasing, Keres Devour Souls, Corrosid abilities, Dwarf Brew and ore gems). Powers trigger them with `tag @s add soulrend_*_request` or a `soulrend_*` command; `OriginMath` holds the scaling formulas. A few class mechanics are in `soulrend_core` instead: `gameplay/BeastMaster`, `HunterClass` (Looting II, starter quiver), `ShulkShell` (Defensive Shell), `OrcCrush`. The system `javap -c -p -constants` reads both jars; no decompiler is installed.
- **Origin lang text is unreliable.** Several descriptions give wrong numbers or describe powers the origin doesn't have (see the Known Bugs page). Trust the power files and the jar.
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
- `nether_remastered:seal_crystal` is called **Nether Crystal** in game. Requirements are `minecraft:picked_up` stats, so the item only has to be picked up once.
- **Finding clusters:** treat the root and every node whose tag appears in the tree's `skillLimitations` as anchors; removing them splits the tree into one component per hub. Don't use all tags: a Priest Utility Minor node carries a stray `Apprentice` tag with no limit. Paths are mostly `oneWayConnections` outward, and a few branches have shortcuts (Priest Offense's hub links to its 2nd Minor), so compute point costs with a directed search.
- **Bonus semantics** (Passive Skill Tree 0.7.6c): every skill costs 1 point from one shared pool; `player_multiplier` values are `floor(value / divisor)`; `has_item_equipped` matches any equipped slot; `inflict_ignite` duration is in seconds, `inflict_effect` in ticks; a negative `item_use_movement_speed` multiplier *reduces* the penalty. The jar's `assets/skilltree/lang/en_us.json` has the tooltip templates.
- `#soulrend:ranged_weapons` and `#my_tags:weapons/dualwield` are used by skills but defined nowhere (see Known Bugs).
- **Rendering and textures.** The screen is drawn by `client/screen/SkillTreeScreen`, `client/widget/skill/SkillButton(s)` and `client/screen/ScreenHelper` (connections, tooltip). A node's `backgroundTexture` is a strip of three frames (background, darkening for unlearned nodes, border for learned ones); `borderTexture` is the tooltip's 110×20 header bar. The textures Soulrend uses (`notable_metal_*`, `ouro_*`, `keystone_dragon_*`, the chain and arrow connections, the background) come from the Paxi resource pack **Tabla's PST-I** at 2–4× resolution; the jar's own versions are only fallbacks. Long connections (root to subclass) are drawn only while one end is hovered.
- **`skilltree:grant_spell` and `skilltree:mana_level`** are registered by the jar's Iron's Spellbooks compat (`daripher/skilltree/compat/ironsspellbooks/`), not in `PSTSkillBonuses`, so they work. The tooltip literally reads "Grants Root 5 spell".
- **Item-tag conditions show raw keys** (`item_tag.soulrend:heavy_armor`) because no lang file translates them (only `item_tag.soulrend:katanas`, in `soulrend_lang/assets/skyarena`). Every Soulrend node that uses one has a custom `description`, so players never see them; a new node without a description would.
- **Skill points:** Soulrend Core gives points for damage dealt (`config/soulrend_core/common.toml [skilltree]`). `config/skilltree-common.toml` still applies (Amnesia Scroll penalty, XP exchange off). `config/skilltree-mkp.toml` belongs to no installed mod and does nothing.

## Soulrend Core leveling

- Logic is in `SoulrendPlayerData` (curve, points, stats) and `SoulrendPlayerEvents` (what damage counts). The level curve is a precomputed `SKILLTREE_LEVELUP_MILESTONES` array. Read it by loading the class: compile a small reflection probe and run it with CurseForge's `~/Documents/curseforge/minecraft/Install/java/Jre_21/.../bin/java -XX:+UnlockDiagnosticVMOptions -XX:-BytecodeVerificationRemote` (the system JDK 11 can't read the class files).
- Stat bonuses are in `config/soulrend_core/stats.toml`; titles in `SoulrendTitles.isUnlocked` (the lang file's requirement text is wrong in places, and 23 titles have no rule); ranks in `LevellingScreen.rankName`.

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
- **Drops added in code, not loot tables** (found 2026-10-26):
  - Soulslike Weaponry's `WitherEntityMixin` makes every Wither drop a void Lord Soul and a Shard of Uncertainty; `EnderDragonEntityMixin` makes each dragon drop one purple Lord Soul.
  - Bosses'Rise's `BossCancelDie2Procedure`: an Ender Dragon killed by a hit from someone holding the Knight Sword drops 12 Dragon Shanks.
  - Dungeons and Combat's Forger Of Essences villager trades one Essence Of Kamath or Sunleia for one armor piece of that boss's set (`DungeonsAndCombatModTrades`).
- **Every Dimensions of Alex's Caves key** also has the mod's own `cave_key` recipe (a Cave Codex of that biome with Ender Pearls and Blaze Powder, `RecipeCaveKey`), which the export can't show because its result depends on the codex. That is the only recipe for the Candy Cavity key.
- **Sky Arena trophies** read `config/skyarena.json`; its durations and cooldowns are in seconds (`Trophy.use` multiplies by 20).
- **Items with no source in Soulrend:** `soulrend_loot` replaces the Gorgon's head drop with a Witherbone, so the Gorgon Head is unobtainable; the Enderite Ingot, the Cataclysmfarer disc (only an advancement icon) and the Ernos Fang Necklace (Known Bugs) have no recipe or drop at all.
- **`config/bossultimatum.json5`** affects `soulsweapons:*` and `cataclysm:*` bosses when they kill a player. Its Forge behavior (it calls `setHealth(max × ultimatum_death_healing)` for each event) hasn't been confirmed in game, so the wiki doesn't describe it.
- **Where regular mobs spawn** (researched 2026-10-27 for the Enemies section) comes from several places; read them all:
  - `forge/biome_modifier/*.json` (`forge:add_spawns`) in the mod jars. Iron's `necromancer_spawns.json` has `//` comments, so strip them before parsing.
  - Mod configs that hold biome lists instead: `config/alexsmobs/*_spawns.json` (an empty `biomes` list means no natural spawn; 24 Alex's Mobs files are empty) with weights in `alexsmobs.toml`; `config/cataclysm/*_spawns.json` with weights in `cataclysm.toml [spawning]`; `config/iceandfire/*_biomes.json` with `iceandfire-common.toml`; `mowziesmobs-common.toml`; `friendsandfoes.json`.
  - Biome files' own `spawners` for mod biomes (Alex's Caves, Deeper and Darker, The Outer End).
  - **Structure NBT.** Most structure guards are entities saved in `data/<ns>/structures/*.nbt`. Gunzip each file and match `namespace:id` strings against the `entity.*` lang keys to see which mobs a piece holds; Cataclysm's mob pieces are tied to their structure by `worldgen/template_pool/<structure>/mob/*.json`. Structure `spawn_overrides` (Iron's Catacombs, Evoker Fort) add more.
  - **`config/ysns/disabled_entities.json5`** (You Shall Not Spawn) blocks spawning everywhere: Creepers, Skeleton Creepers, Cockatrices, Hippocampi, Alex's Mobs Crocodiles and Cosmaws, Samurai Dynasty's Kawauso and Komainu.
  - `config/spawnbalanceutility-common.toml` is stale: Spawn Balance Utility isn't installed.
  - Alex's Caves biomes don't generate in the Overworld (`config/alexscaves_biome_generation/*.json`, `disabled_completely`); they're only reached through Dimensions of Alex's Caves keys. Cataclysm's structures generate in the Cataclysm dimensions (`config/cataclysm_dimension/cataclysm_dimension.json`).
  - `valarian_conquest:troll` has a spawn egg but no spawn rule or structure placement. Nothing spawns Cataclysm's Endermaptera or Bosses'Rise's Flaming Dragon Guard and Flaming Skeleton Shooter either.
- **Reading mob stats:** most mods expose a static method returning `AttributeSupplier$Builder` (`createAttributes`, `bakeAttributes`, `prepareAttributes`); Samurai Dynasty and Deeper and Darker return a built `AttributeSupplier` instead. Values that are fields rather than constants come from the mod's config (Ice and Fire, Soulslike Weaponry). Check `config/autoleveling-common.toml [Mobs]` too: about 200 mobs never level (most Alex's Mobs animals, Deeplings, Anglerfish, Eels, Sea Serpents, Phantoms, Ghasts).
- **Soulrend mob-leveling file names must match the entity id.** `soulrend_mob_leveling/.../iceandfire/.../seaserpent.json` doesn't match `iceandfire:sea_serpent` and has no effect (harmless: the Sea Serpent never levels).
- **Seal shards from mobs roll twice.** Witches and Evokers get a 10% roll from Nether Remastered's own loot table (`nether_remastered:entities/top_right_piece` / `bottom_left_piece`) and another 10% from `mobdropconfig.txt`.
- **Awakened Mobs' guard, parry and dodge never apply:** only mobs it arms can defend, its default rules have no `chance`, and `weaponChance` is 0. Runners (5%) and fleeing (5% below 10% health) still apply.
- **Some outline bosses don't exist:** Ice and Fire 2.1.13 doesn't register the Dread Queen or Black Frost (only lang keys and items remain). Battle Towers beta 3.2.1 only has Land, Core and Ocean towers, so the Nether, End and Sky golems never generate.
- **Reading obfuscated names:** the launcher install has full mappings: `Install/libraries/de/oceanlabs/mcp/mcp_config/1.20.1-*/…-mappings-merged.txt` (obfuscated → SRG) and `Install/libraries/net/minecraft/client/1.20.1-*/…-mappings.txt` (official → obfuscated). Join them to turn `f_22276_` into `Attributes.MAX_HEALTH`. The SRG-named client jar in the same folder gives vanilla `createAttributes` values.
- **Names are ambiguous:**
  - "Decaying King" is both a Soulslike boss (`soulsweapons:accursed_lord_boss`) and the wither skeleton reskin in the Past.
  - The Corrupted Champion's entity ID is `graveyard:lich`.
  - The Scarlet Hunter is called "Brad" by its mod.

## Mob models

`tools/models/mobs.json` records where each mob's model lives (researched 2026-10-28); `tools/models/discover.mjs` finds most of it by following the renderer registration. What the mods do:

- **GeckoLib/AzureLib mods** keep `assets/<ns>/geo/**.geo.json` and `animations/**.animation.json`. The renderer or its model class names them, but the strings are often built at run time, so discovery guesses wrong names (`this`, `translation`) for Iron's Spellbooks, Traveloptics and Soulslike Weaponry; their files are `geo/entity/<name>.geo.json` and `textures/entity/<name>.png`.
  - **Iron's casting mobs** (Necromancer, Pyromancer, Cryomancer, Apothecarist) share `geo/abstract_casting_mob.geo.json` with a texture each; Traveloptics' Aquamancer, Aqua Grandmaster and the Geomancy addon's Geomancer reuse it. The Enraged Dead King reuses Iron's `dead_king` model with `dead_king_enraged.png`.
  - **MCreator mods (Dungeons and Combat)** build the texture path as `textures/entities/<texture>.png`, where `<texture>` is a string in the *entity* class (`human_soleia` for Sunleia, `mimic` for the Skull Mimic, `centinel` for the Mummy). The Mummy and the Weakness use the `centinel` and `disappointment` models.
  - **Effect bones** sit in some geo files and are hidden in code: the Nightlord's `lightning` planes are 1024 pixels wide.
- **Java models** come in four kinds: vanilla `LayerDefinition`s (`createBodyLayer`, or vanilla's own `LayerDefinitions.createRoots`), Citadel's `AdvancedModelBox` (Alex's Mobs, Alex's Caves, Ice and Fire), Cataclysm's copy of it in `lionfishapi`, and Mowzie's copy of llibrary. All four build cubes through the same `ModelBox(texU, texV, x, y, z, w, h, d, growX, growY, growZ, mirror, texW, texH)` constructor.
  - Newer Cataclysm models, Deeper and Darker, Bosses'Rise and Friends and Foes take their idle pose from vanilla `AnimationDefinition`s in static fields (`Scylla_Normal_Animation.IDLE`); without one, Scylla lies flat.
  - Render layers add parts the model class doesn't have: Ice and Fire's `LayerHydraHead` draws a `ModelHydraHead` per head (offsets in its `TRANSLATE`/`ROTATE` arrays), the Ignited Revenant's shields use `revenant_shield.png`, and Maledictus draws `maledictus_armor.png` over its ghost texture. The vanilla ender dragon draws its `neck` part 5 times and then 12 more as the tail, in `EnderDragonRenderer.DragonModel.renderToBuffer`.
  - Scylla's `anchor2` is the thrown anchor, shown only during that attack.
- **Ice and Fire dragons** are Tabula files in `models/tabula/<kind>dragon/` (one `.tbl` per pose; `*_ground` is the base). Their textures are `textures/models/<kind>dragon/<color>_<stage>.png` plus `_eyes`. The unused Black Frost has a texture (`textures/models/dread/black_frost.png`) laid out for the ice dragon model; the unused Dread Queen has a model class and texture.
- **Epic Fight mobs:** Weapons of Miracles ships meshes in `animmodels/entity/mob/*.json`. Nightfall Invade's bosses use Epic Fight's biped mesh (`epicfight:animmodels/entity/biped.json`) with a skin in `textures/entity/`, and their `setEquipment` gives them gear: Arterius the Duskfire armor and the Meen spear, the Scarlet Hunter the Crimson Moon. EFN's armor (`animmodels/armor/`) and weapon (`animmodels/weapon/`) meshes are skinned to the same biped armature, so they line up with the body as they are.
- **Armor on mobs:** MCreator armor (Dungeons and Combat) maps each piece onto parts of one model class (`Modelkamath_armor`; boots use `left_shoe`/`right_shoe` on the legs), and the game copies the wearer's part poses onto them. Fantasy Armor is GeckoLib (`geo/<set>_armor.geo.json`, `bipedHead` … bones; `armorCape` is the non-Epic Fight cape). EFN's Ruinfighter has meshes for the chestplate and leggings only; its helmet and boots use the vanilla armor model with `textures/armor/ruinfighter.png`.
- **The Past's soldiers** are vanilla zombies, skeletons and wither skeletons that `kubejs/server_scripts/dimension/past.js` renames and arms (`CONFIG.PAST.SOLDIERS`); the wiki models them as `past:<name>` entries.
- **Valarian Conquest** soldiers use the player model with a `male_citizen_<n>.png` skin chosen per entity, plus their faction's armor from `textures/models/armor/<faction>_layer_1/2.png`.
- **Resource packs** load in the order of `config/paxi/resourcepack_load_order.json` (`options.txt`'s list is empty). `Excalibur_V1.21.10.zip` retextures the vanilla mobs at the 1.20.1 paths without changing their models; separate Excalibur packs cover Cataclysm, Mowzie's Mobs, Friends and Foes, Deeper and Darker, Aquamirae, Iron's Spellbooks, Ice and Fire and others.
- `aquamirae:pillagers_patrol` has a spawn egg but no model: it spawns a patrol rather than being a mob.

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
  - Item Obliterator is meant to remove every `_estoc`, `_stylet`, `_bastardsword`, `_ranseur`, `_ahlspiess`, `_shortswords` and `myrmex` item, but those entries lack the `!` that marks a regular expression, so they match nothing (Known Bugs). Only its exact ids work.
  - The `soulrend:deleted_items` tag (whose recipes `removals.toml` drops) and `global.deleted_items` (in KubeJS) hide more.

## Epic Fight movesets and weapon abilities

`npm run sync-game` builds `game-data/movesets.json` from these sources (see `tools/lib/movesets.mjs`), and weapon pages show it with the `moveset` embed. When you research a weapon by hand:

- **Weapon types** are registered in each Epic Fight add-on's preset class (Epic Fight, Epic Fight Extra, Weapons of Miracles, WoM Plus, Nightfall, Dawnday, Resurrection, Rapier For EpicFightMod, P1nero's Epic Cataclysm, Epic Fight Awaken, EFR Fix Patch), or as JSON under `data/<ns>/capabilities/weapons/types/`. Soulrend's own types are in `config/paxi/datapacks/soulrend_ef_capabilities/data/soulrend_weapon_types/`.
- **Which type an item uses:** `data/<ns>/capabilities/weapons/<item>.json`. Soulrend's Paxi pack `soulrend_ef_capabilities` overrides about 830 items. Items with no file get a preset from their class (sword, axe, …).
- **Overrides to know:** Epic Fight Extra replaces every built-in type (`overwrite = true` in `config/epicfightx.toml`); EFR Fix Patch replaces `cdmoveset:s_tachi` (adds dual-wielding); WoM Plus repoints several WoM items through a pack inside its jar; `efn_enhance` (Nightfall Enhance) swaps Kusabimaru's preset.
- **Animations** (used by `npm run attacks`): clips are `assets/<ns>/animmodels/animations/<path>.json`, registered in each add-on's `build(AnimationBuilder)` method (`builder.nextAccessor("<path>", accessor -> new BasicAttackAnimation(…phases…))`, the field it's stored in is what Java presets name). Two keyframe formats: 4×4 matrices (Blender space; the loader turns the first joint it finds by -90° about X) and `"format": "attributes"` (`loc`, `rot` as w, x, y, z, `sca`, relative to the rest pose). Tracks named after unknown joints (`Leg_L.KINEMATICS`) are skipped; `Coord` is the entity's movement. Some clips declare their own class and phases in a `"constructor"` invocation string. SEpicfied adds skills and attack animations as JSON under `data_driven/<ns>/` in its jar (`innate_skill_builder/`, `animations/registry/`, and `animations/virtualizate/` aliases). Joint masks (mounted attacks move only `upper_joints`) are in `epicfight:animmodels/joint_mask/biped/`.
- **Held items:** Epic Fight draws an item on `Tool_R`/`Tool_L` with `translate(0, 0, -0.13)` then -90° about X (`RenderItemBase`), then the item model's third-person display transform. `assets/<ns>/item_skins/<item>.json` can override that (`transforms`) or draw an Epic Fight mesh instead (`renderer`, `mesh`, `texture`; Nightfall's weapons, modelled on the biped at rest). Nightfall's item skins name their meshes `mesh`, `mesh_main`/`mesh_off` or `mesh1_main` (with a sheath as `mesh2_*`); Resurrection's Yamato skin draws another item's model (`yamatoBlade` → `cdmoveset:yamato_blade`, an OBJ). Weapons of Miracles' weapons are Forge OBJ models (`forge:obj`; its staffs share one OBJ and pick a material with `mtl_override`). GeckoLib/AzureLib weapons (Traveloptics, Soulslike Weaponry, Samurai Dynasty, Nightfall's Excalibur) name their geo and texture only in their renderer and model classes. Mowzie's Spear and Wrought Axe swap to `<name>_in_hand` models in code. Simply Swords Epicfied changes four weapons' model in the Ochs style (`assets/s_epicfied/weapons_model_properties/`, read by EF Extended Datapacks). Nightfall's meshes are skinned to the wielder (`epic_fight_avalon` renderers draw them with the player's pose), so sheaths follow `Tool_L` or `Torso`. Cataclysm draws every weapon from one `CMItemstackRenderer` (lionfishapi models, `translate(0.5, 0.5, 0.5)` and `scale(1, -1, -1)` per item), reached through `Cataclysm.PROXY.getISTERProperties()`; P1nero's Epic Cataclysm gives the Tidal Claws, Gauntlet of Guard and Annihilator a `dual_renderer` item skin that draws them in both hands. Ice and Fire's troll weapons, Block Factory's Bosses, Alex's Caves' spears and Iron's Pyrium Staff also draw Java models from item renderers.
- **Skill text** is in lang under `skill.<ns>.<id>` and `.tooltip`. Nightfall uses `.tooltip` as the title and `.tooltip1…N` for the text. Epic Fight Extra's `epicfightx:*` skills reuse Epic Fight's text.
- **Nightfall item ids don't match their names.** `efn:air_tachi` is Bloodlust, `efn:co_tachi` Carnivorous Osteofrenzy, `efn:sword_of_pioneer` `[Vanguard Sword]`, `efn:hf_murasama` and `efn:hf_blade` HF-MURASAMA and HF-BLADE (the soulsweapons item `soulsweapons:bloodlust` is a different weapon). Their skills are `efn:bloodlust`, `efn:pioneer`, `efn:murasama`, `efn:hf_blade`, `efn:kusabimaru`. Most of their behavior is in the jar's code, not lang: Bloodlust's HP cost and +20% buffs are in `BloodlustEnhance`; `HfMurasamaItem` and `HfBladeItem` cancel fall damage and knockback, remove Levitation and add 0.2 to jump velocity while held (identical constants in both). HF-BLADE has no skill text at all.
- **Weapon abilities outside Epic Fight:**
  - Simply Swords uniques: numbers in `config/simplyswords_main/unique_effects.json5` (ticks). `config/simply_swords_overhaul-common.toml` enables Simply Swords Overhaul's rework of Emberlash, Molten Edge, Shadowsting, Soul Pyre, Soulrender, Star's Edge, Storm's Edge, Watcher and Whisperwind; the exported tooltip already shows its text. Runic weapons roll their power when crafted or clicked in the inventory.
  - Soulslike Weaponry: Alt tooltips come from shared ability keys (`tooltip.soulsweapons.<ability>.N`), numbers from `config/soulsweapons/soulsweapons.json`. Its parry (`enable_shield_parry`) applies to every shield.
  - Dungeons and Combat (MCreator): the item class calls procedures in `hurtEnemy` (hit), `use` (right-click, usually behind a sneak check) and `inventoryTick`; the procedure shows the effect, duration and who gets it. Some tooltip effects (cryolite Freezing, Rotten Hammer's Slowness) have no procedure on the item.
  - Too Many Bows: Shift text under `item.many_bows.*` and `item.too_many_bows.*`.
  - Traveloptics: each evolution (Evo 1–3) is a separate `<weapon>_level_one/two/three` item made at a Smithing Table.
  - P1nero's Epic Cataclysm turns several Cataclysm weapons into skill-point weapons; their exported tooltip shows its text instead of Cataclysm's.

## Armor abilities

- **Dungeons and Combat** set bonuses don't live on the armor items: each set has a `<Set>ArmorBonusSetProcedure` (or similar) under `procedures/` that checks all four slots and applies effects every tick, usually for 2–3 s at a time. "Man of Steel" (+3 armor) is shared by the steel, wolf steel, deserter, royal steel and prisoner pieces.
- **Soulslike Weaponry** armor uses the same ability keys as its weapons (`tooltip.soulsweapons.<ability>.N`); set abilities need the full set, and only the helmet's item level counts.
- **Aquamirae** keeps half-set and full-set abilities in `ability.aquamirae.<set>_armor_*` lang keys, with `{#1}` placeholders filled from its config.
- **Traveloptics** armor abilities are full-set; several toggle on a key that the tooltip shows as `[B]`.
- **Epic Fight Weight and Stun Armor** on armor come from Soulrend's attribute config, `config/the_config_of_alexandria/`; Epic Fight's lang explains them (`epicfight.tip.weight`, `epicfight.tip.stun_armor`).
- **Quark's Backpack** is switched off (`[oddities] Backpack = false`), so its tooltip says it is disabled.

## Curios

- **Which items are wearable where** comes from `data/curios/tags/items/<slot>.json` in many jars, not just the item's own mod: Immersive Lanterns makes vanilla lanterns belt curios, Epic Fight x Curios Compat adds Quark paper lanterns and the whole `#supplementaries:keys` tag, and so on.
- **Traveler's Backpack** keeps ability text in `ability.travelersbackpack.<name>`, but the numbers that matter are elsewhere: tier sizes, upgrades, the permanent-effect list (`backpackEffects`), cooldowns and the allowed abilities are in `defaultconfigs/travelersbackpack-server.toml` (a world's `serverconfig/` copy wins in game); the armor, luck, reach, health and speed bonuses of the Netherite, Diamond, Gold, Iron, Emerald, Enderman, Warden and Fox backpacks are constants in `BackpackAbilities` and have no lang text at all.
- **Icarus** wings have no tooltips; their behavior is `config/icarus.jsonc` plus the `message.icarus.status.*` lang lines.
- **Echoes** (Traveloptics, Geomancy Plus) keep their text under `item.<mod>.random_imbue_curio.<school>_unassigned/_assigned.tooltip`.
- **Samurai Dynasty** masks show their effects under Shift from shared `curios.samurai_dynasty.*` keys.
- **Iron's Spellbooks curio tooltips can't be taken at face value.** The Ring of Invisibility reveals invisible entities (`EntityMixin.isInvisibleTo`) and the Ring of Visibility does nothing when worn (its only use is the Mirror of Truth ritual); the Amulet of Teleportation needs 125% Ender Spell Power, shows only flavor text below that and drops itself if worn (`TeleportationAmuletItem`); the Greater Conjurer's Talisman's real effect is checked in `SummonManager` and never shown. Search the jar's classes for the item's `ItemRegistry` field before describing one.

## Magic (Iron's Spells 'n Spellbooks and addons)

- **Per-spell settings** live in `config/irons_spellbooks_spell_config/<namespace>/<spell>.json` (enabled, mana and power multipliers, min rarity, cooldown, max level, `allow_crafting`). `abyssal_shroud` and `cloud_of_regeneration` are disabled. The old `[Spells]` section of `irons_spellbooks-server.toml` is gone; the server toml holds only the general settings (`manaRegenMultiplier` 0.1, `scrollRecycleChance` 0.9, `maxUpgrades` 3, …).
- **Whether a spell can be looted or crafted** isn't in any config. It comes from the spell class:
  - Traveloptics boss spells extend `AbstractUniqueSpell`, which returns false for both `allowLooting` and `allowCrafting`, so their only sources are the named boss drops.
  - Weapon spells extend `AbstractWeaponSpell`: never loot, but craftable.
  - The Eldritch school needs learning (an Eldritch Manuscript opens `EldritchResearchScreen`) and is never random loot.
  - Alshanex's familiar spells override the methods one by one.
  - `game-data/spells.json` has `lootable` but not craftability; read the class hierarchy (`tools/lib/classfile.mjs` now returns `superName`).
- **Named spell drops** are `irons_spellbooks:randomize_spell` functions with `spells` or `spell_filter.spells` in the loot tables; school-limited scroll loot uses `spell_filter.school`. Spells carried by items show in exported tooltips as `[Name level]`. Strip codes with `stripMcCodes`, because the names carry `§#rrggbb` colors.
- **Spell info lines** come in two formats: Iron's `<value> <label>` and the addons' `<label>: <value>`, plus `◆ Header:` lines followed by `→` sub-lines. The addons also append their mod name as a line.
- **Upgrade orb types** are read from `data/<ns>/irons_spellbooks/upgrade_orb_type/*.json` (`amount`, `attribute`, `operation`). Soulrend's `soulrend_irons_spellbooks_rebalance` pack writes to `data/<ns>/upgrade_orbs/` with `valuePerLevel`, so it does nothing (logged on the Known Bugs page).
- **Spell Resistance is a multiplier where 1.0 is neutral.** Damage is multiplied by `2 - softCap(school resist × spell resist)` (`DamageSources.getResist`). `magic_fixes.js` sets mobs' base to 0, which doubles spell damage (logged on the Known Bugs page).
- **Soulrend's magic recipes** are in `kubejs/server_scripts/magic/` (`ironspells_recipes.js`, `dacxoptics_recipes.js`, `magic_fixes.js` for the Shriving Stone unlock recipes). The spellbook, mage armor and Traveloptics weapon recipes the mods ship are replaced through `#soulrend:custom_recipes_only` in `soulrend_recipes`. `spell_fixes` makes Heartstop's damage bypass everything.
- **Alshanex's Familiars** shards come only from ritual recipes (`alshanex_familiars:ritual_recipe`, six of thirteen shards). The spell tags under `data/alshanex_familiars/tags/irons_spellbooks/spells/<class>/` say which spells each familiar class casts.

## Apotheosis gear (affixes, gems, reforging)

- **Settings:**
  - `config/apotheosis/adventure.cfg` has the drop rates: Random Affix Chance 0.1, Gem Drop Chance 0.08 plus Gem Boss Bonus 0.5, and the chest rules.
  - `config/fallen_gems_affixes-common.toml` has the socket settings: one extra socket on every item, 20% pre-filled sockets, tiered sockets ON, one augment slot, and a 5% augment chance from Fabled bosses.
  - Soulrend's data overrides live in `config/paxi/datapacks/soulrend_apotheosis_rebalance/` (717 files: gems, affixes, augments, set affixes, universal bosses, enchanting stats, reforging and salvaging recipes, wanderer trades) and `soulrend_apotheosis_additions/` (Soulrend's own Aqua, Geo and Sound gems and three shards, extra affix loot).
- **Apotheosis reads the dimensional rarity settings as `dimension|min|max`** and ignores extra fields. Soulrend's three-rarity entries therefore cap one tier low, and the one-rarity Past entries fail to parse (`logs/latest.log`: "Invalid Gem Dimensional Rarity"). This is logged on the Known Bugs page.
- **Gem sources:**
  - Random gems use `gems.json`'s weight (0 means never random) and dimensions (`minecraft:null` means none).
  - Fallen Gems' boss gems and the Hydra Scale come from `data/fallen_gems_affixes/loot_modifiers/*_modifier.json` in its jar. `GemLootModifier` drops exactly one gem per player kill, using the listed chances as weights.
  - Apotheotic Additions' Eyes are shaped crafting recipes whose result carries the gem in NBT.
  - Soulrend disables `fallen_gems_affixes:compat/spell_general` with a `forge:false` condition.
- **Gem cutting:** `GemCuttingMenu.getDustCost` is 1 + 2 × the rarity ordinal. `GemCuttingMenu$RarityUpgrade` needs two matching gems plus 3 / 1 / 9 materials of the same / next / previous rarity. Rarity ordinals are in `data/*/rarities/*.json` (Apotheotic Additions: Artifact 6, Heirloom 7, Esoteric 8).
- **Reforging costs** are `apotheosis:reforging` recipes. Ancient and Artifact each have two, and the Ancient and Esoteric tables take the first match (`getRecipeFor`).
- **Universal bosses** (Fallen Gems) come from `universal_boss/universal_boss.json` in the rebalance pack (tier chances, dimension tiers, boss affixes). Their drops are in the jar's `universal_boss_loot.json`.
- **Apotheotic Additions' wandering trader trades** are in its jar under `data/apotheotic_additions/wanderer_trades/`. Most are gated on mods Soulrend doesn't have, so evaluate the `forge:mod_loaded` conditions.
- **Apotheosis crafts its basic shelves and slot tomes in code** (`EnchModule`, through Placebo's `RecipeHelper`). These recipes reach the recipe manager after the KubeJS recipe event; `wiki_export.js` now rebuilds them from the live recipes.

## Features: screens, travel, storage, multiplayer, settings (researched 2026-10-28)

- **Inventory tabs** (`SoulrendClientGuiEvents.addInventoryTabs`): Inventory, Levelling, Skill Tree, Quests, Combat Skills. There is no Origins tab (its lang key is unused); Origins is a menu of the Levelling screen, whose right panel is `SidebarPanel` ATTRIBUTES, TITLES, FACTIONS, ORIGINS. The stat + and − buttons are on the left Character panel. The lang file's Skills, Perks and Stats menu keys are unused.
- **Origin selector:** `SoulrendOriginSelectionScreen` replaces Origins' screen; Random comes from the layers' `allow_random` (race excludes Human, class excludes Wildheart). The Back button is Feelix's Soulrend Optimizations (`origins.back_button`).
- **Iron's casting input** is in `ClientInputEvents` and `Utils.serverSideInitiateCast` / `serverSideInitiateQuickCast` (quick cast fires spell-bar slot N without changing the selection). `CastSource.consumesMana` / `respectsCooldown` decide which sources cost mana: scrolls cost neither. Mana regen is `MagicManager.regenPlayerMana`: every 10 ticks, max × regen × 0.01 × `manaRegenMultiplier`.
- **Waystones XP cost** (`PlayerWaystoneManager.getExperienceLevelCost`): the dimensional cost *replaces* the distance cost, so with Soulrend's config every trip is exactly 1 level.
- **Waterloggable storage:** vanilla chests, Sophisticated Storage chests and Iron Chests' chests implement `SimpleWaterloggedBlock`; barrels and Storage Drawers don't. Explosions use the higher of block and fluid resistance (water 100).
- **Configs that only exist in the test save:** Corpse, Tom's Simple Storage, Sophisticated Storage and Open Parties and Claims' player config have no `defaultconfigs/` copy; `saves/New World/serverconfig/` holds their mod defaults.
- **Open Parties and Claims** commands are `/oparties`, `/oclaims` and `/opac` in 0.32.7 (the `COMMAND_PREFIX` constants), not `/openpac-*`. Invites are `/oparties member invite <player>`. FTB Teams parties (shared quests) are a separate system.
- **Operator-only commands:** `/origin`, `/skilltree`, `/soulrend` (both the Soulrend Core and KubeJS branches), `/waystones` and `/deathhistory` need permission level 2.
- **Epic Fight basics for players:** players start with only Basic Attack and Knockdown Wakeup (`PlayerPatch`); the Prologue "Epic Combat" quest gives Guard, `efn:efn_parry`, `efn:efn_dodge` and Step books; Epic Fight's own chest loot (`EpicFightLootTables`) adds Guard, Roll, Step, Berserker, Stamina Pillager, Technician, Swordmaster and Phantom Ascent books; mob drops are off (`skill_book_mob_drop_chance_modifier = -100`). Skill parameters (stamina costs, parry window) are in the jar's `data/epicfight/skill_parameters/`. Attack and innate share the left mouse button; the innate fires on a long press (`long_press_count` 3 in `epicfight-client.toml`).
- **Posture** comes from Epic Fight Posture Integration (`PostureManager` constants: regen after 150 ticks at 5%/s, 60-tick break stun) and feeds Combat Evolution executions (`combat_evolution-common.toml`).
- **Soulrend Tweaks' two-handed rule** only patches Passive Skill Tree's dual-wielding condition (`DualWieldingEntityPredicateMixin`, mode INERT); `#soulrend_tweaks:two_handed_weapons` and `#soulrend:type_two_handed` hold the same 350 items.
- **`kubejs:lifesteal` has no source** anywhere in the instance (Known Bugs); the Levelling screen's Lifesteal row is `attributeslib:life_steal`. `kubejs:mounted` is only read by Ranger skill nodes. Companion friendly-fire rules are `soulrend_core` `combat/CompanionProtection`.
- **Dragon Radar Mod** has no config: the search radius slider (100–15,000, default 7,500), the Stage 1–3 limit of the element radars, the wild-only filter (`ServerDiskDragonScanner` skips Tamed/Owner) and the creative-only Teleport button are all in `dragonradarmod-2.2.0.jar`.
- **Soulrend Companion** (`cdu_soulrend`) lists the official realms from `https://api.playcdu.co/configs`; `config/cdu_soulrend/realms-cache.json` caches them (AU, EU, US at `soul.<region>.playcdu.co`).
- **Feelix's Soulrend Optimizations:** `config/feelixs_soulrend_optimizations/features.properties` documents every feature in its comments; `presets.cfg` holds the preset values (the in-game descriptions don't follow it, see Known Bugs); `graphics.properties` is the author's own last preset. Java arguments are `JavaSettings.ARGUMENTS`; `GraphicsPresets.defaultPreset` is High; idle pre-generation (`IdlePregen`) is a 384-block square after 1,200 idle ticks.

## Places with nothing useful

- **Empty files and folders:**
  - `core_tower`, `land_tower` and `ocean_tower` are empty files.
  - `moonlight-global-datapacks/`, `patchouli_books/` and `data_driven/slm_epicfight/` are empty.
- **`datapacks/*.zip` in the instance root** only contains Epic Fight compatibility data, and nothing seems to load it.
- **`manifest.json` and `modlist.html` are stale** (from the October 16 export). Use the `mods/` folder.
- **`registry_dumps/`** only has `spells.txt` and `attributes.txt`. They're fine for spell lists, but not useful for items.
- **No mod adds a "spellbinding table".**
