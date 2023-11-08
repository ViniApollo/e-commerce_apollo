import{l as x,c as i,s as a}from"./utilidades-39a41fd9.js";const o=x("carrinho")??{};function y(){document.getElementById("carrinho").classList.add("right-[0px]"),document.getElementById("carrinho").classList.remove("right-[-360px]")}function C(){document.getElementById("carrinho").classList.remove("right-[0px]"),document.getElementById("carrinho").classList.add("right-[-360px]")}function b(){Object.keys(o).length!==0&&(window.location.href=window.location.origin+"/checkout.html")}function v(){const t=document.getElementById("fechar-carrinho"),e=document.getElementById("abrir-carrinho"),n=document.getElementById("finalizar-compra");t.addEventListener("click",C),e.addEventListener("click",y),n.addEventListener("click",b)}function m(t){delete o[t],a("carrinho",o),c(),g()}function u(t){o[t]++,a("carrinho",o),c(),f(t)}function $(t){if(o[t]===1){m(t);return}o[t]--,a("carrinho",o),c(),f(t)}function f(t){document.getElementById(`quantidade-${t}`).innerText=o[t]}function h(t){const e=i.find(d=>d.id===t),n=document.getElementById("produtos-carrinho"),r=document.createElement("article"),p=["flex","bg-stone-300","rounded-lg","p-1","relative"];for(const d of p)r.classList.add(d);const E=`<button id="remover-item-${e.id}" class="absolute top-0 right-2">
      <i 
        class="fa-solid fa-circle-xmark text-slate-500 hover:text-red-900"
        ></i>
      </button>
      <img 
        src="./assets/img/${e.imagem}" 
        alt="Carrinho: ${e.nome}" 
        class="h-24 rounded-lg"
      />
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">${e.nome}</p>
        <p class="text-slate-800 text-xs">Tamanho: M</p>
        <p class="text-green-500 text-lg">$${e.preco}</p>
      </div>
      <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-xl ">
        <button id="decrementar-produto-${e.id}">-</button>
        <p id="quantidade-${e.id}" class="ml-2">${o[e.id]}</p>
        <button class="ml-2" id="incrementar-produto-${e.id}">+</button>
      </div>`;r.innerHTML=E,n.appendChild(r),document.getElementById(`decrementar-produto-${e.id}`).addEventListener("click",()=>$(e.id)),document.getElementById(`incrementar-produto-${e.id}`).addEventListener("click",()=>u(e.id)),document.getElementById(`remover-item-${e.id}`).addEventListener("click",()=>m(e.id))}function g(){const t=document.getElementById("produtos-carrinho");t.innerHTML="";for(const e in o)h(e)}function B(t){if(t in o){u(t);return}o[t]=1,a("carrinho",o),h(t)}function c(){const t=document.getElementById("preco-total");let e=0;for(const n in o)e+=i.find(r=>r.id===n).preco*o[n];t.innerText=`Total: $${e}`}function L(){for(const t of i){const e=`<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-500 rounded-lg group ${t.feminino?"feminino":"masculino"}' id="card-produto-${t.id}">
         <img 
         src="./assets/img/${t.imagem}" 
         alt="Produto ${t.id} de Apollo." 
         class='group-hover:scale-110 duration-300 my-3 rounded-lg'
         />
         <p class='text-sm'>${t.marca}</p>
         <p class='text-sm'>${t.nome}</p>
         <p class='text-sm'>$${t.preco}</p>
         <button id='adicionar-${t.id}' class= 'bg-slate-950 hover:bg-slate-500 text-slate-200'><i class="fa-solid fa-cart-plus"></i></button></div>`;document.getElementById("container-produto").innerHTML+=e}for(const t of i)document.getElementById(`adicionar-${t.id}`).addEventListener("click",()=>B(t.id))}const s=document.getElementById("container-produto");function l(){const t=Array.from(s.getElementsByClassName("hidden"));for(const e of t)e.classList.remove("hidden")}function I(){l();const t=Array.from(s.getElementsByClassName("masculino"));for(const e of t)e.classList.add("hidden")}function k(){l();const t=Array.from(s.getElementsByClassName("feminino"));for(const e of t)e.classList.add("hidden")}function w(){document.getElementById("exibir-femininos").addEventListener("click",I),document.getElementById("exibir-todos").addEventListener("click",l),document.getElementById("exibir-masculinos").addEventListener("click",k)}L();v();g();c();w();
