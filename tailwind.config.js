module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'gothic': "Gothic A1"
      },
      colors: {
        main: {
          bg: '#605B60',
          light: '#A8A6AE',
          white: '#FFFFFF'
        },
        orange: {
          light: '#F86615',
          medium: '#BE4E28',
          dark: '#523027',
        },
      },
      padding: {
        "side": '10vw',
        "top": '5vh',
        'half': '-50%',
      },
      bottom: {
        'quater': '-100px'
      },
      borderWidth: {
        '10':'10px'
      },
      height: {
        "half": "50vh"
      },
      backgroundImage: {
        'man': "url('/man.jpg')",
        "head": "url('/head.jpg')",
        'construction': "url('/construction.jpg')",
        'hero': "url('/hero.jpg')",
        'faq': "url('/faq.jpg')",
        'plan': "url('/planning.jpg')",
        "crane": "url('/crane.jpg')",
        'pencil': "url('/pencil.jpg')"
      }
    },
  },
  plugins: [],
}
