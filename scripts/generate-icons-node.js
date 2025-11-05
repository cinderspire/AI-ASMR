#!/usr/bin/env node

/**
 * AI ASMR - Icon Generator
 * Generates PNG icons from SVG source
 *
 * Usage: node scripts/generate-icons-node.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
    sharp = require('sharp');
    console.log('✓ Sharp library found\n');
} catch (err) {
    console.log('⚠️  Sharp not installed. Installing now...\n');
    console.log('Run: npm install sharp --save-dev\n');
    console.log('Or use alternative method: ./scripts/setup-assets.sh\n');
    process.exit(1);
}

// Configuration
const config = {
    inputSVG: path.join(__dirname, '..', 'resources', 'icon.svg'),
    outputDir: path.join(__dirname, '..', 'www', 'assets', 'icons'),
    sizes: [72, 96, 128, 144, 152, 192, 384, 512]
};

// Colors for output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    green: '\x1b[32m',
    blue: '\x1b[34m',
    yellow: '\x1b[33m',
    red: '\x1b[31m'
};

console.log(`${colors.blue}${colors.bright}================================${colors.reset}`);
console.log(`${colors.blue}${colors.bright}   AI ASMR - Icon Generator${colors.reset}`);
console.log(`${colors.blue}${colors.bright}================================${colors.reset}\n`);

// Check if source SVG exists
if (!fs.existsSync(config.inputSVG)) {
    console.error(`${colors.red}✗ Source SVG not found: ${config.inputSVG}${colors.reset}`);
    console.log('\nPlease ensure icon.svg exists in the resources directory.\n');
    process.exit(1);
}

console.log(`${colors.green}✓ Source SVG found: resources/icon.svg${colors.reset}\n`);

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
    fs.mkdirSync(config.outputDir, { recursive: true });
    console.log(`${colors.green}✓ Created output directory${colors.reset}\n`);
}

// Generate icons
console.log(`${colors.yellow}Generating PNG icons...${colors.reset}\n`);

let generated = 0;
let failed = 0;

const generateIcon = async (size) => {
    const outputFile = path.join(config.outputDir, `icon-${size}.png`);

    try {
        await sharp(config.inputSVG)
            .resize(size, size, {
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 }
            })
            .png()
            .toFile(outputFile);

        const stats = fs.statSync(outputFile);
        const sizeKB = (stats.size / 1024).toFixed(2);

        console.log(`${colors.green}✓${colors.reset} icon-${size}.png ${colors.blue}(${sizeKB} KB)${colors.reset}`);
        generated++;
    } catch (err) {
        console.error(`${colors.red}✗ Failed to generate icon-${size}.png${colors.reset}`);
        console.error(`  Error: ${err.message}`);
        failed++;
    }
};

// Generate all icons sequentially
(async () => {
    for (const size of config.sizes) {
        await generateIcon(size);
    }

    console.log(`\n${colors.blue}================================${colors.reset}`);
    console.log(`${colors.bright}Summary:${colors.reset}`);
    console.log(`  ${colors.green}✓ Generated: ${generated}${colors.reset}`);
    if (failed > 0) {
        console.log(`  ${colors.red}✗ Failed: ${failed}${colors.reset}`);
    }
    console.log(`${colors.blue}================================${colors.reset}\n`);

    if (generated === config.sizes.length) {
        console.log(`${colors.green}${colors.bright}✓ All icons generated successfully!${colors.reset}\n`);
        console.log(`Output directory: ${config.outputDir}\n`);
    } else {
        console.log(`${colors.yellow}⚠️  Some icons failed to generate${colors.reset}\n`);
        process.exit(1);
    }
})();
