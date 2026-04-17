import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  server: {
    port: 5179,
  },
  build: {
    rollupOptions: {
      input: {
        main:      resolve(__dirname, 'index.html'),
        login:     resolve(__dirname, 'login.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        app:       resolve(__dirname, 'app.html'),
      },
    },
  },
})
