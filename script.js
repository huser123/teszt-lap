// Aktív menüpont kiemelése a navigációban
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});

// Képek animált megjelenítése
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = 0;
        img.style.transition = 'opacity 0.5s ease-in-out';
        img.onload = () => {
            img.style.opacity = 1;
        };
    });
});
