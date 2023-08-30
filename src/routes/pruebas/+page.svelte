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
    import ImagenDescrip from "$lib/components/proyectowp/imagen_descrip.svelte";
    import Footer from "$lib/components/resourse/componentes/footer.svelte";
    

</script>
<div class="flex flex-col">
    <Linkcabecera/>
    <div class="flex flex-col lg:px-[5%] mb-14">

        <Imgtech imagen=https://i.ibb.co/3h5XqyX/1222470.jpg>
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
        <div class="flex max-lg:flex-col w-full items-center justify-between gap-4  text-azul">
            <Descripcion/>
            <ImagenDescrip/>
            
        </div>
        <Intermedio> 
            <h1 class="text-subt text-rm3xl font-bold ">Proyecto realizado para practicas del desarrollo web</h1>
        </Intermedio>
        <div class="flex max-lg:flex-col w-full items-center justify-between gap-4  text-azul">
            <ImagenDescrip/>
            <Descripcion/>

        </div>
    </div>
    <Footer/>
</div>
