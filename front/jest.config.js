// front/jest.config.js
module.exports = {
  displayName: 'front',
  preset: 'jest-expo',
  testMatch: ['<rootDir>/src/**/*.spec.ts?(x)', '<rootDir>/tests_front/**/*.spec.ts?(x)'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
};
