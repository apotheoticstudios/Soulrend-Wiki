---
{
  "title": "Rings",
  "aliases": [
    "Heart of Ender",
    "Holy Water Grail",
    "Invisibility Robes",
    "Statue of Willpower",
    "Mythical Band",
    "Wither Ring",
    "Hell Ring",
    "Molten Ring",
    "Ring Of Life",
    "Ring Of The Eternal Resting",
    "Ring Of The Resounding Earth",
    "Aetherial Despair Ring",
    "Firestorm Ring",
    "Guided Currents Ring",
    "Ring Of Salted Depths",
    "Sharpshot Ring",
    "Stormbound Signet"
  ],
  "summary": "30 items.",
  "items": [
    "alshanex_familiars:evasion_curio",
    "alshanex_familiars:healing_curio",
    "alshanex_familiars:invisibility_curio",
    "alshanex_familiars:statue_curio",
    "apotheotic_additions:mythicalband",
    "dacxirons:wither_ring",
    "dungeons_and_combat:hell_ring",
    "dungeons_and_combat:molten_ring",
    "dungeons_and_combat:ring_of_life",
    "dungeons_and_combat:ring_of_the_eternal_resting",
    "gtbcs_geomancy_plus:ring_of_the_resounding_earth",
    "irons_spellbooks:affinity_ring",
    "irons_spellbooks:betrayer_signet",
    "irons_spellbooks:cast_time_ring",
    "irons_spellbooks:cooldown_ring",
    "irons_spellbooks:emerald_stoneplate_ring",
    "irons_spellbooks:fireward_ring",
    "irons_spellbooks:frostward_ring",
    "irons_spellbooks:invisibility_ring",
    "irons_spellbooks:lurker_ring",
    "irons_spellbooks:mana_ring",
    "irons_spellbooks:poisonward_ring",
    "irons_spellbooks:silver_ring",
    "irons_spellbooks:visibility_ring",
    "traveloptics:aetherial_despair_ring",
    "traveloptics:firestorm_ring",
    "traveloptics:guided_currents_ring",
    "traveloptics:salted_depths_ring",
    "too_many_bows:sharpshot_ring",
    "too_many_bows:stormbound_signet"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json
  game-data/loot-tables.json, game-data/recipes.json
  irons_spellbooks jar: EntityMixin.isInvisibleTo (INVISIBILITY_RING); VISIBILITY_RING referenced only by ItemRegistry and CreativeTabRegistry; game-data/recipes.json alshanex_familiars:ritual_recipes/truth_mirror
-->

**Rings** covers 30 items.

## Usage

Rings go in a Curios ring slot. Effects beyond the attributes in the tables, from their tooltips:

**Familiar rings** (Alshanex Familiars) act on the wearer's tamed familiars:

- **Heart of Ender:** below 25% health, a familiar can evade 2 hits every 5 s.
- **Holy Water Grail:** familiars regain health over time, paid for with the wearer's mana.
- **Invisibility Robes:** below 25% health, a familiar gets True Invisibility.
- **Statue of Willpower:** below 50% health, a familiar gets Oakskin.

**Combat rings:**

- **Hell Ring:** Fire Resistance. **Molten Ring:** attacks set the target on fire. **Ring of Life:** extra hearts. **Ring of the Eternal Resting:** Strength while fighting undead. (Dungeons and Combat)
- **Wither Ring:** the wearer's spells give enemies Wither.
- **Signet of the Betrayer:** passive (5 s cooldown), extra damage to creatures based on their maximum mana.
- **Ring of the Lurker:** passive (15 s cooldown), the first attack while invisible deals +50% damage.
- **Fireward, Frostward** and **Poisonward Rings:** immunity to fire, freezing and poison.
- **Emerald Stoneplate Ring:** slain creatures drop 25% more experience.
- **Ring of Invisibility:** despite the name, it lets the wearer see invisible entities; its tooltip only jokes about fine print it can't see. The **Ring of Visibility** ("Allows visible creatures to be seen") is the joke's other half and does nothing when worn; its only use is as the center of the Mirror of Truth ritual (Alshanex's Familiars).
- **Ring of No Affinity:** shows "Unattuned" until attuned to a spell school.
- **Sharpshot Ring** and **Stormbound Signet:** +15% and +30% bow damage.

**Spell talents** change one spell each:

- **Ring of the Resounding Earth** (Pillar of the Resounding Earth): the pillar's shock waves are also released from the caster, dealing damage and shredding armor and spell resistances.
- **Aetherial Despair Ring** (Despair): the axe blades gain a vertical path and move 50% faster.
- **Firestorm Ring** (Meteor Storm): meteors become flare bombs that explode into flame jets; the spell can no longer target an entity directly.
- **Guided Currents Ring** (Aqua Missiles): the missiles seek only the aimed target, with 25% more seeking distance.
- **Ring of Salted Depths** (Overflow): the pool turns to brine; casting a lightning spell inside it electrifies it for its whole duration, and it can trigger Hydrocharge.

The **Mythical Band**, **Ring of Expediency**, **Ring of Recovery**, **Ring of Mana** and **Silver Ring** only add the attributes in the tables.

## Alshanex Familiars Mod

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:alshanex_familiars:evasion_curio]] | Alshanex Familiars Mod | Slot: Ring; When a tamed Familiar's health falls bellow 25%, it gains the ability to evade 2 hits every 5 seconds.; +15% Cast Time Reduction | 2 loot tables |
| [[item:alshanex_familiars:healing_curio]] | Alshanex Familiars Mod | Slot: Ring; Familiars tamed by the wearer will recover health over time at the cost of mana.; +5% Mana Regeneration | 2 loot tables |
| [[item:alshanex_familiars:invisibility_curio]] | Alshanex Familiars Mod | Slot: Ring; When a tamed Familiar's health falls bellow 25%, it gains the True Invisibility effect.; +50 Max Mana | crafting |
| [[item:alshanex_familiars:statue_curio]] | Alshanex Familiars Mod | Slot: Ring; When a tamed Familiar's health falls bellow 50%, it gains the Oakskin effect.; +5% Spell Resistance | crafting, 1 loot table |

## Apotheotic Additions

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:apotheotic_additions:mythicalband]] | Apotheotic Additions | Slot: Ring | crafting |

