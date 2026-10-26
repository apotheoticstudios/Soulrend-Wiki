import { esc, humanize } from '../html.js';
import { mcTextToHtml, stripMcCodes } from '../../shared/mctext.js';

// An item's Epic Fight moveset from game-data/movesets.json: per style, its combo, dash and jump attacks
// and innate skill, plus what each skill does.
//   {{moveset minecraft:iron_sword}}
//   {{moveset type=epicfight:longsword}}   a weapon type without a particular item
export default {
  positional: 'item',
  render(props, h) {
    const data = h.ctx.game.movesets;
    if (!data) h.fail('game-data/movesets.json is missing (run `npm run sync-game`)');
    const item = props.item ? data.items[props.item] : null;
    if (props.item && !item) h.fail(`${props.item} has no Epic Fight moveset in game-data/movesets.json`);
    const typeId = props.type ?? item?.type;
    if (!typeId) h.fail('needs an item id or type=<weapon type>, e.g. {{moveset minecraft:iron_sword}}');
    const type = data.types[typeId];
    if (!type) h.fail(`unknown weapon type ${typeId}`);
    return render(type, typeId, item, data);
  },
};

const label = (map, id) => map[id] ?? humanize(id);
// Some mods name categories in the plural ("Light Greatswords", "Bats").
const category = (data, id) => label(data.labels.categories, id).replace(/(?<!s)s$/, '');
const skillName = (data, id) => stripMcCodes(data.skills[id]?.name ?? humanize(id)).trim();
const skillRef = (data, id) => `<b title="${esc(id)}">${esc(skillName(data, id))}</b>`;

function render(type, typeId, item, data) {
  const styles = Object.keys(type.styles);
  const initial = item?.style && type.styles[item.style] ? item.style : type.defaultStyle && type.styles[type.defaultStyle] ? type.defaultStyle : styles[0];
  const innateOf = style => (style === initial && item?.innate) || type.styles[style]?.innate;
  const facts = [`Epic Fight weapon category: <b>${esc(category(data, type.category ?? 'not_weapon'))}</b>.`];
  if (type.offhand === true) facts.push('It can be held in the off hand.');
  if (type.offhand === false) facts.push('It can\'t be held in the off hand.');

  if (type.ranged || !styles.length) {
    facts.push(type.ranged ? 'Epic Fight treats it as a ranged weapon, so it has no melee combo.' : 'It has no combo of its own.');
    return `<div class="moveset"><p class="moveset-facts">${facts.join(' ')}</p></div>\n`;
  }

  // The starting style first, then the ones its rules switch to, then any others (mount last).
  const ordered = [initial, ...type.rules.map(r => r.style), ...styles].filter((s, i, all) => type.styles[s] && all.indexOf(s) === i);
  ordered.sort((a, b) => (a === 'mount') - (b === 'mount'));
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
    + `<div class="table-wrap"><table class="moveset-table">${rows}</table></div>${list}</div>\n`;
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
