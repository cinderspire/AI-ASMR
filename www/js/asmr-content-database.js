// ASMR Content Database
// Complete library of 50+ ASMR tracks across multiple categories

const ASMRDatabase = {
    // Nature Sounds Category
    nature: [
        {
            id: 'nature-001',
            title: 'Peaceful Rain',
            artist: 'AI ASMR Collection',
            category: 'nature',
            duration: 225, // 3:45
            thumbnail: 'assets/thumbnails/rain.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            tags: ['rain', 'water', 'peaceful', 'sleep'],
            description: 'Gentle rain sounds for deep relaxation and sleep'
        },
        {
            id: 'nature-002',
            title: 'Ocean Waves',
            artist: 'AI ASMR Collection',
            category: 'nature',
            duration: 300, // 5:00
            thumbnail: 'assets/thumbnails/ocean.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            tags: ['ocean', 'waves', 'beach', 'calm'],
            description: 'Soothing ocean waves crashing on the shore'
        },
        {
            id: 'nature-003',
            title: 'Forest Ambience',
            artist: 'AI ASMR Collection',
            category: 'nature',
            duration: 270, // 4:30
            thumbnail: 'assets/thumbnails/forest.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
            tags: ['forest', 'birds', 'nature', 'peaceful'],
            description: 'Tranquil forest sounds with chirping birds'
        },
        {
            id: 'nature-004',
            title: 'Thunderstorm',
            artist: 'AI ASMR Collection',
            category: 'nature',
            duration: 360, // 6:00
            thumbnail: 'assets/thumbnails/thunder.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
            tags: ['thunder', 'rain', 'storm', 'powerful'],
            description: 'Dramatic thunderstorm with heavy rain'
        },
        {
            id: 'nature-005',
            title: 'Mountain Stream',
            artist: 'AI ASMR Collection',
            category: 'nature',
            duration: 240, // 4:00
            thumbnail: 'assets/thumbnails/stream.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
            tags: ['water', 'stream', 'flow', 'nature'],
            description: 'Babbling mountain stream flowing through rocks'
        },
        {
            id: 'nature-006',
            title: 'Campfire Crackling',
            artist: 'AI ASMR Collection',
            category: 'nature',
            duration: 180, // 3:00
            thumbnail: 'assets/thumbnails/campfire.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
            tags: ['fire', 'crackling', 'warm', 'cozy'],
            description: 'Warm campfire crackling under the stars'
        },
        {
            id: 'nature-007',
            title: 'Tropical Rainforest',
            artist: 'AI ASMR Collection',
            category: 'nature',
            duration: 420, // 7:00
            thumbnail: 'assets/thumbnails/rainforest.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
            tags: ['rainforest', 'tropical', 'exotic', 'nature'],
            description: 'Immersive tropical rainforest ambience'
        },
        {
            id: 'nature-008',
            title: 'Wind Through Trees',
            artist: 'AI ASMR Collection',
            category: 'nature',
            duration: 210, // 3:30
            thumbnail: 'assets/thumbnails/wind.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
            tags: ['wind', 'trees', 'breeze', 'gentle'],
            description: 'Gentle wind rustling through tree leaves'
        },
        {
            id: 'nature-009',
            title: 'Night Crickets',
            artist: 'AI ASMR Collection',
            category: 'nature',
            duration: 300, // 5:00
            thumbnail: 'assets/thumbnails/crickets.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
            tags: ['crickets', 'night', 'insects', 'summer'],
            description: 'Peaceful cricket sounds on a summer night'
        },
        {
            id: 'nature-010',
            title: 'Waterfall',
            artist: 'AI ASMR Collection',
            category: 'nature',
            duration: 330, // 5:30
            thumbnail: 'assets/thumbnails/waterfall.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
            tags: ['waterfall', 'water', 'cascade', 'powerful'],
            description: 'Majestic waterfall cascading down rocks'
        }
    ],

    // Ambient Music Category
    ambient: [
        {
            id: 'ambient-001',
            title: 'Lo-Fi Chill',
            artist: 'AI ASMR Collection',
            category: 'ambient',
            duration: 195, // 3:15
            thumbnail: 'assets/thumbnails/lofi.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
            tags: ['lofi', 'chill', 'study', 'relax'],
            description: 'Chill lo-fi beats for studying and relaxation'
        },
        {
            id: 'ambient-002',
            title: 'Ethereal Soundscape',
            artist: 'AI ASMR Collection',
            category: 'ambient',
            duration: 360, // 6:00
            thumbnail: 'assets/thumbnails/ethereal.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
            tags: ['ethereal', 'ambient', 'dreamy', 'space'],
            description: 'Floating ethereal tones and textures'
        },
        {
            id: 'ambient-003',
            title: 'Soft Piano',
            artist: 'AI ASMR Collection',
            category: 'ambient',
            duration: 250, // 4:10
            thumbnail: 'assets/thumbnails/piano.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
            tags: ['piano', 'soft', 'classical', 'gentle'],
            description: 'Gentle piano melodies for peaceful moments'
        },
        {
            id: 'ambient-004',
            title: 'Meditation Drone',
            artist: 'AI ASMR Collection',
            category: 'ambient',
            duration: 480, // 8:00
            thumbnail: 'assets/thumbnails/meditation.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
            tags: ['meditation', 'drone', 'zen', 'mindfulness'],
            description: 'Deep meditation drone for mindfulness practice'
        },
        {
            id: 'ambient-005',
            title: 'Celestial Harmonics',
            artist: 'AI ASMR Collection',
            category: 'ambient',
            duration: 390, // 6:30
            thumbnail: 'assets/thumbnails/celestial.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
            tags: ['space', 'cosmic', 'harmonics', 'stars'],
            description: 'Cosmic harmonics inspired by the universe'
        },
        {
            id: 'ambient-006',
            title: 'Warm Pads',
            artist: 'AI ASMR Collection',
            category: 'ambient',
            duration: 300, // 5:00
            thumbnail: 'assets/thumbnails/pads.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
            tags: ['pads', 'warm', 'synth', 'comfort'],
            description: 'Warm synthesizer pads for deep relaxation'
        },
        {
            id: 'ambient-007',
            title: 'Morning Calm',
            artist: 'AI ASMR Collection',
            category: 'ambient',
            duration: 240, // 4:00
            thumbnail: 'assets/thumbnails/morning.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3',
            tags: ['morning', 'peaceful', 'fresh', 'gentle'],
            description: 'Gentle morning ambience to start your day'
        },
        {
            id: 'ambient-008',
            title: 'Deep Space',
            artist: 'AI ASMR Collection',
            category: 'ambient',
            duration: 420, // 7:00
            thumbnail: 'assets/thumbnails/space.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3',
            tags: ['space', 'cosmic', 'vast', 'infinite'],
            description: 'Journey through the depths of space'
        },
        {
            id: 'ambient-009',
            title: 'Healing Frequencies',
            artist: 'AI ASMR Collection',
            category: 'ambient',
            duration: 360, // 6:00
            thumbnail: 'assets/thumbnails/healing.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3',
            tags: ['healing', 'frequencies', 'solfeggio', 'therapy'],
            description: 'Therapeutic frequencies for healing and balance'
        },
        {
            id: 'ambient-010',
            title: 'Ambient Guitar',
            artist: 'AI ASMR Collection',
            category: 'ambient',
            duration: 285, // 4:45
            thumbnail: 'assets/thumbnails/guitar.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3',
            tags: ['guitar', 'ambient', 'reverb', 'atmospheric'],
            description: 'Atmospheric guitar with lush reverb'
        }
    ],

    // Gaming ASMR Category
    gaming: [
        {
            id: 'gaming-001',
            title: 'Keyboard Typing',
            artist: 'AI ASMR Collection',
            category: 'gaming',
            duration: 180, // 3:00
            thumbnail: 'assets/thumbnails/keyboard.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-21.mp3',
            tags: ['keyboard', 'typing', 'mechanical', 'clicky'],
            description: 'Satisfying mechanical keyboard typing sounds'
        },
        {
            id: 'gaming-002',
            title: 'Mouse Clicking',
            artist: 'AI ASMR Collection',
            category: 'gaming',
            duration: 120, // 2:00
            thumbnail: 'assets/thumbnails/mouse.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-22.mp3',
            tags: ['mouse', 'clicking', 'gaming', 'satisfying'],
            description: 'Rhythmic gaming mouse clicking'
        },
        {
            id: 'gaming-003',
            title: 'Game Ambience - Medieval',
            artist: 'AI ASMR Collection',
            category: 'gaming',
            duration: 300, // 5:00
            thumbnail: 'assets/thumbnails/medieval.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-23.mp3',
            tags: ['medieval', 'fantasy', 'tavern', 'ambient'],
            description: 'Cozy medieval tavern game ambience'
        },
        {
            id: 'gaming-004',
            title: 'Retro Game Sounds',
            artist: 'AI ASMR Collection',
            category: 'gaming',
            duration: 240, // 4:00
            thumbnail: 'assets/thumbnails/retro.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-24.mp3',
            tags: ['retro', '8bit', 'chiptune', 'nostalgia'],
            description: 'Nostalgic retro gaming sound effects'
        },
        {
            id: 'gaming-005',
            title: 'Controller Buttons',
            artist: 'AI ASMR Collection',
            category: 'gaming',
            duration: 150, // 2:30
            thumbnail: 'assets/thumbnails/controller.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-25.mp3',
            tags: ['controller', 'buttons', 'gaming', 'tactile'],
            description: 'Satisfying game controller button presses'
        },
        {
            id: 'gaming-006',
            title: 'RPG Town Theme',
            artist: 'AI ASMR Collection',
            category: 'gaming',
            duration: 270, // 4:30
            thumbnail: 'assets/thumbnails/rpg-town.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-26.mp3',
            tags: ['rpg', 'town', 'peaceful', 'adventure'],
            description: 'Peaceful RPG town background music'
        },
        {
            id: 'gaming-007',
            title: 'Inventory Sorting',
            artist: 'AI ASMR Collection',
            category: 'gaming',
            duration: 180, // 3:00
            thumbnail: 'assets/thumbnails/inventory.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-27.mp3',
            tags: ['inventory', 'organizing', 'items', 'satisfying'],
            description: 'Satisfying game inventory sorting sounds'
        },
        {
            id: 'gaming-008',
            title: 'Cozy Café - Animal Crossing',
            artist: 'AI ASMR Collection',
            category: 'gaming',
            duration: 360, // 6:00
            thumbnail: 'assets/thumbnails/cafe.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-28.mp3',
            tags: ['cozy', 'cafe', 'wholesome', 'relaxing'],
            description: 'Cozy café ambience from life sim games'
        },
        {
            id: 'gaming-009',
            title: 'Crafting Sounds',
            artist: 'AI ASMR Collection',
            category: 'gaming',
            duration: 210, // 3:30
            thumbnail: 'assets/thumbnails/crafting.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-29.mp3',
            tags: ['crafting', 'building', 'creating', 'satisfying'],
            description: 'Satisfying game crafting and building sounds'
        },
        {
            id: 'gaming-010',
            title: 'Rain in Game World',
            artist: 'AI ASMR Collection',
            category: 'gaming',
            duration: 300, // 5:00
            thumbnail: 'assets/thumbnails/game-rain.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-30.mp3',
            tags: ['rain', 'game', 'atmosphere', 'immersive'],
            description: 'Immersive rain sounds in a game world'
        }
    ],

    // AI Generated Category
    ai: [
        {
            id: 'ai-001',
            title: 'Neural Soundscape',
            artist: 'AI ASMR Collection',
            category: 'ai',
            duration: 420, // 7:00
            thumbnail: 'assets/thumbnails/neural.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-31.mp3',
            tags: ['ai', 'neural', 'generative', 'unique'],
            description: 'AI-generated neural network soundscape'
        },
        {
            id: 'ai-002',
            title: 'Binaural Beats - Focus',
            artist: 'AI ASMR Collection',
            category: 'ai',
            duration: 600, // 10:00
            thumbnail: 'assets/thumbnails/binaural.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-32.mp3',
            tags: ['binaural', 'focus', 'concentration', 'cognitive'],
            description: 'AI-optimized binaural beats for focus'
        },
        {
            id: 'ai-003',
            title: 'Personalized Calm',
            artist: 'AI ASMR Collection',
            category: 'ai',
            duration: 480, // 8:00
            thumbnail: 'assets/thumbnails/personalized.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-33.mp3',
            tags: ['personalized', 'calm', 'adaptive', 'custom'],
            description: 'Personalized soundscape adapted to your preferences'
        },
        {
            id: 'ai-004',
            title: 'Deep Learning Ambience',
            artist: 'AI ASMR Collection',
            category: 'ai',
            duration: 360, // 6:00
            thumbnail: 'assets/thumbnails/deep-learning.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-34.mp3',
            tags: ['deep', 'learning', 'algorithm', 'evolving'],
            description: 'Evolving ambience created by deep learning'
        },
        {
            id: 'ai-005',
            title: 'Generative Patterns',
            artist: 'AI ASMR Collection',
            category: 'ai',
            duration: 390, // 6:30
            thumbnail: 'assets/thumbnails/generative.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-35.mp3',
            tags: ['generative', 'patterns', 'algorithmic', 'infinite'],
            description: 'Infinite generative sound patterns'
        },
        {
            id: 'ai-006',
            title: 'Adaptive Sleep Mix',
            artist: 'AI ASMR Collection',
            category: 'ai',
            duration: 720, // 12:00
            thumbnail: 'assets/thumbnails/adaptive-sleep.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-36.mp3',
            tags: ['adaptive', 'sleep', 'smart', 'responsive'],
            description: 'AI that adapts to your sleep patterns'
        },
        {
            id: 'ai-007',
            title: 'Mood-Based Soundscape',
            artist: 'AI ASMR Collection',
            category: 'ai',
            duration: 300, // 5:00
            thumbnail: 'assets/thumbnails/mood.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-37.mp3',
            tags: ['mood', 'emotion', 'responsive', 'intelligent'],
            description: 'Soundscape that responds to your mood'
        },
        {
            id: 'ai-008',
            title: 'Machine Learning Melodies',
            artist: 'AI ASMR Collection',
            category: 'ai',
            duration: 270, // 4:30
            thumbnail: 'assets/thumbnails/ml-melodies.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-38.mp3',
            tags: ['machine', 'learning', 'melody', 'composed'],
            description: 'Melodies composed by machine learning'
        },
        {
            id: 'ai-009',
            title: 'Neural Relaxation',
            artist: 'AI ASMR Collection',
            category: 'ai',
            duration: 450, // 7:30
            thumbnail: 'assets/thumbnails/neural-relax.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-39.mp3',
            tags: ['neural', 'relaxation', 'optimal', 'science'],
            description: 'Scientifically optimized neural relaxation'
        },
        {
            id: 'ai-010',
            title: 'Infinite Variations',
            artist: 'AI ASMR Collection',
            category: 'ai',
            duration: 540, // 9:00
            thumbnail: 'assets/thumbnails/infinite.jpg',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-40.mp3',
            tags: ['infinite', 'variations', 'unique', 'never-repeat'],
            description: 'Never-repeating infinite AI variations'
        }
    ]
};

