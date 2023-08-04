<script>
    import Educacion from "./educacion.svelte";
</script>
<section class="w-5/6 ml-izq flex flex-col justify-center gap-10 px-32">
    <div class="flex">
        <h1 class="text-rosa text-8xl font-bold uppercase pr-7 tracking-widest ">EDUCACIóN.</h1>
    </div>
    

    <div class="flex w-full flex-wrap gap-6">
        <Educacion Nombre='Curso arquitecto cloud AWS' Fechas='Agosto 2022 - Septiembre 2022' Descripcion='Entorno general de AWS, uso de S3, Configuracion de VPC, configuracion de EC2 nalga nalg nalga' Duracion='Curso 10 horas praticas teoricas'/>
        <Educacion />
        <Educacion />
        <Educacion />
    </div>
</section>

<style>

</style>