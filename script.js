document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navLinksItems = navLinks.querySelectorAll('a');

    // Toggle menu (otwieranie/zamykanie)
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active'); 
        menuToggle.classList.toggle('open'); 
    });

    // Zamknięcie menu po kliknięciu na link
    navLinksItems.forEach(item => {
        item.addEventListener('click', function () {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });
});

window.addEventListener("load", function () {
    var animationDuration = 1000; 

    // Ustawienie opóźnienia ukrycia ekranu ładowania
    setTimeout(function () {
        document.getElementById("loading-screen").style.display = "none";
    }, animationDuration);
});

// AOS

AOS.init({
    offset: 100, 
    duration: 600,
    easing: 'ease-in-out',
    once: false,
    mirror: true
});
