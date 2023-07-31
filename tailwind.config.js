/** @type {import('tailwindcss').Config} */
export default {
  // mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily:{
        original: ["roboto", "sans-serif"],
        mont: ["montserrat", "sans-serif"],
        mulish: ["mulish", "sans-serif"]
      },
      colors:{
        primario: '#461959',
        lateral: '#7A316F',
        verde: '#3DF039',
        subt: '#CD6688',
        azul: '#8696FE',
        rosa: '#E0BAFD'
      }
      }
  },
  plugins: [],
}

// module.exports = {
//   //...
//   plugins: [require("daisyui")],
// }