#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

console.log('\n================================');
console.log('   Screenshots Generator');
console.log('================================\n');

const screenshotsDir = path.join(__dirname, '../resources/screenshots');
const outputDir = path.join(__dirname, '../play-store/screenshots');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const screenshots = [
  { input: 'screenshot-1-welcome.svg', output: '1-welcome-screen.png', name: 'Welcome Screen' },
  { input: 'screenshot-2-categories.svg', output: '2-categories-browse.png', name: 'Browse & Categories' },
  { input: 'screenshot-3-player.svg', output: '3-player-interface.png', name: 'Player Interface' },
  { input: 'screenshot-4-favorites.svg', output: '4-favorites-library.png', name: 'Favorites Library' }
];

async function generateScreenshots() {
  let successCount = 0;

  for (const screenshot of screenshots) {
    const inputPath = path.join(screenshotsDir, screenshot.input);
    const outputPath = path.join(outputDir, screenshot.output);

    try {
      const info = await sharp(inputPath)
        .resize(1080, 1920, {
          fit: 'contain',
          background: { r: 25, g: 17, b: 33, alpha: 1 }
        })
        .png()
        .toFile(outputPath);

      console.log(`✓ ${screenshot.name}`);
      console.log(`  Size: 1080x1920px`);
      console.log(`  File size: ${(info.size / 1024).toFixed(2)} KB`);
      console.log(`  Saved: ${screenshot.output}\n`);

      successCount++;
    } catch (err) {
      console.error(`✗ Error generating ${screenshot.name}:`, err.message);
    }
  }

  console.log('================================');
  console.log(`✓ Generated ${successCount}/${screenshots.length} screenshots`);
  console.log('================================\n');
  console.log(`Output directory: ${outputDir}\n`);
}

generateScreenshots();
