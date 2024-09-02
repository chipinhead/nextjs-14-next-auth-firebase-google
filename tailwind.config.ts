import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'baby-blue': '#9dbed1',
        'teal': '#14829f',
        'misty-blue': '#d8e3ec',
        'midnight-blue': '#004f76',
        // Semantic color names
        'primary': '#004f76', // Midnight Blue
        'secondary': '#14829f', // Teal
        'background': '#d8e3ec', // Misty Blue
        'accent': '#9dbed1', // Baby Blue
      },
    },
  },
  plugins: [],
};
export default config;
