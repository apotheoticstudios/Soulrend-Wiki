---
{
  "title": "Caelestis",
  "summary": "A sword from Simply Swords, part of the Bladesworn Battallion quest chapter.",
  "infobox": {
    "item": "simplyswords:caelestis",
    "rows": [
      ["Type", "Sword"],
      ["Handling", "One Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "17.66"],
      ["Attack speed", "0.99"]
    ]
  },
  "items": ["simplyswords:caelestis"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type simplyswords:caelestis, from jar:Simplyswords-Epicfied-pre3.0.jar)
  game-data/items.json (tooltip)
  simplyswords jar: CaelestisSwordItem (lang item.simplyswords.caelestissworditem.*)
  config/simplyswords_main/unique_effects.json5 (astralShiftChance 5, astralShiftDuration 100, astralShiftCooldown 420, astralShiftDamageMax 300)
-->

**Caelestis** is a sword from Simply Swords. It is weapon 43 of 50 in [[items/weapons/bladesworn-battallion|Bladesworn Battallion]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

The default column is the tooltip value (Epic Fight one-hand style). The two-handed column applies the weapon's two-handed style modifiers instead.

| Stat | Default | Two-handed style |
| --- | --- | --- |
| Attack Damage | 17.66 | 17.66 |
| Attack Speed | 0.99 | 1.18 |
| Impact | 2.6 | 6.6 |
| Targets per swing | 16 | 66 |
| Armor Negation | 66.6% | 66.6% |
| Entity Reach | 3 | 3 |
| Enchantability | 30 |  |
| Fire resistant | Yes |  |

## Usage

- **Astral Shift** (unique effect): while it is held, the wielder has a 5% chance to avoid incoming damage completely.
- **On right-click:** the wielder steps into the astral plane and is immune to damage for 5 s. On leaving it, they release an explosion whose area damage depends on the damage negated in the meantime (at most 300). Cooldown 21 s.

## Moveset

In Epic Fight it is a greatsword. Its default One Handed style has a nine-hit basic combo and the innate skill Void Slash!. It has one other style, shown below. It also has a passive skill.

{{moveset simplyswords:caelestis}}

## Crafting

{{recipes simplyswords:caelestis}}

## Used in

{{uses simplyswords:caelestis}}
