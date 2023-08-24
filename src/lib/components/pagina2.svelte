<script>
    import Iconodesplegable from "./iconodesplegable.svelte";
    import MovilIicono from "./movilIicono.svelte";
    import {primaria} from './resourse/variables'
    import {lateral} from './resourse/variables'
    import {verde} from './resourse/variables'
    import {subt} from './resourse/variables'
    import {azul} from './resourse/variables'
    import {rosa} from './resourse/variables'

    let cprimaria = $primaria
    let clateral = $lateral
    let cverde = $verde
    let csubt = $subt
    let cazul = $azul
    let crosa = $rosa  
    let colorfondo = '#301848'
    // let colorfondo = '#ffff'
    
    let plin = `<g><path d="M173.5,508.7c0-2.4,0-4.7,0-7c0-107.7,0-215.3,0-323c0-3-0.2-5.4,4.2-5.4c31.8,0.2,63.7,0.1,95.5,0.1 c0.8,0,1.6,0.2,2.9,0.4c0,14,0,27.8,0,41.7c0.4,0.1,0.7,0.3,1.1,0.4c4-5.2,7.8-10.6,12-15.7c12.2-15,27.5-26,45.5-32.6   c9.8-3.6,20.5-5.8,30.8-6.3c14.2-0.6,28.7-0.4,42.7,2c23,3.9,43.3,14.1,60.1,30.8c15.9,15.7,26.4,34.6,32.1,55.9 c3,11.3,4.9,22.9,6.7,34.4c1.2,8,1.8,16.2,1.8,24.2c0.1,65,0.1,130,0.1,195c0,1.6-0.1,3.2-0.2,5.3c-1.9,0-3.5,0-5.1,0 c-30.7,0-61.3-0.1-92,0.1c-5.1,0-6-1.7-6-6.3c0.1-59.8,0.3-119.7-0.1-179.5c-0.1-10.5-1.1-21.4-3.8-31.5   c-4.9-17.7-16.1-30.5-33.9-37c-15-5.5-30.2-6.5-45.6-2.6c-17,4.3-28.7,15.6-37.5,30.5c-6.8,11.5-8.1,24.2-8.2,36.9   c-0.4,60.7-0.2,121.3-0.2,182c0,2.3,0,4.6,0,7.1C241.9,508.7,208,508.7,173.5,508.7z" fill =${colorfondo}></path> <path d="M109.1,342.6c0,53.3-0.1,106.6,0.1,159.9c0,4.8-1,6.6-6.3,6.5c-30.5-0.3-61-0.3-91.5,0c-5,0-6.1-1.7-6.1-6.3   c0.1-107.1,0.1-214.3,0-321.4c0-4.3,1.2-5.8,5.6-5.8c30.8,0.2,61.6,0.2,92.5,0c4.8,0,5.7,1.8,5.7,6.1   C109.1,235.3,109.1,289,109.1,342.6z"fill=${colorfondo} > </path><path d="M56.1,4.8C89,4,108.7,27.9,108.8,57.2c0.1,30-20.9,52.4-53.9,52.3c-30.7,0-52.4-22-52.3-53.1C2.7,27.3,23.8,3.8,56.1,4.8z" fill=${colorfondo}> </path></g>`

    let pgit = `<path d="M6 0a6 6 0 110 12A6 6 0 016 0zm0 .98C3.243.98 1 3.223 1 6a5.02 5.02 0 003.437 4.77.594.594 0 00.045.005c.203.01.279-.129.279-.25l-.007-.854c-1.39.303-1.684-.674-1.684-.674-.227-.58-.555-.734-.555-.734-.454-.312.034-.306.034-.306.365.026.604.288.708.43l.058.088c.446.767 1.17.546 1.455.418.046-.325.174-.546.317-.672-1.11-.127-2.277-.558-2.277-2.482 0-.548.195-.996.515-1.348l-.03-.085c-.064-.203-.152-.658.079-1.244l.04-.007c.124-.016.548-.013 1.335.522A4.77 4.77 0 016 3.408c.425.002.853.058 1.252.17.955-.65 1.374-.516 1.374-.516.272.692.1 1.202.05 1.33.32.35.513.799.513 1.347 0 1.93-1.169 2.354-2.283 2.478.18.155.34.462.34.93l-.006 1.378c0 .13.085.282.323.245A5.02 5.02 0 0011 6C11 3.223 8.757.98 6 .98z" fill=${colorfondo} />`

    let pwhat = `<path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522 c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982 c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537 c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938 c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537 c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333 c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882 c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977 c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344 c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223 C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z" fill=${colorfondo}></path>`
    // export let cualquier cosa;
