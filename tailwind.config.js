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
        'home-tablet': "url('src/assets/home/background-home-tablet.jpg')",
        destination:
          "url('src/assets/destination/background-destination-mobile.jpg')",
        'destination-desktop':
          "url('src/assets/destination/background-destination-desktop.jpg')",
        crew: "url('src/assets/crew/background-crew-mobile.jpg')",
        'crew-desktop': "url('src/assets/crew/background-crew-desktop.jpg')",
        technology:
          "url('src/assets/technology/background-technology-mobile.jpg')",
        'technology-desktop':
          "url('src/assets/technology/background-technology-desktop.jpg')"
      }
    }
  },
  plugins: []
}
