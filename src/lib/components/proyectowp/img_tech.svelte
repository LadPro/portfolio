<script>
    export let imagen = 'https://i.ibb.co/3h5XqyX/1222470.jpg'
</script>

<div class="flex max-lg:flex-col w-full items-center  text-azul">
    <!-- <div class="flex flex-col space-y-5">
        <h2 class="text-2xl text-center font-bold">Categoria</h2>
        <div class="text-lg text-center">
            <h3>Desarrollo web</h3>
            <h3>front end</h3>
            <h3>Desarrollo web</h3>
            <h3>Desarrollo web</h3>
        </div>
    </div> -->
    <div style="aspect-ratio: 16/9;" class="flex justify-center shrink-0 items-center overflow-hidden lg:w-[60%] lg:min-w-[700px] max-lg:w-full ">
        <img class="w-full min-h-full object-cover" src={imagen} alt="imagen del proyecto">
    </div>
    <div class="flex flex-col justify-center lg:items-center lg:mx-auto w-full px-14">
        <h2 class="lg:text-2xl text-4xl text-center font-bold mb-6 max-lg:mt-6">Tecnologias</h2>
        <div class="lg:flex lg:flex-wrap lg:max-w-[456px] gap-2 justify-center grid grid-cols-2 space-y-1">
            <slot/>
        </div>
    </div>
</div>