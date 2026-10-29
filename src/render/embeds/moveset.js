import { esc, humanize } from '../html.js';
import { mcTextToHtml, stripMcCodes } from '../../shared/mctext.js';

// An item's Epic Fight moveset from game-data/movesets.json: per style, its combo, dash and jump attacks
// and innate skill, plus what each skill does. Above the tables, a 3D viewer plays each attack on the
// player with target dummies (game-data/attacks.json, from npm run attacks; src/client/attack-viewer.js).
//   {{moveset minecraft:iron_sword}}
//   {{moveset type=epicfight:longsword}}   a weapon type without a particular item
//   {{moveset skill=epicfight:sweeping_edge}}   just the viewer, for an innate skill's animations
//   {{moveset category=longsword}}   every weapon type of a category: one viewer with a type selector
export default {
  positional: 'item',
  render(props, h) {
    const data = h.ctx.game.movesets;
    if (!data) h.fail('game-data/movesets.json is missing (run `npm run sync-game`)');
    if (props.skill) return skillViewer(String(props.skill), data, h);
    if (props.category) return categoryView(String(props.category), data, h);
    const item = props.item ? data.items[props.item] : null;
    if (props.item && !item) h.fail(`${props.item} has no Epic Fight moveset in game-data/movesets.json`);
    const typeId = props.type ?? item?.type;
    if (!typeId) h.fail('needs an item id or type=<weapon type>, e.g. {{moveset minecraft:iron_sword}}');
    const type = data.types[typeId];
    if (!type) h.fail(`unknown weapon type ${typeId}`);
    return render(type, typeId, item, data, h, props.item);
  },
};

const label = (map, id) => map[id] ?? humanize(id);
// Some mods name categories in the plural ("Light Greatswords", "Bats").
const category = (data, id) => label(data.labels.categories, id).replace(/(?<!s)s$/, '');
const skillName = (data, id) => stripMcCodes(data.skills[id]?.name ?? humanize(id)).trim();
const skillRef = (data, id) => `<b title="${esc(id)}">${esc(skillName(data, id))}</b>`;

// The starting style first, then the ones its rules switch to, then any others (mount last).
function styleOrder(type, item) {
  const styles = Object.keys(type.styles);
  const initial = item?.style && type.styles[item.style] ? item.style : type.defaultStyle && type.styles[type.defaultStyle] ? type.defaultStyle : styles[0];
  const ordered = [initial, ...type.rules.map(r => r.style), ...styles].filter((s, i, all) => type.styles[s] && all.indexOf(s) === i);
  ordered.sort((a, b) => (a === 'mount') - (b === 'mount'));
  return { ordered, initial };
}

