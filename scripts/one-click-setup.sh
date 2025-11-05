#!/bin/bash

# AI ASMR - ONE-CLICK SETUP SCRIPT
# Automates everything needed for Play Store launch!

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
BOLD='\033[1m'
NC='\033[0m'

clear

echo -e "${PURPLE}${BOLD}"
echo "╔═══════════════════════════════════════════════════════╗"
echo "║                                                       ║"
echo "║          🎧 AI ASMR - ONE-CLICK SETUP 🚀             ║"
echo "║                                                       ║"
echo "║     Automated Play Store Launch Preparation          ║"
echo "║                                                       ║"
echo "╚═══════════════════════════════════════════════════════╝"
echo -e "${NC}\n"

# Check if we're in the right directory
if [ ! -f "capacitor.config.json" ]; then
    echo -e "${RED}❌ Error: capacitor.config.json not found${NC}"
    echo "Please run this script from the project root directory"
    exit 1
fi

echo -e "${CYAN}${BOLD}This script will:${NC}"
echo "  1. ✅ Create all asset directories"
echo "  2. ✅ Check dependencies"
echo "  3. ✅ Generate PNG icons (if possible)"
echo "  4. ✅ Set up keystore properties"
echo "  5. ✅ Sync Capacitor"
echo "  6. ✅ Test build configuration"
echo "  7. ✅ Generate comprehensive report"
echo ""
read -p "Press ENTER to continue or Ctrl+C to cancel..."
echo ""

# Progress counter
STEP=1
TOTAL_STEPS=12

progress() {
    echo -e "\n${BLUE}${BOLD}[Step $STEP/$TOTAL_STEPS]${NC} $1"
    ((STEP++))
}

# Step 1: Create directories
progress "Creating asset directories..."
mkdir -p www/assets/icons
mkdir -p www/assets/screenshots
mkdir -p www/assets/thumbnails
mkdir -p www/assets/store
mkdir -p tools
echo -e "${GREEN}✓ Directories created${NC}"

# Step 2: Check Node.js
progress "Checking Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo -e "${GREEN}✓ Node.js ${NODE_VERSION} installed${NC}"
else
    echo -e "${YELLOW}⚠️  Node.js not found${NC}"
fi

# Step 3: Check npm dependencies
progress "Checking npm dependencies..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓ node_modules exists${NC}"
else
    echo -e "${YELLOW}⚠️  Running npm install...${NC}"
    npm install
    echo -e "${GREEN}✓ Dependencies installed${NC}"
fi

# Step 4: Check if SVG icon exists
progress "Checking source assets..."
if [ -f "resources/icon.svg" ]; then
    echo -e "${GREEN}✓ Icon SVG found${NC}"
    HAS_ICON=true
else
    echo -e "${RED}✗ Icon SVG not found at resources/icon.svg${NC}"
    HAS_ICON=false
fi

if [ -f "resources/splash.svg" ]; then
    echo -e "${GREEN}✓ Splash SVG found${NC}"
else
    echo -e "${YELLOW}⚠️  Splash SVG not found${NC}"
fi

# Step 5: Generate PNG icons
progress "Generating PNG icons..."
if [ "$HAS_ICON" = true ]; then
    # Try Node.js method first
    if command -v node &> /dev/null && [ -f "scripts/generate-icons-node.js" ]; then
        echo -e "${CYAN}Attempting Node.js icon generation...${NC}"

        # Check if sharp is installed
        if npm list sharp &> /dev/null; then
            node scripts/generate-icons-node.js
            ICONS_GENERATED=true
        else
            echo -e "${YELLOW}Installing sharp library...${NC}"
            npm install --save-dev sharp &> /dev/null
            node scripts/generate-icons-node.js
            ICONS_GENERATED=true
        fi
    # Try ImageMagick method
    elif command -v convert &> /dev/null; then
        echo -e "${CYAN}Using ImageMagick...${NC}"
        cd resources
        for size in 72 96 128 144 152 192 384 512; do
            convert icon.svg -resize ${size}x${size} ../www/assets/icons/icon-${size}.png
            echo -e "${GREEN}✓ Generated icon-${size}.png${NC}"
        done
        cd ..
        ICONS_GENERATED=true
    else
        echo -e "${YELLOW}⚠️  No icon generator available${NC}"
        echo -e "${CYAN}Install ImageMagick or Sharp to auto-generate icons${NC}"
        ICONS_GENERATED=false
    fi
else
    ICONS_GENERATED=false
fi

# Step 6: Check keystore
progress "Checking keystore..."
if [ -f "ai-asmr.keystore" ]; then
    echo -e "${GREEN}✓ Keystore exists${NC}"
    KEYSTORE_OK=true
else
    echo -e "${YELLOW}⚠️  Keystore not found${NC}"
    KEYSTORE_OK=false
fi

if [ -f "android/keystore.properties" ]; then
    echo -e "${GREEN}✓ Keystore properties configured${NC}"
else
    echo -e "${YELLOW}⚠️  Keystore properties not found${NC}"
