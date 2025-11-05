# 🎧 AI ASMR - Immersive Soundscapes for Your Soul

**AI-powered ASMR mobile application with personalized soundscapes for relaxation and calm**

[![Version](https://img.shields.io/badge/version-1.0-blue.svg)](https://github.com/yourusername/ai-asmr)
[![Platform](https://img.shields.io/badge/platform-Android%20%7C%20iOS-green.svg)](https://capacitorjs.com)
[![License](https://img.shields.io/badge/license-MIT-orange.svg)](LICENSE)

---

## 📖 Overview

AI ASMR is a modern, AI-powered mobile application that creates deeply personalized ASMR soundscapes designed to help users relax, unwind, sleep better, and find their calm. Built with Capacitor, the app runs natively on both Android and iOS platforms.

---

## ✨ Features

### 🎵 Core Features

- **AI-Powered Soundscapes** - Personalized ASMR experiences
- **50+ ASMR Tracks** - Curated library across multiple categories
- **Sleep Timer** - Auto-fade and stop for peaceful sleep
- **Dark & Light Themes** - Beautiful UI with theme toggle
- **Offline Mode** - Service Worker caching for offline use
- **Favorites** - Save and organize favorite tracks locally

### 🌟 Categories

- **Nature Sounds** 🌧️ - Rain, ocean, forest, thunderstorms
- **Ambient Music** 🎵 - Lo-fi beats, soft melodies
- **Gaming ASMR** 🎮 - Interactive sound experiences
- **AI Generated** 🤖 - Custom AI soundscapes

---

## 🚀 Quick Start

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/ai-asmr.git
cd AI-ASMR

# Install dependencies
npm install

# Run in browser
npm run dev

# Sync to Android
npx cap sync android

# Open Android Studio
npx cap open android
```

### Build Android APK

```bash
# Debug build
cd android && ./gradlew assembleDebug

# Release build (requires keystore)
cd android && ./gradlew assembleRelease
```

---

## 📁 Project Structure

```
AI-ASMR/
├── www/                    # Web application
│   ├── index.html         # Main app
│   ├── manifest.json      # PWA manifest
│   ├── sw.js             # Service worker
│   ├── css/              # Styles
│   ├── js/               # JavaScript modules
│   └── assets/           # Icons, splash screens
├── android/              # Android platform
├── resources/            # Master assets (SVG)
├── BUILD.md             # Detailed build guide
├── PLAY_STORE_GUIDE.md  # Store submission guide
└── README.md            # This file
```

---

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Styling:** Tailwind CSS
- **Mobile:** Capacitor 6
- **Platform:** Android (iOS coming soon)
- **Offline:** Service Workers
- **Build:** Gradle 8.2, npm

---

## 📱 App Information

- **Package:** com.aiasmr.app
- **Version:** 1.0 (Version Code 1)
- **Min SDK:** Android 6.0 (API 23)
- **Target SDK:** Android 14 (API 34)

---

## 🗺️ Roadmap

### ✅ Completed (v1.0)
- Custom app icon and splash screen
- 50+ ASMR soundscapes
- Sleep timer feature
- Dark/Light theme toggle
- Offline mode with Service Worker
- Production keystore and signing
- Android platform ready

### 🚧 In Progress
- Building production APK
- Google Play Store assets
- iOS platform setup

### 📋 Upcoming (v1.1)
- Firebase Analytics
- Push notifications
- More ASMR categories
- Mix multiple sounds
- User preferences sync

### 🔮 Future (v2.0+)
- Backend API
- User authentication
- Cloud sync
- Premium features
- International languages

---

## 📚 Documentation

- **[BUILD.md](BUILD.md)** - Complete build instructions
- **[PLAY_STORE_GUIDE.md](PLAY_STORE_GUIDE.md)** - Store submission guide
- **[Capacitor Docs](https://capacitorjs.com/docs)** - Framework documentation

---

## 🔐 Release Signing

Production keystore details (KEEP SECURE):

- **File:** `ai-asmr.keystore`
- **Alias:** ai-asmr
- **Store Password:** aiasmr2024
- **Key Password:** aiasmr2024
- **Validity:** 10,000 days

⚠️ **Never commit keystore to public repositories!**

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest features
- Submit pull requests
- Improve documentation

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 📞 Contact

- **Email:** support@aiasmr.app
- **Website:** https://aiasmr.app
- **Issues:** [GitHub Issues](https://github.com/yourusername/ai-asmr/issues)

---

<div align="center">

**Made with 💜 by the AI ASMR Team**

© 2024 AI ASMR. All rights reserved.

</div>
