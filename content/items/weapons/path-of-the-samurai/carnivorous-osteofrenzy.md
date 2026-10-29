---
{
  "title": "Carnivorous Osteofrenzy",
  "aliases": ["Osteofrenzy", "Feast of Bones", "efn:co_tachi"],
  "summary": "A katana from EpicFight Nightfall, part of the Path of the Samurai quest chapter.",
  "infobox": {
    "item": "efn:co_tachi",
    "rows": [
      ["Type", "Katana"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "19"],
      ["Attack speed", "1.20"]
    ]
  },
  "items": ["efn:co_tachi"]
}
---
<!-- sources:
  game-data/items.json (name, rarity, tooltip), game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/recipes.json (soulrend:equipment/katanas/efn/co_tachi)
  game-data/movesets.json (Epic Fight type efn:bloodlust, from jar:EpicFight Nightfall-3.4.2-all.jar)
  config/ftbquests/quests/chapters/path_of_the_samurai.snbt (task efn:co_tachi, quest 39B5907859A04F46)
  efn jar lang: item.efn.co_tachi, item.efn.bloodlust.description1, skill.efn.bloodlust.tooltip*, advancement.efn.obtain_co_tachi.*
  efn jar bytecode (javap): BloodlustEnhance and BloodlustEffect (see items/weapons/path-of-the-samurai/bloodlust), CoTachiItem
  loot-tables.json dungeons_and_combat:{entities/failure,entities/high_priest,entities/the_aberrator,chests/weak_cult} (Ritual Bone)
-->

**Carnivorous Osteofrenzy** is a katana from EpicFight Nightfall. It is weapon 18 of 42 in [[items/weapons/path-of-the-samurai|Path of the Samurai]], a Pursuit of Mastery quest chapter. It is the bone-themed sibling of [[items/weapons/path-of-the-samurai/bloodlust|Bloodlust]]: the stats, tooltip and innate skill are identical, and only the recipe differs. Its advancement calls it "the steel-forged evolution of Bloodfury, where bones celebrate their gruesome banquet". Its item id is `efn:co_tachi`.

## Obtaining

It is made at a [[item:minecraft:smithing_table]] with Soulrend's upgrade recipe. The base is a [[item:epicfight:netherite_tachi]], the template a [[item:soulsweapons:crimson_ingot]] and the addition a [[item:dungeons_and_combat:ritual_bone]]. The upgrade keeps the base's enchantments, gems and affixes (see [[progression/prologue/jei-menu#Upgrading Gear|Upgrading Gear]]).

Crimson Ingots are smelted from [[item:soulsweapons:demon_chunk]]. Ritual Bones drop from the [[bosses/act-iii/high-priest|High Priest]], from the Failure and from [[bosses/optional-and-world/dungeons-and-combat-minibosses|The Aberrator]], and appear in the chests of the weak cult structures ([[enemies/act-iii/cult-of-the-weak|Cult of the Weak]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 19 |
| Attack Speed | 1.20 |
| Impact | 2.5 |
| Targets per swing | 6 |
| Armor Negation | 30% |
| Entity Reach | 3 |
| Enchantability | 30 |
| Fire resistant | Yes |

## Usage

Its tooltip reads "A skeletal hand clutches the cursed blade shrouded in blood rust..." and hides its innate skill, **BLOODRUST**, behind Left Shift. It is the same skill as on Bloodlust: activating it gives the Bloodlust effect, which costs 15% of your maximum health (at least 4 HP) to start and 5% of it (at least 1.5 HP) every second afterwards, never taking your last 1 HP, in return for +20% attack damage, Epic Fight armor negation, impact, stun armor and stamina regeneration. See [[items/weapons/path-of-the-samurai/bloodlust#Usage|Bloodlust]] for the details, and [[#Moveset]] for the attacks.

## Moveset

In Epic Fight it is a tachi. Its default Two Handed style has a five-hit basic combo and the innate skill BLOODRUST. It also has a passive skill.

{{moveset efn:co_tachi}}

## Crafting

{{recipes efn:co_tachi}}

## Used in

{{uses efn:co_tachi}}
