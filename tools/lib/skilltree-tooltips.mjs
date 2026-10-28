// Passive Skill Tree's node tooltips, ported from the mod (0.7.6c) so the wiki shows what the game shows.
// Each function names the Java class it follows. Lines come back as §-coded strings for mctext.js;
// the mod's RGB styles become §#rrggbb. Untranslated keys stay raw, as Component.translatable leaves them.
//
// createTooltips({ lang, names }) -> skillTooltip(skill, tree)
//   lang:  Map of en_us keys (jars, then resource packs; later wins)
//   names: { attributes, effects, spells, items } id -> display name, from the in-game export

const STYLE = {
  bonus: '§#7b7be5', bonusNegative: '§#e25a5a', second: '§#7ab3e2', secondNegative: '§#db9792',
  requirement: '§#83e27a', requirementUnfinished: '§#e25a5a', description: '§#7b7be5',
};
// TooltipHelper.getSkillTitleStyle: by button size when the skill has no titleColor.
const TITLE_BY_SIZE = { 20: '§#9b66d8', 24: '§#ffd75f', 30: '§#849696', 32: '§#eb7530' };
const TITLE_LESSER = '§#eaa169';
const ADDITION = 0;
const MULTIPLY_BASE = 1;

// ItemStack.ATTRIBUTE_MODIFIER_FORMAT ("#.##"), then TooltipHelper.formatNumber drops a trailing ".0".
export function formatNumber(value) {
  const rounded = Math.round(value * 100) / 100;
  return String(Object.is(rounded, -0) ? 0 : rounded);
}

const hex = n => '§#' + n.toString(16).padStart(6, '0');
const lower = s => String(s).toLowerCase();

