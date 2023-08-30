<script>
    export let imagen = 'https://i.ibb.co/3h5XqyX/1222470.jpg'
</script>

<div class="grid grid-cols-2 max-lg:flex-col w-full items-center justify-around  text-azul">

    <div class="flex flex-col  justify-center">
        <p class="text-2xl text-center font-bold mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum sapiente veritatis atque, exercitationem possimus ipsa quibusdam autem perferendis dolor nulla cumque sed modi libero facere quas distinctio repudiandae repellendus.</p>

    </div>

    <div style="aspect-ratio: 16/9 ;" class="flex justify-center items-center overflow-hidden lg:w-[60%] lg:min-w[800px]">
        <img class="w-full min-h-full object-cover" src={imagen} alt="imagen del proyecto">
    </div>
</div>