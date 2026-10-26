---
{
  "title": "Runic Sai",
  "summary": "A sai from Simply Swords, part of the Assassin's Armoury quest chapter.",
  "infobox": {
    "item": "simplyswords:runic_sai",
    "rows": [
      ["Type", "Sai"],
      ["Handling", "One Handed"],
      ["Rarity", "Rare"],
      ["Attack damage", "9.8"],
      ["Attack speed", "2.20"],
      ["Durability", "2,031"]
    ]
  },
  "items": ["simplyswords:runic_sai"]
}
---
<!-- sources:
  first pass from the game-data dumps (Obtaining, Stats, Crafting); Usage and Moveset researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (name, rarity, tooltip)
  game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/loot-tables.json (drops)
  game-data/recipes.json (crafting)
  game-data/movesets.json (Epic Fight type simplyswords:runic_sai, from jar:Simplyswords-Epicfied-pre3.0.jar)
  simplyswords jar: RunicSwordItem class (powers chosen in onCraftedBy and overrideOtherStackedOnMe), lang item.simplyswords.*sworditem.tooltip*
-->

**Runic Sai** is a sai from Simply Swords. It is weapon 25 of 50 in [[items/weapons/assassins-armoury|Assassin's Armoury]], a Pursuit of Mastery quest chapter.

## Obtaining

It is crafted (see [[#Crafting]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 9.8 |
| Attack Speed | 2.20 |
| Impact | 1.8 |
| Targets per swing | 3 |
| Armor Negation | 20% |
| Entity Reach | 3 |
| Durability | 2,031 |
| Enchantability | 25 |
| Fire resistant | Yes |

## Usage

It is a runic weapon. It starts unidentified ("Runic Power: ????") and gets a random **Runic Power** when it is crafted, or when it is clicked in the inventory. Several powers can also roll as a stronger **Greater** version, marked "Greater" in the tooltip.

| Runic Power | Effect |
| --- | --- |
| Freeze | Chance on hit to chill or freeze the target. |
| Wildfire | Chance on hit to set fire to every nearby entity of the same type as the target. |
| Slow | Chance on hit to slow the target for a while. |
| Swiftness | Chance on hit to raise the wielder's movement speed for a while. |
| Float | Chance on hit to reverse gravity on the target. |
| Zephyr | Chance on hit to raise the wielder's attack and movement speed. |
| Shielding | Chance on hit to give the wielder absorption. |
| Stoneskin | Chance on hit to raise the wielder's resistance at the cost of speed. |
| Trailblaze | Chance on hit to give the wielder speed and set them on fire. |
| Weaken | Chance on hit to slow and weaken the target. |
| Imbued | Chance on hit to deal extra magic damage, scaling with durability. |
| Pincushion | Extra damage for each arrow stuck in the wielder. |
| Unstable | Regularly gives the wielder random effects. |
| Active Defence | Regularly fires arrows at nearby enemies (uses arrows). |
| Frost Ward | Regularly fires slowing snowballs at all nearby enemies. |
| Momentum | Use it for a short burst of forward momentum. |
| Ward | Use it to sacrifice half of the current health for pulsing absorption, based on the health left, for 6 s. |
| Immolation | Use it for an aura that periodically damages the wielder and nearby enemies; the damage dealt scales with current health. |

## Moveset

In Epic Fight it is a sword. Its default One Handed style has a seven-hit basic combo and the innate skill Heart-Stabber. It has one other style, shown below. It also has a passive skill.

{{moveset simplyswords:runic_sai}}

## Crafting

{{recipes simplyswords:runic_sai}}

## Used in

{{uses simplyswords:runic_sai}}
