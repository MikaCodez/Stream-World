module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
      padding: {
        '1/3: '33.33333%' ,
        '2/3: '66.66666%' ,
      }
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

module.exports = {
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  }
}