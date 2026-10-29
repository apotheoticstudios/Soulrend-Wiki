---
{
  "title": "HF-BLADE",
  "aliases": ["efn:hf_blade"],
  "summary": "A katana from EpicFight Nightfall, part of the Path of the Samurai quest chapter.",
  "infobox": {
    "item": "efn:hf_blade",
    "rows": [
      ["Type", "Katana"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "14"],
      ["Attack speed", "1.20"]
    ]
  },
  "items": ["efn:hf_blade"]
}
---
<!-- sources:
  game-data/items.json (name, rarity, tooltip), game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/recipes.json (soulrend:equipment/katanas/efn/hf_blade, minecraft:kjs/efn_hf_ingot, efn:hf_ingot_b; soulrend:equipment/katanas/cataclysm/final_fractal_from_hf_blade)
  game-data/movesets.json (Epic Fight type efn:hf_blade, from jar:EpicFight Nightfall-3.4.2-all.jar)
  config/ftbquests/quests/chapters/path_of_the_samurai.snbt (task efn:hf_blade, quest 45D2912FEA827210)
  efn jar lang: item.efn.hf_blade*, item.efn.hf_ingot_b, advancement.efn.obtain_hf_blade.*, advancement.efn.toast.hf_blade (no skill.efn.hf_blade text exists)
  efn jar bytecode (javap): HfBladeItem.onPlayerJump / onLivingFall / onLivingKnockBack / onLivingUpdate (constants identical to HfMurasamaItem's), HfBladeInnate.StunTarget (Stun, Vertical Stop, Horizontal Stop, Slowness; 40 ticks), HfBladePassive
-->

**HF-BLADE** is a katana from EpicFight Nightfall. It is weapon 41 of 42 in [[items/weapons/path-of-the-samurai|Path of the Samurai]], a Pursuit of Mastery quest chapter. It is the upgrade of [[items/weapons/path-of-the-samurai/hf-murasama|HF-MURASAMA]] and hits much harder, 14 damage against 11, but it gives up armor negation (50% against 80%). It is also an ingredient in Soulrend's recipes for [[items/weapons/path-of-the-samurai/final-fractal|Final Fractal]].

## Obtaining

It is made at a [[item:minecraft:smithing_table]] with Soulrend's upgrade recipe. The base is an [[items/weapons/path-of-the-samurai/hf-murasama|HF-MURASAMA]], and both the template and the addition are an [[item:efn:hf_ingot_b]] (High-frequency Alloy-Re), so the recipe takes two. The upgrade keeps the base's enchantments, gems and affixes (see [[progression/prologue/jei-menu#Upgrading Gear|Upgrading Gear]]).

High-frequency Alloy-Re is made at a Smithing Table too, from a High-frequency Alloy with a Diamond as the template and a Nether Star as the addition ([[items/materials/act-iv-materials|Act IV Materials]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 14 |
| Attack Speed | 1.20 |
| Impact | 2.5 |
| Targets per swing | 9 |
| Armor Negation | 50% |
| Entity Reach | 3 |
| Enchantability | 30 |
| Fire resistant | Yes |

## Usage

Its tooltip says only "Let's Dance!", and the game gives its innate and passive skills no name or description. In code it works like HF-MURASAMA's: the same sheathed state, hit-stun and passive.

- Hits from its skill can stun a target: the skill's code gives the target Stun, Vertical Stop, Horizontal Stop and Slowness for 2 seconds.
- While you hold the sword, jumps carry you 0.2 higher than normal, you take no fall damage, you take no knockback and Levitation is removed.

The attacks are listed under [[#Moveset]].

## Moveset

In Epic Fight it is a tachi. Its default Two Handed style has a three-hit basic combo and an innate skill the game gives no name. It has one other style, shown below. It also has a passive skill.

{{moveset efn:hf_blade}}

## Crafting

{{recipes efn:hf_blade}}

## Used in

{{uses efn:hf_blade}}
