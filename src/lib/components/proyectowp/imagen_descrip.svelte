<script>
    export let imagen = "https://i.ibb.co/3h5XqyX/1222470.jpg";
    export let modo_a = false;
</script>

<div
    
    class:lg:order-2={modo_a}
    style="aspect-ratio: 16/9;"
    class="flex shrink-0 justify-center items-center overflow-hidden lg:min-w-[500px] lg:lg:w-[50%] max-lg:w-full"
>
    <img
        class="w-full min-h-full object-cover"
        src={imagen}
        alt="imagen del proyecto"
    />
</div>
