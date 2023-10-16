<script>
    export let imagen = "https://i.ibb.co/3h5XqyX/1222470.jpg";
    export let modo_a = false;
    export let alt = "imagen del proyecto"
</script>

<div
    
    class:lg:order-2={modo_a}
    style="aspect-ratio: 16/9;"
    class="flex shrink-0 justify-center items-center overflow-hidden lg:min-w-[500px] lg:lg:w-[50%] max-lg:w-full"
>
    <img
        class="min-w-full h-full max-h-full obaject-cover"
        src={imagen}
        alt= {alt}
    />
</div>
