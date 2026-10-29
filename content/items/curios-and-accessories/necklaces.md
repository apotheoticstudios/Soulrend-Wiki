---
{
  "title": "Necklaces",
  "aliases": [
    "Ernos Fang Necklace",
    "Ammit Fang Necklace",
    "Klauen Necklace",
    "Nullfire Amulet",
    "Vampiric Necklace",
    "Amethyst Resonance Charm",
    "Amulet of Concentration",
    "Conjurer's Talisman",
    "Greater Conjurer's Talisman",
    "Heavy Chain",
    "Amulet of Teleportation",
    "Amulet Of Spectral Shift",
    "Collar Of The Turning Tides",
    "Energy Unbound Necklace",
    "Sigil of the Spider Sorcerer",
    "Dead Eyes Pendant",
    "Fletchers Talisman"
  ],
  "summary": "17 items.",
  "items": [
    "dungeons_and_combat:ernos_fang_necklace",
    "dungeons_and_combat:fang_necklace",
    "dungeons_and_combat:klauen_necklace",
    "dungeons_and_combat:nullfire_amulet",
    "dungeons_and_combat:thirsty_necklace",
    "irons_spellbooks:amethyst_resonance_charm",
    "irons_spellbooks:concentration_amulet",
    "irons_spellbooks:conjurers_talisman",
    "irons_spellbooks:greater_conjurers_talisman",
    "irons_spellbooks:heavy_chain_necklace",
    "irons_spellbooks:teleportation_amulet",
    "traveloptics:amulet_of_spectral_shift",
    "traveloptics:collar_of_the_turning_tide",
    "traveloptics:energy_unbound_necklace",
    "traveloptics:sigil_of_the_spider_sorcerer",
    "too_many_bows:dead_eyes_pendant",
    "too_many_bows:fletchers_talisman"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json
  game-data/loot-tables.json, game-data/recipes.json
  irons_spellbooks jar: TeleportationAmuletItem (canUse: Ender Spell Power 1.25; handleCurse drops it); lang item.irons_spellbooks.teleportation_amulet.desc
  irons_spellbooks jar: SummonManager.recastFinishedHelper (GREATER_CONJURERS_TALISMAN); lang item.irons_spellbooks.greater_conjurers_talisman.desc
-->

**Necklaces** covers 17 items.

## Usage

Necklaces go in a Curios necklace slot. Effects beyond the attributes in the tables, from their tooltips:

- **Ammit Fang Necklace:** attacks leave the Broken Armor effect. **Ernos Fang Necklace:** an attack damage bonus. **Klauen Necklace:** an attack speed bonus. **Nullfire Amulet:** puts out flames of every kind. **Vampiric Necklace:** a chance to heal when attacking. (Dungeons and Combat)
- **Amulet of Concentration:** long casts can't be interrupted.
- **Amulet of Teleportation:** gives Evasion for 3 s after teleporting, but only to a wearer with at least 125% Ender Spell Power (+25% over the base). Below that, its tooltip shows only a flavor line ("A cracked pearl, hung on a chain"), and if worn it unequips itself and drops to the ground nearby.
- **Dead Eyes Pendant:** a chance for bow shots to crit.
- **Greater Conjurer's Talisman:** summon spells that time out don't go on cooldown. Its tooltip doesn't show this (see [[bugs|Known Bugs]]).

**Spell talents** change one spell each:

- **Amulet of Spectral Shift** (Spectral Blink): while crouching, the spell pulls the targeted entity to the caster.
- **Collar of the Turning Tides** (Tsunami): the wave comes back along its path, hitting entities again and adding 10 s of Wet; both waves deal 33% less damage.
- **Energy Unbound Necklace** (Death Laser): the caster can look around while casting and move at 80% reduced speed.
- **Sigil of the Spider Sorcerer** (Aspect of the Spider): the spell lets the caster climb walls, and hits during it have a 50% chance to poison for 3 s.

The **Amethyst Resonance Charm**, the plain **Conjurer's Talisman** and the **Heavy Chain** only add the attributes in the tables.

## Overview

| Item | Mod | Key stats | Obtained from |
| --- | --- | --- | --- |
| [[item:dungeons_and_combat:ernos_fang_necklace]] | dungeons and combat | Slot: Necklace; Attack Damage Bonus |  |
| [[item:dungeons_and_combat:fang_necklace]] | dungeons and combat | Slot: Necklace; Attacks will leave the Broken Armor effect |  |
| [[item:dungeons_and_combat:klauen_necklace]] | dungeons and combat | Slot: Necklace; Attack Speed Bonus |  |
| [[item:dungeons_and_combat:nullfire_amulet]] | dungeons and combat | Slot: Necklace; Extinguishes flames of all types |  |
| [[item:dungeons_and_combat:thirsty_necklace]] | dungeons and combat | Slot: Necklace; There will be a chance to heal yourself when attacking | 1 loot table |
| [[item:irons_spellbooks:amethyst_resonance_charm]] | Iron's Spells 'n Spellbooks | Slot: Necklace; +15% Mana Regeneration | crafting |
| [[item:irons_spellbooks:concentration_amulet]] | Iron's Spells 'n Spellbooks | Slot: Necklace; Long Casts become uninterruptible | crafting, 1 loot table |
| [[item:irons_spellbooks:conjurers_talisman]] | Iron's Spells 'n Spellbooks | Slot: Necklace; +15% Summon Damage | crafting, 1 loot table |
| [[item:irons_spellbooks:greater_conjurers_talisman]] | Iron's Spells 'n Spellbooks | Slot: Necklace; +15% Summon Damage | crafting |
| [[item:irons_spellbooks:heavy_chain_necklace]] | Iron's Spells 'n Spellbooks | Slot: Necklace; +15% Spell Resistance | crafting, 1 loot table |
| [[item:irons_spellbooks:teleportation_amulet]] | Iron's Spells 'n Spellbooks | Slot: Necklace; A cracked pearl, hung on a chain | 1 loot table |
| [[item:traveloptics:amulet_of_spectral_shift]] | T.O Magic 'n Extras | Slot: Necklace, Talent; Spell Talent: Spectral Blink; Spectral Blink teleports targeted entity to your location while crouching | 1 loot table |
| [[item:traveloptics:collar_of_the_turning_tide]] | T.O Magic 'n Extras | Slot: Necklace, Talent; Spell Talent: Tsunami; Tsunami waves return along its original path, hitting entities a second time and applying additional Wet duration of 10s. Both waves deal 33% reduced damage | crafting |
| [[item:traveloptics:energy_unbound_necklace]] | T.O Magic 'n Extras | Slot: Necklace, Talent; Spell Talent: Death Laser; Grants the caster freedom to look around while casting Death Laser and allows movement at 80% reduced speed | crafting |
| [[item:traveloptics:sigil_of_the_spider_sorcerer]] | T.O Magic 'n Extras | Slot: Necklace, Talent; Spell Talent: Aspect Of The Spider; Aspect of the Spider spell now allows you to climb walls; Casting Aspect of the Spider and striking an enemy grants a 50% chance to poison them for 3sec | crafting |
| [[item:too_many_bows:dead_eyes_pendant]] | Too Many Bows | Slot: Necklace; A cold pendant that never warms against the skin. Some say it "finds" the gap in armor before you do. Grants a chance for bow shots to critically strike. Equip…; +0.08 Bow Crit Chance |  |
| [[item:too_many_bows:fletchers_talisman]] | Too Many Bows | Slot: Necklace; A worn talisman wrapped in waxed cord. It doesn't make the bow stronger—only steadier in the hands. Equip in a necklace slot. |  |

## Dungeons and Combat

### Ernos Fang Necklace

[[item:dungeons_and_combat:ernos_fang_necklace]] (dungeons and combat, uncommon)

| Stat | Value | When |
| --- | --- | --- |
|  | Attack Damage Bonus | When Equipped |

#### Obtaining

Nothing makes or drops it in Soulrend (see [[bugs|Known Bugs]]).

### Ammit Fang Necklace

[[item:dungeons_and_combat:fang_necklace]] (dungeons and combat, uncommon)

| Stat | Value | When |
| --- | --- | --- |
|  | Attacks will leave the Broken Armor effect | When Equipped |

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes dungeons_and_combat:fang_necklace}}

