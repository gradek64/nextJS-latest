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
  testPathIgnorePatterns: ['/e2e/']
}

export default createJestConfig(customJestConfig)
