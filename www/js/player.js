// Audio Player Controller
class AudioPlayer {
    constructor() {
        this.isPlaying = false;
        this.currentTrack = null;
        this.audio = new Audio();
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        this.init();
    }

    init() {
        // Play/Pause button
        const playBtn = document.getElementById('play-btn');
        if (playBtn) {
            playBtn.addEventListener('click', () => {
                this.togglePlay();
            });
        }

        // Previous/Next buttons
        document.getElementById('prev-btn')?.addEventListener('click', () => {
            this.previousTrack();
        });

        document.getElementById('next-btn')?.addEventListener('click', () => {
            this.nextTrack();
        });

        // Favorite button
        document.getElementById('favorite-btn')?.addEventListener('click', () => {
            this.toggleFavorite();
        });

        // Progress bar
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.addEventListener('input', (e) => {
                const time = (e.target.value / 100) * this.audio.duration;
                this.audio.currentTime = time;
            });
        }

        // Audio events
        this.audio.addEventListener('timeupdate', () => {
            this.updateProgress();
        });

        this.audio.addEventListener('ended', () => {
            this.nextTrack();
        });

        // Load default track
        this.loadTrack({
            title: 'Peaceful Rain',
            artist: 'AI ASMR Collection',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
        });
    }

    loadTrack(track) {
        this.currentTrack = track;

        // Update UI
        document.getElementById('track-title').textContent = track.title;
        document.getElementById('track-artist').textContent = track.artist;

        // Load audio
        this.audio.src = track.url;
        this.audio.load();
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        this.audio.play();
        this.isPlaying = true;

        // Update UI
        document.getElementById('play-icon')?.classList.add('hidden');
        document.getElementById('pause-icon')?.classList.remove('hidden');
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;

        // Update UI
        document.getElementById('play-icon')?.classList.remove('hidden');
        document.getElementById('pause-icon')?.classList.add('hidden');
    }

    previousTrack() {
        console.log('Previous track');
        // TODO: Implement track navigation
    }

    nextTrack() {
        console.log('Next track');
        // TODO: Implement track navigation
    }

    toggleFavorite() {
        if (!this.currentTrack) return;

        const index = this.favorites.findIndex(f => f.title === this.currentTrack.title);

        if (index > -1) {
            this.favorites.splice(index, 1);
            console.log('Removed from favorites');
        } else {
            this.favorites.push(this.currentTrack);
            console.log('Added to favorites');
        }

        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        this.updateFavoriteUI();
    }

    updateFavoriteUI() {
        const btn = document.getElementById('favorite-btn');
        const svg = btn?.querySelector('svg');

        if (!this.currentTrack || !svg) return;

        const isFavorite = this.favorites.some(f => f.title === this.currentTrack.title);

        if (isFavorite) {
            svg.setAttribute('fill', 'currentColor');
            svg.classList.remove('text-white/70');
            svg.classList.add('text-primary');
        } else {
            svg.setAttribute('fill', 'none');
            svg.classList.remove('text-primary');
            svg.classList.add('text-white/70');
        }
    }

    updateProgress() {
        const currentTime = this.audio.currentTime;
        const duration = this.audio.duration || 0;

        if (duration > 0) {
            const percentage = (currentTime / duration) * 100;
            document.getElementById('progress-bar').value = percentage;
        }

        // Update time displays
        document.getElementById('current-time').textContent = this.formatTime(currentTime);
        document.getElementById('duration').textContent = this.formatTime(duration);
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';

        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    fadeOutAndStop() {
        const fadeInterval = setInterval(() => {
            if (this.audio.volume > 0.1) {
                this.audio.volume -= 0.1;
            } else {
                this.audio.volume = 0;
                this.pause();
                clearInterval(fadeInterval);
                // Reset volume for next play
                this.audio.volume = 1;
            }
        }, 200);
    }
}

// Initialize player
document.addEventListener('DOMContentLoaded', () => {
    window.audioPlayer = new AudioPlayer();
});
