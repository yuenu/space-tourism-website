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
        home: "url('public/assets/home/background-home-mobile.jpg')",
        'home-desktop': "url('public/assets/home/background-home-desktop.jpg')",
        'home-tablet': "url('public/assets/home/background-home-tablet.jpg')",
        destination:
          "url('public/assets/destination/background-destination-mobile.jpg')",
        'destination-desktop':
          "url('public/assets/destination/background-destination-desktop.jpg')",
        crew: "url('public/assets/crew/background-crew-mobile.jpg')",
        'crew-desktop': "url('public/assets/crew/background-crew-desktop.jpg')",
        technology:
          "url('public/assets/technology/background-technology-mobile.jpg')",
        'technology-desktop':
          "url('public/assets/technology/background-technology-desktop.jpg')"
      }
    }
  },
  plugins: []
}
