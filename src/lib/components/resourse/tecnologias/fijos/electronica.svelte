    <script>
    import {tSVG} from '../../variables'
    import {text} from '../../variables'
    import {tletra} from '../../variables'

    import {mtSVG} from '../../variables'
    import {mtletra} from '../../variables'


    import {cletra} from '../../variables'
    import {cdesplegable} from '../../variables'
    
    // let colorFondo = $cfondo
    let colorletra = $cletra
    let colordesplegable = $cdesplegable
    // let colorfill = $cfill

    $: tamaSVG =  innerWidth < 1024 ? $mtSVG : $tSVG
    $: tamaSVGancho = tamaSVG;
    $: tamaext = $text;
    $: tamaletra = innerWidth < 1024 ? $mtletra : $tletra;
    $: innerWidth = 0
    
    export let viewbox = '0 0 36 36';
    export let texto = 'Electronica';

    let colorFondo = '#008000'
    // let colorletra = '#ffcd3c'
    // let colordesplegable = '#376f9e'
    let colorfill = '#000000'

  </script>
   <svelte:window bind:innerWidth/>
  <button 
    aria-label="Click para acceder al correo" 
    class="overflow-hidden rond">
    
    <span style="{innerWidth > 1024
      ? `width: ${tamaext}px `
      : 'width: 100%'}; background-color: {colordesplegable}" class="flex items-center bg-rosa rounded-2xl">
        
      <span   
          class="w-fit z-10">
          <svg 
          xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} 
          class="rounded-2xl p-padIcon"
          style="width: {tamaSVG}px; height: {tamaSVGancho}px; background-color: {colorFondo}">
          <g id="layer1" transform="translate(0,-1016.3622)"><path d="m 12.39454,1020.86 c -0.20169,-10e-5 -0.39649,0.1824 -0.39649,0.4824 l 0,0.4668 c 0.002,0.017 0.002,0.034 0.002,0.051 l 0,2 c 0,0.014 -9.5e-4,0.029 -0.002,0.043 l 0,1.9063 c 0.002,0.017 0.002,0.034 0.002,0.051 l 0,2 c 0,0.014 -9.5e-4,0.029 -0.002,0.043 l 0,1.9062 c 0.002,0.017 0.002,0.034 0.002,0.051 l 0,2 c 0,0.014 -9.5e-4,0.029 -0.002,0.043 l 0,1.9063 c 0.002,0.017 0.002,0.034 0.002,0.051 l 0,2 c 0,0.014 -9.5e-4,0.029 -0.002,0.043 l 0,1.9062 c 0.002,0.017 0.002,0.034 0.002,0.051 l 0,2 c 0,0.014 -9.5e-4,0.029 -0.002,0.043 l 0,1.9063 c 0.002,0.017 0.002,0.034 0.002,0.051 l 0,2 c 0,0.014 -9.5e-4,0.029 -0.002,0.043 l 0,1.832 c 0.002,0.017 0.002,0.034 0.002,0.051 l 0,2.0742 c -10e-4,0.01 -10e-4,0.014 -0.002,0.022 0.003,0.2963 0.19587,0.4785 0.39649,0.4785 l 11.21093,0 c 0.20109,0 0.39449,-0.1829 0.39649,-0.4804 -0.001,-0.01 -0.001,-0.013 -0.002,-0.02 l 0,-2 c 0,-0.017 -4e-5,-0.034 0.002,-0.051 l 0,-1.918 c -0.001,-0.01 -0.002,-0.021 -0.002,-0.031 l 0,-2 c 0,-0.017 -4e-5,-0.034 0.002,-0.051 l 0,-1.918 c -0.001,-0.01 -0.002,-0.021 -0.002,-0.031 l 0,-2 c 0,-0.017 -4e-5,-0.034 0.002,-0.051 l 0,-1.918 c -0.001,-0.01 -0.002,-0.021 -0.002,-0.031 l 0,-2 c 0,-0.017 -4e-5,-0.034 0.002,-0.051 l 0,-1.9179 c -0.001,-0.01 -0.002,-0.021 -0.002,-0.031 l 0,-2 c 0,-0.017 -4e-5,-0.034 0.002,-0.051 l 0,-1.918 c -0.001,-0.01 -0.002,-0.021 -0.002,-0.031 l 0,-2 c 0,-0.017 -4e-5,-0.034 0.002,-0.051 l 0,-1.918 c -0.001,-0.01 -0.002,-0.021 -0.002,-0.031 l 0,-2 c 0,-0.017 -4e-5,-0.034 0.002,-0.051 l 0,-0.4668 c 0,-0.2999 -0.19446,-0.4824 -0.39649,-0.4824 l -3.9414,0 -0.10352,0 c -0.0398,0.046 -0.11398,0.1599 -0.2207,0.3047 -0.21898,0.2972 -0.67021,0.7129 -1.33985,0.7129 -0.66963,0 -1.12086,-0.4157 -1.33984,-0.7129 -0.10673,-0.1448 -0.18286,-0.2589 -0.22266,-0.3047 l -0.83789,0 -3.20507,0 z m -2.39454,0.5 0,1 -2,0 0,1 2,0 0,1 0.99805,0 0,-3 -0.99805,0 z m 15.00196,0 0,3 0.99804,0 0,-1 2,0 0,-1 -2,0 0,-1 -0.99804,0 z m -11.53711,0.5 c 0.0117,-4e-4 0.0234,-4e-4 0.0351,0 0.27614,0 0.5,0.2239 0.5,0.5 0,0.2761 -0.22386,0.5 -0.5,0.5 -0.27614,0 -0.5,-0.2239 -0.5,-0.5 -6.5e-4,-0.263 0.20252,-0.4815 0.46485,-0.5 z m -3.46485,3.5 0,1 -2,0 0,1 2,0 0,1 0.99805,0 0,-3 -0.99805,0 z m 15.00196,0 0,3 0.99804,0 0,-1 2,0 0,-1 -2,0 0,-1 -0.99804,0 z m -15.00196,4 0,1 -2,0 0,1 2,0 0,1 0.99805,0 0,-3 -0.99805,0 z m 15.00196,0 0,3 0.99804,0 0,-1 2,0 0,-1 -2,0 0,-1 -0.99804,0 z m -15.00196,4 0,1 -2,0 0,1 2,0 0,1 0.99805,0 0,-3 -0.99805,0 z m 15.00196,0 0,3 0.99804,0 0,-1 2,0 0,-1 -2,0 0,-1 -0.99804,0 z m -15.00196,4 0,1 -2,0 0,1 2,0 0,1 0.99805,0 0,-3 -0.99805,0 z m 15.00196,0 0,3 0.99804,0 0,-1 2,0 0,-1 -2,0 0,-1 -0.99804,0 z m -15.00196,4 0,1 -2,0 0,1 2,0 0,1 0.99805,0 0,-3 -0.99805,0 z m 15.00196,0 0,3 0.99804,0 0,-1 2,0 0,-1 -2,0 0,-1 -0.99804,0 z M 10,1045.2858 l 0,1.0742 -2,0 0,1 2,0 0,1 0.99805,0 0,-3.0742 -0.99805,0 z m 15.00196,0.074 0,3 0.99804,0 0,-1 2,0 0,-1 -2,0 0,-1 -0.99804,0 z" id="rect4927" style="font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-indent:0;text-align:start;text-decoration:none;line-height:normal;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;text-anchor:start;baseline-shift:baseline;color:#000000;fill:{colorfill};fill-opacity:1;fill-rule:nonzero;stroke:none;visibility:visible;display:inline;overflow:visible;enable-background:accumulate;font-family:sans-serif"/></g>
      </span> 
        <p
          style="color: {colorletra}; font-size: {tamaletra}px"
          class=" mx-auto z-0 font-semibold">
          {texto}
          
        </p>
    </span>  
  </button>