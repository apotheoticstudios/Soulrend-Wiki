import fs from 'node:fs';
import path from 'node:path';
import { PNG } from 'pngjs';

export const ATLAS_COLUMNS = 32;

// Packs only the icons pages actually use into one sprite sheet.
// Icons get a grid slot the first time they're placed, so pages can be rendered before the sheet exists.
export class Atlas {
  constructor(iconDir, size) {
    this.iconDir = iconDir;
    this.size = size;
    this.slots = new Map();
    this.order = [];
    this.missing = new Set();
    this.broken = new Set();
  }

  iconFile(id) {
    const [namespace, name] = id.split(':');
    return path.join(this.iconDir, namespace, `${name}.png`);
  }

  // Returns the icon's { x, y } grid cell, or null if there's no PNG for it.
  place(id) {
    if (this.slots.has(id)) return this.slots.get(id);
    let pos = null;
    if (fs.existsSync(this.iconFile(id))) {
      const i = this.order.push(id) - 1;
      pos = { x: i % ATLAS_COLUMNS, y: Math.floor(i / ATLAS_COLUMNS) };
    } else {
      this.missing.add(id);
    }
    this.slots.set(id, pos);
    return pos;
  }

  // One icon scaled up (nearest-neighbour) on its own, for link-preview images. Null if unavailable.
  scaled(id, size) {
    if (!fs.existsSync(this.iconFile(id))) return null;
    const icon = readPng(fs.readFileSync(this.iconFile(id)));
    if (!icon) return null;
    const frame = icon.height > icon.width && icon.height % icon.width === 0 ? icon.width : icon.height;
    const out = new PNG({ width: size, height: size });
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const from = (Math.floor((y * frame) / size) * icon.width + Math.floor((x * icon.width) / size)) * 4;
        icon.data.copy(out.data, (y * size + x) * 4, from, from + 4);
      }
    }
    return PNG.sync.write(out);
  }

  pack() {
    if (!this.order.length) return null;
    const { size } = this;
    const sheet = new PNG({ width: ATLAS_COLUMNS * size, height: Math.ceil(this.order.length / ATLAS_COLUMNS) * size });
    sheet.data.fill(0);
    this.order.forEach((id, i) => {
      const icon = readPng(fs.readFileSync(this.iconFile(id)));
      if (!icon) {
        this.broken.add(id);
        return;
      }
      // Animated textures are vertical strips; use the first frame. Other sizes are scaled nearest-neighbour.
      const frame = icon.height > icon.width && icon.height % icon.width === 0 ? icon.width : icon.height;
      const ox = (i % ATLAS_COLUMNS) * size;
      const oy = Math.floor(i / ATLAS_COLUMNS) * size;
      for (let y = 0; y < size; y++) {
        const sy = Math.floor((y * frame) / size);
        for (let x = 0; x < size; x++) {
          const sx = Math.floor((x * icon.width) / size);
          const from = (sy * icon.width + sx) * 4;
          const to = ((oy + y) * sheet.width + ox + x) * 4;
          icon.data.copy(sheet.data, to, from, from + 4);
        }
      }
    });
    return PNG.sync.write(sheet);
  }
}

// Some mod textures carry junk after the PNG's IEND chunk, which pngjs rejects; trim it and retry.
function readPng(bytes) {
  try {
    return PNG.sync.read(bytes);
  } catch {
    const end = bytes.indexOf('IEND');
    if (end < 0) return null;
    try {
      return PNG.sync.read(bytes.subarray(0, end + 8));
    } catch {
      return null;
    }
  }
}
