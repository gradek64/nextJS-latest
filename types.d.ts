declare module '@sainsburys-tech/boltui-vendor'
declare module '@sainsburys-tech/bolt-footer'
declare module '@sainsburys-tech/design-tokens/dist/argos/css/tokens.css'
declare module '@sainsburys-tech/design-tokens/dist/habitat/css/tokens.css'
declare module '@sainsburys-tech/design-tokens/dist/tu/css/tokens.css'
declare module '@sainsburys-tech/boltui-style/dist/bolt-argos.min.css'
declare module '@sainsburys-tech/boltui-style/dist/bolt-habitat.min.css'
declare module '@sainsburys-tech/boltui-style/dist/bolt-tu.min.css'

declare module '@sainsburys-tech/bolt' {
  import { DefaultTheme } from 'styled-components'
  export const Themes: {
    HabitatTheme: DefaultTheme
    ArgosTheme: DefaultTheme
  }
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
