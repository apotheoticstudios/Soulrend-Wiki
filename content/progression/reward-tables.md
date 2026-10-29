---
{
  "title": "Quest Reward Tables",
  "navTitle": "Reward Tables",
  "category": "Progression",
  "order": 9,
  "summary": "The 24 loot tables that quest rewards roll on, such as Chipped Gems and Rare Loot, with every entry and its chance.",
  "aliases": ["Reward Tables", "Loot Tables (Quests)"],
  "icon": "minecraft:chest"
}
---
<!-- sources:
  config/ftbquests/quests/reward_tables/*.snbt (entries, counts, weights; every table has loot_size 1)
  config/ftbquests/quests/chapters/*.snbt (reward types random / choice / loot / all_table)
  calc: chance = entry weight / total weight of the table (an entry with no weight counts as 1)
-->
Many quest rewards don't give a fixed item. They roll on a **reward table**, a list of possible items kept in `config/ftbquests/quests/reward_tables/`. A quest page that says "a roll on Chipped Gems" means one item from the Chipped Gems table below.

## How table rewards work

Quests use a table in one of four ways:

| Reward type | What it gives |
| --- | --- |
| Random | One entry, picked at random by weight. Most table rewards are this kind. |
| Choice | The quest book lists the table and the player picks one entry. |
| Loot | Every table has a loot size of 1, so this gives one random entry, the same as Random. |
| All | Every entry in the table. Only the Wrought Chamber quest uses it (the ORE table). |

A quest with two table rewards rolls twice, so the two items can be the same.

## Gem tables

The gem tables give one Apotheosis gem. Each table has a fixed rarity, and every gem in it has the same chance.

| Table | Gem rarity | Gems in the pool | Notes |
| --- | --- | --- | --- |
| Cracked Gems | Common | 33 | Iron's Spellbooks school gems, Apotheosis core gems and some Apotheotic Additions gems. |
| Chipped Gems | Uncommon | 35 | The same families as Cracked Gems, one rarity higher. The most common quest reward. |
| Flawed Gems | Rare | 50 | Adds the Fallen Gems Affixes elemental gems (Arcane Catalyst, Emberheart Shard, Frostvein Crystal and others). |
| Perfect Gems | Ancient | 74 | Adds the Fallen Gems Affixes boss gems (Blood Tyrant, Void Guardian, Infernal Overlord and others) and the spell-school gems. |
| Cracked Magic Gems | Common | 15 | Only spell gems: the twelve school gems plus cast time, cooldown and spell resistance. |
| Chipped Magic Gems | Uncommon | 15 | The same 15 spell gems, one rarity higher. |

See [[features/gear-and-crafting/gems-and-sigils|Gems and Sigils]] for what gems do and how to socket them.

## Item tables

### Common Loot

| Item | Count | Chance |
| --- | --- | --- |
| [[item:minecraft:oak_wood]] | 16 | 7.4% |
| [[item:minecraft:cobblestone]] | 32 | 7.4% |
| [[item:minecraft:iron_ingot]] | 6 | 9.3% |
| [[item:magistuarmory:steel_ingot]] | 3 | 9.3% |
| [[item:minecraft:gold_ingot]] | 4 | 9.3% |
| [[item:minecraft:diamond]] | 1 | 9.3% |
| [[item:dungeons_and_combat:estus_flask]] | 1 | 9.3% |
| [[item:minecraft:lapis_lazuli]] | 4 | 9.3% |
| [[item:minecraft:bone]] | 8 | 4.6% |
| [[item:irons_spellbooks:arcane_essence]] | 4 | 9.3% |
| [[item:minecraft:gunpowder]] | 4 | 9.3% |
| [[item:minecraft:arrow]] | 12 | 6.5% |

### Rare Loot

| Item | Count | Chance |
| --- | --- | --- |
| [[item:minecraft:emerald]] | 4 | 5.8% |
| [[item:minecraft:gold_ingot]] | 8 | 5.8% |
| [[item:minecraft:golden_apple]] | 1 | 11.6% |
| [[item:dungeons_and_combat:estus_flask]] | 2 | 11.6% |
| [[item:minecraft:amethyst_shard]] | 4 | 11.6% |
| [[item:minecraft:lapis_lazuli]] | 8 | 11.6% |
| [[item:irons_spellbooks:arcane_essence]] | 12 | 11.6% |
| [[item:irons_spellbooks:mithril_scrap]] | 1 | 5.8% |
| [[item:minecraft:diamond]] | 2 | 5.8% |
| [[item:minecraft:ender_pearl]] | 1 | 7.0% |
| [[item:delightful:deluxe_cheeseburger]] | 3 | 5.8% |
| [[item:dungeons_and_combat:crimson_flask]] | 1 | 5.8% |

### Structure Loot

Given by most "Find Structure" quests.

| Item | Count | Chance |
| --- | --- | --- |
| [[item:minecraft:bread]] | 4 | 12.2% |
| [[item:minecraft:leather]] | 2 | 12.2% |
| [[item:minecraft:bone_meal]] | 4 | 12.2% |
| [[item:minecraft:wheat_seeds]] | 4 | 12.2% |
| [[item:minecraft:string]] | 4 | 12.2% |
| [[item:minecraft:dirt]] | 1 | 12.2% |
| [[item:minecraft:white_wool]] | 1 | 12.2% |
| [[item:minecraft:golden_carrot]] | 1 | 2.4% |
| [[item:minecraft:wheat]] | 2 | 12.2% |

### Steel Weapons

A choice table: the player picks one of 26 steel weapons, each with one gem socket. It is the reward of "Don't Have Weapon Yet?" in [[progression/act-ii-first-steps/dungeon-crawl|Act II]].

{{items dungeons_and_combat:steel_dagger dungeons_and_combat:steel_sword dungeons_and_combat:steel_greataxe dungeons_and_combat:morning_star_mace dungeons_and_combat:steel_tomahawk_axe dungeons_and_combat:steel_axe dungeons_and_combat:steel_shield magistuarmory:steel_shortsword magistuarmory:steel_katzbalger magistuarmory:steel_pike magistuarmory:steel_chivalrylance magistuarmory:steel_claymore magistuarmory:steel_zweihander magistuarmory:steel_lochaberaxe magistuarmory:steel_concavehalberd magistuarmory:steel_heavymace magistuarmory:steel_heavywarhammer magistuarmory:steel_lucernhammer magistuarmory:steel_morgenstern magistuarmory:steel_chainmorgenstern magistuarmory:steel_guisarme}}

> [!WARNING]
> The table also lists the Steel Stiletto, Steel Ranseur, Steel Ahlspiess, Steel Bastard Sword and Steel Estoc. Soulrend removes every stiletto, ranseur, ahlspiess, bastard sword and estoc with Item Obliterator, so don't pick those five.

### Magic tables

**Magic Runes** (a choice of one):

| Item | Count |
| --- | --- |
| [[item:gtbcs_geomancy_plus:geo_rune]], [[item:irons_spellbooks:fire_rune]], [[item:irons_spellbooks:ice_rune]], [[item:irons_spellbooks:lightning_rune]], [[item:irons_spellbooks:ender_rune]], [[item:irons_spellbooks:holy_rune]], [[item:irons_spellbooks:blood_rune]], [[item:irons_spellbooks:evocation_rune]], [[item:irons_spellbooks:nature_rune]] | 4 |
| [[item:irons_spellbooks:arcane_rune]], [[item:irons_spellbooks:cooldown_rune]], [[item:irons_spellbooks:protection_rune]] | 2 |

**Orb** (usually a choice of one): one upgrade orb for any of the fifteen types.

{{items irons_spellbooks:fire_upgrade_orb irons_spellbooks:ice_upgrade_orb irons_spellbooks:lightning_upgrade_orb irons_spellbooks:holy_upgrade_orb irons_spellbooks:ender_upgrade_orb irons_spellbooks:blood_upgrade_orb irons_spellbooks:evocation_upgrade_orb irons_spellbooks:nature_upgrade_orb irons_spellbooks:mana_upgrade_orb irons_spellbooks:cooldown_upgrade_orb irons_spellbooks:protection_upgrade_orb gtbcs_geomancy_plus:geo_upgrade_orb traveloptics:aqua_upgrade_orb traveloptics:eldritch_upgrade_orb alshanex_familiars:sound_upgrade_orb}}

**Ink_irons:**

| Item | Count | Chance |
| --- | --- | --- |
| [[item:irons_spellbooks:common_ink]] | 8 or 32 | 64.0% |
| [[item:irons_spellbooks:uncommon_ink]] | 8 | 28.8% |
| [[item:irons_spellbooks:epic_ink]] | 4 | 4.0% |
| [[item:irons_spellbooks:legendary_ink]] | 2 | 3.2% |

**Magic_materials:**

| Item | Count | Chance |
| --- | --- | --- |
| [[item:irons_spellbooks:mithril_ingot]] | 1 or 2 | 20.5% |
| [[item:irons_spellbooks:mithril_scrap]] | 1 or 2 | 30.3% |
| [[item:irons_spellbooks:magic_cloth]] | 16 | 16.4% |
| [[item:irons_spellbooks:arcane_ingot]] | 4 | 16.4% |
| [[item:irons_spellbooks:arcane_essence]] | 64 | 16.4% |

**ancient:** 1 to 5 [[item:irons_spellbooks:ancient_knowledge_fragment]], each count equally likely.

### Sky Arena shop tables

These are only used by the [[progression/side-chapters/sky-arena|Sky Arena]] Ice Key shop.

| Table | Contents |
| --- | --- |
| Gem Dust | 3, 4 or 5 [[item:apotheosis:gem_dust]] |
| uniques_simply_swords | One of 35 Simply Swords unique weapons, each with one gem socket |
| Dragon_scale | 8 Dragon Scales of one of the twelve colors |
| Enchanted_books | Sharpness I–V or Protection I–V (7.1% each), 16 or 32 Lapis Lazuli, or 8 or 16 Books |
| Food | Bread, burgers, carrots, soups, fish, bacon or cooked chicken, in stacks of 4–32 |
| Building_Wood | 96 logs of one of eight wood types (a choice) |
| Building_Stone | 256 Cobblestone or Cobbled Deepslate, 192 Stone or Deepslate, 128 Sand or 64 Sandstone (a choice) |

### Other tables

| Table | Contents | Used by |
| --- | --- | --- |
| Lucky | Emeralds (1 to 16, 97.4%) or Blocks of Emerald (1 to 8, 2.6%) | Valarian Castle quest in [[progression/side-chapters/factions\|Factions]], two backpacks in [[progression/side-chapters/backpacks\|Backpacks]] |
| ORE | 16 Raw Iron, 16 Raw Gold and 16 Raw Zinc, all three | The Wrought Chamber in [[progression/side-chapters/fallen-myths\|Fallen Myths]] |

## Related

- [[progression|Progression]]
- [[features/gear-and-crafting/gems-and-sigils|Gems and Sigils]]
