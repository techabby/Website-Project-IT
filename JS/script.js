'use strict';

// Preload -- Loading will end after window is loaded
const preloader = document.querySelector('[data-preload]');
window.addEventListener("load", function () {
    preloader.classList.add('loaded');
    document.body.classList.add('loaded');
});
// Scrolled
window.addEventListener('scroll', function () {
    let navbar = this.document.querySelector('.navbar');
    if (this.window.scrollY > 100) {
        navbar.classList.add('scrolled')
    }
    else {
        navbar.classList.remove('scrolled')
    }
})
// Open Reservation
function reservation() {
    window.location.href = 'pages/reservation.html';
}
// Menu Page
function showCategory(cat){
    document.querySelectorAll('.category').forEach(c => c.style.display = 'none');
    document.getElementById(cat).style.display = 'block';
}

