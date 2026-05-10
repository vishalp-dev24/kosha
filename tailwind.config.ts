import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        /* Semantic color tokens */
        surface: {
          primary: "var(--surface-primary)",
          secondary: "var(--surface-secondary)",
          tertiary: "var(--surface-tertiary)"
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)"
        },
        border: {
          DEFAULT: "var(--border-default)",
          subtle: "var(--border-subtle)"
        },
        accent: {
          primary: "var(--accent-primary)",
          success: "var(--accent-success)",
          warning: "var(--accent-warning)",
          danger: "var(--accent-danger)"
        },
        /* Legacy tokens */
        ink: "rgb(var(--ink-rgb) / <alpha-value>)",
        slate: "rgb(var(--slate-rgb) / <alpha-value>)",
        graphite: "rgb(var(--graphite-rgb) / <alpha-value>)",
        paper: "rgb(var(--paper-rgb) / <alpha-value>)",
        sand: "rgb(var(--sand-rgb) / <alpha-value>)",
        line: "rgb(var(--line-rgb) / <alpha-value>)",
        blue: "rgb(var(--blue-rgb) / <alpha-value>)",
        copper: "rgb(var(--copper-rgb) / <alpha-value>)",
        teal: "rgb(var(--teal-rgb) / <alpha-value>)",
        success: "rgb(var(--success-rgb) / <alpha-value>)",
        warning: "rgb(var(--warning-rgb) / <alpha-value>)",
        danger: "rgb(var(--danger-rgb) / <alpha-value>)"
      },
      fontFamily: {
        display: ["var(--font-sans)", "Google Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "Google Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "SFMono-Regular", "Consolas", "monospace"]
      },
      boxShadow: {
        ledger: "0 24px 70px rgba(21, 23, 26, 0.12)",
        glow: "0 14px 38px rgba(39, 76, 119, 0.16)",
        copper: "0 12px 30px rgba(184, 107, 61, 0.2)"
      },
      backgroundImage: {
        "ledger-grid":
          "linear-gradient(rgba(7,17,31,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(7,17,31,.055) 1px, transparent 1px)",
        "dark-grid":
          "linear-gradient(rgba(245,240,231,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,231,.07) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
