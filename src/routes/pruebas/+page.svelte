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
    <div class="flex flex-col mb-14 min-w-[956px]">

        <Imgtech imagen=https://i.ibb.co/3h5XqyX/1222470.jpg>
            <Aws/>
            <Svelte/>
            <Css/>
            <Js/>
        </Imgtech>
        <Intermedio>
            <div class="lg:text-lg text-2xl text-blue-300 flex flex-wrap justify-center gap-2 ">
                <p>#DesarrolloWeb </p>
                <p>#FrontEnd </p>
                <p>#DesarrolloWeb </p>
                <p>#DesarrolloWeb</p>
            </div>
            <div class="">

                <Links linkGithub="/pruebas"/>
            </div>
        </Intermedio>
        <div class="flex max-lg:flex-col w-full items-center justify-between gap-4 px-14 text-azul">
            <div class="order-2 lg:order-1">

                <Descripcion/>
            </div>
            <div class="order-1 lg:order-2">

                <ImagenDescrip imagen=https://i.ibb.co/Cwc1J9z/B979363067-Z-1-20160804121955-000-G647-BE7-RQ-1-0-png.jpg/>
            </div>
            
        </div>
        <Intermedio> 
            <h1 class="text-subt lg:text-rm3xl text-3xl text-center font-bold ">Proyecto realizado para practicas del desarrollo web</h1>
        </Intermedio>
        <div class="flex max-lg:flex-col w-full items-center justify-between gap-4 px-14 text-azul">
            <ImagenDescrip imagen=https://i.ibb.co/rcJm3yK/Nrxo0Im.gif/>
            <Descripcion/>

        </div>
    </div>
    <Footer/>
</div>
