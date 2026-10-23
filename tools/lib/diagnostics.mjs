// Collects build errors and warnings with file:line locations so VS Code can link them.

const RED = '\x1b[31m', YELLOW = '\x1b[33m', DIM = '\x1b[2m', RESET = '\x1b[0m';

export class Diagnostics {
  constructor() {
    this.items = [];
    this.seen = new Set();
  }

  error(file, line, message) {
    this.add('error', file, line, message);
  }

  warn(file, line, message) {
    this.add('warning', file, line, message);
  }

  // Shared snippets (like the footer) render once per page; report each problem only once.
  add(level, file, line, message) {
    const key = `${level}|${file}|${line}|${message}`;
    if (this.seen.has(key)) return;
    this.seen.add(key);
    this.items.push({ level, file, line, message });
  }

  get errors() {
    return this.items.filter(d => d.level === 'error');
  }

  get warnings() {
    return this.items.filter(d => d.level === 'warning');
  }

  print() {
    for (const d of this.items) {
      const where = d.file ? `${d.file}${d.line ? ':' + d.line : ''}` : 'build';
      const color = d.level === 'error' ? RED : YELLOW;
      console.log(`${color}${d.level}${RESET} ${DIM}${where}${RESET} ${d.message}`);
    }
  }
}

// Thrown when a problem should abort processing of one file; caught and recorded by the build.
export class ContentError extends Error {
  constructor(file, line, message) {
    super(message);
    this.file = file;
    this.line = line;
  }
}

// V8 JSON errors say "at position N (line L column C)"; turn that into a 1-based line within `text`.
export function jsonErrorLine(error, text) {
  const lineMatch = /line (\d+)/.exec(error.message);
  if (lineMatch) return Number(lineMatch[1]);
  const posMatch = /position (\d+)/.exec(error.message);
  if (posMatch) return text.slice(0, Number(posMatch[1])).split('\n').length;
  return 1;
}
