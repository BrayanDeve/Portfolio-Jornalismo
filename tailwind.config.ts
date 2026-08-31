import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fdf6f0",
        ink: "#2f2a28",
        terracotta: "#e08e6d",
        "terracotta-dark": "#c96f4c",
        blush: "#f3c9c2",
        sage: "#b7c4ab",
        muted: "#6b6058",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)"],
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
