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
        letraResaltada: '#3DF039',
        letrasEspeciales: '#CD6688',
        letraGeneral: '#8696FE',
        letraSubtitulos: '#E0BAFD'
      }
      }
  },
  plugins: [],
}

// module.exports = {
//   //...
//   plugins: [require("daisyui")],
// }