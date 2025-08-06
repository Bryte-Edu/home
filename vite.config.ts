import { fileURLToPath, URL } from "node:url";
import { copyFileSync, existsSync } from "node:fs";

import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// Plugin to copy hosting configuration files
const copyHostingConfig = () => ({
  name: 'copy-hosting-config',
  writeBundle() {
    const files = ['_headers', '_redirects'];
    files.forEach(file => {
      if (existsSync(file)) {
        copyFileSync(file, `dist/${file}`);
        console.log(`✓ Copied ${file} to dist/`);
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    tailwindcss(),
    vueDevTools(),
    copyHostingConfig(), // Add our custom plugin
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
        // Remove preserveModules to bundle into standard chunks
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          analytics: ['./src/lib/analytics']
        },
        // Ensure proper file extensions
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
      treeshake: "smallest",
    },
    // Ensure compatibility with static hosting
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    emptyOutDir: true
  },
  server: {
    allowedHosts: ["localhost", "bryte.loca.lt"],
  }
});
