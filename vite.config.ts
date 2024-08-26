import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
  },
  base: '/Users/noah/projects/js/c4tbotweb/',
  plugins: [react()],
})
