# In-game export

How the wiki gets exact game data (names, tooltips, recipes, tags, loot tables, item stats, gems, skills, spells, attributes, effects, enchantments and Epic Fight attacks) from a running game. `npm run sync-game` reads the export and writes `game-data/`. The README's [Game data](../README.md#game-data) section covers the other sources (jar scan, rendered icons).

## Where the exporter lives

The exporter is **not in this repo**. It is the `/soulrenddev wiki export` command of **Soulrend Dev Utils**, a dev-only Forge mod in the modpack repo:

- Modpack repo: [apotheoticstudios/Soulrend-Development](https://github.com/apotheoticstudios/Soulrend-Development). Its root is the CurseForge instance folder.
- Mod source: `mod-src/soulrend_dev_utils/`. The exporter is `src/main/java/net/apotheoticstudios/soulrend_dev_utils/wiki/`.
- Mod docs: `docs/features/soulrend-dev-utils.md` in the modpack repo.

Until 2026-11-08 the exporter was three KubeJS scripts in this repo (`tools/kubejs/`), installed with `npm run install-kubejs`. Those are gone. The Java port writes the same files with the same JSON shapes, so `sync-game` reads both.

The tools here find the instance at `~/Documents/curseforge/minecraft/Instances/Soulrend-Development`. Pass `--instance <dir>` to `install-exporter`, `uninstall-exporter` and `sync-game` if yours is elsewhere.

## Running an export

1. **Install:** `npm run install-exporter`. This:
   - builds the mod with the modpack's Gradle wrapper, which copies `soulrend_dev_utils-*.jar` into the instance's `mods/`;
   - removes the old KubeJS scripts (`kubejs/{server,client}_scripts/wiki_export.js`, `wiki_attack_export.js`) if they are still there.

   Gradle 8.8 needs JDK 17–22. On macOS the script picks one from `/usr/libexec/java_home -V`. Elsewhere, pass `--java-home <jdk>` or set `JAVA_HOME`. Run it again after pulling changes to the mod.
2. **Export in game:** start the instance and open a **single-player** world, on a **fresh character with nothing equipped and no origin bonuses**. Spell values and Epic Fight styles use your player as the caster, so gear would leak into them (the command warns if you have gear on). Then run `/soulrenddev wiki export`.
   - Each step reports in chat. A failed step doesn't stop the others.
   - The client steps freeze the game for a few seconds while they read every item's tooltip.
   - The last chat line is `Done. Now run npm run sync-game in the wiki repo.`
3. **Sync:** run `npm run sync-game` here. Its `data:` line lists the export files it copied.
4. **Check:** run `git diff --stat game-data/` before committing (see [Checking an export](#checking-an-export)).

**Never ship the jar with the modpack.** It is a dev tool: leave it out of the CurseForge export. `npm run uninstall-exporter` deletes it from `mods/` and leaves `wiki-export/` alone. The jar also provides the modpack's `/soulrenddev skilltree` commands.

Don't run `npm run sync-game` without an export present. With no `wiki-export/` (and no old `kubejs/exported/wiki/`), it falls back to the jar scan, overwrites the committed `game-data/` with it, and deletes the export-only data files (`item-stats.json`, `gems.json`, …).

## What it writes

Output goes to `<instance>/wiki-export/`, which the modpack gitignores. Client steps run on the client thread, because only the client knows translated names and tooltips. Server steps run on the integrated server, which is why the command needs single player.

| Export file | Side | `game-data/` file | Holds |
| --- | --- | --- | --- |
| `items.json` | client | merged into `items.json` | Display name, rarity, mod name, tooltip lines (`§`-formatted; hex colours as `§#rrggbb`) |
| `recipes.json` | server | `recipes.json` | Every recipe the running game has (see below) |
| `tags.json` | server | `tags.json` | Every item tag with its members |
| `loot_tables.json` | server | `loot-tables.json`, `loot-index.json` | Every loot table as the winning datapack JSON |
| `item_stats.json` | server | `item-stats.json` | Attribute modifiers per slot, durability, stack size, enchantability, burn time, tier, armor, food, curio slots and attributes, Apotheosis category, Epic Fight weapon data, spellbook slots |
| `gems.json` | client | `gems.json` | Apotheosis gems: weight, quality, dimensions, rarity range, bonus lines per rarity |
| `skills.json` | client | `skills.json` | Epic Fight skills: name, category, resource, cost, description |
| `spells.json` | client | `spells.json` | Iron's Spellbooks spells: school, cast type, cooldown, per-level rarity, mana cost, cast time, info lines |
| `attributes.json`, `effects.json`, `enchantments.json` | client | same names | Names, descriptions, basic properties |
| `attack_modifiers.json` | server | not copied | Epic Fight attack phases: timing, damage, armor negation, impact and max strikes modifiers, stun, hit priority. For checking numbers by hand. |

`sync-game` re-sorts and re-serializes everything, so formatting differences in the export don't matter. Values the game stores as floats are written widened to double (`0.10000000149011612`), as the KubeJS export did.

The Curios, Apotheosis, Epic Fight and Iron's Spellbooks parts only run when that mod is loaded.

### Recipes

The exporter walks the live recipe manager, so recipes removed after loading are already gone. That includes soulrend_core's `removals.toml`, which removes recipes after KubeJS's recipe event. For each recipe id:

1. If a datapack file `data/<ns>/recipes/<path>.json` exists, the winning file is exported as it is. For a `forge:conditional` file, the first alternative whose conditions pass is exported.
2. Otherwise the recipe was registered in code (e.g. Apotheosis's shelves and tomes through Placebo). It is rebuilt from the recipe object: serializer type, result, and a shaped pattern or an ingredient list. Type-specific fields beyond those are lost.

The KubeJS exporter used KubeJS's recipe event instead. Its `*:kjs/*` ids were recipes that KubeJS scripts added at the time. Those recipes have since moved into the modpack's Paxi datapacks and now export under their datapack ids. `sync-game` still applies `removals.toml` to the JSON as a fallback for old exports.

## Checking an export

The first export from the Java exporter hasn't been synced yet (as of 2026-11-08). When it is, `git diff --stat game-data/` should show:

- The 276 `*:kjs/*` recipes gone, and the same recipes present under their Paxi ids.
- `sync-game`'s "dropped by soulrend_core removals.toml" count near 0. It drops about 680 from the old export, because the old exporter didn't filter removed recipes.
- Apotheosis's code-registered shelf and tome recipes (Hellshelf, Seashelf, … the slot tomes) in `recipes.json`. Then the hand-written `recipe` blocks in `content/guides/enchanting-guide.md` and the TODO in `content/items/gear-progression/enchanting.md` can switch to `{{recipes}}`, and the matching entry in [item-research-queue.md](item-research-queue.md) can go.
- Otherwise, small diffs in items, tooltips and stats, from mod updates since the last export.

A large drop in item, recipe or item-stats counts means a step failed. Check the chat output and the log before committing.

## Troubleshooting

- **Logs:** the instance's `logs/latest.log`. Every exporter line starts with `[wiki export]`. Item-stats failures are counted per part (attributes, food, curios, epicFight, …), with the first failing item named.
- **"The wiki export needs a single-player world":** the command reads the integrated server, so it can't run on a multiplayer server.
- **A compat step fails with `NoSuchMethodError` or `NoClassDefFoundError`:** the pack updated that mod and its API changed. In the modpack repo, set the new CurseForge file ID in `mod-src/soulrend_dev_utils/gradle.properties`, fix the class in `wiki/compat/`, then run `npm run install-exporter` again. The file ID is `installedFile.id` in the instance's `minecraftinstance.json`.
- **The build fails with `Unsupported class file major version`:** Gradle is running on a JDK newer than 22. Pass `--java-home <jdk 17 or 21>`.
- **`sync-game` warns "reading the old KubeJS export":** there is no `wiki-export/` yet, so it read `kubejs/exported/wiki/`. Run a new export.

## Changing the exporter

Edit the Java in the modpack repo (`mod-src/soulrend_dev_utils/src/main/java/.../wiki/`), not here. If you add a file or change a JSON shape, update `EXPORT_DATA` and the readers in `tools/sync-game.mjs` (and `tools/lib/movesets.mjs` for `item_stats.json`) in the same change. Also update the table above and the modpack's `docs/features/soulrend-dev-utils.md`.
