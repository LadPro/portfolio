    <!-- correo -->
  <script>
    import {primaria} from './resourse/variables'
    import {lateral} from './resourse/variables'
    import {verde} from './resourse/variables'
    import {subt} from './resourse/variables'
    import {azul} from './resourse/variables'
    import {rosa} from './resourse/variables'

    //colores:
    let cprimaria = $primaria
    let clateral = $lateral
    let cverde = $verde
    let csubt = $subt
    let cazul = $azul
    let crosa = $rosa  

    let accion = true;
    export let svg ='<path d="M485.211,363.906c0,10.637-2.992,20.498-7.785,29.174L324.225,221.67l151.54-132.584 c5.895,9.355,9.446,20.344,9.446,32.219V363.906z M242.606,252.793l210.863-184.5c-8.653-4.737-18.397-7.642-28.908-7.642H60.651 c-10.524,0-20.271,2.905-28.889,7.642L242.606,252.793z M301.393,241.631l-48.809,42.734c-2.855,2.487-6.41,3.729-9.978,3.729 c-3.57,0-7.125-1.242-9.98-3.729l-48.82-42.736L28.667,415.23c9.299,5.834,20.197,9.329,31.983,9.329h363.911 c11.784,0,22.687-3.495,31.983-9.329L301.393,241.631z M9.448,89.085C3.554,98.44,0,109.429,0,121.305v242.602 c0,10.637,2.978,20.498,7.789,29.174l153.183-171.44L9.448,89.085z"></path>'
    export let viewbox = '0 0 485.211 485.211';
    export let tamaSVG = '80';
    export let tamaSVGancho = tamaSVG;
    export let tamaext = '320';
    export let colordesp = crosa;
    export let coloricon = cverde;
    export let colortxt = cazul;
    export let tamaletra = '18';
    export let texto = 'JoelJMoraB@gmail.com';


  </script>
  <button 
    on:mouseenter={() => accion = false} on:mouseleave={() => accion = true}   
    aria-label="Click para acceder al correo" 
    class="overflow-hidden">
    
    <!-- class:w-20={accion} class:w-80={!accion} -->
    <span style="{accion ? `width: ${tamaSVG}px`: `width: ${tamaext}px`}; background-color: {colordesp}" class="flex items-center bg-rosa rounded-2xl transition-all duration-300  relative">
        
      <a href="#/"   
          class="w-fit transition-all z-10">
          <svg 
          xmlns="http://www.w3.org/2000/svg" viewBox={viewbox} 
          class="rounded-2xl p-2"
          style="width: {tamaSVG}px; height: {tamaSVGancho}px; background-color: {coloricon}">
          {svg}</svg>
      </a> 
        <p
          style="color: {colortxt}; font-size: {tamaletra}px"
          class:translate-x-0={!accion} 
          class:-translate-x-60={accion} 
          class="fill-current mx-auto z-0  transition-all duration-500">
          {texto}
          
        </p>
    </span>  
  </button>


  <style>
    /* b.{
      mar
    } */
  </style>