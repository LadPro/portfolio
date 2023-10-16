/** @type {import('tailwindcss').Config} */
export default {
  // mode: 'jit',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './components/**/*.{html,js,svelte,ts}',
    './pages/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      fontFamily:{
        original: ["roboto", "sans-serif"],
        mont: ["montserrat", "sans-serif"],
        mulish: ["mulish", "sans-serif"],
        ubuntu: ["ubuntu", "sans-serif"],
        robotomono: ["roboto-mono", "sans-serif"],
        robotoslab: ["roboto-slab", "sans-serif"],
        sourcecodepro: ["source-code-pro", "sans-serif"],
        lobster: ["lobster", "sans-serif"],
        spacegrotesk: ["space-grotesk", "sans-serif"],
        overpass: ["overpass", "sans-serif"]
      },
      colors:{
        primario: '#461959',
        lateral: '#7A316F',
        verde: '#3DF039',
        subt: '#CD6688',
        azul: '#8696FE',
        rosa: '#E0BAFD',
        gris: 'rgb(209 213 219)'
      },
      margin: {
        'izq':'16.66667%',
        'ad':'10vh',
        'codeMockAncho':'525px'
      
      },
      spacing: {
        'ad':'15vh',
        'altoproyecto': '480px',
        'mrIzqEduca':'15%',
        'padIcon':'6px',
        'navGap':'3vh',
        'mtCara':'10vh',
        'proporcion':'70%',
      
      },
      
      width:{
        'codeMockAncho':'525px',
      },
      minWidth:{
        'codeMockAncho':'525px',
        
      },

      height:{
        '63' : '252px',
      },
      padding:{
        'general':'',
      },
      lineHeight:{
        '2.25':['clamp(1.30rem, 0.1rem + 1.4vw, 2.255rem)']
      },
      fontSize:{
        'r3xl':['clamp(1rem, 0.1rem + 1.4vw, 1.875rem)', 'normal'],
        'rm3xl':['clamp(1.3rem, 0.15rem + 1.6vw, 1.875rem)', 'normal'],
      }
      }
  },
  plugins: [   
     require("daisyui")],
}

