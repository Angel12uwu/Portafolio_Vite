import { defineConfig } from "vite";
import vitePluginPurgeCss from "vite-plugin-purgecss";

export default defineConfig({
    base: process.env.DEPLOY_BASE_URL ?? '/',
    plugins: [
        vitePluginPurgeCss()
    ]
});
