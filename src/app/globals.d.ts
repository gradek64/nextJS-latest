declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    argosHeaderService: { component: any }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ReactDOM: any
  }
  namespace NodeJS {
    interface ProcessEnv {
      OVERRIDE_FLAGS: 'true' | 'false'
      SHELL_ENV: 'development' | 'staging' | 'production'
      APP_BASE_URL: string
    }
  }
}

export {}
