// front/jest.config.js
module.exports = {
  displayName: 'front',
  preset: 'jest-expo',
  testMatch: ['<rootDir>/src/**/*.spec.ts?(x)', '<rootDir>/tests_front/**/*.spec.ts?(x)'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*)',
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'  // Mock de AsyncStorage 
  ],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};