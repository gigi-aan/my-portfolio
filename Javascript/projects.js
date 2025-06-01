document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    const sections = document.querySelectorAll('.page-section');

    // Update dot when scrolling
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            dots.forEach(dot => {
            dot.classList.toggle('active', dot.dataset.target === id);
            });
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
