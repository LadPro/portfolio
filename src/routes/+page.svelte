<script>
    import Cabecera from '../lib/components/resourse/componentes/cabecera.svelte';
    import Side from '../lib/components/Side.svelte'
    import Page1 from '../lib/components/pagina1.svelte'
    import Page2 from '../lib/components/pagina2.svelte'
    import Page3 from '../lib/components/pagina3.svelte'
    import Page4 from '../lib/components/pagina4.svelte'
    import Page5 from '../lib/components/pagina5.svelte'
    import Page6 from '../lib/components/pagina6.svelte'

</script>
<div class="">
    <div class="max-lg:hidden">
        <Side /> 

    </div>
    <div class="lg:hidden">
        <Cabecera/> 

    </div>
    <div class="space-y-28">
        <Page1 />
        <div class="lg:min-h-screen items-center">
            <Page2 />
        </div>

        <div class="lg:min-h-screen items-center ">
            <Page3 />
        </div>

        <div class="lg:min-h-screen items-center">
            <Page4 />
        </div>

        <div class="lg:min-h-screen items-center">
            <Page5 />
        </div>
        <Page6 />

        
    </div>
</div>