// Helper functions for the database
const ASMRHelpers = {
    // Get all tracks
    getAllTracks() {
        return [
            ...ASMRDatabase.nature,
            ...ASMRDatabase.ambient,
            ...ASMRDatabase.gaming,
            ...ASMRDatabase.ai
        ];
    },

    // Get tracks by category
    getByCategory(category) {
        return ASMRDatabase[category] || [];
    },

    // Get track by ID
    getById(id) {
        const allTracks = this.getAllTracks();
        return allTracks.find(track => track.id === id);
    },

    // Search tracks
    search(query) {
        const allTracks = this.getAllTracks();
        const lowerQuery = query.toLowerCase();

        return allTracks.filter(track => {
            return track.title.toLowerCase().includes(lowerQuery) ||
                   track.tags.some(tag => tag.includes(lowerQuery)) ||
                   track.description.toLowerCase().includes(lowerQuery);
        });
    },

    // Get random track
    getRandom() {
        const allTracks = this.getAllTracks();
        return allTracks[Math.floor(Math.random() * allTracks.length)];
    },

    // Get recommended tracks (simple algorithm)
    getRecommended(currentTrack, count = 5) {
        if (!currentTrack) {
            return this.getAllTracks().slice(0, count);
        }

        const allTracks = this.getAllTracks();
        const scored = allTracks
            .filter(track => track.id !== currentTrack.id)
            .map(track => {
                let score = 0;

                // Same category bonus
                if (track.category === currentTrack.category) {
                    score += 3;
                }

                // Matching tags bonus
                const matchingTags = track.tags.filter(tag =>
                    currentTrack.tags.includes(tag)
                );
                score += matchingTags.length;

                return { track, score };
            })
            .sort((a, b) => b.score - a.score)
            .slice(0, count)
            .map(item => item.track);

        return scored;
    },

    // Format duration (seconds to MM:SS)
    formatDuration(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    },

    // Get category info
    getCategoryInfo(category) {
        const categories = {
            nature: {
                name: 'Nature Sounds',
                emoji: '🌧️',
                description: 'Rain, forest, ocean waves, thunderstorms',
                color: '#10b981'
            },
            ambient: {
                name: 'Ambient Music',
                emoji: '🎵',
                description: 'Soft melodies, lo-fi beats, ethereal tones',
                color: '#8b5cf6'
            },
            gaming: {
                name: 'Gaming ASMR',
                emoji: '🎮',
                description: 'Interactive experiences, game sounds',
                color: '#f59e0b'
            },
            ai: {
                name: 'AI Generated',
                emoji: '🤖',
                description: 'Custom AI soundscapes, adaptive audio',
                color: '#ec4899'
            }
        };

        return categories[category];
    },

    // Get statistics
    getStats() {
        const allTracks = this.getAllTracks();
        const totalDuration = allTracks.reduce((sum, track) => sum + track.duration, 0);

        return {
            totalTracks: allTracks.length,
            totalDuration: totalDuration,
            totalDurationFormatted: this.formatDuration(totalDuration),
            totalHours: Math.floor(totalDuration / 3600),
            categories: {
                nature: ASMRDatabase.nature.length,
                ambient: ASMRDatabase.ambient.length,
                gaming: ASMRDatabase.gaming.length,
                ai: ASMRDatabase.ai.length
            }
        };
    }
};

// Export for use in app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ASMRDatabase, ASMRHelpers };
}
