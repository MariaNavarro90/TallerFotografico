import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import favicons from 'favicons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
