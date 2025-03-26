import { expect, test } from '../fixtures/testSetup'
import { PageSelector } from '../helpers/wishlistPage'

test.describe('navigates to wishlist page @desktop @mobile', () => {
  test.skip('should have header with title', async ({ wishlistPage }) => {
    const { heading1 } = new PageSelector(wishlistPage)

    await expect(heading1).toHaveText('Your Wishlist')
  })
})
