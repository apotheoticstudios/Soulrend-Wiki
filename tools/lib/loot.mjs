// Answers "where does this item drop, and how likely is it?" from game-data/loot-tables.json.
// Chances are base values: Looting, Fortune and Luck are labeled, not calculated.

const bare = value => String(value ?? '').replace(/^minecraft:/, '');

// { value: probability } for a roll count, from a number or a vanilla number provider.
function rollDistribution(rolls) {
  if (typeof rolls === 'number') return new Map([[Math.floor(rolls), 1]]);
  if (rolls && typeof rolls === 'object') {
    const type = bare(rolls.type);
    if (type === 'binomial') {
      const out = new Map();
      let term = (1 - rolls.p) ** rolls.n;
      for (let k = 0; k <= rolls.n; k++) {
        out.set(k, term);
        term = rolls.p === 1 ? 0 : term * ((rolls.n - k) / (k + 1)) * (rolls.p / (1 - rolls.p));
      }
      if (rolls.p === 1) return new Map([[rolls.n, 1]]);
      return out;
    }
    if (typeof rolls.value === 'number') return new Map([[Math.floor(rolls.value), 1]]);
    if (typeof rolls.min === 'number' && typeof rolls.max === 'number') {
      const low = Math.floor(rolls.min), high = Math.floor(rolls.max);
      if (high < low) return new Map([[low, 1]]);
      const out = new Map();
      // A negative roll count rolls nothing (Alex's Mobs' anteater reward uses -4 to 1).
      for (let k = low; k <= high; k++) out.set(Math.max(0, k), (out.get(Math.max(0, k)) ?? 0) + 1 / (high - low + 1));
      return out;
    }
  }
  return new Map([[1, 1]]);
}

function rollsText(rolls) {
  const dist = [...rollDistribution(rolls).keys()];
  const low = Math.min(...dist), high = Math.max(...dist);
  return low === high ? `${low} roll${low === 1 ? '' : 's'}` : `${low}–${high} rolls`;
}

// Inclusive { min, max } for a count from set_count or a number provider.
function countRange(value) {
  if (typeof value === 'number') return { min: value, max: value };
  if (value && typeof value === 'object') {
    if (bare(value.type) === 'binomial') return { min: 0, max: value.n };
    if (typeof value.value === 'number') return { min: value.value, max: value.value };
    if (typeof value.min === 'number' && typeof value.max === 'number') return { min: value.min, max: value.max };
  }
  return { min: 1, max: 1 };
}

// A condition list becomes a chance multiplier and the labels for whatever can't be a number.
function readConditions(conditions) {
  let chance = 1;
  const labels = new Set();
  for (const condition of conditions ?? []) {
    const result = readCondition(condition);
    chance *= result.chance;
    for (const label of result.labels) labels.add(label);
  }
  return { chance, labels };
}

function readCondition(condition) {
  const type = bare(condition.condition);
  switch (type) {
    // Every block table has this one, and it only matters to explosions.
    case 'survives_explosion': return { chance: 1, labels: [] };
    case 'random_chance': return { chance: condition.chance ?? 1, labels: [] };
    case 'random_chance_with_looting': return { chance: condition.chance ?? 1, labels: ['Looting raises the chance'] };
    case 'table_bonus': return { chance: condition.chances?.[0] ?? 1, labels: ['Fortune raises the chance'] };
    case 'killed_by_player': return { chance: 1, labels: ['Player kill'] };
    case 'match_tool': return { chance: 1, labels: [toolLabel(condition.predicate) ?? 'Needs a specific tool'] };
    case 'inverted': {
      const inner = condition.term ? readCondition(condition.term).labels : [];
      if (inner.includes('Silk Touch')) return { chance: 1, labels: ['Without Silk Touch'] };
      if (inner.includes('Shears')) return { chance: 1, labels: ['Without Shears'] };
      if (!inner.length) return { chance: 1, labels: [] };
      return { chance: 1, labels: ['Special condition'] };
    }
    case 'any_of':
    case 'alternative': {
      const inner = (condition.terms ?? []).map(readCondition).flatMap(r => r.labels);
      return { chance: 1, labels: inner.length ? [[...new Set(inner)].join(' or ')] : [] };
    }
    case 'all_of': return readConditions(condition.terms);
    default: return { chance: 1, labels: ['Special condition'] };
  }
}

function toolLabel(predicate) {
  const silk = (predicate?.enchantments ?? []).some(e => e.enchantment === 'minecraft:silk_touch');
  if (silk) return 'Silk Touch';
  if ((predicate?.items ?? []).includes('minecraft:shears') || predicate?.item === 'minecraft:shears') return 'Shears';
  return null;
}

