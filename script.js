/* script.js
   - Si estamos en index.html (sobre) abre los pliegues y redirige.
   - Si estamos en invitacion.html activa scroll suave.
*/

function q(sel){ return document.querySelector(sel); }
function qAll(sel){ return Array.from(document.querySelectorAll(sel)); }

/* Sobre - handler */
function setupEnvelopeHandler(){
  const sello = q(".sello");
  if(!sello) return;

  const arriba = q(".pliegue.arriba");
  const abajo = q(".pliegue.abajo");
  const izquierda = q(".pliegue.izquierda");
  const derecha = q(".pliegue.derecha");

  let opened = false;
  function openEnvelope(){
    if(opened) return;
    opened = true;

    // animaciones
    if(arriba) arriba.classList.add("open-arriba");
    if(abajo) abajo.classList.add("open-abajo");
    if(izquierda) izquierda.classList.add("open-izquierda");
    if(derecha) derecha.classList.add("open-derecha");

    // transición de fondo a blanco (suave)
    document.body.style.transition = "background 1s ease";
    setTimeout(()=>{ document.body.style.background = "#ffffff"; }, 250);

    // redirigir tras la animación
    setTimeout(()=>{ window.location.href = "invitacion.html"; }, 1000);
  }

  sello.addEventListener("click", openEnvelope);
  sello.setAttribute("tabindex","0");
  sello.addEventListener("keydown", (e)=>{ if(e.key==="Enter"||e.key===" ") openEnvelope(); });
}

/* Scroll suave para invitacion */
function setupSmoothScroll(){
  qAll('.sidebar a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href');
      const el = document.querySelector(id);
      if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* Init */
document.addEventListener("DOMContentLoaded", ()=>{
  if(q(".sobre")){ setupEnvelopeHandler(); }
  if(q(".presentation") && q(".sidebar")){ setupSmoothScroll(); }
});

document.addEventListener("DOMContentLoaded", () => {

    const sello = document.querySelector(".sello");
    if (!sello) return;

    const arriba = document.querySelector(".pliegue.arriba");
    const abajo = document.querySelector(".pliegue.abajo");
    const izquierda = document.querySelector(".pliegue.izquierda");
    const derecha = document.querySelector(".pliegue.derecha");

    sello.addEventListener("click", () => {

        arriba.classList.add("open-arriba");
        abajo.classList.add("open-abajo");
        izquierda.classList.add("open-izquierda");
        derecha.classList.add("open-derecha");

        setTimeout(() => {
            window.location.href = "invitacion.html";
        }, 1000);

    });
});
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function updateCarousel(){
  track.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});
