// A small JVM bytecode interpreter for replaying model-building code (createBodyLayer, model constructors).
// It runs real mod, library and vanilla bytecode with a few native stand-ins (collections, Math, boxing).
// Anything it can't load becomes an opaque value that absorbs calls, so render-only code paths don't
// stop a model from being built. It is not a verifier or a sandbox: it only ever reads model code.
import { readClass } from '../classfile.mjs';

const TOP = Symbol('top');            // second slot of a long/double, on the stack and in locals
export class JvmError extends Error {}

export function opaque(cls = 'java/lang/Object') { return { $class: cls, $opaque: true, $f: {} }; }
const isObj = v => v && typeof v === 'object';
const javaHash = s => { let h = 0; for (const ch of s) h = (Math.imul(31, h) + ch.charCodeAt(0)) | 0; return h; };

// Default value for a descriptor's return type.
function defaultFor(desc) {
  const ret = desc.slice(desc.indexOf(')') + 1);
  if (ret === 'V') return undefined;
  if ('ZBCSIJFD'.includes(ret[0])) return 0;
  if (ret.startsWith('L')) return opaque(ret.slice(1, -1));
  return [];
}

// Parameter types of a descriptor: 'I', 'J', 'L...;', '[...'.
export function paramTypes(desc) {
  const out = [];
  for (let i = 1; desc[i] !== ')';) {
    const start = i;
    while (desc[i] === '[') i++;
    if (desc[i] === 'L') i = desc.indexOf(';', i);
    out.push(desc.slice(start, ++i));
  }
  return out;
}
const wide = t => t === 'J' || t === 'D';

export class Jvm {
  // classPath(name) → class bytes or null. rename(name) maps SRG member names to readable ones.
  // natives: { 'owner.name': (jvm, args, desc, self) => value } — `self` is the receiver for instance calls.
  // skipInit(name): classes whose static initializer shouldn't run (their static fields read as opaque).
  constructor({ classPath, rename = n => n, natives = {}, maxSteps = 5e6, skipInit = () => false }) {
    this.classPath = classPath;
    this.skipInit = skipInit;
    this.rename = rename;
    this.natives = natives;
    this.classes = new Map();
    this.statics = new Map();
    this.steps = 0;
    this.maxSteps = maxSteps;
    this.depth = 0;
    this.failures = [];
  }

  klass(name) {
    if (this.classes.has(name)) return this.classes.get(name);
    let cls = null;
    const bytes = name && !name.startsWith('[') ? this.classPath(name) : null;
    if (bytes) {
      cls = readClass(bytes);
      cls.byKey = new Map(cls.methods.map(m => [this.rename(m.name) + m.desc, m]));
    }
    this.classes.set(name, cls);
    return cls;
  }

  isSubclass(name, of) {
    for (let c = name, depth = 0; c && depth < 32; depth++) {
      if (c === of) return true;
      c = this.klass(c)?.superName;
    }
    return false;
  }

  newObject(cls) { return { $class: cls, $f: {} }; }

  // `new X`: JDK collections become native lists and maps, unknown classes opaque values.
  instantiate(name) {
    const missing = !this.klass(name)?.byKey.size;
    if (missing && /(List|Collection|Set)$/.test(name)) return { $class: name, $list: [], $f: {} };
    if (missing && /Map$/.test(name)) return { $class: name, $map: new Map(), $f: {} };
    return this.klass(name) || this.natives[`${name}.<init>`] ? this.newObject(name) : opaque(name);
  }

  staticsOf(cls) {
    if (!this.statics.has(cls)) {
      const fields = {};
      this.statics.set(cls, fields);
      const k = this.klass(cls);
      const clinit = k?.byKey.get('<clinit>()V');
      if (clinit && !this.skipInit(cls) && !this.isSubclass(cls, 'net/minecraft/world/entity/Entity')) {
        try { this.execute(k, clinit, []); } catch (e) { if (!(e instanceof JvmError)) throw e; }
      }
    }
    return this.statics.get(cls);
  }

  getStatic(owner, name, desc) {
    // Walk up: a static field may be declared on a superclass or interface we can't see.
    for (let c = owner, depth = 0; c && depth < 16; depth++) {
      const fields = this.staticsOf(c);
      if (name in fields) return fields[name];
      c = this.klass(c)?.superName;
    }
    const native = this.natives[`${owner}.${name}`];
    if (native) return native(this);
    return desc.startsWith('L') ? opaque(desc.slice(1, -1)) : 0;
  }

  // Finds the bytecode for owner.name+desc, walking superclasses.
  resolve(owner, name, desc) {
    for (let c = owner, depth = 0; c && depth < 32; depth++) {
      const k = this.klass(c);
      if (!k) return null;
      const m = k.byKey.get(name + desc);
      if (m && m.bytes) return { cls: k, method: m };
      if (m && !m.bytes && !(m.access & 0x400)) return null; // native method
      c = k.superName;
    }
    return null;
  }

