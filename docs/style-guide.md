# Style guide for wiki pages

How to write a page for the Soulrend Wiki: voice, naming, where numbers come from, and a template for each kind of page. For the page *syntax* (header fields, links, embeds), see [`README.md`](../README.md#writing-a-page). For *where facts live* in the modpack, see [`instance-guide.md`](instance-guide.md).

Readers are mostly **new players**. Writers are the pack author and AI agents. Every rule here is meant to be followed literally, so agents get consistent results and pages look alike.

[`content/bosses/act-ii/frostmaw.md`](../content/bosses/act-ii/frostmaw.md) is a finished example of the Boss template, with its sources comment.

## Voice and tone

- **Neutral and encyclopedic.** Write in the third person and present tense: "Frostmaw sleeps in snowy biomes", not "You'll find Frostmaw sleeping…".
  - **Exceptions:** Guides, build guides and FAQ answers may address the reader as "you".
  - Walkthrough steps on quest pages are written as instructions: "Drink an Invisibility potion, then…".
- **American spelling** in prose and in page titles that aren't in-game names: armor, color, leveling, center. In-game names are always written the way the game writes them. Some outline stubs have British titles ("Mob Levelling", "Levelling Stats"). Retitle them when you write them; the file path can stay.
- **Plain and direct.** One idea per paragraph, and short sentences.
  - Don't use "simply", "just", "obviously", "easily", "basically" or "note that".
  - Don't hedge ("it seems", "probably"). If you aren't sure, don't write it (see [Facts and sources](#facts-numbers-and-sources)).
  - Don't address the reader as a "beginner" or praise the content ("this powerful boss").
- **Explain on first use.** The first time a page uses a pack term (Soulrend level, Act, origin, sigil, Apothic), explain it in a few words or link its page.

| Write | Not |
| --- | --- |
| Frostmaw drops an Ice Crystal if it still carries one. | You'll get an awesome Ice Crystal if you're lucky! |
| The boss loses at most 20% of its maximum health per second. | It basically can't be burst down. |
| Requires a Soulrend level of 30. | You probably need to be around level 30. |

## Names and terms

- **In-game names verbatim**, including capitalization and punctuation: "Axe of a Thousand Metals", "Iron's Spells 'n Spellbooks". Use the name from `game-data/items.json` or the quest book. When an item's real name differs from what players call it, use the real name and put the nickname in `aliases`. For example, `nether_remastered:seal_piece_2` is called "Mysterious Shard" in game; the quest calls it the "Top-Right Shard".
- **Bold the page's subject** once, in the first sentence.
- **Acts** are written as in the quest book: "Act II – First Steps" (with an en dash) in titles, and "Act II" in running text.
- **Ids** (`mowziesmobs:frostmaw`) go in backticks. Use them in infoboxes and for disambiguation, not in running prose.
- **Formatting codes** (`&b&l`, `§6`) never appear in prose. Strip them when quoting quest text.
- **Disambiguated titles** such as "Yeti (Boss)" and "Siren (Race)" are linked by path: `[[bosses/act-ii/yeti|Yeti]]`.
- **Mod names** appear in the infobox, which adds them automatically. Name a mod in prose only when the reader needs it, for example "an Iron's Spellbooks spell school" or "Epic Fight skill books".
- **Game terms** follow the Minecraft Wiki: "mob", "hostile mob", "biome", "structure", "enchantment", "spawn egg".

## Facts, numbers and sources

**Nothing is guessed.** Every number and every mechanic on a page comes from one of these sources, in this order:

1. `game-data/` (items, names, tooltips, recipes, tags), via embeds where possible.
2. Instance files: configs, KubeJS, Paxi datapacks and FTB Quests (see [`instance-guide.md`](instance-guide.md)).
3. Mod jars: data files with `unzip -p`. Base mob stats come from the entity class (`javap -c -p` on `createAttributes`).

If a fact can't be sourced, leave it out and add `<!-- TODO: … -->` where it belongs. A page with TODOs stays `"hidden": true`, or the TODO goes in a section that is otherwise complete. Never present something remembered from another modpack or an online wiki as fact: Soulrend changes configs, loot and levels.

**Units and formatting:**

- **Health:** HP first, then hearts: `4,675 HP (2,337.5 hearts)`.
- **Time:** seconds, converted from ticks (20 ticks = 1 s): `13 s`, not `260 ticks`.
- **Percentages:** `+15%`, `20%`. Chances: `5%`, not `0.05`.
- **Large numbers** use thousands separators: `4,675`.
- **Distances** are in blocks.
- **Levels:** "level 60" in lowercase. Write "Soulrend level" for the player's level, and "XP levels" for vanilla experience.

**Recipes** are always embeds (`{{recipes …}}`, `{{uses …}}`, `{{recipe <id>}}`). Never retype an exported recipe as a table or list. Use a hand-written `recipe` block only when the game has no recipe JSON for it (for example, a ritual).

### The sources comment

Every written page has a sources comment right after the header. It lists the files the page's facts came from, plus any calculation, so the page can be checked after a pack update. It isn't shown to readers.

```md
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/mowziesmobs/leveling_settings/entities/frostmaw.json (level 60, pinned)
  mods/mowziesmobs-1.8.2.jar EntityFrostmaw.createAttributes (base: 250 health, 10 attack, 0 armor)
  config/autoleveling-common.toml [Attributes] (per-level bonuses)
  calc: health 250 × (1 + 0.3 × 59) = 4,675; attack 10 × (1 + 0.1 × 59) = 69
-->
```

Give paths relative to the instance root. Use `game-data/<file>` for wiki data. Name the jar file, because the version in it matters.

## Mob and boss stats

Mob stats change with level, so mob and boss pages give **scaled numbers**, worked out as follows.

**How a mob's level is set** (Soulrend Core replaces Auto Leveling's own calculation):

