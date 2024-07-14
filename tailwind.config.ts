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
    },
  },
  plugins: [],
}
export default config
