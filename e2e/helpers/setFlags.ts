import { Page } from '../fixtures/testSetup'

export const flags = async <T extends Record<string, unknown>>(page: Page, flags: T) => {
  const flagQuery = encodeURIComponent(JSON.stringify(flags))
  const flagUrl = `/set-flags?__flags=${flagQuery}`
  if (page.url() === 'about:blank') {
    return await page.goto(flagUrl)
  }
  return await page.evaluate((url) => fetch(`${location.origin}/${url}`), flagUrl)
}
