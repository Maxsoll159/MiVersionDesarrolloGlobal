/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner1' : "url('/img/carosuel-bg-1.webp')",
        'banner2' : "url('/img/carosuel-bg-2.webp')"
      }
    },
  },
  plugins: [],
}
