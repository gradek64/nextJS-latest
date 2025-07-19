import './globals.css'
import { Suspense } from 'react'
import { ThemeProvider } from '@sainsburys-tech/theme-provider'
import { Styles } from './styles'
import { Shell } from '@/app/components/shell'
import TailwindBlueHeader from '@/app/components/TailwindBlueHeader'
import { flags } from '@/flags'
import { Flags as FlagTypes } from '@/lib/common'
import { computeFlags } from '@/lib/flags/common'
import StyleRegistry from '@/lib/registry'

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const computedFlags = await computeFlags(flags)
  const brand = computedFlags.brand
  const appShell = computedFlags[FlagTypes.APP_SHELL]

  return (
    <html lang='en'>
      <head>
        <meta name='format-detection' content='telephone=no, date=no, email=no, address=no' />
        <Styles brand={brand} />
        {appShell && (
          <>
            <script src='//www.argos.co.uk/assets/common/vendor/5.0.18/commonvendor-react.min.js'></script>
            <script src='//www.argos.co.uk/assets/common/vendor/5.0.18/commonvendor-superagent.min.js'></script>
            <script src='//www.argos.co.uk/assets/common/vendor/5.0.18/commonvendor-styledComponents.min.js'></script>
          </>
        )}
      </head>
      <body>
        <StyleRegistry>
          <ThemeProvider brand={brand}>
            <TailwindBlueHeader />
            {appShell ? (
              <Shell>
                <Suspense fallback={<div className='ds-h-screen' />}>{children}</Suspense>
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
