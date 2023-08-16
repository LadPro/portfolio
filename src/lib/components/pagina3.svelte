<script>
// @ts-nocheck
    let scr = 'src/lib/components/resourse/imagenes/'
    import Proyecto from "./proyecto.svelte";
    import Proyecto2 from "./proyecto2.svelte";
    // export let cualquiercosa;
</script>
<section id="Pagina3" class="w-5/6 ml-izq flex flex-col gap-10 px-32 scroll-m-ad">
    <div class="flex">
        <h1 class="text-rosa text-8xl font-bold uppercase pr-7 tracking-widest mb-20">portafolio</h1>
    </div>
    
    <div class="flex w-full justify-evenly flex-wrap">
        <Proyecto2   imagen="{scr}1265009.jpg"/>
        <Proyecto2   imagen="{scr}1265009.jpg"/>
        <Proyecto2   imagen="{scr}1265009.jpg"/>
        <!-- <Proyecto nproyecto='Amely esta arrecha' dproyecto='Amely en este momento esta aburrida poruqe su clase esta aburrida' imagen="{scr}B979363067Z.1_20160804121955_000+G647BE7RQ.1-0.png.jpg"/>
        <Proyecto nproyecto='Brazalete detector de proximidad' dproyecto='Libros vacios para que te hagas el interesante y llenes tu biblioteca' imagen="{scr}Captura.WEBP"/> -->
        <!-- <Proyecto nproyecto='Una nalga robotica' dproyecto='Construccion de nalga robotica para que le suenen los pedos a las personas sin nalgas' imagen="{scr}1265009.jpg"/> -->
    
    </div>
    <div class="flex w-full justify-evenly">
    </div>
    <div>
    </div>
</section>

<style>

</style>