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
    <nav className='ds-relative ds-bg-blue-600 ds-shadow-lg'>
      <div className='ds-mx-auto ds-max-w-7xl ds-px-4 sm:ds-px-6 lg:ds-px-8'>
        <div className='ds-flex ds-h-16 ds-items-center ds-justify-between'>
          <div className='ds-flex-shrink-0'>
            <Link
              href='/'
              className='ds-text-xl ds-font-bold ds-text-white ds-no-underline ds-transition-colors ds-duration-200 hover:ds-text-blue-100'
            >
              Next.js App
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='ds-ml-10 ds-hidden ds-items-baseline ds-space-x-8 md:ds-flex'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='ds-rounded-md ds-px-3 ds-py-2 ds-text-sm ds-font-medium ds-text-white ds-no-underline ds-transition-all ds-duration-200 hover:ds-bg-blue-700 hover:ds-text-blue-100'
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='md:ds-hidden'>
            <button
              onClick={toggleMenu}
              className='ds-rounded-md ds-p-2 ds-text-white ds-transition-all ds-duration-200 hover:ds-bg-blue-700 hover:ds-text-blue-100'
              aria-label='Toggle menu'
            >
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
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <>
          {/* Very subtle backdrop overlay - using gray instead of black */}
          <div
            className='ds-bg-gray-900 ds-fixed ds-inset-0 ds-z-40 ds-bg-opacity-5 md:ds-hidden'
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile menu panel - ensure full width */}
          <div className='ds-animate-slide-down ds-absolute ds-left-0 ds-right-0 ds-top-full ds-z-50 ds-w-full ds-bg-blue-600 ds-shadow-lg md:ds-hidden'>
            <div className='ds-w-full ds-space-y-1 ds-px-2 ds-pb-3 ds-pt-2'>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='ds-block ds-w-full ds-rounded-md ds-px-3 ds-py-2 ds-text-base ds-font-medium ds-text-white ds-no-underline ds-transition-all ds-duration-200 hover:ds-bg-blue-700 hover:ds-text-blue-100'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Custom animation styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes slide-down {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .ds-animate-slide-down {
            animation: slide-down 0.2s ease-out;
          }
        `
        }}
      />
    </nav>
  )
}

export default SimpleBlueHeader
