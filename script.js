const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle?.querySelector('i');

function applyTheme(theme) {
    const selectedTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', selectedTheme);

    if (themeToggle) {
        const isDark = selectedTheme === 'dark';
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggle.setAttribute('title', isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
    }

    if (themeIcon) {
        themeIcon.classList.toggle('fa-moon', !document.documentElement.hasAttribute('data-theme') || document.documentElement.getAttribute('data-theme') !== 'dark');
        themeIcon.classList.toggle('fa-sun', document.documentElement.getAttribute('data-theme') === 'dark');
    }

    localStorage.setItem('theme', selectedTheme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme('light');
}

themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
});

const elements = document.querySelectorAll('.scroll-animation');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.15
});

elements.forEach((element) => {
    observer.observe(element);
});