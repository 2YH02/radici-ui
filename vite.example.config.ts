import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: "./",
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, "example"),
    rollupOptions: {
      input: "index.html",
    },
  },
  server: {
    open: true,
  },
});