function render(type, typeId, item, data, h, itemId, withViewer = true) {
  const styles = Object.keys(type.styles);
  const { ordered, initial } = styleOrder(type, item);
  const innateOf = style => (style === initial && item?.innate) || type.styles[style]?.innate;
  const facts = [`Epic Fight weapon category: <b>${esc(category(data, type.category ?? 'not_weapon'))}</b>.`];
  if (type.offhand === true) facts.push('It can be held in the off hand.');
  if (type.offhand === false) facts.push('It can\'t be held in the off hand.');

  if (type.ranged || !styles.length) {
    facts.push(type.ranged ? 'Epic Fight treats it as a ranged weapon, so it has no melee combo.' : 'It has no combo of its own.');
    return `<div class="moveset"><p class="moveset-facts">${facts.join(' ')}</p></div>\n`;
  }

  const when = style => {
    if (style === initial) return 'default';
    if (style === 'mount') return 'while riding';
    const rules = type.rules.filter(r => r.style === style);
    return rules.length ? rules.map(r => r.when.map(c => condition(c, data)).join(' and ')).join(', or ') : 'switched to by the weapon\'s skills';
  };

  let rows = '';
  const skills = new Set();
  for (const style of ordered) {
    const s = type.styles[style];
    rows += `<tr class="moveset-style"><th colspan="2">${esc(label(data.labels.styles, style))} <span>${esc(when(style))}</span></th></tr>`;
    if (style === 'mount') {
      rows += `<tr><th>Mounted attack</th><td>${combo(s.combo ?? [], type, data)}</td></tr>`;
      continue;
    }
    if (s.combo?.length) rows += `<tr><th>Basic attack</th><td>${s.combo.length} ${s.combo.length === 1 ? 'hit' : 'hits'}: ${combo(s.combo, type, data)}</td></tr>`;
    if (s.dash) rows += `<tr><th>Dash attack</th><td>${combo([s.dash], type, data)}</td></tr>`;
    if (s.air) rows += `<tr><th>Jump attack</th><td>${combo([s.air], type, data)}</td></tr>`;
    const innate = innateOf(style);
    if (innate) {
      rows += `<tr><th>Innate skill</th><td>${skillRef(data, innate)}</td></tr>`;
      skills.add(innate);
    }
  }
  if (type.passive) {
    rows += `<tr class="moveset-style"><th colspan="2">Passive skill</th></tr><tr><th>Always on</th><td>${skillRef(data, type.passive)}</td></tr>`;
    skills.add(type.passive);
  }

  const described = [...skills].filter(id => data.skills[id]?.tooltip);
  const list = described.length
    ? `<dl class="moveset-skills">${described.map(id => `<dt>${esc(skillName(data, id))}</dt><dd>${tooltip(data.skills[id].tooltip)}</dd>`).join('')}</dl>`
    : '';
  return `<div class="moveset"><p class="moveset-facts">${facts.join(' ')}</p>`
    + (withViewer ? viewerFor(typeSet(typeId, null, item, itemId, data, h), data, h) : '')
    + `<div class="table-wrap"><table class="moveset-table">${rows}</table></div>${list}</div>\n`;
}

// The attack viewer for a weapon type: a row of styles, then each style's moves. An item whose innate
// skill differs from its type's (the game's answer, see movesets.mjs) plays its own skill instead.
// The attack viewer's set for a weapon type: its styles and their moves. An item whose innate skill
// differs from its type's (the game's answer, see movesets.mjs) plays its own skill instead.
function typeSet(typeId, label0, item, itemId, data, h) {
  const attacks = h.ctx.game.attacks;
  const entry = attacks?.types[typeId];
  const type = data.types[typeId];
  if (!entry || !type) return null;
  const { ordered, initial } = styleOrder(type, item);
  // An item page shows its own weapon when it has a model; otherwise the type's. Some weapons change
  // model in a style (styleItems).
  const model = (itemId && attacks.items?.[itemId]) ?? entry.model;
  const held = model === entry.model ? entry.item : itemId;
  const styles = ordered.filter(s => entry.styles[s]).map(style => {
    let moves = entry.styles[style].moves;
    if (style === initial && item?.innate && attacks.skills[item.innate]) {
      moves = moves.filter(m => !m.skill).concat(attacks.skills[item.innate].moves.map(m => ({ ...m, skill: item.innate })));
    }
    return { label: label(data.labels.styles, style), dual: entry.styles[style].dual, model: attacks.styleItems?.[held]?.[style], moves };
  });
  if (!styles.length) return null;
  return { label: label0, styles, model, held };
}

function skillViewer(skillId, data, h) {
  const skill = h.ctx.game.attacks?.skills[skillId];
  if (!skill) return `<p class="moveset-facts">No animation for ${esc(skillName(data, skillId))} was found in the game files.</p>\n`;
  const set = { styles: [{ label: skillName(data, skillId), moves: skill.moves.map(m => ({ ...m, skill: skillId })) }], model: skill.model, held: skill.item };
  return `<div class="moveset">${viewer([set], data, h)}</div>\n`;
}

// Every weapon type of an Epic Fight category (a weapon type page): one viewer with a type selector,
// then each type's tables, folded.
function categoryView(category, data, h) {
  const ids = Object.keys(data.types).filter(id => (data.types[id].category ?? '') === category).sort();
  if (!ids.length) h.fail(`no weapon types have the category ${category}`);
  // "Ruine (Weapons of miracle)"; Soulrend's own datapack types say so. Names that repeat get the id.
  const source = id => data.mods[id.split(':')[0]] ?? (String(data.types[id].mod ?? '').startsWith('paxi:') ? 'Soulrend' : id.split(':')[0]);
  const base = id => `${humanize(id.split(':')[1])} (${source(id)})`;
  const name = id => (ids.filter(other => base(other) === base(id)).length > 1 ? `${base(id)}, ${id}` : base(id));
  const sets = ids.map(id => typeSet(id, name(id), null, null, data, h)).filter(Boolean);
  const tables = ids.map(id => `<details class="moveset-type"><summary>${esc(name(id))} <code>${esc(id)}</code></summary>${render(data.types[id], id, null, data, h, null, false)}</details>`).join('');
  const facts = `${ids.length} weapon ${ids.length === 1 ? 'type uses' : 'types use'} this category.`;
  return `<div class="moveset"><p class="moveset-facts">${facts}</p>${sets.length ? viewer(sets, data, h) : ''}${tables}</div>\n`;
}

