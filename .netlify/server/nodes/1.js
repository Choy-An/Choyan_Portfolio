

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.5709f994.js","_app/immutable/chunks/scheduler.57a6f313.js","_app/immutable/chunks/index.d9433d58.js","_app/immutable/chunks/stores.31014962.js","_app/immutable/chunks/singletons.0ff1fc4b.js","_app/immutable/chunks/paths.72b5bf31.js"];
export const stylesheets = [];
export const fonts = [];