## Dacxirons

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:dacxirons:wither_ring]] | dacxirons | Slot: Ring; Your spells wither enemies |  |

## Dungeons and Combat

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:dungeons_and_combat:hell_ring]] | dungeons and combat | Slot: Ring; Fire Resistance | crafting |
| [[item:dungeons_and_combat:molten_ring]] | dungeons and combat | Slot: Ring; Attacking will burn the target | 2 loot tables |
| [[item:dungeons_and_combat:ring_of_life]] | dungeons and combat | Slot: Ring; Heart Bonus | crafting, 1 loot table |
| [[item:dungeons_and_combat:ring_of_the_eternal_resting]] | dungeons and combat | Slot: Ring; Gain Strength by fighting Undead types | 1 loot table |

## GTBC's Geomancy Plus

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:gtbcs_geomancy_plus:ring_of_the_resounding_earth]] | GTBC's Geomancy Plus | Slot: Talent, Ring; Spell Talent: Pillar Of The Resounding Earth; Allows Pillar of the Resounding Earth to resonate with the caster. When the Pillar emits shock waves, identical shock waves are also released from you, dealing damage, shredding Armor and all Spell Resistances |  |

## Iron's Spells 'n Spellbooks

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:irons_spellbooks:affinity_ring]] | Iron's Spells 'n Spellbooks | Slot: Ring; Unattuned | crafting, 14 loot tables |
| [[item:irons_spellbooks:betrayer_signet]] | Iron's Spells 'n Spellbooks | Slot: Ring; Deal extra damage to creatures based on their maximum mana; +10% Eldritch Spell Power | 1 loot table |
| [[item:irons_spellbooks:cast_time_ring]] | Iron's Spells 'n Spellbooks | Slot: Ring; +15% Cast Time Reduction | 1 loot table |
| [[item:irons_spellbooks:cooldown_ring]] | Iron's Spells 'n Spellbooks | Slot: Ring; +15% Cooldown Reduction | crafting, 1 loot table |
| [[item:irons_spellbooks:emerald_stoneplate_ring]] | Iron's Spells 'n Spellbooks | Slot: Ring; Slain creatures drop +25% experience | 1 loot table |
| [[item:irons_spellbooks:fireward_ring]] | Iron's Spells 'n Spellbooks | Slot: Ring; Grants fire immunity | crafting, 1 loot table |
| [[item:irons_spellbooks:frostward_ring]] | Iron's Spells 'n Spellbooks | Slot: Ring; Grants freezing immunity | crafting, 2 loot tables |
| [[item:irons_spellbooks:invisibility_ring]] | Iron's Spells 'n Spellbooks | Slot: Ring; I would say read the fine print, but I can't see it | 1 loot table |
| [[item:irons_spellbooks:lurker_ring]] | Iron's Spells 'n Spellbooks | Slot: Ring; Your first attack while invisible deals +50% damage |  |
| [[item:irons_spellbooks:mana_ring]] | Iron's Spells 'n Spellbooks | Slot: Ring; +100 Max Mana |  |
| [[item:irons_spellbooks:poisonward_ring]] | Iron's Spells 'n Spellbooks | Slot: Ring; Grants poison immunity | crafting, 1 loot table |
| [[item:irons_spellbooks:silver_ring]] | Iron's Spells 'n Spellbooks | Slot: Ring; +25 Max Mana | 1 loot table |
| [[item:irons_spellbooks:visibility_ring]] | Iron's Spells 'n Spellbooks | Slot: Ring; Allows visible creatures to be seen | crafting, 1 loot table |

