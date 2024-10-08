import svgr from '@svgr/rollup'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@src': '/src',
      '@pages': '/pages',
      '@static': '/static',
      '@assets': '/assets',
      '@styles': '/styles'
    }
  }
})
