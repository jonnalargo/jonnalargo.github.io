/**
 * Homepage-specific interactions
 */
document.addEventListener('DOMContentLoaded', () => {
    // CV download handler
    const cvSelect = document.getElementById('cvDownload');
    if (cvSelect) {
        cvSelect.addEventListener('change', (e) => {
            const val = e.target.value;
            if (val === 'pdf') {
                // Replace with actual CV file path
                window.open('assets/files/cv.pdf', '_blank');
            } else if (val === 'doc') {
                window.open('assets/files/cv.doc', '_blank');
            }
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply initial state and observe
    const animateElements = document.querySelectorAll('.service-card, .expertise-card, .cv-card, .tools-card, .showcase-banner');
    animateElements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
        observer.observe(el);
    });
});
