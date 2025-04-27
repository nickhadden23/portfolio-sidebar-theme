import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  optimizeDeps: {
    include: [
      '@webcomponents/webcomponentsjs/webcomponents-loader.js'
    ]
  }
})