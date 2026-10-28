---
{
  "title": "Corrupted Champion",
  "summary": "The Graveyard's Lich at level 300–310, summoned in the Lich Prison with a Sculk Transmitter; the final boss of Act III-b.",
  "aliases": ["Lich (Graveyard)", "The Lich"],
  "items": ["graveyard:lich_spawn_egg"],
  "infobox": {
    "item": "graveyard:lich_spawn_egg",
    "model": "graveyard:lich",
    "rows": [
      ["ID", "`graveyard:lich`"],
      ["Act", "[[progression/act-iii-b-deeper-and-darker|Act III-b]]"],
      ["Level", "300–310"],
      ["Health", "36,280–37,480 HP"],
      ["Location", "Lich Prison, frozen and deep oceans"],
      ["Summon", "[[item:deeperdarker:sculk_transmitter]] on the Altar"],
      { "heading": "Drops" },
      ["Guaranteed", "One of five bone staffs"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/graveyard/leveling_settings/entities/lich.json (starting_level 300, max_level 310, random_level_bonus 10)
  mods/The_Graveyard_3.1_(FORGE)_for_1.20.1.jar LichEntity.createLichAttributes (max health, attack damage, armor and armor toughness from the corrupted_champion config entry; 25 follow range; 1.0 knockback resistance); animations: melee, corpse spell, shoot skull, summon, conjure fang, phase 2 and 3 starts, stunned, crawl
  config/graveyard/the-graveyard-3.0-config.json5 corrupted_champion (healthInCastingPhase 400, healthInHuntingPhase 200, damageCastingPhase 30, damageHuntingPhaseAddition 40, armor 14, armorToughness 12, speedInHuntPhase 0.15, durationHuntingPhase 800 ticks, maxAmountSkullsInShootSkullSpell 5, maxSummonedMobs 30, maxGroupSizeSummonedMobs 5, isMultiphaseFight true, isInvulnerableDuringSpells true, cooldownCorpseSpell 400, cooldownTeleportPlayerAndHeal 600, cooldownLevitationSpell 400, playerTeleportYOffset -15); lich_prison enabled
  kubejs/server_scripts/progression/graveyard.js (Sculk Transmitter on graveyard:altar spawns the Lich 1.5 blocks above the altar unless one is within 50 blocks horizontally and 5 vertically; uses up one transmitter; "The dead stir...")
  mods/The_Graveyard_3.1_(FORGE)_for_1.20.1.jar data/graveyard/worldgen/structure/lich_prison.json and tags/worldgen/biome/has_structure/lich_prison.json (deep frozen ocean, frozen ocean, deep ocean)
  mods/The_Graveyard_3.1_(FORGE)_for_1.20.1.jar data/graveyard/loot_tables/entities/lich.json (one of five bone staffs)
  config/soulrend_core/boss_damage.toml (not listed: no damage cap)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/act_35.snbt (Sculk Transmitter, Lich Prison, Defeat Corrupted Champion, staff quests)
  calc: L300: health 400 × (1 + 0.3 × 299) = 36,280; attack 30 × (1 + 0.1 × 299) = 927; armor 14 × (1 + 0.011 × 299) = 60.0
        L310: health 400 × 93.7 = 37,480; attack 30 × 31.9 = 957; armor 14 × 4.399 = 61.6
-->
**Corrupted Champion** is the lich of The Graveyard mod, sealed in the Lich Prison under the ocean. It is the final boss of the optional [[progression/act-iii-b-deeper-and-darker|Act III-b]], and Soulrend summons it with a Sculk Transmitter from the Deeper and Darker mod. At level 300 or more, it is far above any player's level.

## Location

The Lich Prison (`graveyard:lich_prison`) generates in Deep Frozen Oceans, Frozen Oceans and Deep Oceans. It holds the [[item:graveyard:altar]].

Using a [[item:deeperdarker:sculk_transmitter]] on the Altar summons the Corrupted Champion above it, with the message "The dead stir...". The transmitter is used up. Only one can be summoned at a time: the Altar refuses while another Corrupted Champion is within 50 blocks. See [[features/mobs-and-world/lich-summoning|Lich Summoning]].

## Stats

The Corrupted Champion's level is at least 300, plus a random 0–10, up to 310 (see [[leveling/mob-levels|Mob Levels]]). Its base stats come from The Graveyard's config.

| Stat | Base | Level 300 | Level 310 |
| --- | --- | --- | --- |
| Health | 400 HP | **36,280 HP** (18,140 hearts) | 37,480 HP |
| Attack damage | 30 | **927** | 957 |
| Armor | 14 | **60.0** | 61.6 |
| Armor toughness | 12 | 12 | 12 |
| Knockback resistance | 100% | 100% | 100% |
| Follow range | 25 blocks | 25 blocks | 25 blocks |
| Damage cap | | None | None |

## Attacks

The fight has three phases. In the spell-casting phase the Champion stays in place and casts; in the hunting phase it crawls after its target (speed 0.15) for up to 40 s, and its attacks deal 40 more base damage.

| Attack | Notes |
| --- | --- |
| Melee | |
| Shoot skulls | Up to 5 skulls per cast. |
| Summon | Raises undead in groups of up to 5, up to 30 at a time. |
| Falling corpses | Cooldown 20 s. |
| Levitation | Cooldown 20 s. |
| Teleport player and heal | Teleports its target 15 blocks down and heals itself. Cooldown 30 s. |
| Conjure fangs | |

It is invulnerable while it casts spells.

<!-- TODO: phase thresholds (LichEntity PHASE fields). -->

## Strategy

- **Hit it between spells.** Damage does nothing while it is casting.
- **Thin out the summons.** It can keep up to 30 undead on the field.
- **No damage cap.** Unlike most late bosses, it can be burst down when it is vulnerable.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| One of [[item:graveyard:white_bone_staff]], [[item:graveyard:black_bone_staff]], [[item:graveyard:red_bone_staff]], [[item:graveyard:cyan_bone_staff]] or [[item:graveyard:purple_bone_staff]] | 1 | Always, 1 in 5 each |

## Quests

The [[progression/act-iii-b-deeper-and-darker|Act III-b]] chain runs: Deeper and Darker, Ancient Temple, then a quest for the [[item:deeperdarker:sculk_transmitter]] ("Used to summon..."; rewards: a roll on the Rare Loot and the Chipped Gems reward tables), then **Lich Prison** (find the structure; reward: a roll on the Common Loot reward table).

**Defeat Corrupted Champion** requires killing it. Rewards:

- a roll on the Flawed Gems reward table
- a roll on the Rare Loot reward table
- 5 XP levels

It opens one quest per bone staff (3 XP levels each) and Act III Deeper and Darker – Completed (a roll on the Perfect Gems reward table). See [[progression/act-iii-b-deeper-and-darker/defeat-corrupted-champion|Defeat Corrupted Champion]].

> [!LORE] Defeat Corrupted Champion (Act III-b)
> Legends speak of a champion who stood above all others.
>
> Now, only a corrupted shell remains. Driven by madness and empowered by darkness, the fallen warrior commands an endless tide of lesser foes to fight in its stead.
>
> Cut through the horde, stand your ground, and bring an end to the Champion's torment.
