// ==========================================
// Scroll-based fade-in animation
// ==========================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 80);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

// ==========================================
// Active nav link on scroll
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// Project filter tabs
// ==========================================
const filterTabs = document.querySelectorAll('.filter-tab');
const projectCards = document.querySelectorAll('.project-card-wrapper');

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.dataset.filter;
        projectCards.forEach(card => {
            const tags = card.dataset.tags || '';
            if (filter === 'all' || tags.includes(filter)) {
                card.style.display = '';
                setTimeout(() => card.classList.add('visible'), 50);
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ==========================================
// Certificate modal
// ==========================================
const certCards = document.querySelectorAll('.cert-card[data-img]');
const certModal = new bootstrap.Modal(document.getElementById('certModal'));
const certModalImg = document.getElementById('certModalImg');
const certModalTitle = document.getElementById('certModalTitle');

certCards.forEach(card => {
    card.addEventListener('click', () => {
        certModalImg.src = card.dataset.img;
        certModalTitle.textContent = card.dataset.title || '';
        certModal.show();
    });
});

// ==========================================
// Smooth navbar background on scroll
// ==========================================
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// ==========================================
// Typed text effect in hero
// ==========================================
const roles = ['Backend Developer', 'Python Engineer', 'FastAPI & Django Dev', 'Cloud & DevOps Enthusiast'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-role');

function typeEffect() {
    if (!typedEl) return;
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typedEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => { isDeleting = true; typeEffect(); }, 1800);
        return;
    }
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(typeEffect, isDeleting ? 60 : 95);
}
typeEffect();
