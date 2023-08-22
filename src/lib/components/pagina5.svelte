<script>
    import Html from "./resourse/tecnologias/fijos/html.svelte";
    import Css from "./resourse/tecnologias/fijos/css.svelte";
    import Js from "./resourse/tecnologias/fijos/JS.svelte";
    import Svelte from "./resourse/tecnologias/fijos/svelte.svelte";
    import Tailwind from "./resourse/tecnologias/fijos/tailwind.svelte";
    import Aws from "./resourse/tecnologias/fijos/aws.svelte";
    import Python from "./resourse/tecnologias/fijos/python.svelte";
    import Electronica from "./resourse/tecnologias/fijos/electronica.svelte";
</script>


<section id="Pagina5" class="lg:w-5/6 lg:ml-izq flex flex-col gap-7 px-14 lg:px-32 scroll-m-ad">
    <div class="flex max-lg:justify-center">
        <h1 class="text-rosa text-8xl font-bold uppercase pr-7 tracking-widest mb-7 ">Skills</h1>
    </div>
    <div class="flex flex-col text-subt text-3xl gap-10 font-medium max-lg:text-4xl">

        <div class="flex flex-col space-y-5 mt-3">
            <h1 class="">Lenguajes de programación</h1>
            <span class="grid grid-cols-2 lg:flex lg:flex-wrap gap-2 space-y-1">
              <Html />
              <Css />
              <Js />
              <Python />
            </span>    
        </div>
        
        <div class="flex flex-col space-y-5 mt-3">
            <h1 class="">Frameworks</h1>    
            <span class="grid grid-cols-2 lg:flex lg:flex-wrap gap-2">
                <Svelte />
                <Tailwind />
            </span>    
        </div>
        
        <div class="flex flex-col space-y-5 mt-3">
            <h1 class="">tecnologias y extras</h1>    
            <span class="grid grid-cols-2 lg:flex lg:flex-wrap gap-2">
                <Aws />
                <Electronica />
                
            </span>    
        </div>
    </div>

</section>

<style>

</style>