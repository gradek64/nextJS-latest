import { defineConfig, devices } from './fixtures/testSetup'

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests/',
  /* fullyParallel makes test more stable cause they run independently */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. When 1 test will be run one after another */
  // Limit the number of workers on CI, use default locally
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'list',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.APP_BASE_URL ?? 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Google-Chrome-Desktop',
      use: { ...devices['Desktop Chrome'] }, // channel has to be there fore headless run ?
      grep: /@desktop/
    },
    {
      name: 'firefox desktop',
      use: { ...devices['Desktop Firefox'] },
      grep: /@desktop/
    },
    {
      name: 'webkit-Safari-Desktop',
      use: { ...devices['Desktop Safari'] },
      grep: /@desktop/
    },
    {
      name: 'Mobile Chromium - pixel5',
      use: { ...devices['Pixel 5'] },
      grep: /@mobile/
    },
    {
      name: 'Mobile Safari - iPhone 13',
      use: { ...devices['iPhone 13'] },
      grep: /@mobile/
    }
  ]
})
