// Audio Player Controller
class AudioPlayer {
    constructor() {
        this.isPlaying = false;
        this.currentTrack = null;
        this.currentIndex = 0;
        this.playlist = [];
        this.audio = new Audio();
        this.favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        this.init();
    }

    init() {
        // Load all tracks as default playlist
        if (typeof ASMRHelpers !== 'undefined') {
            this.playlist = ASMRHelpers.getAllTracks();

            // Load first track or a random track
            if (this.playlist.length > 0) {
                this.loadTrack(this.playlist[0], 0);
            }
        }

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

        this.audio.addEventListener('error', (e) => {
            console.error('Audio error:', e);
            // Try next track on error
            setTimeout(() => this.nextTrack(), 1000);
        });
    }

    loadTrack(track, index = null) {
        if (!track) return;

        this.currentTrack = track;
        if (index !== null) {
            this.currentIndex = index;
        }

        // Update UI
        const titleEl = document.getElementById('track-title');
        const artistEl = document.getElementById('track-artist');
        const durationEl = document.getElementById('duration');

        if (titleEl) titleEl.textContent = track.title;
        if (artistEl) artistEl.textContent = track.artist;
        if (durationEl && track.duration) {
            durationEl.textContent = this.formatTime(track.duration);
        }

        // Load audio
        this.audio.src = track.url;
        this.audio.load();

        // Update favorite UI
        this.updateFavoriteUI();

        // Log track change
        console.log('Loaded track:', track.title);
    }

    loadPlaylist(tracks, startIndex = 0) {
        this.playlist = tracks;
        this.currentIndex = startIndex;
        if (tracks.length > 0) {
            this.loadTrack(tracks[startIndex], startIndex);
        }
    }

    loadCategory(category) {
        if (typeof ASMRHelpers !== 'undefined') {
            const tracks = ASMRHelpers.getByCategory(category);
            this.loadPlaylist(tracks, 0);
        }
    }

    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        if (!this.currentTrack) {
            // Load first available track
            if (this.playlist.length > 0) {
                this.loadTrack(this.playlist[0], 0);
            }
        }

        this.audio.play().catch(error => {
            console.error('Play error:', error);
        });

        this.isPlaying = true;

        // Update UI
        document.getElementById('play-icon')?.classList.add('hidden');
        document.getElementById('pause-icon')?.classList.remove('hidden');

        // Haptic feedback
        if (window.haptic) {
            window.haptic('LIGHT');
        }
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;

        // Update UI
        document.getElementById('play-icon')?.classList.remove('hidden');
        document.getElementById('pause-icon')?.classList.add('hidden');

        // Haptic feedback
        if (window.haptic) {
            window.haptic('LIGHT');
        }
    }

    previousTrack() {
        if (this.playlist.length === 0) return;

        this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
        this.loadTrack(this.playlist[this.currentIndex], this.currentIndex);

        if (this.isPlaying) {
            this.play();
        }

        // Haptic feedback
        if (window.haptic) {
            window.haptic('MEDIUM');
        }
    }

    nextTrack() {
        if (this.playlist.length === 0) return;

        this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
        this.loadTrack(this.playlist[this.currentIndex], this.currentIndex);

        if (this.isPlaying) {
            this.play();
        }

        // Haptic feedback
        if (window.haptic) {
            window.haptic('MEDIUM');
        }
    }

    toggleFavorite() {
        if (!this.currentTrack) return;

        const index = this.favorites.findIndex(f => f.id === this.currentTrack.id);

        if (index > -1) {
            this.favorites.splice(index, 1);
            console.log('Removed from favorites:', this.currentTrack.title);
        } else {
            this.favorites.push(this.currentTrack);
            console.log('Added to favorites:', this.currentTrack.title);
        }

        localStorage.setItem('favorites', JSON.stringify(this.favorites));
        this.updateFavoriteUI();

        // Haptic feedback
        if (window.haptic) {
            window.haptic('MEDIUM');
        }
    }

    updateFavoriteUI() {
        const btn = document.getElementById('favorite-btn');
        const svg = btn?.querySelector('svg');

        if (!this.currentTrack || !svg) return;

        const isFavorite = this.favorites.some(f => f.id === this.currentTrack.id);

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
            const progressBar = document.getElementById('progress-bar');
            if (progressBar) {
                progressBar.value = percentage;
            }
        }

        // Update time displays
        const currentTimeEl = document.getElementById('current-time');
        const durationEl = document.getElementById('duration');

        if (currentTimeEl) {
            currentTimeEl.textContent = this.formatTime(currentTime);
        }

        if (durationEl && duration) {
            durationEl.textContent = this.formatTime(duration);
        }
    }

    formatTime(seconds) {
        if (isNaN(seconds) || !isFinite(seconds)) return '0:00';

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

    setVolume(volume) {
        this.audio.volume = Math.max(0, Math.min(1, volume));
    }

    seek(seconds) {
        this.audio.currentTime = seconds;
    }

    getFavorites() {
        return this.favorites;
    }

    isFavorite(trackId) {
        return this.favorites.some(f => f.id === trackId);
    }
}

// Initialize player
document.addEventListener('DOMContentLoaded', () => {
    window.audioPlayer = new AudioPlayer();
});
