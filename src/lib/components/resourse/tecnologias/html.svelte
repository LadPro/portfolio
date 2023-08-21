    <script>
    let accion = true;
    // export let fillcolor = '#fff'
    // export let svg = `<path d="M485.211,363.906c0,10.637-2.992,20.498-7.785,29.174L324.225,221.67l151.54-132.584 c5.895,9.355,9.446,20.344,9.446,32.219V363.906z M242.606,252.793l210.863-184.5c-8.653-4.737-18.397-7.642-28.908-7.642H60.651 c-10.524,0-20.271,2.905-28.889,7.642L242.606,252.793z M301.393,241.631l-48.809,42.734c-2.855,2.487-6.41,3.729-9.978,3.729 c-3.57,0-7.125-1.242-9.98-3.729l-48.82-42.736L28.667,415.23c9.299,5.834,20.197,9.329,31.983,9.329h363.911 c11.784,0,22.687-3.495,31.983-9.329L301.393,241.631z M9.448,89.085C3.554,98.44,0,109.429,0,121.305v242.602 c0,10.637,2.978,20.498,7.789,29.174l153.183-171.44L9.448,89.085z" fill=${fillcolor}>></path>`
    $: viewbox = '0 0 30 30';
    $: tamaSVG = innerWidth < 1024 ? '90' :'40';
    $: tamaSVGancho = tamaSVG;
    $: tamaext = innerWidth < 1024 ? '350' : '100';
    $: tamaletra = innerWidth < 1024 ? '30' :'15';
    $: texto = 'HTML';
    $: innerWidth = 0

  </script>
  <svelte:window bind:innerWidth/>
  <button 
    on:mouseenter={() => accion = false} on:mouseleave={() => accion = true}   
    aria-label="Click para acceder al correo" 
    class="overflow-hidden lg:rounded-lg rounded-3xl">
    
    <!-- class:w-20={accion} class:w-80={!accion} -->
    <span style="{accion ? `width: ${tamaSVG}px`: `width: ${tamaext}px`}; background-color: #e44f26" class="flex items-center bg-rosa rounded-lg transition-all duration-300 ">
        
      <span   
          class="w-fit transition-all z-10">
          <svg 
          xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} 
          class="rounded-2xl p-padIcon"
          style="width: {tamaSVG}px; height: {tamaSVGancho}px; background-color: #e44f26">
          <path xmlns="http://www.w3.org/2000/svg" d="M2.072,0l2.399,26.963L15.234,30l10.837-3.037L28.472,0H2.072z M23.259,8.795H10.622l0.281,3.393h12.074L22.04,22.389    l-6.73,1.855v0.02h-0.075l-6.787-1.875l-0.413-5.213h3.281l0.244,2.625l3.675,0.994l3.692-0.994l0.414-4.275H7.866L6.984,5.514 H23.56L23.259,8.795z" fill='#fff'/></svg>
          <!-- {@html svg} -->
      </span> 
        <p
          style="color: #fff; font-size: {tamaletra}px"
          class:translate-x-0={!accion} 
          class:-translate-x-60={accion} 
          class=" mx-auto z-0 font-semibold transition-all duration-500">
          {texto}
          
        </p>
    </span>  
  </button>