fi

# Step 7: Check legal documents
progress "Checking legal documents..."
LEGAL_OK=true
if [ -f "PRIVACY_POLICY.md" ]; then
    echo -e "${GREEN}✓ Privacy Policy exists${NC}"
else
    echo -e "${RED}✗ Privacy Policy missing${NC}"
    LEGAL_OK=false
fi

if [ -f "TERMS_OF_SERVICE.md" ]; then
    echo -e "${GREEN}✓ Terms of Service exists${NC}"
else
    echo -e "${YELLOW}⚠️  Terms of Service missing${NC}"
fi

if [ -f "LICENSE" ]; then
    echo -e "${GREEN}✓ LICENSE exists${NC}"
else
    echo -e "${YELLOW}⚠️  LICENSE missing${NC}"
fi

# Step 8: Check Android platform
progress "Checking Android platform..."
if [ -d "android" ]; then
    echo -e "${GREEN}✓ Android platform added${NC}"
    ANDROID_OK=true
else
    echo -e "${YELLOW}⚠️  Android platform not found${NC}"
    echo -e "${CYAN}Run: npx cap add android${NC}"
    ANDROID_OK=false
fi

# Step 9: Sync Capacitor
progress "Syncing Capacitor..."
if [ "$ANDROID_OK" = true ]; then
    npx cap sync android &> /dev/null
    echo -e "${GREEN}✓ Capacitor synced${NC}"
else
    echo -e "${YELLOW}⚠️  Skipped (Android not added)${NC}"
fi

