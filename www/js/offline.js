// Offline Mode Controller
class OfflineController {
    constructor() {
        this.isOnline = navigator.onLine;
        this.init();
    }

    init() {
        // Listen for online/offline events
        window.addEventListener('online', () => {
            this.handleOnline();
        });

        window.addEventListener('offline', () => {
            this.handleOffline();
        });

        // Check initial state
        if (!this.isOnline) {
            this.handleOffline();
        }
    }

    handleOnline() {
        this.isOnline = true;
        const banner = document.getElementById('offline-banner');
        const message = document.getElementById('offline-message');

        if (banner && message) {
            message.textContent = 'Connected! ✓';
            banner.classList.remove('bg-yellow-500/90', 'hidden');
            banner.classList.add('bg-green-500/90');

            // Hide banner after 3 seconds
            setTimeout(() => {
                banner.classList.add('hidden');
                banner.classList.remove('bg-green-500/90');
                banner.classList.add('bg-yellow-500/90');
            }, 3000);
        }

        console.log('App is online');
    }

    handleOffline() {
        this.isOnline = false;
        const banner = document.getElementById('offline-banner');
        const message = document.getElementById('offline-message');

        if (banner && message) {
            message.textContent = 'You are offline';
            banner.classList.remove('hidden');
        }

        console.log('App is offline');
    }

    getStatus() {
        return this.isOnline;
    }
}

// Initialize offline controller
document.addEventListener('DOMContentLoaded', () => {
    window.offlineController = new OfflineController();
});
