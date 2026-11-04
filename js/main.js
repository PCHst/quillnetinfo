// Contadores animados de la sección "El riesgo"
(function(){
var els=document.querySelectorAll('[data-to]');
function run(el){var to=+el.dataset.to,s=el.dataset.s||'',t0=null;
if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.textContent=to+s;return}
function f(t){if(!t0)t0=t;var p=Math.min((t-t0)/1200,1);el.textContent=Math.round(to*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)}
requestAnimationFrame(f)}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){run(x.target);io.unobserve(x.target)}})},{threshold:.5});els.forEach(function(el){io.observe(el)})}
else els.forEach(function(el){el.textContent=el.dataset.to+(el.dataset.s||'')});
})();

// Botón modo claro / oscuro
(function(){var r=document.documentElement,b=document.getElementById("tg");if(!b)return;b.addEventListener("click",function(){var c=r.getAttribute("data-qn")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"),n=c==="dark"?"light":"dark";r.setAttribute("data-qn",n);try{localStorage.setItem("qn-theme2",n)}catch(e){}})})();

// Lightbox con teclado (Esc cierra, flechas navegan)
(function(){var l=document.querySelectorAll('.gal a');if(!l.length)return;var d=document.createElement('dialog');d.className='lb';d.setAttribute('aria-label','Imagen ampliada');d.innerHTML='<button class="lbx" aria-label="Cerrar">✕</button><button class="lbp" aria-label="Anterior">‹</button><img alt=""><p></p><button class="lbn" aria-label="Siguiente">›</button>';document.body.appendChild(d);var i=0,im=d.querySelector('img'),c=d.querySelector('p');function s(n){i=(n+l.length)%l.length;im.src=l[i].href;im.alt=l[i].dataset.alt;c.textContent=l[i].dataset.alt}l.forEach(function(a,n){a.addEventListener('click',function(e){e.preventDefault();s(n);d.showModal()})});d.querySelector('.lbx').onclick=function(){d.close()};d.querySelector('.lbp').onclick=function(){s(i-1)};d.querySelector('.lbn').onclick=function(){s(i+1)};d.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')s(i-1);if(e.key==='ArrowRight')s(i+1)});d.addEventListener('click',function(e){if(e.target===d)d.close()})})();
