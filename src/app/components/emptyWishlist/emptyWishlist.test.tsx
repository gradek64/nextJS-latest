import EmptyWishlist from './emptyWishlist'
import { render, screen } from '@/lib/@testing-library'
import '@testing-library/jest-dom'

describe('EmptyWishlist Component', () => {
  test('renders the heading and description', () => {
    render(<EmptyWishlist isLoggedIn={false} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Save your favourites here.')
    expect(
      screen.getByText('All your items in one spot. The perfect place to find and organise your favourites.')
    ).toBeInTheDocument()
  })

  test('renders Sign in button when user is not logged in', () => {
    render(<EmptyWishlist isLoggedIn={false} />)
    expect(screen.getByText('Sign in')).toBeInTheDocument()
    expect(screen.getByText('Sign in')).toHaveAttribute('href', '/account/login')
  })

  test('does not render Sign in button when user is logged in', () => {
    render(<EmptyWishlist isLoggedIn={true} />)
    expect(screen.queryByText('Sign in')).not.toBeInTheDocument()
  })

  test('renders Start shopping button', () => {
    render(<EmptyWishlist isLoggedIn={false} />)
    expect(screen.getByText('Start shopping')).toBeInTheDocument()
    expect(screen.getByText('Start shopping')).toHaveAttribute('href', '/')
  })
})
