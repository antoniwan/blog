/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          50: "#f0f4ff",
          100: "#dbe4ff",
          200: "#b8c7ff",
          300: "#8fa3ff",
          400: "#6179ff",
          500: "#3d5afe", // More vibrant primary
          600: "#1a3bff",
          700: "#0026ff",
          800: "#0018cc",
          900: "#000d99",
        },
        // Accent colors
        accent: {
          50: "#fff5f5",
          100: "#ffe3e3",
          200: "#ffc9c9",
          300: "#ffa8a8",
          400: "#ff8787",
          500: "#ff6b6b", // Complementary accent
          600: "#fa5252",
          700: "#f03e3e",
          800: "#e03131",
          900: "#c92a2a",
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
        // Background colors
        background: {
          DEFAULT: "rgb(var(--color-background))",
          dark: "rgb(var(--color-background))",
          alt: "rgb(var(--color-background-alt))",
          elevated: "rgb(var(--color-background-elevated))",
          subtle: {
            DEFAULT: "#f8f9fa",
            dark: "#1A1F2E",
          },
        },
        // Text colors
        text: {
          DEFAULT: "rgb(var(--color-text))",
          dark: "rgb(var(--color-text))",
          muted: "rgb(var(--color-text-muted))",
          subtle: "rgb(var(--color-text-subtle))",
        },
        // Border colors
        border: {
          DEFAULT: "rgb(var(--color-border))",
          dark: "rgb(var(--color-border))",
          strong: "rgb(var(--color-border-strong))",
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
          DEFAULT: "rgb(var(--color-success))",
          dark: "rgb(var(--color-success))",
        },
        warning: {
          DEFAULT: "rgb(var(--color-warning))",
          dark: "rgb(var(--color-warning))",
        },
        error: {
          DEFAULT: "rgb(var(--color-error))",
          dark: "rgb(var(--color-error))",
        },
        info: {
          DEFAULT: "rgb(var(--color-info))",
          dark: "rgb(var(--color-info))",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        serif: ["Fraunces", "Georgia", "Times New Roman", "serif"],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        xs: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        sm: ["1rem", { lineHeight: "1.6", letterSpacing: "0.01em" }],
        base: ["1.125rem", { lineHeight: "1.75", letterSpacing: "0.01em" }],
        lg: ["1.25rem", { lineHeight: "1.75", letterSpacing: "0.01em" }],
        xl: ["1.5rem", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        "2xl": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.02em" }],
        "3xl": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "4xl": ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "5xl": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "6xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
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
        // Content widths
        prose: "65ch", // Optimal reading width
        "prose-wide": "85ch", // Wider content area

        // Layout containers
        container: "1280px", // Default container
        "container-narrow": "1024px", // For focused content
        "container-wide": "1536px", // For full-width layouts

        // Component widths
        card: "400px",
        "card-wide": "600px",
        media: "100%",
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
              color: "inherit",
              borderLeftWidth: "0.25rem",
              borderLeftColor: "var(--tw-color-neutral-300)",
              padding: "1rem 1.5rem",
              fontStyle: "italic",
              fontSize: "1.125rem",
              lineHeight: "1.75",
            },
            h1: {
              color: "inherit",
              fontWeight: "800",
              letterSpacing: "-0.03em",
              lineHeight: "1.1",
              marginTop: "2em",
              marginBottom: "0.5em",
              fontFamily: "var(--tw-font-serif)",
            },
            h2: {
              color: "inherit",
              fontWeight: "700",
              letterSpacing: "-0.02em",
              lineHeight: "1.2",
              marginTop: "1.75em",
              marginBottom: "0.5em",
              fontFamily: "var(--tw-font-serif)",
            },
            h3: {
              color: "inherit",
              fontWeight: "600",
              letterSpacing: "-0.02em",
              lineHeight: "1.3",
              marginTop: "1.5em",
              marginBottom: "0.5em",
              fontFamily: "var(--tw-font-serif)",
            },
            h4: {
              color: "inherit",
              fontWeight: "600",
              letterSpacing: "-0.01em",
              lineHeight: "1.4",
              marginTop: "1.25em",
              marginBottom: "0.5em",
              fontFamily: "var(--tw-font-serif)",
            },
            p: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
              lineHeight: "1.75",
              fontFamily: "var(--tw-font-sans)",
            },
            ul: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
              paddingLeft: "1.5em",
            },
            ol: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
              paddingLeft: "1.5em",
            },
            li: {
              marginTop: "0.5em",
              marginBottom: "0.5em",
              lineHeight: "1.75",
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
        "slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-up": "fade-up 0.5s ease-out forwards",
        heartbeat: "heartbeat 2s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "slide-down": "slide-down 0.5s ease-out forwards",
      },
      transitionTimingFunction: {
        "ease-out": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
  // Optimize for production
  ...(process.env.NODE_ENV === "production"
    ? {
        safelist: ["dark", "light"],
      }
    : {}),
};
