---
{
  "title": "Skill Books (Epic Fight)",
  "navTitle": "Skill Books",
  "category": "Epic Fight",
  "order": 3,
  "summary": "How Epic Fight skills are learned from skill books and equipped in the Skill Editor's Dodge, Guard, Mobility, Identity and Passive slots.",
  "aliases": ["Skill Sets", "Skill Editor", "Skill Slots", "Combat Skills"],
  "icon": "epicfight:skillbook"
}
---
<!-- sources:
  content/items/skill-books/ (53 book pages: skill, slot, quest tier; sourced there from game-data/skills.json, kubejs/server_scripts/recipes/skillbook_recipes.js and config/ftbquests/quests/chapters/epicfight.snbt)
  mods/epic-fight-20.14.17-mc1.20.1-forge.jar lang (epicfight.skill_slot.dodge, guard, mover "Mobility", identity, passive1-3; key.epicfight.skill_gui "Open Skill Editor"), EpicFightLootTables (vanilla chest skill books: guard, step, roll, berserker, stamina_pillager, technician, swordmaster, phantom_ascent), PlayerPatch (players start with only basic_attack and knockdown_wakeup)
  config/epicfight-common.toml (skill_book_mob_drop_chance_modifier -100, skill_book_chest_drop_chance_modifier 10; gamerules keepSkills true, skillReplaceCooldown 6000)
  config/ftbquests/quests/chapters/the_realms.snbt "Epic Combat" (rewards: skill books efn:efn_parry, epicfight:guard, efn:efn_dodge, epicfight:step)
  config/defaultoptions/keybindings.txt (key.epicfight.skill_gui K)
  mods/soulrend_core-2.7-1.20.1.jar SoulrendClientGuiEvents (Combat Skills inventory tab opens the skill editor)
-->
**Skill books** teach Epic Fight **skills**: dodges, guards, movement abilities, identity skills and passives that work with any weapon. Unlike a weapon's [[epic-fight/innate-skills|innate skill]], a learned skill belongs to the player. A player's equipped skills, one per slot, are their **skill set**.

## How it works

1. **Get a book.** Every book is the same [[item:epicfight:skillbook]] item carrying one skill.
2. **Learn it.** Right-click the book and press **Learn**.
3. **Equip it.** Open the **Skill Editor** (K, or the **Combat Skills** tab in the inventory, see [[features/character/inventory-tabs|Inventory Tabs]]) and put the skill in its slot.

| Slot | Holds | Key |
| --- | --- | --- |
| **Dodge** | A dodge, such as Roll or Step | Left Alt |
| **Guard** | A guard or parry skill | Right mouse |
| **Mobility** | A movement skill | Space |
| **Identity** | A special combat skill | Depends on the skill |
| **Passive 1–3** | Three passive skills | Always on |
| **Arts** | EpicFight Nightfall's combat arts | C |

## Details

- **Players start with no dodge or guard.** The Prologue quest [[progression/prologue/epic-combat|Epic Combat]] gives four books: Guard, Parry, Step and a Soul-like Dodge. See [[epic-fight/dodging-and-parrying|Dodging & Parrying]].
- **Where books come from:**
  - **Crafting.** Soulrend has a recipe for each of the 53 books below, and the [[progression/side-chapters/epic-fight|Epic Fight]] quest chapter asks for each one, in four tiers.
  - **Chests.** Epic Fight puts Guard, Roll, Step, Berserker, Stamina Pillager, Technician, Swordmaster and Phantom Ascent books into some vanilla structure chests.
  - **Not from mobs.** Soulrend turns Epic Fight's mob drops of skill books off.
- **Learned skills are kept on death.**
- **Swapping has a cooldown.** After replacing an equipped skill, the slot can't be changed again for 5 minutes.

## Skill books by slot

