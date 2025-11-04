// Test setup file
require('@testing-library/jest-dom');

// Mock external resources
global.fetch = jest.fn();

// Mock TailwindCSS
global.tailwind = {
  config: {}
};