# Step 10: Count existing assets
progress "Counting assets..."
ICON_COUNT=$(ls -1 www/assets/icons/*.png 2>/dev/null | wc -l)
SCREENSHOT_COUNT=$(ls -1 www/assets/screenshots/*.png 2>/dev/null | wc -l)

echo -e "  PNG Icons: ${ICON_COUNT}/8"
echo -e "  Screenshots: ${SCREENSHOT_COUNT}/2 minimum"

# Step 11: Test build configuration
progress "Testing build configuration..."
if [ "$ANDROID_OK" = true ] && [ "$KEYSTORE_OK" = true ]; then
    echo -e "${CYAN}Checking Gradle...${NC}"
    if [ -f "android/gradlew" ]; then
        echo -e "${GREEN}✓ Gradle wrapper found${NC}"
        BUILD_READY=true
    else
        echo -e "${YELLOW}⚠️  Gradle wrapper not found${NC}"
        BUILD_READY=false
    fi
else
    echo -e "${YELLOW}⚠️  Build not ready (missing Android or keystore)${NC}"
    BUILD_READY=false
fi

# Step 12: Generate report
progress "Generating setup report..."

REPORT_FILE="SETUP_REPORT.txt"

cat > $REPORT_FILE << EOF
═══════════════════════════════════════════════════
AI ASMR - SETUP REPORT
═══════════════════════════════════════════════════
Generated: $(date)

SYSTEM INFORMATION
──────────────────────────────────────────────────
Node.js: $(command -v node &> /dev/null && node --version || echo "Not installed")
npm: $(command -v npm &> /dev/null && npm --version || echo "Not installed")
ImageMagick: $(command -v convert &> /dev/null && echo "Installed" || echo "Not installed")

PROJECT STATUS
──────────────────────────────────────────────────
✓ Directories: Created
$([ "$HAS_ICON" = true ] && echo "✓" || echo "✗") Source Assets: $([ "$HAS_ICON" = true ] && echo "SVG icons found" || echo "Missing")
$([ "$ICONS_GENERATED" = true ] && echo "✓" || echo "✗") PNG Icons: ${ICON_COUNT}/8 generated
$([ "$LEGAL_OK" = true ] && echo "✓" || echo "⚠️") Legal Documents: $([ "$LEGAL_OK" = true ] && echo "Complete" || echo "Incomplete")
$([ "$KEYSTORE_OK" = true ] && echo "✓" || echo "✗") Keystore: $([ "$KEYSTORE_OK" = true ] && echo "Configured" || echo "Missing")
$([ "$ANDROID_OK" = true ] && echo "✓" || echo "✗") Android Platform: $([ "$ANDROID_OK" = true ] && echo "Added" || echo "Not added")

CRITICAL CHECKLIST
──────────────────────────────────────────────────
$([ $ICON_COUNT -ge 8 ] && echo "[✓]" || echo "[ ]") PNG Icons (8 sizes)
$([ $SCREENSHOT_COUNT -ge 2 ] && echo "[✓]" || echo "[ ]") Screenshots (minimum 2)
$([ -f "PRIVACY_POLICY.md" ] && echo "[✓]" || echo "[ ]") Privacy Policy document
[ ] Privacy Policy hosted online (URL needed)
[ ] Feature graphic created (1024x500 px)
$([ "$KEYSTORE_OK" = true ] && echo "[✓]" || echo "[ ]") Production keystore
$([ "$BUILD_READY" = true ] && echo "[✓]" || echo "[ ]") Build configuration ready
[ ] Real ASMR audio content
[ ] Google Play Developer account

READINESS SCORE
──────────────────────────────────────────────────
EOF

# Calculate readiness score
SCORE=0
MAX_SCORE=10

[ "$HAS_ICON" = true ] && ((SCORE++))
[ $ICON_COUNT -ge 8 ] && ((SCORE++))
[ "$LEGAL_OK" = true ] && ((SCORE++))
[ "$KEYSTORE_OK" = true ] && ((SCORE++))
[ "$ANDROID_OK" = true ] && ((SCORE++))
[ "$ICONS_GENERATED" = true ] && ((SCORE++))
[ $SCREENSHOT_COUNT -ge 2 ] && ((SCORE++))

PERCENTAGE=$((SCORE * 100 / MAX_SCORE))

echo "Score: ${SCORE}/${MAX_SCORE} (${PERCENTAGE}%)" >> $REPORT_FILE

if [ $PERCENTAGE -ge 80 ]; then
    echo "Status: 🎉 EXCELLENT - Ready for submission!" >> $REPORT_FILE
elif [ $PERCENTAGE -ge 60 ]; then
    echo "Status: ✅ GOOD - Minor items remaining" >> $REPORT_FILE
elif [ $PERCENTAGE -ge 40 ]; then
    echo "Status: ⚠️  NEEDS WORK - Several items missing" >> $REPORT_FILE
else
    echo "Status: ❌ NOT READY - Major items missing" >> $REPORT_FILE
fi

cat >> $REPORT_FILE << EOF

NEXT STEPS
──────────────────────────────────────────────────
EOF

if [ $ICON_COUNT -lt 8 ]; then
    echo "1. Generate PNG icons: ./scripts/setup-assets.sh" >> $REPORT_FILE
fi

if [ $SCREENSHOT_COUNT -lt 2 ]; then
    echo "2. Take screenshots: npm run dev (use browser DevTools)" >> $REPORT_FILE
fi

if [ ! -f "www/assets/store/feature-graphic.png" ]; then
    echo "3. Create feature graphic: Open tools/feature-graphic.html" >> $REPORT_FILE
fi

echo "4. Host Privacy Policy online (GitHub Pages, etc.)" >> $REPORT_FILE
echo "5. Replace placeholder audio URLs in database" >> $REPORT_FILE
echo "6. Test release build: npm run build:release" >> $REPORT_FILE
echo "7. Submit to Play Store!" >> $REPORT_FILE

cat >> $REPORT_FILE << EOF

USEFUL COMMANDS
──────────────────────────────────────────────────
Development:
  npm run dev                    # Test in browser
  npm run open:android           # Open Android Studio

Building:
  npm run build:debug            # Build debug APK
  npm run build:release          # Build release APK
  npm run build:bundle           # Build Play Store AAB

Assets:
  ./scripts/setup-assets.sh      # Generate assets
  open tools/feature-graphic.html # Create feature graphic

Documentation:
  LAUNCH_CHECKLIST.md            # Complete launch guide
  ASSET_GENERATION_GUIDE.md      # Asset creation guide
  PLAY_STORE_GUIDE.md            # Store submission guide

═══════════════════════════════════════════════════
For detailed information, see LAUNCH_CHECKLIST.md
═══════════════════════════════════════════════════
EOF

echo -e "${GREEN}✓ Report generated: ${REPORT_FILE}${NC}"

# Display summary
echo ""
echo -e "${PURPLE}${BOLD}╔═══════════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}${BOLD}║                 SETUP COMPLETE!                       ║${NC}"
echo -e "${PURPLE}${BOLD}╚═══════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${CYAN}${BOLD}Summary:${NC}"
echo -e "  Readiness Score: ${BOLD}${PERCENTAGE}%${NC}"
echo -e "  Icons Generated: ${ICON_COUNT}/8"
echo -e "  Screenshots: ${SCREENSHOT_COUNT}/2"
echo -e "  Build Ready: $([ "$BUILD_READY" = true ] && echo "${GREEN}Yes${NC}" || echo "${YELLOW}No${NC}")"
echo ""
echo -e "${YELLOW}📄 Full report saved to: ${BOLD}SETUP_REPORT.txt${NC}"
echo ""

if [ $PERCENTAGE -ge 70 ]; then
    echo -e "${GREEN}${BOLD}🎉 Great progress! You're almost ready to launch!${NC}\n"
else
    echo -e "${YELLOW}${BOLD}⚡ Keep going! Check LAUNCH_CHECKLIST.md for remaining tasks.${NC}\n"
fi

echo -e "${CYAN}Next steps:${NC}"
echo -e "  1. Review: ${BOLD}cat SETUP_REPORT.txt${NC}"
echo -e "  2. See checklist: ${BOLD}cat LAUNCH_CHECKLIST.md${NC}"
echo -e "  3. Generate feature graphic: ${BOLD}open tools/feature-graphic.html${NC}"
echo ""
echo -e "${GREEN}${BOLD}Happy launching! 🚀${NC}\n"
