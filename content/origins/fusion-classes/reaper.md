---
{
  "title": "Reaper",
  "summary": "Scythe and blood-magic hybrid: +25% scythe damage, +25% Blood Spell Power, heals on every kill; weak to holy magic.",
  "icon": "dungeons_and_combat:bloody_cult_helmet",
  "infobox": {
    "item": "dungeons_and_combat:bloody_cult_helmet",
    "itemRows": false,
    "rows": [
      [
        "ID",
        "`classes:reaper`"
      ],
      [
        "Tab",
        "Fusion"
      ],
      [
        "Impact",
        "Medium"
      ]
    ]
  }
}
---
<!-- sources:
  config/paxi/datapacks/soulrend_reforged/data/classes/origins/reaper.json (overrides the soulrend_origins_classes version)
  config/paxi/datapacks/soulrend_origins_classes/data/classes/powers/reaper/blood.json (+0.25 blood spell power), magic.json (+0.2 max mana), holy_debuff.json (holy magic resist -0.25)
  config/paxi/datapacks/soulrend_reforged/data/classes/powers/reaper/lifesteel.json, weapons.json (+25% with soulrend:class_reaper in the main hand)
  mods/soulrend_origins-1.2-1.20.1.jar SoulrendOrigins (soulrend_reaper_heal_on_kill: heals 0.05 x max health)
  config/paxi/datapacks/soulrend_origins_classes/data/classes/functions/reaper.mcfunction (starting kit)
  config/soulrend_core/common.toml classCategories (selector tabs)
  config/paxi/resourcepacks/soulrend_lang/assets/{origins,medievalorigins}/lang/en_us.json (power names)
  game-data/tags.json (soulrend:class_reaper: 45 scythes and sickles)
-->
The **Reaper** fights with a scythe and blood magic, and every kill restores some of its health. Holy magic hurts it more than others.

## Powers

| Power | Effect |
| --- | --- |
| Scythe Mastery | +25% damage with a scythe or sickle in the main hand (the 45 items in `soulrend:class_reaper`). |
| Blood Magic | +25% Blood Spell Power. |
| Magic Affinity | +20% max mana. |
| Soul Reap | Each kill heals 5% of max health. |
| Basic Items | Chainmail armor, a Soulbound [[item:immersive_weathering:ice_sickle]] with Unbreaking V, a Soulbound [[item:irons_spellbooks:copper_spell_book]] with [[items/magic/spells/blood-spells#Blood Needles\|Blood Needles]] II and [[items/magic/spells/blood-spells#Blood Step\|Blood Step]] I, and 8 Steak. |

## Drawbacks

| Drawback | Effect |
| --- | --- |
| Holy Weakness | −25% Holy Magic Resistance. |

## Scythes

{{items tag=soulrend:class_reaper}}

## Playstyle

The Reaper mixes melee and blood spells: Blood Step closes gaps, Blood Needles hits from range, and Soul Reap heals through a crowd as it falls.

## Pairs well with

- [[origins/races/keres|Keres]]: +100% Blood Spell Power, life steal and Souls.
- [[origins/races/plague-victim|Plague Victim]]: Soul Reap heals without Regeneration, which the Plague Victim can't use.
