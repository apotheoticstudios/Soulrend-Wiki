---
{
  "title": "Weight & Stuns",
  "category": "Epic Fight",
  "order": 5,
  "summary": "Armor Weight and Stun Armor, weapon Impact, how hits stun, and the posture bar that leads to Combat Evolution executions.",
  "aliases": ["Weight", "Stun Armor", "Impact", "Stun", "Posture", "Execution", "Executions"],
  "icon": "minecraft:iron_chestplate"
}
---
<!-- sources:
  mods/epic-fight-20.14.17-mc1.20.1-forge.jar lang (epicfight.tip.weight "Weight shortens stun, raises skill stamina use, and slows attack speed, especially on fast items", epicfight.tip.stun_armor "Stun Armor extends the time between stuns", epicfight.tip.knockback "The Knockback enchantment functions to amplify the stun duration upon impact", attribute names Impact, Armor Negation, Max Strikes "Hit %s Enemies per Swing", Execution Resistance)
  game-data/attributes.json (epicfight:impact default 0.5, max_strikes 1, armor_negation 0, weight 0, stun_armor 0, staminar 15)
  game-data/item-stats.json + game-data/tags.json (per piece: #soulrend:light_armor Weight 8-12, Stun Armor 2.75-3.25; #soulrend:heavy_armor Weight 12-18, Stun Armor 0.75-2.25; mage armor varies); values set by config/the_config_of_alexandria/
  config/epicfight-common.toml (gamerules globalStun true, weightPenalty 100, stiffComboAttacks true)
  mods/epicfight-posture-integration-1.1.0.jar PostureManager (max posture from the mob's effective health, with armor when use_armor_scaling; player hits damage posture, scaled by HURT_IMPACT_MULTIPLIER 0.55; parries damage it too; regen starts after REGEN_DELAY_TICKS 150 at REGEN_FRACTION_PER_SECOND 0.05; a break applies a LONG stun and lasts BREAK_RECOVERY_TICKS 60; humanoid and spider compatibility for unpatched mobs), config/epicfight_posture_integration/server.toml (global_multiplier 1.0, use_armor_scaling true, no blacklist)
  config/combat_evolution-common.toml (enabledExecution true, enabledAssassination true, executionDamageToPlayer 1.0); config/defaultoptions/keybindings.txt (key.combat_evolution.execution right mouse)
-->
**Weight and stuns** are Epic Fight's rules for how heavy a fighter is and how long hits lock them up. Armor gives **Weight** and **Stun Armor**, weapons have **Impact**, and in Soulrend mobs also have a **posture** bar that, once broken, leaves them open to an **execution**.

## How it works

### Weight

Every armor piece has a Weight. In Epic Fight's words, Weight "shortens stun, raises skill stamina use, and slows attack speed, especially on fast items". Heavy armor makes the wearer harder to keep stunned, but dodges and skills cost more [[epic-fight/dodging-and-parrying#Stamina|stamina]] and fast weapons swing slower.

### Stun Armor

Stun Armor "extends the time between stuns": the more a fighter has, the more hits it takes before they're stunned again.

| Armor class | Weight per piece | Stun Armor per piece |
| --- | --- | --- |
| Light armor | 8–12 | 2.75–3.25 |
| Heavy armor | 12–18 | 0.75–2.25 |
| Mage armor | varies widely by set | varies widely by set |

Each armor set's page gives its total Weight and Stun Armor (see [[items/armor|Armor]]).

### Impact and stuns

A weapon's **Impact** (0.5 by default) decides how long its hits stun a target; the Knockback enchantment lengthens the stun further. Impact also sets how much stamina a guard spends to block the hit. Two more weapon stats matter:

- **Armor Negation:** the share of the target's armor the hit ignores.
- **Max Strikes:** how many enemies one swing can hit (1 by default).

Epic Fight's global stun rule is on in Soulrend, so every mob it animates can be stunned.

### Posture and executions

Epic Fight Posture Integration gives mobs a **posture** bar, which fills as they take hits:

1. **Damaging posture.** A player's hits damage posture, more for high-Impact weapons. Parrying a mob's attack also damages its posture.
2. **Recovery.** After 7.5 s without posture damage, the bar recovers 5% per second.
3. **Breaking.** When the bar breaks, the mob is stunned for a long stun, about 3 s.
4. **Executing.** While a mob is broken, Combat Evolution lets the player **execute** it with right mouse with a finishing animation.

A mob's maximum posture grows with its health and its armor, so bosses and armored mobs take longer to break. Humanoid and spider-shaped mobs from other mods get posture too, even without their own Epic Fight animations.

## Details

- **Assassinations.** Combat Evolution also lets a player execute a mob that hasn't noticed them, from behind.
- **Execution Resistance** is an Epic Fight attribute that protects against executions.

## Tips

- High-Impact weapons (greatswords, hammers) break posture fastest; pair them with a parry skill to break bosses' posture from both sides.
- A light armor set keeps dodges cheap for fast weapons; heavy armor suits slow weapons that rarely dodge.

## Related

- [[epic-fight/dodging-and-parrying|Dodging & Parrying]]
- [[epic-fight/weapon-types|Weapon Types]]
- [[items/armor|Armor]]
