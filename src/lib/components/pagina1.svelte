<script>
    function descargarPDF() {
    const link = document.createElement('a');
    link.href = './resourse/Joel Mora CV.pdf';
    link.target = '_blank'; // Abre el enlace en una nueva pestaña/tab
    link.download = 'Joel Mora CV.pdf';
    link.click();
  }
</script>
<section id="Pagina1" class="lg:w-5/6 lg:ml-izq h-screen flex flex-col px-11 justify-center gap-20 items-center">
    <div class="flex">
        <h1 class="text-rosa text-9xl font-semibold uppercase pr-7 ">JOEL</h1>
        <h1 class="text-verde text-9xl font-semibold uppercase">MORA</h1>
    </div>
    <h2 class="text-subt text-5xl lg:text-4xl text-center">Ingeniero Apasionado por la Tecnología</h2>
    <h2 class="text-azul text-4xl lg:text-3xl ">Portafolio personal digital.</h2>
    <span class="flex mb-6">
        <h3 class="pr-1 text-4xl lg:text-3xl text-azul text-center">Si quieres ponerte en contacto <a class="text-3xl text-verde" href="mailto:JoelJMoraB@gmail.com">JoelJMoraB@gmail.com</a></h3>
        
    </span>
    <button on:click={descargarPDF} class="btn-normal text-gray-800">Descargar mi CV</button>
</section>

