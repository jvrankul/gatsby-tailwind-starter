module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1a1a1a',
        },
        light: {
          DEFAULT: '#fafafa',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
