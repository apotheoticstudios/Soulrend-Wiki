---
{
  "title": "Tremorzilla",
  "summary": "A level 400–440 radioactive dinosaur that hatches from a Tremorsaurus egg caught in a nuclear blast; no quest asks for it.",
  "items": ["alexscaves:spawn_egg_tremorzilla"],
  "infobox": {
    "item": "alexscaves:spawn_egg_tremorzilla",
    "model": "alexscaves:tremorzilla",
    "rows": [
      ["ID", "`alexscaves:tremorzilla`"],
      ["Level", "400–440"],
      ["Health", "60,350–66,350 HP"],
      ["Location", "Hatches from a Tremorzilla Egg"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:alexscaves:uranium]] ×20–40, [[item:alexscaves:uranium_shard]] ×10–20"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/alexscaves/leveling_settings/entities/tremorzilla.json (starting_level 400, max_level 440, random_level_bonus 40)
  mods/alexscaves-2.0.2.jar TremorzillaEntity.createAttributes (500 max health, 30 attack damage, 10 armor, 1.0 knockback resistance, 0.3 movement speed, 128 follow range); animation fields (scratches, tail swipes, stomps, bite, roars, breath); TAME_ATTEMPTS field; TremorzillaEntity.hurt (projectile damage × 0.35)
  mods/alexscaves-2.0.2.jar NuclearExplosionEntity (turns a Tremorsaurus Egg in the blast into a Tremorzilla Egg)
  mods/alexscaves-2.0.2.jar data/alexscaves/worldgen/biome/primordial_caves.json (Tremorsaurus spawns)
  config/alexscaves-general.toml (devastating_tremorzilla_beam true)
  mods/alexscaves-2.0.2.jar data/alexscaves/loot_tables/entities/tremorzilla.json
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/tremorzilla_additions.json (Verdant or Lightning Spellweave Ingot 2/9 each, 1-3)
  config/soulrend_core/boss_damage.toml (alexscaves:tremorzilla=20)
  config/autoleveling-common.toml [Attributes]
  calc: L400: health 500 × 120.7 = 60,350; attack 30 × 40.9 = 1,227; armor 10 × (1 + 0.011 × 399) = 53.9; cap 12,070 HP/s
        L440: health 500 × 132.7 = 66,350; attack 30 × 44.9 = 1,347; armor 10 × 5.829 = 58.3; cap 13,270 HP/s
-->
**Tremorzilla** is a giant radioactive dinosaur from Alex's Caves. It doesn't spawn on its own: it hatches from an egg created when a nuclear explosion hits a Tremorsaurus egg. No quest asks for it, but it is on Soulrend's boss damage list, and its level is 400 or more.

## Location

A nuclear explosion turns any [[item:alexscaves:tremorsaurus_egg]] caught in its blast into a [[item:alexscaves:tremorzilla_egg]], which hatches into a Tremorzilla. Tremorsaurus live in the Primordial Caves.

## Stats

Tremorzilla's level is at least 400, plus a random 0–40, up to 440 (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Level 400 | Level 440 |
| --- | --- | --- | --- |
| Health | 500 HP | **60,350 HP** (30,175 hearts) | 66,350 HP |
| Attack damage | 30 | **1,227** | 1,347 |
| Armor | 10 | **53.9** | 58.3 |
| Knockback resistance | 100% | 100% | 100% |
| Movement speed | 0.3 | 0.3 | 0.3 |
| Follow range | 128 blocks | | |
| Damage cap | | 20% per second (12,070 HP), at least 5 s | 20% per second (13,270 HP), at least 5 s |

Projectiles deal it only 35% of their damage.

## Attacks

| Attack | Notes |
| --- | --- |
| Left and right scratches | |
| Left and right tail swipes | |
| Left and right stomps | |
| Bite | |
| Roar | |
| Breath beam | In Soulrend the beam destroys blocks. |

<!-- TODO: attack conditions and cooldowns (TremorzillaEntity). -->

## Strategy

- **Avoid projectile builds.** Arrows and other projectiles lose 65% of their damage.
- **Expect terrain damage.** Its beam breaks blocks.
- **Sustained damage beats burst.** The damage cap blocks anything above 20% of its maximum health in a second.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:alexscaves:uranium]] | 20–40 | Always; Looting adds 0–3 |
| [[item:alexscaves:uranium_shard]] | 10–20 | Always; Looting adds 0–3 |
| [[item:traveloptics:verdant_spellweave_ingot]] | 1–3 | 2 in 9 |
| [[item:traveloptics:lightning_spellweave_ingot]] | 1–3 | 2 in 9 (instead of the Verdant ingot) |
