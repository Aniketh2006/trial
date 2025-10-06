let counter = 1;
setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) counter = 1;
}, 5000); // Change image every 5 seconds


window.addEventListener('load', () => {
    document.querySelector('.bio-container').style.opacity = '1';
});

document.addEventListener('DOMContentLoaded', () => {
    // --- Intersection Observer for Fade-in/Slide-up Animation ---
    const headerElements = document.querySelectorAll('#header-nav, .navbar-brand h1, .navbar-brand p, #nav-list li, #phone');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // You can uncomment the line below if you want elements to animate only once
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove 'show' class if you want animation to re-trigger on scroll out/in
                // entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    headerElements.forEach(el => {
        // Add initial animation classes. These will be controlled by Intersection Observer
        if (el.id === 'header-nav') {
            el.classList.add('fade-in'); // Header fades in
        } else {
            el.classList.add('slide-up'); // Other elements slide up
        }
        observer.observe(el);
    });

    // --- Dynamic Text for Phone Tagline ---
    const phoneTagline = document.getElementById('phone');
    if (phoneTagline) {
        setTimeout(() => {
            phoneTagline.style.opacity = '1';
            phoneTagline.style.transform = 'translateY(0)';
        }, 1500); // Appear after 1.5 seconds
    }

    // --- Smooth Scroll for Navigation Links (if you add more sections) ---
    document.querySelectorAll('#nav-list a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Navbar Toggle Button Animation (subtle rotation) ---
    const navbarToggle = document.querySelector('.navbar-toggle');
    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            navbarToggle.classList.toggle('clicked');
        });
    }
    // Add CSS for .navbar-toggle.clicked if you want a persistent animation
    // For example:
    // .navbar-toggle.clicked {
    //   transform: rotate(90deg);
    // }
});