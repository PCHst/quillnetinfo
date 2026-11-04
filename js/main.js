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

