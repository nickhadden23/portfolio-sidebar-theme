import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  base: '/', // Ensure base path is correct
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    },
    // Add this to ensure assets are properly referenced
    assetsInlineLimit: 0
  },
  optimizeDeps: {
    include: [
      '@webcomponents/webcomponentsjs/webcomponents-loader.js',
      '@haxtheweb/d-d-d',
      '@haxtheweb/i18n-manager',
      '@haxtheweb/scroll-button',
      '@haxtheweb/simple-cta',
      'lit'
    ]
  }
})