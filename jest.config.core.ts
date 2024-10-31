module.exports = {
    roots: ['<rootDir>/src/core/__tests__/'],
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    testRegex: 'core.test.ts',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleFileExtensions: ['ts','js'],
    testEnvironment: 'jest-environment-jsdom',
    preset: 'ts-jest',
  }