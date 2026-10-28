// A minimal Java class-file reader: constant pool, methods and their instructions, and lambda targets.
// Enough to replay builder calls in mod code (see movesets.mjs); it doesn't verify or execute anything.

// Operand bytes per opcode, for every opcode with a fixed length (-1 marks the variable-length ones).
const OPERANDS = new Int8Array(256);
for (const [ops, n] of [
  [[0x10, 0x12, 0x15, 0x16, 0x17, 0x18, 0x19, 0x36, 0x37, 0x38, 0x39, 0x3a, 0xa9, 0xbc], 1],
  [[0x11, 0x13, 0x14, 0x84, 0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8,
    0xb2, 0xb3, 0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xbb, 0xbd, 0xc0, 0xc1, 0xc6, 0xc7], 2],
  [[0xc5], 3],
  [[0xb9, 0xba, 0xc8, 0xc9], 4],
  [[0xaa, 0xab, 0xc4], -1],
]) for (const op of ops) OPERANDS[op] = n;

const NAMES = { 0x12: 'ldc', 0x13: 'ldc', 0x14: 'ldc', 0x10: 'push', 0x11: 'push', 0xb2: 'getstatic', 0xb3: 'putstatic',
  0xb6: 'invoke', 0xb7: 'invoke', 0xb8: 'invoke', 0xb9: 'invoke', 0xba: 'invokedynamic', 0xc0: 'checkcast', 0xc1: 'instanceof' };

export function readClass(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let at = 8;
  const u1 = () => view.getUint8(at++);
  const u2 = () => { const v = view.getUint16(at); at += 2; return v; };
  const u4 = () => { const v = view.getUint32(at); at += 4; return v; };
  if (view.getUint32(0) !== 0xcafebabe) throw new Error('not a class file');

  const pool = [null];
  for (let i = 1, n = u2(); i < n; i++) {
    const tag = u1();
    switch (tag) {
      case 1: { const len = u2(); pool[i] = { tag, text: utf8(bytes.subarray(at, at + len)) }; at += len; break; }
      case 3: pool[i] = { tag, value: view.getInt32(at) }; at += 4; break;
      case 4: pool[i] = { tag, value: view.getFloat32(at) }; at += 4; break;
      case 5: case 6: pool[i] = { tag, value: tag === 5 ? Number(view.getBigInt64(at)) : view.getFloat64(at) }; at += 8; pool[++i] = null; break;
      case 7: case 8: case 16: case 19: case 20: pool[i] = { tag, ref: u2() }; break;
      case 9: case 10: case 11: case 12: pool[i] = { tag, a: u2(), b: u2() }; break;
      case 15: pool[i] = { tag, kind: u1(), ref: u2() }; break;
      case 17: case 18: pool[i] = { tag, bootstrap: u2(), nameType: u2() }; break;
      default: throw new Error(`unknown constant tag ${tag}`);
    }
  }
  const text = i => pool[i].text;
  const className = i => text(pool[i].ref);
  const nameType = i => ({ name: text(pool[i].a), desc: text(pool[i].b) });
  const member = i => ({ owner: className(pool[i].a), ...nameType(pool[i].b) });
  const constant = i => {
    const c = pool[i];
    if (c.tag === 8) return { string: text(c.ref) };
    if (c.tag === 7) return { class: text(c.ref) };
    return { number: c.value };
  };

  at += 6; // access flags, this class, super class
  const name = className(view.getUint16(at - 4));
  const superName = view.getUint16(at - 2) ? className(view.getUint16(at - 2)) : null;
  const interfaces = u2();
  at += 2 * interfaces;
  // `at += u4()` would read `at` before u4() advances it.
  const skipAttributes = () => { for (let n = u2(); n--;) { at += 2; const len = u4(); at += len; } };
  const fields = [];
  for (let n = u2(); n--;) { const access = u2(); fields.push({ access, name: text(u2()), desc: text(u2()) }); skipAttributes(); }

  const methods = [];
  for (let n = u2(); n--;) {
    const access = u2();
    const method = { name: text(u2()), desc: text(u2()), access, code: [] };
    for (let a = u2(); a--;) {
      const attr = text(u2()), len = u4(), end = at + len;
      if (attr === 'Code') {
        at += 2;
        method.maxLocals = u2();
        const codeLen = u4(), start = at;
        // The raw bytes are kept for interpreters (tools/lib/models/jvm.mjs); `code` is the summary movesets use.
        method.bytes = bytes.subarray(start, start + codeLen);
        method.code = decode(bytes, view, start, codeLen, { pool, member, constant, nameType });
        at = start + codeLen;
      }
      at = end;
    }
    methods.push(method);
  }

  const bootstrap = [], bootstrapStrings = [];
  for (let a = u2(); a--;) {
    const attr = text(u2()), len = u4(), end = at + len;
    if (attr === 'BootstrapMethods') {
      for (let n = u2(); n--;) {
        u2();
        const args = [];
        for (let k = u2(); k--;) args.push(u2());
        // LambdaMetafactory's second argument is the implementation method handle.
        const handle = args.map(i => pool[i]).find(c => c?.tag === 15 && member(c.ref).owner !== 'java/lang/invoke/LambdaMetafactory');
        bootstrap.push(handle ? member(handle.ref) : null);
        // String constants, e.g. the recipe of a string-concatenation call site.
        bootstrapStrings.push(args.map(i => pool[i]?.tag === 8 ? text(pool[i].ref) : null));
      }
    }
    at = end;
  }
  return { name, superName, fields, methods, bootstrap, bootstrapStrings, strings: pool.filter(c => c?.tag === 1).map(c => c.text), pool, member, constant, className, nameType };
}

function decode(bytes, view, start, length, { pool, member, constant, nameType }) {
  const out = [];
  for (let pc = 0; pc < length;) {
    const op = bytes[start + pc];
    const at = start + pc + 1;
    let size = OPERANDS[op];
    if (size === -1) {
      if (op === 0xc4) size = bytes[at] === 0x84 ? 5 : 3;
      else {
        const pad = (4 - ((pc + 1) % 4)) % 4, base = at + pad;
        if (op === 0xaa) size = pad + 12 + 4 * (view.getInt32(base + 8) - view.getInt32(base + 4) + 1);
        else size = pad + 8 + 8 * view.getInt32(base + 4);
      }
    }
    const kind = NAMES[op];
    if (op >= 0x2a && op <= 0x2d) out.push({ op: 'load', index: op - 0x2a });
    else if (op === 0x19) out.push({ op: 'load', index: bytes[at] });
    else if (op >= 0x02 && op <= 0x08) out.push({ op: 'push', value: op - 3 });
    else if (op >= 0x0b && op <= 0x0d) out.push({ op: 'push', value: op - 0x0b });
    else if (kind === 'push') out.push({ op: 'push', value: op === 0x10 ? view.getInt8(at) : view.getInt16(at) });
    else if (kind === 'ldc') out.push({ op: 'ldc', ...constant(op === 0x12 ? bytes[at] : view.getUint16(at)) });
    else if (kind === 'invokedynamic') {
      const c = pool[view.getUint16(at)];
      out.push({ op: kind, bootstrap: c.bootstrap, ...nameType(c.nameType) });
    } else if (kind === 'checkcast' || kind === 'instanceof') out.push({ op: kind, class: pool[pool[view.getUint16(at)].ref].text });
    else if (kind) out.push({ op: kind, ...member(view.getUint16(at)) });
    pc += 1 + size;
  }
  return out;
}

function utf8(b) {
  // Java's "modified UTF-8" only differs for NUL and supplementary characters, which these names don't use.
  return new TextDecoder().decode(b);
}
