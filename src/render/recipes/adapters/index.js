// Adapters turn one recipe format's raw JSON into { inputs, outputs, shapeless?, info? }.
//   inputs:  one entry per station input slot, in order (null = empty slot)
//   outputs: [{ item, count, chance? }]
// They receive `r` with r.ingredient(json) and r.output(json, count) parsers (see ../index.js) and
// throw an Error when the JSON doesn't look like their format.
// Which recipe types use which adapter is configured per station in site/stations/*.json.

export const adapters = {
  // minecraft:crafting_shaped — "pattern" rows + "key", placed top-left in a 3x3 grid.
  shaped(json, r) {
    if (!Array.isArray(json.pattern) || typeof json.key !== 'object') throw new Error('expected "pattern" and "key"');
    const inputs = Array(9).fill(null);
    json.pattern.forEach((row, y) => Array.from(row).forEach((symbol, x) => {
      if (symbol === ' ') return;
      if (!json.key[symbol]) throw new Error(`pattern uses "${symbol}" but key doesn't define it`);
      inputs[y * 3 + x] = r.ingredient(json.key[symbol]);
    }));
    return { inputs, outputs: [r.output(json.result, json.count)] };
  },

  // minecraft:crafting_shapeless — up to 9 "ingredients" in any order.
  shapeless(json, r) {
    if (!Array.isArray(json.ingredients)) throw new Error('expected an "ingredients" list');
    return { inputs: json.ingredients.map(i => r.ingredient(i)), outputs: [r.output(json.result, json.count)], shapeless: true };
  },

  // minecraft:smelting / blasting / smoking / campfire_cooking.
  cooking(json, r) {
    const seconds = (json.cookingtime ?? 200) / 20;
    const info = [`${Number.isInteger(seconds) ? seconds : seconds.toFixed(1)} s`];
    if (json.experience) info.push(`${json.experience} XP`);
    return { inputs: [r.ingredient(json.ingredient)], outputs: [r.output(json.result, json.count)], info: info.join(' · ') };
  },

  // minecraft:stonecutting and other one-in, one-out recipes.
  single(json, r) {
    return { inputs: [r.ingredient(json.ingredient ?? json.input)], outputs: [r.output(json.result ?? json.output, json.count)] };
  },

  // minecraft:smithing_transform — template + base + addition.
  smithing(json, r) {
    return {
      inputs: [r.ingredient(json.template), r.ingredient(json.base), r.ingredient(json.addition)],
      outputs: [r.output(json.result, json.count)],
    };
  },

  // base + addition with no template, e.g. cataclysm:weapon_fusion (Mechanical Fusion Anvil).
  pair(json, r) {
    if (json.base === undefined || json.addition === undefined) throw new Error('expected "base" and "addition"');
    return { inputs: [r.ingredient(json.base), r.ingredient(json.addition)], outputs: [r.output(json.result, json.count)] };
  },

  // Best effort for mod recipes: collects the usual input/output field names into a row.
  generic(json, r) {
    const inputs = [];
    for (const field of ['ingredients', 'ingredient', 'inputs', 'input', 'tool']) {
      const value = json[field];
      if (value === undefined) continue;
      const list = Array.isArray(value) && field !== 'ingredient' ? value : [value];
      for (const entry of list) {
        const parsed = r.ingredient(entry);
        if (parsed) inputs.push(parsed);
      }
    }
    const outputs = [];
    for (const field of ['result', 'results', 'output', 'outputs']) {
      const value = json[field];
      if (value === undefined) continue;
      for (const entry of Array.isArray(value) ? value : [value]) {
        const parsed = r.output(entry);
        if (parsed) outputs.push(parsed);
      }
    }
    if (!inputs.length || !outputs.length) throw new Error('could not find inputs and outputs');
    const time = json.processingTime ?? json.processing_time ?? json.cookingtime ?? json.time;
    return { inputs, outputs, info: time ? `${time / 20} s` : undefined };
  },
};
