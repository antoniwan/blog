// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.antoniwan.online",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: true,
      config: {
        future: {
          hoverOnlyWhenSupported: true,
        },
      },
    }),
  ],
  adapter: vercel(),
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark",
    },
  },
  vite: {
    css: {
      devSourcemap: true,
    },
    build: {
      cssMinify: true,
    },
  },
});
