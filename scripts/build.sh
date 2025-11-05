#!/bin/bash

# AI ASMR - Build Script
# Builds debug or release APK/AAB for Android

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}   AI ASMR Build Script${NC}"
echo -e "${BLUE}================================${NC}"
echo ""

# Check if we're in the right directory
if [ ! -f "capacitor.config.json" ]; then
    echo -e "${RED}Error: capacitor.config.json not found${NC}"
    echo "Please run this script from the project root directory"
    exit 1
fi

# Parse build type from argument
BUILD_TYPE="${1:-debug}"

case $BUILD_TYPE in
    debug|Debug|DEBUG)
        BUILD_TYPE="debug"
        GRADLE_TASK="assembleDebug"
        echo -e "${YELLOW}Building DEBUG APK...${NC}"
        ;;
    release|Release|RELEASE)
        BUILD_TYPE="release"
        GRADLE_TASK="assembleRelease"
        echo -e "${YELLOW}Building RELEASE APK...${NC}"
        ;;
    bundle|Bundle|BUNDLE)
        BUILD_TYPE="bundle"
        GRADLE_TASK="bundleRelease"
        echo -e "${YELLOW}Building RELEASE AAB (Play Store)...${NC}"
        ;;
    *)
        echo -e "${RED}Error: Unknown build type '${BUILD_TYPE}'${NC}"
        echo "Usage: ./build.sh [debug|release|bundle]"
        exit 1
        ;;
esac

echo ""

# Step 1: Sync Capacitor
echo -e "${BLUE}Step 1: Syncing Capacitor...${NC}"
npx cap sync android
echo -e "${GREEN}✓ Capacitor synced${NC}"
echo ""

# Step 2: Build with Gradle
echo -e "${BLUE}Step 2: Building with Gradle...${NC}"
cd android

if ./gradlew ${GRADLE_TASK}; then
    echo -e "${GREEN}✓ Build successful!${NC}"
else
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
fi

cd ..
echo ""

# Step 3: Show output location
echo -e "${BLUE}================================${NC}"
echo -e "${GREEN}Build Complete!${NC}"
echo -e "${BLUE}================================${NC}"
echo ""

case $BUILD_TYPE in
    debug)
        OUTPUT_PATH="android/app/build/outputs/apk/debug/app-debug.apk"
        echo -e "${YELLOW}Debug APK location:${NC}"
        echo "  $OUTPUT_PATH"
        ;;
    release)
        OUTPUT_PATH="android/app/build/outputs/apk/release/app-release.apk"
        echo -e "${YELLOW}Release APK location:${NC}"
        echo "  $OUTPUT_PATH"
        ;;
    bundle)
        OUTPUT_PATH="android/app/build/outputs/bundle/release/app-release.aab"
        echo -e "${YELLOW}Release AAB location:${NC}"
        echo "  $OUTPUT_PATH"
        ;;
esac

# Check if file exists and show size
if [ -f "$OUTPUT_PATH" ]; then
    FILE_SIZE=$(du -h "$OUTPUT_PATH" | cut -f1)
    echo -e "${YELLOW}File size:${NC} $FILE_SIZE"
    echo ""
    echo -e "${GREEN}Ready to install or distribute!${NC}"
else
    echo -e "${RED}Warning: Output file not found at expected location${NC}"
fi

echo ""
echo -e "${BLUE}================================${NC}"

# Installation instructions
if [ "$BUILD_TYPE" = "debug" ] || [ "$BUILD_TYPE" = "release" ]; then
    echo ""
    echo -e "${YELLOW}To install on device:${NC}"
    echo "  adb install $OUTPUT_PATH"
    echo ""
    echo -e "${YELLOW}Or copy to device and install manually${NC}"
fi

if [ "$BUILD_TYPE" = "bundle" ]; then
    echo ""
    echo -e "${YELLOW}Next steps:${NC}"
    echo "  1. Go to Google Play Console"
    echo "  2. Create new release"
    echo "  3. Upload $OUTPUT_PATH"
    echo "  4. Complete store listing"
    echo "  5. Submit for review"
fi

echo ""
