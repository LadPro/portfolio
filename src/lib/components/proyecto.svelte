<script>
    export let nproyecto = 'Nombre del proyecto';
    export let imagen = Imagen;
    export let dproyecto = 'Lorem ipsum  dolor sit amet  ipsum dolor sit amet consectetur.';
    import Imagen from './resourse/Anotación 2020-08-18 212512.png';
</script>

<div class="w-64 h-96 bg-lateral text-rosa outline outline-4 outline-azul rounded-2xl border-azul overflow-hidden">
    <div class="h-32 overflow-hidden object-cover">
        <img class="" src={imagen} alt="">
    </div>
    <div class="flex flex-col grow px-3 h-63 content-between">
        <div class="">
            <h1 class="text-2xl font-semibold my-3 whitespace-nowrap overflow-ellipsis overflow-hidden">{nproyecto}</h1>
            <p class="text-l overflow-ellipsis overflow-hidden h-20 text-justify">{dproyecto}</p>
        </div>
        <div class="flex flex-col items-center flex-grow">
            <span class="flex h-12">
                <p>tecnologias</p>
            </span>
            <span class="text-black w-full">
                <button class="btn-normal w-full h-auto py-2">Mas información</button>
                <!-- <Buton texto="Mas informacion" hovercolor="rosa" /> -->
            </span>
            <!-- <p class="text-2xl font-semibold mb-3">Mas informacion</p> -->
        </div>
    </div>
    
</div>