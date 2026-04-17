document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lottie Animation
    const lottieContainer = document.getElementById('lottie-container');
    
    if (lottieContainer) {
        lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://cdn.prod.website-files.com/64cd7f5a31615eaba3c0956d/64d5976ec05e491caa0d75ff_banner-phone.json',
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
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
    const revealElements = document.querySelectorAll('.app-card, .edition-block, .section-title, .about-grid');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        revealObserver.observe(el);
    });

    // Generate Editions 4-10
    const extraEditionsContainer = document.getElementById('extra-editions');
    const seasonNames = ['FOURTH', 'FIFTH', 'SIXTH', 'SEVENTH', 'EIGHTH', 'NINTH', 'TENTH'];
    
    if (extraEditionsContainer) {
        seasonNames.forEach((season, index) => {
            const num = index + 4;
            const year = 2023 + index + 1;
            const editionHtml = `
                <div class="edition-block">
                    <div class="edition-header">
                        <span class="edition-tag">${season} SEASSON</span>
                        <h3>${num}th Edition - Doral Fashion Week ${year}: "Future of Elegance"</h3>
                        <p>Continuing the legacy of innovation, the ${num}th edition pushed the boundaries of fashion and technology...</p>
                    </div>
                    <div class="gallery-grid">
                        ${[1,2,3,4,5,6].map(i => `
                            <div class="gallery-item">
                                <img src="https://images.unsplash.com/photo-${1500000000000 + (num*i*1000)}?auto=format&fit=crop&w=400" alt="DFW ${num}">
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            extraEditionsContainer.insertAdjacentHTML('beforeend', editionHtml);
        });

        // Re-observe new elements
        document.querySelectorAll('#extra-editions .edition-block').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
            revealObserver.observe(el);
        });
    }

    // Smooth Scroll for Nav Links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
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
