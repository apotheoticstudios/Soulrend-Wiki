---
{
  "title": "Dodging & Parrying",
  "category": "Epic Fight",
  "order": 4,
  "summary": "Dodge with Left Alt, guard with right mouse, time a guard to parry, and parry with any shield on Right Alt. All need the right skills and cost stamina.",
  "aliases": ["Dodging", "Parrying (Mechanic)", "Guarding", "Dodge Roll", "Shield Parry", "Stamina"],
  "icon": "minecraft:shield"
}
---
<!-- sources:
  config/defaultoptions/keybindings.txt (key.epicfight.dodge Left Alt, key.epicfight.guard right mouse, key.epicfight.lock_on middle mouse, key.soulsweapons.parry Right Alt, key.soulsweapons.keybind_ability Left Alt)
  mods/epic-fight-20.14.17-mc1.20.1-forge.jar lang (skill.epicfight.roll / step tooltips "Evades all incoming attacks"; guard "Right-click to guard against frontal attacks. Continued guarding will consume more stamina", guard.consume "Impact x guard penalty"; parrying "time guards accordingly to prevent stamina use ... guard against ranged attacks"; impact_guard "guard against explosions, fire, magic, and projectiles, taking %d%% of the original damage")
  mods/epic-fight-20.14.17-mc1.20.1-forge.jar data/epicfight/skill_parameters (roll consumption 4, step 3, guard penalizer 0.6, parrying penalizer 0.6 and parry_window 8 ticks, impact_guard penalizer 0.6, superior_penalizer 0.2, damage_reducer 0.2)
  game-data/attributes.json (epicfight:staminar default 15, epicfight:stamina_regen 1); game-data/skills.json (efn:efn_dodge dodge, stamina 3; efn:efn_parry guard)
  config/ftbquests/quests/chapters/the_realms.snbt "Epic Combat" (starter books)
  config/soulsweapons/soulsweapons.json (enable_shield_parry true, shield_parry_cooldown 40; *_disables_shields true for the Decaying King, Returning Knight, Old Champion's Remains, Chaos Monarch, Fallen Icon, Day Stalker, Night Prowler); content/items/weapons/bulwark-and-brawl/*.md (shield parry text)
  mods/epicfight-posture-integration-1.1.0.jar PostureManager.onParried (a parry damages the attacker's posture)
-->
**Dodging and parrying** are how Epic Fight players avoid damage. A **dodge** makes the player untouchable for a moment, a **guard** blocks frontal attacks for stamina, and a well-timed guard becomes a **parry** that costs nothing. Shields add a fourth option, Soulslike Weaponry's **shield parry**. Every one of them depends on **stamina**.

## How it works

### Stamina

Players have **15 Max Stamina** by default, shown on the HUD. Dodges, guards and many skills spend it, and it regenerates when not used. The Max Stamina and Stamina Regen attributes raise both; armor [[epic-fight/weight-and-stuns|Weight]] makes skills cost more.

### Dodging

Press **Left Alt** to use the skill in the **Dodge** slot. Dodges evade every attack while they last.

| Skill | Stamina | Movement |
| --- | --- | --- |
| Roll | 4 | Rolls in the direction of movement. |
| Step | 3 | Slides a short distance in the direction of movement. |
| Soul-like Dodge (Nightfall) | 3 | A Soulslike dodge. |

Eight more dodge skills come from [[epic-fight/skill-books|skill books]], such as Dodge Master, Phantom and Ender Step.

### Guarding

Hold **right mouse** to guard with the skill in the **Guard** slot. A guard blocks frontal attacks; each blocked hit costs stamina equal to the attack's **Impact** times the guard's penalty, and holding a guard longer costs more.

| Skill | What it adds |
| --- | --- |
| Guard | Blocks frontal attacks. |
| Parrying | A guard timed just before a hit (within 0.4 s) is a **parry**: it costs no stamina, and it also works against projectiles. |
| Impact Guard | Lower stamina cost; also guards against explosions, fire, magic and projectiles, taking only part of their damage. |
| Parry (Nightfall) | Nightfall's timed parry. |

More guard skills come from skill books: Counter Attack, Dread Full Buster, Perfect Bulwark, Shulker Cloak and Soul Protection.

### Shield parry

Any shield in the off hand can parry with Soulslike Weaponry's **Parry with shield** key (**Right Alt**). A successful parry Posture Breaks the attacker. It has a 2 s cooldown.

## Details

- **Starting skills.** Players start with no dodge or guard. The Prologue quest [[progression/prologue/epic-combat|Epic Combat]] gives Guard, Parry, Step and the Soul-like Dodge; learn them and equip one dodge and one guard.
- **Parries hurt posture.** A parry also damages the attacker's posture, bringing it closer to a stun (see [[epic-fight/weight-and-stuns#Posture and executions|Weight & Stuns]]).
- **Some bosses break shields.** The Decaying King, Returning Knight, Old Champion's Remains, Chaos Monarch, Fallen Icon, Day Stalker and Night Prowler disable shields with some attacks.
- **Lock-on** (middle mouse) keeps the camera on one enemy, which makes timing dodges and parries easier.

## Tips

- Left Alt is also Soulslike Weaponry's weapon-ability key. If a Soulslike weapon's ability fires when you meant to dodge, rebind one of them in Controls.
- Against slow, heavy hitters, parry; against fast combos or attacks that can't be guarded, dodge.

## Related

- [[epic-fight/skill-books|Skill Books (Epic Fight)]]
- [[epic-fight/weight-and-stuns|Weight & Stuns]]
- [[items/weapons/bulwark-and-brawl|Bulwark and Brawl]] (shields)
