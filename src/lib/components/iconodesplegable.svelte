    <!-- correo -->
  <script>
    let accion = true;
    // function toggleClass() {
    //     accion = !accion;
    // }
    // function Mouseleave() {
      // let enter = ()=> setTimeout(()=> {hiddene = false},1000)
    // }
      export let svg = 'M485.211,363.906c0,10.637-2.992,20.498-7.785,29.174L324.225,221.67l151.54-132.584 c5.895,9.355,9.446,20.344,9.446,32.219V363.906z M242.606,252.793l210.863-184.5c-8.653-4.737-18.397-7.642-28.908-7.642H60.651 c-10.524,0-20.271,2.905-28.889,7.642L242.606,252.793z M301.393,241.631l-48.809,42.734c-2.855,2.487-6.41,3.729-9.978,3.729 c-3.57,0-7.125-1.242-9.98-3.729l-48.82-42.736L28.667,415.23c9.299,5.834,20.197,9.329,31.983,9.329h363.911 c11.784,0,22.687-3.495,31.983-9.329L301.393,241.631z M9.448,89.085C3.554,98.44,0,109.429,0,121.305v242.602 c0,10.637,2.978,20.498,7.789,29.174l153.183-171.44L9.448,89.085z'
      export let viewbox = '0 0 485.211 485.211'
      export let tamañoSVG = '80'
      export let tamañoext = '320'


  </script>
  <button 
    on:mouseenter={() => accion = false} on:mouseleave={() => accion = true}   
    aria-label="Click para acceder al correo" 
    class="overflow-hidden ml-izq">
    
    <!-- class:w-20={accion} class:w-80={!accion} -->
    <span style="{accion ? `width: ${tamañoSVG}px`: `width: ${tamañoext}px`}" class="flex items-center bg-rosa rounded-2xl transition-all duration-300 justify-between relative">
        
      <a href="#/"   
          class="w-fit transition-all z-10">
          <svg 
          xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} 
          class="bg-verde rounded-2xl p-2"
          style="width: {tamañoSVG}px; height: {tamañoSVG}px;">
          <path d={svg}>

          </path></svg>
      </a> 
        <p
          class:translate-x-0={!accion} 
          class:-translate-x-60={accion} 
          class="text-lg text-azul mx-5 z-0  transition-all duration-500 ">
          JoelJMoraB@gmail.com
        </p>
    </span>  
  </button>
