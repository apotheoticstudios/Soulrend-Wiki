---
{
  "title": "Spells",
  "summary": "Every spell in Soulrend, one page per spell school, and how scrolls, spellbooks and casting work."
}
---
<!-- sources:
  researched 2026-10-25
  game-data/spells.json (219 spells, schools, "lootable"), game-data/tags.json (school focus tags)
  irons_spellbooks jar: InscriptionTableMenu (inscribe, extract unless locked), ScrollForgeMenu (ink + paper + focus, allowCrafting, getMinLevelForRarity), ArcaneAnvilMenu (scroll merging, unique-item improvement, imbuing, upgrade orbs up to MAX_UPGRADES, Shriving Stone), AlchemistCauldronTile (getInkFromScroll), Scroll.removeScrollAfterCast, EldritchManuscript; lang ui.irons_spellbooks.*, item.irons_spellbooks.shriving_stone_desc, key.irons_spellbooks.*
  defaultconfigs/irons_spellbooks-server.toml (manaRegenMultiplier 0.1, manaSpawnPercent 0.1, scrollRecycleChance 0.9, maxUpgrades 3, swordsConsumeMana, swordsCooldownMultiplier 0.5, scrollMerging, spellGriefing false, additionalWanderingTraderTrades)
  config/irons_spellbooks_spell_config/ (disabled spells: abyssal_shroud, cloud_of_regeneration)
  kubejs/server_scripts/magic/magic_fixes.js (mob spell resistance reset; Shriving Stone unlock recipes)
  irons_spellbooks jar: DamageSources.getResist (2 - softCapFormula(school resist x spell resist)), Utils.softCapFormula, AttributeRegistry (spell_resist default 1.0)
-->

**Spells** are cast from spellbooks, scrolls and imbued weapons. Soulrend has 219 spells in 12 schools. Each school has its own page listing every spell's mana cost, cooldown, per-level values and where the spell comes from.

## Schools

| School | ID | Spells | Scroll Forge focus |
| --- | --- | --- | --- |
| [[items/magic/spells/fire-spells\|Fire Spells]] | `irons_spellbooks:fire` | 24 | [[item:minecraft:blaze_rod]] |
| [[items/magic/spells/ice-spells\|Ice Spells]] | `irons_spellbooks:ice` | 18 | [[item:irons_spellbooks:frozen_bone]] |
| [[items/magic/spells/lightning-spells\|Lightning Spells]] | `irons_spellbooks:lightning` | 17 | [[item:irons_spellbooks:lightning_bottle]] |
| [[items/magic/spells/holy-spells\|Holy Spells]] | `irons_spellbooks:holy` | 21 | [[item:irons_spellbooks:divine_pearl]] |
| [[items/magic/spells/ender-spells\|Ender Spells]] | `irons_spellbooks:ender` | 25 | [[item:minecraft:ender_pearl]] |
| [[items/magic/spells/blood-spells\|Blood Spells]] | `irons_spellbooks:blood` | 20 | [[item:irons_spellbooks:blood_vial]] |
| [[items/magic/spells/evocation-spells\|Evocation Spells]] | `irons_spellbooks:evocation` | 18 | [[item:minecraft:emerald]] |
| [[items/magic/spells/nature-spells\|Nature Spells]] | `irons_spellbooks:nature` | 16 | [[item:minecraft:poisonous_potato]] |
| [[items/magic/spells/eldritch-spells\|Eldritch Spells]] | `irons_spellbooks:eldritch` | 19 | [[item:minecraft:echo_shard]] |
| [[items/magic/spells/aqua-spells\|Aqua Spells]] | `traveloptics:aqua` | 17 | [[item:alexscaves:pearl]] |
| [[items/magic/spells/geo-spells\|Geo Spells]] | `gtbcs_geomancy_plus:geo` | 16 | [[item:mowziesmobs:bluff_rod]] |
| [[items/magic/spells/sound-spells\|Sound Spells]] | `familiarslib:sound` | 8 | [[item:minecraft:note_block]] |

## Scrolls

A scroll holds one spell at one level. Casting it from the hand uses the scroll up (except in creative mode). Each spell level has a rarity, shown in the school pages' tables, and the rarity decides which ink can make it.

Scrolls come from:

- **Random loot.** Chests and mobs that roll a random scroll pick only from spells the game allows as loot. Some tables are limited to one school, such as pyromancers and pyromancer towers for Fire. The school pages list these.
- **Named drops.** Many bosses drop one particular spell. For several Traveloptics boss spells this is the only source, because those spells can't be looted or crafted.
- **The Scroll Forge**, which crafts a scroll from ink, paper and a school's focus item. It lists every spell of the focus's school that allows crafting. The scroll comes out at the lowest level of the ink's rarity.
- **Wandering traders**, which Iron's Spells 'n Spellbooks gives magic trades such as ink and scrolls.

**Eldritch spells must be learned** before they can be cast or crafted. An unlearned one shows as an "Unlearned Scroll" ("You can't understand this spell..."). Right-clicking an [[item:irons_spellbooks:eldritch_manuscript]] opens a research screen, where holding a spell learns it for one manuscript.

Two spells are disabled in Soulrend's spell config and can't be obtained or cast: **Abyssal Shroud** and **Cloud of Regeneration**.

## Spellbooks and stations

- **[[items/magic/spellbooks|Spellbooks]]** go in the Spell Book curio slot and hold several spells. See that page for how inscribing works and for the unique books.
- **[[items/magic/magic-stations#Inscription Table|Inscription Table]]:** writes a scroll into a spellbook's empty slot, using the scroll up. Selecting an inscribed spell takes it back out as a scroll, unless the spell is locked.
- **[[items/magic/magic-stations#Arcane Anvil|Arcane Anvil]]:**
  - merges a scroll with ink of the next level's rarity to raise it one level;
  - imbues a scroll's spell into a weapon or staff that can hold one;
  - improves a spell that a unique spellbook or weapon already carries;
  - adds a spell slot to a spellbook with a spell slot improvement;
  - applies [[items/magic/runes-orbs-and-inks|upgrade orbs]] to gear, up to 3 per item;
  - removes imbued spells or upgrades with a Shriving Stone.
- **[[items/magic/magic-stations#Alchemist Cauldron|Alchemist Cauldron]]:** turns a scroll back into ink of its rarity. In Soulrend this works 90% of the time.

## Casting

With a spellbook equipped, **Cast Selected Spell** (V by default, as the book's tooltip shows) casts the selected spell, and the **spell wheel** key picks another. Quick-cast keys for slots 1–15 exist but are unbound. Casting costs mana and starts the spell's cooldown. Spell Power, Cooldown Reduction and Cast Time Reduction from gear change the values in the school tables.

Soulrend changes Iron's Spells 'n Spellbooks defaults in several ways:

- **Mana regenerates at a tenth of the normal rate** (`manaRegenMultiplier` 0.1), so mana regeneration gear and mana potions matter more.
- Players respawn with **10% of their maximum mana**.
- **Imbued weapons** cost mana to cast from and have **half** the spell's normal cooldown.
- Spells don't break blocks or start fires.
- **Mobs take double spell damage.** A Soulrend script removes every spell resistance modifier from spawning mobs and sets their base Spell Resistance to 0. Iron's multiplies spell damage by 2 minus the target's resistance, and 1.0 is neutral, so a resistance of 0 doubles the damage (see [[bugs|Known Bugs]]).
- Most spells have their own mana cost and power multipliers in Soulrend's spell config. The school tables already show the result.
