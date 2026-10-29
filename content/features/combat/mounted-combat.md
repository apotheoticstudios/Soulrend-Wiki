---
{
  "title": "Mounted Combat",
  "summary": "Riding any mount gives the Mounted effect, which Ranger skill tree nodes use for arrow damage and stamina bonuses.",
  "aliases": ["Mounted", "Mounted Effect"],
  "icon": "minecraft:saddle"
}
---
<!-- sources:
  kubejs/startup_scripts/mounted.js (effect kubejs:mounted, "Mounted", no attribute modifiers of its own)
  kubejs/server_scripts/minor_features/mounted.js (every 20 ticks, a player who isPassenger() gets Mounted for 40 ticks, no particles)
  config/paxi/datapacks/soulrend_skilltree/data/skilltree/skills/ranger_4, ranger_66-74, ranger_147.json (bonuses conditioned on kubejs:mounted)
  content/skill-trees/ranger/core/endurance.md (+4% Arrow Damage per path node, +50% hub, +20% Stamina Regen leaf; +86% Arrow Damage total)
-->
**Mounted** is a status effect Soulrend gives every player who is riding something: a horse, a dragon, a boat or any other mount. On its own it does nothing; it exists so skill tree nodes can give bonuses that only apply in the saddle.

## How it works

- Once a second, a player riding anything gets **Mounted** for 2 s, so it stays on while they ride and fades 1–2 s after they get off.
- The effect has no particles and no stats of its own.

## Details

The Ranger skill tree uses it. The [[skill-trees/ranger/core/endurance|Endurance]] spoke of the Ranger core gives, while Mounted:

- +4% Arrow Damage per path node and +50% on its hub, +86% in total;
- +20% Stamina Regen on one leaf.

## Related

- [[skill-trees/ranger|Ranger skill tree]]
- [[items/armor/mount-and-pet-armor|Mount & Pet Armor]]
