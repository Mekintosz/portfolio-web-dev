import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        blackOlives: resolve(__dirname, "black-olives-project.html"),
      },
    },
  },
});
