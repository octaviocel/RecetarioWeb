import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      //{ find: "@assets", replacement: path.resolve(__dirname, "src/assets/") }
    ],
  },
  plugins: [react()],
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
