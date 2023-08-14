    <script>
    let accion = true;
    // export let fillcolor = '#fff'
    // export let svg = `<path d="M485.211,363.906c0,10.637-2.992,20.498-7.785,29.174L324.225,221.67l151.54-132.584 c5.895,9.355,9.446,20.344,9.446,32.219V363.906z M242.606,252.793l210.863-184.5c-8.653-4.737-18.397-7.642-28.908-7.642H60.651 c-10.524,0-20.271,2.905-28.889,7.642L242.606,252.793z M301.393,241.631l-48.809,42.734c-2.855,2.487-6.41,3.729-9.978,3.729 c-3.57,0-7.125-1.242-9.98-3.729l-48.82-42.736L28.667,415.23c9.299,5.834,20.197,9.329,31.983,9.329h363.911 c11.784,0,22.687-3.495,31.983-9.329L301.393,241.631z M9.448,89.085C3.554,98.44,0,109.429,0,121.305v242.602 c0,10.637,2.978,20.498,7.789,29.174l153.183-171.44L9.448,89.085z" fill=${fillcolor}>></path>`
    export let viewbox = '0 0 128 128';
    export let tamaSVG = '45';
    export let tamaSVGancho = tamaSVG;
    export let tamaext = '150';
    export let tamaletra = '15';
    export let texto = 'JavaScript';


  </script>
  <button 
    on:mouseenter={() => accion = false} on:mouseleave={() => accion = true}   
    aria-label="Click para acceder al correo" 
    class="overflow-hidden">
    
    <!-- class:w-20={accion} class:w-80={!accion} -->
    <span style="{accion ? `width: ${tamaSVG}px`: `width: ${tamaext}px`}; background-color: #F0DB4F" class="flex items-center bg-rosa rounded-lg transition-all duration-300 ">
        
      <span   
          class="w-fit transition-all z-10">
          <svg 
          xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} 
          class="rounded-2xl p-padIcon"
          style="width: {tamaSVG}px; height: {tamaSVGancho}px; background-color: #F0DB4F">
          <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/></svg>
          <!-- {@html svg} -->
      </span> 
        <p
          style="color: #323330; font-size: {tamaletra}px"
          class:translate-x-0={!accion} 
          class:-translate-x-60={accion} 
          class=" mx-auto z-0 font-semibold transition-all duration-500">
          {texto}
          
        </p>
    </span>  
  </button>