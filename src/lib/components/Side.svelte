<script>
    import Nav from './nav.svelte'
    import Imagen from './imagen.svelte'

</script>

<!-- <section class="bg-lateral fixed h-screen w-2/12 flex flex-col items-center justify-center space-y-10"> -->
<section class="bg-lateral fixed h-screen w-2/12">
    <!-- <div class="grid grid-flow-row justify-items-center items-center h-full -m-20"> -->
    <div class="flex flex-col space-y-28 justify-items-center items-center h-full ">
        <span class="mt-20 xl:mt-0">

            <Imagen />
        </span>
        <Nav/>
    </div>
</section>