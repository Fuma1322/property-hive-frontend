
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
       "@": path.resolve(__dirname, "./"), 
    },
  },


  build: {
    outDir: 'dist', // Ensure this is set to 'dist'
  },
})

