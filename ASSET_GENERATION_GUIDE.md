# 🎨 AI ASMR - Asset Generation Guide

Complete guide to creating all required icons, screenshots, and graphics for Play Store launch.

---

## 📋 REQUIRED ASSETS CHECKLIST

### ✅ Icons (PNG format)
- [ ] icon-72.png (72x72 px)
- [ ] icon-96.png (96x96 px)
- [ ] icon-128.png (128x128 px)
- [ ] icon-144.png (144x144 px)
- [ ] icon-152.png (152x152 px)
- [ ] icon-192.png (192x192 px)
- [ ] icon-384.png (384x384 px)
- [ ] icon-512.png (512x512 px) - **Play Store requirement**

### ✅ Play Store Graphics
- [ ] Feature Graphic (1024x500 px)
- [ ] Promo Graphic (optional, 180x120 px)
- [ ] TV Banner (optional, 1280x720 px)

### ✅ Screenshots
- [ ] Phone Screenshot 1 (1080x1920 px minimum)
- [ ] Phone Screenshot 2 (1080x1920 px minimum)
- [ ] Phone Screenshot 3 (1080x1920 px) - Recommended
- [ ] Phone Screenshot 4-8 (1080x1920 px) - Optional

### ✅ Thumbnail Images (for track listings)
- [ ] 40 track thumbnails (300x300 px)

---

## 🖼️ METHOD 1: Convert SVG to PNG Icons (RECOMMENDED)

### Option A: Online Tools (Easiest)

**Using icon.kitchen (Best for app icons):**

1. Go to https://icon.kitchen/
2. Upload `resources/icon.svg`
3. Customize:
   - Shape: Square/Circle
   - Background: Transparent or colored
   - Padding: 10-15%
4. Download "Android" package
5. Extract all mipmap folders to `android/app/src/main/res/`

**Using CloudConvert:**

1. Go to https://cloudconvert.com/svg-to-png
2. Upload `resources/icon.svg`
3. Click "Options" → Set dimensions:
   - 72x72, 96x96, 128x128, etc.
4. Convert and download
5. Move to `www/assets/icons/`

### Option B: Command Line (For Developers)

**Install ImageMagick:**
```bash
# macOS
brew install imagemagick

# Ubuntu/Debian
sudo apt-get install imagemagick

# Windows
# Download from https://imagemagick.org/
```

**Convert Script:**
```bash
#!/bin/bash
# Run from project root

cd resources

# Generate all icon sizes
convert icon.svg -resize 72x72 ../www/assets/icons/icon-72.png
convert icon.svg -resize 96x96 ../www/assets/icons/icon-96.png
convert icon.svg -resize 128x128 ../www/assets/icons/icon-128.png
convert icon.svg -resize 144x144 ../www/assets/icons/icon-144.png
convert icon.svg -resize 152x152 ../www/assets/icons/icon-152.png
convert icon.svg -resize 192x192 ../www/assets/icons/icon-192.png
convert icon.svg -resize 384x384 ../www/assets/icons/icon-384.png
convert icon.svg -resize 512x512 ../www/assets/icons/icon-512.png

echo "✓ All PNG icons generated!"
```

Save as `scripts/generate-icons.sh` and run:
```bash
chmod +x scripts/generate-icons.sh
./scripts/generate-icons.sh
```

### Option C: Node.js Script

**Install package:**
```bash
npm install --save-dev sharp
```

**Create script `scripts/generate-icons.js`:**
```javascript
const sharp = require('sharp');
const fs = require('fs');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputSVG = 'resources/icon.svg';
const outputDir = 'www/assets/icons';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

sizes.forEach(size => {
    sharp(inputSVG)
        .resize(size, size)
        .png()
        .toFile(`${outputDir}/icon-${size}.png`)
        .then(() => console.log(`✓ Generated icon-${size}.png`))
        .catch(err => console.error(`✗ Error generating icon-${size}.png:`, err));
});
```

**Run:**
```bash
node scripts/generate-icons.js
```

---

