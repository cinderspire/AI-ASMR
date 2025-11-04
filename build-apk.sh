#!/bin/bash

# AI ASMR - Android APK Build Script
# Bu script APK build sürecini otomatikleştirir

set -e  # Hata durumunda dur

echo "🚀 AI ASMR - Android APK Build Başlatılıyor..."
echo ""

# Renk kodları
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Node modules kontrolü
echo -e "${BLUE}📦 Bağımlılıklar kontrol ediliyor...${NC}"
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}⚠️  node_modules bulunamadı. npm install çalıştırılıyor...${NC}"
    npm install
else
    echo -e "${GREEN}✓ node_modules mevcut${NC}"
fi

# 2. www dizini kontrolü
echo -e "${BLUE}📁 Web assets kontrol ediliyor...${NC}"
if [ ! -d "www" ]; then
    echo -e "${RED}✗ www dizini bulunamadı!${NC}"
    echo -e "${YELLOW}Lütfen önce 'npx cap sync' çalıştırın${NC}"
    exit 1
else
    echo -e "${GREEN}✓ www dizini mevcut${NC}"
fi

# 3. Android platformu kontrolü
echo -e "${BLUE}🤖 Android platformu kontrol ediliyor...${NC}"
if [ ! -d "android" ]; then
    echo -e "${YELLOW}⚠️  Android platformu bulunamadı. Ekleniyor...${NC}"
    npx cap add android
else
    echo -e "${GREEN}✓ Android platformu mevcut${NC}"
fi

# 4. Capacitor Sync
echo -e "${BLUE}🔄 Capacitor sync çalıştırılıyor...${NC}"
npx cap sync android
echo -e "${GREEN}✓ Sync tamamlandı${NC}"

# 5. APK Build
echo ""
echo -e "${BLUE}🔨 APK Build başlatılıyor...${NC}"
echo -e "${YELLOW}Bu işlem birkaç dakika sürebilir...${NC}"
echo ""

cd android

# Gradle wrapper kontrolü
if [ -f "gradlew" ]; then
    chmod +x gradlew
    BUILD_CMD="./gradlew"
else
    # System gradle kullan
    if command -v gradle &> /dev/null; then
        BUILD_CMD="gradle"
    else
        echo -e "${RED}✗ Gradle bulunamadı!${NC}"
        echo -e "${YELLOW}Lütfen Android Studio veya Gradle yükleyin${NC}"
        exit 1
    fi
fi

# Clean build (opsiyonel)
echo -e "${BLUE}🧹 Önceki build temizleniyor...${NC}"
$BUILD_CMD clean

# Debug APK build
echo -e "${BLUE}🔨 Debug APK build ediliyor...${NC}"
$BUILD_CMD assembleDebug

cd ..

# 6. APK konumunu bul ve göster
APK_PATH="android/app/build/outputs/apk/debug/app-debug.apk"

if [ -f "$APK_PATH" ]; then
    echo ""
    echo -e "${GREEN}╔════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║                                                ║${NC}"
    echo -e "${GREEN}║  ✅ APK BUILD BAŞARILI!                        ║${NC}"
    echo -e "${GREEN}║                                                ║${NC}"
    echo -e "${GREEN}╚════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${BLUE}📱 APK Konumu:${NC}"
    echo -e "   ${APK_PATH}"
    echo ""

    # APK boyutunu göster
    APK_SIZE=$(du -h "$APK_PATH" | cut -f1)
    echo -e "${BLUE}📊 APK Boyutu:${NC} ${APK_SIZE}"
    echo ""

    # ADB ile kurulum talimatı
    echo -e "${YELLOW}📲 Android cihaza kurmak için:${NC}"
    echo -e "   adb install ${APK_PATH}"
    echo ""

    # Release build önerisi
    echo -e "${YELLOW}💡 İpucu:${NC} Release APK için:"
    echo -e "   cd android && $BUILD_CMD assembleRelease"
    echo ""

else
    echo ""
    echo -e "${RED}✗ APK bulunamadı!${NC}"
    echo -e "${YELLOW}Build log'larını kontrol edin${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 İşlem tamamlandı!${NC}"
echo ""
