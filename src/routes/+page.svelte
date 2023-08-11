<script>
    import Side from '../lib/components/Side.svelte'
    import Page1 from '../lib/components/pagina1.svelte'
    import Page2 from '../lib/components/pagina2.svelte'
    import Page3 from '../lib/components/pagina3.svelte'
    import Page4 from '../lib/components/pagina4.svelte'
    import Page5 from '../lib/components/pagina5.svelte'
    import Page6 from '../lib/components/pagina6.svelte'

</script>


<div>
    <Side /> 
    <div class="space-y-40">
        <Page1 />
        <div class="flex ">
            <Page2 />
        </div>
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        
    </div>
</div>

