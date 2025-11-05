// Main App Controller
class ASMRApp {
    constructor() {
        this.currentScreen = 'welcome';
        this.init();
    }

    init() {
        // Navigation
        this.setupNavigation();

        // Button handlers
        document.getElementById('start-btn')?.addEventListener('click', () => {
            this.navigateTo('categories');
        });

        document.getElementById('learn-more-btn')?.addEventListener('click', () => {
            this.showLearnMore();
        });

        // Category cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                this.navigateTo('player');
            });
        });

        // Settings
        document.getElementById('settings-btn')?.addEventListener('click', () => {
            this.showSettings();
        });
    }

    setupNavigation() {
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const screen = e.currentTarget.dataset.screen;
                this.navigateTo(screen);

                // Update nav active state
                document.querySelectorAll('.nav-btn').forEach(b => {
                    b.classList.remove('text-primary');
                    b.classList.add('text-white/50');
                });
                e.currentTarget.classList.remove('text-white/50');
                e.currentTarget.classList.add('text-primary');
            });
        });
    }

    navigateTo(screen) {
        // Hide all screens
        document.querySelectorAll('[id$="-screen"]').forEach(s => {
            s.classList.add('hidden');
        });

        // Show target screen
        const targetScreen = document.getElementById(`${screen}-screen`);
        if (targetScreen) {
            targetScreen.classList.remove('hidden');
            targetScreen.classList.add('fade-in');
            this.currentScreen = screen;
        }
    }

    showLearnMore() {
        alert('AI ASMR - Personalized relaxation experiences powered by artificial intelligence. Discover unique soundscapes designed for your perfect calm.');
    }

    showSettings() {
        alert('Settings coming soon! Stay tuned for customization options.');
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    window.asmrApp = new ASMRApp();
});
