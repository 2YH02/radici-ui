import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./cli.cjs",
      name: "radici-cli",
      formats: ["cjs"],
      fileName: () => `index.cjs`,
    },
    rollupOptions: {
      external: [
        "fs",
        "path",
        "node-fetch",
        "http",
        "https",
        "zlib",
        "stream",
        "util",
        "buffer",
        "url",
        "net",
      ],
      output: {
        format: "cjs",
      },
    },
    target: "node14",
    outDir: "dist",
  },
});