</script>


<section id="Pagina2" class="lg:w-5/6 lg:ml-izq scroll-m-ad flex flex-col gap-10 lg:px-32 px-14"
>
    <div class="flex mb-7 max-lg:justify-center">
        <h1 class="text-rosa text-8xl font-bold uppercase pr-7 tracking-widest">sobre mi</h1>
    </div>
    <p class="text-azul text-4xl lg:text-2xl text-justify">
        Soy un Ingeniero en electrónica apasionado por la tecnología y siempre hambriento de aprender. Mi trayecto de conocimiento me lleva a explorar diversas disciplinas. <br>
        
        El desarrollo web me atrapó con su capacidad de dar vida a las ideas y conectar al mundo digital. Mis aventuras en el entorno de AWS han ampliado mi visión sobre la potencia de la nube y cómo puede transformar industrias. La magia de manejar y analizar datos es mi próxima parada, donde deseo extraer insights valiosos de los números y construir soluciones más inteligentes.<br>
        
        Mi portafolio es un reflejo de mi viaje de aprendizaje. Aquí verás mis experimentos con el desarrollo web, mis incursiones en la nube de AWS y mi camino hacia el dominio de análisis de datos. Deseo poner a prueba los conocimientos adquiridos y desarrollar aún más mis habilidades en estas áreas de mi interes.</p>
    <h2 class="text-subt text-5xl lg:text-3xl">El conocimiento mas importante que se puede obtener siempre es el siguiente.</h2>
    <div class="max-lg:hidden flex flex-col gap-6 mt-8">
            <Iconodesplegable texto='JoelJMoraB@gmail.com' link={"mailto:JoelJMoraB@gmail.com"} colortxt={cprimaria} colordesp={cverde} tamaSVG=50 tamaext=300 tamaletra=18 fillcolor={cprimaria}/>
            <Iconodesplegable texto='github.com/LadPro' link={"https://github.com/LadPro"} colortxt={cprimaria} colordesp={cverde} tamaSVG=50 tamaext=300 tamaletra=18 fillcolor={cprimaria} svg={pgit} viewbox="0 0 12 12" />
            <Iconodesplegable texto='linkedin.com/in/joel-mora-barrios/' link={"https://www.linkedin.com/in/joel-mora-barrios-018231249/"} colortxt={cprimaria} colordesp={cverde} tamaSVG=50 tamaext=300 tamaletra=18 fillcolor={cprimaria} svg={plin} viewbox="0 0 512 512" />
            <Iconodesplegable texto='+56 9 9611 2281' link={"https://wa.me/+56996112281"} space={true} colortxt={cprimaria} colordesp={cverde} tamaSVG=50 tamaext=300 tamaletra=18 fillcolor={cprimaria} svg={pwhat} viewbox="0 0 90 90" />
    </div>
    <div class="lg:hidden flex justify-center gap-16">
        <div class=" flex flex-col gap-16 mt-8">
            <a target="_blank" href="mailto:JoelJMoraB@gmail.com" class="flex">
                <MovilIicono colordesp={cverde} tamaSVG=80 tamaext=150 tamaalto=150 fillcolor={cprimaria}/>
            </a>
            <a target="_blank" href="https://github.com/LadPro" class="flex">
                <MovilIicono colordesp={cverde} tamaSVG=80 tamaext=150 tamaalto=150 fillcolor={cprimaria} svg={pgit} viewbox="0 0 12 12" />
            </a>
        </div>
        <div class=" flex flex-col gap-16 mt-8">
            
            <a target="_blank" href="https://www.linkedin.com/in/joel-mora-barrios-018231249/" class="flex">
                <MovilIicono colordesp={cverde} tamaSVG=80 tamaext=150 tamaalto=150 fillcolor={cprimaria} svg={plin} viewbox="0 0 512 512" />
            </a>
            <a target="_blank" href="https://wa.me/+56996112281" class="flex">
                <MovilIicono colordesp={cverde} tamaSVG=80 tamaext=150 tamaalto=150 fillcolor={cprimaria} svg={pwhat} viewbox="0 0 90 90" />
            </a>
        </div>
    </div>
</section>

<style>

</style>