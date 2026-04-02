/**
 * Homepage-specific interactions
 */
document.addEventListener('DOMContentLoaded', () => {
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

    // Typewriter effect
    const typewriter = document.querySelector('.hero-banner-text');
    if (typewriter) {
        const text = typewriter.textContent;
        typewriter.classList.add('typing-cursor');
        
        let i = 0;
        let isDeleting = false;
        
        const typeEffect = () => {
            const current = typewriter.textContent;
            
            if (!isDeleting) {
                // Typing
                typewriter.textContent = text.substring(0, i + 1);
                i++;
                
                if (i === text.length) {
                    isDeleting = true;
                    // Pause when finished typing
                    setTimeout(typeEffect, 5000); 
                } else {
                    setTimeout(typeEffect, 100);
                }
            } else {
                // Deleting
                typewriter.textContent = text.substring(0, i - 1);
                i--;
                
                if (i === 0) {
                    isDeleting = false;
                    // Short pause when empty
                    setTimeout(typeEffect, 500); 
                } else {
                    setTimeout(typeEffect, 50); // Faster deletion
                }
            }
        };
        
        // Start after a small initial delay
        setTimeout(typeEffect, 500);
    }
});
