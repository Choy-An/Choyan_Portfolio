

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/skills/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.7fdab450.js","_app/immutable/chunks/scheduler.57a6f313.js","_app/immutable/chunks/index.d9433d58.js","_app/immutable/chunks/UIcon.37a8d449.js","_app/immutable/chunks/paths.72b5bf31.js","_app/immutable/chunks/skills.d583b825.js","_app/immutable/chunks/SearchPage.0546cab2.js","_app/immutable/chunks/CommonPage.3ec3e664.js","_app/immutable/chunks/app.83b3ecd5.js","_app/immutable/chunks/TabTitle.7a66b440.js","_app/immutable/chunks/stores.31014962.js","_app/immutable/chunks/singletons.0ff1fc4b.js","_app/immutable/chunks/Card.71e76fe5.js"];
export const stylesheets = ["_app/immutable/assets/SearchPage.d63b558a.css","_app/immutable/assets/Card.7a6abfc5.css"];
export const fonts = [];
