// The Hall of Fame: everyone who beat Soulrend. src/client/hall-of-fame.js fills it from the Worker's
// /api/hall-of-fame (worker/index.js), which only the live site has; `npm run dev` shows the error line.
//   {{halloffame}}
export default {
  render() {
    return '<div class="hof"><p class="hof-status" aria-live="polite">Loading the Hall of Fame…</p></div>\n';
  },
};
