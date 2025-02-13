import './globals.css'
import { Suspense } from 'react'
import { ThemeProvider } from '@sainsburys-tech/theme-provider'
import { Styles } from './styles'
import { Shell } from '@/app/components/shell'
import { flags } from '@/flags'
import { computeFlags } from '@/lib/flags/common'
import StyleRegistry from '@/lib/registry'

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const computedFlags = await computeFlags(flags)
  const brand = computedFlags.brand
  return (
    <html lang='en'>
      <head>
        <meta name='format-detection' content='telephone=no, date=no, email=no, address=no' />
        <Styles brand={brand} />
      </head>
      <body>
        <StyleRegistry>
          <ThemeProvider brand={brand}>
            <Shell>
              <Suspense>{children}</Suspense>
            </Shell>
          </ThemeProvider>
        </StyleRegistry>
      </body>
    </html>
  )
}
