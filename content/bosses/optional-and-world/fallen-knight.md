---
{
  "title": "Fallen Knight",
  "summary": "A NightFall: Invade knight that guards the Ancient Church in the Past alongside the Scarlet Hunter.",
  "items": ["nightfall_invade:fallen_knight_spawn_egg"],
  "infobox": {
    "item": "nightfall_invade:fallen_knight_spawn_egg",
    "rows": [
      ["ID", "`nightfall_invade:fallen_knight`"],
      ["Level", "The player's level"],
      ["Health", "9,105 HP (level 200)"],
      ["Location", "Ancient Church, the Past"],
      { "heading": "Drops" },
      ["Chance", "[[item:minecraft:netherite_scrap]] ×0–3"]
    ]
  }
}
---
<!-- sources:
  mods/nightfall_invade-1.3.3.jar FallenKnight.createAttributes (150 max health, 1 attack damage, 10 armor, 5 armor toughness, 0.5 knockback resistance, 0.3 movement speed, 16 follow range; Epic Fight: 30 armor negation, 8 stun armor, 30 max stamina)
  mods/nightfall_invade-1.3.3.jar AncientChurch$Piece (spawns Fallen Knights, "church_knight"); structures/ancient_church_p1_2, p1_7, p1_8, p2_8 .nbt
  config/paxi/datapacks/soulrend_worldgen/data/nightfall_invade/worldgen/structure/ancient_church.json (biome soulrend:dead_wasteland in the Past)
  kubejs/server_scripts/dimension/past.js (the Fallen Knight is not one of the reskinned Past mobs)
  mods/nightfall_invade-1.3.3.jar data/nightfall_invade/loot_tables/entities/fallen_knight.json (Netherite Scrap, 0-3 rolls)
  config/paxi/datapacks/soulrend_mob_leveling (no file: level = player level)
  config/soulrend_core/boss_damage.toml (not listed)
  config/autoleveling-common.toml [Attributes]
  calc: L200: health 150 × 60.7 = 9,105; attack 1 × 20.9 = 20.9; armor 10 × 3.189 = 31.9
-->
**Fallen Knight** is an armored knight from NightFall: Invade. Fallen Knights guard the Ancient Church, the home of [[Ó Brolacháin, the Scarlet Hunter]], so players meet them in the Past during [[progression/act-v-duties|Act V]]. No quest requires killing one.

## Location

Fallen Knights stand in the Ancient Church (`nightfall_invade:ancient_church`), which Soulrend places only in the Dead Wasteland biome of the Past.

## Stats

The Fallen Knight has no level setting, so its level matches the Soulrend level of the nearest player. The column uses Act V's typical level, the player cap of 200 (see [[features/mobs-and-world/mob-levelling|Mob Levelling]]). Soulrend's Past script doesn't change its stats.

| Stat | Base | Level 200 |
| --- | --- | --- |
| Health | 150 HP | 9,105 HP |
| Attack damage | 1 | 20.9 |
| Armor | 10 | 31.9 |
| Armor toughness | 5 | 5 |
| Knockback resistance | 50% | 50% |
| Movement speed | 0.3 | 0.3 |
| Follow range | 16 blocks | |

It fights with Epic Fight animations, and its attacks ignore 30% of the target's armor.

## Drops

| Item | Count | Condition |
| --- | --- | --- |
| [[item:minecraft:netherite_scrap]] | 0–3 | Rolled 0–3 times |
