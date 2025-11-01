

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.df70d33d.js","_app/immutable/chunks/scheduler.57a6f313.js","_app/immutable/chunks/index.d9433d58.js","_app/immutable/chunks/UIcon.37a8d449.js","_app/immutable/chunks/paths.72b5bf31.js","_app/immutable/chunks/home.b8734820.js","_app/immutable/chunks/skills.d583b825.js","_app/immutable/chunks/app.83b3ecd5.js","_app/immutable/chunks/ProjectCard.462a2adc.js","_app/immutable/chunks/Chip.e67f833f.js","_app/immutable/chunks/Card.71e76fe5.js","_app/immutable/chunks/ChipIcon.d7474237.js","_app/immutable/chunks/CardDivider.05b7ba77.js","_app/immutable/chunks/projects.6ecc4182.js"];
export const stylesheets = ["_app/immutable/assets/2.cb80226e.css","_app/immutable/assets/ProjectCard.3b6bbf09.css","_app/immutable/assets/Card.7a6abfc5.css","_app/immutable/assets/ChipIcon.b03ae438.css"];
export const fonts = [];
