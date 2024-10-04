import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  server: {
    proxy: {
      '/api': {
        target:'http://portfolio-node:3000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
