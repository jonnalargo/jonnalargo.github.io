/**
 * Shared Header & Footer Components
 * Injected into every page for consistency.
 */

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    return page;
}

function loadHeader() {
    const currentPage = getCurrentPage();

    const navLinks = [
        { href: 'index.html', label: 'Home' },
        { href: 'about.html', label: 'About' },
        { href: 'portfolio.html', label: 'Portfolio' },
        { href: 'contact.html', label: 'Contact' }
    ];

    const navItems = navLinks.map(link => {
        const isActive = currentPage === link.href ? ' class="active"' : '';
        return `<li><a href="${link.href}"${isActive}>${link.label}</a></li>`;
    }).join('\n                    ');

    const headerHTML = `
        <div class="header-container">
            <a href="index.html" class="logo">Jonna Mae Largo</a>
            <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav id="mainNav">
                <ul>
                    ${navItems}
                </ul>
            </nav>
        </div>
    `;

    const header = document.getElementById('site-header');
    if (header) {
        header.innerHTML = headerHTML;
    }

    // Mobile nav toggle
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('mainNav');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('open');
            toggle.classList.toggle('open');
        });
    }

    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

function loadFooter() {
    const year = new Date().getFullYear();

    const footerHTML = `
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-brand">
                    <a href="index.html" class="footer-logo">Jonna Mae Largo</a>
                    <p class="footer-tagline">Creating meaningful digital experiences.</p>
                </div>
                <div class="footer-links">
                    <h4>Pages</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="portfolio.html">Portfolio</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-social">
                    <h4>Connect</h4>
                    <div class="social-icons">
                        <a href="#" aria-label="GitHub" class="social-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                        </a>
                        <a href="#" aria-label="LinkedIn" class="social-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                        </a>
                        <a href="mailto:#" aria-label="Email" class="social-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${year} Jonna Mae Largo. All rights reserved.</p>
            </div>
        </div>
    `;

    const footer = document.getElementById('site-footer');
    if (footer) {
        footer.innerHTML = footerHTML;
    }
}

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
