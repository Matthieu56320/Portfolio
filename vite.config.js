import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'portfolio-site-portfolio.up.railway.app',
      'www.mberthier.fr',
      'mberthier.fr'
    ]
  }
})