  // Invokes a method. `self` is the receiver for instance methods (undefined for static ones).
  invoke(owner, name, desc, args, self, special = false) {
    if (isObj(self) && self.$lambda) return this.callLambda(self, args);
    if (Array.isArray(self)) return name === 'clone' ? self.slice() : defaultFor(desc);
    const native = this.natives[`${owner}.${name}`] ?? this.natives[`*.${name}`];
    if (native) {
      let value;
      try { value = native(this, args, desc, self, owner); } catch (e) { throw e instanceof JvmError ? e : new JvmError(`native ${owner}.${name}: ${e.message}`); }
      if (value !== Jvm.PASS) return value;
    }
    if (isObj(self) && (self.$list || self.$map)) return collectionCall(this, self, name, args, desc);
    // Opaque values (an entity we never built) absorb calls rather than run their class's code.
    if (isObj(self) && self.$opaque && name !== '<init>') return this.defaultValue(desc);
    const start = !special && isObj(self) && !self.$opaque && self.$class ? self.$class : owner;
    const found = this.resolve(start, name, desc) ?? (start !== owner ? this.resolve(owner, name, desc) : null);
    if (!found) return this.defaultValue(desc);
    const locals = [];
    if (self !== undefined) locals.push(self);
    const types = paramTypes(desc);
    types.forEach((t, i) => { locals.push(args[i]); if (wide(t)) locals.push(TOP); });
    if (++this.depth > 200) { this.depth--; throw new JvmError('call depth'); }
    try {
      return this.execute(found.cls, found.method, locals);
    } catch (e) {
      // A throwing callee (validation, render-only state) shouldn't sink the whole model; the caller
      // gets a default value and the failure is kept for the report.
      if (!(e instanceof JvmError) || this.depth === 1 || e.message === 'step limit') throw e;
      this.failures.push(`${owner}.${name}: ${e.message}`);
      return defaultFor(desc);
    } finally {
      this.depth--;
    }
  }

  // What an unknown call returns. An enum getter on an opaque entity gets the enum's first constant,
  // usually its neutral state (IllagerArmPose.CROSSED, HumanoidModel.ArmPose.EMPTY).
  defaultValue(desc) {
    const ret = desc.slice(desc.indexOf(')') + 1);
    if (ret.startsWith('L')) {
      const cls = ret.slice(1, -1);
      if (this.klass(cls)?.superName === 'java/lang/Enum') {
        const values = Object.values(this.staticsOf(cls)).find(v => Array.isArray(v) && v.length && v[0]?.$class === cls);
        if (values) return values[0];
      }
    }
    return defaultFor(desc);
  }

