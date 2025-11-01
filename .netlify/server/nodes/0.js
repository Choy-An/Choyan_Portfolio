import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.b658e104.js","_app/immutable/chunks/scheduler.57a6f313.js","_app/immutable/chunks/index.d9433d58.js","_app/immutable/chunks/UIcon.37a8d449.js","_app/immutable/chunks/paths.72b5bf31.js","_app/immutable/chunks/stores.31014962.js","_app/immutable/chunks/singletons.0ff1fc4b.js","_app/immutable/chunks/home.b8734820.js","_app/immutable/chunks/skills.d583b825.js"];
export const stylesheets = ["_app/immutable/assets/0.c00b61be.css"];
export const fonts = [];
