document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    
    // Observe all section titles
    document.querySelectorAll('.section-title').forEach(el => {
        observer.observe(el);
    });
    
    // Observe all project cards
    document.querySelectorAll('.project-card').forEach(el => {
        observer.observe(el);
    });
    
    // Observe contact form
    document.querySelector('.contact-form').forEach(el => {
        observer.observe(el);
    });
});