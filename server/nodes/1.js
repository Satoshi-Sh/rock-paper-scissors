

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.08c6e371.js","_app/immutable/chunks/scheduler.88568125.js","_app/immutable/chunks/index.f733c480.js","_app/immutable/chunks/singletons.4d930fb7.js"];
export const stylesheets = [];
export const fonts = [];
