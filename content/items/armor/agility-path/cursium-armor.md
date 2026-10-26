---
{
  "title": "Cursium Armor",
  "aliases": [
    "Cursium Helmet",
    "Cursium Chestplate",
    "Cursium Leggings",
    "Cursium Boots"
  ],
  "summary": "Armor set from cataclysm on the Agility Path.",
  "infobox": {
    "item": "cataclysm:cursium_chestplate",
    "rows": [
      ["Pieces", "4"],
      ["Armor (all pieces)", "41"],
      ["Toughness (all pieces)", "28"]
    ]
  },
  "items": [
    "cataclysm:cursium_helmet",
    "cataclysm:cursium_chestplate",
    "cataclysm:cursium_leggings",
    "cataclysm:cursium_boots"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage and Epic Fight researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (names, tooltips)
  game-data/item-stats.json (durability)
  game-data/loot-tables.json, game-data/recipes.json
  game-data/item-stats.json (epicfight:weight and epicfight:stun_armor modifiers, set by config/the_config_of_alexandria); epicfight jar: lang epicfight.tip.weight, epicfight.tip.stun_armor
  game-data/items.json (tooltips)
  cataclysm jar: lang item.cataclysm.cursium_*.desc*
-->

**Cursium Armor** is an armor set from cataclysm. It is set 9 of 17 on [[items/armor/agility-path|Agility Path]].

## Stats

Values are the tooltip modifiers of each piece. The full-set row adds them up.

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Crit Damage | Speed | Stun Armor | Weight | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:cataclysm:cursium_helmet]] | Helmet | +9 | +7 | +15% | +10% | +4.5% | +2.75 | +8 | 495 |
| [[item:cataclysm:cursium_chestplate]] | Chestplate | +13 | +7 | +15% | +10% | +4.5% | +3.25 | +12 | 720 |
| [[item:cataclysm:cursium_leggings]] | Leggings | +11 | +7 | +15% | +10% | +4.5% | +3.25 | +12 | 675 |
| [[item:cataclysm:cursium_boots]] | Boots | +8 | +7 | +15% | +10% | +4.5% | +2.75 | +8 | 585 |
| **Full set** |  | **+41** | **+28** | **+60%** | **+40%** | **+18%** | **+12** | **+40** |  |

## Usage

Each Cataclysm cursium piece has its own ability:

- **Helmet, Ghost Vision:** pressing C makes living entities behind walls nearby glow.
- **Chestplate, Undead Revive:** on death the wearer is revived with 5 health and is invincible for 5 s. Afterwards they carry a 6-minute debuff during which they can't be revived again.
- **Leggings, Ghost Dodge:** a small chance to ignore an attack, higher against projectiles.
- **Boots, Ghostly Weightless:** less fall damage, plus a back step on a key. The tooltip shows that key as "Not Bound", so it has no default binding in Soulrend.

## Epic Fight

Together, its 4 pieces add **40 Weight** and **12 Stun Armor** in Epic Fight (per piece in [[#Stats]]). In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Obtaining

Every piece is crafted (see [[#Crafting]]).

## Crafting

{{recipes cataclysm:cursium_helmet}}

{{recipes cataclysm:cursium_chestplate}}

{{recipes cataclysm:cursium_leggings}}

{{recipes cataclysm:cursium_boots}}
