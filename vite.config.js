import { fileURLToPath, URL } from "node:url";

import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        intro_showcase: resolve(__dirname, "intro-showcase.html"),
        outro_showcase: resolve(__dirname, "outro-showcase.html"),
        showcase: resolve(__dirname, "showcase.html"),
        intro_match: resolve(__dirname, "intro-match.html"),
        outro_match: resolve(__dirname, "outro-match.html"),
        ingame: resolve(__dirname, "ingame.html"),
        mappool: resolve(__dirname, "mappool.html"),
      },
    },
  },
});
