import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { i18nAlly } from "vite-plugin-i18n-ally";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    i18nAlly({
      root: "./src/",
      localesPaths: ["./locales"],
      pathMatcher: "{locale}.{ext}",
      useVscodeI18nAllyConfig: true,
    }),
  ],
  base: "/sakha-gamedev/",
});
