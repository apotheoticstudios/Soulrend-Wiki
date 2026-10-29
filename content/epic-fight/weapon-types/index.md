---
{
  "title": "Weapon Types",
  "category": "Epic Fight",
  "order": 2,
  "summary": "How Epic Fight decides a weapon's moveset: weapon types, styles, combos, dash and jump attacks, guards and innate skills.",
  "aliases": ["Movesets", "Moveset", "Weapon Categories", "Weapon Styles"],
  "icon": "epicfight:iron_longsword"
}
---
<!-- sources:
  game-data/movesets.json (built by tools/lib/movesets.mjs from the Epic Fight add-ons' preset classes, datapack weapon types and config/paxi/datapacks/soulrend_ef_capabilities; 260 types used by items in 55 categories; labels from lang)
  config/paxi/datapacks/soulrend_ef_capabilities/ (Soulrend's item capabilities and its own soulrend_weapon_types)
  config/epicfightx.toml (overwrite = true: Epic Fight Extra replaces Epic Fight's built-in types); docs/instance-guide.md (Epic Fight movesets and weapon abilities)
  mods/epic-fight-20.14.17-mc1.20.1-forge.jar lang (key.epicfight.attack, key.epicfight.guard, epicfight.tip.two_hand_weapon)
  config/defaultoptions/keybindings.txt (attack and innate on the left mouse button, guard right mouse, dodge Left Alt)
-->
Every weapon in Soulrend has an Epic Fight **weapon type**: the moveset that decides how it swings, what its dash and jump attacks look like, how it guards and which **innate skill** it has. Weapons that share a type fight the same way, whatever they look like. Each weapon's page shows its moveset in a table.

## How it works

A weapon type has one or more **styles**, and each style has:

| Part | What it is |
| --- | --- |
| **Combo** | The chain of basic attacks, one per click of the attack key (left mouse). Stopping resets the chain. |
| **Dash attack** | The attack used while sprinting. |
| **Jump attack** | The attack used in the air. |
| **Guard** | The animation used while guarding (right mouse), if a Guard skill is learned (see [[epic-fight/dodging-and-parrying\|Dodging & Parrying]]). |
| **Innate skill** | The weapon's special move (see [[epic-fight/innate-skills\|Innate Skills]]). |

**Styles** change the moveset depending on how the weapon is held. The common ones are **One Handed** and **Two Handed**; many types switch to their one-handed style when something is held in the off hand. **Mount** is used while riding. Some types add their own stances, such as Epic Fight Extra's longsword **Guard Stance**.

The type also sets what the weapon does to enemies: Impact (how long hits stun), Armor Negation and how many enemies one swing can hit (see [[epic-fight/weight-and-stuns\|Weight & Stuns]]).

For example, Epic Fight's longsword:

{{moveset type=epicfight:longsword}}

## Details

- **Categories and types.** Types are grouped into **categories**, the names the game shows (Longsword, Tachi, Spear…). One category can hold many registered types: Soulrend's items use 260 types in 55 categories. Each category below has its own page listing its types, innate skills and weapons.
- **Who sets them.** Epic Fight and its add-ons (Epic Fight Extra, Weapons of Miracles and WoM Plus, Nightfall, Dawnday, Resurrection, Awaken and others) register the types. Soulrend's own datapack assigns about 830 items to them and adds a few types of its own.
- **Epic Fight Extra replaces the built-in types**, so Epic Fight's sword, longsword, tachi and the rest use Extra's animations.
- **Two-handed weapons** can't be used in the off hand in Epic Fight. Soulrend's separate [[features/combat/two-handed-weapons|two-handed rule]] decides dual-wield bonuses.
- **Tools** have types too: axes, pickaxes, shovels and hoes all have movesets.

## Weapon types

Weapons counts include every item of that category, tools and shields too.

| Weapon type | Weapons | Registered types | Styles | Innate skills |
| --- | --- | --- | --- | --- |
| [[epic-fight/weapon-types/amethyst-rapier\|Amethyst Rapier]] | 1 | 1 | Guard Stance | 1 |
| [[epic-fight/weapon-types/antitheus\|Antitheus]] | 2 | 2 | Mount, Guard Stance, Two Handed | 1 |
| [[epic-fight/weapon-types/axe\|Axe]] | 145 | 4 | Mount, One Handed, Two Handed | 4 |
| [[epic-fight/weapon-types/bats\|Bats]] | 2 | 1 | Guard Stance, Two Handed | 2 |
| [[epic-fight/weapon-types/blackstar\|Blackstar]] | 1 | 1 | Two Handed | 1 |
| [[epic-fight/weapon-types/bow\|Bow]] | 49 | 1 |  | 0 |
| [[epic-fight/weapon-types/claws\|Claws]] | 1 | 1 | One Handed, Two Handed | 2 |
| [[epic-fight/weapon-types/crossbow\|Crossbow]] | 4 | 1 |  | 0 |
| [[epic-fight/weapon-types/cursed-bow\|Cursed Bow]] | 1 | 1 |  | 0 |
| [[epic-fight/weapon-types/dagger\|Dagger]] | 106 | 8 | Mount, Guard Stance, One Handed, Two Handed | 10 |
| [[epic-fight/weapon-types/dual-tachi\|Dual Tachi]] | 11 | 1 | One Handed, Two Handed | 2 |
| [[epic-fight/weapon-types/efn-yamato\|Efn Yamato]] | 4 | 1 | Two Handed | 1 |
| [[epic-fight/weapon-types/enderblaster\|Enderblaster]] | 1 | 1 | Mount, One Handed, Two Handed | 2 |
| [[epic-fight/weapon-types/enderite-rapier\|Enderite Rapier]] | 1 | 1 | Guard Stance | 1 |
| [[epic-fight/weapon-types/enhanced-greatsword\|Enhanced Greatsword]] | 6 | 1 | One Handed, Two Handed | 2 |
| [[epic-fight/weapon-types/enhanced-longsword\|Enhanced Longsword]] | 14 | 3 | Guard Stance, One Handed, Two Handed | 5 |
| [[epic-fight/weapon-types/enhanced-one-handed-sword\|Enhanced One-handed Sword]] | 18 | 4 | Mount, One Handed, Two Handed | 8 |
| [[epic-fight/weapon-types/enhanced-spear\|Enhanced Spear]] | 17 | 3 | Mount, One Handed, Two Handed | 3 |
| [[epic-fight/weapon-types/enhanced-tachi\|Enhanced Tachi]] | 10 | 1 | Mount, One Handed, Two Handed | 2 |
| [[epic-fight/weapon-types/evil-tachi\|Evil Tachi]] | 1 | 1 | Two Handed | 1 |
| [[epic-fight/weapon-types/fist\|Fist]] | 16 | 5 | Mount, One Handed, Two Handed | 4 |
| [[epic-fight/weapon-types/florett\|Florett]] | 5 | 1 | One Handed, Two Handed | 2 |
| [[epic-fight/weapon-types/great-scythe\|Great Scythe]] | 1 | 1 | Two Handed | 1 |
| [[epic-fight/weapon-types/greataxes\|Greataxes]] | 4 | 1 | Guard Stance, Two Handed | 2 |
| [[epic-fight/weapon-types/greatsword\|Greatsword]] | 169 | 39 | Charged Common, Common, Modao, Mount, Guard Stance, One Handed, Two Handed | 27 |
| [[epic-fight/weapon-types/hoe\|Hoe]] | 30 | 1 | Mount, One Handed | 0 |
| [[epic-fight/weapon-types/hollow-longsword\|Hollow Longsword]] | 1 | 1 | One Handed, Two Handed | 2 |
| [[epic-fight/weapon-types/horus-fang\|Horus Fang]] | 1 | 1 | Two Handed | 1 |
| [[epic-fight/weapon-types/iron-fist\|Iron Fist]] | 2 | 2 | One Handed, Two Handed | 2 |
| [[epic-fight/weapon-types/katana\|Katana]] | 2 | 1 | Mount, Sheathed, Two Handed | 1 |
| [[epic-fight/weapon-types/light-greatswords\|Light Greatswords]] | 1 | 1 | Guard Stance, One Handed, Two Handed | 3 |
| [[epic-fight/weapon-types/longsword\|Longsword]] | 165 | 35 | Two Handed：Warriors-BroadBlade, Two Handed：CrescentMoon, Mount, Guard Stance, One Handed, Sheathed, Two Handed | 33 |
| [[epic-fight/weapon-types/morningstar\|Morningstar]] | 1 | 1 | Two Handed | 1 |
| [[epic-fight/weapon-types/napoleon\|Napoleon]] | 1 | 1 | Mount, Two Handed | 1 |
| [[epic-fight/weapon-types/nova\|Nova]] | 1 | 1 | One Handed, Two Handed | 2 |
| [[epic-fight/weapon-types/oceanite-rapier\|Oceanite Rapier]] | 1 | 1 | Guard Stance | 1 |
| [[epic-fight/weapon-types/phantom-katana\|Phantom Katana]] | 1 | 1 | Sheathed, Two Handed | 1 |
| [[epic-fight/weapon-types/pickaxe\|Pickaxe]] | 40 | 1 | Mount, One Handed | 1 |
| [[epic-fight/weapon-types/poleblade\|Poleblade]] | 1 | 1 | Two Handed | 1 |
| [[epic-fight/weapon-types/rapier\|Rapier]] | 5 | 1 | Guard Stance | 1 |
| [[epic-fight/weapon-types/ritual-daggers\|Ritual Daggers]] | 2 | 2 | One Handed, Two Handed | 2 |
| [[epic-fight/weapon-types/s-dagger\|S Dagger]] | 4 | 2 | Mount, One Handed, Two Handed | 4 |
| [[epic-fight/weapon-types/shield\|Shield]] | 169 | 3 | One Handed, Two Handed | 1 |
| [[epic-fight/weapon-types/shovel\|Shovel]] | 29 | 1 | Mount, One Handed | 0 |
| [[epic-fight/weapon-types/sickles\|Sickles]] | 5 | 1 | One Handed, Two Handed | 2 |
| [[epic-fight/weapon-types/spear\|Spear]] | 248 | 44 | Mount, Guard Stance, One Handed, Scythe, Two Handed | 29 |
| [[epic-fight/weapon-types/staff\|Staff]] | 18 | 1 | One Handed, Two Handed | 1 |
| [[epic-fight/weapon-types/sword\|Sword]] | 228 | 29 | Common, Mount, Guard Stance, One Handed, Two Handed | 29 |
| [[epic-fight/weapon-types/tachi\|Tachi]] | 56 | 23 | Mount, Guard Stance, One Handed, Sheathed, Two Handed | 26 |
| [[epic-fight/weapon-types/torment\|Torment]] | 3 | 3 | Mount, Guard Stance, Two Handed | 1 |
| [[epic-fight/weapon-types/trident\|Trident]] | 9 | 1 |  | 0 |
| [[epic-fight/weapon-types/uchigatana\|Uchigatana]] | 32 | 11 | Common, Katana, Katana Sheath, Mount, Guard Stance, One Handed, Sheathed, Two Handed | 12 |
| [[epic-fight/weapon-types/witherite-rapier\|Witherite Rapier]] | 2 | 1 | Guard Stance | 1 |
| [[epic-fight/weapon-types/wrath-of-the-desert\|Wrath Of The Desert]] | 1 | 1 |  | 1 |
| [[epic-fight/weapon-types/yamato\|Yamato]] | 2 | 2 | Yamato | 1 |

## Related

- [[epic-fight/innate-skills|Innate Skills]]
- [[items/weapons|Weapons]]
