module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleFileExtensions: ['ts','js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
}