<script>
    import CodeMockup from "./codeMockup.svelte";
import Footer from "./footer.svelte";
let nombre = ''
let email = ''
let mensaje = ''
</script>


<section id="Pagina6" class="w-5/6 ml-izq flex flex-col h-fit gap-10 px-32 scroll-m-ad">
    <div class="flex">
        <h1 class="text-rosa text-8xl font-bold uppercase pr-7 tracking-widest mb-7">Contacto</h1>
    </div>
    <div class="flex w-full flex-wrap">

        <div class="flex flex-col text-subt text-2xl gap-10 font-medium w-1/2">
            <span class="w-full space-y-2">
                <h3>Nombre:</h3>
                <input bind:value={nombre} type="text" placeholder="Escribe aca tu nombre" class="input text-lg border-gray-400 focus:outline-verde border-4 rounded-2xl w-full max-w-xl" >
            </span>
            <span class="w-full space-y-2">
                <h3>Correo:</h3>
                <input bind:value={email} type="text" placeholder="Escribe aca tu correo" class="input text-lg input-bordered border-gray-400 focus:outline-verde border-4 rounded-2xl input-primary w-full max-w-xl" >
            </span>
            <span class="w-full space-y-2">
                <h3>Mensaje:</h3>
                <textarea bind:value={mensaje} class="textarea textarea-primary w-full max-w-xl h-48 text-lg border-4 focus:outline-verde rounded-2xl border-gray-400" placeholder="Escribe aca tu mensaje"></textarea>
            </span>
            <button class="btn-normal text-black ">Enviar Mensaje</button>
        </div>
        <div class="w-1/2 gap-1 min-w-codeMockAncho">
            <CodeMockup nombre={nombre} email={email} mensaje={mensaje}/>
        </div>
    </div>
</section>
<footer class="w-5/6 ml-izq mt-2">

    <Footer />
</footer>

<style>

</style>