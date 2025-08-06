import { fileURLToPath, URL } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    tailwindcss(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    minify: "esbuild",
    cssCodeSplit: true,
    cssMinify: false,
    rollupOptions: {
      output: {
        compact: true,
        preserveModules: true,
      },
      treeshake: "smallest",
      cache: true,
      preserveEntrySignatures: "strict",
    },
  },
  server: {
    allowedHosts: ["localhost", "bryte.loca.lt"],
  }
});
