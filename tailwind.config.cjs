/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'graymetalsoft': '#302f43',
      'darkpurple': '#252439',
      'softdark': '#171D1C',
      'purpleOpc': '#6244C5',
      'yellowOpc': '#E2C044',
      'graysoft': '#D3D0CB',
      'softwhite':'#f0f0f0',
    },
    /*color:{
      transparent: 'transparent',
      current: 'currentColor',
      'darkpurple':'#252439',
      'softdark':'#171D1C',
      'purpleOpc':'#6244C5',
      'yellowOpc':'#E2C044',
      'graysoft':'#D3D0CB',
    },
    */
    extend: {
      backgroundImage: {
      }
    },
  },
  plugins: [
  ],
}
