import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://andrewryno.com",
  integrations: [tailwind(), sitemap()],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
