<script>
    export let texto = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti et laborum maiores aliquid, exercitationem nobis nulla ipsa error asperiores alias vel culpa repudiandae recusandae rem nihil blanditiis assumenda dolorem velit!"
    export let linkvideo = "https://www.youtube.com/embed/nBldwN3idwA?si=VfBFlo7Qd5lwZrfw"
</script>

<div>
    <div>
        <p class="text-3xl lg:text-xl mb-6">
            {@html texto}
        </p>
    </div>
    <div class="flex justify-center mx-28">

        <iframe style="aspect-ratio: 16/9;" class="w-full h-auto" src={linkvideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</div>