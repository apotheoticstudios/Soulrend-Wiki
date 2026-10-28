---
{
  "title": "Forlorn Hollows Mobs",
  "summary": "The Alex's Caves mobs of the dark Forlorn Hollows dimension: Corrodents and Vespers, with Underzealots and the Forsaken.",
  "aliases": ["Underzealot", "Corrodent", "Vesper", "Gloomoth"],
  "items": ["alexscaves:underzealot_spawn_egg", "alexscaves:corrodent_spawn_egg", "alexscaves:vesper_spawn_egg", "alexscaves:gloomoth_spawn_egg"],
  "infobox": {
    "item": "alexscaves:vesper_spawn_egg",
    "model": ["alexscaves:underzealot", "alexscaves:corrodent", "alexscaves:vesper", "alexscaves:gloomoth"],
    "rows": [
      ["ID", "`alexscaves:underzealot`, `corrodent`, `vesper`, `gloomoth`"],
      ["Act", "[[progression/act-iii-into-the-flames|Act III]]"],
      ["Level", "The player's level (Gloomoth never levels)"],
      ["Location", "Forlorn Hollows dimension"],
      { "heading": "Drops" },
      ["Common", "[[item:alexscaves:dark_tatters]], [[item:alexscaves:corrodent_teeth]], [[item:alexscaves:vesper_wing]]"]
    ]
  }
}
---
<!-- sources:
  mods/alexscaves-2.0.2.jar data/alexscaves/worldgen/biome/forlorn_hollows.json (underzealot 100, corrodent 90, vesper 60, gloomoth 20)
  config/alexscaves_biome_generation/forlorn_hollows.json (disabled_completely); Dimensions of Alex's Caves dimension/forlorn_hollows.json
  config/ftbquests/quests/chapters/the_caverns.snbt (kill alexscaves:forsaken)
  mods/alexscaves-2.0.2.jar UnderzealotEntity (20 health, 4 attack; only UnderzealotHurtByTargetGoal), CorrodentEntity (16, 3, 2 armor; targets players), VesperEntity (16, 3, 52 follow range; targets players and Gloomoths beneath it), GloomothEntity (4 health; no target goals)
  config/autoleveling-common.toml [Mobs] (alexscaves:gloomoth never levels)
  game-data/loot-tables.json alexscaves:entities/{underzealot,corrodent,vesper,gloomoth}
  calc: L100: health ×30.7, attack ×10.9, armor ×2.089; L150: ×45.7, ×15.9, ×2.639
-->
The **Forlorn Hollows** are Alex's Caves' dark, ruined cave biome. In Soulrend they are their own dimension, reached with a Dimensions of Alex's Caves key in [[progression/act-iii-into-the-flames|Act III]]'s The Caverns chapter. The [[Forsaken]], a quest target, has its own page.

## Spawning

| Mob | Weight | Attacks players |
| --- | --- | --- |
| Underzealot | 100 | Only when attacked |
| Corrodent | 90 | Yes (burrows) |
| Vesper | 60 | Yes, swooping on players below it |
| Gloomoth | 20 | No |

Unlike the other cave dimensions, no vanilla monsters spawn here.

## Stats

All but the Gloomoth have no level setting, so their level matches the Soulrend level of the nearest player (see [[leveling/mob-levels|Mob Levels]]). The table gives health / attack damage / armor.

| Mob | Base | Act III (100) | Act III-b (150) |
| --- | --- | --- | --- |
| Underzealot | 20 HP / 4 / 0 | 614 HP / 43.6 / 0 | 914 HP / 63.6 / 0 |
| Corrodent | 16 HP / 3 / 2 | 491.2 HP / 32.7 / 4.2 | 731.2 HP / 47.7 / 5.3 |
| Vesper | 16 HP / 3 / 0 | 491.2 HP / 32.7 / 0 | 731.2 HP / 47.7 / 0 |

The Gloomoth (4 HP) never levels.

## Drops

| Mob | Drops |
| --- | --- |
| Underzealot | 0–2 [[item:alexscaves:dark_tatters]]; [[item:alexscaves:desolate_dagger]] at 2.5% on a player kill |
| Corrodent | 0–1 [[item:alexscaves:corrodent_teeth]]; 0–2 [[item:minecraft:coarse_dirt]] |
| Vesper | 0–2 [[item:alexscaves:guano]]; 0–1 [[item:alexscaves:vesper_wing]] |
| Gloomoth | 0–2 [[item:alexscaves:moth_dust]] |
