/** @type {import('tailwindcss').Config} */
export default {
  // mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    color:{
      Primario: '#461959',
      Lateral: '#7A316F',
      LetraResaltada: '#3DF039',
      LetrasEspeciales: '#CD6688',
      LetraGeneral: '#8696FE',
      LetraSubtitulos: '#E0BAFD'
    }
  },
  plugins: [],
}

// module.exports = {
//   //...
//   plugins: [require("daisyui")],
// }