/** @type {import('jest').Config} */
module.exports = {
  displayName: 'integration-tests',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests_integration/**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: '<rootDir>/back/tsconfig.json' }],
  },
};
