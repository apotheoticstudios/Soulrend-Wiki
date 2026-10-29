---
{
  "title": "Forsaken",
  "summary": "A level 400–440 beast on the bridges of the Forlorn Hollows that fires sonic blasts.",
  "items": ["alexscaves:spawn_egg_forsaken"],
  "infobox": {
    "item": "alexscaves:spawn_egg_forsaken",
    "model": "alexscaves:forsaken",
    "rows": [
      ["ID", "`alexscaves:forsaken`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "400–440"],
      ["Health", "30,175–33,175 HP"],
      ["Location", "Forlorn Hollows"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:alexscaves:pure_darkness]] ×7–12"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/alexscaves/leveling_settings/entities/forsaken.json (starting_level 400, max_level 440, random_level_bonus 40)
  mods/alexscaves-2.0.2.jar ForsakenEntity.createAttributes (250 max health, 10 attack damage, 0.6 knockback resistance, 0.25 movement speed, 64 follow range); animation fields (bite, left/right slash, ground smash, sonic attack, sonic blast, pick up, leap, summon)
  mods/alexscaves-2.0.2.jar ForsakenEntity.hurt (Sonic Boom damage is ignored and charges its sonic attack; damage from golems × 0.5)
  mods/alexscaves-2.0.2.jar ForlornBridgeStructurePiece (places the Forsaken)
  mods/alexscaves-2.0.2.jar data/alexscaves/loot_tables/entities/forsaken.json (Pure Darkness 7-12)
  config/paxi/datapacks/soulrend_loot/data/traveloptics/loot_tables/entities/forsaken_additions_new.json (scroll 90%: The Forgotten Beast; added by traveloptics' global loot modifier)
  config/soulrend_core/boss_damage.toml (alexscaves:forsaken=20)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/the_caverns.snbt (Pagan Round Medallion, Forlorn Hollows, Defeat Forsaken); act_iii__into_the_flames.snbt "The Caverns"
  calc: L400: health 250 × (1 + 0.3 × 399) = 30,175; attack 10 × (1 + 0.1 × 399) = 409; cap 6,035 HP/s
        L440: health 250 × 132.7 = 33,175; attack 10 × 44.9 = 449; cap 6,635 HP/s
-->
**Forsaken** is the beast that guards the bridges of the Forlorn Hollows, one of the cave biomes of Alex's Caves. It is a boss of [[progression/side-chapters/fabled-realms|The Caverns]] chapter, which is linked from [[progression/act-iii-into-the-flames|Act III]], and its level of 400 or more puts it far above any player.

## Location

The Forsaken waits on the bridges of the Forlorn Hollows. Soulrend reaches the Forlorn Hollows through a dimension: the [[item:alex_caves_dimensions:forlorn_hollows_key]] key teleports the player there (see [[items/progression-keys/cave-dimension-keys|Cave Dimension Keys]]).

## Stats

The Forsaken's level is at least 400, plus a random 0–40, up to 440 (see [[leveling/mob-levels|Mob Levels]]).

| Stat | Base | Level 400 | Level 440 |
| --- | --- | --- | --- |
| Health | 250 HP | **30,175 HP** (15,087.5 hearts) | 33,175 HP |
| Attack damage | 10 | **409** | 449 |
| Armor | 0 | 0 | 0 |
| Knockback resistance | 60% | 60% | 60% |
| Movement speed | 0.25 | 0.25 | 0.25 |
| Follow range | 64 blocks | | |
| Damage cap | | 20% per second (6,035 HP), at least 5 s | 20% per second (6,635 HP), at least 5 s |

Sonic Boom damage (the Warden's attack) doesn't hurt it; it charges the Forsaken's own sonic attack instead. Golems deal only half damage to it.

## Attacks

| Attack | Notes |
| --- | --- |
| Bite | |
| Left and right slashes | |
| Ground smash | |
| Pick up | Grabs a target. |
| Leap | |
| Sonic attack and sonic blast | |
| Summon | |

<!-- TODO: attack conditions and cooldowns (ForsakenAttackGoal). -->

## Strategy

- **It has no armor.** All of its defense is its health pool.
- **Sustained damage beats burst.** The damage cap blocks anything above 20% of its maximum health in a second.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:alexscaves:pure_darkness]] | 7–12 | Always |
| [[item:irons_spellbooks:scroll]] (The Forgotten Beast) | 1 | 90% |

## Quests

The Caverns chapter is opened from Act III. **Pagan Round Medallion** asks for the Forlorn Hollows key, and **Forlorn Hollows** requires entering that dimension (reward: 3 XP levels).

**Defeat Forsaken** requires killing it. Rewards: a roll on the Flawed Gems reward table and 10 XP levels.
