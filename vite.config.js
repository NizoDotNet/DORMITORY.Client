import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080,
    host: true, // Here
    strictPort: true,
    proxy: {
      '/api': {
        target: 'https://dormitory-api-container:5001',
        changeOrigin: true,
        /*rewrite: (path) => path.replace(/^\/api/, ''),*/
        secure: false
      },
    },
  },
})
