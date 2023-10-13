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
    import Video from "$lib/components/proyectowp/video.svelte";
    
//<img src="https://i.ibb.co/rZhNq3R/Wordpress2.jpg" alt="Wordpress2" border="0">
</script>
<div class="flex flex-col">
    <Linkcabecera nombreproyecto="Wordpress auto escalable en AWS"/>
    <div class="flex flex-col mb-14 min-w-[956px]">

        <Imgtech imagen=https://i.ibb.co/qy5ZNmK/aws-wordpress.png alt="Worpdress en Aws">
            <Aws/>

        </Imgtech>
        <Intermedio>
            <div class="lg:text-lg text-2xl text-blue-300 flex flex-wrap justify-center gap-2 ">
                <p>#ArquitecturaCloud </p>
                <!-- <p>#FrontEnd </p>
                <p>#DesarrolloWeb </p>
                <p>#DesarrolloWeb</p> -->
            </div>
            <div class="">

                <Links linkYoutube="https://youtu.be/nBldwN3idwA" linkPagina="https://wordpress.joeljmora.tech/"/>
            </div>
        </Intermedio>
        <div class="flex max-lg:flex-col w-full items-center justify-between gap-4 px-14 text-azul">

            <ImagenDescrip  modo_a={true} imagen="https://i.ibb.co/rZhNq3R/Wordpress2.jpg" alt="Diagrama worpress en aws"/>
            <Descripcion descripcion="Este proyecto se enfoca en la implementación segura y auto escalable de una infraestructura de alojamiento de <strong>WordPress</strong> en la nube de <strong>Amazon Web Services (AWS)</strong>. Se asegura el <strong>control óptimo sobre el escalado de la infraestructura</strong>, se integra una <strong>base de datos externa </strong>utilizando los servicios de AWS, se aplica un <strong>certificado SSL</strong> para la seguridad de la comunicación y se establece una conexión con un <strong>host externo</strong>, brindando así una solución integral y altamente eficiente."  modo_a={true} />

            
        </div>
        <Intermedio> 
            <h1 class="text-subt lg:text-rm3xl text-3xl text-center font-bold ">Proyecto realizado como práctica de arquitectura en la nube AWS.</h1>
        </Intermedio>
        <div class="flex max-lg:flex-col w-full items-center justify-between gap-4 px-14 text-azul">
            <ImagenDescrip imagen=https://i.ibb.co/rcJm3yK/Nrxo0Im.gif/>
            <Descripcion descripcion= "Cabe destacar que existen múltiples opciones para alojar WordPress en AWS, incluyendo servicios sencillos como Lightsail, que permiten hacerlo en unos pocos clics. No obstante, esta implementación se orienta hacia un enfoque manual para un control más detallado del proceso y una comprensión más profunda de la interconexión de servicios AWS." />

        </div>
        <Intermedio />
        <div class="flex w-full items-center px-14 text-azul gap-4">
            
            <Video texto = "La infraestructura diseñada para este proyecto abarca un conjunto de componentes esenciales. En primer lugar, se integran instancias EC2 en un grupo de autoescalado, lo que facilita la escalabilidad horizontal, permitiendo la creación de nuevas instancias de EC2 de manera dinámica en respuesta a las demandas del tráfico. Además, se opta por el servicio RDS, proporcionando un entorno aislado y eficiente para gestionar la base de datos, garantizando un alto nivel de disponibilidad y seguridad en la gestión de los datos.
            <br> <br>

            Asimismo, se incorpora el sistema de archivos elástico (Elastic File System) para el almacenamiento compartido, lo que garantiza la accesibilidad y la compartición de datos de manera eficiente y colaborativa. Para habilitar la conectividad a Internet y gestionar la distribución del tráfico, se implementa un balanceador de carga (Load Balancer) que se conecta a un subdominio alojado en un host externo, específicamente Vercel. Esto garantiza un acceso sin interrupciones y un rendimiento óptimo.
            <br> <br>
            Finalmente, en cuanto a la seguridad, se emplea el Certificate Manager, una herramienta esencial que facilita la gestión de certificados de seguridad para garantizar la protección de los datos y la integridad de la comunicación en línea. Este conjunto de elementos se fusiona en una infraestructura integral y eficaz, que no solo garantiza la operatividad y la escalabilidad, sino que también se enfoca en salvaguardar la confidencialidad y la seguridad de los datos y la comunicación en línea.
            <br> <br>
            En la siguiente sección, presentamos un video que documenta la implementación completa de este proyecto en Amazon Web Services." linkvideo = "https://www.youtube.com/embed/nBldwN3idwA?si=VfBFlo7Qd5lwZrfw"/>

        </div>
    </div>

    <Footer/>


</div>
