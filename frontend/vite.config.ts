import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path" // needed for shadcn to work properly


// https://vite.dev/config/
export default defineConfig({
  
  /* proxy server */
  server: {
    proxy: {
      "/api/v1/" :{
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  },
  plugins: [react(), tailwindcss(),
  ],

  /* shadcn support */
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

})
