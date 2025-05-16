import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 80,
    host: true, // Here
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        /*rewrite: (path) => path.replace(/^\/api/, ''),*/
        secure: false,
      },
    },
  },
});
