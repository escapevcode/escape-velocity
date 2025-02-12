import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#8CC63F",
        p_green: "#28443F",
        p_black: "#1E1E1E",
        bg_gray: "#F7F7F8",
        secondary: "#0C221E",
        l_green: "#9EFF00",
      },
    },
  },
  plugins: [],
};
export default config;
