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
        primary: {
          50: '#e6eef9',
          100: '#ccddf3',
          200: '#99bbe7',
          300: '#6699db',
          400: '#3377cf',
          500: '#2c5aa0',
          600: '#234880',
          700: '#1a3660',
          800: '#122440',
          900: '#091220',
        },
        purple: {
          50: '#f5e6f9',
          100: '#ebcdf3',
          200: '#d79be7',
          300: '#c369db',
          400: '#af37cf',
          500: '#8b2ca0',
          600: '#6f2380',
          700: '#531a60',
          800: '#371140',
          900: '#1b0920',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
