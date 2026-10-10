import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/FauzMechanics-Website/',
  plugins: [
    react(),
    {
      name: 'spa-github-pages-fallback',
      closeBundle() {
        const indexHtml = resolve(__dirname, 'dist/index.html')
        copyFileSync(indexHtml, resolve(__dirname, 'dist/404.html'))
      },
    },
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
