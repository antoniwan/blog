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
    rehypePlugins: [
      // Ensure proper Unicode handling
      () => (tree) => {
        // This ensures proper handling of Unicode characters
        tree.children = tree.children.map((node) => {
          if (node.type === "text") {
            // Preserve Unicode characters
            node.value = node.value
              .replace(/[\u2018\u2019]/g, "'")
              .replace(/[\u201C\u201D]/g, '"')
              .replace(/[\u2013\u2014]/g, "-");
          }
          return node;
        });
      },
    ],
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
