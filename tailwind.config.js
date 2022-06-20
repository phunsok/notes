module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Corinthia'],
        'body': ['Roboto Slab']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