function functionLabels(functions) {
  const labels = new Set();
  for (const fn of functions ?? []) {
    const type = bare(fn.function);
    if (type === 'looting_enchant') labels.add('Looting adds more');
    if (type === 'apply_bonus') labels.add('Fortune adds more');
  }
  return labels;
}

// set_count can drop nothing: a range reaching 0, or a conditional "count 0" that Incendium uses to thin
// out its chests. Returns the stack size when something drops, and the chance that anything does.
function readCount(functions) {
  let count = { min: 1, max: 1 };
  let chance = 1;
  for (const fn of functions ?? []) {
    if (bare(fn.function) !== 'set_count') continue;
    const range = countRange(fn.count);
    const applies = readConditions(fn.conditions).chance;
    let nonZero = 1;
    if (range.max <= 0) nonZero = 0;
    else if (range.min <= 0) {
      if (bare(fn.count?.type) === 'binomial') nonZero = 1 - (1 - fn.count.p) ** fn.count.n;
      else nonZero = Math.floor(range.max) / (Math.floor(range.max) + 1);
    }
    chance *= 1 - applies + applies * nonZero;
    if (range.max > 0) count = { min: Math.max(1, range.min), max: range.max };
  }
  return { count, chance };
}

const addRange = (a, b) => ({ min: Math.min(a.min, b.min), max: Math.max(a.max, b.max) });

// Merges a drop into a map of item -> drop, keeping the likelier chance. Used where only one of the
// merged drops can happen for a roll (alternatives, or the branches of one entry).
function mergeBest(into, item, drop) {
  const old = into.get(item);
  if (!old) return into.set(item, drop);
  into.set(item, {
    chance: Math.max(old.chance, drop.chance),
    count: addRange(old.count, drop.count),
    labels: new Set([...old.labels, ...drop.labels]),
    via: old.via ?? drop.via,
  });
}

