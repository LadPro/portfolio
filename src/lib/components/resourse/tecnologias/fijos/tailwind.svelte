  <script>
    import {tSVG} from '../../variables'
    import {text} from '../../variables'
    import {tletra} from '../../variables'

    import {cfondo} from '../../variables'
    import {cletra} from '../../variables'
    import {cdesplegable} from '../../variables'
    import {cfill} from '../../variables'
    import {cfill2} from '../../variables'
    
    // let colorFondo = $cfondo
    let colorletra = $cletra
    let colordesplegable = $cdesplegable
    // let colorfill = $cfill
    // let colorfill2 = $cfill2
    
    
    export let tamaSVG =   $tSVG
    export let tamaSVGancho = tamaSVG;
    export let tamaext =   $text;
    export let tamaletra = $tletra;
    
    export let viewbox = '0 0 32 32';
    export let texto = 'Tailwind';
    
    let colorFondo = '#0b1121'
    // let colorletra = '#fff'
    // let colordesplegable = '#0b1121'
    let colorfill = '#fff'
    let colorfill2 = $cfill2
    
  </script>
  <button 
    aria-label="Click para acceder al correo" 
    class="overflow-hidden rond">
    
    <!-- class:w-20={accion} class:w-80={!accion} -->
    <span style="{`width: ${tamaext}px`}; background-color: {colordesplegable}" class="flex items-center bg-rosa rounded-lg transition-all duration-300 ">
        
      <span   
          class="w-fit transition-all z-10">
          <svg 
          xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} 
          class="rounded-xl p-padIcon"
          style="width: {tamaSVG}px; height: {tamaSVGancho}px; background-color: {colorFondo}">
          <path xmlns="http://www.w3.org/2000/svg" d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" style="fill:{colorfill}"/>
      </span> 
        <p
          style="color: {colorletra}; font-size: {tamaletra}px"
          class=" mx-auto z-0 font-semibold transition-all duration-500">
          {texto}
          
        </p>
    </span>  
  </button>