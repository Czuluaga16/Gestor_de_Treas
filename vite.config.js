import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [react(), VitePWA({ /* config previa */ })],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js', // Archivo para cargar utilidades globales
  }
})