/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-image':"url('/src/images/BlurGradient.png')",
        'gradient-impressions':"url('/src/images/Blur-Gradient2.png')",
        'gradient-product':"url('/src/images/product_Gradient.png')",
        'platinum-background':"url('/src/images/platinum-background.png')",
        'faq-background':"url('src/images/faq-background.png')"
      },
      colors:{
        "dark-blue": "#1D2130",
        "light-pink": "#D798E126",
        "bordered-blue": "#6199ED42",
        "input-bg": "#2B2E3C",
        "light-orange":"#FFACAC",
        "light-gray":"#F4F5F7",
        "light-purple":"#E0E4FC",
        
      },
      backgroundColor:{
        "dark-pur":"#d79ae4"
      }
    },
  },
  plugins: [],
}