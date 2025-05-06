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
    }),
  ],
  output: "server",
  adapter: vercel(),
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
    smartypants: true,
    gfm: true,
  },
  vite: {
    css: {
      devSourcemap: true,
    },
    build: {
      cssMinify: true,
    },
    server: {
      fs: {
        strict: true,
      },
    },
  },
  // Enable built-in prefetch
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  // Enable image optimization
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
