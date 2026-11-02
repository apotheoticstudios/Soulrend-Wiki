// Average DPS of a weapon's basic attack combo -> game-data/dps.json (read by the [[dps:ns:id]] wikilink).
//
//   game-data/items.json       tooltip Attack Damage and Attack Speed (the values the item pages show)
//   game-data/movesets.json    each weapon's type and default style
//   game-data/attacks.json     the style's "Auto N" animation ids (already resolved from Java fields)
//   the mod jars (registry.mjs)  each animation's phases (hit and recovery times) and damage modifiers
//
// Epic Fight rules, read from its bytecode (20.14.17):
//   hit damage     = Attack Damage, through the phase's DAMAGE_MODIFIER (set / add / multiply); a phase's property set
//                    with addProperty(prop, value) belongs to phase 0 only
//   play speed     = 1 + (round3(attackSpeed / BASIS_ATTACK_SPEED) - 1) * ATTACK_SPEED_FACTOR   (AttackAnimation.getPlaySpeed)
//   next input     = the last phase's `recovery` time (CAN_BASIC_ATTACK is off from phase start to recovery)
// The combo is looped (the counter wraps after the last auto), so DPS = damage of every phase / sum of recovery / play speed.
// Epic Fight Extra's `epicfightx:biped/combat/<weapon>_*` animations use its own modifier (AnimationUtils.ATTACK_SPEED_*,
// the same formula with a per-weapon basis), capped at 1.5 while efx-common.toml has enable_animation_playspeed_lock.
// Single target, no armor, crits, enchants or EXTRA_DAMAGE (a runtime list the interpreter can't read).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { openInstance } from './lib/models/instance.mjs';
import { readRegistries, scanMods, readDataDriven } from './lib/attacks/registry.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = f => JSON.parse(fs.readFileSync(path.join(ROOT, 'game-data', f), 'utf8'));
const args = process.argv.slice(2);
const i = args.indexOf('--instance');

const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/models/mobs.json'), 'utf8'));
const inst = openInstance(i >= 0 ? args[i + 1] : undefined, { packs: manifest.$resourcePacks ?? [] });
const { mods, loadedMods } = scanMods(inst.instance);
const registry = readRegistries({ classPath: inst.classPath, mods, loadedMods, warn: () => {} });
readDataDriven(mods, registry);

const items = read('items.json');
const movesets = read('movesets.json');
const attacks = read('attacks.json');
const itemData = items.items ?? items;

const strip = s => s.replace(/§(#[0-9a-f]{6}|[0-9a-fk-or]|rainbow|fabled)/gi, '');
const num = (lines, label) => {
  for (const line of lines ?? []) {
    const m = strip(line).match(new RegExp(`([\\d.]+)\\s*${label}\\b`));
    if (m) return Number(m[1]);
  }
  return null;
};

// ValueModifier: set replaces the base, then add, then multiply.
const modify = (base, m) => {
  if (!m || typeof m !== 'object') return base;
  const v = m.set ?? base;
  return (v + (m.add ?? 0)) * (m.multiply ?? 1);
};
const round = (v, d = 3) => Math.round(v * 10 ** d) / 10 ** d;

// An animation's phases with their own properties; null when the registry doesn't know it.
function phasesOf(id) {
  const anim = registry.animations.get(id);
  if (!anim?.phases?.length) return null;
  return anim.phases.map((p, n) => ({ ...p, damage: p.props?.DAMAGE_MODIFIER ?? anim.phaseProps?.[n]?.DAMAGE_MODIFIER ?? (n === 0 ? anim.props?.DAMAGE_MODIFIER : undefined) }));
}

const EFX_BASIS = { sword: 1.6, tachi: 1.2, uchigatana: 2, longsword: 1.2, spear: 1.2, scythe: 1, greatsword: 1, hoe: 1, fist: 4, axe: 0.9, dagger: 2.4, picaxe: 1.2, shovel: 1, trident: 1.1 };
const EFX_CAP = 1.5;
const efxBasis = id => EFX_BASIS[id.match(/^epicfightx:biped\/combat\/([a-z]+)/)?.[1]] ?? null;

const out = {};
let skipped = 0;
for (const [id, item] of Object.entries(movesets.items)) {
  const tip = itemData[id]?.tooltip;
  const damage = num(tip, 'Attack Damage');
  const speed = num(tip, 'Attack Speed');
  if (!damage || !speed) continue;
  const type = movesets.types[item.type];
  const style = item.style ?? type?.defaultStyle;
  const moves = attacks.types[item.type]?.styles?.[style]?.moves?.filter(m => /^Auto \d+$/.test(m.label));
  if (!moves?.length) continue;

  const hits = [];
  let cycle = 0;
  let ok = true;
  for (const move of moves) {
    const anim = registry.animations.get(move.anim);
    const phases = phasesOf(move.anim);
    const length = attacks.animations[move.anim]?.length;
    if (!phases || !length) { ok = false; if (process.env.DBG) console.log('NP', id, move.anim, !!phases, length); break; }
    const efx = anim.props?.PLAY_SPEED_MODIFIER ? efxBasis(move.anim) : null;
    const basis = anim.props?.BASIS_ATTACK_SPEED ?? efx;
    if (!basis) { ok = false; if (process.env.DBG) console.log('NB', id, move.anim); break; }
    const factor = anim.props?.ATTACK_SPEED_FACTOR ?? 1;
    const play = Math.min(1 + (round(speed / basis) - 1) * factor, efx ? EFX_CAP : Infinity);
    const last = phases.at(-1);
    cycle += Math.min(last.recovery, length) / play;
    for (const p of phases) hits.push(round(modify(damage, p.damage), 2));
  }
  if (!ok) { skipped++; continue; }
  const total = hits.reduce((a, b) => a + b, 0);
  out[id] = { dps: round(total / cycle, 1), damage, speed, hits, cycle: round(cycle, 2), type: item.type, style };
}

fs.writeFileSync(path.join(ROOT, 'game-data/dps.json'), JSON.stringify(out) + '\n');
console.log(`${Object.keys(out).length} weapons with a DPS, ${skipped} skipped (animation without a known BASIS_ATTACK_SPEED or clip)`);
