/* =====================================================
   ACADEMIA KURT | CURSOS GRATUITOS PARA EL FUTURO
   JavaScript — Animations, Interactions & Utilities
   ===================================================== */

'use strict';

/* ========== NAVBAR SCROLL ========== */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

/* ========== SMOOTH SCROLL ========== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const offset = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        });
    });
}

/* ========== WHATSAPP BOT INTERACTION ========== */
function initWhatsAppBot() {
    const fab = document.getElementById('wa-fab');
    const card = document.getElementById('wa-card');
    if (!fab || !card) return;

    fab.addEventListener('click', (e) => {
        e.stopPropagation();
        card.style.opacity = card.style.opacity === '1' ? '0' : '1';
        card.style.visibility = card.style.visibility === 'visible' ? 'hidden' : 'visible';
        card.style.transform = card.style.transform === 'translateY(0px)' ? 'translateY(20px)' : 'translateY(0px)';
    });

    // Close on body click
    document.body.addEventListener('click', () => {
        card.style.opacity = '0';
        card.style.visibility = 'hidden';
        card.style.transform = 'translateY(20px)';
    });

    card.addEventListener('click', e => e.stopPropagation());
}

/* ========== GLOBAL BOT OPENER ========== */
window.openKurtBot = function () {
    const card = document.getElementById('wa-card');
    if (card) {
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.transform = 'translateY(0px)';
        // Optional smooth scroll to bot if on mobile
        if (window.innerWidth < 768) {
            document.getElementById('kurt-bot').scrollIntoView({ behavior: 'smooth' });
        }
    }
};

/* ========== FORM SUBMISSION UTILITIES ========== */
function initForm() {
    const form = document.getElementById('academia-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        const btn = document.getElementById('btn-submit');
        const originalHTML = btn.innerHTML;

        btn.innerHTML = '<span>⏳ Enviando...</span>';
        btn.disabled = true;

        // Feedback to user since we're using silent iframe
        setTimeout(() => {
            btn.innerHTML = '<span>✅ ¡Inscrito con Éxito!</span>';
            btn.style.background = 'linear-gradient(135deg, #15803d, #22c55e)';
            form.reset();

            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.disabled = false;
                btn.style.background = '';
            }, 3000);
        }, 1500);
    });
}

/* ========== INIT ALL ========== */
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initSmoothScroll();
    initWhatsAppBot();
    initForm();

    // Simple staggering reveal for cards
    const cards = document.querySelectorAll('.animate-fade-up');
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, i * 150);
    });
});
