const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
menuToggle?.addEventListener("click",()=>{navLinks.classList.toggle("open");document.body.classList.toggle("menu-open")});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{navLinks.classList.remove("open");document.body.classList.remove("menu-open")}));

const modal=document.getElementById("loginModal");
document.querySelectorAll("[data-modal]").forEach(btn=>btn.addEventListener("click",()=>{modal.classList.add("open");modal.setAttribute("aria-hidden","false")}));
document.querySelectorAll("[data-close]").forEach(btn=>btn.addEventListener("click",()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}));
modal?.addEventListener("click",e=>{if(e.target===modal){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}});

document.getElementById("loginButton")?.addEventListener("click",()=>{
  document.getElementById("loginMessage").textContent="O portal será conectado ao sistema escolar nesta próxima etapa.";
});

document.getElementById("enrollmentForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const form=e.currentTarget;
  const data=new FormData(form);
  const nome=data.get("responsavel");
  alert(`Obrigado, ${nome}! Sua solicitação foi preenchida. Para receber a mensagem da escola, conecte este formulário ao WhatsApp ou a um serviço de formulários.`);
  form.reset();
});

const header=document.getElementById("header");
window.addEventListener("scroll",()=>{header.style.boxShadow=window.scrollY>20?"0 5px 25px rgba(0,0,0,.06)":"none"});

const sections=[...document.querySelectorAll("main section[id]")];
const links=[...document.querySelectorAll(".nav-links a")];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+entry.target.id));
    }
  });
},{rootMargin:"-30% 0px -60% 0px"});
sections.forEach(s=>observer.observe(s));
