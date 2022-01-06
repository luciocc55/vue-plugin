import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
const path = require("path");
// https://vitejs.dev/config/
const srcPath = path.resolve(__dirname, 'src', 'styles', 'variables.scss')
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {

    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "embeddable",
      fileName: (format) => `my-embeddable.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});

