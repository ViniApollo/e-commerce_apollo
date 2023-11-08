(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const m=[{id:"1",marca:"Zara",nome:"Camisa Larga com Bolsos",preco:250,imagem:"product-1.jpg",feminino:!1},{id:"2",marca:"Zara",nome:"Casaco Reto com Lã",preco:500,imagem:"product-2.jpg",feminino:!0},{id:"3",marca:"Zara",nome:"Jaqueta com Efeito Camurça",preco:300,imagem:"product-3.jpg",feminino:!1},{id:"4",marca:"Zara",nome:"Sobretudo em Mescla de Lã",preco:350,imagem:"product-4.jpg",feminino:!1},{id:"5",marca:"Zara",nome:"Camisa Larga Acolchoada de Veludo Cotelê",preco:150,imagem:"product-5.jpg",feminino:!1},{id:"6",marca:"Zara",nome:"Casaco de Lã com Botões",preco:700,imagem:"product-6.jpg",feminino:!0},{id:"7",marca:"Zara",nome:"Casaco com Botões",preco:200,imagem:"product-7.jpg",feminino:!0},{id:"8",marca:"Zara",nome:"Colete Comprido com Cinto",preco:180,imagem:"product-8.jpg",feminino:!0}];function l(t,r){localStorage.setItem(t,JSON.stringify(r))}function d(t){return JSON.parse(localStorage.getItem(t))}function p(t){localStorage.removeItem(t)}function u(t,r,c){const a=m.find(s=>s.id===t),e=document.getElementById(r),o=document.createElement("article"),i=["flex","bg-stone-400","rounded-lg","p-1","relative","mb-2","w-96"];for(const s of i)o.classList.add(s);const n=`
      <img 
        src="./assets/img/${a.imagem}" 
        alt="Carrinho: ${a.nome}" 
        class="h-24 rounded-lg"
      />
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">${a.nome}</p>
        <p class="text-slate-800 text-xs">Tamanho: M</p>
        <p class="text-green-500 text-lg">$${a.preco}</p>
      </div>
      <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-xl ">
        <p id="quantidade-${a.id}" class="ml-2">${c}</p>
      </div>`;o.innerHTML=n,e.appendChild(o)}export{p as a,m as c,u as d,d as l,l as s};
