/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      tealTheme: {
        'primary': '#34e7d7',
        'base-100': '#dbfcf9',
        "secondary": "#f6d860",
        "accent": "#37cdbe",
        "neutral": "#3d4451",
      }
    }],
  },
}