## T.O Magic 'n Extras

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:traveloptics:aetherial_despair_ring]] | T.O Magic 'n Extras | Slot: Talent, Ring; Spell Talent: Despair; Axe Blades of Despair gain vertical trajectory and moves 50% faster | crafting, 2 loot tables |
| [[item:traveloptics:firestorm_ring]] | T.O Magic 'n Extras | Slot: Talent, Ring; Spell Talent: Meteor Storm; Transforms meteors from Meteor Storm into flare bombs that explode and create flame jets. The spell can no longer directly target an entity | crafting |
| [[item:traveloptics:guided_currents_ring]] | T.O Magic 'n Extras | Slot: Talent, Ring; Spell Talent: Aqua Missiles; Aqua Missiles no longer auto-target nearby enemies. Instead, they now seek only the target you are aiming at, giving precise control over who is hit. Also increases the missiles’ seeking distance by 25% | crafting |
| [[item:traveloptics:salted_depths_ring]] | T.O Magic 'n Extras | Slot: Talent, Ring; Spell Talent: Overflow; Transforms the Overflow pool into brine water while keeping all of its normal effects. Casting a lightning spell while inside the pool electrifies it, dealing lightning magic damage to all entities within for its entire duration, scaling with Aqua and Lightning spell power. The electrified pool can also trigger Hydrocharge on its own if Hydrocharge is enabled from any source | crafting |

## Too Many Bows

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:too_many_bows:sharpshot_ring]] | Too Many Bows | Slot: Ring; A quiet vow, etched in silver. The bowstring remembers who holds it steady. Increases bow damage by +15% Equip in a ring slot.; +0.15 Bow Damage |  |
| [[item:too_many_bows:stormbound_signet]] | Too Many Bows | Slot: Ring; A signet stolen from the stormcourt. When the wind turns, so does your fate. Increases bow damage by +30% Equip in a ring slot.; +0.3 Bow Damage |  |
