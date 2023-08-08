<script>
    import Footer from "./footer.svelte";

</script>


<section id="Pagina6" class="w-5/6 ml-izq flex flex-col h-fit gap-10 px-32">
    <div class="flex">
        <h1 class="text-rosa text-8xl font-bold uppercase pr-7 tracking-widest ">Contacto.</h1>
    </div>
    <div class="flex flex-col text-subt text-2xl gap-10 font-medium">
        <span class="w-full space-y-2">
            <h3>Nombre:</h3>
            <input type="text" placeholder="Escribe aca tu nombre" class="input text-lg input-bordered input-primary w-full max-w-xl" >
        </span>
        <span class="w-full space-y-2">
            <h3>Correo:</h3>
            <input type="text" placeholder="Escribe aca tu correo" class="input text-lg input-bordered input-primary w-full max-w-xl" >
        </span>
        <span class="w-full space-y-2">
            <h3>Mensaje:</h3>
            <textarea class="textarea textarea-primary w-full max-w-xl h-48 text-lg" placeholder="Escribe aca tu mensaje"></textarea>
        </span>
        <button class="btn-normal text-black ">Enviar Mensaje</button>
    </div>
</section>
<footer class="w-5/6 ml-izq mt-16">

    <Footer />
</footer>

<style>

</style>