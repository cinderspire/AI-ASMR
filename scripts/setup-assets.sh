#!/bin/bash

# AI ASMR - Asset Setup Script
# Creates directories and generates PNG icons from SVG

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}================================${NC}"
echo -e "${BLUE}   AI ASMR - Asset Setup${NC}"
echo -e "${BLUE}================================${NC}"
echo ""

# Check if we're in the right directory
if [ ! -f "capacitor.config.json" ]; then
    echo -e "${RED}Error: capacitor.config.json not found${NC}"
    echo "Please run this script from the project root directory"
    exit 1
fi

# Create asset directories
echo -e "${YELLOW}Creating asset directories...${NC}"
mkdir -p www/assets/icons
mkdir -p www/assets/screenshots
mkdir -p www/assets/thumbnails
mkdir -p www/assets/store

echo -e "${GREEN}✓ Created asset directories${NC}"
echo ""

# Check if SVG source exists
if [ ! -f "resources/icon.svg" ]; then
    echo -e "${RED}✗ Source icon not found: resources/icon.svg${NC}"
    echo "Please ensure icon.svg exists in the resources directory"
    exit 1
fi

echo -e "${GREEN}✓ Found source icon: resources/icon.svg${NC}"
echo ""

# Check for ImageMagick
if command -v convert &> /dev/null; then
    echo -e "${YELLOW}ImageMagick found - generating PNG icons...${NC}"
    echo ""

    cd resources

    # Array of icon sizes
    sizes=(72 96 128 144 152 192 384 512)

    for size in "${sizes[@]}"; do
        echo -e "${BLUE}Generating icon-${size}.png...${NC}"
        convert icon.svg -resize ${size}x${size} ../www/assets/icons/icon-${size}.png
        echo -e "${GREEN}✓ Generated icon-${size}.png${NC}"
    done

    cd ..

    echo ""
    echo -e "${GREEN}✓ Generated 8 PNG icons${NC}"
    echo ""
    echo -e "${YELLOW}Icon files:${NC}"
    ls -lh www/assets/icons/*.png

else
    echo -e "${YELLOW}⚠ ImageMagick not found${NC}"
    echo ""
    echo "PNG icon generation skipped. Please:"
    echo ""
    echo -e "${BLUE}Option 1: Install ImageMagick${NC}"
    echo "  macOS:   brew install imagemagick"
    echo "  Ubuntu:  sudo apt-get install imagemagick"
    echo "  Windows: Download from https://imagemagick.org/"
    echo ""
    echo -e "${BLUE}Option 2: Use online converter${NC}"
    echo "  • https://icon.kitchen/ (Recommended for app icons)"
    echo "  • https://cloudconvert.com/svg-to-png"
    echo "  • https://easyappicon.com/"
    echo ""
    echo -e "${BLUE}Option 3: Manual conversion${NC}"
    echo "  See ASSET_GENERATION_GUIDE.md for detailed instructions"
fi

echo ""
echo -e "${BLUE}================================${NC}"
echo -e "${YELLOW}Next Steps:${NC}"
echo ""
echo "1. ${GREEN}Icons:${NC} Generate PNG icons (if not done above)"
echo "   → See ASSET_GENERATION_GUIDE.md"
echo ""
echo "2. ${GREEN}Screenshots:${NC} Take 2-8 app screenshots (1080x1920 px)"
echo "   → Run: npm run dev"
echo "   → Or: npm run open:android"
echo "   → Use browser DevTools or Android Emulator"
echo ""
echo "3. ${GREEN}Feature Graphic:${NC} Create 1024x500 px graphic"
echo "   → Use Canva: https://canva.com"
echo "   → Or Figma: https://figma.com"
echo ""
echo "4. ${GREEN}Privacy Policy:${NC} Host PRIVACY_POLICY.md online"
echo "   → GitHub Pages, Google Sites, or custom domain"
echo "   → Get public HTTPS URL for Play Store"
echo ""
echo "5. ${GREEN}Audio Content:${NC} Replace placeholder URLs"
echo "   → Edit: www/js/asmr-content-database.js"
echo "   → Replace soundhelix.com URLs with real ASMR audio"
echo ""
echo -e "${BLUE}================================${NC}"
echo ""
echo -e "${GREEN}Setup complete!${NC} See LAUNCH_CHECKLIST.md for full details."
echo ""
