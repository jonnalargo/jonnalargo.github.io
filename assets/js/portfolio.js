document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for the Portfolio Footer Banner
    const banner = document.querySelector('.portfolio-footer-banner');
    
    if (banner) {
        const observerOptions = {
            threshold: 0.25 // Trigger when 25% of the banner is visible
        };

        const bannerObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-banner');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        bannerObserver.observe(banner);
    }
});
