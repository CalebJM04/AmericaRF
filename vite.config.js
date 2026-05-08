import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" makes the built site work from GitHub Pages subpaths
// without needing to hard-code your repository name.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
