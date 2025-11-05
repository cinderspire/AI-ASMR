# 🚀 AI ASMR - Quick Start Guide

Get up and running with AI ASMR in 5 minutes!

---

## 📋 What You Need

- **Node.js** v16+ ([Download](https://nodejs.org))
- **npm** (comes with Node.js)
- **Android Studio** (for Android builds) ([Download](https://developer.android.com/studio))
- **Java JDK 17** ([Download](https://adoptium.net))

---

## ⚡ Quick Setup

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-asmr.git
cd ai-asmr

# Install dependencies
npm install
```

### 2. Test in Browser

```bash
# Start development server
./scripts/dev.sh

# Or manually:
npm run dev
```

Open http://localhost:8080 in your browser!

**Note:** Native features (haptics, status bar) won't work in browser.

---

## 📱 Build for Android

### Option 1: Using Build Script (Recommended)

```bash
# Build debug APK (for testing)
./scripts/build.sh debug

# Build release APK (for distribution)
./scripts/build.sh release

# Build AAB for Play Store
./scripts/build.sh bundle
```

### Option 2: Manual Build

```bash
# Sync Capacitor
npx cap sync android

# Build
cd android
./gradlew assembleDebug

# Output: android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 📲 Install on Device

### Via ADB

```bash
# Install debug APK
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

### Via Android Studio

```bash
# Open Android Studio
npx cap open android

# Click Run button (or Shift+F10)
```

### Manual Installation

1. Copy APK to your device
2. Open file on device
3. Tap "Install"
4. (Enable "Unknown sources" if prompted)

---

## 🎯 Project Structure

```
ai-asmr/
├── www/                    # Web app (HTML/CSS/JS)
├── android/                # Android native project
├── scripts/                # Helper build scripts
├── resources/              # Master assets
└── *.md files              # Documentation
```

---

## 🛠️ Common Commands

```bash
# Development
npm run dev                    # Start dev server
./scripts/dev.sh               # Alternative dev server

# Build
./scripts/build.sh debug       # Debug APK
./scripts/build.sh release     # Release APK
./scripts/build.sh bundle      # Play Store AAB

# Maintenance
./scripts/clean.sh             # Clean builds
npx cap sync                   # Sync web → native

# Android Studio
npx cap open android           # Open in Android Studio
```

---

## 🎨 What's Included

✅ **50+ ASMR Tracks** - Nature, Ambient, Gaming, AI categories
✅ **Sleep Timer** - Auto-fade with multiple presets
✅ **Dark/Light Themes** - Toggle and persistent
✅ **Offline Mode** - Service Worker caching
✅ **Favorites** - Local storage
✅ **Beautiful UI** - Tailwind CSS
✅ **Production Ready** - Signed keystore configured

---

## 🐛 Troubleshooting

### "gradlew: command not found"

```bash
# Make gradlew executable
chmod +x android/gradlew
```

### "Network error" during build

First Gradle build needs internet to download dependencies. Ensure you're connected.

### "Keystore not found"

```bash
# Regenerate keystore
keytool -genkey -v -keystore ai-asmr.keystore \
  -alias ai-asmr -keyalg RSA -keysize 2048 \
  -validity 10000 -storepass aiasmr2024 \
  -keypass aiasmr2024 \
  -dname "CN=AI ASMR, OU=Dev, O=AI ASMR, L=City, ST=State, C=US"
```

### App shows blank screen

```bash
# Force sync
npx cap copy android
npx cap sync android
```

---

## 📚 Learn More

- **Full Build Guide**: See [BUILD.md](BUILD.md)
- **Play Store Guide**: See [PLAY_STORE_GUIDE.md](PLAY_STORE_GUIDE.md)
- **Implementation Details**: See [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)

---

## 🎓 Next Steps

### For Development

1. Edit files in `www/`
2. Run `npx cap sync android`
3. Test changes

### For Release

1. Build release APK: `./scripts/build.sh release`
2. Test on real device
3. Create Play Store assets
4. Submit to Google Play

### For Contributing

1. Create a branch
2. Make changes
3. Test thoroughly
4. Submit pull request

---

## 💡 Quick Tips

✨ **Faster Development:**
- Edit `www/index.html` for structure
- Edit `www/css/app.css` for styles
- Edit `www/js/*.js` for functionality
- Refresh browser to see changes

✨ **Database:**
- 40 tracks in `www/js/asmr-content-database.js`
- Add more tracks easily
- Supports categories, tags, metadata

✨ **Testing:**
- Test in browser first (faster)
- Then test on emulator
- Finally test on real device

---

## 🆘 Need Help?

- Check [BUILD.md](BUILD.md) for detailed instructions
- Check [Capacitor Docs](https://capacitorjs.com/docs)
- Check [Android Developer Guide](https://developer.android.com)

---

## ✅ Quick Checklist

Before submitting to Play Store:

- [ ] Test all features
- [ ] Build release APK
- [ ] Test on multiple devices
- [ ] Create app icon (512x512 PNG)
- [ ] Take screenshots (4-8 images)
- [ ] Create feature graphic (1024x500)
- [ ] Write store description
- [ ] Create privacy policy
- [ ] Set up Google Play account

---

**Ready to build? Let's go! 🚀**

```bash
./scripts/build.sh debug
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

**Happy coding! 💜**
