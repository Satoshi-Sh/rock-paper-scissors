import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
      fallback: "error.html",
      strict: false,
    }),
    paths: {
      // change below to your repo name
      base: dev ? "" : "/rock-paper-scissors",
    },
    // hydrate the <div id="svelte"> element in src/app.html
    // target: "#svelte",
  },
};

export default config;
