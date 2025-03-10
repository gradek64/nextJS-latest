import { render, screen, userEvent } from '@/lib/@testing-library'
import '@testing-library/jest-dom'
import ExampleProductCard from './exampleProductCard'

describe('ExampleProductCard', () => {
  it('renders the product card with title and price', () => {
    render(<ExampleProductCard />)

    expect(screen.getByText('Product Card Title')).toBeInTheDocument()
    expect(screen.getByText('£1.00')).toBeInTheDocument()

    //buttons
    const addToBasketBtn = screen.getByRole('link', { name: 'Add to basket' })
    expect(addToBasketBtn).toBeInTheDocument()
    expect(addToBasketBtn).toHaveAttribute('href', 'http://www.example.com')

    const addToFavouritesBtn = screen.getByText('Add to favourites')
    expect(addToFavouritesBtn).toBeInTheDocument()
  })

  it('triggers button click events', async () => {
    const user = userEvent.setup()
    render(<ExampleProductCard />)

    // Mock function to check if click is triggered
    const onClickMock = jest.fn()

    // Click the "Add to favourites" button
    const addToFavouritesBtn = screen.getByText('Add to favourites')
    addToFavouritesBtn.onclick = onClickMock
    await user.click(addToFavouritesBtn)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
