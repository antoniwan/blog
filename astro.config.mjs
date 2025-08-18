// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import { SITE_URL } from "./src/consts";
import { remarkReadingTime } from "./remark-reading-time.mjs";


// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  adapter: vercel(),
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
    smartypants: true,
    gfm: true,
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [
      // Removed rehype-image-size as it is not used
    ],
  },
  // Enable built-in prefetch with optimized settings
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },
  // Enhanced image optimization
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
    domains: ["blog.antoniwan.online"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.antoniwan.online",
        pathname: "/images/**",
      },
    ],
  },
  // Build optimizations
  build: {
    inlineStylesheets: "auto", // Inline small stylesheets
  },
  // Vite optimizations for better performance
  vite: {
    build: {
      cssMinify: true,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.log in production
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor chunks for better caching
            vendor: ['astro', '@astrojs/mdx'],
            utils: ['date-fns', 'reading-time'],
          },
        },
      },
    },
    css: {
      devSourcemap: false, // Disable sourcemaps in production
    },
    optimizeDeps: {
      include: ['@astrojs/mdx', 'date-fns', 'reading-time'],
    },
  },
});
