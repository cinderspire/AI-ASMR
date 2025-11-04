/**
 * Tests for AI ASMR Generator (ai_asmr_generator_1)
 */

const fs = require('fs');
const path = require('path');

describe('AI ASMR Generator Tests', () => {
  let htmlContent;

  beforeAll(() => {
    const filePath = path.join(__dirname, '../ai_asmr_generator_1/code.html');
    htmlContent = fs.readFileSync(filePath, 'utf8');
  });

  test('Should contain generator title', () => {
    expect(htmlContent).toContain('ASMR Galaxy Explorer');
  });

  test('Should have galaxy animation styles', () => {
    expect(htmlContent).toContain('galaxy-container');
    expect(htmlContent).toContain('galaxy-ring');
    expect(htmlContent).toContain('galaxy-star');
    expect(htmlContent).toContain('galaxy-planet');
  });

  test('Should have custom animations', () => {
    expect(htmlContent).toContain('orbit');
    expect(htmlContent).toContain('twinkle');
    expect(htmlContent).toContain('fadeIn');
  });

  test('Should have 3D transform styles', () => {
    expect(htmlContent).toContain('perspective');
    expect(htmlContent).toContain('transform-style: preserve-3d');
  });

  test('Should have exploration message', () => {
    expect(htmlContent).toContain('Explore the Sound Cosmos');
  });

  test('Should have multiple galaxy planets', () => {
    const planetMatches = htmlContent.match(/galaxy-planet/g);
    expect(planetMatches.length).toBeGreaterThanOrEqual(4);
  });

  test('Should have back navigation button', () => {
    expect(htmlContent).toContain('<button');
  });

  test('Should have footer navigation', () => {
    expect(htmlContent).toContain('<footer');
    expect(htmlContent).toContain('<nav');
  });

  test('Should use Inter font family', () => {
    expect(htmlContent).toContain('Inter');
  });

  test('Should have custom color scheme', () => {
    expect(htmlContent).toContain('#8b5cf6'); // Primary purple color
  });
});
