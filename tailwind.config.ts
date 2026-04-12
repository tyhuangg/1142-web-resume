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
    extend: {
      keyframes: {
      typewriter: {
        'from': { width: '0' },
        'to': { width: '100%' },
      },
      blink: {
        '50%': { borderColor: 'transparent' },
      },
    },
    animation: {
      typewriter: 'typewriter 2s steps(40) forwards',
    },
    },
  },
  plugins: [],
};
export default config;