/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    
    extend: { fontFamily:{ 'poppins': ['Poppins', 'sans-serif'],}, colors: {
      customBlue: '#539BBB',
      customCyan: 'rgba(47, 102, 127, 1)',
      card_1:'rgba(83, 155, 187, 1)',
      card_2:'rgba(83, 155, 187, 1)',
      card_3:'rgba(255, 255, 255, 1)',
      card_4:'rgba(255, 79, 82, 1)'
      ,
    },},
  },
  plugins: [],
}