export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.904f944d.js","app":"_app/immutable/entry/app.5593817c.js","imports":["_app/immutable/entry/start.904f944d.js","_app/immutable/chunks/scheduler.88568125.js","_app/immutable/chunks/singletons.4d930fb7.js","_app/immutable/entry/app.5593817c.js","_app/immutable/chunks/scheduler.88568125.js","_app/immutable/chunks/index.f733c480.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
