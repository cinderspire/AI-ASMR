// Theme Toggle Controller
class ThemeController {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.init();
    }

    init() {
        // Set initial theme
        this.applyTheme(this.currentTheme);

        // Setup toggle button
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
    }

    applyTheme(theme) {
        const html = document.documentElement;
        const darkIcon = document.getElementById('theme-icon-dark');
        const lightIcon = document.getElementById('theme-icon-light');

        if (theme === 'dark') {
            html.classList.add('dark');
            darkIcon?.classList.remove('hidden');
            lightIcon?.classList.add('hidden');
        } else {
            html.classList.remove('dark');
            darkIcon?.classList.add('hidden');
            lightIcon?.classList.remove('hidden');
        }
    }
}

// Initialize theme controller
document.addEventListener('DOMContentLoaded', () => {
    window.themeController = new ThemeController();
});
