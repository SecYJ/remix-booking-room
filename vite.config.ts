import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { flatRoutes } from "remix-flat-routes";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        remix({
            ignoredRouteFiles: ["**/*.css"],
            routes: async (defineRoutes) => {
                return flatRoutes("routes", defineRoutes);
            },
        }),
        tsconfigPaths(),
        svgr(),
    ],
    server: {
        port: 8080,
        open: true,
    },
});
