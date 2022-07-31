import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import FullReload from "vite-plugin-full-reload";
import WindiCSS from "vite-plugin-windicss";
import RubyPlugin from "vite-plugin-ruby";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  server: {
    open: "http://localhost:3000",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./app/frontend", import.meta.url)),
    },
  },
  plugins: [
    vue(),
    FullReload(["config/routes.rb", "app/views/**/*"]),
    WindiCSS({
      root: __dirname,
      scan: {
        fileExtensions: [
          "erb",
          "haml",
          "html",
          "vue",
          "js",
          "ts",
          "jsx",
          "tsx",
        ],
        dirs: ["app/views", "app/frontend"], // or app/javascript, or app/packs
      },
    }),
    RubyPlugin(),
  ],
});