### Klauen Necklace

[[item:dungeons_and_combat:klauen_necklace]] (dungeons and combat, uncommon)

| Stat | Value | When |
| --- | --- | --- |
|  | Attack Speed Bonus | When Equipped |

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes dungeons_and_combat:klauen_necklace}}

### Nullfire Amulet

[[item:dungeons_and_combat:nullfire_amulet]] (dungeons and combat, uncommon)

| Stat | Value | When |
| --- | --- | --- |
|  | Extinguishes flames of all types | When Equipped |

### Vampiric Necklace

[[item:dungeons_and_combat:thirsty_necklace]] (dungeons and combat, uncommon)

| Stat | Value | When |
| --- | --- | --- |
|  | There will be a chance to heal yourself when attacking | When Equipped |

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `dungeons_and_combat:chests/weak_cult` (chest) | 9.09% | 1 |

## Iron's Spells 'n Spellbooks

### Amethyst Resonance Charm

[[item:irons_spellbooks:amethyst_resonance_charm]] (Iron's Spells 'n Spellbooks)

| Stat | Value | When |
| --- | --- | --- |
| Mana Regeneration | +15% | When around neck |

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes irons_spellbooks:amethyst_resonance_charm}}

### Amulet of Concentration

[[item:irons_spellbooks:concentration_amulet]] (Iron's Spells 'n Spellbooks)

