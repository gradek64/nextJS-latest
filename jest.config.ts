import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  resetMocks: true,
  resetModules: true,
  errorOnDeprecated: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!lowdb)/', '/node_modules/(?!jose)/', '/node_modules/(?!steno)/'],
  testPathIgnorePatterns: [
    '<rootDir>/e2e/',
    '<rootDir>/local-packages/',
    '<rootDir>/node_modules/',
    '<rootDir>/.yalc/'
  ],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.(ts|tsx|js)', '<rootDir>/src/**/*.(test|spec).(ts|tsx|js)'],
  modulePathIgnorePatterns: ['<rootDir>/local-packages/', '<rootDir>/e2e/', '<rootDir>/.yalc/']
}

export default createJestConfig(customJestConfig)
