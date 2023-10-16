<script>
    export let modo_a = false;
    export let descripcion="<strong>Descripcion </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum sapiente veritatis atque, exercitationem possimus ipsa quibusdam autem perferendis dolor nulla cumque sed modi libero facere quas distinctio repudiandae repellendus."
</script>

<div class:lg:order-1={modo_a} class="flex flex-col ">
    <p class="lg:text-xl text-3xl text-left my-4 grow-0 lg:leading-2.25" >
        {@html descripcion}
    </p>
</div>
