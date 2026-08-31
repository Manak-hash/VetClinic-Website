import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { prerenderLocalesPlugin } from './plugins/prerender-locales.ts'

export default defineConfig({
  plugins: [react(), tailwindcss(), prerenderLocalesPlugin()],
  server: { host: true, port: 3090 },
})
