---
{
  "title": "Frenzied Shade",
  "summary": "A ghost that rises when the Old Champion's Remains dies; it drops the Essence of Eventide that summons the Fallen Icon.",
  "aliases": ["Night Shade"],
  "items": ["soulsweapons:night_shade_spawn_egg"],
  "infobox": {
    "item": "soulsweapons:night_shade_spawn_egg",
    "model": "soulsweapons:night_shade",
    "rows": [
      ["ID", "`soulsweapons:night_shade`"],
      ["Act", "[[progression/act-ii-first-steps|Act II]]"],
      ["Level", "60–200 (at least 60)"],
      ["Health", "2,805 HP (level 60)"],
      ["Location", "Rises from the Old Champion's Remains"],
      { "heading": "Drops" },
      ["Guaranteed", "[[item:soulsweapons:lord_soul_dark]], [[item:soulsweapons:essence_of_eventide]]"]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_mob_leveling/data/soulsweapons/leveling_settings/entities/night_shade.json (starting_level 60, max_level 1000)
  config/soulsweapons/soulsweapons_boss_config.json frenzied_shade_* (health 150, armor 2, fire immune, inverted heal and harm, does not disable shields)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar NightShade.createBossAttributes (max health and armor from BossConfig, 10 attack damage, 0.3 movement speed, 65 follow range); NightShade$AttackStates (attacks)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar DraugrBoss.die (spawns the Frenzied Shade)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar data/soulsweapons/loot_tables/entities/night_shade.json (Lord Soul (dark), Essence of Eventide)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar AltarBlock (Essence of Eventide on an Old Moon Altar summons the Fallen Icon)
  config/soulrend_core/boss_damage.toml (not listed: no damage cap)
  config/autoleveling-common.toml [Attributes]
  config/ftbquests/quests/chapters/soulslike_champions.snbt "Defeat The Old Champion"
  calc: L60: health 150 × 18.7 = 2,805; attack 10 × 6.9 = 69; armor 2 × 1.649 = 3.3
        L100: health 150 × 30.7 = 4,605; attack 109; armor 4.2
        L200: health 150 × 60.7 = 9,105; attack 209; armor 6.4
-->
**Frenzied Shade** is a ghost that haunts the Champion's Grave. It rises when the [[Old Champion's Remains]] dies, so the two are fought back to back. Killing both completes the Defeat The Old Champion quest in the [[progression/side-chapters/soulslike-champions|Soulslike Champions]] chapter.

Its [[item:soulsweapons:essence_of_eventide]] is the item that summons the [[Fallen Icon]].

## Location

The Frenzied Shade doesn't spawn on its own. It appears where the Old Champion's Remains dies, at the Champion's Grave in taigas or at an Old Moon Altar where the champion was summoned.

## Stats

The Frenzied Shade has a level floor of 60: it takes the nearest player's Soulrend level, but never less than 60. See [[leveling/mob-levels|Mob Levels]].

| Stat | Base | Level 60 (floor) | Level 100 | Level 200 |
| --- | --- | --- | --- | --- |
| Health | 150 HP | **2,805 HP** (1,402.5 hearts) | 4,605 HP | 9,105 HP |
| Attack damage | 10 | **69** | 109 | 209 |
| Armor | 2 | **3.3** | 4.2 | 6.4 |
| Movement speed | 0.3 | 0.3 | 0.3 | 0.3 |
| Follow range | 65 blocks | | | |
| Damage cap | | None | None | None |

Its health and armor come from the Soulslike Weaponry boss config. It is immune to fire. Instant Health harms it and Instant Damage heals it.

## Attacks

| Attack | Notes |
| --- | --- |
| Big swipes | |
| Charge | |
| Area attack | |
| Duplicate | |
| Moonlight throw | |
| Shadow orbs | |

## Strategy

- **No damage cap.** Unlike the champion before it, the Shade can be burst down.
- **Its armor is low.** At 2 base armor, raw damage works well.
- **Shields work.** Unlike most Soulslike bosses, it doesn't disable shields.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:soulsweapons:lord_soul_dark]] | 1 | Always |
| [[item:soulsweapons:essence_of_eventide]] | 1 | Always |

Using the Essence of Eventide on an [[item:soulsweapons:altar_block]] summons the [[Fallen Icon]].

## Quests

**Defeat The Old Champion** ([[progression/side-chapters/soulslike-champions|Soulslike Champions]]) requires killing both the Old Champion's Remains and the Frenzied Shade, and holding the Lord Soul and the Essence of Eventide. Rewards: two rolls on the Flawed Gems reward table and one on the Rare Loot reward table.

> [!LORE] Defeat The Old Champion (Soulslike Champions)
> A powerful soul of a great champion and a powerful essence of a ghost. You have freed the dead and now they have fallen back to the earth to rest.
