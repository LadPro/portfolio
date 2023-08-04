<script>
    export let texto = 'texto';
    export let hovercolor = 'rosa';
    export let we = '60';
    export let he = '14';
    export let pxe = '0';
    export let pye = '0';
    // export let textcolor = 'rosa';
</script>

<button class={`rounded-xl bg-verde text-xl w-${we} h-${he} cursor-pointer transition duration-200 ease-in-out active:scale-95 hover:bg-${hovercolor} px-${pxe} py-${pye}`}>
    {texto}
</button>