- A new mob takes the **Soulrend level** of the nearest player in its dimension, averaged with other players within 60 blocks of that player (`config/soulrend_core/common.toml [mobLeveling]`). The Soulrend level is the player's skill-point progress, 0–200.
- Per-entity files in `config/paxi/datapacks/soulrend_mob_leveling/data/<mod>/leveling_settings/entities/` set a **floor** (`starting_level`) and a **cap** (`max_level`, where 0 means no cap):

  ```
  level = min(max(starting_level, player level) + random bonus, max_level)
  ```

- The per-dimension files in that datapack (`…/dimensions/`) **have no effect** while Soulrend's mob levelling is on. Don't cite them.

**How a level becomes stats.** Auto Leveling multiplies each attribute by `1 + bonus × (level − 1)`, using the per-level bonuses in `config/autoleveling-common.toml [Attributes]`:

| Attribute | Bonus per level | At level 60 |
| --- | --- | --- |
| Max health | 0.3 | ×18.7 |
| Attack damage | 0.1 | ×6.9 |
| Armor | 0.011 | ×1.649 |

Base values come from the mod's config, if it has a health or attack multiplier, or from the entity class. A base of 0 (no armor) stays 0 at every level.

**Which levels to show:**

- **Pinned level** (`starting_level` equals `max_level`, e.g. Frostmaw at 60): the stats table has one column for that level. The quest book often states it too ("Level 60").
- **Scaling mobs:** one column per act where the mob actually spawns, using the act's typical level from the table below. If the mob has a floor, use `max(floor, act level)`.
- **Apothic variants:** Apotheosis can spawn a mob as an **Apothic boss** (`data/apotheosis/bosses/` in the Apotheosis jar; natural spawns only in the Nether and outer End, per `config/apotheosis/adventure.cfg`) or as a **miniboss** (`data/apotheosis/minibosses/`, with Soulrend's own in `config/paxi/datapacks/soulrend_apotheosis_rebalance/`). Give a variant its own table in an "Apothic variants" section when players meet or farm it (Endermen, for example). List its stat modifiers on top of the scaled base values, plus its gear and affix rarity.

**Typical levels by act.** All pages use this one table. The "Pinned bosses" column is sourced from `soulrend_mob_leveling`. The typical player levels are **proposals** derived from it, and not yet confirmed by the pack author.

| Act | Pinned bosses in the act | Typical Soulrend level (proposal) | Column value |
| --- | --- | --- | --- |
| Prologue / Act I | none | 1–20 | 10 |
| Act II | 20 (Gravewatcher) to 60 (Frostmaw, Umvuthi, Warden) | 20–60 | 40 |
| Act III | 100 (Echo of Tyros) to 250 (Cataclysm bosses) | 60–150 | 100 |
| Act III-b | 300 (Corrupted Champion) | 100–200 | 150 |
| Act IV | 467 (Ender Dragon), 500 (Nightwarden) | 150–200 | 180 |
| Act V | none pinned | 200 (the player cap) | 200 |

Some pinned levels are far above 200 (the Ender Dragon is level 467), because the player cap applies only to the player's own level.

**Boss damage cap.** Bosses listed in `config/soulrend_core/boss_damage.toml` lose at most a set percentage of their maximum health per second, shared by every attacker. Give it as a stats row, along with the shortest possible kill time it implies ("20% per second: at least 5 s").

## Links

- Link the **first mention** of a page or item in each section, not every mention.
- Use `[[item:…]]` for items (icon, name, tooltip), and page links for bosses, quests, mechanics and places.
- Link by title when it's unique (`[[Frostmaw]]`), and by path when it's qualified or when you want different text.
- Link to sections with `#`: `[[Frostmaw#Drops]]`, `[[#Drops]]`.
- Linking to a hidden stub is fine. The link starts working fully once the stub is written.
- Don't link inside headings or the first bolded subject.

## Page header

| Field | Rule |
| --- | --- |
| `title` | The in-game name. Qualify it with the type in brackets only if another page has the same name. |
| `summary` | One sentence, ending with a period, at most about 120 characters. It shows in search results and link previews, so it has to make sense on its own. Say what the subject *is* and its main role. |
| `aliases` | Names players actually use: nicknames, the mod's internal name, alternative names in quests. |
| `items` | Item ids that should link to this page. A boss page lists its spawn egg. An item page lists its items. A drop belongs on the item's own page, not on the boss page. |
| `icon` | Set it only when the first entry in `items` isn't the best icon. |
| `category`, `order` | Only on section index pages and level-2 pages, as generated by the outline. Leaf pages (e.g. `bosses/act-ii/frostmaw`) have no `category`, because the sidebar lists categories flat and leaves are reached from their section index. |
| `hidden` | Remove it when the page is written. |

**Turning a stub into a page:** delete the `<!-- outline-stub … -->` line, the placeholder `> [!NOTE]`, and `"hidden": true`. Keep any facts from the stub's notes, after checking them against a source.

**Mob and boss infoboxes:** set `"item"` to the spawn egg, which gives a large icon and the Mod row. Override the ID row with the entity id, so it doesn't show the egg's id: `["ID", "`mowziesmobs:frostmaw`"]`. A mob without a spawn egg uses `"image"` (once there is a screenshot), with `["Mod", "…"]` and `["ID", "…"]` rows written by hand.

## Callouts and media

| Callout | Use it for |
| --- | --- |
| `[!NOTE]` | Context that isn't essential, such as differences from the mod's defaults. |
| `[!TIP]` | Optional advice that makes something easier. |
| `[!IMPORTANT]` | Something the reader must not miss to progress (a quest that only accepts one item, for example). |
| `[!WARNING]` | Ways to lose items, progress or a fight (health resets, items consumed). |
| `[!CAUTION]` | Dangerous mechanics: one-shots, area denial, grief risks. |
| `[!LORE]` | Quest book or item text, quoted **verbatim** (formatting codes stripped). Name the source in the callout title, e.g. `> [!LORE] The Frostmaw (Fallen Myths)`. |

- Use at most one callout per section, and never put two in a row.
- No spoiler gating. Every page states everything plainly.
- Every image has a `caption`. Screenshots go in `assets/<section>/` and are named after the page (`assets/bosses/frostmaw-arena.png`).
- Add `limit=` to `{{uses}}` and `{{recipes}}` when an item has more than about 8 recipes.

## Page templates

Each template fixes the **section names and their order**. A section with nothing to say is left out; don't write "None". Every page starts with a **lead**: one or two paragraphs under the title and above the first heading, which say what the subject is, where it fits in progression, and why the player cares.

### Boss

Header: `title`, `summary`, `aliases`, `items` (the spawn egg), and an `infobox` with the spawn egg as `item` and these rows:

```json
"rows": [
  ["ID", "`<entity id>`"],
  ["Act", "[[progression/act-ii-first-steps|Act II]]"],
  ["Level", "60 (fixed)"],
  ["Health", "4,675 HP"],
  ["Location", "…"],
  { "heading": "Drops" },
  ["Guaranteed", "[[item:…]]"]
]
```

Sections:

1. Lead
2. `## Location`: where it spawns or how it is summoned (structure, biome, altar, item).
3. `## Stats`: the stats table: level, health, attack damage, armor, knockback resistance, movement speed and the damage cap.
4. `## Attacks`: a table or list of attacks with their conditions and cooldowns. Mention phases here.
5. `## Strategy`: advice that follows from the sourced mechanics (ranges, cooldowns, counters). No made-up numbers.
6. `## Drops`: a table with the item, count and condition, followed by `{{uses …}}` for important drops when it helps.
7. `## Quests`: the quests that need the boss, with their rewards and a `[!LORE]` quote.
8. `## Trivia`: optional, and short.

### Enemy

Like Boss, with these sections: Lead, `## Spawning`, `## Stats` (one column per act; see [Mob and boss stats](#mob-and-boss-stats)), `## Attacks`, `## Drops`, `## Apothic variants`, `## Hunter's Journal` (the kill-count quest, if any).

### Item

Header: `title`, `summary`, `items`, and an `infobox` with the item as `item` (Mod and ID are added automatically) and rows for type, rarity and key stats.

Sections:

1. Lead
2. `## Obtaining`: drops, loot, quests, trades.
3. `## Usage`: what it does. Abilities, set bonuses and the tooltip explained in words.
4. `## Crafting`: `{{recipes <id>}}`
5. `## Used in`: `{{uses <id>}}`
6. `## Quests`

**One page or a group?** Group by default:

- Armor sets go on one page.
- Similar weapons (same tier, same damage profile and so on) share one page.
- Any other piece of equipment gets its own page.
- Any item with **2+ paragraphs** of material gets its own page. Its group page keeps a one-line entry linking to it.

### Item group

Header: `items` lists every item on the page, so all their links come here.

Sections:

1. Lead
2. `## Comparison`: a table with one row per item (icon link and key stats).
3. One `## <item name>` section per item, or a one-liner that links to the item's own page.
4. `## Crafting`: `{{recipes}}` / `{{items tag=…}}` for shared recipes.

### Quest or progression step

Header: `title` (the quest's name), `summary`, and an `infobox` with the quest icon item, `"itemRows": false` (so the icon's Mod and ID rows don't appear), and rows for Chapter, Requires, Task and Rewards. A page may cover a short chain of quests (a branch, or an item quest and its follow-ups); then list them in an Objectives table with Requires, Task and Rewards columns. Side-chapter pages use the same sections, with the chapter's quests grouped under Objectives or their own headings.

Table rewards are written "a roll on [[progression/reward-tables#…|Chipped Gems]]" (random) or "a … of your choice" (choice). Give XP rewards as "N XP levels" or "N experience points", matching the quest's reward type.

Sections: Lead (what the quest asks and what it opens), `## Requirements` (previous quests, items, level), `## Objectives`, `## Rewards`, `## Walkthrough` (numbered steps; may address the reader as "you"), `## Next` (the quests it opens, as links).

Quote the quest description in a `[!LORE]` callout under Objectives.

### Origin (race or class)

Sections: Lead (playstyle in one sentence), `## Powers` (a table: power, effect, cooldown), `## Drawbacks`, `## Playstyle`, `## Pairs well with` (classes for a race, races for a class).

Sources: `config/paxi/datapacks/soulrend_origins_classes/` and `soulrend_lang`.

### Skill tree node or branch

Sections: Lead (the branch's theme), `## Nodes` (a table: node, cost, effect, requirement), `## Keystones`, `## Recommended paths`.

Effects come from each node's bonuses, not from its file name (see [`instance-guide.md`](instance-guide.md#skill-trees)).

### Feature or mechanic

Sections: Lead (what it is, in one paragraph), `## How it works`, `## Details` (numbers and edge cases), `## Tips`, `## Related` (links).

### Mod overview

Sections: Lead (what the mod adds to *Soulrend*, not its full feature list), `## Changes in Soulrend` (configs, KubeJS edits, removed items), `## Key pages` (links to the bosses, items and features it adds).

### Guide or build guide

These may address the reader as "you".

- **Guide sections:** Lead (the goal), `## Before you start` (requirements), numbered `## Steps` or one H2 per stage, `## Next`.
- **Build guides** also have `## Gear`, `## Skill tree` and `## Rotation`, plus `## Variations`.

### FAQ answer

- The title is the question, ending with "?".
- The first sentence answers it directly.
- Details and links follow, in at most a few short paragraphs.
- If the full answer lives on another page, give a two-sentence summary and link to it.
- No headings unless the answer is long.

### Section index

- A one-paragraph intro.
- Then a list or table of the child pages, with one-line descriptions (the outline already provides them).
- Keep it in step with the folder when pages are added.

## Before publishing

- [ ] The header is valid JSON, and `summary` is set and makes sense on its own.
- [ ] The stub line, placeholder note and `"hidden": true` are gone.
- [ ] The sources comment lists every file the facts came from, with calculations.
- [ ] The page has no TODOs (or stays hidden).
- [ ] Names match the game, prose uses American spelling, and the voice is third person (except guides and FAQ answers).
- [ ] The first mention of each item or page in each section is linked.
- [ ] `npm run dev` shows no errors for the page, and the page reads well on a phone.
