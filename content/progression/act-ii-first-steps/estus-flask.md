---
{
  "title": "Estus Flask",
  "summary": "Act II quest that gives three Estus Flasks and opens the Bosses' Rise and Dead King branches; also covers the Huge Estus Flask quests.",
  "aliases": ["Huge Estus Flask (Quest)", "Blood Vial (Quest)"],
  "infobox": {
    "item": "dungeons_and_combat:estus_flask",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/act-ii-first-steps|Act II – First Steps]]"],
      ["Requires", "[[progression/act-ii-first-steps/the-real-journey-begins|The Real Journey Begins]]"],
      ["Task", "Checkmark"],
      ["Rewards", "3 [[item:dungeons_and_combat:estus_flask]]"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/act_2.snbt quest 37865BAA1CC25C44 (checkmark "Estus Flask", description, 3 Estus Flasks)
  config/ftbquests/quests/chapters/act_2.snbt Blood Vial quest (task irons_spellbooks:blood_vial, reward 1 iron nugget), Huge Estus Flask quest (subtitle "Upgraded version of Estus Flask", task dungeons_and_combat:crimson_flask, reward 2 Huge Estus Flasks)
  config/ftbquests/quests/chapters/act_2.snbt (the three Bosses' Rise structure quests and Find Structure: Catacombs depend on Estus Flask)
  kubejs/server_scripts/minor_features/estus_flask_healing.js (Estus Flask heals 25% of max health, Huge Estus Flask 75%)
  kubejs/server_scripts/magic/dacxoptics_recipes.js (kubejs:estus_flask), kubejs/server_scripts/recipes/misc_utility.js (Huge Estus Flask recipe, makes 2)
-->
The **Estus Flask** quest is a checkmark in [[progression/act-ii-first-steps|Act II]] that hands out three [[item:dungeons_and_combat:estus_flask]]s, Soulrend's main healing item. It opens the act's Bosses' Rise branch and the Catacombs, and a short side line leads from it to the stronger Huge Estus Flask.

## Requirements

- [[progression/act-ii-first-steps/the-real-journey-begins|The Real Journey Begins]]

## Objectives

Click the checkmark task, **Estus Flask**.

> [!LORE] Estus Flask (Act II)
> The Estus Flask carries a fragment of that hope, mending wounds and allowing weary travelers to continue their journey.

## Rewards

- 3 [[item:dungeons_and_combat:estus_flask]]

Drinking an Estus Flask heals 25% of maximum health. See [[features/combat/estus-and-crimson-flasks|Estus and Crimson Flasks]].

## Huge Estus Flask

Two more quests follow:

| Quest | Task | Rewards |
| --- | --- | --- |
| Blood Vial | Have a [[item:irons_spellbooks:blood_vial]] | 1 Iron Nugget |
| Huge Estus Flask ("Upgraded version of Estus Flask") | Have a [[item:dungeons_and_combat:crimson_flask]] | 2 Huge Estus Flasks |

The Huge Estus Flask heals 75% of maximum health. Soulrend replaces its recipe; two Estus Flasks, a Blood Vial and two [[item:apotheosis:uncommon_material]] make two Huge flasks:

```recipe
{ "station": "crafting_table", "grid": [" C ", "ABA", " C "], "key": { "A": "apotheosis:uncommon_material", "B": "irons_spellbooks:blood_vial", "C": "dungeons_and_combat:estus_flask" }, "output": "dungeons_and_combat:crimson_flask", "count": 2 }
```

More Estus Flasks can be crafted from gold and a glass bottle:

```recipe
{ "station": "crafting_table", "grid": [" A ", "ABA", " A "], "key": { "A": "minecraft:gold_ingot", "B": "minecraft:glass_bottle" }, "output": "dungeons_and_combat:estus_flask" }
```

## Next

- [[progression/act-ii-first-steps/bosses-rise|Bosses' Rise]]: Find Structure quests for the Dragon Tower, Sandworm Nest and Yeti Hideout.
- [[progression/act-ii-first-steps/defeat-the-dead-king|Defeat The Dead King]]: Find Structure: Catacombs.
