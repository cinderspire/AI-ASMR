/**
 * AI ASMR Content Database
 * Comprehensive collection of ASMR content, categories, and media sources
 *
 * Data Sources:
 * - Freesound.org (Creative Commons)
 * - Pixabay (Free to use)
 * - Mixkit (Free License)
 * - YouTube (Public Embeds)
 */

const ASMR_CONTENT_DB = {
  // ASMR Categories based on 2025 trends
  categories: [
    {
      id: "whispering",
      name: "Whispering",
      icon: "graphic_eq",
      description: "Soft spoken words and gentle whispers",
      popularity: 95,
      color: "#8b5cf6"
    },
    {
      id: "tapping",
      name: "Tapping & Scratching",
      icon: "touch_app",
      description: "Rhythmic tapping on various surfaces",
      popularity: 90,
      color: "#ec4899"
    },
    {
      id: "nature",
      name: "Nature Sounds",
      icon: "forest",
      description: "Rain, ocean waves, forest ambience",
      popularity: 88,
      color: "#10b981"
    },
    {
      id: "eating",
      name: "Eating Sounds (Mukbang)",
      icon: "restaurant",
      description: "Gentle chewing and eating sounds",
      popularity: 85,
      color: "#f59e0b"
    },
    {
      id: "roleplay",
      name: "Roleplay & Personal Attention",
      icon: "record_voice_over",
      description: "Doctor visits, haircuts, spa treatments",
      popularity: 82,
      color: "#3b82f6"
    },
    {
      id: "no-talking",
      name: "No-Talking ASMR",
      icon: "music_note",
      description: "Pure sounds without speech",
      popularity: 80,
      color: "#6366f1"
    },
    {
      id: "gaming",
      name: "Gaming ASMR",
      icon: "sports_esports",
      description: "Relaxing gameplay with ASMR elements",
      popularity: 75,
      color: "#8b5cf6"
    },
    {
      id: "binaural",
      name: "Binaural/3D Audio",
      icon: "headphones",
      description: "Immersive 360-degree sound",
      popularity: 78,
      color: "#a855f7"
    }
  ],

  // Real ASMR Audio Tracks with free sources
  audioTracks: [
    {
      id: "rain-1",
      title: "Gentle Rain on Leaves",
      artist: "Nature ASMR",
      category: "nature",
      duration: "3:45",
      coverArt: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=400&h=400&fit=crop",
      audioUrl: "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3", // Rain sound from Pixabay
      tags: ["rain", "nature", "sleep", "relax"]
    },
    {
      id: "ocean-1",
      title: "Ocean Waves at Sunset",
      artist: "Coastal Calm",
      category: "nature",
      duration: "4:12",
      coverArt: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=400&fit=crop",
      audioUrl: "https://cdn.pixabay.com/audio/2022/03/10/audio_c8c6f5bc35.mp3", // Ocean waves from Pixabay
      tags: ["ocean", "waves", "beach", "meditation"]
    },
    {
      id: "forest-1",
      title: "Rainforest Ambience",
      artist: "Wild Nature",
      category: "nature",
      duration: "5:20",
      coverArt: "https://images.unsplash.com/photo-1511497584788-876760111969?w=400&h=400&fit=crop",
      audioUrl: "https://cdn.pixabay.com/audio/2022/03/15/audio_d0ab943fde.mp3", // Forest from Pixabay
      tags: ["forest", "birds", "nature", "ambient"]
    },
    {
      id: "whisper-1",
      title: "Soft Whispers",
      artist: "Luna Serenity",
      category: "whispering",
      duration: "3:30",
      coverArt: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop",
      audioUrl: "https://cdn.pixabay.com/audio/2023/10/25/audio_b570c09d9e.mp3", // Ambient whisper-like sound
      tags: ["whisper", "asmr", "tingles", "sleep"]
    },
    {
      id: "fire-1",
      title: "Crackling Fireplace",
      artist: "Cozy Corner",
      category: "no-talking",
      duration: "6:00",
      coverArt: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop",
      audioUrl: "https://cdn.pixabay.com/audio/2022/03/24/audio_f36e27c4d3.mp3", // Fire crackling from Pixabay
      tags: ["fire", "crackling", "cozy", "winter"]
    },
    {
      id: "keyboard-1",
      title: "Mechanical Keyboard Typing",
      artist: "Tech ASMR",
      category: "tapping",
      duration: "2:45",
      coverArt: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop",
      audioUrl: "https://cdn.pixabay.com/audio/2022/11/22/audio_5c1f40e13f.mp3", // Typing sound from Pixabay
      tags: ["keyboard", "typing", "mechanical", "tech"]
    }
  ],

  // YouTube ASMR Channels (Public Embeds)
  youtubeChannels: [
    {
      id: "gibi-asmr",
      name: "Gibi ASMR",
      subscribers: "5M+",
      category: "roleplay",
      channelUrl: "https://www.youtube.com/@GibiASMR",
      embedId: "KZGMpTfhnOw", // Example video ID
      description: "Professional ASMR artist known for creative roleplays"
    },
    {
      id: "tingting-asmr",
      name: "Tingting ASMR",
      subscribers: "2.6M+",
      category: "whispering",
      channelUrl: "https://www.youtube.com/@TingTing57ASMR",
      embedId: "w0AOVeUZl4s", // Example video ID
      description: "Gentle whispers and tapping videos"
    },
    {
      id: "zach-choi",
      name: "Zach Choi ASMR",
      subscribers: "33M+",
      category: "eating",
      channelUrl: "https://www.youtube.com/@ZachChoiASMR",
      embedId: "xdJokeB_5pk", // Example video ID
      description: "No-talking mukbang ASMR videos"
    }
  ],

  // ASMR Sound Presets for Generator
  soundPresets: {
    nature: [
      { name: "Gentle Breeze", intensity: 30, file: "wind-light.mp3" },
      { name: "Heavy Rain", intensity: 80, file: "rain-heavy.mp3" },
      { name: "Distant Thunder", intensity: 60, file: "thunder-distant.mp3" },
      { name: "Forest Birds", intensity: 40, file: "birds-forest.mp3" },
      { name: "Ocean Waves", intensity: 50, file: "ocean-waves.mp3" }
    ],
    urban: [
      { name: "Café Ambience", intensity: 45, file: "cafe.mp3" },
      { name: "City Rain", intensity: 55, file: "city-rain.mp3" },
      { name: "Distant Traffic", intensity: 35, file: "traffic.mp3" }
    ],
    cozy: [
      { name: "Crackling Fire", intensity: 50, file: "fire.mp3" },
      { name: "Cat Purring", intensity: 25, file: "cat-purr.mp3" },
      { name: "Book Pages", intensity: 30, file: "pages.mp3" }
    ],
    mystic: [
      { name: "Tibetan Bowls", intensity: 40, file: "bowls.mp3" },
      { name: "Wind Chimes", intensity: 35, file: "chimes.mp3" },
      { name: "Meditation Bells", intensity: 30, file: "bells.mp3" }
    ]
  },

  // Gaming ASMR Experiences
  gamingASMR: [
    {
      id: "whisper-quest",
      title: "Whisper Quest",
      description: "Embark on a quest guided by soothing whispers. Solve puzzles and uncover secrets in a world of gentle sounds.",
      thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&h=400&fit=crop",
      category: "adventure",
      rating: 4.8,
      new: true
    },
    {
      id: "tingle-tycoon",
      title: "Tingle Tycoon",
      description: "Build your ASMR empire! Manage resources, create relaxing environments, and attract a loyal following.",
      thumbnail: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=400&fit=crop",
      category: "simulation",
      rating: 4.6,
      new: false
    },
    {
      id: "soundscape-safari",
      title: "Soundscape Safari",
      description: "Explore diverse soundscapes, from rainforests to bustling cities. Collect unique sounds and create your own ASMR mixes.",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=400&fit=crop",
      category: "exploration",
      rating: 4.7,
      new: false
    }
  ],

  // Freesound API Integration (requires API key)
  freesoundAPI: {
    baseUrl: "https://freesound.org/apiv2",
    searchEndpoint: "/search/text/",
    downloadEndpoint: "/sounds/",
    // Note: Users need to get their own API key from https://freesound.org/apiv2/apply
    apiKeyNeeded: true,
    popularSearches: [
      "asmr whisper",
      "rain nature",
      "tapping wood",
      "ocean waves",
      "fire crackling",
      "keyboard typing",
      "water drops",
      "wind chimes"
    ]
  },

  // Customization Options
  customizationOptions: {
    intensity: {
      min: 0,
      max: 100,
      default: 50,
      description: "Overall strength of ASMR experience"
    },
    pacing: {
      min: 0,
      max: 100,
      default: 75,
      description: "Speed and rhythm of triggers"
    },
    soundTypes: [
      { id: "whispering", label: "Whispering" },
      { id: "tapping", label: "Tapping" },
      { id: "crinkling", label: "Crinkling" },
      { id: "soft-speaking", label: "Soft Speaking" }
    ],
    mouthSounds: [
      { id: "light-whispers", label: "Light Whispers" },
      { id: "gentle-clicks", label: "Gentle Clicks" },
      { id: "soft-breathing", label: "Soft Breathing" },
      { id: "inaudible", label: "Inaudible" }
    ],
    environments: [
      { id: "rainforest", label: "Rainforest", sound: "forest-ambience.mp3" },
      { id: "cozy-room", label: "Cozy Room", sound: "room-tone.mp3" },
      { id: "beach", label: "Beach", sound: "beach-waves.mp3" },
      { id: "cityscape", label: "Cityscape", sound: "city-ambience.mp3" }
    ]
  },

  // Playlists & Collections
  playlists: [
    {
      id: "sleep-sounds",
      name: "Deep Sleep Journey",
      description: "Curated sounds for restful sleep",
      coverArt: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=400&fit=crop",
      trackIds: ["rain-1", "ocean-1", "fire-1"],
      duration: "45:00",
      plays: 15420
    },
    {
      id: "focus-flow",
      name: "Focus & Flow",
      description: "Enhance concentration with gentle sounds",
      coverArt: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=400&fit=crop",
      trackIds: ["forest-1", "keyboard-1"],
      duration: "30:15",
      plays: 8932
    },
    {
      id: "nature-escape",
      name: "Nature Escape",
      description: "Immerse yourself in natural soundscapes",
      coverArt: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop",
      trackIds: ["rain-1", "ocean-1", "forest-1"],
      duration: "52:30",
      plays: 12847
    }
  ],

  // Video Content
  videoContent: [
    {
      id: "microscope-bee",
      title: "ASMR Microscope Bee Wings",
      description: "Experience the intricate details of bee wings under a microscope, enhanced with soothing ASMR sounds.",
      thumbnail: "https://images.unsplash.com/photo-1563281577-a7be47e20db9?w=800&h=450&fit=crop",
      creator: "AI ASMR Universe",
      views: "1.2M",
      likes: 1200,
      duration: "5:45",
      category: "microscope"
    },
    {
      id: "tree-microscope",
      title: "AI ASMR Tree Microscope",
      description: "Explore the microscopic world of tree bark with all ASMR sounds included.",
      thumbnail: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=450&fit=crop",
      creator: "AI ASMR Universe",
      views: "850K",
      likes: 890,
      duration: "4:30",
      category: "microscope"
    },
    {
      id: "water-droplets",
      title: "ASMR Water Droplets",
      description: "Mesmerizing water droplet movements with calming sound design.",
      thumbnail: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=800&h=450&fit=crop",
      creator: "AI ASMR Universe",
      views: "2.1M",
      likes: 2100,
      duration: "6:20",
      category: "nature"
    }
  ]
};

// Utility Functions
const ASMRUtils = {
  // Get tracks by category
  getTracksByCategory(categoryId) {
    return ASMR_CONTENT_DB.audioTracks.filter(track => track.category === categoryId);
  },

  // Get random track
  getRandomTrack() {
    const tracks = ASMR_CONTENT_DB.audioTracks;
    return tracks[Math.floor(Math.random() * tracks.length)];
  },

  // Search content
  searchContent(query) {
    const lowerQuery = query.toLowerCase();
    return ASMR_CONTENT_DB.audioTracks.filter(track =>
      track.title.toLowerCase().includes(lowerQuery) ||
      track.tags.some(tag => tag.includes(lowerQuery))
    );
  },

  // Get playlist tracks
  getPlaylistTracks(playlistId) {
    const playlist = ASMR_CONTENT_DB.playlists.find(p => p.id === playlistId);
    if (!playlist) return [];

    return playlist.trackIds.map(id =>
      ASMR_CONTENT_DB.audioTracks.find(track => track.id === id)
    ).filter(Boolean);
  },

  // Format duration
  formatDuration(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ASMR_CONTENT_DB, ASMRUtils };
}
