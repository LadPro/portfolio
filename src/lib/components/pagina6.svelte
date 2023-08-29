<script>
// @ts-nocheck

    let my_modal_5 = {}
    import CodeMockup from "./resourse/componentes/codeMockup.svelte";
    import Footer from "./resourse/componentes/footer.svelte";
    let nombre = ''
    let email = ''
    let mensaje = ''
    function modal() {
        my_modal_5.showModal()
        nombre = ''
        email = ''
        mensaje = ''
    }
</script>

<dialog bind:this={my_modal_5} class=" modal modal-bottom sm:modal-middle">
    <form method="dialog" class="text-azul text-xl bg-lateral modal-box">
      <h3 class="font-bold text-2xl">Tu mensaje ha sido enviado con éxito.</h3>
      <p class="py-4"> Nos comunicaremos contigo en breve.</p>
      <div class="modal-action">
        <!-- if there is a button in form, it will close the modal -->
        <button class="text-gray-700 btn bg-verde">Cerrar</button>
      </div>
    </form>
  </dialog>

<section id="Pagina6" class="flex lg:w-5/6 lg:ml-izq w-full flex-col h-full gap-7 lg:px-32 px-14 scroll-m-ad">
    <div class="flex max-lg:justify-center">
        <h1 class="text-rosa text-8xl font-bold uppercase pr-7 tracking-widest mb-7">Contacto</h1>
    </div>
    <div class="lg:grid grid-cols-2 falex w-full items-cenater h-full ">

        <form on:submit|preventDefault={modal} action="https://api.staticforms.xyz/submit" method="POST" class="flex flex-col text-subt text-4xl lg:text-2xl gap-10 font-medium px-2">
            <span class="w-full space-y-2">
                <h3>Nombre:</h3>
                <input  bind:value={nombre} type="nombre" name="name" placeholder="Escribe aca tu nombre" class="input text-4xl max-lg:h-20 lg:text-lg border-gray-400 focus:outline-verde border-4 rounded-2xl w-full lg:max-w-xl" >
            </span>
            <span class="w-full space-y-2">
                <h3>Correo:</h3>
                <input bind:value={email} type="email" name="email" placeholder="Escribe aca tu correo" class="input text-4xl max-lg:h-20 lg:text-lg input-bordered border-gray-400 focus:outline-verde border-4 rounded-2xl input-primary w-full lg:max-w-xl" >
            </span>
            <span class="w-full space-y-2">
                <h3>Mensaje:</h3>
                <textarea bind:value={mensaje} name="message" class="textarea textarea-primary w-full lg:max-w-xl h-48 text-4xl lg:text-lg border-4 focus:outline-verde rounded-2xl border-gray-400" placeholder="Escribe aca tu mensaje"></textarea>
            </span>
            <input type="text" name="honeypot" style="display:none">
            <input type="hidden" name="accessKey" value="b47d9ebb-f289-4e04-a75a-526b98beb411">
            <input type="hidden" name="subject" value="Contact us from - example.com" />
            <input type="hidden" name="redirectTo" value="https://www.joeljmora.tech/">
            
            <button type="submit" class="btn-normal text-black">Enviar Mensaje</button>
        </form>
        <div class="flex lg:wa-1/2 px-2 max-lg:hidden h-full">
            <CodeMockup nombre={nombre} email={email} mensaje={mensaje}/>
        </div>
    </div>
</section>
<footer class="w-full lg:w-5/6 lg:ml-izq mt-2">

    <Footer />
</footer>

<style>

</style>