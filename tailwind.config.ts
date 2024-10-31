import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          primary: '#181C14',
          secondary: '#3C3D37',
          tertiary: '#697565',
          quaternary: '#ECDFCC',
        },
      },
    },
  },
  plugins: [],
};
export default config;
