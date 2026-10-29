---
{
  "title": "Forlorn & Withered Demon",
  "summary": "Soulslike Weaponry's Nether spawns: Invading Forlorn in Forlorn armor, which never drop it, and the slow, hard-hitting Withered Demon.",
  "aliases": ["Invading Forlorn", "Forlorn (mob)", "Evil Forlorn", "Withered Demon"],
  "items": ["soulsweapons:evil_forlorn_spawn_egg", "soulsweapons:forlorn_spawn_egg", "soulsweapons:withered_demon_spawn_egg"],
  "infobox": {
    "item": "soulsweapons:withered_demon_spawn_egg",
    "model": ["soulsweapons:evil_forlorn", "soulsweapons:withered_demon", "soulsweapons:forlorn"],
    "rows": [
      ["ID", "`soulsweapons:evil_forlorn`, `soulsweapons:withered_demon`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "The player's level"],
      ["Location", "Every Nether biome"],
      { "heading": "Drops" },
      ["Withered Demon", "0–1 [[item:soulsweapons:demon_heart]] (player kill)"]
    ]
  }
}
---
<!-- sources:
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar data/soulsweapons/forge/biome_modifier (#minecraft:is_nether: evil_forlorn weight 15, withered_demon weight 20, groups of 1)
  config/soulsweapons/soulsweapons.json (can_evil_forlorn_spawn, can_withered_demon_spawn true; evil_forlorn_health 30, evil_forlorn_bonus_armor 0; forlorn_health 30; withered_demon_health 80, withered_demon_armor 2)
  mods/soulslike-weaponry-1.4.10-1.20.1-forge.jar EvilForlorn.createForlornAttributes (0.3 speed, 2 attack, 250 follow range), WitheredDemon.createDemonAttributes (12 attack, 1 knockback resistance, 2 attack knockback, 0.12 speed, 35 follow range)
  kubejs/server_scripts/progression/forlorn_drop.js (soulsweapons:forlorn and soulsweapons:evil_forlorn: drop chance 0 for head, chest, legs, feet)
  config/paxi/datapacks/soulrend_ef_mobpatches/data/soulsweapons/epicfight_mobpatch/{forlorn,evil_forlorn}.json (Epic Fight spear moveset; stun armor 10, max strikes 2)
  game-data/loot-tables.json soulsweapons:entities/withered_demon (Demon Heart 0-1, Looting +0-1, player kill); no tables for forlorn or evil_forlorn
  config/paxi/datapacks/soulrend_mob_leveling (no files: level = player level)
  calc: L40: health ×12.7, attack ×4.9, armor ×1.429; L100: ×30.7, ×10.9, ×2.089; L150: ×45.7, ×15.9, ×2.639
-->
Soulslike Weaponry adds two hostile mobs to the Nether. **Invading Forlorn** are armored warriors that fight with Epic Fight spear attacks and can track a player from very far away. **Withered Demons** are slow, heavily built brutes that hit very hard. Both appear once the Nether opens in [[progression/act-iii-into-the-flames|Act III]]; no quest asks for them.

## Spawning

| Mob | Where | Weight |
| --- | --- | --- |
| Invading Forlorn | Every Nether biome | 15 |
| Withered Demon | Every Nether biome | 20 |

Both spawn alone.

## Stats

Neither has a level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). Their health and armor come from Soulslike Weaponry's config. The table gives health / attack damage / armor.

| Mob | Base | Act II (40) | Act III (100) | Act III-b (150) |
| --- | --- | --- | --- | --- |
| Invading Forlorn | 30 HP / 2 / 0 | 381 HP / 9.8 / 0 | 921 HP / 21.8 / 0 | 1,371 HP / 31.8 / 0 |
| Withered Demon | 80 HP / 12 / 2 | 1,016 HP / 58.8 / 2.9 | 2,456 HP / 130.8 / 4.2 | 3,656 HP / 190.8 / 5.3 |

- **Invading Forlorn** move at 0.3 and track players from up to 250 blocks away. Their damage comes mostly from the weapon they carry; Soulrend gives them Epic Fight spear attacks with 10 stun armor.
- **Withered Demons** move slowly (0.12) but can't be knocked back and knock players far.

## Drops

| Mob | Drops |
| --- | --- |
| Invading Forlorn | Nothing: Soulrend's KubeJS script stops Forlorn from dropping the [[items/armor/agility-path/forlorn-armor\|Forlorn Armor]] they wear, and they have no loot table |
| Withered Demon | 0–1 [[item:soulsweapons:demon_heart]] on a player kill; Looting adds 0–1 |

> [!NOTE]
> The Forlorn armor rule covers both `soulsweapons:forlorn` and `soulsweapons:evil_forlorn`, so Forlorn Armor has to be crafted.
