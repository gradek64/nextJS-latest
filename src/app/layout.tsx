import './globals.css'
import { Suspense } from 'react'
import { StylesManager } from '@sainsburys-tech/nextjs-support'
import { ThemeProvider } from '@sainsburys-tech/theme-provider'
import { brand, Brands } from '../lib/common'
import { Styles } from './styles'
import { Shell } from '@/app/components/shell'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='format-detection' content='telephone=no, date=no, email=no, address=no' />
        <Styles brand={brand} />
      </head>
      <body>
        {/* StylesManager is used for SSR fable styles */}
        <StylesManager>
          <ThemeProvider brand={Brands.argos}>
            <Shell>
              <Suspense>{children}</Suspense>
            </Shell>
          </ThemeProvider>
        </StylesManager>
      </body>
    </html>
  )
}
