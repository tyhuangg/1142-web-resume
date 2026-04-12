import type { Config } from "tailwindcss";

const config: Config = {
  // 將 ["class"] 改為 'class'
  darkMode: 'class', 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}", 
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;