import * as universal from '../entries/pages/experience/_slug_/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/experience/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/experience/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/5.e8e58c39.js","_app/immutable/chunks/experience.c6bc2b0f.js","_app/immutable/chunks/UIcon.37a8d449.js","_app/immutable/chunks/index.d9433d58.js","_app/immutable/chunks/scheduler.57a6f313.js","_app/immutable/chunks/paths.72b5bf31.js","_app/immutable/chunks/skills.d583b825.js","_app/immutable/chunks/app.83b3ecd5.js","_app/immutable/chunks/CardLogo.42170864.js","_app/immutable/chunks/Banner.1885e73f.js","_app/immutable/chunks/TabTitle.7a66b440.js","_app/immutable/chunks/Chip.e67f833f.js","_app/immutable/chunks/CardDivider.05b7ba77.js"];
export const stylesheets = ["_app/immutable/assets/5.3dd066ae.css","_app/immutable/assets/Banner.79dec521.css"];
export const fonts = [];
