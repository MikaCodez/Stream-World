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