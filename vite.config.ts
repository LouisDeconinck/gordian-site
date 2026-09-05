import { resolve } from "node:path"

import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": import.meta.dirname + "/src" },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        governance: resolve(import.meta.dirname, "governance/index.html"),
        research: resolve(import.meta.dirname, "research/reui-security-review/index.html"),
      },
    },
  },
})
