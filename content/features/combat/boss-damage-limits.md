---
{
  "title": "Boss Damage Limits",
  "summary": "33 bosses can lose at most a set share of max HP per second (Cataclysm 5%, the Nightwarden 4%, others 20%), shared by every attacker.",
  "aliases": ["Damage Cap", "Boss Damage Cap", "Damage Budget"],
  "icon": "minecraft:shield"
}
---
<!-- sources:
  config/soulrend_core/boss_damage.toml ([limits] windowTicks 20; bosses list: 8 Cataclysm bosses at 5, traveloptics:the_nightwarden at 4, 24 others at 20; comments: rolling window, shared by every player, pet, projectile and spell, final damage after armor and resistances, /kill never limited, listed Cataclysm bosses lose their built-in per-hit cap)
  mods/soulrend_core-2.7-1.20.1.jar combat/BossDamageLimit, BossDamageRules, mixin/cataclysm/BossNativeDamageCapMixin
  docs/instance-guide.md (Arterius and the Scarlet Hunter have Nightfall's own caps in config/nightfall_invade-common.toml)
  calc: shortest kill = 100 / percent seconds: 5% -> 20 s, 4% -> 25 s, 20% -> 5 s
-->
**Boss damage limits** stop big bosses from being deleted in a few hits. Soulrend Core gives each listed boss a **damage budget**: in any one second it can lose at most a set percentage of its maximum health, however many players, pets, projectiles and spells are hitting it. Damage beyond the budget is blocked.

## How it works

| Bosses | Max health lost per second | Shortest possible kill |
| --- | --- | --- |
| The eight Cataclysm bosses: [[Ancient Remnant]], [[Ender Guardian]], [[Ignis]], [[Maledictus]], [[Netherite Monstrosity]], [[Scylla]], [[The Harbinger]], [[The Leviathan]] | 5% | 20 s |
| The Nightwarden (Traveloptics) | 4% | 25 s |
| Every other listed boss (below) | 20% | 5 s |

The 20% group is the Ender Dragon, the Wither and the Warden; Alex's Caves' Forsaken, Hullbreaker, Luxtructosaurus and Tremorzilla; Bosses'Rise's Sandworm; Dungeons and Combat's High Priest, Kamath, Sunleia and the Grave Watcher; Iron's Spellbooks' Dead King and Fire Boss; Mowzie's Mobs' [[Frostmaw]] and Umvuthi; Soulslike Weaponry's Decaying King, Chaos Monarch, Day Stalker, Draugr, Moonknight, Night Prowler and Returning Knight; and Traveloptics' Enraged Dead King. Each boss page gives its limit in the stats table.

## Details

- **The budget is shared.** A second player or a pet doesn't raise it; more attackers only fill it faster.
- **It counts final damage**, after armor and resistances.
- **It rolls.** The window is the last second (20 ticks), not a fixed clock second.
- **Cataclysm's own per-hit cap is replaced** by this budget for the eight listed Cataclysm bosses.
- **`/kill` ignores it.**
- **Not every boss is listed.** Arterius and the Scarlet Hunter use Nightfall's own per-hit caps instead.

## Tips

- Burst builds hit the cap first. Against the 5% bosses, steady damage and survival matter more than single huge hits.

## Related

- [[bosses|Bosses]]
- [[leveling/mob-levels|Mob Levels]]
