document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lottie Animation
    const lottieContainer = document.getElementById('lottie-container');
    
    if (lottieContainer) {
        lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://cdn.prod.website-files.com/64cd7f5a31615eaba3c0956d/64d5976ec05e491caa0d75ff_banner-phone.json'
        });
    }

    // Scroll Reveal Logic
    const observerOptions = {
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal to sections and cards
    const revealElements = document.querySelectorAll('.designer-card, #about, .section-title');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        revealObserver.observe(el);
    });

    // Smooth Scroll for Nav Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar transparency switch on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(5, 5, 5, 0.95)';
            nav.style.height = '80px';
        } else {
            nav.style.background = 'linear-gradient(to bottom, rgba(5,5,5,0.8), transparent)';
            nav.style.height = '100px';
        }
    });
});
