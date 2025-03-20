import './globals.css'
import { Suspense } from 'react'
import { CommonVendorPreLoadScripts, CommonVendorScripts } from '@sainsburys-tech/boltui-vendor'
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
  const appShell = computedFlags['app-shell']

  return (
    <html lang='en'>
      <head>
        <meta name='format-detection' content='telephone=no, date=no, email=no, address=no' />
        <Styles brand={brand} />
      </head>
      {appShell && <CommonVendorPreLoadScripts react superagent styledComponents />}
      <body>
        {appShell && <CommonVendorScripts react superagent styledComponents />}
        <StyleRegistry>
          <ThemeProvider brand={brand}>
            {appShell ? (
              <Shell>
                <Suspense>{children}</Suspense>
              </Shell>
            ) : (
              <Suspense>{children}</Suspense>
            )}
          </ThemeProvider>
        </StyleRegistry>
      </body>
    </html>
  )
}
