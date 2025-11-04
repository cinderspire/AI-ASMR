/**
 * Tests for ASMR Player (asmr_player)
 */

const fs = require('fs');
const path = require('path');

describe('ASMR Player Tests', () => {
  let htmlContent;

  beforeAll(() => {
    const filePath = path.join(__dirname, '../asmr_player/code.html');
    htmlContent = fs.readFileSync(filePath, 'utf8');
  });

  test('Should contain player title', () => {
    expect(htmlContent).toContain('Now Playing');
  });

  test('Should have track information', () => {
    expect(htmlContent).toContain('Whispers of the Night');
    expect(htmlContent).toContain('Luna Serenity');
  });

  test('Should have playback controls', () => {
    // Play button
    expect(htmlContent).toContain('viewBox="0 0 256 256"');
    // Should have multiple control buttons (prev, play, next, etc.)
    const svgMatches = htmlContent.match(/<svg/g);
    expect(svgMatches.length).toBeGreaterThan(5);
  });

  test('Should have progress bar', () => {
    expect(htmlContent).toContain('1:17'); // Current time
    expect(htmlContent).toContain('3:51'); // Duration
  });

  test('Should have volume control', () => {
    // Volume icon should be present
    expect(htmlContent).toContain('currentColor');
  });

  test('Should have background video element', () => {
    expect(htmlContent).toContain('<video');
    expect(htmlContent).toContain('autoplay');
    expect(htmlContent).toContain('loop');
  });

  test('Should have visual customization section', () => {
    expect(htmlContent).toContain('Customize Background');
    expect(htmlContent).toContain('Visuals');
  });

  test('Should have bottom navigation', () => {
    expect(htmlContent).toContain('Home');
    expect(htmlContent).toContain('Discover');
    expect(htmlContent).toContain('Favorites');
    expect(htmlContent).toContain('Profile');
  });

  test('Should have album artwork', () => {
    expect(htmlContent).toContain('aspect-square');
    expect(htmlContent).toContain('rounded-xl');
  });
});
