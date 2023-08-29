<script>
    import Labellink from "./labellink.svelte";
    export let nombreproyecto = 'Nombre del proyecto'

</script>

<header class="w-screen bg-lateral space-y-8">
    <nav class="flex lg:justify-end">
        <ul class="flex max-lg:w-full max-lg:justify-between lg:gap-12 text-3xl mx-12">
            <Labellink />
            <Labellink nombre='Proyectos'/>
        </ul>
    </nav>
    <div class="w-full flex justify-center">

        <hr class="w-[90%] border-t-4 border-rosa rounded-xl">
    </div>
    <h1 class="text-6xl text-rosa tracking-widest font-bold text-center pb-5 uppercase">{nombreproyecto}</h1>
</header>