'use client'

import { useState } from 'react'
import Link from 'next/link'

const SimpleBlueHeader = () => {
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
    <nav className='nav-header' style={{ position: 'relative' }}>
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
      </div>
      {isMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999
            }}
            onClick={() => setIsMenuOpen(false)}
          />

          <style
            dangerouslySetInnerHTML={{
              __html: `
              @keyframes slideDown {
                from {
                  opacity: 0;
                  transform: translateY(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `
            }}
          />
          <div
            className='nav-mobile-menu md:ds-hidden'
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: '#2563eb',
              zIndex: 1000,
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              animation: 'slideDown 0.2s ease-out'
            }}
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className='nav-mobile-link' onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </nav>
  )
}

export default SimpleBlueHeader
