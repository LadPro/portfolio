<script>
    export let Nombre = 'Nombre del curso (nombre)'
    export let Fechas = 'Agosto 2022 - Septiembre 2022 (fechas)'
    export let Descripcion = 'Descripcion general, conocimientos aprendidos. (Descripcion)'
    export let Duracion = 'curso 10 horas (Duracion)'
</script>

<div class="flex flex-col text-azul w-full mr-ad gap-8 border-b-4">
    <span class="flex max-lg:flex-col justify-between max-lg:space-y-1">
        <h1 class="text-subt text-5xl lg:text-4xl">{Nombre}</h1>
        <h1 class="text-verde text-2xl lg:text-lx">{Fechas}</h1>
    </span>
    <span>
        <p class="text-3xl lg:text-2xl">{Descripcion}</p>
    </span>
    <div class="flex justify-between max-lg:space-x-1 mb-9">
        <p class="text-2xl lg:text-lx">{Duracion}</p>
        <button class="btn-normal w-fit h-fit py-1 px-4 text-black mr-mrIzqEduca"> Certificado</button>    
    </div>
</div>