const viewerFor = (set, data, h) => (set ? viewer([set], data, h) : '');

// Buttons for each style and its moves, grouped (combo, other attacks, the innate skill), and the
// viewer's data: asset URLs, each move's clip, dummies and hit times. Several sets (weapon types) get a
// selector, each set its own rows.
function viewer(sets, data, h) {
  const attacks = h.ctx.game.attacks;
  const groupOf = m => (m.skill ? 'skill' : /^(Auto|Mounted) \d+$/.test(m.label) ? 'combo' : 'other');
  const groupName = { combo: 'Combo', other: 'Moves', skill: 'Skill' };
  const config = {
    player: h.asset(attacks.player.model),
    dummy: { model: h.asset(attacks.dummy.model), size: attacks.dummy.size },
    horse: { model: h.asset(attacks.horse.model), rider: attacks.horse.rider },
    sets: sets.map(set => ({
      item: set.model ? h.asset(set.model) : null,
      styles: set.styles.map(s => ({
        dual: !!s.dual,
        ...(s.model ? { item: h.asset(s.model) } : {}),
        moves: s.moves.map(m => {
          const anim = attacks.animations[m.anim];
          // A weapon can draw another model during some moves (moveItems: Nightfall's Yamato unsheathed).
          const swap = attacks.moveItems?.[set.held];
          return {
            clip: h.asset(anim.clip), length: anim.length, targets: m.targets ?? [], hits: m.hits ?? [], travel: m.travel ?? null, loop: !!m.loop, mount: !!m.mount,
            ...(swap?.anims.includes(m.anim.replace(/@mount$/, '')) ? { item: h.asset(swap.model) } : {}),
          };
        }),
      })),
    })),
  };
  const heldName = set => (set.held ? stripMcCodes(h.ctx.game.items.get(set.held)?.name ?? humanize(set.held.split(':')[1])) : null);
  const typeRow = sets.length > 1
    ? `<div class="model-picker attack-types"><label class="model-axis">Type <select class="attack-type">${sets.map((set, i) => `<option value="${i}">${esc(set.label)}</option>`).join('')}</select></label></div>`
    : '';
  const setRows = sets.map((set, n) => {
    const styleRow = set.styles.length > 1
      ? `<div class="model-picker attack-styles" role="group" aria-label="Style"><span class="model-axis">Style</span>${set.styles.map((s, i) => `<button type="button" class="model-pick" aria-pressed="${i === 0}">${esc(s.label)}</button>`).join('')}</div>`
      : '';
    const moveRows = set.styles.map((s, i) => {
      let html = '', group = null;
      const labels = skillLabels(s.moves);
      s.moves.forEach((m, k) => {
        const g = groupOf(m);
        if (g !== group) {
          html += `${group ? '</div>' : ''}<div class="attack-group"><span class="model-axis">${esc(g === 'skill' ? skillName(data, m.skill) : groupName[g])}</span>`;
          group = g;
        }
        html += `<button type="button" class="model-pick" aria-pressed="${k === 0}" title="${esc(m.anim.replace(/@mount$/, ''))}">${esc(labels.get(m) ?? m.label)}</button>`;
      });
      return `<div class="model-picker attack-moves" role="group" aria-label="${esc(s.label)} moves"${i ? ' hidden' : ''}>${html}</div></div>`;
    }).join('');
    return `<div class="attack-set"${n ? ' hidden' : ''}>${styleRow}${moveRows}</div>`;
  }).join('');
  const captions = sets.map((set, n) => `<span class="attack-held"${n ? ' hidden' : ''}>${heldName(set) ? `Shown with ${esc(heldName(set))}.` : 'Shown without a held weapon.'}</span>`).join('');
  return `<figure class="embed-model embed-attacks" style="--model-height:360px">${typeRow}${setRows}`
    + `<div class="model-stage attack-stage" data-attacks="${esc(JSON.stringify(config))}"><span class="model-placeholder" aria-hidden="true"></span><span class="model-status" aria-live="polite"></span></div>`
    + `<figcaption>${captions} Target dummies stand where the attack's hitboxes reach; they wobble when hit.</figcaption></figure>`;
}

