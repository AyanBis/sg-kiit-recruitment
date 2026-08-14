import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#171719",
          secondary: "#002743",
        },
        card: "#002743",
        primary: {
          cyan: "#35BDD2",
          blue: "#0D769D",
        },
        light: {
          text: "#A6D2D9",
        },
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        'premium': '20px',
        'premium-lg': '24px',
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(53, 189, 210, 0.3)',
        'cyan-glow-lg': '0 0 40px rgba(53, 189, 210, 0.4)',
      },
    },
  },
  plugins: [],
};
export default config;
