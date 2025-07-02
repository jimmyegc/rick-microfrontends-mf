// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        fade: 'fadeOut 1s ease-in-out forwards',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0, visibility: 'hidden' },
        },
      },
    },
  },
  plugins: [],
};
