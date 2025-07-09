declare module 'customs-components' {
  import { ReactNode, ComponentType } from 'react'

  // Theme types
  export interface Theme {
    colors: {
      primary: string
      secondary: string
      accent: string
      text: string
      background: string
    }
    spacing: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    borderRadius: {
      sm: string
      md: string
      lg: string
    }
  }

  // Responsive prop types
  export type ResponsiveValue<T> =
    | T
    | {
        mobile?: T
        tablet?: T
        desktop?: T
      }

  // Button component props
  export interface ButtonProps {
    variant?: ResponsiveValue<'primary' | 'secondary' | 'accent' | 'outline'>
    size?: ResponsiveValue<'sm' | 'md' | 'lg'>
    disabled?: boolean
    loading?: boolean
    fullWidth?: boolean
    children?: ReactNode
    onClick?: () => void
    customTheme?: Partial<Theme>
    className?: string
  }

  // Theme provider props
  export interface ThemeProviderProps {
    children: ReactNode
    theme?: Partial<Theme>
  }

  // Hook return types
  export interface UseThemeReturn {
    theme: Theme
    setTheme: (theme: Partial<Theme>) => void
  }

  export type Breakpoint = 'mobile' | 'tablet' | 'desktop'

  // Main customs components interface
  export interface CustomsComponents {
    Button: ComponentType<ButtonProps>
    ThemeProvider: ComponentType<ThemeProviderProps>
    useBreakpoint: () => Breakpoint
    useTheme: () => UseThemeReturn
  }

  // Main export
  const Customs: CustomsComponents
  export { Customs }

  // Individual exports (if needed)
  export const Button: ComponentType<ButtonProps>
  export const ThemeProvider: ComponentType<ThemeProviderProps>
  export const useBreakpoint: () => Breakpoint
  export const useTheme: () => UseThemeReturn
}
