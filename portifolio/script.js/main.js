// Ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu ativo on scroll
const links = [...document.querySelectorAll('.nav-link')];
const sections = [...document.querySelectorAll('main section[id]')];
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      links.forEach(a=>a.classList.remove('active'));
      const l = document.querySelector(`.nav-link[href="#${e.target.id}"]`);
      if(l) l.classList.add('active');
    }
  });
},{rootMargin:'-45% 0px -45% 0px',threshold:0});
sections.forEach(s=>io.observe(s));

// Mobile toggle
const trigger = document.querySelector('.mobile-trigger');
const nav = document.querySelector('.main-nav');
trigger?.addEventListener('click',()=>nav.classList.toggle('open'));