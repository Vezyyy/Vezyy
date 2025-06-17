document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navLinksItems = navLinks.querySelectorAll('a');

    // Toggle menu (otwieranie/zamykanie)
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active'); // Dodanie/zdjęcie klasy 'active' do menu
        menuToggle.classList.toggle('open'); // Zmiana wyglądu hamburgera
    });

    // Zamknięcie menu po kliknięciu na link
    navLinksItems.forEach(item => {
        item.addEventListener('click', function () {
            navLinks.classList.remove('active'); // Zamyka menu po kliknięciu
            menuToggle.classList.remove('open'); // Zmienia ikonę z powrotem na hamburgera
        });
    });
});

window.addEventListener("load", function () {
    // Czas trwania animacji (w milisekundach)
    var animationDuration = 1000; // 1 sekundy (czas trwania animacji logo)

    // Ustawienie opóźnienia ukrycia ekranu ładowania
    setTimeout(function () {
        document.getElementById("loading-screen").style.display = "none";
    }, animationDuration); // Opóźnienie o czas trwania animacji
});

// AOS

AOS.init({
    offset: 100, // domyślnie 120 - zmniejsz, żeby animacja startowała szybciej
    duration: 600,
    easing: 'ease-in-out',
    once: false,
    mirror: true
});
