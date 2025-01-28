import './globals.css'
import { StylesManager } from '@sainsburys-tech/nextjs-support'
import { ThemeProvider } from '@sainsburys-tech/theme-provider'
import { Brands } from '../lib/common'
import { Styles } from './styles'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='format-detection' content='telephone=no, date=no, email=no, address=no' />
        <Styles />
      </head>
      <body>
        {/* StylesManager is used for SSRing fable styles */}
        <StylesManager>
          <ThemeProvider brand={Brands.argos}>{children}</ThemeProvider>
        </StylesManager>
      </body>
    </html>
  )
}