// A skill's buttons: "Activate" for a single animation, else the clip names without the words they all
// start with ("Grasping spire first", "… second" → "First", "Second").
function skillLabels(moves) {
  const out = new Map();
  const bySkill = new Map();
  for (const m of moves) if (m.skill) { if (!bySkill.has(m.skill)) bySkill.set(m.skill, []); bySkill.get(m.skill).push(m); }
  for (const list of bySkill.values()) {
    if (list.length === 1) { out.set(list[0], 'Activate'); continue; }
    const words = list.map(m => m.label.split(' '));
    let common = 0;
    while (words.every(w => w.length > common + 1 && w[common].toLowerCase() === words[0][common].toLowerCase())) common++;
    for (const [i, m] of list.entries()) {
      const rest = words[i].slice(common).join(' ');
      out.set(m, rest.charAt(0).toUpperCase() + rest.slice(1));
    }
  }
  return out;
}

// "wom:SOLAR_AUTO_1" (a Java field) or "wom:biped/combat/solar_auto_1" (a datapack id) -> "Solar auto 1".
function animName(id) {
  const name = id.slice(id.indexOf(':') + 1).split('/').pop().toLowerCase().replace(/_+/g, ' ').replace(/([a-z])(\d+)$/, '$1 $2').trim();
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// Consecutive hits from one set ("Longsword auto 1", "… 2", "… 3") collapse to "Longsword auto 1–3".
function combo(list, type, data) {
  const groups = [];
  for (const id of list) {
    const mod = id.split(':')[0];
    const name = animName(id);
    const m = /^(.*) (\d+)$/.exec(name);
    const last = groups.at(-1);
    if (m && last && last.base === m[1] && last.mod === mod && last.to + 1 === +m[2]) last.to++;
    else groups.push(m ? { base: m[1], from: +m[2], to: +m[2], mod } : { name, mod });
  }
  return groups.map(g => {
    const text = g.base ? `${g.base} ${g.from}${g.to > g.from ? `–${g.to}` : ''}` : g.name;
    const from = g.mod !== type.mod && data.mods[g.mod] ? ` <small>(${esc(data.mods[g.mod])})</small>` : '';
    return `<span class="moveset-anim">${esc(text)}${from}</span>`;
  }).join(' → ');
}

function condition(c, data) {
  if (c.offhand) return c.offhand === 'not_weapon' ? 'with no weapon in the off hand' : `with a ${category(data, c.offhand).toLowerCase()} in the off hand`;
  if (c.skill) return `while ${skillName(data, c.skill)} is active`;
  if (c.innateActive) return 'while its innate skill is active';
  if (c.passiveActive) return 'while its passive skill is active';
  const state = c.innateState ?? c.passiveState;
  if (state) {
    const owner = c.innateState ? 'innate skill' : 'passive skill';
    const value = c.value === undefined || c.value === true || c.value === 1 ? '' : ` at ${c.value}`;
    return `when its ${owner} sets "${humanize(state).toLowerCase()}"${value}`;
  }
  if (c.charged) return 'during a charged attack';
  return `when ${c.other ?? 'a mod condition'} holds`;
}

// Skill tooltips use format placeholders the game fills in (%s, %d); sentences with one are dropped.
function tooltip(text) {
  return String(text).split('\n')
    .map(line => line.split(/(?<=[.!?])\s+/).filter(s => !/%(\d+\$)?[-.\d]*[sdf]/.test(s)).join(' ').replaceAll('%%', '%').trim())
    .filter(line => stripMcCodes(line).trim())
    .map(mcTextToHtml)
    .join('<br>');
}
