import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(() => ({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@app", replacement: path.resolve(__dirname, "src") }],
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".ts": "tsx",
      },
    },
  },
}));
