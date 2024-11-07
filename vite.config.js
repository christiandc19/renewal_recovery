import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/renewal_recovery/',  // Add this line for correct asset path
  plugins: [react()]
})
