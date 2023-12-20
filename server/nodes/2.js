

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d873f059.js","_app/immutable/chunks/scheduler.88568125.js","_app/immutable/chunks/index.f733c480.js"];
export const stylesheets = ["_app/immutable/assets/2.60e9a259.css"];
export const fonts = [];
