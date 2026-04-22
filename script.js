// Menu Mobile
const mobileMenu = document.getElementById('mobileMenu');
const navMenu = document.getElementById('navMenu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Formulário de contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome')?.value || '';
        const email = document.getElementById('email')?.value || '';
        const assunto = document.getElementById('assunto')?.value || '';
        
        if (!nome || !email) {
            alert('Por favor, preencha nome e e-mail.');
            return;
        }
        
        // Simula envio (aqui você pode integrar com API real)
        alert(`✅ Mensagem enviada com sucesso!\n\nOlá ${nome}, entraremos em contato em breve.`);
        contactForm.reset();
    });
}

// Header com efeito ao scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'white';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'white';
        header.style.boxShadow = 'none';
    }
});