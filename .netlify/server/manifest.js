export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","images/DP1.webp","images/DP10.webp","images/DP11.webp","images/DP12.webp","images/DP13.webp","images/DP14.webp","images/DP15.webp","images/DP16.webp","images/DP17.webp","images/DP18.webp","images/DP19.webp","images/DP2.webp","images/DP20.webp","images/DP21.webp","images/DP22.webp","images/DP23.webp","images/DP3.webp","images/DP4.webp","images/DP5.webp","images/DP6.webp","images/DP7.webp","images/DP8.webp","images/DP9.webp","images/DPR1.webp","images/DPR10.webp","images/DPR11.webp","images/DPR12.webp","images/DPR13.webp","images/DPR14.webp","images/DPR15.webp","images/DPR16.webp","images/DPR2.webp","images/DPR3.webp","images/DPR4.webp","images/DPR5.webp","images/DPR6.webp","images/DPR7.webp","images/DPR8.webp","images/DPR9.webp","images/SCR 1.png","images/SCR 1.webp","images/SCR 10.png","images/SCR 10.webp","images/SCR 11.png","images/SCR 11.webp","images/SCR 12.png","images/SCR 12.webp","images/SCR 13.png","images/SCR 13.webp","images/SCR 14.png","images/SCR 14.webp","images/SCR 2.webp","images/SCR 3.webp","images/SCR 4.png","images/SCR 4.webp","images/SCR 5.png","images/SCR 5.webp","images/SCR 6.png","images/SCR 6.webp","images/SCR 7.png","images/SCR 7.webp","images/SCR 8.png","images/SCR 8.webp","images/SCR 9.png","images/SCR 9.webp","images/TDV1.webp","images/TDV10.webp","images/TDV11.webp","images/TDV12.webp","images/TDV13.webp","images/TDV14.webp","images/TDV15.webp","images/TDV16.webp","images/TDV17.webp","images/TDV18.webp","images/TDV19.webp","images/TDV2.webp","images/TDV20.webp","images/TDV21.webp","images/TDV22.webp","images/TDV23.webp","images/TDV24.webp","images/TDV25.webp","images/TDV26.webp","images/TDV3.webp","images/TDV4.webp","images/TDV5.webp","images/TDV6.webp","images/TDV7.webp","images/TDV8.webp","images/TDV9.webp","images/TP1.webp","images/TP10.webp","images/TP11.webp","images/TP12.webp","images/TP13.webp","images/TP14.webp","images/TP15.webp","images/TP16.webp","images/TP17.webp","images/TP18.webp","images/TP2.webp","images/TP3.webp","images/TP4.webp","images/TP5.webp","images/TP6.webp","images/TP7.webp","images/TP8.webp","images/TP9.webp","logos/after-effects.svg","logos/android.png","logos/aswanth logo.png","logos/AswanthC.png","logos/aswanth_logo.png","logos/c.svg","logos/ChatGPT.png","logos/cpp.svg","logos/css.svg","logos/excel.svg","logos/favicon.png","logos/figma.svg","logos/flask.svg","logos/flutter.svg","logos/go.svg","logos/html.svg","logos/Hunga.png","logos/HungaTonga.png","logos/illustrator.svg","logos/indesign.svg","logos/java.png","logos/jest.png","logos/JNV.svg","logos/js.png","logos/Kaavu.png","logos/mancity.png","logos/NID.svg","logos/no-img.svg","logos/node.png","logos/photoshop.svg","logos/postcss.svg","logos/premiere.svg","logos/python.png","logos/quasar.svg","logos/Sacred.png","logos/sass.png","logos/scrapy.png","logos/SPA.svg","logos/svelte.png","logos/tailwind.svg","logos/Tangi.png","logos/Tangible.png","logos/Theyyam.png","logos/trial.webp","logos/Tribute.png","logos/ts.png","logos/unocss.svg","logos/vite.png","logos/vitest.svg","logos/Yin Yang.png","resume.pdf"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".webp":"image/webp",".svg":"image/svg+xml",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.894535af.js","app":"_app/immutable/entry/app.fdac7d08.js","imports":["_app/immutable/entry/start.894535af.js","_app/immutable/chunks/scheduler.57a6f313.js","_app/immutable/chunks/singletons.0ff1fc4b.js","_app/immutable/chunks/paths.72b5bf31.js","_app/immutable/entry/app.fdac7d08.js","_app/immutable/chunks/scheduler.57a6f313.js","_app/immutable/chunks/index.d9433d58.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/education",
				pattern: /^\/education\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/experience",
				pattern: /^\/experience\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/experience/[slug]",
				pattern: /^\/experience\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/search",
				pattern: /^\/search\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/skills",
				pattern: /^\/skills\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/skills/[slug]",
				pattern: /^\/skills\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