  callLambda(fn, args) {
    const { owner, name, desc } = fn.$lambda;
    const all = [...fn.$captured, ...args];
    // A constructor reference (Foo::new) builds a new object; it isn't an instance call on its first argument.
    if (name === '<init>') { const obj = this.instantiate(owner); this.invoke(owner, '<init>', desc.replace(/\)L[^;]+;$/, ')V'), all, obj, true); return obj; }
    const target = this.klass(owner)?.byKey.get(this.rename(name) + desc);
    if (target && !(target.access & 8)) return this.invoke(owner, this.rename(name), desc, all.slice(1), all[0]);
    return this.invoke(owner, this.rename(name), desc, all);
  }

  execute(cls, method, locals) {
    const code = method.bytes;
    const view = new DataView(code.buffer, code.byteOffset, code.byteLength);
    const stack = [];
    const push = v => stack.push(v);
    const push2 = v => stack.push(v, TOP);
    const pop = () => stack.pop();
    const pop2 = () => { stack.pop(); return stack.pop(); };
    const member = i => { const m = cls.member(i); return { ...m, name: this.rename(m.name) }; };
    const f32 = Math.fround;
    let pc = 0;
    for (;;) {
      if (++this.steps > this.maxSteps) throw new JvmError('step limit');
      const op = code[pc];
      const at = pc + 1;
      const s8 = () => view.getInt8(at), u8 = () => code[at], s16 = () => view.getInt16(at), u16 = () => view.getUint16(at);
      let next = pc + 1;
      switch (op) {
        case 0x00: break;
        case 0x01: push(null); break;
        case 0x02: case 0x03: case 0x04: case 0x05: case 0x06: case 0x07: case 0x08: push(op - 3); break;
        case 0x09: case 0x0a: push2(op - 0x09); break;
        case 0x0b: case 0x0c: case 0x0d: push(op - 0x0b); break;
        case 0x0e: case 0x0f: push2(op - 0x0e); break;
        case 0x10: push(s8()); next = pc + 2; break;
        case 0x11: push(s16()); next = pc + 3; break;
        case 0x12: case 0x13: case 0x14: {
          const index = op === 0x12 ? u8() : u16();
          next = pc + (op === 0x12 ? 2 : 3);
          const c = cls.constant(index);
          const value = c.string !== undefined ? c.string : c.class !== undefined ? { $class: 'java/lang/Class', $name: c.class, $f: {} } : c.number;
          if (op === 0x14) push2(value); else push(value);
          break;
        }
        case 0x15: case 0x17: case 0x19: push(locals[u8()]); next = pc + 2; break;
        case 0x16: case 0x18: push2(locals[u8()]); next = pc + 2; break;
        case 0x1a: case 0x1b: case 0x1c: case 0x1d: push(locals[op - 0x1a]); break;
        case 0x1e: case 0x1f: case 0x20: case 0x21: push2(locals[op - 0x1e]); break;
        case 0x22: case 0x23: case 0x24: case 0x25: push(locals[op - 0x22]); break;
        case 0x26: case 0x27: case 0x28: case 0x29: push2(locals[op - 0x26]); break;
        case 0x2a: case 0x2b: case 0x2c: case 0x2d: push(locals[op - 0x2a]); break;
        case 0x2e: case 0x30: case 0x32: case 0x33: case 0x34: case 0x35: { const i = pop(), a = pop(); push(Array.isArray(a) ? a[i] ?? 0 : 0); break; }
        case 0x2f: case 0x31: { const i = pop(), a = pop(); push2(Array.isArray(a) ? a[i] ?? 0 : 0); break; }
        case 0x36: case 0x38: case 0x3a: locals[u8()] = pop(); next = pc + 2; break;
        case 0x37: case 0x39: locals[u8()] = pop2(); locals[u8() + 1] = TOP; next = pc + 2; break;
        case 0x3b: case 0x3c: case 0x3d: case 0x3e: locals[op - 0x3b] = pop(); break;
        case 0x3f: case 0x40: case 0x41: case 0x42: locals[op - 0x3f] = pop2(); locals[op - 0x3f + 1] = TOP; break;
        case 0x43: case 0x44: case 0x45: case 0x46: locals[op - 0x43] = pop(); break;
        case 0x47: case 0x48: case 0x49: case 0x4a: locals[op - 0x47] = pop2(); locals[op - 0x47 + 1] = TOP; break;
        case 0x4b: case 0x4c: case 0x4d: case 0x4e: locals[op - 0x4b] = pop(); break;
        case 0x4f: case 0x51: case 0x53: case 0x54: case 0x55: case 0x56: { const v = pop(), i = pop(), a = pop(); if (Array.isArray(a)) a[i] = v; break; }
        case 0x50: case 0x52: { const v = pop2(), i = pop(), a = pop(); if (Array.isArray(a)) a[i] = v; break; }
        case 0x57: pop(); break;
        case 0x58: stack.length -= 2; break;
        case 0x59: push(stack.at(-1)); break;
        case 0x5a: { const a = pop(), b = pop(); push(a); push(b); push(a); break; }
        case 0x5b: { const a = pop(), b = pop(), c = pop(); push(a); push(c); push(b); push(a); break; }
        case 0x5c: { const a = stack.at(-1), b = stack.at(-2); push(b); push(a); break; }
        case 0x5d: { const a = pop(), b = pop(), c = pop(); push(b); push(a); push(c); push(b); push(a); break; }
        case 0x5e: { const a = pop(), b = pop(), c = pop(), d = pop(); push(b); push(a); push(d); push(c); push(b); push(a); break; }
        case 0x5f: { const a = pop(), b = pop(); push(a); push(b); break; }
        case 0x60: { const b = pop(), a = pop(); push((a + b) | 0); break; }
        case 0x61: case 0x63: { const b = pop2(), a = pop2(); push2(a + b); break; }
        case 0x62: { const b = pop(), a = pop(); push(f32(a + b)); break; }
        case 0x64: { const b = pop(), a = pop(); push((a - b) | 0); break; }
        case 0x65: case 0x67: { const b = pop2(), a = pop2(); push2(a - b); break; }
        case 0x66: { const b = pop(), a = pop(); push(f32(a - b)); break; }
        case 0x68: { const b = pop(), a = pop(); push(Math.imul(a, b)); break; }
        case 0x69: case 0x6b: { const b = pop2(), a = pop2(); push2(a * b); break; }
        case 0x6a: { const b = pop(), a = pop(); push(f32(a * b)); break; }
        case 0x6c: { const b = pop(), a = pop(); if (!b) throw new JvmError('division by zero'); push((a / b) | 0); break; }
        case 0x6d: { const b = pop2(), a = pop2(); if (!b) throw new JvmError('division by zero'); push2(Math.trunc(a / b)); break; }
        case 0x6e: { const b = pop(), a = pop(); push(f32(a / b)); break; }
        case 0x6f: { const b = pop2(), a = pop2(); push2(a / b); break; }
        case 0x70: { const b = pop(), a = pop(); if (!b) throw new JvmError('division by zero'); push(a % b | 0); break; }
        case 0x71: case 0x73: { const b = pop2(), a = pop2(); push2(a % b); break; }
        case 0x72: { const b = pop(), a = pop(); push(f32(a % b)); break; }
        case 0x74: push(-pop() | 0); break;
        case 0x75: case 0x77: push2(-pop2()); break;
        case 0x76: push(-pop()); break;
        case 0x78: { const b = pop(), a = pop(); push(a << b); break; }
        case 0x79: { const b = pop(), a = pop2(); push2(a * 2 ** (b & 63)); break; }
        case 0x7a: { const b = pop(), a = pop(); push(a >> b); break; }
        case 0x7b: case 0x7d: { const b = pop(), a = pop2(); push2(Math.floor(a / 2 ** (b & 63))); break; }
        case 0x7c: { const b = pop(), a = pop(); push(a >>> b | 0); break; }
        case 0x7e: { const b = pop(), a = pop(); push(a & b); break; }
        case 0x7f: { const b = pop2(), a = pop2(); push2(Number(BigInt(a) & BigInt(b))); break; }
        case 0x80: { const b = pop(), a = pop(); push(a | b); break; }
        case 0x81: { const b = pop2(), a = pop2(); push2(Number(BigInt(a) | BigInt(b))); break; }
        case 0x82: { const b = pop(), a = pop(); push(a ^ b); break; }
        case 0x83: { const b = pop2(), a = pop2(); push2(Number(BigInt(a) ^ BigInt(b))); break; }
        case 0x84: locals[u8()] = (locals[u8()] + view.getInt8(at + 1)) | 0; next = pc + 3; break;
        case 0x85: push2(pop()); break;                 // i2l
        case 0x86: push(f32(pop())); break;             // i2f
        case 0x87: push2(pop()); break;                 // i2d
        case 0x88: push(Number(BigInt.asIntN(32, BigInt(Math.trunc(pop2()))))); break; // l2i
        case 0x89: push(f32(pop2())); break;            // l2f
        case 0x8a: push2(pop2()); break;                // l2d
        case 0x8b: push(toInt(pop())); break;           // f2i
        case 0x8c: push2(Math.trunc(pop())); break;     // f2l
        case 0x8d: push2(pop()); break;                 // f2d
        case 0x8e: push(toInt(pop2())); break;          // d2i
        case 0x8f: push2(Math.trunc(pop2())); break;    // d2l
        case 0x90: push(f32(pop2())); break;            // d2f
        case 0x91: push((pop() << 24) >> 24); break;
        case 0x92: push(pop() & 0xffff); break;
        case 0x93: push((pop() << 16) >> 16); break;
        case 0x94: { const b = pop2(), a = pop2(); push(Math.sign(a - b)); break; }
        case 0x95: case 0x96: { const b = pop(), a = pop(); push(Number.isNaN(a) || Number.isNaN(b) ? (op === 0x95 ? -1 : 1) : Math.sign(a - b)); break; }
        case 0x97: case 0x98: { const b = pop2(), a = pop2(); push(Number.isNaN(a) || Number.isNaN(b) ? (op === 0x97 ? -1 : 1) : Math.sign(a - b)); break; }
        case 0x99: case 0x9a: case 0x9b: case 0x9c: case 0x9d: case 0x9e: {
          const v = num(pop());
          const take = [v === 0, v !== 0, v < 0, v >= 0, v > 0, v <= 0][op - 0x99];
          next = take ? pc + s16() : pc + 3;
          break;
        }
        case 0x9f: case 0xa0: case 0xa1: case 0xa2: case 0xa3: case 0xa4: {
          const b = num(pop()), a = num(pop());
          const take = [a === b, a !== b, a < b, a >= b, a > b, a <= b][op - 0x9f];
          next = take ? pc + s16() : pc + 3;
          break;
        }
        case 0xa5: case 0xa6: { const b = pop(), a = pop(); next = (a === b) === (op === 0xa5) ? pc + s16() : pc + 3; break; }
        case 0xa7: next = pc + s16(); break;
        case 0xaa: {
          const base = at + ((4 - (at % 4)) % 4);
          const def = view.getInt32(base), low = view.getInt32(base + 4), high = view.getInt32(base + 8);
          const key = num(pop());
          next = pc + (key >= low && key <= high ? view.getInt32(base + 12 + 4 * (key - low)) : def);
          break;
        }
        case 0xab: {
          const base = at + ((4 - (at % 4)) % 4);
          const def = view.getInt32(base), n = view.getInt32(base + 4);
          const key = num(pop());
          next = pc + def;
          for (let i = 0; i < n; i++) if (view.getInt32(base + 8 + 8 * i) === key) { next = pc + view.getInt32(base + 12 + 8 * i); break; }
          break;
        }
        case 0xac: case 0xae: case 0xb0: return pop();
        case 0xad: case 0xaf: return pop2();
        case 0xb1: return undefined;
        case 0xb2: { const m = member(u16()); const v = this.getStatic(m.owner, m.name, m.desc); if (wide(m.desc)) push2(v); else push(v); next = pc + 3; break; }
        case 0xb3: { const m = member(u16()); const v = wide(m.desc) ? pop2() : pop(); this.staticsOf(m.owner)[m.name] = v; next = pc + 3; break; }
        case 0xb4: {
          const m = member(u16());
          const obj = pop();
          let v = isObj(obj) && obj.$f ? obj.$f[m.name] : undefined;
          if (v === undefined) v = m.desc.startsWith('L') || m.desc.startsWith('[') ? (isObj(obj) && obj.$opaque ? opaque(m.desc.slice(1, -1)) : null) : 0;
          if (wide(m.desc)) push2(v); else push(v);
          next = pc + 3;
          break;
        }
        case 0xb5: { const m = member(u16()); const v = wide(m.desc) ? pop2() : pop(); const obj = pop(); if (isObj(obj) && obj.$f) obj.$f[m.name] = v; next = pc + 3; break; }
        case 0xb6: case 0xb7: case 0xb8: case 0xb9: {
          const m = member(u16());
          const types = paramTypes(m.desc);
          const args = [];
          for (let i = types.length - 1; i >= 0; i--) args[i] = wide(types[i]) ? pop2() : pop();
          const self = op === 0xb8 ? undefined : pop();
          if (op !== 0xb8 && (self === null || self === undefined)) throw new JvmError(`null receiver for ${m.owner}.${m.name}`);
          const value = this.invoke(m.owner, m.name, m.desc, args, self, op === 0xb7);
          const ret = m.desc.slice(m.desc.indexOf(')') + 1);
          if (ret !== 'V') { if (wide(ret)) push2(value ?? 0); else push(value === undefined ? defaultFor(m.desc) : value); }
          next = pc + (op === 0xb9 ? 5 : 3);
          break;
        }
        case 0xba: {
          const c = cls.pool[u16()];
          const { name, desc } = cls.nameType(c.nameType);
          const types = paramTypes(desc);
          const args = [];
          for (let i = types.length - 1; i >= 0; i--) args[i] = wide(types[i]) ? pop2() : pop();
          const recipe = cls.bootstrapStrings[c.bootstrap]?.[0];
          if (name === 'makeConcatWithConstants' && recipe !== undefined) {
            let k = 0;
            push(recipe.replace(/\u0001/g, () => javaString(args[k++])));
          } else {
            const handle = cls.bootstrap[c.bootstrap];
            push(handle ? { $class: 'lambda', $lambda: handle, $captured: args, $f: {} } : opaque());
          }
          next = pc + 5;
          break;
        }
        case 0xbb: {
          push(this.instantiate(cls.className(u16())));
          next = pc + 3;
          break;
        }
        case 0xbc: { const n = pop(); push(Array(Math.max(0, n)).fill(0)); next = pc + 2; break; }
        case 0xbd: { const n = pop(); push(Array(Math.max(0, n)).fill(null)); next = pc + 3; break; }
        case 0xbe: { const a = pop(); push(Array.isArray(a) ? a.length : isObj(a) && a.$list ? a.$list.length : 0); break; }
        case 0xbf: throw new JvmError(`athrow in ${cls.name}.${method.name}`);
        case 0xc0: next = pc + 3; break;
        case 0xc1: { const name = cls.className(u16()); const v = pop(); push(isObj(v) && v.$class && !v.$opaque && this.isSubclass(v.$class, name) ? 1 : 0); next = pc + 3; break; }
        case 0xc2: case 0xc3: pop(); break;
        case 0xc4: {
          const wop = code[at], index = view.getUint16(at + 1);
          if (wop === 0x84) { locals[index] = (locals[index] + view.getInt16(at + 3)) | 0; next = pc + 6; break; }
          if (wop >= 0x15 && wop <= 0x19) { if (wop === 0x16 || wop === 0x18) push2(locals[index]); else push(locals[index]); }
          else if (wop >= 0x36 && wop <= 0x3a) { if (wop === 0x37 || wop === 0x39) { locals[index] = pop2(); locals[index + 1] = TOP; } else locals[index] = pop(); }
          next = pc + 4;
          break;
        }
        case 0xc5: {
          const dims = code[at + 2];
          const sizes = [];
          for (let i = 0; i < dims; i++) sizes.unshift(pop());
          const make = d => d === sizes.length - 1 ? Array(sizes[d]).fill(0) : Array.from({ length: sizes[d] }, () => make(d + 1));
          push(make(0));
          next = pc + 4;
          break;
        }
        case 0xc6: next = pop() == null ? pc + s16() : pc + 3; break;
        case 0xc7: next = pop() != null ? pc + s16() : pc + 3; break;
        case 0xc8: next = pc + view.getInt32(at); break;
        default: throw new JvmError(`unsupported opcode 0x${op.toString(16)} in ${cls.name}.${method.name}`);
      }
      pc = next;
    }
  }
}
Jvm.PASS = Symbol('pass');

