---
{
  "title": "Companion Protection",
  "summary": "Your pets, summons and their projectiles can't hurt you or your teammates, and you can't hurt them.",
  "aliases": ["Friendly Fire", "Pet Protection", "Summon Protection"],
  "icon": "minecraft:bone"
}
---
<!-- sources:
  mods/soulrend_core-2.7-1.20.1.jar combat/CompanionProtection (companions: OwnableEntity, Iron's IMagicSummon, Vex with an owner, and projectiles they fire, remembered under soulrend_core:companion_projectile; isFriendly: at least one side is a companion and both have the same owner, or the owners are isAlliedTo each other, or the owners are in the same FTB Teams team via TeamCompat.sameTeam), SoulrendCombatEvents (blocks friendly damage), mixin/combat/ProjectileMixin
-->
**Companion protection** is a Soulrend Core rule against friendly fire involving companions. A **companion** is anything a player owns: tamed animals and dragons, Iron's Spellbooks summons, vexes with an owner, and the projectiles any of these fire.

## How it works

Damage is blocked when one side of a hit is a companion and the two sides are on the same side:

- **A player and their own companions** can't hurt each other.
- **Two companions with the same owner** can't hurt each other.
- **Companions of teammates** can't hurt the other player or their companions, when the owners are in the same FTB Teams party or the same vanilla scoreboard team.

Projectiles count as their shooter: an arrow from a summoned archer is treated like the archer.

## Details

- **Players hitting players** aren't affected; only hits where a companion is involved are.
- **Teams** come from FTB Teams parties (see [[features/multiplayer/teams-and-claims|Teams & Claims]]) or from scoreboard teams, such as Valarian Conquest factions.

## Tips

- Area spells and sweeping attacks are safe to use around your own summons and pets.

## Related

- [[items/magic/familiars|Familiars (Items)]]
- [[features/multiplayer/teams-and-claims|Teams & Claims]]
