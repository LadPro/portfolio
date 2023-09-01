<script>
    export let nombre = 'Volver'
    export let link = '#'
</script>

<div class="text-xl font-bold text-primario bg-verde w-52 rounded-b-2xl pb-3 no-underline link -mt-2">
    <a class=" grid grid-rows-2 justify-center" href={link}>
    <span></span>
    <span class="-mt-1">{nombre}</span>
    </a>
</div>

<style>

    .link {
        @apply transition duration-200 ease-in-out;
      }
    
      .link:hover {
          --tw-scale-x: 1.05;
          --tw-scale-y: 1.05;
          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
          background-color: #8696FE;
        }
        
        .link:active {
            --tw-scale-x: .80;
            --tw-scale-y: .80;
            transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
            
        }
    
    </style>