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
          500: "#1ABC9C", // Define the 500 shade explicitly
        },
        gray: {
          900: "#1A1F2E",
          800: "#2D3347",
          700: "#40485A",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};

export default config;