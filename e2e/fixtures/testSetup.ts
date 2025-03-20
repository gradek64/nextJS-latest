/* eslint-disable no-restricted-imports */
import { test as base, Browser, Page } from '@playwright/test'
import { flags } from '../helpers/setFlags'
import { PAGE_URL_WISHLIST } from '../support/constants'
import { ComputedFlags } from '@/lib/flags/common'
import type { Flags } from '@/flags'

const defaultFlags = {
  'app-shell': false
}

type FlagMap = Partial<ComputedFlags<Flags>>
type FlagFunc = (flagMap: FlagMap) => ReturnType<typeof flags>

type PageExtended = Page & {
  flags?: FlagFunc
}
export const test = base.extend<{ setup: PageExtended; wishlistPage: PageExtended }>({
  setup: [
    async ({ browser }: { browser: Browser }, use: (page: PageExtended) => Promise<void>) => {
      // Create a fresh, isolated browser context for each test
      const context = await browser.newContext()
      const page = await context.newPage()

      // set flags
      await flags<FlagMap>(page, defaultFlags)
      // use setup
      await use(page)
      // close page
      await context.close()
    },
    { auto: true }
  ],
  wishlistPage: async ({ setup }, use: (page: PageExtended) => Promise<void>) => {
    await setup.goto(PAGE_URL_WISHLIST, { waitUntil: 'domcontentloaded' })
    await use(setup)
  }
})

export * from '@playwright/test'
