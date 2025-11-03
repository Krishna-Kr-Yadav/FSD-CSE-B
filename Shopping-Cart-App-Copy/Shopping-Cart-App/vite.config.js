import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //this is used to share the link of your project to any device
  server:{
    host: '0.0.0.0'
  }
})
