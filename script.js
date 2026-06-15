function goto(link) {
    window.location.href = link;
}

function toggleMenu() {
    var nav = document.querySelector('.header-nav');
    var toggle = document.querySelector('.menu-toggle');
    if (nav) {
        nav.classList.toggle('show');
        if (toggle) {
            toggle.classList.toggle('open');
        }
    }
}

// close menu when clicking a link (optional gentle UX)
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.header-nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var nav = document.querySelector('.header-nav');
            var toggle = document.querySelector('.menu-toggle');
            if (nav && nav.classList.contains('show')) {
                nav.classList.remove('show');
            }
            if (toggle && toggle.classList.contains('open')) {
                toggle.classList.remove('open');
            }
        });
    });
});