export function createLootModel(tables, tags = new Map()) {
  const memo = new Map();
  const running = new Set();

  // Weight the entry adds to its pool. An expanded tag becomes one entry per item in the game.
  function entryWeight(entry) {
    const weight = entry.weight ?? 1;
    if (bare(entry.type) === 'tag' && entry.expand) return weight * Math.max(1, (tags.get(entry.name) ?? []).length);
    return weight;
  }

  // What one entry gives if it's the one rolled: item -> { chance, count, labels, via }.
  function entryDrops(entry) {
    const type = bare(entry.type);
    const own = readConditions(entry.conditions);
    const labels = new Set([...own.labels, ...functionLabels(entry.functions)]);
    const out = new Map();
    const add = (item, chance, count, extra, via) => mergeBest(out, item, {
      chance: chance * own.chance,
      count,
      labels: new Set([...labels, ...(extra ?? [])]),
      via,
    });
    const stack = readCount(entry.functions);

    // moonlight:optional_item is a plain item entry that's skipped if its mod is missing.
    if ((type === 'item' || type === 'moonlight:optional_item') && entry.name) {
      add(entry.name, stack.chance, stack.count);
    } else if (type === 'placebo:stack_entry' && entry.stack?.item) {
      // Apotheosis's entry type: min/max replace the stack's own count.
      add(entry.stack.item, 1, { min: entry.min ?? entry.stack.count ?? 1, max: entry.max ?? entry.stack.count ?? 1 });
    } else if (type === 'tag' && entry.name) {
      const members = tags.get(entry.name) ?? [];
      // Expanded: each member is its own entry, so a roll of this weight lands on one of them.
      for (const item of members) add(item, stack.chance * (entry.expand ? 1 / members.length : 1), stack.count);
    } else if (type === 'loot_table' && (entry.name ?? entry.value)) {
      const nested = entry.name ?? entry.value;
      for (const [item, drop] of tableDrops(nested)) add(item, drop.chance, drop.count, drop.labels, drop.via ?? nested);
    } else if (entry.children) {
      for (const child of entry.children) for (const [item, drop] of entryDrops(child)) add(item, drop.chance, drop.count, drop.labels, drop.via);
    }
    return out;
  }

  // item -> { chance (at least one per run of the table), count, labels, via, perRoll } for one table.
  function tableDrops(id) {
    if (memo.has(id)) return memo.get(id);
    if (running.has(id)) return new Map();
    running.add(id);

    const pools = [];
    for (const pool of tables[id]?.pools ?? []) {
      const entries = pool.entries ?? [];
      const total = entries.reduce((sum, e) => sum + entryWeight(e), 0);
      if (!total) continue;
      const condition = readConditions(pool.conditions);
      const inPool = new Map();
      for (const entry of entries) {
        const share = entryWeight(entry) / total;
        for (const [item, drop] of entryDrops(entry)) {
          const old = inPool.get(item);
          // Entries of one pool exclude each other within a roll, so their chances add.
          inPool.set(item, old
            ? { chance: Math.min(1, old.chance + share * drop.chance), count: addRange(old.count, drop.count), labels: new Set([...old.labels, ...drop.labels]), via: old.via ?? drop.via }
            : { ...drop, chance: share * drop.chance });
        }
      }
      pools.push({ inPool, dist: rollDistribution(pool.rolls ?? 1), rolls: pool.rolls ?? 1, condition });
    }

    const out = new Map();
    for (const { inPool, dist, rolls, condition } of pools) {
      for (const [item, drop] of inPool) {
        let miss = 0;
        for (const [k, weight] of dist) miss += weight * (1 - drop.chance) ** k;
        const chance = condition.chance * (1 - miss);
        const labels = new Set([...drop.labels, ...condition.labels]);
        const old = out.get(item);
        out.set(item, old
          // Pools are independent. The count stays the size of one drop; rolls are reported separately.
          ? { chance: 1 - (1 - old.chance) * (1 - chance), count: addRange(old.count, drop.count), labels: new Set([...old.labels, ...labels]), via: old.via ?? drop.via, perRoll: null, rollsLabel: null }
          : { chance, count: drop.count, labels, via: drop.via, perRoll: drop.chance, rollsLabel: rollsText(rolls) });
      }
    }
    running.delete(id);
    memo.set(id, out);
    return out;
  }

  // Tables only other tables call (irons_spellbooks:magic_items/*) and test tables aren't places a player
  // finds anything, so their drops show under the tables that use them.
  const nested = new Set();
  const noteNested = entry => {
    if (bare(entry.type) === 'loot_table') nested.add(entry.name ?? entry.value);
    (entry.children ?? []).forEach(noteNested);
  };
  for (const json of Object.values(tables)) for (const pool of json?.pools ?? []) (pool.entries ?? []).forEach(noteNested);
  const isPlace = id => {
    const path = id.split(':')[1] ?? '';
    if (/(^|\/)test(\/|$)/.test(path)) return false;
    return !nested.has(id) || /^(chests?|entit(y|ies)|blocks|gameplay|archa?eology)\//.test(path);
  };

  let byItem = null;
  // Every table that can actually drop the item, likeliest first.
  function sourcesFor(item) {
    if (!byItem) {
      byItem = new Map();
      for (const table of Object.keys(tables).filter(isPlace)) {
        for (const [id, drop] of tableDrops(table)) {
          if (drop.chance <= 0) continue;
          let list = byItem.get(id);
          if (!list) byItem.set(id, list = []);
          list.push({ table, ...drop });
        }
      }
      for (const list of byItem.values()) list.sort((a, b) => b.chance - a.chance || a.table.localeCompare(b.table));
    }
    return byItem.get(item) ?? [];
  }

  return { sourcesFor, tableDrops };
}

// item id -> every loot-table entry that can drop it, for research (game-data/loot-index.json).
// Weight is out of the pool's total entry weight. Nested loot_table entries aren't followed here.
export function lootIndex(tables) {
  const index = {};
  const countOf = functions => {
    const fn = (functions ?? []).find(f => bare(f.function) === 'set_count');
    return fn ? fn.count : 1;
  };
  for (const [table, json] of Object.entries(tables)) {
    // A table the game failed to serialize comes through as null.
    (json?.pools ?? []).forEach((pool, p) => {
      const entries = pool.entries ?? [];
      const totalWeight = entries.reduce((sum, e) => sum + (e.weight ?? 1), 0);
      // Items inside alternatives/group/sequence entries share the parent's weight; `within` names it.
      const visit = (entry, weight, within) => {
        const type = bare(entry.type);
        const conditions = (entry.conditions?.length ?? 0) + (pool.conditions?.length ?? 0) > 0;
        const row = { table, pool: p, weight, totalWeight, rolls: pool.rolls ?? 1, conditions, ...(within && { within }) };
        if (type === 'item' && entry.name) (index[entry.name] ??= []).push({ ...row, count: countOf(entry.functions) });
        if (type === 'placebo:stack_entry' && entry.stack?.item) (index[entry.stack.item] ??= []).push({ ...row, count: { min: entry.min ?? 1, max: entry.max ?? 1 } });
        for (const child of entry.children ?? []) visit(child, weight, within ?? type);
      };
      for (const entry of entries) visit(entry, entry.weight ?? 1, null);
    });
  }
  return index;
}
