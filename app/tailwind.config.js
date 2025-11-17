/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0b345a',
        'brand-cyan': '#22c4d6',
        'brand-cyan-light': '#36d8ea',
        'brand-dark': '#0b1d33',
        'brand-darker': '#021629',
      },
    },
  },
  plugins: [],
}

