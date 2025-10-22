import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moca: "#4A90E2",
        slip: "#2ECC71",
        teal: {
          500: "#1ABC9C",
        },
        gold: {
          500: "#FFD700", // Define gold-500
        },
        gray: {
          900: "#1A1F2E",
          800: "#2D3347",
          700: "#40485A",
        },
      },
      boxShadow: {
        gold: "0 0 15px 5px rgba(255, 215, 0, 0.5)", // Custom shadow for hover
      },
    },
  },
  plugins: [],
};

export default config;