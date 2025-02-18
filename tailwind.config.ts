import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
      screens: {
        xs: "420px",
      },
      colors: {
        Dark: {
          "100": "#000000",
          "200": "#0f1117",
          "300": "#151821",
          "400": "#212734",
          "500": "#3f4354",
        },
        Light: {
          "400": "#858ead",
          "500": "#7b8ec8",
          "700": "#dce3f1",
          "800": "#f4f6f8",
          "850": "#fdfdfd",
          "900": "#ffffff",
        },
        Accent: {
          "100": "#fff1e6",
          "200": "#1da1f2",
          "500": "#FF7000",
        },
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },
      borderRadius: {
        "2": "8px",
        "1.5": "6px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      backgroundImage: {
        "auth-dark": 'url("/images/auth-dark.png")',
        "auth-light": 'url("/images/auth-light.png")',
      },
    },
  },
  plugins: [],
} satisfies Config;
