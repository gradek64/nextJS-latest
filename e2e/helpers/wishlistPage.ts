import type { Locator, Page } from '../fixtures/testSetup'

export class PageSelector {
  public readonly heading1: Locator

  constructor(public readonly page: Page) {
    this.heading1 = page.getByRole('heading', { level: 1 })
  }

  setTestCookie = async (name: string, value: string) => {
    const cookies = await this.page.context().cookies()
    const cookiesToKeep = cookies.filter((cookie) => cookie.name !== name)

    await this.page.context().clearCookies()
    await this.page.context().addCookies([
      ...cookiesToKeep,
      {
        name,
        value,
        url: this.page.url()
      }
    ])

    await this.page.reload()
  }
}
