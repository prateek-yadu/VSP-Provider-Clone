import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path" // needed for shadcn to work properly


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
  ],

  /* shadcn support */
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

})
