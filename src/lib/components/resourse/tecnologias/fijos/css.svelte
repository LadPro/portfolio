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
    // let colorfill2 = $cfill2

    let colorFondo = '#2299F8'
    // let colorletra = '#fff'
    // let colordesplegable = '#2299F8'
    let colorfill = '#fff'
    let colorfill2 = '#2299F8'

    $: tamaSVG =  innerWidth < 1024 ? $mtSVG : $tSVG
  $: tamaSVGancho = tamaSVG;
  $: tamaext = innerWidth < 1024 ? $mtext :  $text;
  $: tamaletra = innerWidth < 1024 ? $mtletra : $tletra;
  $: innerWidth = 0

    let viewbox = '0 0 512 512';
    let texto = 'CSS';



  </script>
   <svelte:window bind:innerWidth/>
  <button
    aria-label="Click para acceder al correo"
    class="overflow-hidden rond">

    <span style="{`width: ${tamaext}px`}; background-color: {colordesplegable}" class="flex items-center bg-rosa rounded-lg transition-all duration-300 ">

      <span
          class="w-fit transition-all z-10">
          <svg
          xmlns="http://www.w3.org/2000/svg" viewBox={viewbox}
          class="rounded-2xl p-padIcon"
          style="width: {tamaSVG}px; height: {tamaSVGancho}px; background-color: {colorFondo}">
          <g id="_x31_21-css3"><g><g><g><g><path d="M47.575,16.379L85.6,447.023l170.751,47.852l170.686-47.822l38.092-430.674H47.575z        M47.575,16.379" style="fill:{colorfill};"/></g><path d="M383.824,157.206l-4.801,54.098l-14.5,162.185l-108.172,29.994l-0.094,0.027l-108.119-30.021      l-7.541-84.817h52.968l3.938,43.992l58.785,15.908l0.029-0.027l58.875-15.912l8.023-73.3l-185.154,0.512l-5.251-50.125      l194.844-2.306l3.943-53.648l-204.005,0.572l-3.43-49.913h264.369L383.824,157.206z M383.824,157.206" style="fill:{colorfill2};"/></g></g></g></g><g id="Layer_1"/>
      </span>
        <p
          style="color: {colorletra}; font-size: {tamaletra}px"
          class=" mx-auto z-0 font-semibold transition-all duration-500">
          {texto}

        </p>
    </span>
  </button>