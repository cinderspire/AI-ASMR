#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

console.log('\n================================');
console.log('   Feature Graphic Generator');
console.log('================================\n');

const inputSVG = path.join(__dirname, '../resources/feature-graphic.svg');
const outputDir = path.join(__dirname, '../play-store/feature-graphic');
const outputFile = path.join(outputDir, 'feature-graphic.png');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Convert SVG to PNG
sharp(inputSVG)
  .resize(1024, 500, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 }
  })
  .png()
  .toFile(outputFile)
  .then(info => {
    console.log('✓ Feature graphic generated successfully!');
    console.log(`  Size: 1024x500px`);
    console.log(`  File size: ${(info.size / 1024).toFixed(2)} KB`);
    console.log(`  Location: ${outputFile}\n`);
  })
  .catch(err => {
    console.error('✗ Error generating feature graphic:', err);
    process.exit(1);
  });
