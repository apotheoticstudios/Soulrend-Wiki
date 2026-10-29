---
{
  "title": "Kusabimaru",
  "aliases": ["efn:kusabimaru"],
  "summary": "A katana from EpicFight Nightfall, part of the Path of the Samurai quest chapter.",
  "infobox": {
    "item": "efn:kusabimaru",
    "rows": [
      ["Type", "Katana"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "10"],
      ["Attack speed", "1.20"]
    ]
  },
  "items": ["efn:kusabimaru"]
}
---
<!-- sources:
  game-data/items.json (name, rarity, tooltip), game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/recipes.json (soulrend:equipment/katanas/efn/kusabimaru_from_*; soulrend:equipment/katanas/efn/hf_murasama_from_kusabimaru)
  game-data/movesets.json (Epic Fight type efn:kusabimaru, from jar:EpicFight Nightfall-3.4.2-all.jar; collider KUSABIMARU_ENHANCE_COLLIDER)
  config/ftbquests/quests/chapters/path_of_the_samurai.snbt (task efn:kusabimaru, quest 159E0E9224415781)
  config/paxi/datapacks/soulrend_recipes/data/soulrend/recipes/equipment/katanas/efn/kusabimaru_from_*.json (cataclysm:weapon_fusion)
  kubejs/server_scripts/dimension/past.js (Rotten Titan's weapon)
  efn jar lang: item.efn.kusabimaru, item.efn.kusabimaru.description1, skill.efn.kusabimaru.tooltip*
  efn jar bytecode (javap): KusabimaruItem.appendHoverText, KusabimaruInnate.getTooltipOnItem (efn_enhance line)
  docs/instance-guide.md (efn_enhance swaps Kusabimaru's preset)
-->

**Kusabimaru** is a katana from EpicFight Nightfall. It is weapon 37 of 42 in [[items/weapons/path-of-the-samurai|Path of the Samurai]], a Pursuit of Mastery quest chapter. It is the sword of the Divine Heir, a shinobi's blade whose skill, Ashina, gives it a different strike on the ground, in the air, on a dash and while sneaking. It is also the first step of the HF-MURASAMA line, which upgrades into [[items/weapons/path-of-the-samurai/hf-murasama|HF-MURASAMA]] and then [[items/weapons/path-of-the-samurai/hf-blade|HF-BLADE]].

## Obtaining

It is made at a [[item:cataclysm:mechanical_fusion_anvil]] by fusing one katana with a [[item:efn:hf_ingot]] (High-frequency Alloy). Any of these katanas works as the base:

- [[item:cdmoveset:katana]] (Katana, EpicFight-Resurrection)
- [[item:samurai_dynasty:katana_akaname]]
- [[item:samurai_dynasty:katana_jorogumo]]
- [[item:samurai_dynasty:katana_kitsune]]
- [[item:samurai_dynasty:katana_kitsune_blue]]
- [[item:samurai_dynasty:katana_oni]]

The alloy is crafted from diamonds, netherite ingots, witherite ingots and an Infused Breath (see [[items/materials/act-iv-materials|Act IV Materials]]). The undead Rotten Titans of the Past carry a Kusabimaru ([[enemies/act-v/rotten-soldiers|Rotten Soldiers]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 10 |
| Attack Speed | 1.20 |
| Impact | 2.5 |
| Targets per swing | 6 |
| Armor Negation | 30% |
| Entity Reach | 3 |
| Enchantability | 30 |
| Fire resistant | Yes |

## Usage

> [!LORE] Kusabimaru (item tooltip)
> The blade passed down by the Divine Heir of the Dragon's Heritage;
> The name 'Kusabimaru' carries a wish—even if a shinobi is fated to kill, they must never abandon the last shred of mercy in their heart...

Its innate skill is **Ashina**. The tooltip lists a strike for each situation: Dragon Flash on the ground, Sakura Dance in the air, Shadow Rush on a dash and Ichimonji: Double while sneaking. With Nightfall Enhance installed the tooltip also ends with a line about a further technique, "Sneak & NightFallArtKey & Skill have learnt: WU SHEN ULTIMATE TECHNIQUE THE THREE FORMS OF ZERO INTENT". It needs the Nightfall art key and a learned skill, and the text doesn't say which. The moves themselves are under [[#Moveset]].

## Moveset

In Epic Fight it is an uchigatana. Its default Two Handed style has a five-hit basic combo and the innate skill Ashina. Nightfall Enhance replaces Kusabimaru's moveset with its own, which is the one shown below.

{{moveset efn:kusabimaru}}

## Crafting

{{recipes efn:kusabimaru}}

## Used in

{{uses efn:kusabimaru}}
