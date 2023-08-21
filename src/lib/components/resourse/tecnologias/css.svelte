    <script>
    let accion = true;
    // export let fillcolor = '#fff'
    // export let svg = `<path d="M485.211,363.906c0,10.637-2.992,20.498-7.785,29.174L324.225,221.67l151.54-132.584 c5.895,9.355,9.446,20.344,9.446,32.219V363.906z M242.606,252.793l210.863-184.5c-8.653-4.737-18.397-7.642-28.908-7.642H60.651 c-10.524,0-20.271,2.905-28.889,7.642L242.606,252.793z M301.393,241.631l-48.809,42.734c-2.855,2.487-6.41,3.729-9.978,3.729 c-3.57,0-7.125-1.242-9.98-3.729l-48.82-42.736L28.667,415.23c9.299,5.834,20.197,9.329,31.983,9.329h363.911 c11.784,0,22.687-3.495,31.983-9.329L301.393,241.631z M9.448,89.085C3.554,98.44,0,109.429,0,121.305v242.602 c0,10.637,2.978,20.498,7.789,29.174l153.183-171.44L9.448,89.085z" fill=${fillcolor}>></path>`
    $: viewbox = '0 0 512 512';
    $: tamaSVG = innerWidth < 1024 ? '90' :'40';
    $: tamaSVGancho = tamaSVG;
    $: tamaext = innerWidth < 1024 ? '250' :'100';
    $: tamaletra = innerWidth < 1024 ? '30' : '15';
    $: texto = 'CSS';
    $: innerWidth = 0

  </script>
    <svelte:window bind:innerWidth/>
  <button 
    on:mouseenter={() => accion = false} on:mouseleave={() => accion = true}   
    aria-label="Click para acceder al correo" 
    class="overflow-hidden lg:rounded-lg rounded-3xl">
    
    <!-- class:w-20={accion} class:w-80={!accion} -->
    <span style="{accion ? `width: ${tamaSVG}px`: `width: ${tamaext}px`}; background-color: #2299F8" class="flex items-center bg-rosa rounded-lg transition-all duration-300 ">
        
      <span   
          class="w-fit transition-all z-10">
          <svg 
          xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} 
          class="rounded-2xl p-padIcon"
          style="width: {tamaSVG}px; height: {tamaSVGancho}px; background-color: #2299F8">
          <g id="_x31_21-css3"><g><g><g><g><path d="M47.575,16.379L85.6,447.023l170.751,47.852l170.686-47.822l38.092-430.674H47.575z        M47.575,16.379" style="fill:#fff;"/></g><path d="M383.824,157.206l-4.801,54.098l-14.5,162.185l-108.172,29.994l-0.094,0.027l-108.119-30.021      l-7.541-84.817h52.968l3.938,43.992l58.785,15.908l0.029-0.027l58.875-15.912l8.023-73.3l-185.154,0.512l-5.251-50.125      l194.844-2.306l3.943-53.648l-204.005,0.572l-3.43-49.913h264.369L383.824,157.206z M383.824,157.206" style="fill:#2299F8;"/></g></g></g></g><g id="Layer_1"/>
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