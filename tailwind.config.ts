import type { Config } from "tailwindcss"

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
        "button-bezel":
          "linear-gradient(rgb(68, 136, 118) 0%, rgb(52, 109, 95) 100%)",
        "button-bezel-hover":
          "linear-gradient(rgb(52, 109, 95) 0%, rgb(45, 88, 78) 100%)",
      },
      colors: {
        acapulco: {
          "50": "#f4f9f7",
          "100": "#daede6",
          "200": "#b4dbcd",
          "300": "#84c0ad",
          "400": "#5da490",
          "500": "#448876",
          "600": "#346d5f",
          "700": "#2d584e",
          "800": "#274841",
          "900": "#243d37",
          "950": "#10231f",
        },
      },
      boxShadow: {
        "outline-acapulco": "0 0 0 3px var(--colors-acapulco-400)",
        "button-bezel":
          "inset 0 1px 0 0 hsla(0, 0%, 100%, .3), inset 0 -1px 0 0 rgba(0, 0, 0, .25), 0 2px 6px 0 rgba(0, 0, 0, .1)",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%, 60%": { transform: "translateX(-5px)" },
          "40%, 80%": { transform: "translateX(5px)" },
        },
      },
      animation: {
        shake: "shake .5s ease-in-out",
      },
    },
  },
  plugins: [],
}
export default config
