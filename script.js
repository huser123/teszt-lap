// Egyszerű üdvözlő üzenet a főoldal betöltésekor
document.addEventListener("DOMContentLoaded", function () {
    alert("Üdvözlünk a blogomban! Köszönjük, hogy ellátogattál.");
});

// Gördülékeny görgetés a linkek között (főleg, ha hosszabb oldal lenne)
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
