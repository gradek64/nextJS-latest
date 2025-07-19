'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Brands } from '@/lib/common'

interface HeaderProps {
  bundle?: string
  html?: string
  stylesheet?: string
  brand?: Brands
}

const Header = ({ bundle: _bundle, html: _html, stylesheet: _stylesheet, brand: _brand }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/attractions', label: 'Attractions' },
    { href: '/wishlist', label: 'Wishlist' },
    { href: '/customs-demo', label: 'Demo' }
  ]

  return (
    <nav className='nav-header'>
      <div className='nav-container'>
        <div className='nav-flex'>
          <div className='nav-brand'>
            <Link href='/' className='nav-brand-link'>
              Next.js App
            </Link>
          </div>
          <div className='nav-desktop'>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className='nav-link'>
                {link.label}
              </Link>
            ))}
          </div>
          <button className='nav-mobile-button md:ds-hidden' onClick={toggleMenu} aria-label='Toggle menu'>
            <svg className='ds-h-6 ds-w-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              {isMenuOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className='nav-mobile-menu md:ds-hidden'>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className='nav-mobile-link' onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
