import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import sassDts from "vite-plugin-sass-dts"
import path from "path"

export default defineConfig({
  plugins: [react(), sassDts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@container": path.resolve(__dirname, "./src/container"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  build: {
    outDir: "public",
  },
})
