/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2337ff",
          dark: "#000d8a",
        },
        gray: {
          light: "rgb(229, 233, 240)",
          DEFAULT: "rgb(96, 115, 159)",
          dark: "rgb(34, 41, 57)",
        },
        black: "rgb(15, 18, 25)",
        background: {
          DEFAULT: "#fff",
          dark: "rgb(34, 41, 57)",
        },
        text: {
          DEFAULT: "rgb(15, 18, 25)",
          dark: "rgb(229, 233, 240)",
        },
        border: {
          DEFAULT: "rgba(229, 233, 240, 0.5)",
          dark: "rgba(229, 233, 240, 0.2)",
        },
        "code-bg": {
          DEFAULT: "rgb(229, 233, 240)",
          dark: "rgba(229, 233, 240, 0.1)",
        },
        "blockquote-bg": {
          DEFAULT: "rgba(229, 233, 240, 0.2)",
          dark: "rgba(229, 233, 240, 0.1)",
        },
        "blockquote-border": "#2337ff",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.2" }],
        sm: ["0.875rem", { lineHeight: "1.375" }],
        base: ["1rem", { lineHeight: "1.5" }],
        lg: ["1.125rem", { lineHeight: "1.625" }],
        xl: ["1.25rem", { lineHeight: "1.625" }],
        "2xl": ["1.5rem", { lineHeight: "1.2" }],
        "3xl": ["1.875rem", { lineHeight: "1.2" }],
        "4xl": ["2.25rem", { lineHeight: "1.2" }],
      },
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
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
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
