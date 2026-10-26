---
{
  "title": "Marium's Soulslike Weaponry Armor",
  "aliases": [
    "Arkenplate",
    "Crown of Chaos",
    "Helm of Chaos",
    "Cape of Chaos",
    "Infused Arkenplate",
    "Infused Hallowheart",
    "Hallowheart"
  ],
  "summary": "Marium's Soulslike Weaponry Armor: 7 armor pieces and their stats.",
  "items": [
    "soulsweapons:arkenplate",
    "soulsweapons:chaos_crown",
    "soulsweapons:chaos_helmet",
    "soulsweapons:chaos_robes",
    "soulsweapons:enhanced_arkenplate",
    "soulsweapons:enhanced_withered_chest",
    "soulsweapons:withered_chest"
  ]
}
---
<!-- sources:
  first pass from the game-data dumps (stats, obtaining, crafting); Usage and Epic Fight researched 2026-10-25
  content/_items-outline.md (page list, groups and quest order)
  game-data/items.json (tooltips)
  game-data/item-stats.json (armor slot, durability)
  game-data/item-stats.json (epicfight:weight and epicfight:stun_armor modifiers, set by config/the_config_of_alexandria); epicfight jar: lang epicfight.tip.weight, epicfight.tip.stun_armor
  soulsweapons jar: Arkenplate, EnhancedArkenplate, ChaosCrown, ChaosRobes, Hallowheart, EnhancedHallowheart classes; lang tooltip.soulsweapons.unbreakable*, aftershock*, mirror*, effect_reversal*, cleansing_artifact*, corrupt_ground*, unceasing*, infectious*, fire_immune*, exalt*
  config/soulsweapons/soulsweapons.json (arkenplate_shockwave_damage 6, arkenplate_shockwave_cooldown 200, arkenplate_mirror_trigger_percent 0.5, chaos_crown_flip_effect_cooldown 300)
-->

**Marium's Soulslike Weaponry Armor** lists 7 armor pieces. Values are the tooltip modifiers of each piece.

## Usage

Each Soulslike Weaponry piece has its own abilities (tooltip under Left Alt):

- **Arkenplate:** Iron Stands Eternal (the ability key gives Resistance and Absorption), Aftershock (taking damage at low health sets off an explosion that affects mobs hit; 6 damage in Soulrend, 10 s cooldown) and Unbreakable (resistances at low health).
- **Enhanced Arkenplate:** the same, plus Mirror (projectiles bounce off below 50% health).
- **Chaos Crown:** Luck, immunity to Decay, and Hex of Reversal (a harmful effect on the wearer flips into its opposite, shorter and weaker; Regeneration if there is no opposite; 15 s cooldown).
- **Chaos Robes:** immunity to Decay, and Corruption (toggle: withers nearby grass and dirt for a short time and applies Wither to nearby non-player entities every 2 s).
- **Hallowheart:** immunity to Wither, Unceasing (Life Leach, healing continuously while the current target has a damage-over-time effect) and Infectious (taking damage with Life Leach active sets the attacker on fire and gives it Wither).
- **Enhanced Hallowheart:** the same, plus permanent Fire Protection (Unburnable) and Exalt (Regeneration while on fire; missing health raises damage and attack speed).
- **Chaos Helmet:** no ability.

## Epic Fight

The Stun Armor and Weight columns are Epic Fight stats. In Epic Fight's words, "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", and "Stun Armor extends the time between stuns".

## Marium's Soulslike Weaponry

| Piece | Slot | Armor | Armor Toughness | Knockback Resistance | Luck | Stun Armor | Weight | Bleed Buildup Resistance | Bleed Damage Resistance | Posture Loss Buildup Resistance | Durability |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [[item:soulsweapons:chaos_crown]] | Helmet | +1 |  |  | +1 | +0.8 | +4 |  |  |  | 400 |
| [[item:soulsweapons:chaos_helmet]] | Helmet | +5 | +4 | +20% | +1 | +2.5 | +10 | +60 | +40 |  | 500 |
| [[item:soulsweapons:arkenplate]] | Chestplate | +10 | +4 | +20% |  | +6.5 | +25 | +100 | +60 |  | 700 |
| [[item:soulsweapons:chaos_robes]] | Chestplate | +4 |  |  |  | +1 | +4 |  |  |  | 600 |
| [[item:soulsweapons:enhanced_arkenplate]] | Chestplate | +10 | +4 | +20% |  | +7 | +28 | +100 | +60 |  | 700 |
| [[item:soulsweapons:enhanced_withered_chest]] | Chestplate | +10 | +4 | +20% |  | +7 | +28 | +40 |  | +25 | 700 |
| [[item:soulsweapons:withered_chest]] | Chestplate | +10 | +4 | +20% |  | +6.5 | +25 | +40 |  | +25 | 700 |
