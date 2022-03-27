module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          lighter: '#D0D6F9'
        }
      },
      backgroundImage: {
        home: "url('src/assets/home/background-home-mobile.jpg')",
        'home-desktop': "url('src/assets/home/background-home-desktop.jpg')",
        destination:
          "url('src/assets/destination/background-destination-mobile.jpg')",
        crew: "url('src/assets/crew/background-crew-mobile.jpg')",
        technology:
          "url('src/assets/technology/background-technology-mobile.jpg')"
      }
    }
  },
  plugins: []
}
