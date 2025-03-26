import * as ReactDOM from 'react-dom'
import en from '../../messages/en.json'
import type * as React from 'react'

declare global {
  interface Window {
    argosHeaderService: { component: React.ElementType }
    ReactDOM: typeof ReactDOM
    digitalData: DigitalData
  }
  namespace NodeJS {
    interface ProcessEnv {
      OVERRIDE_FLAGS: 'true' | 'false'
      SHELL_ENV: 'development' | 'staging' | 'production'
      APP_BASE_URL: string
    }
  }
  type IntlMessages = typeof en
}
