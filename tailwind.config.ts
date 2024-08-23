import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {  
      'publicsans': ['PublicSansRegular', 'fallback-font', 'sans-serif'],  
    },  
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(60.40% 94% at 50% 6.29%, #1E49EE55, #1E49EE00)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'laptop': '900px',
      'tablet': '720px',
      'dashboard': '980px'
    }
  },
  plugins: [],
};
export default config;