| Stat | Value | When |
| --- | --- | --- |
|  | Long Casts become uninterruptible | When around neck |

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:magic_items/basic_curios` (loot table) | 7.69% | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes irons_spellbooks:concentration_amulet}}

### Conjurer's Talisman

[[item:irons_spellbooks:conjurers_talisman]] (Iron's Spells 'n Spellbooks)

| Stat | Value | When |
| --- | --- | --- |
| Summon Damage | +15% | When around neck |

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:magic_items/basic_curios` (loot table) | 7.69% | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes irons_spellbooks:conjurers_talisman}}

#### Used in

{{uses irons_spellbooks:conjurers_talisman}}

### Greater Conjurer's Talisman

[[item:irons_spellbooks:greater_conjurers_talisman]] (Iron's Spells 'n Spellbooks)

| Stat | Value | When |
| --- | --- | --- |
| Summon Damage | +15% | When around neck |

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes irons_spellbooks:greater_conjurers_talisman}}

### Heavy Chain

[[item:irons_spellbooks:heavy_chain_necklace]] (Iron's Spells 'n Spellbooks)

| Stat | Value | When |
| --- | --- | --- |
| Spell Resistance | +15% | When around neck |

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:magic_items/basic_curios` (loot table) | 7.69% | 1 |

It can also be crafted (see below).

#### Crafting

{{recipes irons_spellbooks:heavy_chain_necklace}}

### Amulet of Teleportation

[[item:irons_spellbooks:teleportation_amulet]] (Iron's Spells 'n Spellbooks)

Its tooltip says:

- A cracked pearl, hung on a chain

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `irons_spellbooks:magic_items/basic_curios` (loot table) | 7.69% | 1 |

## T.O Magic 'n Extras

### Amulet Of Spectral Shift

[[item:traveloptics:amulet_of_spectral_shift]] (T.O Magic 'n Extras, traveloptics:eldritch)

| Stat | Value | When |
| --- | --- | --- |
|  | Spell Talent: Spectral Blink | When around neck |
|  | Spectral Blink teleports targeted entity to your location while crouching | When around neck |

#### Obtaining

One loot table drops it:

| Source | Chance | Count |
| --- | --- | --- |
| `traveloptics:chests/ancient_city_additions` (chest) | 6.06% | 1 |

### Collar Of The Turning Tides

[[item:traveloptics:collar_of_the_turning_tide]] (T.O Magic 'n Extras, traveloptics:aquatic)

| Stat | Value | When |
| --- | --- | --- |
|  | Spell Talent: Tsunami | When around neck |
|  | Tsunami waves return along its original path, hitting entities a second time and applying additional Wet duration of 10s. Both waves deal 33% reduced damage | When around neck |

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes traveloptics:collar_of_the_turning_tide}}

### Energy Unbound Necklace

[[item:traveloptics:energy_unbound_necklace]] (T.O Magic 'n Extras, traveloptics:mechanized)

| Stat | Value | When |
| --- | --- | --- |
|  | Spell Talent: Death Laser | When around neck |
|  | Grants the caster freedom to look around while casting Death Laser and allows movement at 80% reduced speed | When around neck |

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes traveloptics:energy_unbound_necklace}}

### Sigil of the Spider Sorcerer

[[item:traveloptics:sigil_of_the_spider_sorcerer]] (T.O Magic 'n Extras, traveloptics:natural)

| Stat | Value | When |
| --- | --- | --- |
|  | Spell Talent: Aspect Of The Spider | When around neck |
|  | Aspect of the Spider spell now allows you to climb walls | When around neck |
|  | Casting Aspect of the Spider and striking an enemy grants a 50% chance to poison them for 3sec | When around neck |

#### Obtaining

It is crafted (see below).

#### Crafting

{{recipes traveloptics:sigil_of_the_spider_sorcerer}}

## Too Many Bows

### Dead Eyes Pendant

[[item:too_many_bows:dead_eyes_pendant]] (Too Many Bows, rare)

Its tooltip says:

- A cold pendant that never warms against the skin.
- Some say it "finds" the gap in armor before you do.
- Grants a chance for bow shots to critically strike.
- Equip in a necklace slot.

| Stat | Value | When |
| --- | --- | --- |
| Bow Crit Chance | +0.08 | When around neck |

### Fletchers Talisman

[[item:too_many_bows:fletchers_talisman]] (Too Many Bows, uncommon)

Its tooltip says:

- A worn talisman wrapped in waxed cord.
- It doesn't make the bow stronger—only steadier in the hands.
-
- Equip in a necklace slot.
