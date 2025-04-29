import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      },
      external: ['@webcomponents/webcomponentsjs/webcomponents-loader.js']
    },
    minify: 'terser',
    terserOptions: {
      format: {
        comments: false
      }
    }
  },
  optimizeDeps: {
    include: [
      '@haxtheweb/d-d-d',
      '@haxtheweb/i18n-manager',
      '@haxtheweb/scroll-button',
      '@haxtheweb/simple-cta',
      'lit'
    ],
    exclude: ['@webcomponents/webcomponentsjs']
  }
})