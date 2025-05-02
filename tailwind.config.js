/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2337ff",
          dark: "#4d5eff",
        },
        gray: {
          light: "#E5E9F0",
          DEFAULT: "#60739F",
          dark: "#1A1F2E",
        },
        black: "#0F1219",
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#0F1219",
        },
        text: {
          DEFAULT: "#0F1219",
          dark: "#E5E9F0",
        },
        border: {
          DEFAULT: "rgba(229, 233, 240, 0.5)",
          dark: "rgba(229, 233, 240, 0.1)",
        },
        "code-bg": {
          DEFAULT: "#E5E9F0",
          dark: "#1A1F2E",
        },
        "blockquote-bg": {
          DEFAULT: "rgba(229, 233, 240, 0.2)",
          dark: "rgba(229, 233, 240, 0.05)",
        },
        "blockquote-border": {
          DEFAULT: "#2337ff",
          dark: "#4d5eff",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Charter", "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.4" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1.125rem", { lineHeight: "1.6" }],
        lg: ["1.25rem", { lineHeight: "1.6" }],
        xl: ["1.5rem", { lineHeight: "1.4" }],
        "2xl": ["1.875rem", { lineHeight: "1.3" }],
        "3xl": ["2.25rem", { lineHeight: "1.2" }],
        "4xl": ["2.75rem", { lineHeight: "1.1" }],
        "5xl": ["3.5rem", { lineHeight: "1.1" }],
        "6xl": ["4.5rem", { lineHeight: "1" }],
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "6rem",
        "5xl": "8rem",
      },
      maxWidth: {
        reading: "65ch",
        wide: "85ch",
        full: "100%",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "-0.011em",
        wide: "0.025em",
        wider: "0.05em",
      },
      zIndex: {
        dropdown: "1000",
        sticky: "1020",
        fixed: "1030",
        "modal-backdrop": "1040",
        modal: "1050",
        popover: "1060",
        tooltip: "1070",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "inherit",
            a: {
              color: "inherit",
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": {
                color: "var(--tw-color-primary)",
              },
            },
            strong: {
              color: "inherit",
            },
            code: {
              color: "inherit",
              fontWeight: "400",
              backgroundColor: "var(--tw-color-code-bg)",
              borderRadius: "0.25rem",
              padding: "0.2em 0.4em",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            blockquote: {
              fontWeight: "500",
              fontStyle: "italic",
              color: "inherit",
              borderLeftWidth: "0.25rem",
              borderLeftColor: "var(--tw-color-blockquote-border)",
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            "blockquote p:first-of-type::before": {
              content: "open-quote",
            },
            "blockquote p:last-of-type::after": {
              content: "close-quote",
            },
            h1: {
              color: "inherit",
            },
            h2: {
              color: "inherit",
            },
            h3: {
              color: "inherit",
            },
            h4: {
              color: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
