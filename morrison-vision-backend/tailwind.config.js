module.exports = {
  content: [
    './views/**/*.ejs',
    './public/**/*.js',
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'blue sky': '#87ceeb',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
