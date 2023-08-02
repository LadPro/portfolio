<script>
    import Imagen from "./resourse/Anotación 2020-08-18 212512.png"
    import Buton from "./buton.svelte";
</script>

<div class="w-64 h-96 bg-lateral text-rosa border-2 border-azul overflow-hidden">
    <div class="h-32 w-fit overflow-hidden object-cover">
        <img class="" src={Imagen} alt="">
    </div>
    <div class="flex flex-col flex-1 h-64 px-3 content-between">
        <div class="">
            <h1 class="text-2xl font-semibold my-3 whitespace-nowrap overflow-ellipsis overflow-hidden">Nombre del proyecto</h1>
            <p class="text-xl overflow-ellipsis overflow-hidden">Lorem  ipsum dolor sit amet  ipsum dolor sit amet consectetur.</p>
        </div>
        <div class="flex flex-col items-center gap-3 h-1/3">
            <span class="h-9">
                <p>tecnologias</p>
            </span>
            <span class="text-black">

                <Buton texto={"Mas informacion"} hovercolor={"azul"} he={'0'} we={'0'} pye={'60'} />
            </span>
            <!-- <p class="text-2xl font-semibold mb-3">Mas informacion</p> -->
        </div>
    </div>
    
</div>