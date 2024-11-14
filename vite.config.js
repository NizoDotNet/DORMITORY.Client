import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/DORMITORY.Client/',
  publicPath: '/DORMITORY.Client/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://localhost:7106',
        changeOrigin: true,
        /*rewrite: (path) => path.replace(/^\/api/, ''),*/
        secure: false
      },
    },
  },
})
