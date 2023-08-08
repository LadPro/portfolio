<script>
// @ts-nocheck
    let scr = 'src/lib/components/resourse/'
    import Proyecto from "./proyecto.svelte";
    // export let cualquiercosa;
</script>
<section id="Pagina3" class="w-5/6 ml-izq flex flex-col justify-center gap-10 px-32 h-screen">
    <div class="flex">
        <h1 class="text-rosa text-8xl font-bold uppercase pr-7 tracking-widest mb-28">portafolio.</h1>
    </div>
    
    <div class="flex w-full justify-evenly flex-wrap">
        <Proyecto nproyecto='Una nalga robotica' dproyecto='Construccion de nalga robotica para que le suenen los pedos a las personas sin nalgas' imagen="{scr}1265009.jpg"/>
        <Proyecto nproyecto='Amely esta arrecha' dproyecto='Amely en este momento esta aburrida poruqe su clase esta aburrida' imagen="{scr}149391458452.jpg"/>
        <Proyecto nproyecto='Brazalete detector de proximidad' dproyecto='Libros vacios para que te hagas el interesante y llenes tu biblioteca' imagen="{scr}Captura.WEBP"/>
        <!-- <Proyecto nproyecto='Una nalga robotica' dproyecto='Construccion de nalga robotica para que le suenen los pedos a las personas sin nalgas' imagen="{scr}1265009.jpg"/> -->
    
    </div>
    <div class="flex w-full justify-evenly">
    </div>
    <div>
    </div>
</section>

<style>

</style>