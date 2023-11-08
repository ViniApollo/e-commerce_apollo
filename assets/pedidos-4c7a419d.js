import{l as d,d as n}from"./utilidades-39a41fd9.js";function r(o){const i=`<p class="text-xl text-bold my-4">${new Date(o.dataPedido).toLocaleDateString("pt-BR",{hour:"2-digit",minute:"2-digit"})}</p>
    <section id="container-pedidos-${o.dataPedido}" class="bg-stone-200 p-3 rounded-md"></section>
    `,t=document.getElementsByTagName("main")[0];t.innerHTML+=i;for(const e in o.pedido)n(e,`container-pedidos-${o.dataPedido}`,o.pedido[e])}function s(){const o=d("historico");for(const i of o)r(i)}s();
