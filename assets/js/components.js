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
        { href: 'portfolio.html', label: 'Portfolio', icon: '', outlined: true },
        { href: 'about.html', label: 'About', icon: '', outlined: true },
        { href: 'contact.html', label: 'Contact', icon: '', outlined: true }
    ];

    const navItems = navLinks.map(link => {
        const isActive = currentPage === link.href ? ' active' : '';
        const outlined = link.outlined ? ' nav-outlined' : '';
        const iconHtml = link.icon ? ` <span>${link.icon}</span>` : '';
        return `<li><a href="${link.href}" class="${isActive}${outlined}">${link.label}${iconHtml}</a></li>`;
    }).join('\n                    ');

    const headerHTML = `
        <div class="header-container">
            <a href="index.html" class="logo">Jonna | Multi-Skilled VA</a>
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
}

/*****************************************
 * Footer Component
 *****************************************/
function loadFooter() {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    footer.innerHTML = `
        <section class="footer-cta">
            <div class="container text-center">
                <h2 class="cta-title">Let's Create Something Exceptional Together</h2>
                <div class="cta-links social-text-links">
                    <a href="https://www.linkedin.com/in/jonna-mae-largo-4b569613b/" target="_blank" class="social-link">
                        <div class="platform-info">
                            <i class="fa-brands fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </div>
                        <span class="handle">@jonna-mae-largo</span>
                    </a>
                    <a href="https://wa.me/639207217090" target="_blank" class="social-link">
                        <div class="platform-info">
                            <i class="fa-brands fa-whatsapp"></i>
                            <span>WhatsApp</span>
                        </div>
                        <span class="handle">+63 920 721 7090</span>
                    </a>
                    <a href="mailto:jonnamlargo@gmail.com" class="social-link">
                        <div class="platform-info">
                            <i class="fa-solid fa-envelope"></i>
                            <span>Email</span>
                        </div>
                        <span class="handle">jonnamlargo@gmail.com</span>
                    </a>
                </div>
            </div>
        </section>
        <div class="footer-container">
            <div class="footer-bottom">
                <p class="copyright">&copy; ${new Date().getFullYear()} Jonna Mae Largo. All rights reserved.</p>
                <div class="footer-links">
                    <button class="back-to-top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                        Back to Top <span class="arrow">↑</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
