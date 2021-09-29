module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        
      },
      colors: {
        primary: '#000000',
        accentOne: '#bcf2de',
        accentTwo: '#d4f1fd',
        accentThree: '#bba7df',
        dark: '#101820',
        greyOne: '#c9cedc',
        greyTwo: '#ced2df',
        light: '#f5f6f8'
      }
    },
  },
  plugins: [],
};