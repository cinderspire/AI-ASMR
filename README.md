# AI ASMR - Immersive Relaxation Experience 🎧

Complete AI-powered ASMR mobile application with personalized soundscapes, interactive gaming experiences, and curated content for deep relaxation and tingles.

## 🌟 Features

### 🎵 Core Components

1. **ASMR Player** - Full-featured audio player with real ASMR tracks
   - 50+ curated ASMR audio tracks
   - Categories: Nature, Whispering, Tapping, Eating, Roleplay
   - Real-time playback controls
   - Background video support

2. **AI ASMR Generators**
   - **Galaxy Explorer**: 3D interactive galaxy with sound exploration
   - **ASMR Studio**: Custom soundscape creator with adjustable parameters

3. **Content Categories**
   - Whispering & Soft Speaking
   - Nature Sounds (Rain, Ocean, Forest)
   - Tapping & Scratching
   - Eating Sounds (Mukbang ASMR)
   - Roleplay & Personal Attention
   - No-Talking ASMR
   - Gaming ASMR
   - Binaural/3D Audio

4. **Gaming ASMR Experiences**
   - Whisper Quest: Puzzle adventure with ASMR guidance
   - Tingle Tycoon: Build your ASMR empire
   - Soundscape Safari: Explore and collect sounds

5. **Customization**
   - Adjust intensity and pacing
   - Choose sound types and mouth sounds
   - Select environments (Rainforest, Beach, Cozy Room, Cityscape)

6. **Video Content**
   - AI-generated microscope ASMR videos
   - Nature and ambient visualizations
   - YouTube integration with popular ASMR channels

7. **Favorites & Playlists**
   - Save favorite tracks
   - Create custom playlists
   - Curated collections

## 🚀 Quick Start

### Option 1: Open Directly
Open `index.html` in your browser to access the main navigation hub.

### Option 2: Local Server
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve

# Then open: http://localhost:8000
```

### Option 3: Mobile Emulator
```bash
npm run serve
# Open: http://localhost:8000/emulator.html
```

## 📁 Project Structure

```
AI-ASMR/
├── index.html                          # Main navigation hub
├── emulator.html                       # Mobile device emulator
├── js/
│   └── asmr-content-database.js       # Complete content database
├── tests/                              # Jest test suite
│   ├── welcome.test.js
│   ├── player.test.js
│   └── generator.test.js
├── welcome_to_ai_asmr/                # Welcome screen
├── asmr_player/                        # Audio player
├── ai_asmr_generator_1/               # Galaxy Explorer
├── ai_asmr_generator_2/               # ASMR Studio
├── asmr_categories/                    # Category browser
├── ai_asmr_showcase/                   # Content showcase
├── gaming_asmr_experience/            # ASMR games
├── ai_customization/                   # Settings & customization
├── asmr_universe_video_player/        # Video player
└── favorites_&_playlists/             # Saved content
```

## 🎨 Content Sources

All content is sourced from royalty-free and Creative Commons licensed platforms:

### Audio
- **Freesound.org** - Creative Commons licensed sounds
  - API integration available
  - Categories: Nature, ASMR, Ambient

- **Pixabay** - Free to use audio
  - No attribution required
  - High-quality MP3 downloads

- **Mixkit** - Free audio library
  - Royalty-free license
  - Professional sound effects

### Video
- **YouTube** - Public embed integration
  - Gibi ASMR (5M+ subscribers)
  - Tingting ASMR (2.6M+ subscribers)
  - Zach Choi ASMR (33M+ subscribers)

### Images
- **Unsplash** - Free high-resolution images
  - Nature photography
  - Abstract visualizations

## 🔧 Development

### Run Tests
```bash
npm install
npm test
npm run test:coverage
```

### Content Database
The `js/asmr-content-database.js` file contains:
- 50+ audio tracks with real URLs
- 8 ASMR categories
- 3 gaming experiences
- 3 curated playlists
- Video content library
- YouTube channel integration
- Customization presets

### API Integration

#### Freesound API
```javascript
// Get API key: https://freesound.org/apiv2/apply
const baseUrl = 'https://freesound.org/apiv2';
const searchUrl = `${baseUrl}/search/text/?query=asmr&token=YOUR_API_KEY`;
```

## 📱 Mobile Experience

Use the mobile emulator to preview all screens:
```bash
npm run serve
open http://localhost:8000/emulator.html
```

**Features:**
- Real iPhone-style frame
- All 10 screens accessible
- Keyboard shortcuts (R: refresh, A: all screens, T: tests)
- Test integration

## 🎯 2025 ASMR Trends Implemented

Based on latest research:
- ✅ Binaural/8D Audio support
- ✅ Gaming ASMR integration
- ✅ No-Talking ASMR category
- ✅ Educational content (sleep therapy)
- ✅ Sci-Fi & Fantasy roleplay themes
- ✅ Eating/Mukbang sounds
- ✅ Mental health focus

## 📊 Statistics

- **Total Components**: 10
- **Audio Tracks**: 50+
- **Categories**: 8
- **ASMR Games**: 3
- **Test Coverage**: 29 tests
- **Supported Formats**: MP3, OGG, Video (MP4, WebM)

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

All project code is available for use. Audio/video content follows respective platform licenses:
- Freesound: Creative Commons
- Pixabay: Free to use
- Mixkit: Mixkit License
- YouTube: Embedded with proper attribution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add new content to `js/asmr-content-database.js`
4. Write tests for new features
5. Submit a pull request

## 📚 Documentation

- [Test Documentation](./TEST_README.md) - Complete testing guide in Turkish
- [Content Database](./js/asmr-content-database.js) - Full content library
- [Emulator Guide](./emulator.html) - Mobile preview tool

## 💡 Future Enhancements

- [ ] User accounts and cloud sync
- [ ] AI-generated custom ASMR tracks
- [ ] Social features (share playlists)
- [ ] Offline mode with PWA
- [ ] More gaming experiences
- [ ] Integration with smart speakers

## 🔊 Popular ASMR Categories

1. **Whispering** (95% popularity) - Most common ASMR trigger
2. **Tapping** (90%) - Rhythmic sounds on surfaces
3. **Nature** (88%) - Rain, ocean, forest ambience
4. **Eating** (85%) - Mukbang and food sounds
5. **Roleplay** (82%) - Personal attention scenarios
6. **No-Talking** (80%) - Pure sound experiences
7. **Binaural** (78%) - 3D audio with headphones
8. **Gaming** (75%) - Relaxing gameplay + ASMR

---

**Built with ❤️ for relaxation and tingles**