## 📸 METHOD 2: Create Screenshots

### Option A: Using Android Emulator (Recommended)

**Setup:**
1. Open Android Studio
2. Run app: `npm run open:android`
3. Launch emulator: Pixel 6 (1080x2340 resolution)

**Capture Screenshots:**
```bash
# Take screenshots from running emulator
adb shell screencap -p /sdcard/screenshot1.png
adb pull /sdcard/screenshot1.png www/assets/screenshots/welcome.png

adb shell screencap -p /sdcard/screenshot2.png
adb pull /sdcard/screenshot2.png www/assets/screenshots/player.png

adb shell screencap -p /sdcard/screenshot3.png
adb pull /sdcard/screenshot3.png www/assets/screenshots/categories.png
```

**Or use Android Studio:**
1. Click camera icon in emulator toolbar
2. Save screenshots
3. Resize to 1080x1920 if needed

### Option B: Using Real Device

1. Connect Android device via USB
2. Enable USB debugging
3. Run: `npm run open:android`
4. Take screenshots with device buttons (Power + Volume Down)
5. Transfer to computer
6. Resize to 1080x1920 px

### Option C: Browser Screenshots + Editing

1. Run: `npm run dev`
2. Open http://localhost:8080
3. Open browser DevTools (F12)
4. Toggle device toolbar (Ctrl+Shift+M)
5. Select "Pixel 5" or custom 1080x1920
6. Navigate through app screens
7. Take screenshots (browser screenshot tool)
8. Edit in Photoshop/Figma to add device frame

**Required Screenshots:**
1. **Welcome Screen** - Opening screen with "Immersive ASMR"
2. **Player Screen** - Audio player with controls
3. **Categories Screen** - 4 category cards
4. **Sleep Timer Modal** - Timer selection screen
5. **Theme Comparison** - Split dark/light (optional)
6. **Favorites** - Favorites list (optional)

---

## 🎨 METHOD 3: Create Feature Graphic

### Specifications
- **Size:** 1024x500 px
- **Format:** PNG or JPEG
- **Max file size:** 1 MB
- **Purpose:** Top of Play Store listing

### Design Guidelines

**Content:**
- App icon (prominent)
- App name: "AI ASMR"
- Tagline: "Immersive Soundscapes for Your Soul"
- Visual theme: Purple gradient, microphone, sound waves

### Tools

**Option A: Canva (Easiest)**
1. Go to https://canva.com
2. Create custom size: 1024x500 px
3. Use template or start from scratch
4. Add:
   - Dark purple gradient background (#191121 to #5e27a3)
   - Upload and place app icon
   - Text: "AI ASMR"
   - Subtitle: "Immersive ASMR for Deep Relaxation"
   - Sound wave graphics
5. Download as PNG

**Option B: Figma**
1. Create 1024x500 frame
2. Design feature graphic
3. Export as PNG

**Option C: Photoshop/GIMP**
1. New file: 1024x500 px, 72 DPI
2. Add gradient background
3. Place icon
4. Add text and effects
5. Export as PNG

### Quick Template

**Using existing SVG:**
```bash
# Extract elements from splash SVG
# Create 1024x500 canvas
# Center app icon
# Add text overlays
```

---

## 🖼️ METHOD 4: Create Track Thumbnails

### Auto-Generate Placeholder Thumbnails

**Using Placeholder Services:**

```javascript
// Generate thumbnail URLs programmatically
const categories = {
    nature: { color: '10b981', icon: '🌧️' },
    ambient: { color: '8b5cf6', icon: '🎵' },
    gaming: { color: 'f59e0b', icon: '🎮' },
    ai: { color: 'ec4899', icon: '🤖' }
};

tracks.forEach(track => {
    const { color } = categories[track.category];
    track.thumbnail = `https://via.placeholder.com/300x300/${color}/FFFFFF?text=${encodeURIComponent(track.title)}`;
});
```

### Manual Creation

**Using Unsplash (Free stock photos):**
1. Go to https://unsplash.com
2. Search for each theme:
   - "rain" for rain tracks
   - "ocean waves" for ocean tracks
   - "forest" for forest tracks
   - etc.
3. Download 300x300 px versions
4. Save to `www/assets/thumbnails/`

**Using Midjourney/DALL-E:**
1. Generate AI art for each category
2. Prompt examples:
   - "peaceful rain drops on leaves, minimalist, purple theme"
   - "abstract ocean waves, calming, purple gradient"
3. Download and resize to 300x300 px

---

## 📦 AUTOMATED SETUP SCRIPT

Create `scripts/setup-assets.sh`:

```bash
#!/bin/bash

