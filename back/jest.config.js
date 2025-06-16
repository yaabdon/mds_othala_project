/** @type {import('jest').Config} */
const { join } = require('path');

const root = join(__dirname);

module.exports = {
  displayName: 'back',
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: root,
  testMatch: ['<rootDir>/tests_back/**/*.spec.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }],
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  modulePaths: ['<rootDir>/src'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