const num = v => (typeof v === 'number' ? v : v ? 1 : 0);
function toInt(v) {
  if (Number.isNaN(v)) return 0;
  return Math.max(-2147483648, Math.min(2147483647, Math.trunc(v)));
}
function javaString(v) {
  if (typeof v === 'number') return String(v);
  if (typeof v === 'string') return v;
  if (v === null || v === undefined) return 'null';
  return v.$string ?? '?';
}

// List and map methods for the natively-backed collections (ArrayList, ImmutableList, HashMap, …).
function collectionCall(jvm, self, name, args, desc) {
  if (self.$list) {
    const list = self.$list;
    switch (name) {
      case '<init>': if (args.length && typeof args[0] !== 'number') list.push(...iterate(args[0])); return undefined;
      case 'add': if (args.length === 2) list.splice(args[0], 0, args[1]); else list.push(args[0]); return 1;
      case 'addAll': list.push(...iterate(args.at(-1))); return 1;
      case 'get': return list[args[0]] ?? null;
      case 'set': { const old = list[args[0]]; list[args[0]] = args[1]; return old; }
      case 'size': return list.length;
      case 'isEmpty': return list.length ? 0 : 1;
      case 'contains': return list.includes(args[0]) ? 1 : 0;
      case 'remove': { const i = typeof args[0] === 'number' && desc.startsWith('(I') ? args[0] : list.indexOf(args[0]); return i >= 0 ? list.splice(i, 1)[0] : 0; }
      case 'clear': list.length = 0; return undefined;
      case 'iterator': case 'listIterator': return iterator(list);
      case 'toArray': return [...list];
      case 'stream': return { $class: 'stream', $list: [...list], $f: {} };
      case 'forEach': for (const v of list) jvm.callLambda(args[0], [v]); return undefined;
      case 'build': case 'copyOf': case 'collect': case 'toList': case 'sorted': case 'distinct': return self;
      case 'filter': return { $class: 'stream', $list: list.filter(v => num(jvm.callLambda(args[0], [v]))), $f: {} };
      case 'map': return { $class: 'stream', $list: list.map(v => jvm.callLambda(args[0], [v])), $f: {} };
      case 'anyMatch': return list.some(v => num(jvm.callLambda(args[0], [v]))) ? 1 : 0;
      case 'allMatch': return list.every(v => num(jvm.callLambda(args[0], [v]))) ? 1 : 0;
      case 'noneMatch': return list.some(v => num(jvm.callLambda(args[0], [v]))) ? 0 : 1;
      case 'count': return list.length;
    }
  } else {
    const map = self.$map;
    switch (name) {
      case 'put': { const old = map.get(key(args[0])); map.set(key(args[0]), args[1]); return old ?? null; }
      case 'get': return map.get(key(args[0])) ?? null;
      case 'getOrDefault': return map.has(key(args[0])) ? map.get(key(args[0])) : args[1];
      case 'containsKey': return map.has(key(args[0])) ? 1 : 0;
      case 'remove': { const old = map.get(key(args[0])); map.delete(key(args[0])); return old ?? null; }
      case 'size': return map.size;
      case 'isEmpty': return map.size ? 0 : 1;
      case 'values': return { $class: 'java/util/Collection', $list: [...map.values()], $f: {} };
      case 'keySet': return { $class: 'java/util/Set', $list: [...map.keys()], $f: {} };
      case 'computeIfAbsent': if (!map.has(key(args[0]))) map.set(key(args[0]), jvm.callLambda(args[1], [args[0]])); return map.get(key(args[0]));
      case 'putAll': for (const [k, v] of args[0]?.$map ?? []) map.set(k, v); return undefined;
      case 'entrySet': return { $class: 'java/util/Set', $list: [...map].map(([k, v]) => ({ $class: 'java/util/Map$Entry', $entry: [k, v], $f: {} })), $f: {} };
      case 'putIfAbsent': if (!map.has(key(args[0]))) map.set(key(args[0]), args[1]); return null;
      case 'forEach': for (const [k, v] of map) jvm.callLambda(args[0], [k, v]); return undefined;
    }
  }
  return defaultFor(desc);
}
const key = k => (isObj(k) ? k.$key ?? k.$name ?? k : k);
export function iterate(v) {
  if (Array.isArray(v)) return v;
  if (isObj(v) && v.$list) return v.$list;
  if (isObj(v) && v.$map) return [...v.$map.values()];
  return [];
}
function iterator(list) {
  let i = 0;
  return { $class: 'java/util/Iterator', $f: {}, $iter: { hasNext: () => (i < list.length ? 1 : 0), next: () => list[i++] ?? null } };
}

