import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kumano-te.com",
  integrations: [react(), tailwind(), sitemap()],
  vite: {
    server: {
      proxy: {
        "/api/v1": {
          target: "https://api.kumano-te.com",
          changeOrigin: true,
        },
      },
    },
  },
});
