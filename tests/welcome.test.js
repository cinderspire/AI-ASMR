/**
 * Tests for Welcome Screen (welcome_to_ai_asmr)
 */

const fs = require('fs');
const path = require('path');

describe('Welcome Screen Tests', () => {
  let htmlContent;

  beforeAll(() => {
    const filePath = path.join(__dirname, '../welcome_to_ai_asmr/code.html');
    htmlContent = fs.readFileSync(filePath, 'utf8');
  });

  test('Should contain welcome screen title', () => {
    expect(htmlContent).toContain('Immersive ASMR');
    expect(htmlContent).toContain('For Your Soul');
  });

  test('Should have proper meta viewport for mobile', () => {
    expect(htmlContent).toContain('width=device-width');
    expect(htmlContent).toContain('initial-scale=1.0');
  });

  test('Should include TailwindCSS', () => {
    expect(htmlContent).toContain('cdn.tailwindcss.com');
  });

  test('Should have primary CTA button', () => {
    expect(htmlContent).toContain('Begin Your Journey');
  });

  test('Should have secondary CTA button', () => {
    expect(htmlContent).toContain('Learn More');
  });

  test('Should have microphone icon SVG', () => {
    expect(htmlContent).toContain('<svg');
    expect(htmlContent).toContain('viewBox="0 0 24 24"');
  });

  test('Should use dark mode', () => {
    expect(htmlContent).toContain('class="dark"');
  });

  test('Should have custom primary color', () => {
    expect(htmlContent).toContain('#9344f0');
  });

  test('Should have gradient background effects', () => {
    expect(htmlContent).toContain('bg-gradient-radial-faded');
  });
});
