const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [
    require('daisyui'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
  ],
  daisyui: {
    themes: [
      {
        cyanTheme: {
          primary: '#34e7d7',
          'base-100': '#dbfcf9',
          'base-300': '#282d33',
          secondary: '#f6d860',
          accent: '#37cdbe',
          neutral: '#3d4451',
        },
      },
    ],
  },
  theme: {
    extend: {
      animation: {
        ticker: 'ticker 35s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      textShadow: {
        DEFAULT: '0 0 3px #000, 0 0 5px #000',
      },
    },
  },
};
