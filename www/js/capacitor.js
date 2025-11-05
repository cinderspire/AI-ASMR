// Capacitor Initialization
// Note: This will only work when built as a native app
// Capacitor plugins will be available globally via CDN in native context

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
    // Check if Capacitor is available (native app)
    if (window.Capacitor) {
        try {
            const { SplashScreen } = window.Capacitor.Plugins;
            const { StatusBar } = window.Capacitor.Plugins;
            const { App } = window.Capacitor.Plugins;

            // Hide splash screen after app loads
            if (SplashScreen) {
                await SplashScreen.hide();
            }

            // Configure status bar
            if (StatusBar) {
                await StatusBar.setStyle({ style: 'DARK' });
                await StatusBar.setBackgroundColor({ color: '#191121' });
            }

            // Handle back button on Android
            if (App) {
                App.addListener('backButton', ({ canGoBack }) => {
                    if (!canGoBack) {
                        App.exitApp();
                    } else {
                        window.history.back();
                    }
                });
            }

            console.log('Capacitor initialized successfully');
        } catch (error) {
            console.log('Capacitor initialization error:', error);
        }
    } else {
        console.log('Running in browser mode - Capacitor not available');
    }
});

// Haptics helper
window.haptic = async (style = 'LIGHT') => {
    if (window.Capacitor?.Plugins?.Haptics) {
        try {
            await window.Capacitor.Plugins.Haptics.impact({ style });
        } catch (error) {
            // Haptics not available
        }
    }
};

// Check if running in native app
window.isNative = () => {
    return window.Capacitor?.isNativePlatform() || false;
};