export function createTooltips({ lang, names }) {
  const missing = new Set();

  // Component.translatable: Java's %s, %d, %1$s and %%; a missing key renders as the key itself.
  const T = (key, ...args) => {
    const template = lang.get(key);
    if (template === undefined) {
      missing.add(key);
      return key;
    }
    let next = 0;
    return template.replace(/%(?:(\d+)\$)?([sd%])/g, (_, index, kind) => {
      if (kind === '%') return '%';
      const arg = args[index ? Number(index) - 1 : next++];
      return arg === undefined ? '' : String(arg);
    });
  };
  // TooltipHelper.getOptionalTooltip: "<key>.<suffix>" if translated, else "<key>".
  const optional = (key, suffix, ...args) => (lang.has(`${key}.${suffix}`) ? T(`${key}.${suffix}`, ...args) : T(key, ...args));

  // TooltipHelper.getSkillBonusTooltip: "+5 Armor", "+10% Armor" (multiplying operations show percent).
  const bonusText = (name, amount, operation) => {
    const shown = Math.abs(amount * (operation === ADDITION ? 1 : 100));
    return T(`attribute.modifier.${amount > 0 ? 'plus' : 'take'}.${operation}`, formatNumber(shown), name);
  };

  const attributeName = id => names.attributes[id]?.name ?? id;
  const effectName = id => names.effects[id]?.name ?? id;
  // TooltipHelper.getEffectTooltip
  const effectTooltip = (id, amplifier = 0) => (amplifier ? T('potion.withAmplifier', effectName(id), T(`potion.potency.${amplifier}`)) : effectName(id));

  // ItemStackPredicate implementations: equipment type, item tag, none.
  const item = condition => {
    let key = 'item_condition.skilltree.none';
    if (condition?.type === 'skilltree:equipment_type') key = `item_condition.skilltree.equipment_type.${condition.equipment_type}`;
    else if (condition?.type === 'skilltree:tag') key = `item_tag.${condition.tag_id}`;
    return suffix => (suffix ? optional(key, suffix) : T(key));
  };

  // DamageCondition: getTooltip() is "<desc>", getTooltip(suffix) is "<desc>.<suffix>" without fallback.
  const damage = condition => {
    const key = `damage_condition.${(condition?.type ?? 'skilltree:none').replace(':', '.')}`;
    return Object.assign(suffix => T(suffix ? `${key}.${suffix}` : key), { none: !condition || condition.type === 'skilltree:none' });
  };

  // MobEffectPredicate: effect category ("harmful effects"), or none.
  const effects = predicate => {
    const type = predicate?.type === 'skilltree:effect_category' ? lower(predicate.effect_type) : 'any';
    return { tooltip: suffix => T(`effect_type.${type}${suffix ? '.' + suffix : ''}`), harmful: type === 'harmful' };
  };

  // FloatFunction implementations (value providers): condition and multiplier wording.
  const logicTip = (logic, provider, formatted) => optional(`living_condition.skilltree.numeric_value.${lower(logic)}`, provider, formatted);
  const providers = {
    'skilltree:attribute_value': p => ({
      predicate: (c, t, logic, v) => T(`value_provider.skilltree.attribute_value.condition.${t}`, c, attributeName(p.attribute), logicTip(logic, 'attribute_value', formatNumber(v))),
      multiplier: (c, t, d) => (d === 1
        ? T(`value_provider.skilltree.attribute_value.multiplier.${t}`, c, attributeName(p.attribute))
        : T(`value_provider.skilltree.attribute_value.multiplier.${t}.plural`, c, formatNumber(d), attributeName(p.attribute))),
    }),
    'skilltree:distance_to_target': () => ({
      predicate: (c, t, logic, v) => T(`value_provider.skilltree.distance_to_target.condition.${t}`, c, logicTip(logic, 'distance_to_target', formatNumber(v))),
      multiplier: (c, t, d) => (d === 1
        ? T(`value_provider.skilltree.distance_to_target.multiplier.${t}`, c)
        : T(`value_provider.skilltree.distance_to_target.multiplier.${t}.plural`, c, formatNumber(d))),
    }),
    'skilltree:enchantment_amount': p => ({
      multiplier: (c, t, d) => (d === 1
        ? T(`value_provider.skilltree.enchantment_amount.multiplier.${t}`, c, item(p.item_condition)('prepositional'))
        : T(`value_provider.skilltree.enchantment_amount.multiplier.${t}.plural`, c, formatNumber(d), item(p.item_condition)('prepositional'))),
    }),
    // HealthLevelFunction, and Iron's Spellbooks compat's ManaLevelFunction, which copies it.
    'skilltree:health_level': p => levelProvider('health_level', p),
    'skilltree:mana_level': p => levelProvider('mana_level', p),
  };
  const levelProvider = (name, p) => {
    const desc = `value_provider.skilltree.${name}`;
    const unit = v => T(`${desc}${p.percentage ? '.percentage' : '.point'}${v !== 1 ? '.plural' : ''}`);
    const fmt = v => (p.percentage ? formatNumber(v * 100) + '%' : formatNumber(v));
    return {
      predicate: (c, t, logic, v) => {
        if (p.percentage && v === 1 && logic === 'EQUAL') return T(`${desc}.condition.${t}.full`, c);
        if (p.percentage && v === 1 && logic === 'LESS') return T(`${desc}.condition.${t}.not_full`, c);
        return T(`${desc}.condition.${t}${p.missing ? '.missing' : ''}`, c, logicTip(logic, name, fmt(v)), unit(v));
      },
      multiplier: (c, t, d) => {
        const key = `${desc}.multiplier.${t}${d !== 1 ? '.plural' : ''}${p.missing ? '.missing' : ''}`;
        return d === 1 ? T(key, c, unit(d)) : T(key, c, fmt(d), unit(d));
      },
    };
  };
  const provider = p => {
    const make = providers[p?.type];
    if (!make) throw new Error(`unsupported value provider ${p?.type}`);
    return make(p);
  };

  // LivingMultiplier: none, or FloatFunctionMultiplier (value / divisor, whole steps).
  const multiplier = (m, c, target) => (!m || m.type !== 'skilltree:numeric_value' ? c : provider(m.value_provider).multiplier(c, target, m.divisor ?? 1));

  // LivingEntityPredicate implementations.
  const condition = (p, c, target) => {
    if (!p || p.type === 'skilltree:none') return c;
    const desc = `living_condition.${p.type.replace(':', '.')}`;
    switch (p.type) {
      case 'skilltree:crouching':
        return T(desc, c, T(`${desc}${p.reverse_logic ? '.reverse' : ''}.target.${target}`));
      case 'skilltree:dual_wielding':
      case 'skilltree:has_item_equipped':
      case 'skilltree:has_item_in_hand':
        return T(desc, c, T(`${desc}.target.${target}`), item(p.item_condition)());
      case 'skilltree:has_effect':
        return p.amplifier
          ? T(`${desc}.amplifier`, c, T(`${desc}.target.${target}`), effectTooltip(p.effect, p.amplifier))
          : T(desc, c, T(`${desc}.target.${target}`), effectName(p.effect));
      case 'skilltree:numeric_value':
        return provider(p.value_provider).predicate(c, target, p.logic, p.required_value);
      default:
        throw new Error(`unsupported condition ${p.type}`);
    }
  };

  // The shared tail of most bonuses: multipliers, then conditions (player first, then the other side).
  const ENEMY_KEYS = ['target', 'enemy', 'attacker'];
  const wrap = (b, c, target = 'player', other = 'enemy') => {
    c = multiplier(b.player_multiplier, c, target);
    for (const k of ENEMY_KEYS) c = multiplier(b[`${k}_multiplier`], c, other);
    c = condition(b.player_condition, c, target);
    for (const k of ENEMY_KEYS) c = condition(b[`${k}_condition`], c, other);
    return c;
  };

  // SkillEventListener implementations.
  const listener = (l, c) => {
    const desc = `event_listener.${l.type.replace(':', '.')}`;
    const tail = x => {
      x = condition(l.player_condition, x, 'player');
      x = condition(l.enemy_condition, x, 'enemy');
      x = multiplier(l.player_multiplier, x, 'player');
      return multiplier(l.enemy_multiplier, x, 'enemy');
    };
    const d = damage(l.damage_condition);
    switch (l.type) {
      case 'skilltree:attack':
      case 'skilltree:on_kill':
        return tail(d.none ? T(desc, c) : T(`${desc}.damage`, c, d('type')));
      case 'skilltree:damage_taken':
        return tail(T(desc, c, d()));
      case 'skilltree:ticking': {
        const ticks = l.cooldown ?? 20;
        if (ticks === 20) return tail(T(`${desc}.second`, c));
        if (ticks < 1200) return tail(T(`${desc}.seconds`, c, formatNumber(ticks / 20)));
        if (ticks === 1200) return tail(T(`${desc}.minute`, c));
        return tail(T(`${desc}.minutes`, c, formatNumber(ticks / 1200)));
      }
      default:
        throw new Error(`unsupported event listener ${l.type}`);
    }
  };
  const listenerTarget = l => (l?.target ? lower(l.target) : 'player');

  // SkillBonus implementations: [text, isPositive].
  const bonuses = {
    // AttributeBonus (knockback resistance additions are shown ×10, as the mod does)
    'skilltree:attribute': b => {
      const amount = b.attribute === 'minecraft:generic.knockback_resistance' && b.operation === ADDITION ? b.amount * 10 : b.amount;
      return [wrap(b, bonusText(attributeName(b.attribute), amount, b.operation ?? ADDITION)), b.amount > 0];
    },
    'skilltree:arrow_retrieval': b => [bonusText(T('skill_bonus.skilltree.arrow_retrieval'), b.chance, MULTIPLY_BASE), b.chance > 0],
    'skilltree:cant_use_item': b => [T('skill_bonus.skilltree.cant_use_item', item(b.item_condition)('plural')), false],
    // ExecuteCommandBonus: the description is a lang key or, as in Soulrend, plain text.
    'skilltree:command': b => [lang.get(b.description) ?? b.description ?? '', true],
    'skilltree:crit_damage': b => {
      const d = damage(b.damage_condition);
      const name = d.none ? T('skill_bonus.skilltree.crit_damage') : T('skill_bonus.skilltree.crit_damage.damage', d('type'));
      return [wrap(b, bonusText(name, b.amount, MULTIPLY_BASE)), b.amount > 0];
    },
    'skilltree:damage_avoidance': b => [wrap(b, bonusText(T('skill_bonus.skilltree.damage_avoidance', damage(b.damage_condition)()), b.chance, MULTIPLY_BASE)), b.chance > 0],
    'skilltree:damage_conversion': b => [wrap(b, T('skill_bonus.skilltree.damage_conversion', formatNumber(b.amount * 100), damage(b.original_damage)(), damage(b.result_damage)())), b.amount > 0],
    // IncomingDamageBonus
    'skilltree:damage_taken': b => [wrap(b, bonusText(T('skill_bonus.skilltree.damage_taken', damage(b.damage_condition)()), b.amount, b.operation ?? ADDITION)), b.amount < 0],
    'skilltree:effect_duration': b => {
      const target = lower(b.target ?? 'player');
      const e = effects(b.effect_predicate);
      const c = bonusText(T(`skill_bonus.skilltree.effect_duration.${target}`, e.tooltip('plural')), b.duration, MULTIPLY_BASE);
      return [wrap(b, c, target, target), (b.duration > 0) !== (target === 'player') !== !e.harmful];
    },
    // GrantExperienceBonus
    'skilltree:gain_experience': b => {
      let c = T(`skill_bonus.skilltree.gain_experience${b.chance < 1 ? '.chance' : ''}`, b.amount);
      if (b.chance < 1) c = bonusText(c, b.chance, MULTIPLY_BASE);
      return [listener(b.event_listener, c), b.chance > 0];
    },
    // ExperienceGainMultiplierBonus
    'skilltree:gained_experience': b => [wrap(b, bonusText(T('skill_bonus.skilltree.gained_experience', T(`experience.source.${b.experience_source}`)), b.multiplier, MULTIPLY_BASE)), b.multiplier > 0],
    // Iron's Spellbooks compat: GrantSpellSkillBonus ("Grants Root 5 spell" is the mod's own wording)
    'skilltree:grant_spell': b => [wrap(b, T('skill_bonus.skilltree.grant_spell', names.spells[b.spell_id]?.name ?? b.spell_id, b.spell_level)), true],
    'skilltree:ignore_effect_immunity': b => [wrap(b, T('skill_bonus.skilltree.ignore_effect_immunity', effects(b.effect_predicate).tooltip('plural'))), true],
    'skilltree:incoming_healing': b => [wrap(b, bonusText(T('skill_bonus.skilltree.incoming_healing'), b.multiplier, MULTIPLY_BASE)), b.multiplier > 0],
    // InflictMobEffectBonus
    'skilltree:inflict_effect': b => {
      const target = listenerTarget(b.event_listener);
      const duration = b.duration ?? 0;
      const chance = b.chance ?? 1;
      const key = `skill_bonus.skilltree.inflict_effect.${target}${chance < 1 ? '.chance' : ''}`;
      const shortTick = b.event_listener?.type === 'skilltree:ticking' && duration <= 20;
      const time = duration && !shortTick
        ? (duration < 1200 ? T('skill_bonus.skilltree.inflict_effect.seconds', formatNumber(duration / 20)) : T('skill_bonus.skilltree.inflict_effect.minutes', formatNumber(duration / 1200)))
        : '';
      let c = T(key, effectTooltip(b.effect, b.amplifier ?? 0), time);
      if (chance < 1) c = bonusText(c, chance, MULTIPLY_BASE);
      c = listener(b.event_listener, c);
      if ((b.max_stacks ?? 1) > 1) c = T('skill_bonus.skilltree.inflict_effect.stacks', c, b.max_stacks);
      const harmful = names.effects[b.effect]?.category === 'harmful';
      return [c, (chance > 0) !== (target === 'player') !== !harmful];
    },
    // InflictIgniteBonus: duration in seconds, shown as StringUtil.formatTickDuration ("0:10")
    'skilltree:inflict_ignite': b => {
      const target = listenerTarget(b.event_listener);
      const chance = b.chance ?? 1;
      const seconds = b.duration;
      const time = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
      let c = T(`skill_bonus.skilltree.inflict_ignite.${target}${chance < 1 ? '.chance' : ''}`, time);
      if (chance < 1) c = bonusText(c, chance, MULTIPLY_BASE);
      return [listener(b.event_listener, c), (chance > 0) !== (target === 'player')];
    },
    'skilltree:item_usage_speed': b => {
      const positive = b.multiplier > 0;
      const c = T(`skill_bonus.skilltree.item_usage_speed.${positive ? 'positive' : 'negative'}`, item(b.item_condition)('plural'), formatNumber(Math.abs(b.multiplier) * 100));
      return [wrap(b, c), positive];
    },
    // ItemUseMovementSpeedBonus: a negative multiplier reduces the penalty
    'skilltree:item_use_movement_speed': b => {
      const positive = b.multiplier < 0;
      const items = item(b.item_condition)('plural');
      const c = positive && b.multiplier === -1
        ? T('skill_bonus.skilltree.item_use_movement_speed.remove', items)
        : T(`skill_bonus.skilltree.item_use_movement_speed.${positive ? 'positive' : 'negative'}`, items, formatNumber(Math.abs(b.multiplier) * 100));
      return [wrap(b, c), positive];
    },
    'skilltree:jump_height': b => [wrap(b, bonusText(T('skill_bonus.skilltree.jump_height'), b.multiplier, MULTIPLY_BASE)), b.multiplier > 0],
    'skilltree:lethal_poison': () => [T('skill_bonus.skilltree.lethal_poison'), true],
    // LootAmountModifierBonus
    'skilltree:loot_duplication': b => {
      const desc = 'skill_bonus.skilltree.loot_duplication';
      const loot = T(`loot.type.${b.loot_type}`);
      const m = b.multiplier;
      const amount = m === 1 ? T(`${desc}.double`) : m === 2 ? T(`${desc}.triple`) : m === -1 ? T(`${desc}.none`) : T(`${desc}.multiplier`, formatNumber(m * 100));
      let c;
      if (b.chance < 1) c = bonusText(T(desc, amount, loot), b.chance, MULTIPLY_BASE);
      else c = m === -1 ? T(`${desc}.guaranteed.none`, loot) : T(`${desc}.guaranteed`, amount, loot);
      return [c, (b.chance > 0) !== (m < 0)];
    },
    'skilltree:projectile_duplication': b => {
      const desc = 'skill_bonus.skilltree.projectile_duplication';
      const c = b.chance < 1 || b.chance % 1 !== 0 ? bonusText(T(`${desc}.chance`), b.chance, MULTIPLY_BASE)
        : b.chance === 1 ? T(desc) : T(`${desc}.amount`, Math.trunc(b.chance));
      return [wrap(b, c), b.chance > 0];
    },
    'skilltree:stealth': b => [wrap(b, T(`skill_bonus.skilltree.stealth${b.amount > 0 ? '' : '.negative'}`, formatNumber(Math.abs(b.amount * 100)))), b.amount > 0],
  };

  const bonusLine = b => {
    const port = bonuses[b.type];
    // SkillBonusSerializer turns unknown types into BrokenSkillBonus, a red error line.
    if (!port) return { line: `§c${'Unknown skill bonus: ' + b.type}`, broken: true };
    const [text, positive] = port(b);
    return { line: (positive ? STYLE.bonus : STYLE.bonusNegative) + text };
  };

  // Chat components as stored in "description": text or translate/with, plus extra, with the Style fields
  // under their obfuscated 1.20.1 names. Each part's own style applies to it; a child inherits the line's.
  const styleCodes = part => {
    const color = part.f_131101_?.f_131257_;
    return (color === undefined ? '' : hex(color)) + (part.f_131102_ ? '§l' : '') + (part.f_131103_ ? '§o' : '')
      + (part.f_131104_ ? '§n' : '') + (part.f_131105_ ? '§m' : '') + (part.f_131106_ ? '§k' : '');
  };
  const componentText = part => {
    if (typeof part === 'string' || typeof part === 'number') return String(part);
    const own = part.translate !== undefined ? T(part.translate, ...(part.with ?? []).map(componentText)) : part.text ?? '';
    return own + (part.extra ?? []).map(componentText).join('');
  };
  const descriptionLine = part => styleCodes(part) + componentText(part);

  // SkillRequirement implementations (StatRequirement is the only one Soulrend uses).
  const requirementLine = r => {
    if (r.type !== 'skilltree:stat_value') return `§c${r.type}`;
    const stat = r.statTypeId.replace(/^minecraft:/, '');
    const style = STYLE.requirementUnfinished;
    if (stat === 'killed' || stat === 'killed_by') return style + T(`stat_type.minecraft.${stat}`, r.minValue, names.entities?.[r.statId] ?? r.statId);
    return style + `${T(`stat_type.minecraft.${stat}`)} ${names.items[r.statId]?.name ?? r.statId}: ${r.minValue}`;
  };

  // SkillButton.getSkillTooltip: title, limitations, description or bonuses, requirements.
  function skillTooltip(skill, tree) {
    const lines = [];
    const id = `skill.${skill.id.replace(':', '.')}`;
    const title = skill.title ? skill.title : T(`${id}.name`);
    const titleStyle = skill.titleColor ? '§#' + skill.titleColor.toLowerCase() : TITLE_BY_SIZE[skill.buttonSize] ?? TITLE_LESSER;
    lines.push(titleStyle + title);

    let limited = false;
    for (const tag of skill.tags ?? []) {
      const limit = tree.skillLimitations?.[tag] ?? 0;
      if (limit <= 0) continue;
      limited = true;
      const name = lang.get(`skill.tag.${tag}.name`) ?? tag;
      lines.push(STYLE.bonus + T('skill.limitation', `${STYLE.second}${limit} ${name}`));
    }
    if (limited) lines.push('');

    let broken = false;
    if (skill.description) {
      lines.push(...skill.description.map(descriptionLine));
    } else {
      for (const b of skill.bonuses ?? []) {
        const { line, broken: isBroken } = bonusLine(b);
        lines.push(line);
        broken ||= isBroken;
      }
      if (lang.has(`${id}.description`)) lines.push(...lang.get(`${id}.description`).split('/n').map(l => STYLE.description + l));
    }
    // Broken bonuses still load (as BrokenSkillBonus) when a description hides them.
    if (skill.description) broken = (skill.bonuses ?? []).some(b => !bonuses[b.type]);

    if (skill.requirements?.length) {
      if (lines.length > 1) lines.push('');
      lines.push(STYLE.bonus + T('skill.requirements'));
      lines.push(...skill.requirements.map(requirementLine));
    }
    return { lines, broken };
  }

  return { skillTooltip, missing };
}
