    <script>
    import {tSVG} from '../../variables'
    import {text} from '../../variables'
    import {tletra} from '../../variables'

    import {mtSVG} from '../../variables'
    import {mtext} from '../../variables'
    import {mtletra} from '../../variables'

    import {cfondo} from '../../variables'
    import {cletra} from '../../variables'
    import {cdesplegable} from '../../variables'
    import {cfill} from '../../variables'
    import {cfill2} from '../../variables'
    
    // let colorFondo = $cfondo
    let colorletra = $cletra
    let colordesplegable = $cdesplegable
    // let colorfill = $cfill
    let colorfill2 = $cfill2
    
    $: tamaSVG =  innerWidth < 1024 ? $mtSVG : $tSVG
    $: tamaSVGancho = tamaSVG;
    $: tamaext = innerWidth < 1024 ? $mtext :  $text;
    $: tamaletra = innerWidth < 1024 ? $mtletra : $tletra;
    $: innerWidth = 0

    export let viewbox = '0 0 30 30';
    export let texto = 'HTML';

    let colorFondo = '#e44f26'
    // let colorletra = '#fff'
    // let colordesplegable = '#e44f26'
    let colorfill = '#fff'
    // let colorfill2 = $cfill2


  </script>
  <svelte:window bind:innerWidth/>

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
          <path xmlns="http://www.w3.org/2000/svg" d="M2.072,0l2.399,26.963L15.234,30l10.837-3.037L28.472,0H2.072z M23.259,8.795H10.622l0.281,3.393h12.074L22.04,22.389    l-6.73,1.855v0.02h-0.075l-6.787-1.875l-0.413-5.213h3.281l0.244,2.625l3.675,0.994l3.692-0.994l0.414-4.275H7.866L6.984,5.514 H23.56L23.259,8.795z" fill='{colorfill}'/></svg>
          <!-- {@html svg} -->
      </span> 
        <p
          style="color: {colorletra}; font-size: {tamaletra}px"
          class=" mx-auto z-0 font-semibold transition-all duration-500">
          {texto}
          
        </p>
    </span>  
  </button>