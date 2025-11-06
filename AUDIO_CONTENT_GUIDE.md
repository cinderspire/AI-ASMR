# Audio Content Guide for AI ASMR

## Current Status

All 40 tracks currently use **placeholder URLs** from soundhelix.com. These need to be replaced with real ASMR audio content before launch.

## Options for Adding Audio Content

### Option 1: Use Royalty-Free Sources (RECOMMENDED for Quick Launch)

#### Free Sources (No Attribution Required):

1. **Pixabay Sound Effects**
   - URL: https://pixabay.com/sound-effects/search/asmr/
   - License: Free for commercial use, no attribution required
   - Formats: MP3
   - Quality: High quality
   - How to use:
     1. Search for ASMR sounds (rain, nature, ambient)
     2. Download MP3 files
     3. Host on your own server or use direct links
     4. Update `www/js/asmr-content-database.js` with URLs

2. **FreeSound**
   - URL: https://freesound.org/
   - License: Various Creative Commons licenses
   - Formats: WAV, MP3, OGG
   - Quality: Professional quality
   - Note: Check each file's license (some require attribution)

3. **Free to Use Sounds**
   - URL: https://www.freetousesounds.com/category/asmr-sound-effects/
   - License: Free for personal and commercial use
   - Categories: Nature, weather, household, special effects

4. **YouTube Audio Library**
   - URL: https://studio.youtube.com/
   - License: Free, some require attribution
   - Quality: Broadcast quality
   - Note: Login required, but completely free

#### Subscription Services (Better Quality):

1. **Epidemic Sound**
   - URL: https://www.epidemicsound.com/
   - Cost: ~$15/month
   - License: Full commercial rights
   - Quality: Professional studio quality

2. **AudioJungle**
   - URL: https://audiojungle.net/
   - Cost: Pay per track ($1-$50)
   - License: Commercial use
   - Quality: Very high quality

### Option 2: Record Your Own Content

#### Equipment Needed:
- USB microphone ($50-$200)
  - Blue Yeti
  - Audio-Technica AT2020
  - Rode NT-USB
- Recording software (FREE):
  - Audacity (Windows/Mac/Linux)
  - GarageBand (Mac)
  - Reaper (trial)

#### Recording Tips:
1. **Quiet environment** - Record at night, in a closet, or use sound dampening
2. **Close mic placement** - 6-12 inches from source
3. **48kHz, 24-bit** - Professional quality settings
4. **No background noise** - Turn off AC, fans, computers
5. **Multiple takes** - Record 2-3 versions of each sound

#### ASMR Sounds to Record:
- Rain sounds (use a rain stick or audio samples)
- Whispers (read calming text quietly)
- Keyboard typing
- Page turning
- Brushing sounds (makeup brushes on surfaces)
- Tapping (nails on wood, glass, metal)
- Crinkly sounds (paper, plastic)
- Water sounds (pouring, dripping)
- Wind chimes
- Nature ambience (if you have access)

### Option 3: License Professional Content

#### ASMR-Specific Services:
1. **ASMRtists on Patreon**
   - Many ASMR creators offer licensing
   - Costs vary ($50-$500 per track)
   - Professional quality

2. **Pond5**
   - URL: https://www.pond5.com/
   - Professional sound effects
   - $5-$100 per track
   - Full commercial license

## How to Update Audio URLs

### Step 1: Host Your Audio Files

#### Option A: Use GitHub (for small files < 100MB total)
```bash
# Create audio directory
mkdir -p www/assets/audio

# Copy your audio files
cp /path/to/your/audio/*.mp3 www/assets/audio/

# Access via:
# https://yourusername.github.io/AI-ASMR/www/assets/audio/track.mp3
```

#### Option B: Use Free Hosting
- **GitHub Pages** - Free, 1GB limit
- **Netlify** - Free, 100GB bandwidth/month
- **Vercel** - Free, 100GB bandwidth/month
- **Firebase Hosting** - Free tier available

#### Option C: Use CDN (for production)
- **Cloudflare R2** - Free tier: 10GB storage
- **AWS S3** - Pay per use (~$0.023 per GB)
- **Google Cloud Storage** - Similar pricing

### Step 2: Update the Database

Edit `www/js/asmr-content-database.js`:

```javascript
// Before (placeholder):
{
    id: 'nature-001',
    title: 'Peaceful Rain',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    // ...
}

// After (real audio):
{
    id: 'nature-001',
    title: 'Peaceful Rain',
    url: 'https://yourusername.github.io/AI-ASMR/www/assets/audio/peaceful-rain.mp3',
    // OR
    url: 'https://your-cdn.com/audio/peaceful-rain.mp3',
    // OR
    url: 'https://pixabay.com/audio/file-name.mp3', // Direct link if allowed
    // ...
}
```

### Step 3: Test Audio Playback

```bash
# Start local server
npm run dev

# Open browser
# http://localhost:8080

# Test:
# 1. Click on a track
# 2. Verify audio plays
# 3. Check all 40 tracks
# 4. Test offline mode
```

## Quick Start: 10-Track MVP

Instead of replacing all 40 tracks immediately, start with 10 tracks:

### Recommended Starter Set:

1. **Rain Sounds** (3-5 minutes)
   - Source: Pixabay "rain-sound-effect"
   - Category: Nature

2. **Ocean Waves** (8-10 minutes)
   - Source: FreeSound "ocean-waves-loop"
   - Category: Nature

3. **Forest Ambience** (10 minutes)
   - Source: YouTube Audio Library "forest-ambience"
   - Category: Nature

