/* ============================================
   WHATSAPP
   ============================================ */
function openWhatsApp() {
  const phone = '5531999990000'; // Altere para o número real
  const msg = encodeURIComponent('Olá! Gostaria de saber mais sobre o Lar Maria e Chicho.');
  window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${msg}`, '_blank');
}

/* ============================================
   ANO ATUAL NO FOOTER
   ============================================ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ============================================
   NAVBAR – scroll shadow + topbar offset
   ============================================ */
const navbar = document.getElementById('navbar');
const topbar = document.getElementById('topbar');

function updateNavbarTop() {
  const tbH = topbar ? topbar.offsetHeight : 0;
  navbar.style.top = tbH + 'px';
}
updateNavbarTop();
window.addEventListener('resize', updateNavbarTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,.15)';
  } else {
    navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,.08)';
  }
});

/* ============================================
   HAMBURGER MENU
   ============================================ */
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('#navbar nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Fecha ao clicar em um link
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    hamburger.classList.remove('active');
  });
});

/* ============================================
   FORMULÁRIO DE CONTATO
   ============================================ */
function submitForm(e) {
  e.preventDefault();
  const feedback = document.getElementById('form-feedback');
  feedback.textContent = 'Mensagem enviada! Em breve entraremos em contato.';
  feedback.style.color = '#2e7d32';
  document.getElementById('form-contato').reset();
  setTimeout(() => { feedback.textContent = ''; }, 5000);
}

/* ============================================
   SCROLL REVEAL – animação suave nas seções
   ============================================ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.card, .gallery-item, .unidade-card, .section-text, .section-image, .contato-info, .contato-form'
).forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// CSS das animações injetado via JS para não poluir o CSS principal
const style = document.createElement('style');
style.textContent = `
  .reveal { opacity: 0; transform: translateY(28px); transition: opacity .6s ease, transform .6s ease; }
  .reveal.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
