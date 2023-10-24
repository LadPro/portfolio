<script>
    let my_modal_1 = {}
    export let imagen = "https://i.ibb.co/3h5XqyX/1222470.jpg";
    export let modo_a = false;
    export let alt = "imagen del proyecto"
    let zoom = false

    function modal() {
        my_modal_1.showModal()
        }
</script>

<dialog bind:this={my_modal_1} class=" modal modal-bottom sm:modal-middle">
    <form method="dialog">
        <button class=""><img
            class="min-w-full h-full max-h-full obaject-cover"
            src={imagen}
            alt= {alt}
    
        /></button>
    </form>
  </dialog>
<div
    
    class:lg:order-2={modo_a}
    style="aspect-ratio: 16/9;"
    class="flex shrink-0 justify-center items-center overflow-hidden lg:min-w-[500px] lg:lg:w-[50%] max-lg:w-full"
>
<button
on:click={modal}
class:zoom-in={zoom}
>

    <img
        class="min-w-full h-full max-h-full obaject-cover"
        src={imagen}
        alt= {alt}

    />
</button>

</div>


<style>
    .imagen-container {
    cursor: pointer;
    }

    .zoom-in {
        transform: scale(2);
        transition: transform 0.3s;
    }

    .zoom-out {
        transform: scale(1);
        transition: transform 0.3s;
    }
</style>