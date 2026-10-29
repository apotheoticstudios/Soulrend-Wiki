---
{
  "title": "HF-MURASAMA",
  "aliases": ["HF Murasama", "Murasama", "efn:hf_murasama"],
  "summary": "A katana from EpicFight Nightfall, part of the Path of the Samurai quest chapter and the reward for defeating Arterius.",
  "infobox": {
    "item": "efn:hf_murasama",
    "rows": [
      ["Type", "Katana"],
      ["Handling", "Two Handed"],
      ["Rarity", "Epic"],
      ["Attack damage", "11"],
      ["Attack speed", "1.20"]
    ]
  },
  "items": ["efn:hf_murasama"]
}
---
<!-- sources:
  game-data/items.json (name, rarity, tooltip), game-data/item-stats.json (enchantability, Epic Fight styles)
  game-data/recipes.json (soulrend:equipment/katanas/efn/hf_murasama_from_{kusabimaru,satsujin}, hf_murasama_blade, hf_murasama_sheath, minecraft:kjs/efn_hf_ingot)
  game-data/movesets.json (Epic Fight type efn:murasama, from jar:EpicFight Nightfall-3.4.2-all.jar)
  config/ftbquests/quests/chapters/path_of_the_samurai.snbt (task efn:hf_murasama, quest 257B73C1A0F5BB4C)
  config/ftbquests/quests/chapters/duties.snbt (reward efn:hf_murasama, line 280; quest 768483E97E697374, see progression/act-v-duties/defeat-arterius)
  efn jar lang: item.efn.hf_murasama*, skill.efn.murasama.tooltip*, skill.efn.murasama_parry*, effect.efn.murasama_sheath, advancement.efn.obtain_hf_murasama.*
  efn jar bytecode (javap): HfMurasamaItem.onPlayerJump (+0.2 vertical velocity), onLivingFall (cancelled), onLivingKnockBack (cancelled), onLivingUpdate (removes Levitation, MobEffects.f_19620_); MurasamaInnate.StunTarget (Stun, Vertical Stop, Horizontal Stop and Slowness, 40 ticks); MurasamaPassive (double jump, double-tap sprint, sheath state)
-->

**HF-MURASAMA** is a katana from EpicFight Nightfall. It is weapon 38 of 42 in [[items/weapons/path-of-the-samurai|Path of the Samurai]], a Pursuit of Mastery quest chapter, and it is also the reward for killing [[bosses/act-v/arterius-the-last-watcher|Arterius]] in Act V. Its skill, Rodrigues Shinkage-ryu, is a full combo system with sheathed attacks and a Blade Mode, and the sword itself makes the wielder light and immovable. It upgrades into [[items/weapons/path-of-the-samurai/hf-blade|HF-BLADE]].

## Obtaining

There are two ways to get it.

- **Quest reward.** [[progression/act-v-duties/defeat-arterius|Defeat The Last Watcher Arterius]] gives one, with 50 XP levels and a roll on the Perfect Gems table.
- **Crafting.** At a [[item:minecraft:smithing_table]] with Soulrend's upgrade recipe, the base is a [[items/weapons/path-of-the-samurai/kusabimaru|Kusabimaru]] or a [[items/weapons/path-of-the-samurai/satsujin|Satsujin]], the template an [[item:efn:hf_murasama_blade]] and the addition an [[item:efn:hf_murasama_sheath]]. The upgrade keeps the base's enchantments, gems and affixes (see [[progression/prologue/jei-menu#Upgrading Gear|Upgrading Gear]]).

The blade and sheath are both crafted in a crafting table, and both need [[item:apotheotic_additions:esoteric_material]], which the Decaying King drops in the Past ([[progression/act-v-duties/esoteric-material|Esoteric Material]]):

| Part | Ingredients |
| --- | --- |
| [[item:efn:hf_murasama_blade]] | 2 [[item:efn:hf_ingot]], 2 blocks of netherite, 1 Esoteric Material |
| [[item:efn:hf_murasama_sheath]] | 5 blocks of netherite, 1 [[item:astral_calamity_extras:bloodcrest_ingot]], 1 Esoteric Material |

## Stats

| Stat | Value |
| --- | --- |
| Attack Damage | 11 |
| Attack Speed | 1.20 |
| Impact | 2.5 |
| Targets per swing | 9 |
| Armor Negation | 80% |
| Entity Reach | 3 |
| Enchantability | 30 |
| Fire resistant | Yes |

## Usage

Its tooltip says only "Let's Dance!" and hides its innate skill behind Left Shift. The skill, **Rodrigues Shinkage-ryu**, lists a long set of attacks: a basic chain, quick-draw chains, charged slashes, a sprint attack and counters, plus a second set made from the **Sheath** state. The skill text in [[#Moveset]] shows them all. Hits from the skill can stun a target: its code gives the target Stun, Vertical Stop, Horizontal Stop and Slowness for 2 seconds. The sword also has an enhanced parry, "Parry-MURASAMA", and a Charging Sheath effect for the sheathed state.

While you hold the sword:

- Jumps carry you 0.2 higher than normal.
- You take no fall damage.
- You take no knockback.
- Levitation is removed.

Its passive skill handles the sheathed state, a double jump and a double-tap sprint input. The game gives it no text.

## Moveset

In Epic Fight it is a tachi. Its default Two Handed style has a three-hit basic combo and the innate skill Rodrigues Shinkage-ryu. It has one other style, shown below. It also has a passive skill.

{{moveset efn:hf_murasama}}

## Crafting

{{recipes efn:hf_murasama}}

## Used in

{{uses efn:hf_murasama}}

## Quests

| Quest | Task | Reward |
| --- | --- | --- |
| Path of the Samurai: HF-MURASAMA | Have it in your inventory | None |
| [[progression/act-v-duties/defeat-arterius\|Defeat The Last Watcher Arterius]] | Kill Arterius | 50 XP levels, a roll on Perfect Gems, HF-MURASAMA |
