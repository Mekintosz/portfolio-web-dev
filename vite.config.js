import { defineConfig } from "vite";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Use the modern compiler API for better performance
        api: "modern-compiler",
      },
    },
  },
});
