import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Modifiez cette valeur si le nom de votre repository est différent.
  // Par défaut, pour https://github.com/Jaouadi2004-Fedi/Jaouadi_Fadi.github.io
  base: '/Jaouadi_Fadi.github.io/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
