---
{
  "title": "Nightmare & Astral Ingots",
  "summary": "Two Act V quests for four Nightmare Ingots and four Astral Ingots, both made from Universium, for the Emblem of the Past.",
  "aliases": ["Forged from Nightmares", "The Metal of the Stars"],
  "infobox": {
    "item": "astral_calamity_extras:nightmare_ingot",
    "itemRows": false,
    "rows": [
      ["Chapter", "[[progression/act-v-duties|Act V – Duties]]"],
      ["Requires", "[[progression/act-v-duties/duties|Duties]]"],
      ["Tasks", "4 [[item:astral_calamity_extras:nightmare_ingot]]; 4 [[item:astral_calamity_extras:astral_ingot]]"],
      ["Rewards", "A roll on Flawed Gems each"]
    ]
  }
}
---
<!-- sources:
  config/ftbquests/quests/chapters/duties.snbt: Forged from Nightmares (subtitle; task 4 astral_calamity_extras:nightmare_ingot; Flawed Gems), The Metal of the Stars (subtitle; task 4 astral_calamity_extras:astral_ingot; Flawed Gems)
  kubejs/server_scripts/recipes/ingot_progression_recipes.js (shapeless: 4 Universium + 1 soulsweapons:crimson_ingot -> 4 Nightmare; 4 Universium + 1 irons_spellbooks:mithril_ingot -> 4 Astral; Universium shaped recipe -> 4)
  kubejs/server_scripts/dimension/past.js (Emblem uses 4 of each)
-->
**Forged from Nightmares** and **The Metal of the Stars** are the two [[progression/act-v-duties|Act V]] quests after [[progression/act-v-duties/duties|Duties]]. They ask for four [[item:astral_calamity_extras:nightmare_ingot]]s and four [[item:astral_calamity_extras:astral_ingot]]s, exactly what the [[progression/act-v-duties/emblem-of-the-past|Emblem of the Past]] uses. Both ingots are made from [[item:astral_calamity_extras:universium_ingot]].

## Requirements

- [[progression/act-v-duties/duties|Duties]]

## Objectives

| Quest | Task | Rewards |
| --- | --- | --- |
| Forged from Nightmares | Have 4 Nightmare Ingots | A roll on [[progression/reward-tables#Gem tables\|Flawed Gems]] |
| The Metal of the Stars | Have 4 Astral Ingots | A roll on Flawed Gems |

> [!LORE] Forged from Nightmares (Act V)
> Nightmare Ingots are forged from materials tainted by the deepest horrors of the Void. Their presence alone is enough to unsettle even the most seasoned adventurers

> [!LORE] The Metal of the Stars (Act V)
> Astral metal carries the essence of distant stars, granting it properties that defy conventional understanding. To wield equipment forged from it is to hold a fragment of the heavens in your hands.

## Walkthrough

1. Make 8 Universium Ingots: two batches of the recipe on [[progression/act-iv-beyond-reality/dragon-egg|Dragon Egg]], which needs two Dragon Eggs. The optional [[progression/act-iv-beyond-reality/defeat-the-nightwarden|Nightwarden]] gives two more ingots.
2. Craft the Nightmare Ingots. Four Universium and a Soulslike [[item:soulsweapons:crimson_ingot]] make four:

   ```recipe
   { "station": "crafting_table", "ingredients": ["astral_calamity_extras:universium_ingot", "astral_calamity_extras:universium_ingot", "astral_calamity_extras:universium_ingot", "astral_calamity_extras:universium_ingot", "soulsweapons:crimson_ingot"], "output": "astral_calamity_extras:nightmare_ingot", "count": 4 }
   ```

3. Craft the Astral Ingots. Four Universium and a [[item:irons_spellbooks:mithril_ingot]] make four:

   ```recipe
   { "station": "crafting_table", "ingredients": ["astral_calamity_extras:universium_ingot", "astral_calamity_extras:universium_ingot", "astral_calamity_extras:universium_ingot", "astral_calamity_extras:universium_ingot", "irons_spellbooks:mithril_ingot"], "output": "astral_calamity_extras:astral_ingot", "count": 4 }
   ```

4. Claim both quests before crafting the Emblem. The quests only check the inventory, and the Emblem uses all eight ingots.

## Next

- [[progression/act-v-duties/emblem-of-the-past|Emblem of the Past]]
