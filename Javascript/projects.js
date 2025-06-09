document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    const sections = document.querySelectorAll('.page-section');
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');
    const headerItems = document.querySelector('.header-items');
    const navbar = document.querySelector('.navbar');
    const dotNav = document.querySelector('.dot-nav');

    // Update dot and navigation colors when scrolling
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                dots.forEach(dot => {
                    dot.classList.toggle('active', dot.dataset.target === id);
                });

                // Change colors based on section
                if (id === 'section2' || id === 'section3' || id === 'section4') {
                    logo.classList.add('dark-bg');
                    headerItems.classList.add('dark-bg');
                    navbar.classList.add('dark-bg');
                    dotNav.classList.add('dark-bg');
                } else {
                    logo.classList.remove('dark-bg');
                    headerItems.classList.remove('dark-bg');
                    navbar.classList.remove('dark-bg');
                    dotNav.classList.remove('dark-bg');
                }
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    // Dot click scroll
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const target = document.getElementById(dot.dataset.target);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
