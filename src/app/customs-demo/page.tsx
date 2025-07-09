'use client'

import React from 'react'
import { Customs } from 'customs-components'

export default function CustomsExamplePage() {
  return (
    <Customs.ThemeProvider>
      <div className='container mx-auto p-8 space-y-8'>
        <h1 className='text-3xl font-bold mb-8'>Customs Component Library Examples</h1>

        {/* Basic buttons */}
        <section>
          <h2 className='text-2xl font-semibold mb-4'>Basic Buttons</h2>
          <div className='flex gap-4 flex-wrap'>
            <Customs.Button>Default</Customs.Button>
            <Customs.Button variant='secondary'>Secondary</Customs.Button>
            <Customs.Button variant='accent'>Accent</Customs.Button>
            <Customs.Button variant='outline'>Outline</Customs.Button>
          </div>
        </section>

        {/* Different sizes */}
        <section>
          <h2 className='text-2xl font-semibold mb-4'>Button Sizes</h2>
          <div className='flex gap-4 items-center flex-wrap'>
            <Customs.Button size='sm'>Small</Customs.Button>
            <Customs.Button size='md'>Medium</Customs.Button>
            <Customs.Button size='lg'>Large</Customs.Button>
          </div>
        </section>

        {/* Responsive examples */}
        <section>
          <h2 className='text-2xl font-semibold mb-4'>Responsive Examples</h2>
          <div className='space-y-4'>
            <div>
              <p className='mb-2 text-gray-600'>This button changes variant based on screen size:</p>
              <Customs.Button
                variant={{
                  mobile: 'outline',
                  tablet: 'secondary',
                  desktop: 'primary'
                }}
                size={{
                  mobile: 'sm',
                  tablet: 'md',
                  desktop: 'lg'
                }}
              >
                Responsive Button (resize to see changes)
              </Customs.Button>
            </div>

            <div>
              <p className='mb-2 text-gray-600'>This button uses custom theme colors:</p>
              <Customs.Button
                customTheme={{
                  colors: {
                    primary: '#ff6b6b',
                    secondary: '#4ecdc4',
                    accent: '#45b7d1',
                    text: '#ffffff',
                    background: '#2c3e50'
                  }
                }}
              >
                Custom Theme Button
              </Customs.Button>
            </div>
          </div>
        </section>

        {/* States */}
        <section>
          <h2 className='text-2xl font-semibold mb-4'>Button States</h2>
          <div className='flex gap-4 flex-wrap'>
            <Customs.Button disabled>Disabled</Customs.Button>
            <Customs.Button loading>Loading</Customs.Button>
            <Customs.Button fullWidth>Full Width</Customs.Button>
          </div>
        </section>

        {/* Custom theme example */}
        <section>
          <h2 className='text-2xl font-semibold mb-4'>Custom Theme Example</h2>
          <Customs.Button
            customTheme={{
              colors: {
                primary: '#e74c3c',
                secondary: '#3498db',
                accent: '#2ecc71',
                text: '#ffffff',
                background: '#34495e'
              },
              spacing: {
                xs: '0.25rem',
                sm: '0.5rem',
                md: '1rem',
                lg: '1.5rem',
                xl: '2rem'
              },
              borderRadius: {
                sm: '0.25rem',
                md: '1rem',
                lg: '2rem'
              }
            }}
            size='lg'
          >
            Custom Themed Button
          </Customs.Button>
        </section>

        {/* Breakpoint info */}
        <section className='bg-gray-100 p-6 rounded-lg'>
          <h2 className='text-2xl font-semibold mb-4'>Current Breakpoint Info</h2>
          <BreakpointIndicator />
        </section>
      </div>
    </Customs.ThemeProvider>
  )
}

// Component to show current breakpoint
function BreakpointIndicator() {
  const breakpoint = Customs.useBreakpoint()

  return (
    <div className='space-y-2'>
      <p>
        <strong>Current breakpoint:</strong> {breakpoint}
      </p>
      <div className='text-sm text-gray-600'>
        <p>• Mobile: ≤767px</p>
        <p>• Tablet: 768px - 1023px</p>
        <p>• Desktop: ≥1024px</p>
      </div>
      <p className='text-sm'>Resize your browser window to see responsive changes!</p>
    </div>
  )
}
