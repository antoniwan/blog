/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          50: "#e6e8ff",
          100: "#c4c9ff",
          200: "#a2aaff",
          300: "#808bff",
          400: "#5e6cff",
          500: "#2337ff", // DEFAULT
          600: "#1c2ccc",
          700: "#152199",
          800: "#0e1666",
          900: "#070b33",
        },
        // Neutral colors
        neutral: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#868e96",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
        // Semantic colors
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#0F1219",
          subtle: {
            DEFAULT: "#f8f9fa",
            dark: "#1A1F2E",
          },
        },
        text: {
          DEFAULT: "#0F1219",
          dark: "#E5E9F0",
          subtle: {
            DEFAULT: "#495057",
            dark: "#868e96",
          },
        },
        border: {
          DEFAULT: "rgba(229, 233, 240, 0.5)",
          dark: "rgba(229, 233, 240, 0.1)",
          subtle: {
            DEFAULT: "rgba(229, 233, 240, 0.3)",
            dark: "rgba(229, 233, 240, 0.05)",
          },
        },
        // Component-specific colors
        "code-bg": {
          DEFAULT: "#f8f9fa",
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
        // Status colors
        success: {
          DEFAULT: "#28a745",
          dark: "#34d058",
        },
        warning: {
          DEFAULT: "#ffc107",
          dark: "#ffd33d",
        },
        error: {
          DEFAULT: "#dc3545",
          dark: "#f85149",
        },
        info: {
          DEFAULT: "#17a2b8",
          dark: "#79e0e8",
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
                color: "var(--tw-color-primary-500)",
              },
            },
            strong: {
              color: "inherit",
              fontWeight: "600",
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
              backgroundColor: "var(--tw-color-blockquote-bg)",
              padding: "1rem 1.5rem",
              borderRadius: "0 0.5rem 0.5rem 0",
            },
            "blockquote p:first-of-type::before": {
              content: "open-quote",
            },
            "blockquote p:last-of-type::after": {
              content: "close-quote",
            },
            h1: {
              color: "inherit",
              fontWeight: "800",
              letterSpacing: "-0.025em",
            },
            h2: {
              color: "inherit",
              fontWeight: "700",
              letterSpacing: "-0.025em",
            },
            h3: {
              color: "inherit",
              fontWeight: "600",
              letterSpacing: "-0.025em",
            },
            h4: {
              color: "inherit",
              fontWeight: "600",
              letterSpacing: "-0.025em",
            },
          },
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        heartbeat: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-up": "fade-up 0.5s ease-out forwards",
        heartbeat: "heartbeat 2s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out forwards",
      },
      transitionTimingFunction: {
        "ease-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