4. **Gentle Whisper** (4-6 minutes)
   - Record yourself or use Epidemic Sound
   - Category: Whispers

5. **Keyboard Typing** (5 minutes)
   - Record your own mechanical keyboard
   - Category: Ambient

6. **Crackling Fire** (12 minutes)
   - Source: Pixabay "fireplace-crackling"
   - Category: Ambient

7. **Wind Chimes** (8 minutes)
   - Source: FreeSound "wind-chimes-gentle"
   - Category: Nature

8. **Soft Piano** (6 minutes)
   - Source: YouTube Audio Library "calm-piano"
   - Category: Ambient

9. **Deep Breathing** (10 minutes)
   - Record yourself or use meditation audio
   - Category: Meditation

10. **Guided Meditation** (15 minutes)
    - Record yourself reading a script
    - Category: Meditation

### Update Only These 10 Tracks

Edit `www/js/asmr-content-database.js` and update just these 10 track URLs. Leave the other 30 as placeholders for now.

## Legal Considerations

### ✅ DO:
- Use audio from Pixabay (no attribution required)
- Use Creative Commons CC0 audio
- Use audio you recorded yourself
- Pay for licensed tracks
- Provide attribution when required

### ❌ DON'T:
- Download YouTube ASMR videos and extract audio (copyright infringement)
- Use copyrighted music without permission
- Use Spotify/Apple Music tracks (illegal)
- Download from ASMR websites without permission
- Claim others' work as your own

## File Specifications

### Recommended Audio Format:
- **Format**: MP3
- **Bitrate**: 128-192 kbps (good quality, small file size)
- **Sample Rate**: 44.1 kHz
- **Channels**: Stereo (for immersive ASMR experience)
- **File Size**: 3-5 MB per minute (at 192 kbps)

### How to Convert Audio:

Using **Audacity** (FREE):
1. File → Open (your audio file)
2. File → Export → Export as MP3
3. Quality: 192 kbps
4. Channel: Stereo
5. Sample Rate: 44100 Hz

Using **FFmpeg** (command line):
```bash
ffmpeg -i input.wav -b:a 192k -ar 44100 output.mp3
```

## Example: Complete Workflow

### 1. Find Audio (Pixabay Example)
```bash
# Go to https://pixabay.com/sound-effects/search/rain/
# Download "heavy-rain-nature-sounds.mp3"
# Save to: ~/Downloads/rain.mp3
```

### 2. Host Audio
```bash
# Copy to project
cp ~/Downloads/rain.mp3 www/assets/audio/peaceful-rain.mp3

# Commit to git
git add www/assets/audio/peaceful-rain.mp3
git commit -m "Add peaceful rain audio"
git push
```

### 3. Update Database
```javascript
// www/js/asmr-content-database.js
{
    id: 'nature-001',
    title: 'Peaceful Rain',
    artist: 'AI ASMR Collection',
    category: 'nature',
    duration: 225, // Update based on actual duration
    url: 'assets/audio/peaceful-rain.mp3', // Relative path
    thumbnail: 'assets/thumbnails/rain.jpg',
    tags: ['rain', 'water', 'peaceful', 'sleep']
}
```

### 4. Enable GitHub Pages
1. Go to repository Settings
2. Pages section
3. Source: Deploy from branch
4. Branch: your-branch-name
5. Folder: / (root)
6. Save

### 5. Access Your App
```
https://yourusername.github.io/AI-ASMR/www/
```

## Time Estimates

| Task | Time Required |
|------|---------------|
| Find 10 free audio tracks | 2-4 hours |
| Download and convert | 1 hour |
| Host on GitHub Pages | 30 minutes |
| Update database | 1 hour |
| Test all tracks | 1 hour |
| **Total for 10-track MVP** | **5-7 hours** |
| | |
| Find all 40 tracks | 8-16 hours |
| Record own content (40 tracks) | 40-80 hours |
| Professional licensing | 4-8 hours + $200-$800 |

## Recommendations

### For Immediate Launch (Today):
1. ✅ Find 10 tracks on Pixabay (2 hours)
2. ✅ Host on GitHub Pages (30 minutes)
3. ✅ Update database (1 hour)
4. ✅ Test and launch (1 hour)
**Total: 4-5 hours**

### For Quality Launch (This Week):
1. ✅ Subscribe to Epidemic Sound ($15/month)
2. ✅ Download 40 professional tracks (4 hours)
3. ✅ Host on Cloudflare R2 or Netlify (2 hours)
4. ✅ Update database (2 hours)
5. ✅ Create thumbnails (2 hours)
6. ✅ Full testing (2 hours)
**Total: 12 hours + $15**

### For Professional Launch (Next Month):
1. ✅ Record original content (40-80 hours)
2. ✅ Professional mixing/mastering (10-20 hours)
3. ✅ Professional thumbnails (5 hours)
4. ✅ Beta testing (10 hours)
**Total: 65-115 hours**

## Next Steps

1. **Choose your approach** (free, subscription, or original)
2. **Start with 10 tracks** for MVP
3. **Update `www/js/asmr-content-database.js`**
4. **Test locally** with `npm run dev`
5. **Push to GitHub** and enable Pages
6. **Test live app**
7. **Add remaining 30 tracks** over time
8. **Submit to Play Store**

## Support

If you need help:
- Check the [Launch Checklist](LAUNCH_CHECKLIST.md)
- Review the [Asset Generation Guide](ASSET_GENERATION_GUIDE.md)
- Contact: support@aiasmr.app
