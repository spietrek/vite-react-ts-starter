import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'
const path = require('path')

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      includeAssets: ['favicon.png', 'robots.txt'],
      manifest: {
        name: 'WISE',
        short_name: 'WISE Application',
        description: 'WISE Application',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      registerType: 'autoUpdate',
      workbox: {
        cleanupOutdatedCaches: false,
      },
    }),
  ],
  server: {
    open: true,
    port: 4444,
  },
})
