/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.writing-mode-vertical': {
          'writing-mode': 'vertical-rl',
        },
        '.text-orientation-upright': {
          'text-orientation': 'upright',
        },
      });
    },
  ],
}