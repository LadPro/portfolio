<script>
// @ts-nocheck

    import Imagen from '../imagenes/Anotación 2020-08-18 212512.png';
    
    export let nproyecto = 'Nombre del proyecto y descripcion del mismo algo corto no tan largo pero que de a entender mas o menos de que trata y si es posible tambien colocar para que fue hecho';
    export let imagen = Imagen;
    export let linkYoutube = "#.";
    export let linkPagina = "#.";
    export let linkGithub = "#.";
    export let Tecnologias2 = '';
    

    
    $: innerWidth = 0;
    $: aimagen = alto * 0.35555;
    $: resto = alto - aimagen;
    $: texto = alto * 0.26667;
    $: cont = resto - texto;
    $: ico = alto * 0.2555;
    $: link = cont - ico;
    
    $: alto = innerWidth < 1024 ? 1100 : 450;
    $: icon1 = innerWidth < 1024 ? 100 : 45;
    $: icon2 = innerWidth < 1024 ? 110 : 50;

    function abrirpaginaproyecto() {
        if (linkPagina != "#."){
            window.open(linkPagina, "_self")

        }
        
    }
</script>
<svelte:window bind:innerWidth/>

<div on:click={abrirpaginaproyecto} on:keydown={abrirpaginaproyecto} tabindex="0" role="button" style="height: {alto}px;" class=" flex flex-col mx-0 my-4 w-72 max-lg:w-full bg-lateral text-rosa outline outline-4 outline-slate-50 rounded-2xl overflow-hidden hover:shadow-2xl ">
    <div style="height: {aimagen}px;" class="h-40 overflow-hidden object-cover">
        <img class="" src={imagen} alt="">
    </div>
    <div style="height: {resto}px;" class="flex flex-col px-3 justify-between">
        
        <h1 style="height: {texto}px;" class="text-lg font-semibold py-2 overflow-ellipsis overflow-y-hidden text-justify max-lg:text-4xl">{nproyecto}</h1>
        
        <div style="height: {cont}px;" class="flex flex-col items-center">
            
            <div style="height: {ico}px;" class="flex-col flex items-center justify-center gap-2">
                <span class="flex flex-wrap gap-2">
                    <slot/>
                </span>
                
                <span 
                    style="{Tecnologias2 == ''? 'display : none': ''}" 
                    class="flex gap-2">
                    <slot name="2"> </slot>
                </span>
            </div>
            <div on:click={(e)=>{e.stopPropagation()}} style="height: {link}px;" class="pb-3 flex gap-3 z-10">
                
                    <a 
                        style= "{linkPagina != "#." ? '': 'display: none'}" 
                        class="link paagina" href={linkPagina}>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="{icon1}" height="{icon1}" viewBox="0 0 24 24">
                            <path d="M15.0004875,8 L18,8 C20.209139,8 22,9.790861 22,12 C22,14.209139 20.209139,16 18,16 L12,16 C9.790861,16 8,14.209139 8,12 C8,11.4477153 8.44771525,11 9,11 C9.55228475,11 10,11.4477153 10,12 C10,13.1045695 10.8954305,14 12,14 L18,14 C19.1045695,14 20,13.1045695 20,12 C20,10.8954305 19.1045695,10 18,10 L16.5839563,10 C16.2360594,9.20374889 15.6867759,8.51562167 15.0004875,8 Z M8.99951255,16 L6,16 C3.790861,16 2,14.209139 2,12 C2,9.790861 3.790861,8 6,8 L12,8 C14.209139,8 16,9.790861 16,12 C16,12.5522847 15.5522847,13 15,13 C14.4477153,13 14,12.5522847 14,12 C14,10.8954305 13.1045695,10 12,10 L6,10 C4.8954305,10 4,10.8954305 4,12 C4,13.1045695 4.8954305,14 6,14 L7.41604369,14 C7.7639406,14.7962511 8.3132241,15.4843783 8.99951255,16 Z" transform="rotate(-45 12 12)"/>
                        </svg></a>
                        
                    <a 
                        style= "{linkGithub != "#." ? '': 'display: none'}" 
                        class="link" href={linkGithub}>
                        <svg width="{icon1}" height="{icon1}" viewBox="0 0 64 64" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect id="Icons" x="0" y="-192" width="1280" height="800" style="fill:none;"/><g id="Icons1"><g id="Strike"></g><g id="H1"></g><g id="H2"></g><g id="H3"></g><g id="list-ul"></g><g id="hamburger-1"></g><g id="hamburger-2"></g><g id="list-ol"></g><g id="list-task"></g><g id="trash"></g><g id="vertical-menu"></g><g id="horizontal-menu"></g><g id="sidebar-2"></g><g id="Pen"></g><g id="Pen1"></g><g id="clock"></g><g id="external-link"></g><g id="hr"></g><g id="info"></g><g id="warning"></g><g id="plus-circle"></g><g id="minus-circle"></g><g id="vue"></g><g id="cog"></g><path id="github" d="M32.029,8.345c-13.27,0 -24.029,10.759 -24.029,24.033c0,10.617 6.885,19.624 16.435,22.803c1.202,0.22 1.64,-0.522 1.64,-1.16c0,-0.569 -0.02,-2.081 -0.032,-4.086c-6.685,1.452 -8.095,-3.222 -8.095,-3.222c-1.093,-2.775 -2.669,-3.514 -2.669,-3.514c-2.182,-1.492 0.165,-1.462 0.165,-1.462c2.412,0.171 3.681,2.477 3.681,2.477c2.144,3.672 5.625,2.611 6.994,1.997c0.219,-1.553 0.838,-2.612 1.526,-3.213c-5.336,-0.606 -10.947,-2.669 -10.947,-11.877c0,-2.623 0.937,-4.769 2.474,-6.449c-0.247,-0.608 -1.072,-3.051 0.235,-6.36c0,0 2.018,-0.646 6.609,2.464c1.917,-0.533 3.973,-0.8 6.016,-0.809c2.041,0.009 4.097,0.276 6.017,0.809c4.588,-3.11 6.602,-2.464 6.602,-2.464c1.311,3.309 0.486,5.752 0.239,6.36c1.54,1.68 2.471,3.826 2.471,6.449c0,9.232 -5.62,11.263 -10.974,11.858c0.864,0.742 1.632,2.208 1.632,4.451c0,3.212 -0.029,5.804 -0.029,6.591c0,0.644 0.432,1.392 1.652,1.157c9.542,-3.185 16.421,-12.186 16.421,-22.8c0,-13.274 -10.76,-24.033 -24.034,-24.033"/><g id="eye-slash"></g><g id="eye"></g><g id="toggle-off"></g><g id="shredder"></g><g id="spinner--loading--dots-"></g></g></svg></a>
                        
                    <a 
                        style= "{linkYoutube != "#." ? '': 'display: none'}" 
                        class="link" href={linkYoutube}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="{icon2}" height="{icon2}" viewBox="0 0 24 24">
                        <g><path d="M2.093,9.075c0.125,-1.941 1.629,-3.509 3.562,-3.716c2.005,-0.202 4.136,-0.311 6.345,-0.311c2.209,0 4.34,0.109 6.345,0.312c1.933,0.206 3.437,1.774 3.562,3.715c0.061,0.956 0.093,1.933 0.093,2.925c0,0.992 -0.032,1.969 -0.093,2.925c-0.125,1.941 -1.629,3.509 -3.562,3.716c-2.005,0.202 -4.136,0.311 -6.345,0.311c-2.209,0 -4.34,-0.109 -6.345,-0.312c-1.933,-0.206 -3.437,-1.774 -3.562,-3.715c-0.061,-0.956 -0.093,-1.933 -0.093,-2.925c0,-0.992 0.032,-1.969 0.093,-2.925Z" /><path d="M15.055,12l-4.909,2.995l0,-5.99l4.909,2.995Z" style="fill:#fff;"/></g></svg></a>
                    


            </div>
        </div>
    </div>
    
</div>

<style>

.link {
    @apply fill-azul transition duration-200 ease-in-out;
  }

  .link:hover {
      --tw-scale-x: 1.2;
      --tw-scale-y: 1.2;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      
    }
    
    .link:active {
        --tw-scale-x: .80;
        --tw-scale-y: .80;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        
    }

</style>
