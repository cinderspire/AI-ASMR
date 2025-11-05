# 🛠️ AI ASMR - Build Instructions

Complete guide to building and deploying the AI ASMR mobile application.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Setup](#project-setup)
3. [Building for Android](#building-for-android)
4. [Building for iOS](#building-for-ios)
5. [Testing](#testing)
6. [Production Release](#production-release)
7. [Troubleshooting](#troubleshooting)

---

## ✅ Prerequisites

### Required Software

- **Node.js** v16 or higher
- **npm** v8 or higher
- **Java JDK** 17 (for Android)
- **Android Studio** (for Android development)
- **Xcode** 14+ (for iOS development - macOS only)

### Android Development

```bash
# Verify Java installation
java -version

# Should show JDK 17 or higher
```

### iOS Development (macOS only)

```bash
# Install Xcode from App Store
# Install CocoaPods
sudo gem install cocoapods
```

---

## 🚀 Project Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Verify Capacitor

```bash
npx cap doctor
```

### 3. Build Web Assets

```bash
# The www directory already contains the built web app
# If you make changes to web code, just refresh the www folder
```

---

## 🤖 Building for Android

### Debug Build (for testing)

```bash
# Sync web code to Android
npx cap sync android

# Open in Android Studio
npx cap open android

# OR build from command line
cd android
./gradlew assembleDebug

# Output: android/app/build/outputs/apk/debug/app-debug.apk
```

### Release Build (for production)

**Prerequisites:** Keystore file must exist at `ai-asmr.keystore`

```bash
# Sync latest changes
npx cap sync android

# Build release APK
cd android
./gradlew assembleRelease

# Output: android/app/build/outputs/apk/release/app-release.apk
```

### Build AAB (for Play Store)

```bash
cd android
./gradlew bundleRelease

# Output: android/app/build/outputs/bundle/release/app-release.aab
```

---

## 🍎 Building for iOS

### Prerequisites

```bash
# Add iOS platform
npm install @capacitor/ios
npx cap add ios
```

### Debug Build

```bash
# Sync web code to iOS
npx cap sync ios

# Open in Xcode
npx cap open ios

# Build and run from Xcode
# Select device/simulator and click Run (⌘R)
```

### Release Build

1. Open project in Xcode: `npx cap open ios`
2. Select **Product** → **Archive**
3. Follow Xcode distribution wizard
4. Upload to App Store Connect

---

## 🧪 Testing

### Test in Browser

```bash
npm run dev

# Opens http://localhost:8080
# Note: Capacitor plugins won't work in browser
```

### Test on Android Device

```bash
# Enable USB debugging on device
# Connect via USB

# Install debug APK
adb install android/app/build/outputs/apk/debug/app-debug.apk

# OR use Android Studio to run directly
npx cap open android
# Click Run button
```

### Test on iOS Device

```bash
# Open in Xcode
npx cap open ios

# Select your device
# Click Run button
# May need Apple Developer account for device testing
```

---

## 📦 Production Release

### Android Release Checklist

- [ ] Update version in `android/app/build.gradle`:
  ```gradle
  versionCode 1  // Increment for each release
  versionName "1.0"
  ```

- [ ] Ensure keystore exists: `ai-asmr.keystore`

- [ ] Build release APK/AAB:
  ```bash
  cd android
  ./gradlew bundleRelease
  ```

- [ ] Test release build on device

- [ ] Upload to Google Play Console

### iOS Release Checklist

- [ ] Update version in Xcode project settings

- [ ] Configure signing with Developer certificate

- [ ] Archive and upload to App Store Connect

- [ ] Submit for review

---

## 🔧 Troubleshooting

### Gradle Build Fails

**Issue:** Network errors or dependency issues

**Solution:**
```bash
# Clean build
cd android
./gradlew clean

# Clear Gradle cache
rm -rf ~/.gradle/caches/

# Rebuild
./gradlew assembleDebug
```

### Capacitor Sync Errors

**Issue:** Assets not copying

**Solution:**
```bash
# Remove and re-add platform
npx cap remove android
npx cap add android
npx cap sync android
```

### Keystore Not Found

**Issue:** Release build can't find keystore

**Solution:**
```bash
# Verify keystore exists
ls -la ai-asmr.keystore

# If missing, regenerate:
keytool -genkey -v -keystore ai-asmr.keystore \
  -alias ai-asmr -keyalg RSA -keysize 2048 \
  -validity 10000 -storepass aiasmr2024 -keypass aiasmr2024 \
  -dname "CN=AI ASMR, OU=Development, O=AI ASMR, L=City, ST=State, C=US"
```

### WebView Not Loading

**Issue:** App shows blank screen

**Solution:**
```bash
# Check capacitor.config.json webDir is correct
# Ensure www folder has index.html

# Force sync
npx cap copy android
npx cap sync android --deployment
```

---

## 📱 APK Installation

### Install Debug APK

```bash
# Via ADB
adb install app-debug.apk

# Via file manager
# Copy APK to device
# Open and install (enable "Unknown sources" in settings)
```

### Install Release APK

```bash
# Same as debug
adb install app-release.apk
```

---

## 🔐 Keystore Information

**Location:** `ai-asmr.keystore` (project root)

**Details:**
- Alias: `ai-asmr`
- Store Password: `aiasmr2024`
- Key Password: `aiasmr2024`
- Validity: 10,000 days

⚠️ **IMPORTANT:** Keep keystore and passwords secure! Never commit to public repositories!

---

## 📊 App Information

- **Package ID:** `com.aiasmr.app`
- **App Name:** AI ASMR
- **Version:** 1.0
- **Version Code:** 1

---

## 🚀 Quick Commands

```bash
# Development
npm run dev                    # Test in browser
npx cap sync                   # Sync all platforms

# Android
npx cap open android           # Open Android Studio
./gradlew assembleDebug        # Build debug APK
./gradlew assembleRelease      # Build release APK
./gradlew bundleRelease        # Build release AAB

# iOS
npx cap open ios               # Open Xcode
```

---

## 📚 Additional Resources

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Android Developer Guide](https://developer.android.com/studio/build)
- [iOS Developer Guide](https://developer.apple.com/documentation)
- [Google Play Console](https://play.google.com/console)
- [App Store Connect](https://appstoreconnect.apple.com)

---

**Last Updated:** 2024-11-05
**Build Version:** 1.0
