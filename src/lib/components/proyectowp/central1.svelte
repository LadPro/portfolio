<script>
    export let linkimg = 'https://i.ibb.co/wwSmzLB/262.jpg'
</script>

<div class="flex max-lg:flex-col w-full items-center justify-around  text-azul">
    <div class="flex flex-col space-y-5">
        <h2 class="text-2xl text-center font-bold">Categoria</h2>
        <div class="text-lg text-center">
            <h3>Desarrollo web</h3>
            <h3>front end</h3>
            <h3>Desarrollo web</h3>
            <h3>Desarrollo web</h3>
        </div>
    </div>
    <div style="aspect-ratio: 16/9 ;" class="flex justify-center items-center overflow-hidden object-cover lg:w-[60%] lg:min-w[800px]">
        <img class="w-full" src={linkimg} alt="imagen del proyecto">
    </div>
    <div class="flex flex-col  justify-center">
        <h2 class="text-2xl text-center font-bold mb-6">Tecnologias</h2>
        <div class="flex flex-col gap-4 justify-center">
            <slot/>
        </div>
    </div>
</div>