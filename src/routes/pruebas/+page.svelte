<script>
    import Imgtech from "$lib/components/proyectowp/img_tech.svelte";
    import Linkcabecera from "$lib/components/proyectowp/linkcabecera.svelte";
    import Svelte from "$lib/components/resourse/tecnologias/fijos/svelte.svelte";
    import Aws from "$lib/components/resourse/tecnologias/fijos/aws.svelte";
    import Css from "$lib/components/resourse/tecnologias/fijos/css.svelte";
    import Js from "$lib/components/resourse/tecnologias/fijos/JS.svelte";
    import Intermedio from "$lib/components/proyectowp/intermedio.svelte";
    import Links from "$lib/components/proyectowp/links.svelte";
    import Descripcion from "$lib/components/proyectowp/descripcion.svelte";
    

</script>
<div class="flex flex-col">
    <Linkcabecera/>
    <Imgtech imagen=https://i.ibb.co/wwSmzLB/262.jpg>
        <Aws/>
        <Svelte/>
        <Css/>
        <Js/>
    </Imgtech>
    <Intermedio>
        <div class="text-lg flex gap-2 text-center">
            <p>#DesarrolloWeb </p>
            <p>#FrontEnd </p>
            <p>#DesarrolloWeb </p>
            <p>#DesarrolloWeb</p>
        </div>
        <Links linkGithub="/pruebas"/>
    </Intermedio>
    <Descripcion/>
</div>
