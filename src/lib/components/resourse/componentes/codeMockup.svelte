<script>
    export let nombre = ''
    export let email = ''
    export let mensaje = ''
    let fecha = new Date();
    let año = fecha.getFullYear();
    let mes = fecha.getMonth() + 1 ;
    let dia = fecha.getDate();
    const fechaformato = `${dia} 0${mes} ${año}`
</script>

<div class="flex grow bg-gray-800 flex-col p-5 rounded-2xl text-azul min:h-full min-w-codeMocakaAncho break-all border-4 max-w-xl border-gray-400">
    <div class="flex">
        <pre class="text-blue-200 opacity-60"> 1  </pre>
        <pre class="whitespace-pre-wrap"><code><span class="text-rosa ">const </span>button <span class="text-rosa">=</span> document.querySelector('<span class="text-subt">#sendBtn</span> ')<span class="text-gray-300">;</span></code></pre> 
    </div>
    <div class="flex">
        <pre class="text-blue-200 opacity-60"> 2  </pre>
    </div>
    <div class="flex">
        <pre class="text-blue-200 opacity-60"> 3  </pre>
        <pre><code><span class="text-rosa">const </span>mensaje <span class="text-rosa">=</span> {'{'} </code></pre>
    </div>
    <div class="flex">
        <pre class="text-blue-200 opacity-60"> 4  </pre>
        <pre><code>    nombre: <span class="text-subt whitespace-pre-wrap">"{nombre}"</span> <span class="text-gray-300">,</span> </code></pre>
    </div>
    <div class="flex">
        <pre class="text-blue-200 opacity-60"> 5  </pre>
        <pre><code>    email: <span class="text-subt whitespace-pre-wrap">"{email}"</span> <span class="text-gray-300">,</span> </code></pre>
    </div>
    <div class="flex">
        <pre class="text-blue-200 opacity-60"> 6  </pre>
        <pre><code class="">    mensaje: <span class="text-subt whitespace-pre-wrap">"{mensaje}"</span><span class="text-gray-300">,</span> </code></pre>
    </div>
    <div class="flex">
        <pre class="text-blue-200 opacity-60"> 7  </pre>
        <pre><code class="">    fecha: <span class="text-subt whitespace-pre-wrap">"{fechaformato}"</span> </code></pre>
    </div>
    <div class="flex">
        <pre class="text-blue-200 opacity-60"> 8  </pre>
        <pre><code class="">{'}'} </code></pre>
    </div>
    <div class="flex">
        <pre class="text-blue-200 opacity-60"> 9  </pre>
    </div>
    <div class="flex">
        <pre class="text-blue-200 opacity-60">10  </pre>
        <pre class="whitespace-pre-wrap"><code class="">button.addEventListener<span class="text-gray-300">(</span><span class="text-subt">'click'</span><span class="text-gray-300">, () </span><span class="text-rosa">={'>'}</span><span class="text-gray-300">{'{'}</span></code></pre>
    </div>
    <div class="flex">
        <pre class="text-blue-200 opacity-60">11  </pre>
        <pre class="whitespace-pre-wrap"><code class="">form.send<span class="text-gray-300">(</span>mensaje<span class="text-gray-300">{');'}</span></code></pre>
    </div>
    <div class="flex">
        <pre class="text-blue-200 opacity-60">12  </pre>
        <pre><code class="">{'})'} </code></pre>
    </div>
</div>

