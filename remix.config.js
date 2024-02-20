/** @type {import('@remix-run/dev').AppConfig} */
export default {
	ignoredRouteFiles: ["**/.*"],

	routes(defineRoutes) {
		return defineRoutes(() => {
			// route("/", "home/route.tsx", { index: true });
			// route("/login", "login/route.tsx");
			// route("/register", "register/route.tsx", () => {
			// 	route("", "register/step1.tsx", { index: true });
			// 	route("step2", "register/step2.tsx");
			// });
            // route("/rooms", "rooms/route.tsx")


			// route("concerts", "concerts/layout.tsx", () => {
			// 	route("", "concerts/home.tsx", { index: true });
			// 	route("trending", "concerts/trending.tsx");
			// 	route(":city", "concerts/city.tsx");
			// });
		});
	},

	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// publicPath: "/build/",
	// serverBuildPath: "build/index.js",
};
