import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInclude: ['**/*.mp4']
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
});
