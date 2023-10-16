<script>
    import {fly, fade, blur, slide, scale,draw} from 'svelte/transition'

    import '../app.css'
    import '@fontsource/roboto'
    import '@fontsource/montserrat'
    import '@fontsource/ubuntu'
    import '@fontsource/roboto-mono'
    import '@fontsource/roboto-slab'
    import '@fontsource/source-code-pro'
    import '@fontsource/lobster'
    import '@fontsource/space-grotesk'
    import '@fontsource/overpass'
    export let data
</script>
<!-- <pre>
    {JSON.stringify({$page})}
</pre> -->
    {#key data.url}
    <div in:fade={{duration: 200, delay: 200}}
        out:fade={{duration:200}}>

        <slot />
    </div>
    {/key}
