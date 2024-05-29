document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.createElement('button');
    themeToggle.classList.add('theme-toggle');
    themeToggle.textContent = 'Toggle Theme';
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        if (document.body.classList.contains('light-theme')) {
            themeToggle.classList.add('light');
            themeToggle.textContent = 'Dark Theme';
        } else {
            themeToggle.classList.remove('light');
            themeToggle.textContent = 'Light Theme';
        }
    });
});
