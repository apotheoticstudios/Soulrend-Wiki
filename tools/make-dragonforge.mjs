// Copies the Dragonforge block textures into assets/dragonforge/ for the {{dragonforge}} schematic.
//   npm run forge                  (reads the CurseForge instance; --instance <dir> for another)
// The pack loads Ice and Fire's Excalibur resource pack over the mod (config/paxi/resourcepack_load_order.json),
// so its textures win. Animated textures (the cores) are cut down to their first frame.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PNG } from 'pngjs';
import { openInstance } from './lib/models/instance.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets/dragonforge');
const args = process.argv.slice(2);
const instanceDir = args.includes('--instance') ? args[args.indexOf('--instance') + 1] : undefined;
const inst = openInstance(instanceDir, { packs: [{ file: 'IceandFireExcaliburizedv3.1.zip', namespaces: ['iceandfire'] }] });

// output name → texture under assets/iceandfire/textures/block/
const textures = {
  bone_end: 'dragon_bone_block',
  bone_side: 'dragon_bone_block_side',
  // The grill is the brick's look once the forge is assembled (TileEntityDragonforge.updateGrills).
  ...Object.fromEntries(['fire', 'ice', 'lightning'].flatMap(e => ['brick', 'brick_grill', 'core', 'input'].map(part => [`${e}_${part}`, `dragonforge_${e}_${part}`]))),
};

fs.mkdirSync(OUT, { recursive: true });
for (const [name, texture] of Object.entries(textures)) {
  const bytes = inst.resource(`iceandfire:textures/block/${texture}.png`);
  if (!bytes) throw new Error(`no texture iceandfire:block/${texture}`);
  const png = PNG.sync.read(Buffer.from(bytes));
  // A vertical strip of square frames when there is an .mcmeta; the first frame is the still image.
  const animated = inst.resource(`iceandfire:textures/block/${texture}.png.mcmeta`);
  let out = png;
  if (animated && png.height > png.width) {
    const size = png.width;
    out = new PNG({ width: size, height: size });
    PNG.bitblt(png, out, 0, 0, size, size, 0, 0);
  }
  fs.writeFileSync(path.join(OUT, `${name}.png`), PNG.sync.write(out));
  console.log(`${name}.png  ${out.width}×${out.height}${out === png ? '' : ` (first frame of ${png.height / png.width})`}`);
}
