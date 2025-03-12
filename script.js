document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    // Ekran ładowania
    window.addEventListener('load', function () {
        const loadingOverlay = document.getElementById('loading');

        // Po załadowaniu strony, ukrywamy ekran ładowania
        setTimeout(function () {
            loadingOverlay.style.display = 'none';
        }, 500); // Opóźnienie 0.5 sekundy
    });
});

// Usuwanie loading screen po załadowaniu strony
window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading');
    loadingScreen.classList.add('loaded');
});


