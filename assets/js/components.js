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

function loadFooter() {
    // Footer is currently hidden per design
    const footer = document.getElementById('site-footer');
    if (footer) {
        footer.style.display = 'none';
    }
}

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});
