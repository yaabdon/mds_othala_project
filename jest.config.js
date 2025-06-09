/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // garante usar seu tsconfig
    },
  },
  transformIgnorePatterns: ['/node_modules/'],
};