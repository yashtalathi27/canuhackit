/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-violet': 'rgba(255,255,255,0.5)' // Customize the RGBA values as needed
      }
    }
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