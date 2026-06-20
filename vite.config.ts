import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite' // <-- 1. IMPORT NITRO VITE PLUGIN

const config = defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart(), // <-- 2. REMOVE THE PRERENDER OBJECT block
    nitro(),         // <-- 3. ADD THE NITRO PLUGIN HERE
    viteReact(),
  ],
})

export default config