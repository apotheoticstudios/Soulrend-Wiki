// A small Molang evaluator for animation keyframes: numbers, arithmetic, comparisons, ternaries and the
// math.* functions (trigonometry in degrees, as in Molang). query.anim_time / life_time are the sample
// time; every other query and variable reads as 0, which is what an idle entity in a viewer would see.
const FUNCS = {
  sin: d => Math.sin(d * Math.PI / 180), cos: d => Math.cos(d * Math.PI / 180),
  asin: v => Math.asin(v) * 180 / Math.PI, acos: v => Math.acos(v) * 180 / Math.PI,
  atan: v => Math.atan(v) * 180 / Math.PI, atan2: (y, x) => Math.atan2(y, x) * 180 / Math.PI,
  abs: Math.abs, sqrt: Math.sqrt, pow: Math.pow, exp: Math.exp, ln: Math.log,
  floor: Math.floor, ceil: Math.ceil, round: Math.round, trunc: Math.trunc,
  min: Math.min, max: Math.max, mod: (a, b) => a % b, clamp: (v, lo, hi) => Math.min(hi, Math.max(lo, v)),
  lerp: (a, b, t) => a + (b - a) * t, lerprotate: (a, b, t) => a + (b - a) * t,
  random: (a = 0, b = 1) => (a + b) / 2, random_integer: (a = 0, b = 0) => Math.round((a + b) / 2),
  die_roll: (n, lo, hi) => n * (lo + hi) / 2, hermite_blend: t => 3 * t * t - 2 * t * t * t,
  sign: Math.sign, to_rad: d => d * Math.PI / 180, to_deg: r => r * 180 / Math.PI,
};

export function compileMolang(src) {
  if (typeof src === 'number') return () => src;
  if (typeof src !== 'string' || !src.trim()) return () => 0;
  const text = src.toLowerCase().replace(/;\s*$/, '');
  if (/^-?\d+(\.\d+)?$/.test(text.trim())) { const v = Number(text); return () => v; }
  let ast;
  try { ast = parse(tokenize(text)); } catch { return () => 0; }
  return t => { const v = evaluate(ast, t); return Number.isFinite(v) ? v : 0; };
}

function tokenize(s) {
  const out = [];
  const re = /\s*(\d+\.?\d*(?:e[+-]?\d+)?f?|\.\d+|[a-z_][a-z0-9_.]*|&&|\|\||==|!=|<=|>=|\?\?|[-+*/%()<>!?:,])/gy;
  let m;
  while (re.lastIndex < s.length && (m = re.exec(s))) out.push(m[1]);
  if (re.lastIndex < s.trimEnd().length) throw new Error('bad token');
  return out;
}

function parse(tokens) {
  let i = 0;
  const peek = () => tokens[i], next = () => tokens[i++];
  const expect = t => { if (next() !== t) throw new Error(`expected ${t}`); };
  const ternary = () => {
    const cond = binary(0);
    if (peek() === '?') { next(); const a = ternary(); if (peek() === ':') { next(); return { op: '?:', cond, a, b: ternary() }; } return { op: '?:', cond, a, b: { num: 0 } }; }
    return cond;
  };
  const LEVELS = [['??'], ['||'], ['&&'], ['==', '!='], ['<', '>', '<=', '>='], ['+', '-'], ['*', '/', '%']];
  const binary = level => {
    if (level === LEVELS.length) return unary();
    let left = binary(level + 1);
    while (LEVELS[level].includes(peek())) { const op = next(); left = { op, a: left, b: binary(level + 1) }; }
    return left;
  };
  const unary = () => {
    if (peek() === '-') { next(); return { op: 'neg', a: unary() }; }
    if (peek() === '+') { next(); return unary(); }
    if (peek() === '!') { next(); return { op: '!', a: unary() }; }
    return primary();
  };
  const primary = () => {
    const t = next();
    if (t === undefined) throw new Error('end');
    if (t === '(') { const e = ternary(); expect(')'); return e; }
    if (/^[\d.]/.test(t)) return { num: parseFloat(t) };
    if (peek() === '(') {
      next();
      const args = [];
      if (peek() !== ')') { args.push(ternary()); while (peek() === ',') { next(); args.push(ternary()); } }
      expect(')');
      return { call: t.replace(/^math\./, ''), args };
    }
    if (t === 'math.pi') return { num: Math.PI };
    if (/^(q|query)\.(anim_time|life_time)$/.test(t)) return { time: true };
    if (t === 'true') return { num: 1 };
    return { num: 0 };
  };
  const ast = ternary();
  if (i < tokens.length) throw new Error('trailing tokens');
  return ast;
}

function evaluate(n, t) {
  if (n.num !== undefined) return n.num;
  if (n.time) return t;
  if (n.call) { const f = FUNCS[n.call]; return f ? f(...n.args.map(a => evaluate(a, t))) : 0; }
  const a = () => evaluate(n.a, t), b = () => evaluate(n.b, t);
  switch (n.op) {
    case 'neg': return -a();
    case '!': return a() ? 0 : 1;
    case '+': return a() + b();
    case '-': return a() - b();
    case '*': return a() * b();
    case '/': { const d = b(); return d ? a() / d : 0; }
    case '%': return a() % b();
    case '<': return +(a() < b());
    case '>': return +(a() > b());
    case '<=': return +(a() <= b());
    case '>=': return +(a() >= b());
    case '==': return +(a() === b());
    case '!=': return +(a() !== b());
    case '&&': return +(a() && b());
    case '||': return +(a() || b());
    case '??': return a();
    case '?:': return evaluate(n.cond, t) ? a() : b();
  }
  return 0;
}
