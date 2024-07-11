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
        'sherpa-blue': {
        '50': '#ebfffc',
        '100': '#cdfffb',
        '200': '#a1fffb',
        '300': '#60fffb',
        '400': '#18f8f7',
        '500': '#00dcde',
        '600': '#00b0ba',
        '700': '#088c96',
        '800': '#106f7a',
        '900': '#125c67',
        '950': '#064853',
    },
    
      }
    },
  },
  plugins: [],
};
export default config;