echo "🎨 AI ASMR - Asset Setup Script"
echo "================================"
echo ""

# Create directories
mkdir -p www/assets/icons
mkdir -p www/assets/screenshots
mkdir -p www/assets/thumbnails
mkdir -p www/assets/store

echo "✓ Created asset directories"
echo ""

# Check for ImageMagick
if command -v convert &> /dev/null; then
    echo "✓ ImageMagick found - generating PNG icons..."

    cd resources
    convert icon.svg -resize 72x72 ../www/assets/icons/icon-72.png
    convert icon.svg -resize 96x96 ../www/assets/icons/icon-96.png
    convert icon.svg -resize 128x128 ../www/assets/icons/icon-128.png
    convert icon.svg -resize 144x144 ../www/assets/icons/icon-144.png
    convert icon.svg -resize 152x152 ../www/assets/icons/icon-152.png
    convert icon.svg -resize 192x192 ../www/assets/icons/icon-192.png
    convert icon.svg -resize 384x384 ../www/assets/icons/icon-384.png
    convert icon.svg -resize 512x512 ../www/assets/icons/icon-512.png
    cd ..

    echo "✓ Generated 8 PNG icons"
else
    echo "⚠ ImageMagick not found. Please install or use online tool."
    echo "  Install: brew install imagemagick (macOS)"
    echo "  Or use: https://cloudconvert.com/svg-to-png"
fi

echo ""
echo "📋 Next steps:"
echo "  1. Take 2-8 app screenshots (1080x1920 px)"
echo "  2. Create feature graphic (1024x500 px)"
echo "  3. Generate track thumbnails (optional)"
echo ""
echo "See ASSET_GENERATION_GUIDE.md for detailed instructions."
```

**Run:**
```bash
chmod +x scripts/setup-assets.sh
./scripts/setup-assets.sh
```

---

## ✅ VERIFICATION CHECKLIST

After generating all assets:

```bash
# Check icon files
ls -lh www/assets/icons/*.png

# Should show:
# icon-72.png, icon-96.png, icon-128.png, icon-144.png
# icon-152.png, icon-192.png, icon-384.png, icon-512.png

# Check screenshots
ls -lh www/assets/screenshots/*.png

# Should show at least:
# welcome.png, player.png

# Check feature graphic
ls -lh www/assets/store/feature-graphic.png
```

---

## 🚀 QUICK START (5 minutes)

**Minimum viable assets for testing:**

1. **Icons:** Use https://icon.kitchen/ → upload SVG → download Android package
2. **Screenshots:** Run emulator → take 2 screenshots → resize to 1080x1920
3. **Feature Graphic:** Use Canva → 1024x500 template → add icon + text
4. **Done!** You can now submit to Play Store

---

## 📞 Resources

**Icon Tools:**
- https://icon.kitchen/ (Best for app icons)
- https://cloudconvert.com/svg-to-png
- https://easyappicon.com/

**Screenshot Tools:**
- Android Studio Emulator
- Figma (for mockups)
- https://mockuphone.com/

**Design Tools:**
- https://canva.com (feature graphics)
- https://figma.com (professional design)
- https://photopea.com (free Photoshop alternative)

**Image Sources:**
- https://unsplash.com (free stock photos)
- https://pexels.com (free stock photos)
- https://flaticon.com (icons)

---

**Questions? Check PLAY_STORE_GUIDE.md for more details!**
