---
{
  "title": "Familiars (Items)",
  "summary": "Familiars (Items): 27 items from the Soulrend modpack.",
  "items": [
    "alshanex_familiars:archmage_shard",
    "alshanex_familiars:bard_shard",
    "alshanex_familiars:cleric_shard",
    "alshanex_familiars:dragon_warrior_shard",
    "alshanex_familiars:druid_shard",
    "alshanex_familiars:frostling_shard",
    "alshanex_familiars:hunter_shard",
    "alshanex_familiars:illusionist_shard",
    "alshanex_familiars:lightning_mage_shard",
    "alshanex_familiars:necromancer_shard",
    "alshanex_familiars:plague_shard",
    "alshanex_familiars:scorcher_shard",
    "alshanex_familiars:summoner_shard",
    "alshanex_familiars:archmage_trinket",
    "alshanex_familiars:bard_trinket",
    "alshanex_familiars:cleric_trinket",
    "alshanex_familiars:dragon_warrior_trinket",
    "alshanex_familiars:forest_trinket",
    "alshanex_familiars:frostling_trinket",
    "alshanex_familiars:hunter_trinket",
    "alshanex_familiars:illusionist_trinket",
    "alshanex_familiars:mage_trinket",
    "alshanex_familiars:necromancer_trinket",
    "alshanex_familiars:pandora_box",
    "alshanex_familiars:plague_trinket",
    "alshanex_familiars:scorcher_trinket",
    "alshanex_familiars:summoner_trinket"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json
  game-data/loot-tables.json, game-data/recipes.json (alshanex_familiars:ritual_recipe)
  alshanex_familiars jar: lang (advancements reincarnation, origin_island, memory_fragment, crystal_berry, learn_necromancy, bottle_soul; tooltip.alshanex_familiars.poison_vial; item descriptions), item/shards/*Shard (spawnFamiliar), tags irons_spellbooks/spells/<class>/*.json
  kubejs/server_scripts/magic/dacxoptics_recipes.js (Necromancer trinket recipe; the TRINKETS list is empty)
-->

**Familiars (Items)** lists 27 items from Alshanex's Familiars: the shards that create familiars and the trinkets that strengthen them.

## Usage

Familiars are small spellcasting companions from Alshanex's Familiars. They are tamed and cast their class's spells, such as the Frostling's Ice Chamber or the Bard's Sound spells.

- **Shards** create familiars: using a shard summons a new familiar of its class. Six shards come from rituals at a Ritual Core on **Origin Island**, an ancient island that Memory Fragments lead to. A Familiar fed a Crystal Berry (dug up by a Sniffer) gives a Memory Fragment.
  - Each ritual puts a [[item:alshanex_familiars:pet_soul]] (a familiar's soul caught in a bottle) in the center, with four items around it. One of the four is always Arcane Essence:

    | Shard | Other ritual items |
    | --- | --- |
    | Archmage | Legendary Ink, Arcane Rune, Magic Cloth |
    | Druid | Greater Oakskin Elixir, Nature Rune, Spore Blossom (kept) |
    | Frostling | Blue Ice, Ice Rune, Frozen Bone |
    | Hunter | Hogskin, Crossbow, Rabbit's Foot |
    | Lightning Mage | Bottled Lightning, Lightning Rune, Lightning Rod |
    | Summoner | Ruined Book, Eldritch Manuscript, Sculk Catalyst |

  - The Bard, Cleric, Dragoon, Illusionist, Necromancer, Plague Doctor and Scorcher shards have no ritual, recipe or loot table in Soulrend.
  - A Poison Vial turns a Druid Familiar into a Plague Doctor Familiar.
- **Familiar trinkets** go in the Familiar Trinket curio slot. Each makes one class of the wearer's familiars cast spells at a higher level, and adds that school's resistance and spell power (the Necromancer's adds Summon Damage).
  - Most come from loot (the Bard trinket has no source). The Necromancer trinket also has a Soulrend recipe: a skeleton skull and a zombie head with blessed gold ingots around a mithril ingot.
- **[[item:alshanex_familiars:pandora_box]]** summons or dismisses several familiars at once.
- Defeating the **Dead King** lets the player revive familiars when they die.

## Alshanex's Familiars shards

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:alshanex_familiars:archmage_shard]] | Alshanex Familiars Mod |  | crafting |
| [[item:alshanex_familiars:bard_shard]] | Alshanex Familiars Mod |  |  |
| [[item:alshanex_familiars:cleric_shard]] | Alshanex Familiars Mod |  |  |
| [[item:alshanex_familiars:dragon_warrior_shard]] | Alshanex Familiars Mod |  |  |
| [[item:alshanex_familiars:druid_shard]] | Alshanex Familiars Mod |  | crafting |
| [[item:alshanex_familiars:frostling_shard]] | Alshanex Familiars Mod |  | crafting |
| [[item:alshanex_familiars:hunter_shard]] | Alshanex Familiars Mod |  | crafting |
| [[item:alshanex_familiars:illusionist_shard]] | Alshanex Familiars Mod |  |  |
| [[item:alshanex_familiars:lightning_mage_shard]] | Alshanex Familiars Mod |  | crafting |
| [[item:alshanex_familiars:necromancer_shard]] | Alshanex Familiars Mod |  |  |
| [[item:alshanex_familiars:plague_shard]] | Alshanex Familiars Mod |  |  |
| [[item:alshanex_familiars:scorcher_shard]] | Alshanex Familiars Mod |  |  |
| [[item:alshanex_familiars:summoner_shard]] | Alshanex Familiars Mod |  | crafting |

## Familiar trinkets

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:alshanex_familiars:archmage_trinket]] | Alshanex Familiars Mod | Slot: Familiar Trinket; When equipped, Archmage Familiars cast spells at a higher level; +10% Blood Magic Resistance; +10% Blood Spell Power | 2 loot tables |
| [[item:alshanex_familiars:bard_trinket]] | Alshanex Familiars Mod | Slot: Familiar Trinket; When equipped, Bard Familiars cast spells at a higher level; +10% Sound Spell Resistance; +10% Sound Spell Power |  |
| [[item:alshanex_familiars:cleric_trinket]] | Alshanex Familiars Mod | Slot: Familiar Trinket; When equipped, Cleric Familiars cast spells at a higher level; +10% Holy Magic Resistance; +10% Holy Spell Power | 2 loot tables |
| [[item:alshanex_familiars:dragon_warrior_trinket]] | Alshanex Familiars Mod | Slot: Familiar Trinket; When equipped, Dragoon Familiars cast spells at a higher level; +10% Ender Magic Resistance; +10% Ender Spell Power | 1 loot table |
| [[item:alshanex_familiars:forest_trinket]] | Alshanex Familiars Mod | Slot: Familiar Trinket; When equipped, Druid Familiars cast spells at a higher level; +10% Nature Magic Resistance; +10% Nature Spell Power | 1 loot table |
| [[item:alshanex_familiars:frostling_trinket]] | Alshanex Familiars Mod | Slot: Familiar Trinket; When equipped, Frostling Familiars cast spells at a higher level; +10% Ice Magic Resistance; +10% Ice Spell Power | 1 loot table |
| [[item:alshanex_familiars:hunter_trinket]] | Alshanex Familiars Mod | Slot: Familiar Trinket; When equipped, Hunter Familiars cast spells at a higher level; +10% Aqua Magic Resistance; +10% Aqua Spell Power | 3 loot tables |
| [[item:alshanex_familiars:illusionist_trinket]] | Alshanex Familiars Mod | Slot: Familiar Trinket; When equipped, Illusionist Familiars cast spells at a higher level; +10% Evocation Magic Resistance; +10% Evocation Spell Power | 2 loot tables |
| [[item:alshanex_familiars:mage_trinket]] | Alshanex Familiars Mod | Slot: Familiar Trinket; When equipped, Mage Familiars cast spells at a higher level; +10% Lightning Magic Resistance; +10% Lightning Spell Power | 2 loot tables |
| [[item:alshanex_familiars:necromancer_trinket]] | Alshanex Familiars Mod | Slot: Familiar Trinket; When equipped, Necromancer Familiars cast spells at a higher level; +15% Summon Damage | 1 loot table |
| [[item:alshanex_familiars:pandora_box]] | Alshanex Familiars Mod | Slot: Familiar Trinket; Allows you to summon/unsummon multiple Familiars at once No Familiars selected | crafting |
| [[item:alshanex_familiars:plague_trinket]] | Alshanex Familiars Mod | Slot: Familiar Trinket; When equipped, Plague Doctor Familiars cast spells at a higher level; +10% Sound Spell Power; +10% Geo Spell Power; +10% Spell Resistance | 2 loot tables |
| [[item:alshanex_familiars:scorcher_trinket]] | Alshanex Familiars Mod | Slot: Familiar Trinket; When equipped, Scorcher Familiars cast spells at a higher level; +10% Fire Magic Resistance; +10% Fire Spell Power | 2 loot tables |
| [[item:alshanex_familiars:summoner_trinket]] | Alshanex Familiars Mod | Slot: Familiar Trinket; When equipped, Summoner Familiars cast spells at a higher level; +10% Eldritch Magic Resistance; +5% Eldritch Spell Power | 3 loot tables |
