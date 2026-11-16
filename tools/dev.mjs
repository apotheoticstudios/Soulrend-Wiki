// Local preview server: rebuilds when files change and reloads open pages.
//   npm run dev            → http://localhost:4321 (also reachable from phones on the same Wi-Fi)
// Each rebuild runs in a fresh process so edits to the renderer itself take effect too.
import http from 'node:http';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'dist-dev');
const PORT = Number(process.env.PORT ?? 4321);
const WATCH = ['content', 'site', 'src', 'assets', 'game-data', 'tools'];
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.glb': 'model/gltf-binary', '.gltf': 'model/gltf+json',
  '.bin': 'application/octet-stream', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
};

const clients = new Set();
let building = false;
let queued = false;

function rebuild() {
  if (building) {
    queued = true;
    return;
  }
  building = true;
  const child = spawn(process.execPath, [path.join(ROOT, 'tools/build.mjs'), '--dev', '--out', OUT], { stdio: 'inherit' });
  child.on('exit', () => {
    building = false;
    if (queued) {
      queued = false;
      return rebuild();
    }
    for (const res of clients) res.write('event: reload\ndata: {}\n\n');
  });
}

let timer = null;
for (const dir of WATCH) {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) continue;
  fs.watch(full, { recursive: true }, (_event, file) => {
    if (file && path.basename(file).startsWith('.')) return;
    clearTimeout(timer);
    timer = setTimeout(rebuild, 120);
  });
}

// Injected into dev pages: live reload plus an overlay listing build errors.
const DEV_CLIENT = `
const events = new EventSource('/__dev/events');
events.addEventListener('reload', () => location.reload());
fetch('/__dev/diagnostics.json', { cache: 'no-store' }).then(r => r.ok ? r.json() : []).then(items => {
  const errors = items.filter(d => d.level === 'error');
  if (!errors.length) return;
  const box = document.createElement('div');
  box.style.cssText = 'position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;max-height:40vh;overflow:auto;padding:12px 16px;background:#2b0d0d;color:#ffd7d7;border:2px solid #ff5555;border-radius:8px;font:13px/1.5 ui-monospace,Menlo,monospace;box-shadow:0 10px 40px #0008';
  const title = document.createElement('strong');
  title.textContent = errors.length + ' build error' + (errors.length > 1 ? 's' : '') + ' (click to hide)';
  box.append(title);
  for (const e of errors) {
    const line = document.createElement('div');
    line.textContent = (e.file ?? 'build') + (e.line ? ':' + e.line : '') + '  ' + e.message;
    box.append(line);
  }
  box.addEventListener('click', () => box.remove());
  document.body.append(box);
});`;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname === '/__dev/events') {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-store', Connection: 'keep-alive' });
    res.write(': connected\n\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }
  if (url.pathname === '/__dev/client.js') {
    res.writeHead(200, { 'Content-Type': TYPES['.js'], 'Cache-Control': 'no-store' });
    return res.end(DEV_CLIENT);
  }

  let file = path.join(OUT, decodeURIComponent(url.pathname));
  if (!file.startsWith(OUT)) {
    res.writeHead(403);
    return res.end();
  }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    if (!url.pathname.endsWith('/')) {
      res.writeHead(301, { Location: url.pathname + '/' + url.search });
      return res.end();
    }
    file = path.join(file, 'index.html');
  }
  let status = 200;
  if (!fs.existsSync(file)) {
    status = 404;
    file = path.join(OUT, '404.html');
    if (!fs.existsSync(file)) {
      res.writeHead(404);
      return res.end('Not found');
    }
  }
  res.writeHead(status, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] ?? 'application/octet-stream', 'Cache-Control': 'no-store' });
  fs.createReadStream(file).pipe(res);
});

rebuild();
server.listen(PORT, '0.0.0.0', () => {
  const lan = Object.values(os.networkInterfaces()).flat().find(i => i?.family === 'IPv4' && !i.internal)?.address;
  console.log(`\nSoulrend Wiki dev server\n  this computer:  http://localhost:${PORT}/${lan ? `\n  phone (Wi-Fi):  http://${lan}:${PORT}/` : ''}\n  drafts:         http://localhost:${PORT}/_test/kitchen-sink/\n`);
});
