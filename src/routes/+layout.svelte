<script>
    import {fly, fade, blur} from 'svelte/transition'

    import {page} from '$app/stores'
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
    <div in:blur={{duration: 400, delay: 400}}
        out:blur={{duration:400}}>

        <slot />
    </div>
    {/key}