// Natives every replay needs: boxing, Math, collections from Guava/fastutil/java.util, strings.
export function baseNatives() {
  const list = items => ({ $class: 'java/util/List', $list: items, $f: {} });
  const map = () => ({ $class: 'java/util/Map', $map: new Map(), $f: {} });
  const n = {};
  for (const m of ['sin', 'cos', 'tan', 'abs', 'sqrt', 'floor', 'ceil', 'atan', 'atan2', 'asin', 'acos', 'pow', 'exp', 'log', 'signum']) {
    const fn = m === 'signum' ? Math.sign : Math[m];
    n[`java/lang/Math.${m}`] = (_, a, desc) => (desc.endsWith('F') ? Math.fround(fn(...a)) : fn(...a));
    n[`net/minecraft/util/Mth.${m}`] = (_, a) => Math.fround(fn(...a));
  }
  n['java/lang/Math.toRadians'] = (_, [d]) => d * Math.PI / 180;
  n['java/lang/Math.toDegrees'] = (_, [r]) => r * 180 / Math.PI;
  n['java/lang/Math.max'] = (_, a) => Math.max(...a);
  n['java/lang/Math.min'] = (_, a) => Math.min(...a);
  n['java/lang/Math.round'] = (_, [v]) => Math.round(v);
  n['java/lang/Math.random'] = () => 0.5;
  n['net/minecraft/util/Mth.sin'] = (_, [v]) => Math.fround(Math.sin(v));
  n['net/minecraft/util/Mth.cos'] = (_, [v]) => Math.fround(Math.cos(v));
  n['net/minecraft/util/Mth.sqrt'] = (_, [v]) => Math.fround(Math.sqrt(v));
  n['net/minecraft/util/Mth.floor'] = (_, [v]) => Math.floor(v);
  n['net/minecraft/util/Mth.clamp'] = (_, [v, lo, hi]) => Math.min(hi, Math.max(lo, v));
  n['net/minecraft/util/Mth.lerp'] = (_, [t, a, b]) => a + t * (b - a);
  for (const box of ['Float', 'Integer', 'Double', 'Boolean', 'Long', 'Short', 'Byte', 'Character']) {
    n[`java/lang/${box}.valueOf`] = (_, [v]) => v;
    for (const unbox of ['floatValue', 'intValue', 'doubleValue', 'booleanValue', 'longValue', 'shortValue', 'byteValue', 'charValue'])
      n[`java/lang/${box}.${unbox}`] = (_, __, ___, self) => self;
  }
  n['java/lang/Number.floatValue'] = n['java/lang/Number.intValue'] = n['java/lang/Number.doubleValue'] = (_, __, ___, self) => self;
  n['java/lang/Float.isNaN'] = (_, [v]) => (Number.isNaN(v) ? 1 : 0);
  n['java/lang/Integer.parseInt'] = (_, [s]) => parseInt(s, 10) | 0;
  n['java/lang/String.valueOf'] = (_, [v]) => javaString(v);
  n['java/lang/String.equals'] = (_, [o], __, self) => (self === o ? 1 : 0);
  n['java/lang/String.hashCode'] = (_, __, ___, self) => javaHash(self);
  n['java/lang/String.length'] = (_, __, ___, self) => self.length;
  n['java/lang/String.charAt'] = (_, [i], __, self) => self.charCodeAt(i);
  n['java/lang/String.concat'] = (_, [o], __, self) => self + o;
  n['java/lang/String.format'] = (_, a) => {
    const [fmt, args] = typeof a[0] === 'string' ? a : a.slice(1);
    let k = 0;
    return String(fmt).replace(/%[sdf]/g, () => javaString(iterate(args)[k++]));
  };
  n['java/lang/String.startsWith'] = (_, [p], __, self) => (self.startsWith(p) ? 1 : 0);
  n['java/lang/String.contains'] = (_, [p], __, self) => (self.includes(javaString(p)) ? 1 : 0);
  n['java/lang/String.toLowerCase'] = (_, __, ___, self) => self.toLowerCase();
  n['java/lang/StringBuilder.<init>'] = (_, [init], __, self) => { self.$string = init === undefined || typeof init === 'number' ? '' : javaString(init); };
  n['java/lang/StringBuilder.append'] = (_, [v], desc, self) => { self.$string += desc.startsWith('(C') ? String.fromCharCode(v) : javaString(v); return self; };
  n['java/lang/StringBuilder.toString'] = (_, __, ___, self) => self.$string;
  n['java/lang/Object.<init>'] = () => undefined;
  n['java/lang/Object.getClass'] = (_, __, ___, self) => ({ $class: 'java/lang/Class', $name: self?.$class, $f: {} });
  n['java/lang/Enum.<init>'] = (_, [name, ordinal], __, self) => { self.$f.name = name; self.$f.ordinal = ordinal; };
  n['java/lang/Enum.ordinal'] = (_, __, ___, self) => self?.$f?.ordinal ?? 0;
  n['java/lang/Enum.name'] = (_, __, ___, self) => self?.$f?.name ?? '';
  n['java/util/Objects.requireNonNull'] = (_, [v]) => v;
  // Collections.
  const newList = (_, args) => list(args.length === 1 && (Array.isArray(args[0]) || args[0]?.$list) ? [...iterate(args[0])] : args.filter(a => a !== undefined).flatMap(a => (Array.isArray(a) ? a : [a])));
  for (const owner of ['com/google/common/collect/Lists', 'org/apache/commons/compress/utils/Lists', 'com/google/common/collect/ImmutableList', 'java/util/List', 'java/util/Arrays', 'java/util/Collections', 'com/google/common/collect/Sets', 'com/google/common/collect/ImmutableSet', 'java/util/Set', 'it/unimi/dsi/fastutil/objects/ObjectArrayList', 'it/unimi/dsi/fastutil/objects/ObjectList']) {
    for (const m of ['newArrayList', 'of', 'copyOf', 'asList', 'newHashSet', 'newLinkedList', 'emptyList', 'singletonList', 'unmodifiableList', 'wrap', 'newLinkedHashSet']) n[`${owner}.${m}`] = newList;
  }
  n['com/google/common/collect/ImmutableList.builder'] = n['com/google/common/collect/ImmutableSet.builder'] = () => list([]);
  n['com/google/common/collect/ImmutableList$Builder.add'] = (_, args, __, self) => { self.$list.push(...args.flatMap(a => (Array.isArray(a) ? a : [a]))); return self; };
  n['com/google/common/collect/ImmutableList$Builder.addAll'] = (_, [a], __, self) => { self.$list.push(...iterate(a)); return self; };
  n['com/google/common/collect/ImmutableList$Builder.build'] = (_, __, ___, self) => self;
  for (const owner of ['com/google/common/collect/Maps', 'com/google/common/collect/ImmutableMap', 'java/util/Map']) {
    for (const m of ['newHashMap', 'newLinkedHashMap', 'newTreeMap', 'newIdentityHashMap', 'of', 'copyOf', 'newEnumMap']) n[`${owner}.${m}`] = (_, args) => {
      const out = map();
      for (let i = 0; i + 1 < args.length; i += 2) out.$map.set(key(args[i]), args[i + 1]);
      return out;
    };
  }
  n['com/google/common/collect/ImmutableMap.builder'] = n['com/google/common/collect/ImmutableSortedMap.naturalOrder'] = () => map();
  n['com/google/common/collect/ImmutableMap$Builder.put'] = (_, [k, v], __, self) => { self.$map.set(key(k), v); return self; };
  n['com/google/common/collect/ImmutableMap$Builder.putAll'] = (_, [m], __, self) => { for (const [k, v] of m?.$map ?? []) self.$map.set(k, v); return self; };
  n['com/google/common/collect/ImmutableMap$Builder.build'] = n['com/google/common/collect/ImmutableMap$Builder.buildOrThrow'] = (_, __, ___, self) => self;
  n['java/util/EnumSet.allOf'] = n['java/util/EnumSet.noneOf'] = n['java/util/EnumSet.of'] = (_, args) => list(args.filter(a => !(a?.$class === 'java/lang/Class')));
  n['java/util/Map$Entry.getKey'] = (_, __, ___, self) => self?.$entry?.[0] ?? null;
  n['java/util/Map$Entry.getValue'] = (_, __, ___, self) => self?.$entry?.[1] ?? null;
  n['java/util/Iterator.hasNext'] = (_, __, ___, self) => self?.$iter?.hasNext() ?? 0;
  n['java/util/Iterator.next'] = (_, __, ___, self) => self?.$iter?.next() ?? null;
  return n;
}