| Slot | Books |
| --- | --- |
| Dodge | [[items/skill-books/tier-1/dodge-master\|Dodge master]], [[items/skill-books/end-game/ender-obscuris\|Ender obscuris]], [[items/skill-books/tier-3/ender-step\|Ender step]], [[items/skill-books/tier-2/phantom\|Phantom]], [[items/skill-books/tier-3/precise-roll\|Precise roll]], [[items/skill-books/tier-1/punishment-kick\|Punishment kick]], [[items/skill-books/tier-2/ravanger-force\|Ravanger force]], [[items/skill-books/end-game/time-travel\|Time travel]] |
| Guard | [[items/skill-books/tier-3/counter-attack\|Counter attack]], [[items/skill-books/tier-2/dread-full-buster\|Dread full buster]], [[items/skill-books/tier-3/parry\|『Parry』]], [[items/skill-books/tier-2/parrying\|Parrying]], [[items/skill-books/tier-3/perfect-bulwark\|Perfect bulwark]], [[items/skill-books/tier-3/shulker-cloak\|Shulker cloak]], [[items/skill-books/tier-3/soul-protection\|Soul protection]] |
| Mobility | [[items/skill-books/tier-1/aqua-maneuver\|Aqua maneuver]], [[items/skill-books/tier-1/demolition-leap\|Demolition Leap]], [[items/skill-books/tier-1/natural-sprinter\|Natural Sprinter]], [[items/skill-books/tier-1/spider-techniques\|Spider techniques]] |
| Identity | [[items/skill-books/end-game/all-eyes-on-me\|All Eyes on Me]], [[items/skill-books/end-game/all-eyes-on-you\|All Eyes on You]], [[items/skill-books/tier-1/avatar-of-might\|Avatar of Might]], [[items/skill-books/tier-1/back-and-forth\|Back and ... FORTH !]], [[items/skill-books/tier-2/fatal-flash\|Fatal Flash]], [[items/skill-books/tier-3/lunatic-vivacity\|Lunatic Vivacity]], [[items/skill-books/tier-1/meteor-slam\|Meteor Slam]], [[items/skill-books/tier-2/revelation\|Revelation]], [[items/skill-books/tier-1/shooting-style\|Shooting Style]], [[items/skill-books/end-game/voodoo-magic\|Voodoo magic]] |
| Passive | [[items/skill-books/tier-3/adrenaline-fiend\|Adrenaline Fiend]], [[items/skill-books/tier-3/arrow-tenacity\|Arrow tenacity]], [[items/skill-books/tier-3/berserker-skill-book\|Berserker (Skill Book)]], [[items/skill-books/tier-1/catharsis\|Catharsis]], [[items/skill-books/tier-2/combat-mastery-i\|Combat Mastery I]], [[items/skill-books/end-game/critical-knowledge\|Critical knowledge]], [[items/skill-books/end-game/dancing-blade\|Dancing blade]], [[items/skill-books/tier-1/dopamine\|Dopamine]], [[items/skill-books/tier-2/emergency-escape\|Emergency Escape]], [[items/skill-books/tier-2/endurance\|Endurance]], [[items/skill-books/end-game/essence-extortion\|Essence Extortion]], [[items/skill-books/tier-1/forbidden-strength\|Forbidden Strength]], [[items/skill-books/end-game/heart-shield\|Heart shield]], [[items/skill-books/tier-2/hyper-vitality\|Hyper Vitality]], [[items/skill-books/end-game/latent-retribution\|Latent retribution]], [[items/skill-books/end-game/lethal-focus\|Lethal Focus]], [[items/skill-books/tier-3/manipulator\|Manipulator]], [[items/skill-books/end-game/mindset\|Mindset]], [[items/skill-books/tier-3/parry-master\|『PARRY_MASTER』]], [[items/skill-books/end-game/precise-parry\|『PRECISE PARRY』]], [[items/skill-books/tier-1/technician\|Technician]], [[items/skill-books/end-game/vengeance\|Vengeance]] |
| Arts | [[items/skill-books/tier-2/gravity-stomp\|『Gravity Stomp』]], [[items/skill-books/tier-2/soul-hunt\|『Soul Hunt』]] |

## Related

- [[items/skill-books|Combat Skill Books]] (the item pages)
- [[epic-fight/dodging-and-parrying|Dodging & Parrying]]
- [[epic-fight/innate-skills|Innate Skills]]
