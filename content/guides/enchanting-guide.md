---
{
  "title": "Enchanting Guide",
  "category": "Guides",
  "aliases": ["Apotheosis Enchanting Guide", "Enchanting Table Guide", "Eterna Quanta Arcana", "Infusion Guide", "Shelf Guide"],
  "summary": "From 15 bookshelves to Eterna 50: every shelf path, infusion layout, tome and library, worked out from the code.",
  "icon": "minecraft:enchanted_book"
}
---
<!-- sources:
  mods/Apotheosis-1.20.1-7.4.8.jar ApothEnchantmentMenu.gatherStats / canReadStatsFrom / TableStats$Builder (stat groups, caps, start values: Quanta 15, Arcana = item enchantability / 2, Clues 1) / TableStats (clamps: Eterna 0 to the highest registered max, the others 0 to 100)
  mods/Apotheosis-1.20.1-7.4.8.jar EnchantingStatRegistry.getEterna / getMaxEterna (blocks without an entry use Forge's enchant power bonus and a max of 15, IEnchantingBlock default), computeAbsoluteMaxEterna
  mods/Apotheosis-1.20.1-7.4.8.jar RealEnchantmentHelper.getEnchantmentCost (slot levels), getQuantaFactor (Quanta and Rectification), selectEnchantment (Arcana bands, guaranteed picks at 25 and 75, extra-pick loop), getAvailableEnchantmentResults (treasure, discoverable, filter)
  mods/Apotheosis-1.20.1-7.4.8.jar ApothEnchantmentMenu.m_6366_ (clickMenuButton: lapis id + 1, XP level >= the slot's level), ApothMiscUtil.getExpCostForSlot, Placebo-1.20.1-8.6.3.jar EnchantmentUtils.getExperienceForLevel
  mods/Apotheosis-1.20.1-7.4.8.jar ApothEnchantmentMenu$Arcana (rarity weights per band), EnchantmentInfo.defaultMin / defaultMax / load (Max Level range 1 to 127), EnchantingRecipe.matches / findMatch (infusion only in slot 3), EnchantingRecipe$Serializer
  mods/Apotheosis-1.20.1-7.4.8.jar EnchModule lambda$init$4 (the shelf and tome recipes Apotheosis registers in code through Placebo's RecipeHelper, replayed from the bytecode: Hellshelf, Seashelf, Blazing, Glowing, Crystalline, Heart-Forged, Pearlescent, Draconic, Beeshelf, Melonshelf, the nine slot tomes and the Tome of Scrapping)
  mods/Apotheosis-1.20.1-7.4.8.jar EnchLibraryTile (levelToPoints = 2^(level - 1), Basic maxLevel 16, Ender maxLevel 31, depositBook, canExtract, extractEnchant, item handler), TomeItem, ScrappingTomeItem / ImprovedScrappingTomeItem / ExtractionTomeItem.updateAnvil (costs 6 / 10 / 16 levels per enchantment), FilteringShelfBlock, TreasureShelfBlock, WardenLootModifier
  mods/Apotheosis-1.20.1-7.4.8.jar data/apotheosis/recipes (dormant_deepshelf, enchanting/*), data/apotheosis/tags/items/infused_shelves.json
  mods/ApotheoticAdditionsV2.2.2.jar data/apotheotic_additions/enchanting_stats and recipes/shelves (nuclear_barrel_shelf uses alexscaves:nuclear_bomb)
  mods/traveloptics-6.3.0-1.20.1.jar data/apotheosis/enchanting_stats/obsidian_bookshelf.json; mods/amendments-1.20-2.2.6.jar data/apotheosis/enchanting_stats (skull candles, skull pile)
  config/paxi/datapacks/soulrend_apotheosis_rebalance/data/apotheosis/enchanting_stats/*.json (Soulrend's shelf stats), recipes/enchanting/*.json (infusion windows)
  config/paxi/datapacks/soulrend_apotheosis_additions/data/apotheosis/enchanting_stats/*.json (candle holders, sconces, goblet, globe, Enderman head, skull candle, skull pile), recipes/sightshelf*.json
  config/apotheosis/enchantments.cfg (Max Level, Rarity, Treasure, Discoverable per enchantment; no custom power functions), config/apotheosis/ench.cfg, config/apotheosis/apotheosis.cfg
  kubejs/server_scripts/recipes/misc_utility.js (Dormant Deepshelf recipe, Cryptic Eye infusion)
  config/soulrend_core/recipes/removals.toml + game-data/tags.json soulrend:deleted_items (alexscaves:nuclear_bomb)
  game-data/recipes.json (every shelf and infusion recipe that is not registered in code), game-data/loot-index.json (dragon head, wither skeleton skull), game-data/item-stats.json (enchantability)
  vanilla 1.20.1.jar data/minecraft/structures/end_city/ship.nbt (contains a dragon wall head); client SRG jar DamageEnchantment / ProtectionEnchantment$Type / DiggingEnchantment (min cost formulas)
  content/bosses/act-iv/ender-dragon.md and content/progression/act-iv-beyond-reality/slay-the-ender-dragon.md (Dragon Head quest reward)
  calc: shelf layouts, Eterna chains, slot levels and XP are from scratch scripts that replay the Builder (stats sorted by max, running Eterna = min(max, running + sum)); every layout on this page was run through them
  calc: slot level n costs XP(n) + XP(n - 1) + XP(n - 2) - 1 points for slot 3 (XP(n) = 7 + 2(n - 1) up to 15, 37 + 5(n - 16) up to 30, 112 + 9(n - 31) above); Eterna 50 -> level 100 -> 733 + 724 + 715 - 1 = 2,171
  calc: Quanta tables use g = clamp(N(0,1) / 3, -1, 1), re-rolled to U[r - 1, 1] below r - 1, and P = round(L x (1 + q x g)); extra-pick loop: pick while nextInt(50) <= W, W halves each pick, W starts at the shown level x 1.15 (rounded down) when the rolled level is above 45
  calc: minimum power for an enchantment above its vanilla maximum = vanilla min cost(level) + delta x floor((level - vanilla max)^1.6), delta = min cost(vanilla max) - min cost(vanilla max - 1); Protection VIII = 78 + 11 x 9 = 177, Sharpness IX = 89 + 11 x 9 = 188, Efficiency IX = 81 + 10 x 9 = 171
-->
The **enchanting table** in Soulrend is Apotheosis's, and what you build around it matters more than the table. The shelves in the ring decide how high the levels go, how wild the results are and how many enchantments you get. This guide goes from a table with 15 bookshelves to the cap of **Eterna 50** (a level 100 slot) by every shelf path, then covers infusion crafts, tomes and libraries.

The numbers come from Apotheosis 7.4.8's code and Soulrend's data, not from the quest chapter. Where the chapter's order differs from what the math needs, [[#Where this differs from the quest chapter|a section near the end]] says so. The stat tables for every shelf are on [[items/gear-progression/enchanting|Enchanting (Items)]].

## The short version

- **The cap is Eterna 50**, which makes the top slot level 100. Eterna 45 (level 90) is the Endshelf tier, one step below.
- **A table reads 32 blocks** in the ring around it. There is no limit of 15 shelves, and a few top shelves do the work of dozens of bookshelves.
- **Shelves stack in tiers.** Each shelf type has a cap, and a better type adds on top of what the lower tiers gave. Five Draconic Endshelves reach Eterna 50 on their own.
- **Arcana 100 is cheap:** 20 [[item:supplementaries:candle_holder|Candle Holders]] (a candle and an iron ingot each) give 100.
- **The scarce item is the Dragon Head.** Each Draconic Endshelf takes one. Pearlescent Endshelves cut that to a single head.
- **Infusion happens in the third slot only,** and you need an XP level at least as high as that slot's level.

## Before you start

- An enchanting table, [[item:minecraft:lapis_lazuli]] and XP levels. A slot costs 1, 2 or 3 lapis, and you need an XP level at least equal to the slot's level.
- The Apotheosis enchanting module is on in Soulrend (`apotheosis.cfg`). Gems, affixes and the adventure module are covered under [[items/gear-progression|Gear Progression]].
- Put **one** item in the table. Infusion needs the item alone in the slot.

## How the table works

### The five stats

The table adds up the stats of the blocks around it and shows them in its book screen.

| Stat | Starts at | What it does |
| --- | --- | --- |
| **Eterna** | 0 | Sets the slot levels. The top slot is twice the Eterna. Capped at 50. |
| **Quanta** | 15% | How far the result can swing from the slot's level, up or down. |
| **Arcana** | Half the item's enchantability, in % | Shifts the pool toward rare enchantments and adds enchantments. |
| **Rectification** | 0% | Raises the floor of the Quanta swing. |
| **Clues** | 1 | How many of the slot's enchantments the hover text reveals. |

Eterna is clamped to 0–50. Quanta, Arcana and Rectification are clamped to 0–100%, but the raw sum is kept until the end: a table with 115% Quanta from shelves reads 100%, and negative shelves can pull a raw total back down before the clamp.

The table reads the 5×5 ring around it, on its own level and one level up: **32 positions**. The block between a shelf and the table must be empty, so leave the 3×3 around the table open on both levels. The ring takes any block with an Apotheosis stat entry. That includes Soulrend's additions: skulls, Candle Holders and other decor count too. A plain bookshelf gives +1 Eterna, capped at 15, and nothing else.

### Eterna: caps and tiers

Every shelf lists a **Max** next to its Eterna, and the table combines them like this:

1. Shelves whose Max is 0 (Melonshelf, Stoneshelf, Beeshelf) are added first, with no cap. They can push Eterna below 0.
2. The remaining shelves are grouped by their Max and the groups are taken from the lowest Max to the highest.
3. After each group, Eterna is cut down to that group's Max: `Eterna = min(Max, Eterna + group total)`.

For 15 bookshelves and 5 Hellshelves: the bookshelf group gives min(15, 15) = 15, then the Hellshelf group (Max 22.5) gives min(22.5, 15 + 5 × 1.5) = 22.5.

Three things follow from this:

- A shelf type stops helping once Eterna sits at its Max. 32 Hellshelves give 22.5, the same as 15 bookshelves and 5 Hellshelves.
- A higher tier only has to cover the gap above the tier below it. After 15 bookshelves, 4 Blazing Hellshelves reach 30. After 9 Pearlescent Endshelves (45), one Draconic Endshelf reaches 50.
- Negative shelves cost you before any cap applies, so one Beeshelf (−15) needs 1.5 more Draconic Endshelves' worth of Eterna to make up.

### Slot levels and XP

The three slots show levels rolled from the Eterna (an Eterna below 1.5 counts as 1.5):

| Slot | Level |
| --- | --- |
| 1 | 20–40% of the top slot, at least 1 |
| 2 | 60–80% of the top slot |
| 3 | 2 × Eterna, rounded |

Using a slot takes 1, 2 or 3 lapis and an XP level **at least equal to the slot's level**. It then charges the XP points of the slot's top levels: slot 1 the last level, slot 2 the last two, slot 3 the last three, minus 1 point in all. The charge is a fixed number of points, however many levels you have above the requirement.

| Eterna | Top slot level | Slot 3 charge (XP points) | Where it comes from |
| --- | --- | --- | --- |
| 15 | 30 | 305 | 15 bookshelves |
| 22.5 | 45 | 686 | Hellshelf, Seashelf |
| 27 | 54 | 929 | Infused shelves |
| 30 | 60 | 1,091 | Blazing, Glowing, Crystalline, Heart-Forged |
| 35 | 70 | 1,361 | Deepshelf |
| 37.5 | 75 | 1,496 | Echoing, Soul-Touched Deepshelf |
| 40 | 80 | 1,631 | Sculkshelves |
| 45 | 90 | 1,901 | Endshelf, Pearlescent Endshelf |
| 50 | 100 | 2,171 | Draconic Endshelf, Void, Sacrificial, Wavebinder's, Obsidian |

A player needs 30,970 XP points in total to stand at level 100, so the charge is small next to the requirement. **The level requirement is the catch:** the Library of Alexandria infusion at Eterna 50 asks for XP level 100.

### Quanta and Rectification

Quanta scales how much the slot's level can change. The table rolls a bell-shaped number `g` between −1 and +1, centered on 0 and usually within ±0.33. The enchanting power is then `L × (1 + Quanta × g)`, where `L` is the slot's level and Quanta is a fraction (50% is 0.5), rounded and kept between 1 and 200.

Rectification sets a floor. Any roll below `Rectification − 1` is thrown away and replaced by a flat roll between that floor and +1. At 100% Rectification the result can never fall below `L`.

The power range at the top slot of a level 100 table (Eterna 50), by Quanta and Rectification:

| Quanta | Rectification | Lowest | Highest | Average |
| --- | --- | --- | --- | --- |
| 0% | any | 100 | 100 | 100 |
| 15% | 0% | 85 | 115 | 100 |
| 15% | 100% | 100 | 115 | 106 |
| 50% | 0% | 50 | 150 | 100 |
| 50% | 100% | 100 | 150 | 119 |
| 100% | 0% | 1 | 200 | 100 |
| 100% | 50% | 50 | 200 | 106 |
| 100% | 100% | 100 | 200 | 138 |

Quanta never raises the average at 0% Rectification. It widens the spread, so the extreme results (the top levels of an enchantment) become possible at high Quanta, and Rectification then removes the bad half.

### What power buys

Power decides which level of an enchantment can appear: the table offers the highest level whose minimum power is at or below the roll. Soulrend raised many enchantments above their vanilla maximum (`enchantments.cfg`: Protection VIII, Sharpness IX, Efficiency IX and so on), and levels above the vanilla maximum get steeper. The minimum power for such a level is the vanilla formula plus a surcharge that grows with the 1.6th power of the levels above the vanilla maximum.

| Level | Sharpness | Protection | Efficiency |
| --- | --- | --- | --- |
| I | 1 | 1 | 1 |
| II | 12 | 12 | 11 |
| III | 23 | 23 | 21 |
| IV | 34 | 34 | 31 |
| V | 45 | 56 | 41 |
| VI | 67 | 89 | 61 |
| VII | 100 | 122 | 91 |
| VIII | 133 | 177 | 121 |
| IX | 188 | – | 171 |

A table with Eterna 50 and 0% Quanta always rolls 100: Sharpness VII, Protection VI, Efficiency VII. The top levels (Sharpness IX, Protection VIII, Efficiency IX) need a roll of 171–188. At the top slot that is only possible with high Quanta, and the odds at 100% Quanta and 0% Rectification are about 0.4% for Sharpness IX. At 100% Rectification they rise to about 7%. Other enchantments follow the same rule with their own vanilla numbers.

### Arcana

Arcana changes how an enchantment is picked and how many you get.

**Weights.** Each enchantment has a rarity in `enchantments.cfg`. Arcana sets how likely each rarity is, in bands of 10%:

| Arcana | Common | Uncommon | Rare | Very Rare |
| --- | --- | --- | --- | --- |
| 0–9% | 10 | 5 | 2 | 1 |
| 10–19% | 8 | 5 | 3 | 1 |
| 20–29% | 7 | 5 | 4 | 2 |
| 30–39% | 5 | 5 | 4 | 2 |
| 40–49% | 5 | 5 | 4 | 3 |
| 50–59% | 5 | 5 | 5 | 5 |
| 60–69% | 3 | 4 | 5 | 5 |
| 70–79% | 2 | 4 | 5 | 5 |
| 80–89% | 2 | 4 | 5 | 7 |
| 90–98% | 1 | 3 | 5 | 8 |
| 99–100% | 1 | 2 | 5 | 10 |

At full Arcana a Very Rare enchantment is ten times as likely as a Common one. If you want Sharpness, Protection or Efficiency (all Common) from a table, **a lower Arcana is better**. Stoneshelves (−7.5%) and Treasure Shelves (+10%) are the dials.

**Number of enchantments.** The first enchantment is always picked. Arcana of **25% or more** guarantees a second and **75% or more** a third, as long as a compatible enchantment is left. After that the table keeps adding enchantments while a roll from 0 to 49 is at or below a working level, which halves after each pick. At the top slot the working level starts above 100, so the first two extra picks always succeed:

| Slot level | Chance of at least one extra pick | Average extra picks (at average power) |
| --- | --- | --- |
| 30 | 62% | 0.85 |
| 45 | 92% | 1.46 |
| 60 | 100% | 2.00 |
| 80 | 100% | 2.51 |
| 100 | 100% | 2.78 |

Incompatible enchantments are removed after each pick, so the real number depends on the item.

**Starting Arcana.** The item's enchantability, halved. Gold gear is high (golden sword 22, golden chestplate 25, giving 11% and 12.5%), diamond is 10 (5%), and a Book is 1 (0.5%). Books and tomes therefore start at almost 0%.

### Clues, treasure and filters

- **Clues** show that many of the slot's enchantments in the hover text. The first clue is always real. [[item:apotheosis:sightshelf|Hellshelves of Sight]] add 1 and 2 clues; [[item:apotheosis:blazing_hellshelf|Blazing Hellshelves]] and [[item:apotheotic_additions:sacrificial_shelf|Sacrificial Shelves]] remove them.
- **Treasure enchantments** only appear with a [[item:apotheosis:treasure_shelf|Treasure Shelf]] in the ring. In Soulrend that includes Frost Walker, Soulbound and Deeper and Darker's Catalysis.
- **Undiscoverable enchantments** never appear at a table at all (Soul Speed and Swift Sneak, for example). They come from loot and trades.
- A [[item:apotheosis:filtering_shelf|Filtering Shelf]] removes the enchantments of the books you put in it from the pool. It only accepts books with exactly **one** enchantment, holds six, and each book adds 0.5 Eterna (Max 30) and 1% Arcana.

### Infusion

Infusion turns the item in the table into something else. The rules, from the code:

- Only the **third slot** offers it. The slot shows an "Infusion" instead of enchantments when a recipe matches.
- The item must be alone in the slot. The result replaces it, with the recipe's count.
- The table's Eterna, Quanta and Arcana must be **at least** the recipe's values. Some recipes also set a maximum, and the table must stay at or below it. A maximum equal to the minimum means the stat has to hit that value exactly.
- The XP rules are slot 3's: an XP level at least equal to twice the Eterna, and the charge from the table above.

## Shelf stats

These are Soulrend's values, from its Apotheosis datapack and the addons. A shelf's Eterna counts only up to its Max.

| Shelf | Eterna | Max | Quanta | Arcana | Rect. | Clues |
| --- | --- | --- | --- | --- | --- | --- |
| [[item:minecraft:bookshelf]] | +1 | 15 | | | | |
| [[item:apotheosis:stoneshelf]] | −1.5 | – | | −7.5% | | |
| [[item:apotheosis:melonshelf]] | −1 | – | −10% | | | |
| [[item:apotheosis:beeshelf]] | −15 | – | +100% | | | |
| [[item:apotheotic_additions:terra_shelf]] | −5 | – | +100% | +2.5% | | |
| [[item:apotheosis:hellshelf]] | +1.5 | 22.5 | +3% | | | |
| [[item:apotheosis:infused_hellshelf]] | +1.75 | 27 | +1.75% | | | |
| [[item:apotheosis:blazing_hellshelf]] | +4 | 30 | +5% | | | −1 |
| [[item:apotheosis:glowing_hellshelf]] | +2 | 30 | +2% | +4% | | |
| [[item:apotheosis:seashelf]] | +1.5 | 22.5 | | +2% | | |
| [[item:apotheosis:infused_seashelf]] | +1.75 | 27 | | +1.75% | | |
| [[item:apotheosis:crystal_seashelf]] | +2 | 30 | +4% | +2% | | |
| [[item:apotheosis:heart_seashelf]] | +3 | 30 | | +10% | −5% | |
| [[item:apotheosis:dormant_deepshelf]] | +1 | 15 | | | | |
| [[item:apotheosis:deepshelf]] | +2.5 | 35 | +5% | +5% | | |
| [[item:apotheosis:echoing_deepshelf]] | +2.5 | 37.5 | | +15% | | |
| [[item:apotheosis:soul_touched_deepshelf]] | +2.5 | 37.5 | +15% | | | |
| [[item:apotheosis:echoing_sculkshelf]] | +5 | 40 | +5% | +15% | | +1 |
| [[item:apotheosis:soul_touched_sculkshelf]] | +5 | 40 | +15% | +5% | +5% | |
| [[item:apotheosis:endshelf]] | +2.5 | 45 | +5% | +5% | | |
| [[item:apotheosis:pearl_endshelf]] | +5 | 45 | +7.5% | +7.5% | | |
| [[item:apotheosis:draconic_endshelf]] | +10 | 50 | | | | |
| [[item:apotheotic_additions:void_shelf]] | +6 | 50 | +6% | +20% | | +2 |
| [[item:apotheotic_additions:sacrificial_shelf]] | +7.5 | 50 | +7.5% | −10% | | −2 |
| [[item:apotheotic_additions:wavebinders_shelf]] | +5 | 50 | −1% | +15% | −10% | |
| [[item:traveloptics:obsidian_bookshelf]] | +15 | 50 | | | +8.5% | |
| [[item:apotheotic_additions:thornshelf]] | +2 | 17.5 | +1% | | | |
| [[item:apotheotic_additions:infused_thornshelf]] | +2.25 | 30 | +2% | | | |
| [[item:apotheotic_additions:occult_thornshelf]] | +4.5 | 35 | +2.25% | +5% | | +1 |
| [[item:apotheotic_additions:hollowed_barrel_shelf]] | +1.5 | 17.5 | +1.5% | | | |
| [[item:apotheotic_additions:nuclear_barrel_shelf]] | +3 | 35 | +35% | | | −1 |
| [[item:apotheosis:sightshelf]] / [[item:apotheosis:sightshelf_t2\|Masterful]] | | | | | | +1 / +2 |
| [[item:apotheosis:rectifier]] / [[item:apotheosis:rectifier_t2\|T2]] / [[item:apotheosis:rectifier_t3\|T3]] | | | | | +10% / +15% / +25% | |
| [[item:apotheosis:treasure_shelf]] | | | −10% | +10% | | |
| [[item:apotheosis:filtering_shelf]] | +0.5 per book | 30 | | +1% per book | | |

Small blocks that count in the ring, and which are cheap ways to move Quanta, Arcana and Rectification without spending a shelf-tier item:

| Block | Quanta | Arcana | Rect. |
| --- | --- | --- | --- |
| [[item:supplementaries:candle_holder\|Candle Holder]] (any color) | | +5% | |
| [[item:supplementaries:sconce]], [[item:supplementaries:goblet]] | | +1% | |
| [[item:supplementaries:sconce_soul]] | | +1.25% | |
| Skeleton, zombie or creeper head | +5% | | |
| [[item:minecraft:wither_skeleton_skull]] | +10% | | |
| Amendments skull pile | +10% | | |
| Amendments skull candle | +5% | | |
| Amendments soul skull candle | +5% | +6% | |
| [[item:supplementaries:enderman_head]] | +7% | | |
| [[item:minecraft:amethyst_cluster]] | | | +1.5% |

A Candle Holder is a candle on an iron ingot. It gives 5% Arcana whether or not it is lit, and 20 of them reach Arcana 100:

{{recipes supplementaries:candle_holder limit=1}}

## From nothing to Eterna 50

Eight stages, each with the shelf it adds and a layout the table's math has been checked against. Every layout fits the 32 positions. Shelves are listed in the order of their Eterna Max, so you can follow the stages in order or skip to the path you want.

### Stage 1: the plain table (Eterna 15)

Craft a [[item:minecraft:enchanting_table]] and surround it with 15 bookshelves.

{{recipes minecraft:enchanting_table limit=1}}

**15 bookshelves:** Eterna 15, Quanta 15%, Arcana 0%. The top slot is level 30 and costs 305 XP points. This is the best a plain bookshelf can do. Its Max is 15.

### Stage 2: Hellshelf and Seashelf (Eterna 22.5)

Both are crafted from a bookshelf, and both have a Max of 22.5. The Hellshelf adds Quanta; the Seashelf adds Arcana.

```recipe
{ "station": "crafting_table", "grid": ["NNN", "RBP", "NNN"], "key": { "N": "minecraft:nether_bricks", "R": "minecraft:blaze_rod", "B": "#forge:bookshelves", "P": "minecraft:potion" }, "output": "apotheosis:hellshelf", "info": "The potion is a Potion of Regeneration." }
```

```recipe
{ "station": "crafting_table", "grid": ["PPP", "WBF", "PPP"], "key": { "P": "minecraft:prismarine_bricks", "W": "minecraft:potion", "B": "#forge:bookshelves", "F": "minecraft:pufferfish" }, "output": "apotheosis:seashelf", "info": "The potion is a Water Bottle." }
```

**15 bookshelves + 5 Hellshelves** (20 positions): Eterna 22.5, Quanta 30%, level 45 top slot. The same with Seashelves gives Quanta 15% and Arcana 10%.

### Stage 3: infused shelves and the Eterna 30 tier

The **Infused Hellshelf** and **Infused Seashelf** are made by infusion, which needs the Stage 2 table: **15 bookshelves + 5 Hellshelves** satisfies the Infused Hellshelf (Eterna 22.5, Quanta 30%), and **15 bookshelves + 5 Seashelves** satisfies the Infused Seashelf (Eterna 22.5, Quanta 15%, Arcana 10%, exactly the recipe's values).

{{recipes apotheosis:infused_hellshelf}}

{{recipes apotheosis:infused_seashelf}}

The infused shelves are small upgrades on their own (Max 27), but they are the **base of everything else**: the Library takes four infused shelves, and the 30-Max shelves are built from them.

```recipe
{ "station": "crafting_table", "grid": [" F ", "FHF", "PPP"], "key": { "F": "minecraft:fire_charge", "H": "apotheosis:infused_hellshelf", "P": "minecraft:blaze_powder" }, "output": "apotheosis:blazing_hellshelf" }
```

```recipe
{ "station": "crafting_table", "grid": [" G ", " H ", "G G"], "key": { "G": "minecraft:glowstone", "H": "apotheosis:infused_hellshelf" }, "output": "apotheosis:glowing_hellshelf" }
```

```recipe
{ "station": "crafting_table", "grid": [" C ", " S ", "C C"], "key": { "C": "minecraft:prismarine_crystals", "S": "apotheosis:infused_seashelf" }, "output": "apotheosis:crystal_seashelf" }
```

```recipe
{ "station": "crafting_table", "grid": [" H ", "PSP", "PPP"], "key": { "H": "minecraft:heart_of_the_sea", "P": "minecraft:prismarine_shard", "S": "apotheosis:infused_seashelf" }, "output": "apotheosis:heart_seashelf" }
```

All four have a Max of 30, so a bookshelf base needs few of them:

| Layout | Positions | Eterna | Quanta | Arcana | Top slot |
| --- | --- | --- | --- | --- | --- |
| 15 bookshelves + 7 Infused Hellshelves | 22 | 27 | 27% | 0% | 54 |
| 15 bookshelves + 4 Blazing Hellshelves | 19 | 30 | 35% | 0% | 60 |
| 15 bookshelves + 8 Crystalline Seashelves | 23 | 30 | 47% | 16% | 60 |
| 15 bookshelves + 5 Heart-Forged Seashelves | 20 | 30 | 15% | 50% | 60 |

The Blazing Hellshelf is the fastest way to 30 (4 shelves), but it removes your Clues. The Heart-Forged Seashelf is the Arcana option, and its −5% Rectification is a cost you pay back with [[#Specialist shelves|a Rectifier]].

### Stage 4: the Deep path (Eterna 35 to 40)

The Dormant Deepshelf is the one shelf Soulrend recipes by itself. It is cheap: books and deepslate.

{{recipes apotheosis:dormant_deepshelf}}

Infusing it into a [[item:apotheosis:deepshelf|Deepshelf]] (Max 35) asks for Eterna 30, Quanta 40% and Arcana 40%. That is Stage 3's Eterna 30 plus Quanta and Arcana on top. **15 bookshelves + 8 Crystalline Seashelves + 5 Candle Holders** (28 positions) reads Eterna 30, Quanta 47%, Arcana 41%.

{{recipes apotheosis:deepshelf}}

The Deepshelf has two upgrades with a Max of 37.5. Echoing raises Arcana, Soul-Touched raises Quanta:

{{recipes apotheosis:echoing_deepshelf}}

{{recipes apotheosis:soul_touched_deepshelf}}

Their Sculkshelf versions have a Max of 40 and need a [[item:apotheosis:warden_tendril]]. A [[bosses/act-ii/warden|Warden]] always drops one, and has a 10% chance of a second, plus 10% per level of Looting.

{{recipes apotheosis:echoing_sculkshelf}}

{{recipes apotheosis:soul_touched_sculkshelf}}

The Sculkshelves also give Rectification (+5% on the Soul-Touched one) and Clues (+1 on the Echoing one).

| Layout | Positions | Eterna | Quanta | Arcana | Top slot |
| --- | --- | --- | --- | --- | --- |
| 15 bookshelves + 8 Deepshelves | 23 | 35 | 55% | 40% | 70 |
| 15 bookshelves + 5 Seashelves + 6 Echoing Deepshelves | 26 | 37.5 | 15% | 100% | 75 |
| the same + 1 Echoing Sculkshelf | 27 | 40 | 20% | 100% | 80 |

**This is the bottleneck of the pre-End game.** Eterna 40 needs at least one shelf with a Max of 40 or more, and the only ones you can build before the End are the Sculkshelves, which means a Warden kill. One is enough.

### Stage 5: the End path (Eterna 45 to 50)

Eterna above 40 starts with [[item:apotheosis:infused_breath|Infused Dragon's Breath]]: infuse a Dragon's Breath bottle at Eterna 40 or more, Quanta 15–25% and Arcana 60% or more. It makes **three** per infusion. The 15–25% window is the tricky part: shelves that add Quanta push you past it, which is why the layout above uses Echoing Deepshelves (no Quanta).

{{recipes apotheosis:infused_breath}}

Each [[item:apotheosis:endshelf|Endshelf]] takes one breath:

{{recipes apotheosis:endshelf}}

An Endshelf is Max 45, +2.5 Eterna, and upgrades two ways:

```recipe
{ "station": "crafting_table", "grid": ["R R", "ESE", "R R"], "key": { "R": "minecraft:end_rod", "E": "#forge:ender_pearls", "S": "apotheosis:endshelf" }, "output": "apotheosis:pearl_endshelf" }
```

```recipe
{ "station": "crafting_table", "grid": [" D ", "ESE", "EEE"], "key": { "D": "minecraft:dragon_head", "E": "#forge:ender_pearls", "S": "apotheosis:endshelf" }, "output": "apotheosis:draconic_endshelf" }
```

- The **Pearlescent Endshelf** has Max 45 but +5 Eterna, +7.5% Quanta and +7.5% Arcana. 9 of them reach Eterna 45 (level 90) in 9 positions.
- The **Draconic Endshelf** has Max 50 and +10 Eterna, and no other stats. **5 of them reach Eterna 50 on their own.**

**Dragon Heads are the limit.** A Draconic Endshelf takes one. The [[bosses/act-iv/ender-dragon|Ender Dragon]] quest reward is one, End City ships carry a dragon head, and the mega ship treasure chests of the End ship structures can hold one. Pearlescent Endshelves raise the Eterna the Draconic tier has to cover: with 8–9 pearls under it, **one head is enough**.

| Layout | Positions | Heads | Eterna | Quanta | Arcana |
| --- | --- | --- | --- | --- | --- |
| 9 Pearlescent Endshelves | 9 | 0 | 45 | 82.5% | 67.5% |
| 9 Pearlescent + 1 Draconic Endshelf | 10 | 1 | 50 | 82.5% | 67.5% |
| 5 Draconic Endshelves | 5 | 5 | 50 | 15% | 0% |

### Stage 6: the mythic path and Obsidian Bookshelves (Eterna 50 without heads)

Apotheotic Additions adds three shelves with a Max of 50 that don't use Dragon Heads. Each takes a base shelf, 4 gold blocks, 2 [[item:apotheosis:mythic_material|Godforged Pearls]] and 2 [[item:apotheosis:ancient_material|Manifestations of Infinity]] (see [[items/gear-progression/rarity-materials|Rarity Materials]]).

{{recipes apotheotic_additions:void_shelf}}

{{recipes apotheotic_additions:wavebinders_shelf}}

{{recipes apotheotic_additions:sacrificial_shelf}}

{{recipes apotheotic_additions:terra_shelf}}

| Shelf | Base | Reaches 50 with | Strength |
| --- | --- | --- | --- |
| Void Shelf | Echoing Sculkshelf | 9 | Arcana +20%, Clues +2. **9 shelves read Eterna 50, Quanta 69%, Arcana 100%, Clues 19** |
| Sacrificial Shelf | Blazing Hellshelf | 7 | Eterna +7.5, but −10% Arcana, −2 Clues |
| Wavebinder's Shelf | Heart-Forged Seashelf | 10 | Arcana +15%, Rectification −10% |
| Terra Shelf | Beeshelf | – | Max 0: Quanta +100% with only −5 Eterna (a cheaper Beeshelf) |

The Wavebinder's Shelf is the one path that reaches 50 with **no Sculkshelf** and no End: its base is a Heart-Forged Seashelf. **10 Wavebinder's Shelves** alone read Eterna 50, Quanta 5%, Arcana 100% (its raw Arcana is 150).

The [[item:traveloptics:obsidian_bookshelf|Obsidian Bookshelf]] (Max 50, +15 Eterna, +8.5% Rectification) is the strongest single block in the pack: **4 of them reach Eterna 50**. It isn't craftable. The loot table of the [[progression/act-iv-beyond-reality/void-cathedral|Void Cathedral]]'s hidden treasure chest holds two or three.

### Stage 7: Modifiers, boosters and specialist shelves

**Modifier shelves** lower stats on purpose. A negative stat is how you hit an infusion recipe's maximum or build a stable table.

{{recipes apotheosis:stoneshelf}}

```recipe
{ "station": "crafting_table", "grid": ["MMM", "GSG", "MMM"], "key": { "M": "minecraft:melon", "G": "minecraft:glistering_melon_slice", "S": "#forge:bookshelves" }, "output": "apotheosis:melonshelf" }
```

```recipe
{ "station": "crafting_table", "grid": ["CBC", "HSH", "CBC"], "key": { "C": "minecraft:honeycomb", "B": "minecraft:beehive", "H": "minecraft:honey_block", "S": "#forge:bookshelves" }, "output": "apotheosis:beeshelf" }
```

- The **Melonshelf** gives −10% Quanta for −1 Eterna.
- The **Stoneshelf** gives −7.5% Arcana for −1.5 Eterna.
- The **Beeshelf** gives +100% Quanta for −15 Eterna. One reaches Quanta 100% by itself, and the Eterna it costs is 1.5 Draconic Endshelves.
- A [[item:apotheosis:treasure_shelf|Treasure Shelf]] gives −10% Quanta, +10% Arcana and allows treasure enchantments.

{{recipes apotheosis:treasure_shelf}}

**Specialist shelves:**

{{recipes apotheosis:sightshelf}}

{{recipes apotheosis:rectifier}}

The Rectifiers upgrade in order (T2 uses gilded blackstone, T3 purpur blocks around the previous one), for +10%, +15% and +25% Rectification. **Four T3 Rectifiers reach 100%.**

{{recipes apotheosis:rectifier_t3}}

{{recipes apotheosis:filtering_shelf}}

### Stage 8: the Alex's Caves path (thorn and barrel shelves)

A side path with its own materials from Alex's Caves. It is slower than the main tiers, but works before the Nether.

{{recipes apotheotic_additions:thornshelf}}

{{recipes apotheotic_additions:infused_thornshelf}}

{{recipes apotheotic_additions:occult_thornshelf}}

- The **Thornshelf** has Max 17.5, so two on a bookshelf base reach it. The **Infused Thornshelf** (Max 30) asks for Eterna 17.5 and Quanta 10%. Both are well below the other families' Eterna for the effort, but the Infused Thornshelf's Max matches the Blazing Hellshelf's.
- The **Occult Thornshelf** (Max 35, +4.5 Eterna, +5% Arcana, +1 Clue) is the best shelf of this path: 5 on a bookshelf base reach 35. Its recipe uses a Beholder, Shadow Silk and Tectonic Shards.
- The **Hollowed Barrel Shelf** (Max 17.5, iron or scrap metal around a barrel) leads to the **Nuclear Barrel Shelf** (Max 35, +35% Quanta). That upgrade needs a Nuclear Bomb, which Soulrend deletes, so the Nuclear Barrel Shelf **can't be crafted**.
- The **Aether skyshelves** need the Aether, which Soulrend doesn't include.

## Reference builds

These fit 32 positions and were run through the table's math.

| Build | Layout | Positions | Eterna | Quanta | Arcana | Rect. |
| --- | --- | --- | --- | --- | --- | --- |
| Everyday | 5 Draconic + 20 Candle Holders | 25 | 50 | 15% | 100% | 0% |
| Stable (no swing) | 5 Draconic + 2 Treasure + 16 Candle Holders | 23 | 50 | 0% | 100% | 0% |
| One head | 8 Pearlescent + 1 Draconic + 3 Treasure + 2 Candle Holders | 14 | 50 | 45% | 100% | 0% |
| No End | 10 Wavebinder's | 10 | 50 | 5% | 100% | 0% |
| Void | 9 Void | 9 | 50 | 69% | 100% | 0% |
| Obsidian | 4 Obsidian + 20 Candle Holders | 24 | 50 | 15% | 100% | 34% |
| Everything maxed | 7 Draconic + 1 Beeshelf + 4 Rectifier T3 + 20 Candle Holders | 32 | 50 | 100% | 100% | 100% |
| Everything maxed, 3 heads | 9 Pearlescent + 3 Draconic + 1 Beeshelf + 7 Candle Holders + 4 Rectifier T3 | 24 | 50 | 100% | 100% | 100% |

The **Stable** build reads 0% Quanta, so every roll at the top slot is exactly 100. **Everything maxed** has a power range of 100–200 (average 138).

Which build for which job:

- **Infusion crafts:** pick the layout for the recipe in the next section. The window matters more than the maximum.
- **Reliable gear enchants:** Stable or Everyday. You always get level 100 power.
- **Chasing top levels:** Everything maxed, with Quanta 100% and Rectification 100%.
- **Specific enchantments:** lower Arcana (Stoneshelves), use a Filtering Shelf and use tomes.

## Infusion crafts

Twenty recipes use infusion. The table lists the requirement window and **one layout that fits it**, each checked with the table's math. Layouts are cheap examples, not the only answers. Many other mixes fit the same window.

All of them run in the third slot. XP needed = twice the table's Eterna.

| Infuse | Into | Eterna | Quanta | Arcana | Layout (reads) |
| --- | --- | --- | --- | --- | --- |
| [[item:minecraft:carrot]] | Golden Carrot | 10 exactly | 10–30% | any | 10 bookshelves (E 10, Q 15%) |
| [[item:apotheosis:hellshelf]] | [[item:apotheosis:infused_hellshelf]] | 22.5+ | 30%+ | any | 15 bookshelves + 5 Hellshelves (22.5 / 30% / 0%) |
| [[item:apotheosis:seashelf]] | [[item:apotheosis:infused_seashelf]] | 22.5+ | 15%+ | 10%+ | 15 bookshelves + 5 Seashelves (22.5 / 15% / 10%) |
| [[item:apotheotic_additions:thornshelf]] | [[item:apotheotic_additions:infused_thornshelf]] | 17.5+ | 10%+ | any | 15 bookshelves + 2 Thornshelves (17.5 / 17% / 0%) |
| [[item:apotheotic_additions:apotheotic_coin]] | [[item:apotheotic_additions:infused_coin]] | 20+ | 10%+ | any | 15 bookshelves + 4 Hellshelves (21 / 27% / 0%) |
| [[item:minecraft:ender_eye]] | [[item:endrem:cryptic_eye]] | 20–25 | 10% exactly | 25–30% | 15 bookshelves, 4 Seashelves, 1 Melonshelf, 1 skeleton head, 4 Candle Holders (20 / 10% / 28%) |
| [[item:apotheosis:inert_trident]] | [[item:minecraft:trident]] | 20–30 | 20–50% | 35%+ | 15 bookshelves, 5 Hellshelves, 7 Candle Holders (22.5 / 30% / 35%) |
| [[item:minecraft:honey_bottle]] | [[item:minecraft:experience_bottle]] | 10+ | 25%+ | 25%+ | 15 bookshelves, 4 Hellshelves, 5 Candle Holders (21 / 27% / 25%) |
| [[item:minecraft:honey_bottle]] | 8 Experience Bottles | 30+ | 25%+ | 25%+ | 15 bookshelves, 4 Blazing Hellshelves, 5 Candle Holders (30 / 35% / 25%) |
| [[item:minecraft:honey_bottle]] | 32 Experience Bottles | 50+ | 25%+ | 25%+ | 5 Draconic, 1 Wither Skeleton Skull, 5 Candle Holders (50 / 25% / 25%) |
| [[item:apotheosis:dormant_deepshelf]] | [[item:apotheosis:deepshelf]] | 30+ | 40%+ | 40%+ | 15 bookshelves, 8 Crystalline Seashelves, 5 Candle Holders (30 / 47% / 41%) |
| [[item:apotheosis:scrap_tome]] | 4 [[item:apotheosis:improved_scrap_tome]] | 22.5+ | 25–50% | 35%+ | 15 bookshelves, 5 Hellshelves, 7 Candle Holders (22.5 / 30% / 35%) |
| [[item:apotheosis:improved_scrap_tome]] | 4 [[item:apotheosis:extraction_tome]] | 30+ | 25–75% | 45%+ | 15 bookshelves, 4 Blazing Hellshelves, 9 Candle Holders (30 / 35% / 45%) |
| [[item:apotheosis:sigil_of_socketing]] | [[item:fallen_gems_affixes:sigil_of_ascension]] | 22.5+ | 25–50% | 35%+ | same as the Scrap Tome layout |
| [[item:apotheosis:sigil_of_withdrawal]] | [[item:fallen_gems_affixes:sigil_of_severance]] | 22.5+ | 25–50% | 35%+ | same as the Scrap Tome layout |
| [[item:fallen_gems_affixes:sigil_of_severance]] | [[item:fallen_gems_affixes:sigil_of_erasure]] | 30+ | 40–50% | 50%+ | 15 bookshelves, 8 Crystalline Seashelves, 7 Candle Holders (30 / 47% / 51%) |
| [[item:minecraft:dragon_breath]] | 3 [[item:apotheosis:infused_breath]] | 40+ | 15–25% | 60%+ | 15 bookshelves, 5 Seashelves, 6 Echoing Deepshelves, 1 Echoing Sculkshelf (40 / 20% / 100%) |
| [[item:apotheotic_additions:infused_coin]] | [[item:apotheotic_additions:ascended_coin]] | 50+ | 35%+ | 50%+ | 5 Draconic, 2 Wither Skeleton Skulls, 10 Candle Holders (50 / 35% / 50%) |
| [[item:apotheosis:library]] | [[item:apotheosis:ender_library]] | 50 exactly | 45–50% | 100% | 8 Pearlescent, 1 Draconic, 3 Treasure Shelves, 2 Candle Holders (50 / 45% / 100%) |
| [[item:fallen_gems_affixes:gem_case]] | [[item:fallen_gems_affixes:ender_gem_case]] | 50 exactly | 100% | 45–50% | 1 Beeshelf, 6 Pearlescent, 4 Draconic (50 / 100% / 45%) |

How to read the combinations:

- **Start from the Eterna.** The cheapest Eterna for each window is bookshelves plus the lowest shelf tier whose Max clears it: a Max-22.5 shelf for 22.5, a Max-30 shelf for 30, and so on.
- **Fix Arcana with Candle Holders.** Five per 25%. They add nothing else, so they won't disturb a Quanta window.
- **Fix Quanta with heads and shelves.** Skeleton, zombie and creeper heads add 5% each, Wither Skeleton Skulls add 10%, and Melonshelves subtract 10%. Hellshelves and Crystalline Seashelves add some as a side effect.
- **Windows with a maximum are the hard ones.** The Cryptic Eye wants Quanta of exactly 10%, which is 5 below the table's base of 15. A Melonshelf (−10%) and a head (+5%) fix that. The Infused Breath wants at most 25%, so Quanta-heavy shelves like Deepshelves are out and Echoing Deepshelves are in.
- **The 100% windows are exact because of the clamp.** The Ender Gem Case wants Quanta 100%. A Beeshelf's +100% on top of the base clamps to 100% on its own. The Library of Alexandria wants Arcana 100%, which the clamp also accepts when the raw total is over 100.
- **Mind the item.** Books and Tomes add 0.5% Arcana, items with high enchantability (gold gear) more. The layouts above leave at least that much room.

> [!IMPORTANT]
> The Library of Alexandria needs Eterna **exactly 50**, so a layout with Eterna 45 won't do, and the slot's level is 100: you need XP level 100 in the character, and the infusion charges 2,171 XP points.

## Tomes

A **tome** is a book that carries a gear slot or a job. There are two kinds.

### Slot tomes

Put a slot tome in the table instead of an item. It becomes an enchanted book, but only with enchantments that fit the tome's slot, so none of the roll is spent on armor when you want a sword. A book starts at 0.5% Arcana, so the book's Arcana comes from the shelves.

| Tome | Accepts |
| --- | --- |
| [[item:apotheosis:helmet_tome]], [[item:apotheosis:chestplate_tome]], [[item:apotheosis:leggings_tome]], [[item:apotheosis:boots_tome]] | Enchantments for that armor slot |
| [[item:apotheosis:weapon_tome]] | Weapon enchantments |
| [[item:apotheosis:bow_tome]] | Bow enchantments |
| [[item:apotheosis:pickaxe_tome]] | Pickaxe enchantments |
| [[item:apotheosis:fishing_tome]] | Fishing pole enchantments |
| [[item:apotheosis:other_tome]] | Miscellaneous enchantments |

One craft makes several:

```recipe
{ "station": "crafting_table", "grid": ["BBB", "BRB"], "key": { "B": "minecraft:book", "R": "minecraft:blaze_rod" }, "output": "apotheosis:helmet_tome", "count": 5 }
```

```recipe
{ "station": "crafting_table", "grid": ["BRB", "BBB", "BBB"], "key": { "B": "minecraft:book", "R": "minecraft:blaze_rod" }, "output": "apotheosis:chestplate_tome", "count": 8 }
```

```recipe
{ "station": "crafting_table", "grid": ["B B", "BRB", "BBB"], "key": { "B": "minecraft:book", "R": "minecraft:blaze_rod" }, "output": "apotheosis:leggings_tome", "count": 7 }
```

```recipe
{ "station": "crafting_table", "grid": ["B B", "BRB"], "key": { "B": "minecraft:book", "R": "minecraft:blaze_rod" }, "output": "apotheosis:boots_tome", "count": 4 }
```

```recipe
{ "station": "crafting_table", "grid": ["B", "B", "P"], "key": { "B": "minecraft:book", "P": "minecraft:blaze_powder" }, "output": "apotheosis:weapon_tome", "count": 2 }
```

```recipe
{ "station": "crafting_table", "grid": ["BBB", " R ", " S "], "key": { "B": "minecraft:book", "R": "minecraft:blaze_rod", "S": "minecraft:stick" }, "output": "apotheosis:pickaxe_tome", "count": 3 }
```

```recipe
{ "station": "crafting_table", "grid": ["  R", " SB", "S B"], "key": { "B": "minecraft:book", "R": "minecraft:blaze_rod", "S": "minecraft:stick" }, "output": "apotheosis:fishing_tome", "count": 2 }
```

```recipe
{ "station": "crafting_table", "grid": [" SB", "R B", " SB"], "key": { "B": "minecraft:book", "R": "minecraft:blaze_rod", "S": "minecraft:stick" }, "output": "apotheosis:bow_tome", "count": 3 }
```

```recipe
{ "station": "crafting_table", "ingredients": ["minecraft:book", "minecraft:book", "minecraft:book", "minecraft:book", "minecraft:book", "minecraft:book", "minecraft:blaze_rod"], "output": "apotheosis:other_tome", "count": 6 }
```

### Scrapping tomes

These work in an **anvil**, with the enchanted item in the left slot and the tome in the right. Each makes an enchanted book from the item's enchantments:

| Tome | Book gets | Item | Cost |
| --- | --- | --- | --- |
| [[item:apotheosis:scrap_tome]] | Half of the enchantments (rounded up) | Destroyed | 6 levels per enchantment on the book |
| [[item:apotheosis:improved_scrap_tome]] | All | Destroyed | 10 levels per enchantment |
| [[item:apotheosis:extraction_tome]] | All | Kept, with no enchantments | 16 levels per enchantment |

The tome is used up each time. Which half the Tome of Scrapping keeps is random, but it is fixed by the item's enchantments and your enchantment seed, so repeating the anvil gives the same result until you enchant something.

```recipe
{ "station": "crafting_table", "grid": ["BBB", "BAB", "BBB"], "key": { "B": "minecraft:book", "A": "minecraft:anvil" }, "output": "apotheosis:scrap_tome", "count": 8 }
```

Infusion makes the chain: one Tome of Scrapping becomes **4** Tomes of Superior Scrapping, and each of those becomes **4** Tomes of Extraction. A single craft (8 Tomes of Scrapping) can therefore become up to 128 Extraction Tomes, but each step spends a third-slot infusion.

{{recipes apotheosis:improved_scrap_tome}}

{{recipes apotheosis:extraction_tome}}

The extraction tomes are how you move an enchantment off a good item: put the book into a library, or onto another item.

## Libraries

An **Enchantment Library** stores enchantments from enchanted books. The recipe takes four ender chests, an enchanting table and four infused shelves of any kind (Infused Hellshelf, Infused Seashelf, Deepshelf or Infused Thornshelf), so you can build one after Stage 3.

{{recipes apotheosis:library}}

The **Library of Alexandria** is the same block, infused (see the table above). It keeps what the Library held.

{{recipes apotheosis:ender_library}}

How a library stores things:

- **Deposit** an enchanted book by right-clicking it in, or from a hopper or pipe. A library accepts only enchanted books.
- **Points.** A library stores each enchantment as points. A level costs `2^(level − 1)` points: I = 1, II = 2, III = 4, V = 16, X = 512, XVI = 32,768. Depositing a book adds the points of its level.
- **Capacity.** A Library holds at most 32,768 points per enchantment (2^15) and extracts up to level XVI. The Library of Alexandria holds up to 2^30 points per enchantment and extracts up to level XXXI.
- **Extracting.** Left-click an enchantment to take one level, or shift-click to take the highest level you can afford. Going from one level to the next costs the difference in points, so reaching V from nothing costs 16 points in total.
- **The highest level you ever deposited is the limit.** The library remembers the best single level stored for each enchantment, capped at its own maximum, and won't extract above it. 16 Sharpness I books add up to 16 points, but if you never deposited a Sharpness V or better you can't take a Sharpness V out. Depositing a Sharpness IX book raises the limit to IX.
- A book above the library's level (a level XX book in a Library) fills the points to the capacity, but the extractable level stays at XVI.
- The library's screen has a name filter and an item filter.

The [[item:apotheosis:filtering_shelf]] is a different block: it reads books to blacklist their enchantments at the table, and stores nothing.

## Where this differs from the quest chapter

The Enchanting Module chapter ([[progression/side-chapters/enchanting|Enchanting (Chapter)]]) walks the families in one order. The numbers allow a different order:

- **Infused Dragon's Breath needs a Sculkshelf, not both Sculkshelves and the Treasure Shelf.** The recipe wants Eterna 40+, Quanta 15–25% and Arcana 60%+. One Echoing Sculkshelf on a base of Echoing Deepshelves does it (Stage 4). The quest's prerequisites are not infusion requirements.
- **The Library needs only infused shelves, four ender chests and a table.** It is available long before the Endshelf. Only the Library of Alexandria needs Eterna 50.
- **The Draconic Endshelf is not the only way to 50.** The Void, Sacrificial and Wavebinder's Shelves and the Obsidian Bookshelf also have a Max of 50, and Pearlescent Endshelves cut the head count to one.
- **The Dormant Deepshelf has no gate.** Its recipe is books and deepslate. The gate is the Deepshelf infusion (Eterna 30, Quanta 40%, Arcana 40%).
- **The Library of Alexandria window is exact:** Eterna 50, Quanta 45–50%, Arcana 100%.

## Next

- [[items/gear-progression/enchanting|Enchanting (Items)]] has the stats of every shelf and tome.
- [[progression/side-chapters/enchanting|Enchanting (Chapter)]] lists the quests and their rewards.
- [[items/gear-progression|Gear Progression]] covers what to enchant: affix gear, gems, sockets and reforging.
