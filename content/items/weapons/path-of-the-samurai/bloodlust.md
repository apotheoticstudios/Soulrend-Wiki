---
{
  "title": "Bloodlust",
  "aliases": ["Bloody Killing", "efn:air_tachi"],
  "summary": "A katana from EpicFight Nightfall, part of the Path of the Samurai quest chapter.",
  "infobox": {
    "item": "efn:air_tachi",
    "rows": [
      ["Type", "Katana"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "19"],
      ["Attack speed", "1.20"],
      ["Durability", "2,031"]
    ]
  },
  "items": ["efn:air_tachi"]
}
---
<!-- sources:
  game-data/items.json (name, rarity, tooltip), game-data/item-stats.json (durability, enchantability, Epic Fight styles)
  game-data/recipes.json (soulrend:equipment/katanas/efn/air_tachi)
  game-data/movesets.json (Epic Fight type efn:bloodlust, from jar:EpicFight Nightfall-3.4.2-all.jar)
  config/ftbquests/quests/chapters/path_of_the_samurai.snbt (task efn:air_tachi, quest 162878576AB5A9C2)
  efn jar lang: item.efn.air_tachi, item.efn.bloodlust.description1, skill.efn.bloodlust.tooltip*, tooltip.efn.keybind_warning, advancement.efn.obtain_air_tachi.*
  efn jar bytecode (javap): BloodlustEnhance.onEffectAdded (max(15% of max health, 4) on activation), BloodlustEnhance$BloodlustEffect.applyEffectTick (max(5% of max health, 1.5) every 20 ticks; neither can take the last 1 HP), applyModifiers/safeAddModifier (five attribute modifiers, MULTIPLY_TOTAL 0.2 = +20% each), AirTachiItem.appendHoverText (keybind warning when Invincible's key 1 is not Left Click)
  loot-tables.json dungeons_and_combat:{entities/high_priest,chests/weak_cult} (Fleshy Cloth)
-->

**Bloodlust** is a katana from EpicFight Nightfall. It is weapon 17 of 42 in [[items/weapons/path-of-the-samurai|Path of the Samurai]], a Pursuit of Mastery quest chapter. A cursed tachi that pays for its power in health, it hits harder the more of its wielder's blood it spends. Its in-game name is Bloodlust, but its item id is `efn:air_tachi`, and the game's advancement for obtaining it is called "Bloody Killing". It has a twin, [[items/weapons/path-of-the-samurai/carnivorous-osteofrenzy|Carnivorous Osteofrenzy]], with the same stats and skill.

## Obtaining

It is made at a [[item:minecraft:smithing_table]] with Soulrend's upgrade recipe. The base is a [[item:epicfight:netherite_tachi]], the template a [[item:soulsweapons:crimson_ingot]] and the addition [[item:dungeons_and_combat:fleshy_cloth]]. The upgrade keeps the base's enchantments, gems and affixes (see [[progression/prologue/jei-menu#Upgrading Gear|Upgrading Gear]]).

Crimson Ingots are smelted from [[item:soulsweapons:demon_chunk]]. Fleshy Cloth drops from the [[bosses/act-iii/high-priest|High Priest]] and can be found in the chests of the weak cult structures ([[enemies/act-iii/cult-of-the-weak|Cult of the Weak]]).

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 19 |
| Attack Speed | 1.20 |
| Impact | 2.5 |
| Targets per swing | 6 |
| Armor Negation | 30% |
| Entity Reach | 3 |
| Durability | 2,031 |
| Enchantability | 30 |
| Fire resistant | Yes |

## Usage

Its tooltip reads "A skeletal hand clutches the cursed blade shrouded in blood rust..." and hides its innate skill, **BLOODRUST**, behind Left Shift. The skill's text says: "Awaken the blade with bloodshed. Each slash carries sanguine power at the cost of continuous HP drain. Reactivate to end this state."

Activating the skill gives the Bloodlust effect, and the effect does two things:

- **Cost.** Starting it costs 15% of your maximum health (at least 4 HP), and every second afterwards costs 5% of it (at least 1.5 HP). Neither payment can kill you; the effect stops short of your last 1 HP.
- **Bonus.** While it lasts, your attack damage, Epic Fight armor negation, impact, stun armor and stamina regeneration are each raised by 20%.

Reactivate the skill to end the effect early. If Invincible's key 1 isn't bound to Left Click, the tooltip adds a warning telling you to set it. The rest of its skill is described under [[#Moveset]].

## Moveset

In Epic Fight it is a tachi. Its default Two Handed style has a five-hit basic combo and the innate skill BLOODRUST. It also has a passive skill.

{{moveset efn:air_tachi}}

## Crafting

{{recipes efn:air_tachi}}

## Used in

{{uses efn:air_tachi}}
