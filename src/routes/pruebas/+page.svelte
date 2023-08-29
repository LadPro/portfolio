<script>
    import Central1 from "$lib/components/proyectowp/central1.svelte";
    import Linkcabecera from "$lib/components/proyectowp/linkcabecera.svelte";
    import Svelte from "$lib/components/resourse/tecnologias/fijos/svelte.svelte";
    import Aws from "$lib/components/resourse/tecnologias/fijos/aws.svelte";
    import Css from "$lib/components/resourse/tecnologias/fijos/css.svelte";
    import Js from "$lib/components/resourse/tecnologias/fijos/JS.svelte";
    

</script>
<div class="flex flex-col">
    <Linkcabecera/>
    <Central1>
        <Aws/>
        <Svelte/>
        <Css/>
        <Js/>

    </Central1>

</div>
