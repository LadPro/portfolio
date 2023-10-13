<script>
// @ts-nocheck
    let scr = 'src/lib/components/resourse/imagenes/'
    import Proyecto2 from "./resourse/componentes/proyecto2.svelte";
    import Js from "./resourse/tecnologias/JS.svelte";
    import Css from "./resourse/tecnologias/css.svelte"
    import Electronica from "./resourse/tecnologias/electronica.svelte";
    import Svelte from "./resourse/tecnologias/svelte.svelte";
    import Aws from "$lib/components/resourse/tecnologias/aws.svelte";
    // export let cualquiercosa;
</script>
<section id="Pagina3" class="lg:w-5/6 lg:ml-izq flex flex-col gap-7 px-32 scroll-m-ad">
    <div class="flex">
        <h1 class="text-rosa text-8xl font-bold uppercase pr-7 tracking-widest mb-20">portafolio</h1>
    </div>
    
    <div class="flex max-lg:flex-col max-lg:items-center px-7 w-full justify-evenly flex-wrap">
        
        <Proyecto2 nproyecto="Infraestructura para hostear wordpress en AWS auto escalable y seguro." linkPagina="/proyectos/awsxwordpressxec2" linkYoutube="https://youtu.be/nBldwN3idwA"  imagen="https://i.ibb.co/qy5ZNmK/aws-wordpress.png">
            <Aws/> 
        </Proyecto2>
        
        <!-- <Proyecto2   imagen="{scr}1265009.jpg"/>
        <Proyecto2   imagen="{scr}1265009.jpg"/> -->
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