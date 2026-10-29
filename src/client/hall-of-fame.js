// Fills {{halloffame}} from /api/hall-of-fame, drawing each head from the player's Mojang skin.
export async function initHallOfFame() {
  const box = document.querySelector('.hof');
  const status = box.querySelector('.hof-status');
  let players;
  try {
    const response = await fetch('/api/hall-of-fame');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    players = await response.json();
  } catch {
    status.textContent = 'The Hall of Fame could not be loaded.';
    return;
  }
  status.textContent = players.length === 0 ? 'Nobody has beaten Soulrend yet.'
    : `${players.length} ${players.length === 1 ? 'player has' : 'players have'} beaten Soulrend.`;

  const list = document.createElement('ol');
  list.className = 'hof-list';
  players.forEach((player, i) => {
    const item = document.createElement('li');
    const head = document.createElement('canvas');
    head.className = 'hof-head';
    head.width = head.height = 8;
    head.setAttribute('aria-hidden', 'true');
    if (player.skin) drawHead(head, player.skin).catch(() => {});
    const name = document.createElement('strong');
    name.textContent = player.name;
    const meta = document.createElement('span');
    meta.className = 'hof-meta';
    meta.textContent = `#${i + 1} · ${new Date(player.at).toLocaleDateString(undefined, { dateStyle: 'medium' })}`;
    item.append(head, name, meta);
    list.append(item);
  });
  box.append(list);
}

// The face (8,8) with the hat layer (40,8) on top, as the game draws it.
async function drawHead(canvas, hash) {
  const skin = new Image();
  skin.crossOrigin = 'anonymous'; // textures.minecraft.net allows it, so hasHat can read pixels
  skin.src = `https://textures.minecraft.net/texture/${hash}`;
  await skin.decode();
  const g = canvas.getContext('2d');
  g.drawImage(skin, 8, 8, 8, 8, 0, 0, 8, 8);
  if (hasHat(skin)) g.drawImage(skin, 40, 8, 8, 8, 0, 0, 8, 8);
}

// Like the game's legacy-skin fix: an old 64×32 skin whose hat area has no transparent pixel has no hat.
function hasHat(skin) {
  if (skin.naturalHeight !== 32) return true;
  const g = Object.assign(document.createElement('canvas'), { width: 32, height: 32 }).getContext('2d');
  g.drawImage(skin, 32, 0, 32, 32, 0, 0, 32, 32);
  const { data } = g.getImageData(0, 0, 32, 32);
  for (let i = 3; i < data.length; i += 4) if (data[i] < 128) return true;
  return false;
}
