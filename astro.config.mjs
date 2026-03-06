import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://andrewryno.com",
  integrations: [sitemap()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
