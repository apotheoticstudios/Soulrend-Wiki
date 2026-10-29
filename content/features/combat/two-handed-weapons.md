---
{
  "title": "Two-Handed Weapons",
  "summary": "350 weapons count as two-handed: with one in the main hand, an off-hand item gives no dual-wielding bonus.",
  "aliases": ["Two-Handed", "Two Handed", "Dual Wielding"],
  "icon": "simplyswords:netherite_greatsword"
}
---
<!-- sources:
  config/soulrend_tweaks-common.toml [two_handed_offhand_restriction] mode = "INERT" (INERT: the off-hand item can be held but grants no dual-wielding bonuses; KICK, unused, would remove it)
  mods/soulrend_tweaks-1.20.1-1.0.1.jar DualWieldingEntityPredicateMixin (Passive Skill Tree's DualWieldingEntityPredicate returns false while the main-hand item is in #soulrend_tweaks:two_handed_weapons)
  game-data/tags.json (#soulrend_tweaks:two_handed_weapons: 350 items, the same set as #soulrend:type_two_handed; largest groups simplyswords 92, dungeons_and_combat 34, epic_knights_ice_and_fire 22, magistuarmory 22, knavesneeds 21, soulsweapons 21)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/rogue_{3,8,10,12,85,89,94,95,156,158,163,164}.json (skilltree:dual_wielding conditions); warrior_147.json, warrior_148.json and the other Berserker nodes (has_item_equipped #soulrend_tweaks:two_handed_weapons)
-->
**Two-handed weapons** are the greatswords, great axes, spears, halberds and other heavy weapons that Soulrend marks as needing both hands. The rule is light: an item can still be carried in the off hand, but while a two-handed weapon is in the main hand the player doesn't count as **dual wielding**.

## How it works

- **Which weapons:** 350 weapons are in the `soulrend_tweaks:two_handed_weapons` tag. About a quarter are Simply Swords greatswords and halberds; the rest come from Dungeons and Combat, Epic Knights, Knaves' Needs, Soulslike Weaponry, Epic Fight and its add-ons, and others.
- **What changes:** skill tree bonuses that need dual wielding stop applying while the main hand holds one of these weapons. The off-hand item itself stays usable: a shield still blocks, a torch still lights.
- **Where it matters:** the Rogue tree's dual-wield nodes, mostly in the [[skill-trees/rogue/assassin|Assassin]] subclass, need dual wielding. The Warrior tree's [[skill-trees/warrior/berserker|Berserker]] subclass works the other way: its bonuses need a two-handed weapon in hand.

## Details

- **Same tag, two names.** `soulrend:type_two_handed` lists exactly the same 350 items; skill tree conditions use either.
- **Epic Fight's own two-handed style** (holding a weapon with both hands in its moveset) is separate: it decides the animations, not these bonuses. See [[epic-fight/weapon-types|Weapon Types]].

## Tips

- A Berserker build wants a two-handed weapon; a dual-wield Rogue build wants two one-handed ones. Mixing them wastes nodes.

## Related

- [[skill-trees/warrior/berserker|Berserker]]
- [[skill-trees/rogue/assassin|Assassin]]
- [[items/weapons|Weapons]]
