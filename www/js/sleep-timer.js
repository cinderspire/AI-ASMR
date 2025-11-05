// Sleep Timer Controller
class SleepTimer {
    constructor() {
        this.timerId = null;
        this.remainingTime = 0;
        this.init();
    }

    init() {
        // Sleep timer button
        document.getElementById('sleep-timer-btn')?.addEventListener('click', () => {
            this.showModal();
        });

        // Timer options
        document.querySelectorAll('.timer-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const minutes = parseInt(e.currentTarget.dataset.minutes);
                this.setTimer(minutes);
            });
        });

        // Cancel button
        document.getElementById('cancel-timer')?.addEventListener('click', () => {
            this.hideModal();
        });

        // Click outside modal to close
        document.getElementById('sleep-timer-modal')?.addEventListener('click', (e) => {
            if (e.target.id === 'sleep-timer-modal') {
                this.hideModal();
            }
        });
    }

    showModal() {
        const modal = document.getElementById('sleep-timer-modal');
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('fade-in');
        }
    }

    hideModal() {
        const modal = document.getElementById('sleep-timer-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    setTimer(minutes) {
        // Clear existing timer
        if (this.timerId) {
            clearTimeout(this.timerId);
        }

        // Set new timer
        this.remainingTime = minutes;
        const milliseconds = minutes * 60 * 1000;

        this.timerId = setTimeout(() => {
            this.onTimerComplete();
        }, milliseconds);

        // Update UI
        this.updateTimerDisplay();
        this.hideModal();

        console.log(`Sleep timer set for ${minutes} minutes`);
    }

    onTimerComplete() {
        console.log('Sleep timer complete - stopping playback');

        // Fade out and stop audio
        if (window.audioPlayer) {
            window.audioPlayer.fadeOutAndStop();
        }

        // Reset timer
        this.timerId = null;
        this.remainingTime = 0;
        this.updateTimerDisplay();

        // Show notification (if supported)
        this.showNotification();
    }

    updateTimerDisplay() {
        const timerText = document.getElementById('sleep-timer-text');

        if (this.remainingTime > 0) {
            timerText.textContent = `${this.remainingTime} min`;
        } else {
            timerText.textContent = 'Sleep Timer';
        }
    }

    showNotification() {
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('AI ASMR', {
                body: 'Sleep timer complete. Sweet dreams! 😴',
                icon: '/assets/icons/icon-192.png'
            });
        }
    }

    cancelTimer() {
        if (this.timerId) {
            clearTimeout(this.timerId);
            this.timerId = null;
            this.remainingTime = 0;
            this.updateTimerDisplay();
            console.log('Sleep timer cancelled');
        }
    }

    getRemainingTime() {
        return this.remainingTime;
    }
}

// Initialize sleep timer
document.addEventListener('DOMContentLoaded', () => {
    window.sleepTimer = new SleepTimer();
});
