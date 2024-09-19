import{S as p,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function f(o){const r=new URLSearchParams({key:"46020847-b0dc78394505c5145868b7f5c",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}function y(o,r){const a=o.map(({webformatURL:s,largeImageURL:e,tags:t,likes:i,views:d,comments:u,downloads:m})=>`<li class="gallery-list-item">
                    <a class="gallery-link" href="${e}">
                        <img class="img" src="${s}" 
                        alt="${t}" 
                        title="${t}" />
                    </a>
                    <ul class="data-list">
                        <li class="data-item">
                            <p class="data-item-name">Likes</p>
                            <p class="data-numbers">${i}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Views</p>
                            <p class="data-numbers">${d}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Comments</p>
                            <p class="data-numbers">${u}</p>
                        </li>
                        <li class="data-item">
                            <p class="data-item-name">Downloads</p>
                            <p class="data-numbers">${m}</p>
                        </li>
                    </ul> 
          </li>`).join("");r.insertAdjacentHTML("beforeend",a)}const h=document.querySelector("body"),g=`<div class="container">
    <form class="formFetchEl">
		<input type="text" class="search-input" name="search" />
		<button class="btnEl">Search</button>
    </form>
    <span class="loader">Loading</span>
	  <ul class="galleryEl"></ul>
</div>`;h.insertAdjacentHTML("afterbegin",g);const l=document.querySelector(".loader");l.style.display="none";let b=new p(".galleryEl a",{caption:!0,captionDelay:250,captionsData:"alt"});const S=document.querySelector("form"),n=document.querySelector(".galleryEl");S.addEventListener("submit",o=>{o.preventDefault(),n.innerHTML="";const r=o.currentTarget.elements.search.value.toLowerCase().trim();r&&f(r).then(a=>{if(a.hits.length===0){c.show({message:"Sorry, there are no images matching <br> your search query. Please try again!",messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(255,153,102)",position:"topRight",iconUrl,imageWidth:30});const s=document.querySelector(".iziToast");s.style.borderRadius="10px",s.style.overflow="hidden"}else{l.style.display="block",y(a.hits,n),b.refresh();const s=n.querySelectorAll("img");let e=0;s.forEach(t=>{t.complete?(e++,e===s.length&&(l.style.display="none")):t.addEventListener("load",()=>{e++,e===s.length&&(l.style.display="none")})})}}).catch(a=>{c.show({message:`Sorry, ${a}. Please try again!`,messageColor:"#000",messageSize:"18px",messageLineHeight:"20px",backgroundColor:"rgb(255,153,102)",position:"topRight"}),l.style.display="none";const s=document.querySelector(".iziToast");s.style.borderRadius="10px",s.style.overflow="hidden"})});
//# sourceMappingURL=index.js.map
