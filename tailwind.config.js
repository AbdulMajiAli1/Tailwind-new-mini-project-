// tailwind.config.js
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      mycolor: '#eaa600'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
